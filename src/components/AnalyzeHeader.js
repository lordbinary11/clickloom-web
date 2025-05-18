'use client';

export default function AnalyzeHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">Website Risk Analysis</h1>
        <p className="text-lg text-gray-600">Enter a URL to analyze for potential security risks</p>
      </div>
      <div className="h-[200px] md:h-[250px] w-full flex items-center justify-center">
        <div className="relative w-full h-full max-w-sm bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md overflow-hidden">
          {/* Security Shield Illustration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full -ml-12 -mb-12 opacity-50"></div>

          <div className="relative h-full flex flex-col items-center justify-center p-6">
            <div className="flex mb-4">
              {/* Shield with Check */}
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-gray-800 font-semibold mb-1">Website Security Scanner</h3>
              <p className="text-gray-600 text-sm">
                Detect phishing, malware, and suspicious content
              </p>
            </div>

            {/* Small decorative elements */}
            <div className="absolute top-4 left-4">
              <svg className="h-6 w-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.51 11.84a.5.5 0 01-.5-.5V8.5a.5.5 0 01.5-.5h2.84a.5.5 0 010 1H4.51v2.34a.5.5 0 01-.5.5zM20.49 11.84a.5.5 0 01-.5-.5V9h-2.34a.5.5 0 010-1h2.84a.5.5 0 01.5.5v2.84a.5.5 0 01-.5.5zM3.51 20.49a.5.5 0 01-.5-.5v-2.84a.5.5 0 011 0v2.34h2.34a.5.5 0 010 1H3.51zM20.49 20.49h-2.84a.5.5 0 010-1h2.34v-2.34a.5.5 0 011 0v2.84a.5.5 0 01-.5.5z" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4">
              <svg className="h-6 w-6 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.49 3.51a.5.5 0 01.5.5v2.84a.5.5 0 01-1 0V4.51h-2.34a.5.5 0 010-1h2.84zM3.51 3.51h2.84a.5.5 0 010 1H4.01v2.34a.5.5 0 01-1 0V4.01a.5.5 0 01.5-.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
