'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// Create a singleton Supabase client with error handling
let supabaseClient = null;

export function getSupabaseClient() {
  if (!supabaseClient) {
    try {
      // Check if environment variables are available
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Missing Supabase environment variables');
      }

      supabaseClient = createClientComponentClient();
    } catch (error) {
      console.error('Failed to create Supabase client:', error);

      // In production, we might want to show a more user-friendly error
      if (process.env.NODE_ENV === 'production') {
        console.error('Supabase configuration error. Please check environment variables.');
      }

      throw error;
    }
  }
  return supabaseClient;
}

// Helper function to safely get user session
export async function getSafeSession() {
  try {
    const supabase = getSupabaseClient();
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Session error:', error);
      return { session: null, error };
    }

    return { session, error: null };
  } catch (error) {
    console.error('Unexpected session error:', error);
    return { session: null, error };
  }
}

// Helper function to safely get user
export async function getSafeUser() {
  try {
    const { session, error: sessionError } = await getSafeSession();

    if (sessionError || !session) {
      return { user: null, error: sessionError };
    }

    const supabase = getSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
      console.error('User error:', error);
      return { user: null, error };
    }

    return { user, error: null };
  } catch (error) {
    console.error('Unexpected user error:', error);
    return { user: null, error };
  }
}

// Helper function to safely sign out
export async function safeSignOut() {
  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Sign out error:', error);
    }

    return { error };
  } catch (error) {
    console.error('Unexpected sign out error:', error);
    return { error };
  }
}
