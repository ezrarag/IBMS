import { Section, ProjectGrid, getBrandColors, type Project } from '@shared/ui';

const brand = 'ibms';
const colors = getBrandColors(brand);

// Placeholder projects - in a real app, these would come from a CMS or database
const projects: Project[] = [
  {
    title: 'Commercial Office Complex',
    description: 'Multi-phase construction management for a 150,000 sq ft commercial office development, delivered on schedule and within budget.',
    category: 'Commercial',
  },
  {
    title: 'Federal Facility Renovation',
    description: 'Comprehensive renovation and modernization of a federal facility, ensuring compliance with all regulations and standards.',
    category: 'Federal',
  },
  {
    title: 'Healthcare Facility Expansion',
    description: 'Construction management for a major healthcare facility expansion, coordinating multiple stakeholders and maintaining operational continuity.',
    category: 'Healthcare',
  },
  {
    title: 'Educational Campus Project',
    description: 'New construction and renovation project for an educational campus, managing complex scheduling and multiple building phases.',
    category: 'Education',
  },
  {
    title: 'Infrastructure Improvement',
    description: 'Large-scale infrastructure improvement project with rigorous safety protocols and schedule management.',
    category: 'Infrastructure',
  },
  {
    title: 'Mixed-Use Development',
    description: 'Comprehensive construction management for a mixed-use development combining residential, commercial, and retail spaces.',
    category: 'Mixed-Use',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Section brand={brand} className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.text }}>
            Example Projects
          </h1>
          <p className="text-xl" style={{ color: colors.textLight }}>
            A selection of projects showcasing our construction management expertise and successful delivery track record.
          </p>
        </div>

        <ProjectGrid brand={brand} projects={projects} />

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-lg mb-6" style={{ color: colors.textLight }}>
            Interested in learning more about our project experience?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: colors.primary }}
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
}


