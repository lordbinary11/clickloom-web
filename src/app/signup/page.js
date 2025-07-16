'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import Script from 'next/script';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    setMounted(true);

    // Expose callback globally
    // window.handleGoogleLogin = async (response) => {
    //   const { data, error } = await supabase.auth.signInWithIdToken({
    //     provider: 'google',
    //     token: response.credential,
    //   });

    //   if (error) {
    //     setError(error.message);
    //   } else {
    //     router.push('/dashboard');
    //     router.refresh();
    //   }
    // };

    const initializeGoogle = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: window.handleGoogleLogin,
          ux_mode: 'popup',
        });

        window.google.accounts.id.renderButton(
          document.getElementById('google-signup-button'),
          {
            type: 'standard',
            shape: 'pill',
            theme: 'outline',
            text: 'signup_with',
            size: 'large',
            logo_alignment: 'left',
          }
        );
      }
    };

    const interval = setInterval(() => {
      if (window.google && document.getElementById('google-signup-button')) {
        clearInterval(interval);
        initializeGoogle();
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      // Check if user needs to confirm email
      if (data?.user && !data?.session) {
        setMessage('Please check your email and click the confirmation link to complete your registration.');
      } else if (data?.session) {
        // User is automatically logged in (email confirmation disabled)
        router.push('/dashboard');
        router.refresh();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      /> */}

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              sign in to your account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSignUp}>
              {error && (
                <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {error}
                </div>
              )}

              {message && (
                <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                  {message}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {loading ? 'Creating account...' : 'Create account'}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              {/* <p className="text-sm text-gray-500 mb-2">Or continue with</p>
              {mounted && <div id="google-signup-button" className="flex justify-center" />} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
