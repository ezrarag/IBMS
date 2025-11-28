import { Lead } from '../types/lead';

/**
 * Simple in-memory repository for leads.
 * In production, this would be replaced with a database (Prisma/Supabase/etc.)
 */
class LeadRepository {
  private leads: Lead[] = [];

  async create(lead: Omit<Lead, 'id' | 'createdAt'>): Promise<Lead> {
    const newLead: Lead = {
      ...lead,
      id: `lead-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };

    this.leads.push(newLead);
    return newLead;
  }

  async findById(id: string): Promise<Lead | null> {
    return this.leads.find((lead) => lead.id === id) || null;
  }

  async findAll(): Promise<Lead[]> {
    return [...this.leads];
  }

  async findByBusiness(business: Lead['business']): Promise<Lead[]> {
    return this.leads.filter((lead) => lead.business === business);
  }
}

// Singleton instance
export const leadRepository = new LeadRepository();


