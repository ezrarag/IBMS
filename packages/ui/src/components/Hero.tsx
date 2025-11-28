import React from 'react';
import { Brand, getBrandColors } from '../brand-kit';

interface HeroProps {
  brand: Brand;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}

export function Hero({ brand, title, subtitle, children, backgroundImage, className = '' }: HeroProps) {
  const colors = getBrandColors(brand);
  
  const heroStyle: React.CSSProperties = {
    backgroundColor: colors.heroBg,
    backgroundImage: backgroundImage 
      ? `linear-gradient(${colors.heroOverlay}, ${colors.heroOverlay}), url(${backgroundImage})`
      : `linear-gradient(${colors.heroOverlay}, ${colors.heroOverlay})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section
      className={`relative py-24 md:py-32 lg:py-40 ${className}`}
      style={heroStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

