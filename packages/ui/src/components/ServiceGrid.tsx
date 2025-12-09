import React from 'react';
import { Brand, getBrandColors } from '../brand-kit';

export interface Service {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceGridProps {
  brand: Brand;
  services: Service[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ServiceGrid({ brand, services, columns = 3, className = '' }: ServiceGridProps) {
  const colors = getBrandColors(brand);
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border transition-all hover:shadow-lg"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              {service.icon && (
                <div className="mb-4" style={{ color: colors.primary }}>
                  {service.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                {service.title}
              </h3>
              <p className="text-base" style={{ color: colors.textLight }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



