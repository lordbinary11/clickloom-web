'use client';

export default function AboutPage() {
  return (
    <div className="bg-white relative">
      {/* Hero section */}
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Clickloom.io</h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Our mission is to make the web safer for everyone by providing powerful tools to identify and avoid online threats.
          </p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 relative z-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Our Story</h2>
          
          <div className="prose prose-lg prose-gray mx-auto">
            <p className="text-gray-800">
              Clickloom.io was founded in 2025 with a simple but powerful mission: to help people navigate the web safely in an increasingly dangerous digital landscape.
            </p>
            
            <p className="text-gray-800">
              As online threats continue to evolve and become more sophisticated, we recognized the need for advanced tools that can help users make informed decisions about the websites they visit. Phishing attacks, malware distribution, and data theft have become all too common, and many people lack the technical knowledge to identify these threats on their own.
            </p>
            
            <p className="text-gray-800">
              That's where Clickloom.io comes in. We've developed a powerful website risk analysis tool that leverages artificial intelligence to examine websites for potential security risks. Our system analyzes various aspects of a website, including its content, scripts, and links, to provide a comprehensive risk assessment.
            </p>
            
            <h3 className="text-xl font-bold tracking-tight text-gray-900 mt-8 mb-4">Our Technology</h3>
            
            <p className="text-gray-800">
              At the heart of Clickloom.io is our advanced AI-powered analysis engine. We use state-of-the-art natural language processing and machine learning techniques to identify suspicious patterns and potential threats in website content.
            </p>
            
            <p className="text-gray-800">
              Our system examines multiple aspects of a website:
            </p>
            
            <ul className="text-gray-800">
              <li><strong>Content Analysis:</strong> We scan the text content of websites for suspicious phrases, misleading information, and other indicators of malicious intent.</li>
              <li><strong>Script Analysis:</strong> Our system examines JavaScript and other code running on websites to identify potentially harmful scripts.</li>
              <li><strong>Link Analysis:</strong> We analyze links to detect redirect chains, suspicious domains, and other techniques commonly used in phishing attacks.</li>
              <li><strong>Visual Elements:</strong> We identify design patterns commonly used to impersonate legitimate websites.</li>
            </ul>
            
            <h3 className="text-xl font-bold tracking-tight text-gray-900 mt-8 mb-4">Our Team</h3>
            
            <p className="text-gray-800">
              Clickloom.io was founded by a team of cybersecurity experts, data scientists, and web developers with a shared passion for making the internet safer. Our diverse backgrounds and expertise allow us to approach the problem of web security from multiple angles.
            </p>
            
            <p className="text-gray-800">
              We're constantly working to improve our technology and expand our capabilities to stay ahead of emerging threats. Our goal is to provide the most accurate and helpful risk assessments possible, empowering users to make informed decisions about the websites they visit.
            </p>
            
            <h3 className="text-xl font-bold tracking-tight text-gray-900 mt-8 mb-4">Our Vision</h3>
            
            <p className="text-gray-800">
              We envision a future where everyone has access to tools that help them navigate the web safely. We believe that by making advanced security analysis accessible to everyday users, we can help create a safer online environment for everyone.
            </p>
            
            <p className="text-gray-800">
              As we continue to grow, we're committed to maintaining the highest standards of accuracy, privacy, and user experience. We're constantly exploring new ways to improve our service and provide even more value to our users.
            </p>
            
            <p className="text-gray-800">
              Thank you for choosing Clickloom.io. Together, we can make the web a safer place, one link at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



