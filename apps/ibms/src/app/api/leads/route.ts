import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { LeadBusiness, LeadSource, leadRepository, classifyLead } from '@shared/core';

// Zod schema for lead validation
const leadSchema = z.object({
  business: z.enum(['paynepros', 'ibms']),
  source: z.enum(['website', 'whatsapp', 'instagram', 'facebook', 'sms', 'email']),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format').optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  serviceInterest: z.string().optional(),
  meta: z.record(z.any()).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate incoming data with Zod
    const validationResult = leadSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // Ensure at least email or phone is provided
    if (!validatedData.email && !validatedData.phone) {
      return NextResponse.json(
        {
          success: false,
          error: 'Either email or phone must be provided',
        },
        { status: 400 }
      );
    }

    // Create Lead object
    const lead = await leadRepository.create({
      business: validatedData.business,
      source: validatedData.source,
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      message: validatedData.message,
      serviceInterest: validatedData.serviceInterest,
      meta: validatedData.meta,
    });

    // Send lead to OpenAI Pulse webhook
    const pulseWebhookUrl = process.env.PULSE_WEBHOOK_URL;
    if (pulseWebhookUrl) {
      try {
        await fetch(pulseWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            business: lead.business,
            source: lead.source,
            message: lead.message,
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            company: lead.company,
            serviceInterest: lead.serviceInterest,
            meta: lead.meta,
          }),
        });
      } catch (webhookError) {
        console.error('Error sending to Pulse webhook:', webhookError);
        // Continue processing even if webhook fails
      }
    }

    // Classify the lead
    const classification = await classifyLead(lead);

    // Return success response with classification summary
    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        data: {
          id: lead.id,
          business: lead.business,
          source: lead.source,
        },
        classification: {
          probableService: classification.probableService,
          urgency: classification.urgency,
          suggestedNextAction: classification.suggestedNextAction,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
