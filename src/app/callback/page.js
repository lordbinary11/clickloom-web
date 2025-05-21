'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const handleAuth = async () => {
      // This will parse the access token from the URL
      const { error } = await supabase.auth.getSession()

      if (!error) {
        router.push('/dashboard')
      } else {
        console.error(error)
        router.push('/login')
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
