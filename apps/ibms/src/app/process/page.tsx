import { Section, ProcessSteps, getBrandColors, type ProcessStep } from '@shared/ui';

const brand = 'ibms';
const colors = getBrandColors(brand);

const processSteps: ProcessStep[] = [
  {
    title: 'Plan',
    description: 'We begin with comprehensive planning and project scoping. This phase includes detailed analysis of project requirements, stakeholder identification, budget development, schedule creation, and risk assessment. We establish clear objectives, define success metrics, and create a solid foundation for project execution.',
  },
  {
    title: 'Mobilize',
    description: 'Strategic mobilization ensures all resources are in place for a strong project start. We coordinate team assembly, secure necessary permits and approvals, establish site logistics, procure materials, and set up communication protocols. Our mobilization process minimizes delays and sets the stage for efficient execution.',
  },
  {
    title: 'Execute',
    description: 'During execution, we provide dedicated oversight with continuous monitoring, quality control, and stakeholder coordination. We maintain rigorous schedule adherence, budget management, and safety compliance. Regular progress reporting and proactive problem-solving ensure projects stay on track and meet quality standards.',
  },
  {
    title: 'Closeout',
    description: 'Thorough project closeout includes comprehensive documentation, final inspections, punch list completion, and client handover. We ensure all deliverables are met, warranties are transferred, and as-built documentation is complete. Our closeout process ensures smooth transition and client satisfaction.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <Section brand={brand} className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.text }}>
            How We Deliver
          </h1>
          <p className="text-xl" style={{ color: colors.textLight }}>
            A proven project lifecycle approach that ensures successful delivery from planning through closeout.
          </p>
        </div>

        <ProcessSteps brand={brand} steps={processSteps} orientation="vertical" />

        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                Continuous Communication
              </h3>
              <p style={{ color: colors.textLight }}>
                We maintain open, transparent communication with all stakeholders throughout the project lifecycle, 
                ensuring everyone stays informed and aligned.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                Quality Focus
              </h3>
              <p style={{ color: colors.textLight }}>
                Quality is built into every phase of our process, with regular inspections, testing, and verification 
                to ensure standards are met or exceeded.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                Risk Management
              </h3>
              <p style={{ color: colors.textLight }}>
                Proactive risk identification and mitigation strategies help prevent issues before they impact 
                schedule or budget.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                Veteran Discipline
              </h3>
              <p style={{ color: colors.textLight }}>
                Our veteran-led approach brings military precision, accountability, and mission-focused execution 
                to every project.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}



