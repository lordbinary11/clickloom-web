import Link from 'next/link';
import Image from 'next/image';
import HomeHero from '@/components/HomeHero';
// import SplineScene from '@/components/SplineScene';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <HomeHero />
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Advanced Protection</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to stay safe online
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Clickloom.io uses advanced AI to analyze websites and identify potential security risks before you visit them.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  Phishing Detection
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Identify websites designed to steal your personal information with our advanced phishing detection algorithms.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  Script Analysis
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Examine website scripts for malicious code that could compromise your security or privacy.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                  </div>
                  Link Analysis
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Detect suspicious links and redirects that could lead you to dangerous websites.
                </dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  Risk Assessment
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Get a comprehensive risk score and detailed recommendations to help you make informed decisions.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            {/* Text content - made more responsive */}
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to protect yourself online?
                <br className="hidden sm:inline" />
                Start using Clickloom.io today.
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                Analyze any website for potential security risks and stay safe online with our powerful risk assessment tool.
              </p>
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6 lg:justify-start">
                <Link href="/analyze" className="rounded-md bg-white px-3 sm:px-3.5 py-2 sm:py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Get started
                </Link>
                <Link href="/docs" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            
            {/* Animation container - fully responsive */}
            <div className="relative mx-auto mt-10 sm:mt-16 h-64 w-64 sm:h-72 sm:w-72 lg:mt-0 lg:h-auto lg:w-auto lg:flex-1 flex items-center justify-center">
              {/* Shield animation - responsive sizing */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 animate-float animate-glow">
                {/* Shield base with stronger color */}
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-80"></div>
                
                {/* Shield inner with gradient */}
                <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  {/* Lock icon - responsive sizing */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white drop-shadow-md"
                  >
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Rotating ring - responsive sizing */}
                <div className="absolute -inset-2 border-2 sm:border-4 border-blue-300 rounded-full opacity-30 animate-slow-spin"></div>
                
                {/* Animated rings - responsive sizing */}
                <div className="absolute inset-0 border-2 sm:border-4 border-blue-300 rounded-full animate-ping opacity-30"></div>
                <div className="absolute -inset-3 sm:-inset-4 border-1 sm:border-2 border-blue-200 rounded-full animate-ping opacity-20 delay-300"></div>
                
                {/* Binary code particles - responsive positioning and sizing */}
                <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 text-sm sm:text-base md:text-lg font-mono font-bold text-blue-200 animate-bounce delay-100">01</div>
                <div className="absolute top-0 -right-8 sm:-right-12 text-sm sm:text-base md:text-lg font-mono font-bold text-blue-200 animate-bounce delay-300">10</div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 text-sm sm:text-base md:text-lg font-mono font-bold text-blue-200 animate-bounce delay-500">01</div>
                <div className="absolute bottom-0 -left-8 sm:-left-12 text-sm sm:text-base md:text-lg font-mono font-bold text-blue-200 animate-bounce delay-700">10</div>
                
                {/* Additional binary particles - responsive and conditionally shown */}
                <div className="absolute top-1/4 -right-10 sm:-right-16 text-sm sm:text-base md:text-lg font-mono font-bold text-blue-200 animate-bounce delay-200">11</div>
                <div className="absolute bottom-1/4 -left-10 sm:-left-16 text-sm sm:text-base md:text-lg font-mono font-bold text-blue-200 animate-bounce delay-600">00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}








