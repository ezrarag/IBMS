import React from 'react';
import { Brand, getBrandColors } from '../brand-kit';

interface SDVOSBBadgeProps {
  brand: Brand;
  className?: string;
}

export function SDVOSBBadge({ brand, className = '' }: SDVOSBBadgeProps) {
  const colors = getBrandColors(brand);

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${className}`}
      style={{
        backgroundColor: colors.surface,
        border: `2px solid ${colors.primary}`,
      }}
    >
      <svg
        className="w-6 h-6"
        style={{ color: colors.primary }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
      <span className="font-semibold text-sm" style={{ color: colors.text }}>
        Service Disabled Veteran-Owned Small Business
      </span>
    </div>
  );
}


