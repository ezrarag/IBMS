import { Section, ContactForm, getBrandColors } from '@shared/ui';

const brand = 'ibms';
const colors = getBrandColors(brand);

export default function ContactPage() {
  return (
    <>
      <Section brand={brand} className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.text }}>
              Contact Us
            </h1>
            <p className="text-xl" style={{ color: colors.textLight }}>
              Request a project consultation and let's discuss how Innovation Building Management can help 
              deliver your construction project on time and on budget.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ContactForm brand={brand} />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                Project Consultation
              </h3>
              <p style={{ color: colors.textLight }}>
                Fill out the form above to request a consultation. We'll review your project details and 
                get back to you promptly to discuss how we can help.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: colors.surface }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                What to Expect
              </h3>
              <p style={{ color: colors.textLight }}>
                After submitting your information, our team will review your project requirements and contact 
                you within 24-48 hours to schedule a detailed discussion about your construction management needs.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


