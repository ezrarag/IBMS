'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getBrandColors } from '@shared/ui';

const brand = 'ibms';
const colors = getBrandColors(brand);

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Don't render footer on auth page
  if (pathname === '/auth') {
    return null;
  }

  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: colors.surface,
        borderColor: colors.border,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text }}>
              Innovation Building Management
            </h3>
            <p className="text-sm" style={{ color: colors.textLight }}>
              Service disabled veteran-owned small business providing construction management and related services.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: colors.text }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:opacity-80"
                  style={{ color: colors.textLight }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:opacity-80"
                  style={{ color: colors.textLight }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm hover:opacity-80"
                  style={{ color: colors.textLight }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:opacity-80"
                  style={{ color: colors.textLight }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4" style={{ color: colors.text }}>
              Contact
            </h4>
            <p className="text-sm" style={{ color: colors.textLight }}>
              <Link
                href="/contact"
                className="hover:opacity-80"
                style={{ color: colors.primary }}
              >
                Request a Project Consultation
              </Link>
            </p>
          </div>
        </div>

        <div
          className="pt-8 border-t text-center text-sm"
          style={{
            borderColor: colors.border,
            color: colors.textLight,
          }}
        >
          <p>© {currentYear} Innovation Building Management, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



