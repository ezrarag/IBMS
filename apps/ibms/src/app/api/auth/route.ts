import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const TEMP_PASSWORD = process.env.TEMP_PASSWORD || 'temp123';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      );
    }

    // Check if password matches admin or temp password
    if (password === ADMIN_PASSWORD || password === TEMP_PASSWORD) {
      // Set authentication cookie (expires in 30 days)
      const cookieStore = await cookies();
      cookieStore.set('ibms-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      return NextResponse.json({
        success: true,
        message: 'Authentication successful',
      });
    }

    // Invalid password - redirect to readyaimgo.biz
    return NextResponse.json(
      { success: false, error: 'Invalid password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'An error occurred' },
      { status: 500 }
    );
  }
}

