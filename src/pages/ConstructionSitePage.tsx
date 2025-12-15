import React, { useEffect } from 'react';
import { Phone, CheckCircle, HardHat, Clock, Shield, Star } from 'lucide-react';
import { setMetaTags, generateServiceMetaTags } from '../utils/meta';
import { createServiceSchema, createFAQSchema, injectMultipleSchemas } from '../utils/schema';

interface ConstructionSitePageProps {
  onPageChange: (page: string) => void;
}

const ConstructionSitePage: React.FC<ConstructionSitePageProps> = ({ onPageChange }) => {
  useEffect(() => {
    const metaTags = generateServiceMetaTags(
      'Construction Site Portable Toilets',
      'Professional portable toilet rentals for construction sites. OSHA-compliant units, same-day delivery, weekly service. Keep your job site compliant and your workers productive. Call (888) 519-9743.'
    );
    setMetaTags(metaTags);

    const serviceSchema = createServiceSchema(
      'Construction Site Portable Toilet Rental',
      'Professional portable restroom solutions for construction sites with OSHA-compliant units, regular servicing, and ADA-accessible options.',
      'United States'
    );

    const faqSchema = createFAQSchema([
      {
        question: 'How many portable toilets do I need for my construction site?',
        answer: 'OSHA requires one toilet for every 20 workers. For projects lasting more than 6 months, consider adding one unit for every 10 workers. We can help you determine the exact number based on your crew size and project duration.'
      },
      {
        question: 'How often should construction site portable toilets be serviced?',
        answer: 'We recommend weekly service for most construction sites. High-traffic sites may require twice-weekly service. Our service includes waste removal, cleaning, restocking supplies, and equipment inspection.'
      },
      {
        question: 'Are ADA-accessible units required on construction sites?',
        answer: 'Yes, OSHA and ADA regulations require accessible facilities on construction sites. We provide ADA-compliant portable toilets with wheelchair ramps, grab bars, and spacious interiors.'
      },
      {
        question: 'Can you deliver same-day for urgent construction projects?',
        answer: 'Yes, we offer same-day delivery for most locations. Call (888) 519-9743 before noon for same-day service availability in your area.'
      }
    ]);

    injectMultipleSchemas([serviceSchema, faqSchema]);
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HardHat className="w-10 h-10" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Construction Site Portable Toilets
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            OSHA-Compliant Portable Restrooms for Construction Sites & Job Sites
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Keep Your Construction Site Compliant & Productive
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Construction site managers trust Flush On Demand for reliable, clean portable toilet rentals that meet OSHA requirements. Our units are designed for the demands of construction environments, with durable construction and regular maintenance to keep your crew productive.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We understand construction timelines are critical. That's why we offer same-day delivery, flexible rental periods, and responsive service to keep your project moving forward without delays.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">OSHA-compliant units for all job sites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Same-day delivery available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Weekly service included in rental</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">ADA-accessible units available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Flexible rental periods (daily, weekly, monthly)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:8885199743" className="btn-primary flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>(888) 519-9743</span>
                </a>
                <button onClick={() => onPageChange('contact')} className="btn-secondary">
                  Get Free Quote
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site portable toilets"
                className="rounded-lg shadow-lg mb-6"
              />

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  OSHA Requirements for Construction Sites
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">1 toilet per 20 workers (OSHA Standard 1926.51)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">ADA-accessible facilities required</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Regular cleaning and maintenance mandated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Construction Site Portable Toilet Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right units for your job site
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Units</h3>
              <p className="text-gray-600 mb-6">
                Durable, reliable portable toilets perfect for most construction sites. Includes toilet paper and hand sanitizer.
              </p>
              <button onClick={() => onPageChange('regular-toilet')} className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-600">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ADA-Accessible Units</h3>
              <p className="text-gray-600 mb-6">
                OSHA-required wheelchair accessible portable toilets with ramps, grab bars, and spacious interiors.
              </p>
              <button onClick={() => onPageChange('ada-toilet')} className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hand Wash Stations</h3>
              <p className="text-gray-600 mb-6">
                Standalone handwashing facilities to complement your portable toilets and meet hygiene standards.
              </p>
              <button onClick={() => onPageChange('hand-wash-station')} className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How many portable toilets do I need for my construction site?
              </h3>
              <p className="text-gray-600">
                OSHA requires one toilet for every 20 workers. For projects lasting more than 6 months, consider adding one unit for every 10 workers. We can help you determine the exact number based on your crew size and project duration.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How often should construction site portable toilets be serviced?
              </h3>
              <p className="text-gray-600">
                We recommend weekly service for most construction sites. High-traffic sites may require twice-weekly service. Our service includes waste removal, cleaning, restocking supplies, and equipment inspection.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are ADA-accessible units required on construction sites?
              </h3>
              <p className="text-gray-600">
                Yes, OSHA and ADA regulations require accessible facilities on construction sites. We provide ADA-compliant portable toilets with wheelchair ramps, grab bars, and spacious interiors.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can you deliver same-day for urgent construction projects?
              </h3>
              <p className="text-gray-600">
                Yes, we offer same-day delivery for most locations. Call (888) 519-9743 before noon for same-day service availability in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Your Construction Site Compliant?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Same-day delivery available. Call now for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8885199743" className="btn-primary bg-white text-green-600 hover:bg-gray-100 flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>(888) 519-9743</span>
            </a>
            <button onClick={() => onPageChange('contact')} className="btn-secondary bg-green-500 hover:bg-green-400">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionSitePage;
