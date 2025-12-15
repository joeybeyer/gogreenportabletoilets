import React from 'react';
import { CheckCircle, Phone, Star, Users, Clock, Shield } from 'lucide-react';

interface HomeProps {
  onPageChange: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-sm lg:text-base font-semibold text-green-200 mb-4 uppercase tracking-wide">
                Trusted by 500+ construction sites and events nationwide
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Keep Your Job Site Compliant with Clean, Reliable Portable Restrooms
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-green-50 leading-relaxed">
                Same-day delivery, weekly servicing, and 24/7 support. From construction sites to outdoor events, we handle the details so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onPageChange('contact')}
                  className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Free Quote Today
                </button>
                <a
                  href="tel:8885199743"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(888) 519-9743</span>
                </a>
              </div>
            </div>
            <div className="relative lg:block hidden">
              <img
                src="/hero_image.jpg"
                alt="GoGreen portable toilets at construction site"
                className="rounded-lg shadow-2xl w-full h-auto"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-gray-600">Verified Customer Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GoGreen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the cleanest, most reliable portable toilet solutions with exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Always Clean</h3>
              <p className="text-gray-600">
                Regular cleaning and maintenance ensure our units are always spotless and well-stocked.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Service</h3>
              <p className="text-gray-600">
                Emergency service available around the clock. Same-day delivery and pickup available.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Licensed</h3>
              <p className="text-gray-600">
                Licensed, insured, and compliant with all health and safety regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete portable toilet solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding event setup"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Wedding Restrooms</h3>
                <p className="text-gray-600 mb-4">
                  Elegant luxury portable restrooms perfect for weddings. Deluxe units with running water and climate control.
                </p>
                <button onClick={() => onPageChange('wedding-restroom-rentals')} className="text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Construction Sites</h3>
                <p className="text-gray-600 mb-4">
                  OSHA-compliant portable toilets for job sites. Same-day delivery with weekly service included.
                </p>
                <button onClick={() => onPageChange('construction-site-rentals')} className="text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ADA accessible facilities"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">ADA Accessible</h3>
                <p className="text-gray-600 mb-4">
                  Wheelchair accessible units that meet all ADA compliance requirements for public events.
                </p>
                <button onClick={() => onPageChange('ada-toilet')} className="text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Portable Restrooms Delivered Today?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join 500+ satisfied customers. Get your free quote in under 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
            >
              Get Free Quote Today
            </button>
            <a
              href="tel:8885199743"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(888) 519-9743</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;