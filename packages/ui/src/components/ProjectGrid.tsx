import React from 'react';
import { Brand, getBrandColors } from '../brand-kit';

export interface Project {
  title: string;
  description: string;
  image?: string;
  category?: string;
}

interface ProjectGridProps {
  brand: Brand;
  projects: Project[];
  className?: string;
}

export function ProjectGrid({ brand, projects, className = '' }: ProjectGridProps) {
  const colors = getBrandColors(brand);

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border transition-all hover:shadow-lg"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
              }}
            >
              {project.image ? (
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              ) : (
                <div
                  className="w-full h-48 flex items-center justify-center"
                  style={{ backgroundColor: colors.border }}
                >
                  <span style={{ color: colors.textLight }}>Project Image</span>
                </div>
              )}
              <div className="p-6">
                {project.category && (
                  <span
                    className="text-xs font-semibold uppercase tracking-wide mb-2 inline-block"
                    style={{ color: colors.primary }}
                  >
                    {project.category}
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text }}>
                  {project.title}
                </h3>
                <p className="text-base" style={{ color: colors.textLight }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



