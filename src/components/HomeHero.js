'use client';

import Link from 'next/link';

export default function HomeHero() {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Protect Your Online Experience with Clickloom.io
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our intelligent website risk analysis tool helps you identify potential threats, phishing attempts, and suspicious websites before they can harm you.
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
            <Link href="/analyze" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Analyze a Website
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="h-[400px] lg:h-[500px] w-full flex items-center justify-center lg:justify-end">
          {/* Simple SVG illustration instead of Spline */}
          <div className="relative w-full h-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 rounded-xl"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32 text-blue-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Website Security Analysis</h3>
                <p className="text-gray-600">Protecting your online experience with advanced threat detection</p>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
