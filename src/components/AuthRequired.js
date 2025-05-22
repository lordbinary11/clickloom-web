'use client';

import Link from 'next/link';

export default function AuthRequired({ 
  title = "Sign In Required", 
  message = "You need to be signed in to access this feature.",
  showSignUp = true 
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          
          {/* Title */}
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
          
          {/* Message */}
          <p className="mt-2 text-sm text-gray-600">
            {message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-4">
          <Link
            href="/login"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Sign In
          </Link>

          {showSignUp && (
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                >
                  Sign up for free
                </Link>
              </span>
            </div>
          )}
        </div>

        {/* Features Preview */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            What you'll get access to:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 text-sm text-gray-600">
                <strong className="text-gray-900">Website Risk Analysis</strong> - Analyze any website for security threats
              </span>
            </li>
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 text-sm text-gray-600">
                <strong className="text-gray-900">Analysis History</strong> - Save and review your past analyses
              </span>
            </li>
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-3 text-sm text-gray-600">
                <strong className="text-gray-900">Documentation Access</strong> - Full API documentation and guides
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
