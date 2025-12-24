'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@shared/ui';

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const redirect = searchParams.get('redirect') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Redirect to the original page or home
        router.push(redirect);
        router.refresh();
      } else {
        setError(data.error || 'Invalid password');
        // If unauthorized, redirect to readyaimgo.biz after a delay
        setTimeout(() => {
          window.location.href = 'https://readyaimgo.biz';
        }, 2000);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Site Access Required
            </h1>
            <p className="text-slate-400">
              Please enter the password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                required
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-900/50 border border-red-700 rounded-lg p-4">
                <p className="text-red-200 text-sm">{error}</p>
                <p className="text-red-300 text-xs mt-2">
                  Redirecting to readyaimgo.biz...
                </p>
              </div>
            )}

            <Button
              brand="ibms"
              type="submit"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Access Site'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Don't have access?{' '}
              <a
                href="https://readyaimgo.biz"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Visit readyaimgo.biz
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
        <div className="w-full max-w-md">
          <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">
                Site Access Required
              </h1>
              <p className="text-slate-400">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    }>
      <AuthForm />
    </Suspense>
  );
}

