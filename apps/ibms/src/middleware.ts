import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow access to auth page and all API routes
  if (pathname.startsWith('/api/') || pathname === '/auth') {
    return NextResponse.next();
  }
  
  // Check for authentication cookie
  const authCookie = request.cookies.get('ibms-auth');
  
  if (!authCookie || authCookie.value !== 'authenticated') {
    // Redirect to auth page
    const authUrl = new URL('/auth', request.url);
    authUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(authUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

