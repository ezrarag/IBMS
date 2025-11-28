'use client';

import React, { useState } from 'react';
import { Brand, getBrandColors } from '../brand-kit';

interface ContactFormProps {
  brand: Brand;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectLocation?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
  business: string;
  source: 'website' | 'whatsapp' | 'instagram' | 'facebook' | 'sms' | 'email';
}

export function ContactForm({ brand, onSubmit, className = '' }: ContactFormProps) {
  const colors = getBrandColors(brand);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectLocation: '',
    budgetRange: '',
    timeline: '',
    message: '',
    business: brand,
    source: 'website', // Default to website for web forms
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [classificationMessage, setClassificationMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare data for API - map form fields to Lead structure
      const meta: Record<string, any> = {};
      if (formData.projectLocation) meta.projectLocation = formData.projectLocation;
      if (formData.budgetRange) meta.budgetRange = formData.budgetRange;
      if (formData.timeline) meta.timeline = formData.timeline;

      const leadData = {
        business: formData.business,
        source: formData.source,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message || 'No message provided',
        ...(Object.keys(meta).length > 0 && { meta }),
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus('success');
        
        // Set classification message if available
        if (result.classification) {
          const { probableService, suggestedNextAction } = result.classification;
          let message = `We've received your request`;
          if (probableService) {
            message += ` and categorized it as ${probableService}`;
          }
          message += `. ${suggestedNextAction}.`;
          setClassificationMessage(message);
        } else {
          setClassificationMessage(null);
        }
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectLocation: '',
          budgetRange: '',
          timeline: '',
          message: '',
          business: brand,
          source: 'website',
        });
        if (onSubmit) {
          onSubmit(formData);
        }
      } else {
        setSubmitStatus('error');
        setClassificationMessage(null);
      }
    } catch (error) {
      setSubmitStatus('error');
      setClassificationMessage(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = colors.primary;
    e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = colors.border;
    e.target.style.boxShadow = 'none';
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.text,
            }}
            onFocus={(e) => {
              e.target.style.borderColor = colors.primary;
              e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = colors.border;
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.text,
            }}
            onFocus={(e) => {
              e.target.style.borderColor = colors.primary;
              e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = colors.border;
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.text,
            }}
            onFocus={(e) => {
              e.target.style.borderColor = colors.primary;
              e.target.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = colors.border;
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.text,
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <label htmlFor="projectLocation" className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
            Project Location
          </label>
          <input
            type="text"
            id="projectLocation"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.text,
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
            Approximate Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.text,
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Select range</option>
            <option value="under-100k">Under $100K</option>
            <option value="100k-500k">$100K - $500K</option>
            <option value="500k-1m">$500K - $1M</option>
            <option value="1m-5m">$1M - $5M</option>
            <option value="5m-plus">$5M+</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
            style={{
              backgroundColor: colors.background,
              borderColor: colors.border,
              color: colors.text,
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="12-plus-months">12+ months</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: colors.text }}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
          style={{
            backgroundColor: colors.background,
            borderColor: colors.border,
            color: colors.text,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 rounded-lg bg-green-50 text-green-800">
          <p className="font-semibold mb-1">Thank you! Your message has been sent successfully.</p>
          {classificationMessage && (
            <p className="text-sm mt-2">{classificationMessage}</p>
          )}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 rounded-lg bg-red-50 text-red-800">
          There was an error submitting your message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 px-8 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: colors.primary }}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

