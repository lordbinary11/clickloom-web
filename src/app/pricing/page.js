import Link from 'next/link';

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '/analyze',
    price: { monthly: '$0' },
    description: 'Basic website analysis for individual users.',
    features: [
      '10 website analyses per month',
      'Basic risk assessment',
      'Phishing detection',
      'Suspicious content identification',
      'Email report (limited)'
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    price: { monthly: '$19' },
    description: 'Advanced protection for professionals and small teams.',
    features: [
      '100 website analyses per month',
      'Advanced risk assessment',
      'Real-time monitoring',
      'API access (limited)',
      'Browser extension',
      'Email & SMS alerts',
      'Priority support'
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: 'Custom' },
    description: 'Comprehensive protection for organizations with advanced security needs.',
    features: [
      'Unlimited website analyses',
      'Enterprise-grade risk assessment',
      'Advanced threat intelligence',
      'Full API access',
      'Custom integrations',
      'Dedicated account manager',
      'SSO and team management',
      'Compliance reporting'
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-600">Pricing</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for your needs
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Whether you're an individual looking for basic protection or an enterprise with advanced security needs,
          we have a plan that's right for you.
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-blue-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                  {tier.name !== 'Enterprise' && <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                    : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                )}
              >
                {tier.name === 'Enterprise' ? 'Contact sales' : 'Get started'}
              </Link>
            </div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mx-auto max-w-4xl mt-32">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center mb-12">
            Frequently asked questions
          </h2>
          
          <dl className="space-y-8">
            <div>
              <dt className="text-lg font-semibold leading-8 text-gray-900">
                How does Clickloom.io analyze websites?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Clickloom.io uses advanced AI to analyze various aspects of websites, including content, scripts, and links. Our system looks for patterns and indicators commonly associated with phishing, malware, and other online threats.
              </dd>
            </div>
            
            <div>
              <dt className="text-lg font-semibold leading-8 text-gray-900">
                Can I upgrade or downgrade my plan at any time?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will take effect immediately, and your billing will be adjusted accordingly.
              </dd>
            </div>
            
            <div>
              <dt className="text-lg font-semibold leading-8 text-gray-900">
                Do you offer a free trial for paid plans?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Yes, we offer a 14-day free trial for our Pro plan. No credit card is required to start your trial, and you can cancel at any time.
              </dd>
            </div>
            
            <div>
              <dt className="text-lg font-semibold leading-8 text-gray-900">
                What payment methods do you accept?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also offer invoice-based payment options.
              </dd>
            </div>
            
            <div>
              <dt className="text-lg font-semibold leading-8 text-gray-900">
                Is my data secure?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Yes, we take data security very seriously. All data is encrypted in transit and at rest, and we follow industry best practices for security. We do not store the content of websites you analyze beyond what is necessary to provide our service.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
