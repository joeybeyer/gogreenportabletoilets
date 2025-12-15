import React from 'react';
import { CheckCircle, Users, Clock, Shield } from 'lucide-react';

interface ServicesProps {
  onPageChange: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <p className="text-sm lg:text-base font-semibold text-green-200 mb-4 uppercase tracking-wide">
            From construction sites to luxury events
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional Portable Restroom Solutions for Every Need
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Clean, reliable units delivered on time with regular service and 24/7 support. Find the perfect solution for your project or event.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Event Rentals */}
            <div className="bg-gray-50 rounded-lg p-8">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding event"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Event Rentals</h3>
              <p className="text-gray-600 mb-6">
                Perfect for weddings, festivals, concerts, and outdoor events. Our premium units ensure your guests have clean, comfortable facilities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Premium clean units</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Hand sanitizer included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Same-day delivery available</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Event coordination support</span>
                </li>
              </ul>
              <button onClick={() => onPageChange('wedding-restroom-rentals')} className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-2">
                <span>Wedding Restroom Rentals</span>
                <span>→</span>
              </button>
            </div>

            {/* Construction Sites */}
            <div className="bg-gray-50 rounded-lg p-8">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Construction Sites</h3>
              <p className="text-gray-600 mb-6">
                Durable, reliable units designed for construction and industrial sites. Built to withstand heavy use with regular maintenance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Heavy-duty construction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Weekly service included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Long-term rental discounts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Emergency service available</span>
                </li>
              </ul>
              <button onClick={() => onPageChange('construction-site-rentals')} className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-2">
                <span>Construction Site Rentals</span>
                <span>→</span>
              </button>
            </div>

            {/* ADA Accessible */}
            <div className="bg-gray-50 rounded-lg p-8">
              <img
                src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ADA accessible facilities"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">ADA Accessible Units</h3>
              <p className="text-gray-600 mb-6">
                Wheelchair accessible units that meet all ADA compliance requirements. Spacious interiors with grab bars and easy access.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>ADA compliant design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Wheelchair accessible</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Safety grab bars</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Spacious interior</span>
                </li>
              </ul>
            </div>

            {/* Hand Wash Stations */}
            <div className="bg-gray-50 rounded-lg p-8">
              <img
                src="https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hand wash station"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Hand Wash Stations</h3>
              <p className="text-gray-600 mb-6">
                Standalone hand washing stations with soap dispensers and paper towels. Perfect complement to our portable toilets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Fresh water supply</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Soap and towel dispensers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Foot-pump operation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Regular refill service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600">
              Professional service you can count on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">500+ Events</h3>
              <p className="text-gray-600">Successfully served over 500 events and construction projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Emergency service available around the clock</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Clean, well-maintained units every time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;