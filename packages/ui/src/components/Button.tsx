import React from 'react';
import { Brand, getBrandColors } from '../brand-kit';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  brand: Brand;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  brand,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const colors = getBrandColors(brand);
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  const variantStyles = {
    primary: {
      backgroundColor: colors.primary,
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: '#ffffff',
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary,
      border: `2px solid ${colors.primary}`,
    },
  }[variant];

  return (
    <button
      className={`${sizeClasses} rounded-lg font-semibold transition-opacity hover:opacity-90 ${className}`}
      style={variantStyles}
      {...props}
    >
      {children}
    </button>
  );
}



