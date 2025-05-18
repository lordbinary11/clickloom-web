'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Getting Started', href: '#getting-started' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'API Reference', href: '#api-reference' },
  { name: 'Browser Extension', href: '#browser-extension' },
  { name: 'FAQs', href: '#faqs' },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId.replace('#', ''));
    document.getElementById(sectionId.replace('#', '')).scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 lg:flex-shrink-0 border-r border-gray-200 lg:h-screen lg:sticky lg:top-0 bg-gray-50">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900">Documentation</h2>
              <nav className="mt-6">
                <ul className="space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`block px-3 py-2 text-sm font-medium rounded-md ${
                          activeSection === item.href.replace('#', '')
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 px-4 py-8 sm:px-6 lg:px-8 overflow-auto">
            <div className="prose prose-blue max-w-3xl mx-auto">
              <section id="getting-started" className="mb-16">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with Clickloom.io</h1>
                
                <p className="text-gray-600 mb-6">
                  Welcome to Clickloom.io! This documentation will help you get started with our website risk analysis tool and make the most of its features.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Clickloom.io?</h2>
                
                <p className="text-gray-600 mb-4">
                  Clickloom.io is a powerful website risk analysis tool that helps you identify potential security threats, phishing attempts, and suspicious websites before they can harm you or your organization.
                </p>
                
                <p className="text-gray-600 mb-4">
                  Our tool uses advanced AI to analyze various aspects of websites, including content, scripts, and links, to provide a comprehensive risk assessment.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Start Guide</h2>
                
                <ol className="list-decimal pl-6 space-y-4 text-gray-600">
                  <li>
                    <strong>Create an account:</strong> Sign up for a free account to get started with basic website analysis.
                  </li>
                  <li>
                    <strong>Enter a URL:</strong> Go to the <Link href="/analyze" className="text-blue-600 hover:underline">Analyze page</Link> and enter the URL of the website you want to analyze.
                  </li>
                  <li>
                    <strong>Review the results:</strong> Once the analysis is complete, review the risk assessment, including the verdict, risk score, and detailed findings.
                  </li>
                  <li>
                    <strong>Take action:</strong> Based on the recommendations provided, decide whether it's safe to proceed with the website or take precautionary measures.
                  </li>
                </ol>
              </section>
              
              <section id="how-it-works" className="mb-16">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h1>
                
                <p className="text-gray-600 mb-6">
                  Clickloom.io uses a multi-layered approach to analyze websites and identify potential security risks. Here's an overview of our analysis process:
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Content Analysis</h2>
                
                <p className="text-gray-600 mb-4">
                  Our system examines the text content of websites for suspicious phrases, misleading information, and other indicators of malicious intent. We use natural language processing techniques to identify patterns commonly associated with phishing and scam websites.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Script Analysis</h2>
                
                <p className="text-gray-600 mb-4">
                  We analyze JavaScript and other code running on websites to identify potentially harmful scripts. This includes checking for obfuscated code, known malicious patterns, and connections to suspicious domains.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Link Analysis</h2>
                
                <p className="text-gray-600 mb-4">
                  Our system examines links on the website to detect redirect chains, suspicious domains, and other techniques commonly used in phishing attacks. We also check for links to known malicious websites.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Risk Assessment</h2>
                
                <p className="text-gray-600 mb-4">
                  Based on the findings from our various analysis components, we calculate a comprehensive risk score and provide a verdict on the website's safety. We also offer detailed recommendations to help you make informed decisions.
                </p>
              </section>
              
              <section id="api-reference" className="mb-16">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h1>
                
                <p className="text-gray-600 mb-6">
                  Clickloom.io offers a RESTful API that allows you to integrate our website risk analysis capabilities into your own applications. This section provides an overview of the API endpoints and how to use them.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Authentication</h2>
                  
                  <p className="text-gray-600 mb-4">
                    All API requests require an API key for authentication. You can obtain an API key from your account dashboard.
                  </p>
                  
                  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                    <code>
                      {`curl -X POST https://api.clickloom.io/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://example.com"}'`}
                    </code>
                  </pre>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Endpoints</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Analyze Website</h3>
                  
                  <p className="text-gray-600 mb-2">
                    <code className="bg-gray-100 px-1 py-0.5 rounded">POST /v1/analyze</code>
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    Analyzes a website and returns a comprehensive risk assessment.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Request Parameters</h4>
                  
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">url</code> (required): The URL of the website to analyze.
                    </li>
                    <li>
                      <code className="bg-gray-100 px-1 py-0.5 rounded">depth</code> (optional): The depth of analysis (1-3). Default is 1.
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                  
                  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                    <code>
                      {`{
  "verdict": "Suspicious",
  "risk_score": 6.8,
  "summary": "This website appears to be a phishing attempt...",
  "recommendations": "Do not enter any personal information...",
  "page_text_findings": {
    "suspicious_phrases": [
      "Verify your account immediately",
      "Enter your security code"
    ],
    "phishing_indicators": true
  },
  "script_analysis": {
    "total_scripts": 12,
    "external_scripts": 8,
    "suspicious_domains": ["analytics-track.com"],
    "minified_or_encoded": true
  },
  "link_analysis": {
    "total_links": 24,
    "external_links": 15,
    "redirect_services_used": ["bit.ly"],
    "phishing_like_links": ["secure-banklogin.com"]
  }
}`}
                    </code>
                  </pre>
                </div>
              </section>
              
              <section id="browser-extension" className="mb-16">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Browser Extension</h1>
                
                <p className="text-gray-600 mb-6">
                  The Clickloom.io browser extension provides real-time protection as you browse the web. It automatically analyzes websites you visit and alerts you to potential security risks.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Installation</h2>
                
                <p className="text-gray-600 mb-4">
                  Our browser extension is available for Chrome, Firefox, and Edge. Click the link for your browser to install:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Chrome Extension</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Firefox Add-on</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Edge Extension</a>
                  </li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Features</h2>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <strong>Real-time analysis:</strong> Automatically analyzes websites as you browse.
                  </li>
                  <li>
                    <strong>Risk indicators:</strong> Shows a color-coded icon in your browser toolbar to indicate the risk level of the current website.
                  </li>
                  <li>
                    <strong>Detailed reports:</strong> Click the extension icon to view a detailed risk assessment.
                  </li>
                  <li>
                    <strong>Custom settings:</strong> Configure the extension to match your security preferences.
                  </li>
                </ul>
              </section>
              
              <section id="faqs" className="mb-16">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
                
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">How accurate is Clickloom.io's analysis?</h2>
                    <p className="text-gray-600">
                      Clickloom.io uses advanced AI and machine learning techniques to provide highly accurate risk assessments. However, no system is perfect, and there may be false positives or false negatives in some cases. We continuously improve our algorithms based on user feedback and new threat intelligence.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Is my data secure when using Clickloom.io?</h2>
                    <p className="text-gray-600">
                      Yes, we take data security very seriously. All data is encrypted in transit and at rest, and we follow industry best practices for security. We do not store the content of websites you analyze beyond what is necessary to provide our service.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Can I use Clickloom.io for my business?</h2>
                    <p className="text-gray-600">
                      Yes, Clickloom.io offers business plans with additional features and higher usage limits. Our Pro and Enterprise plans are designed for businesses of all sizes. Visit our <Link href="/pricing" className="text-blue-600 hover:underline">Pricing page</Link> for more information.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">How often is the threat intelligence updated?</h2>
                    <p className="text-gray-600">
                      Our threat intelligence is updated continuously as new threats are discovered. We monitor various sources of threat intelligence and incorporate new information into our analysis algorithms in real-time.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Can I analyze websites behind a login?</h2>
                    <p className="text-gray-600">
                      Currently, Clickloom.io can only analyze publicly accessible websites. Analysis of websites behind a login requires custom integration. Contact our sales team for more information about enterprise solutions.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
