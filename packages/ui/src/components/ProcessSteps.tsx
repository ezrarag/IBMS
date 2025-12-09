import React from 'react';
import { Brand, getBrandColors } from '../brand-kit';

export interface ProcessStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessStepsProps {
  brand: Brand;
  steps: ProcessStep[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function ProcessSteps({ brand, steps, orientation = 'horizontal', className = '' }: ProcessStepsProps) {
  const colors = getBrandColors(brand);

  if (orientation === 'vertical') {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>
                    {step.title}
                  </h3>
                  <p className="text-base" style={{ color: colors.textLight }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white mx-auto mb-4"
                style={{ backgroundColor: colors.primary }}
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                {step.title}
              </h3>
              <p className="text-base" style={{ color: colors.textLight }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



