'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Handle the auth callback from email confirmation
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          console.error('Auth callback error:', error)
          router.push('/login?error=auth_callback_failed')
          return
        }

        if (data?.session) {
          // User is successfully authenticated
          router.push('/dashboard')
        } else {
          // No session found, redirect to login
          router.push('/login')
        }
      } catch (error) {
        console.error('Unexpected error in auth callback:', error)
        router.push('/login?error=unexpected_error')
      }
    }

    handleAuth()
  }, [router, supabase])

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Confirming your email...</p>
    </div>
  )
}
