import { Section, ServiceGrid, getBrandColors, type Service } from '@shared/ui';

const brand = 'ibms';
const colors = getBrandColors(brand);

const services: Service[] = [
  {
    title: 'Construction Management',
    description: 'Comprehensive oversight of construction projects from initial planning through final completion. We coordinate all aspects of the project, manage stakeholders, and ensure quality standards are met throughout the construction lifecycle.',
  },
  {
    title: 'General Contracting',
    description: 'Full-service general contracting capabilities with a focus on delivering projects on time and within budget. We manage subcontractors, coordinate schedules, and ensure seamless project execution.',
  },
  {
    title: 'Project Oversight',
    description: 'Dedicated project oversight to maintain quality standards, coordinate multiple stakeholders, and ensure successful project delivery. Our experienced team provides continuous monitoring and proactive problem-solving.',
  },
  {
    title: 'Safety & Compliance',
    description: 'Rigorous safety protocols and comprehensive compliance management to protect workers, meet all regulatory requirements, and maintain the highest safety standards on every project site.',
  },
  {
    title: 'Budget & Schedule Control',
    description: 'Meticulous budget management and schedule coordination to deliver projects efficiently and cost-effectively. We provide detailed cost tracking, variance analysis, and schedule optimization.',
  },
  {
    title: 'Quality Assurance',
    description: 'Systematic quality assurance processes to ensure all work meets or exceeds specifications and industry standards. We conduct regular inspections and maintain detailed quality documentation.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section brand={brand} className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.text }}>
            Core Competencies
          </h1>
          <p className="text-xl" style={{ color: colors.textLight }}>
            Comprehensive construction management services delivered with veteran-led discipline and precision.
          </p>
        </div>

        <ServiceGrid brand={brand} services={services} columns={3} />

        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-lg" style={{ backgroundColor: colors.surface }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text }}>
            Why Choose Innovation Building Management?
          </h2>
          <ul className="space-y-3" style={{ color: colors.textLight }}>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: colors.primary }}>✓</span>
              <span>Veteran-led team with proven track record of successful project delivery</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: colors.primary }}>✓</span>
              <span>Comprehensive project oversight ensuring quality and compliance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: colors.primary }}>✓</span>
              <span>Meticulous budget and schedule management</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: colors.primary }}>✓</span>
              <span>Strong safety culture and regulatory compliance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3" style={{ color: colors.primary }}>✓</span>
              <span>Service Disabled Veteran-Owned Small Business (SDVOSB) certified</span>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}



