"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EmailRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push("/dashboard")
    }, 10000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Confirming your email...</h1>
      <p className="text-lg text-gray-600">
        Please wait while we confirm your email address. You will be redirected shortly.
      </p>
    </div>
  )
} 