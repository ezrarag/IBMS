export type Brand = 'paynepros' | 'ibms';

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textLight: string;
  border: string;
  heroBg: string;
  heroOverlay: string;
}

export interface BrandConfig {
  name: string;
  colors: BrandColors;
  logo?: string;
}

const payneProsColors: BrandColors = {
  primary: '#1e3a5f', // payneNavy
  secondary: '#4a5568', // steelGray
  accent: '#2d5aa0',
  background: '#ffffff',
  surface: '#f7fafc',
  text: '#1a202c',
  textLight: '#718096',
  border: '#e2e8f0',
  heroBg: '#1e3a5f',
  heroOverlay: 'rgba(30, 58, 95, 0.85)',
};

const ibmsColors: BrandColors = {
  primary: '#0f172a', // Darker navy/slate
  secondary: '#1e293b', // Dark steel
  accent: '#334155',
  background: '#ffffff',
  surface: '#f8fafc',
  text: '#0f172a',
  textLight: '#64748b',
  border: '#cbd5e1',
  heroBg: '#0f172a', // payneNavy/steelGray mix - darker
  heroOverlay: 'rgba(15, 23, 42, 0.90)', // Darker overlay for industrial feel
};

export const brandConfigs: Record<Brand, BrandConfig> = {
  paynepros: {
    name: 'PaynePros',
    colors: payneProsColors,
  },
  ibms: {
    name: 'Innovation Building Management',
    colors: ibmsColors,
  },
};

export function getBrandConfig(brand: Brand): BrandConfig {
  return brandConfigs[brand];
}

export function getBrandColors(brand: Brand): BrandColors {
  return brandConfigs[brand].colors;
}


