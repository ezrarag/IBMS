import { Lead } from '../types/lead';

export interface LeadClassification {
  probableService?: string;
  urgency: 'low' | 'medium' | 'high';
  suggestedNextAction: string;
}

/**
 * Classifies a lead using OpenAI/Pulse API.
 * This is a placeholder that will be wired to Pulse later.
 * 
 * @param lead - The lead to classify
 * @returns Classification results
 */
export async function classifyLead(lead: Lead): Promise<LeadClassification> {
  // Placeholder OpenAI endpoint - will be wired to Pulse later
  const openAiEndpoint = process.env.OPENAI_CLASSIFICATION_ENDPOINT || 'https://api.openai.com/v1/chat/completions';
  
  try {
    // For now, return a simple classification based on message content
    // In production, this would call the actual OpenAI/Pulse API
    
    const message = lead.message.toLowerCase();
    const urgencyKeywords = {
      high: ['urgent', 'asap', 'immediately', 'emergency', 'critical'],
      medium: ['soon', 'quickly', 'important', 'priority'],
    };

    let urgency: 'low' | 'medium' | 'high' = 'low';
    if (urgencyKeywords.high.some((keyword) => message.includes(keyword))) {
      urgency = 'high';
    } else if (urgencyKeywords.medium.some((keyword) => message.includes(keyword))) {
      urgency = 'medium';
    }

    // Simple service detection based on keywords
    let probableService: string | undefined;
    const serviceKeywords: Record<string, string[]> = {
      'Construction Management': ['construction', 'project', 'build', 'renovation'],
      'Consulting': ['consult', 'advice', 'guidance', 'help'],
      'Planning': ['plan', 'design', 'strategy'],
    };

    for (const [service, keywords] of Object.entries(serviceKeywords)) {
      if (keywords.some((keyword) => message.includes(keyword))) {
        probableService = service;
        break;
      }
    }

    const suggestedNextAction = urgency === 'high' 
      ? 'Contact within 1 hour'
      : urgency === 'medium'
      ? 'Contact within 4 hours'
      : 'Contact within 24 hours';

    return {
      probableService,
      urgency,
      suggestedNextAction,
    };
  } catch (error) {
    console.error('Error classifying lead:', error);
    // Return default classification on error
    return {
      urgency: 'medium',
      suggestedNextAction: 'Contact within 24 hours',
    };
  }
}


