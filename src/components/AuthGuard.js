'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient, getSafeUser } from '@/lib/supabase';
import AuthRequired from '@/components/AuthRequired';

export default function AuthGuard({ children, redirectTo = '/login' }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { user, error } = await getSafeUser();

        if (error) {
          console.error('Auth check error:', error);
          setUser(null);
        } else {
          setUser(user);
        }
      } catch (error) {
        console.error('Unexpected auth error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    // Listen for auth state changes
    const supabase = getSupabaseClient();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        try {
          if (event === 'SIGNED_OUT' || !session) {
            setUser(null);
            setLoading(false);
          } else if (event === 'SIGNED_IN' && session) {
            setUser(session.user);
            setLoading(false);
          }
        } catch (error) {
          console.error('Auth state change error:', error);
          setLoading(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!user) {
    return <AuthRequired />;
  }

  // Render protected content if authenticated
  return children;
}
