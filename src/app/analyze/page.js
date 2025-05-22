'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import AnalyzeHeader from '@/components/AnalyzeHeader';
import AuthGuard from '@/components/AuthGuard';

export default function AnalyzePage() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      try {
        // First check if there's a session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error('Session error in Analyze:', sessionError);
          setUser(null);
          return;
        }

        if (!session) {
          setUser(null);
          return;
        }

        // If we have a session, get the user
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError) {
          console.error('User error in Analyze:', userError);
          setUser(null);
          return;
        }

        setUser(user);
      } catch (error) {
        console.error('Unexpected auth error in Analyze:', error);
        setUser(null);
      }
    };
    getUser();
  }, []);

  const isValidUrl = url.startsWith('http://') || url.startsWith('https://');

  const saveAnalysisToDatabase = async (analysisData) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('website_analyses')
        .insert([
          {
            user_id: user.id,
            url: url,
            verdict: analysisData.verdict,
            risk_score: analysisData.risk_score,
            summary: analysisData.summary,
            recommendations: analysisData.recommendations,
          }
        ]);

      if (error) {
        console.error('Error saving analysis:', error);
      } else {
        console.log('Analysis saved successfully');
      }
    } catch (error) {
      console.error('Unexpected error saving analysis:', error);
    }
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setProgress(0);
    setError(null);

    try {
      // Simulate progress
      setProgress(25);

      // In a real implementation, you would call your API here
      // For now, we'll simulate the API call with a timeout
      setTimeout(() => {
        setProgress(50);

        // Simulate API response
        setTimeout(async () => {
          setProgress(100);

          // Mock data similar to your Streamlit app
          const mockResults = {
            verdict: "Suspicious",
            risk_score: 6.8,
            summary: "This website appears to be a phishing attempt targeting users of a popular banking service. It contains suspicious elements designed to collect sensitive information.",
            recommendations: "Do not enter any personal information on this site. If you've already shared information, contact your bank immediately and change your passwords.",
            page_text_findings: {
              suspicious_phrases: [
                "Verify your account immediately",
                "Enter your security code",
                "Confirm your identity"
              ],
              phishing_indicators: true
            },
            script_analysis: {
              total_scripts: 12,
              external_scripts: 8,
              suspicious_domains: ["analytics-track.com", "data-collector.net"],
              minified_or_encoded: true
            },
            link_analysis: {
              total_links: 24,
              external_links: 15,
              redirect_services_used: ["bit.ly", "tinyurl.com"],
              phishing_like_links: ["secure-banklogin.com", "account-verify-now.net"]
            }
          };

          setResults(mockResults);

          // Save analysis to database
          await saveAnalysisToDatabase(mockResults);

          setIsAnalyzing(false);
        }, 1500);
      }, 1500);

    } catch (err) {
      setError("An error occurred while analyzing the website. Please try again.");
      setIsAnalyzing(false);
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <AnalyzeHeader />

        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 relative z-10">
          <form onSubmit={handleAnalyze} className="mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <button
                type="submit"
                disabled={!isValidUrl || isAnalyzing}
                className={`px-6 py-2 rounded-md font-medium ${
                  isValidUrl && !isAnalyzing
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isAnalyzing ? 'Analyzing...' : '🚨 Analyze Website'}
              </button>
            </div>
          </form>

          {isAnalyzing && (
            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center mt-2 text-black">
                {progress < 50 ? 'Fetching website data...' : 'Analyzing content...'}
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {results && (
            <div className="mt-8">
              {/* Top Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-sm font-medium text-black">Verdict</h3>
                  <p className={`text-2xl font-bold ${
                    results.verdict === 'Safe' ? 'text-green-600' :
                    results.verdict === 'Suspicious' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {results.verdict}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-sm font-medium text-black">Risk Score</h3>
                  <p className={`text-2xl font-bold ${
                    results.risk_score < 3 ? 'text-green-600' :
                    results.risk_score < 7 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {results.risk_score}/10
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="text-sm font-medium text-black">Suspicious Phrases</h3>
                  <p className="text-2xl font-bold text-black">
                    {results.page_text_findings.suspicious_phrases.length}
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-black">🔍 Summary</h2>
                    <div className="bg-blue-50 p-4 rounded-lg text-black border border-blue-100">
                      {results.summary}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-black">⚠️ Recommendations</h2>
                    <div className="bg-yellow-50 p-4 rounded-lg text-black border border-yellow-100">
                      {results.recommendations}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-black">🕵️ Suspicious Phrases</h2>
                    <ul className="bg-white p-4 rounded-lg border">
                      {results.page_text_findings.suspicious_phrases.map((phrase, index) => (
                        <li key={index} className="mb-2 pb-2 border-b border-gray-100 text-black">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mr-2">
                            🔸 Suspicious
                          </span>
                          "{phrase}"
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-4 p-3 rounded-lg ${
                      results.page_text_findings.phishing_indicators
                        ? 'bg-red-100 border border-red-200'
                        : 'bg-green-100 border border-green-200'
                    }`}>
                      <strong className="text-black">Phishing Indicators:</strong>
                      <span className={results.page_text_findings.phishing_indicators ? 'text-red-800' : 'text-green-800'}>
                        {results.page_text_findings.phishing_indicators ? 'Detected' : 'None Detected'}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Risk Score Visualization */}
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-black">Risk Score Breakdown</h2>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            Safe
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                            Risk
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                        <div style={{ width: `${results.risk_score * 10}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-red-500">
                          <span className="text-xs font-medium text-red-100 px-1">{results.risk_score}/10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabs for additional analysis */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-4 py-3 border-b">
                      <h2 className="text-xl font-semibold text-black">Detailed Analysis</h2>
                    </div>

                    <div className="p-4 bg-white">
                      <h3 className="font-medium text-lg mb-2 text-black">📜 Script Analysis</h3>
                      <ul className="mb-4 space-y-1 text-black">
                        <li>Total Scripts: {results.script_analysis.total_scripts}</li>
                        <li>External Scripts: {results.script_analysis.external_scripts}</li>
                        <li>
                          Suspicious Domains:
                          <ul className="ml-4 mt-1">
                            {results.script_analysis.suspicious_domains.map((domain, index) => (
                              <li key={index} className="text-red-700 font-medium bg-red-50 px-2 py-1 rounded mb-1 border border-red-100">❗ {domain}</li>
                            ))}
                          </ul>
                        </li>
                        <li className="text-black">
                          Minified or Encoded Scripts:
                          <span className={results.script_analysis.minified_or_encoded ? 'text-red-600 ml-1 font-medium' : 'text-green-600 ml-1 font-medium'}>
                            {results.script_analysis.minified_or_encoded ? 'Detected' : 'None Detected'}
                          </span>
                        </li>
                      </ul>

                      <h3 className="font-medium text-lg mb-2 mt-6 text-black">🔗 Link Analysis</h3>
                      <ul className="space-y-1 text-black">
                        <li>Total Links: {results.link_analysis.total_links}</li>
                        <li>External Links: {results.link_analysis.external_links}</li>
                        <li>
                          Redirect Services Used:
                          <ul className="ml-4 mt-1">
                            {results.link_analysis.redirect_services_used.length > 0 ? (
                              results.link_analysis.redirect_services_used.map((service, index) => (
                                <li key={index} className="text-amber-700 font-medium bg-amber-50 px-2 py-1 rounded mb-1 border border-amber-100">🔄 {service}</li>
                              ))
                            ) : (
                              <li className="text-black">None</li>
                            )}
                          </ul>
                        </li>
                        <li>
                          Phishing-like Links:
                          <ul className="ml-4 mt-1">
                            {results.link_analysis.phishing_like_links.length > 0 ? (
                              results.link_analysis.phishing_like_links.map((link, index) => (
                                <li key={index} className="text-red-700 font-medium bg-red-50 px-2 py-1 rounded mb-1 border border-red-100">⚠️ {link}</li>
                              ))
                            ) : (
                              <li className="text-black">None</li>
                            )}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!isAnalyzing && !results && !error && (
            <div className="text-center py-8">
              <div className="max-w-md mx-auto bg-blue-50 rounded-lg p-6 mb-4 border border-blue-100">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Website Security Analysis</h3>
                <p className="text-black mb-4">
                  Our intelligent analysis tool helps you identify potential security risks, phishing attempts, and suspicious content on any website.
                </p>
                <div className="text-sm text-black bg-white p-3 rounded border">
                  <p className="font-medium mb-2">How it works:</p>
                  <ol className="list-decimal list-inside space-y-1 text-left">
                    <li>Enter a complete URL (including http:// or https://)</li>
                    <li>Click the "Analyze Website" button</li>
                    <li>Review the comprehensive security report</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </AuthGuard>
  );
}