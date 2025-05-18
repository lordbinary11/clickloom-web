'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Function to determine if a link is active
  const isActive = (path) => {
    return pathname === path;
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 font-serif">
                Clickloom.io
              </Link>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                  isActive('/')
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/analyze"
                className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                  isActive('/analyze')
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={handleLinkClick}
              >
                Analyze Website
              </Link>
              <Link
                href="/about"
                className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                  isActive('/about')
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="/pricing"
                className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                  isActive('/pricing')
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={handleLinkClick}
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                  isActive('/docs')
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={handleLinkClick}
              >
                Documentation
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium ${
                  isActive('/contact')
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Sign In
            </button>
            <button className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
              Sign Up
            </button>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/analyze"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/analyze')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
              onClick={handleLinkClick}
            >
              Analyze Website
            </Link>
            <Link
              href="/about"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/about')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/pricing')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/docs')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
              onClick={handleLinkClick}
            >
              Documentation
            </Link>
            <Link
              href="/contact"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                isActive('/contact')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <button className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
            </div>
            <div className="mt-3 px-4">
              <button className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
