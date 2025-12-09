import React from 'react';
import { Brand, getBrandColors } from '../brand-kit';

interface SectionProps {
  brand: Brand;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'default' | 'surface' | 'primary';
}

export function Section({
  brand,
  title,
  subtitle,
  children,
  className = '',
  backgroundColor = 'default',
}: SectionProps) {
  const colors = getBrandColors(brand);
  
  const bgColors = {
    default: colors.background,
    surface: colors.surface,
    primary: colors.primary,
  }[backgroundColor];

  const textColor = backgroundColor === 'primary' ? '#ffffff' : colors.text;
  const subtitleColor = backgroundColor === 'primary' ? 'rgba(255, 255, 255, 0.8)' : colors.textLight;

  return (
    <section
      className={`py-16 md:py-24 ${className}`}
      style={{ backgroundColor: bgColors }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: textColor }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: subtitleColor }}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}



