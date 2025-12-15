import React from 'react';
import { Phone, CheckCircle, Star, Users } from 'lucide-react';

const RegularToiletPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Regular Portable Toilets
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Clean, reliable standard portable toilets perfect for construction sites and outdoor events
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Standard Portable Toilet
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our regular portable toilets provide essential sanitation facilities for any outdoor event or construction site. 
                Built for durability and maintained to the highest cleanliness standards.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Clean, well-maintained units</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Toilet paper and hand sanitizer included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Regular cleaning and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Same-day delivery available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:8885199743" className="btn-primary flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call for Quote</span>
                </a>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Regular portable toilet"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction Sites</h3>
              <p className="text-gray-600">
                Durable units designed for heavy use on construction and industrial sites.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Outdoor Events</h3>
              <p className="text-gray-600">
                Clean facilities for festivals, fairs, and outdoor gatherings.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Use</h3>
              <p className="text-gray-600">
                Quick deployment for emergency situations and temporary needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegularToiletPage;