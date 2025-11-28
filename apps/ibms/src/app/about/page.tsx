import { Section, SDVOSBBadge, getBrandColors } from '@shared/ui';

const brand = 'ibms';
const colors = getBrandColors(brand);

export default function AboutPage() {
  return (
    <>
      <Section brand={brand} className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <SDVOSBBadge brand={brand} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.text }}>
            About Innovation Building Management
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: colors.textLight }}>
            <p className="text-xl mb-6">
              Innovation Building Management, LLC is a service disabled veteran-owned small business (SDVOSB) 
              dedicated to excellence in construction management and related services.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: colors.text }}>
              Our Story
            </h2>
            
            <p className="mb-6">
              Founded with a commitment to integrity, discipline, and excellence, Innovation Building Management 
              brings military precision and veteran leadership to the construction industry. Our service disabled 
              veteran-owned status reflects our dedication to serving our clients and communities with the highest 
              standards of professionalism.
            </p>

            <p className="mb-6">
              We understand that successful construction projects require meticulous planning, rigorous oversight, 
              and unwavering attention to detail. Our veteran-led team applies the same principles of discipline, 
              accountability, and mission-focused execution that define military service to every project we manage.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: colors.text }}>
              SDVOSB Certification
            </h2>
            
            <p className="mb-6">
              As a Service Disabled Veteran-Owned Small Business, we are proud to contribute to federal contracting 
              opportunities while delivering exceptional value to our clients. Our SDVOSB status represents our 
              commitment to excellence and our dedication to supporting veteran entrepreneurship.
            </p>

            <p className="mb-6">
              This certification enables us to participate in federal contracting programs designed to support 
              service-disabled veteran-owned businesses, while ensuring we meet the highest standards of quality 
              and professionalism in all our work.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: colors.text }}>
              Our Values
            </h2>
            
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li>
                <strong style={{ color: colors.text }}>Integrity:</strong> We conduct business with honesty, 
                transparency, and ethical practices in all our interactions.
              </li>
              <li>
                <strong style={{ color: colors.text }}>Discipline:</strong> Our veteran-led approach ensures 
                consistent execution, attention to detail, and adherence to schedules and budgets.
              </li>
              <li>
                <strong style={{ color: colors.text }}>Excellence:</strong> We strive for the highest quality 
                in every project, exceeding expectations and delivering superior results.
              </li>
              <li>
                <strong style={{ color: colors.text }}>Accountability:</strong> We take full responsibility for 
                our work and maintain clear communication throughout every project phase.
              </li>
              <li>
                <strong style={{ color: colors.text }}>Service:</strong> We are committed to serving our clients, 
                communities, and the construction industry with dedication and professionalism.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}


