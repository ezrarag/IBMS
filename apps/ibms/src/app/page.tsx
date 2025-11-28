import {
  Hero,
  ServiceGrid,
  ProcessSteps,
  SDVOSBBadge,
  Button,
  Section,
  getBrandColors,
  type Service,
  type ProcessStep,
} from '@shared/ui';
import Link from 'next/link';

const brand = 'ibms';
const colors = getBrandColors(brand);

const services: Service[] = [
  {
    title: 'Construction Management',
    description: 'Comprehensive oversight of construction projects from planning through completion, ensuring quality and efficiency.',
  },
  {
    title: 'General Contracting',
    description: 'Full-service general contracting with a focus on delivering projects on time and within budget.',
  },
  {
    title: 'Project Oversight',
    description: 'Dedicated project oversight to maintain standards, coordinate stakeholders, and ensure successful delivery.',
  },
  {
    title: 'Safety & Compliance',
    description: 'Rigorous safety protocols and compliance management to protect workers and meet all regulatory requirements.',
  },
  {
    title: 'Budget & Schedule Control',
    description: 'Meticulous budget management and schedule coordination to deliver projects efficiently and cost-effectively.',
  },
];

const processSteps: ProcessStep[] = [
  {
    title: 'Plan',
    description: 'Comprehensive planning and project scoping to establish clear objectives, timelines, and budgets.',
  },
  {
    title: 'Mobilize',
    description: 'Strategic mobilization of resources, teams, and materials to ensure a strong project start.',
  },
  {
    title: 'Execute',
    description: 'Dedicated execution with continuous oversight, quality control, and stakeholder coordination.',
  },
  {
    title: 'Closeout',
    description: 'Thorough project closeout with documentation, final inspections, and client handover.',
  },
];

const differentiators = [
  'On-time, on-budget delivery',
  'Veteran-led discipline',
  'Proven track record',
  'Comprehensive project oversight',
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        brand={brand}
        title="Innovation Building Management"
        subtitle="Service Disabled Veteran-Owned Construction Management Excellence"
        backgroundImage="/api/placeholder/1920/1080"
      >
        <div className="flex flex-col items-center gap-6">
          <SDVOSBBadge brand={brand} />
          <Link href="/contact">
            <Button brand={brand} size="lg">
              Request a Project Consultation
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Credibility Section */}
      <Section brand={brand} className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: colors.text }}>
            Trusted Construction Management Partner
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.textLight }}>
            Innovation Building Management, LLC is a service disabled veteran-owned small business (SDVOSB) 
            dedicated to delivering exceptional construction management services. Our veteran-led team brings 
            discipline, precision, and unwavering commitment to every project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg"
                style={{
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <span className="text-sm font-medium" style={{ color: colors.text }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section brand={brand} title="Core Competencies" subtitle="Comprehensive construction management services">
        <ServiceGrid brand={brand} services={services} columns={3} />
      </Section>

      {/* Process Steps */}
      <Section
        brand={brand}
        title="How We Deliver"
        subtitle="A proven project lifecycle approach"
        backgroundColor="surface"
      >
        <ProcessSteps brand={brand} steps={processSteps} orientation="horizontal" />
      </Section>

      {/* CTA Section */}
      <Section brand={brand} backgroundColor="primary" className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how Innovation Building Management can help deliver your construction project 
            on time and on budget.
          </p>
          <Link href="/contact">
            <Button brand={brand} size="lg" variant="secondary">
              Request a Project Consultation
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}


