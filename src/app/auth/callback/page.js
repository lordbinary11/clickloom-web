"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClientComponentClient()
  const [status, setStatus] = useState('loading') // 'loading', 'success', 'error'
  const [message, setMessage] = useState('Confirming your authentication...')
  const [showLoginLink, setShowLoginLink] = useState(false)

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Parse tokens from URL if present
        const params = Object.fromEntries(searchParams.entries())
        // Supabase handles the session automatically if the URL contains the right params
        // But we can force a session check
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          if (error.message && error.message.includes('Invalid Refresh Token')) {
            setStatus('error')
            setMessage('It looks like you opened the confirmation link in a different browser or device. Please try logging in again from the device where you signed up, or use the link below to log in.')
            setShowLoginLink(true)
            setTimeout(() => router.push('/login'), 5000)
            return
          }
          setStatus('error')
          setMessage('Authentication failed. Please try logging in again.')
          setTimeout(() => router.push('/login?error=auth_callback_failed'), 3000)
          return
        }

        if (data?.session) {
          setStatus('success')
          setMessage('Authentication successful! Redirecting to your dashboard...')
          setTimeout(() => router.push('/dashboard'), 2000)
        } else {
          setStatus('error')
          setMessage('No active session found. Please log in.')
          setTimeout(() => router.push('/login'), 3000)
        }
      } catch (error) {
        setStatus('error')
        setMessage('Unexpected error during authentication. Please try again.')
        setTimeout(() => router.push('/login?error=unexpected_error'), 3000)
      }
    }

    handleAuth()
    // Only run on mount
    // eslint-disable-next-line
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">{status === 'loading' ? 'Confirming...' : status === 'success' ? 'Success!' : 'Error'}</h1>
      <p className={`text-lg ${status === 'error' ? 'text-red-600' : 'text-gray-600'}`}>{message}</p>
      {showLoginLink && (
        <Link href="/login" className="mt-4 text-blue-600 underline text-lg">Go to Login Page</Link>
      )}
      {status === 'loading' && <div className="mt-6 animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />}
    </div>
  )
}
