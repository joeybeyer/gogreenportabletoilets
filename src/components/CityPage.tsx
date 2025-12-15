import React, { useEffect } from 'react';
import { Phone, CheckCircle, MapPin, Star, Clock } from 'lucide-react';
import type { CityWithState } from '../data/cities';
import { createLocalBusinessSchema, createBreadcrumbSchema, injectMultipleSchemas } from '../utils/schema';
import { setMetaTags, generateCityMetaTags } from '../utils/meta';

interface CityPageProps {
  city: CityWithState;
  onPageChange: (page: string) => void;
}

const CityPage: React.FC<CityPageProps> = ({ city, onPageChange }) => {
  useEffect(() => {
    const metaTags = generateCityMetaTags(city.name, city.state_name || city.state_code, city.state_code);
    setMetaTags(metaTags);

    const localBusinessSchema = createLocalBusinessSchema(
      city.name,
      city.state_name || city.state_code,
      city.state_code,
      city.description
    );

    const breadcrumbSchema = createBreadcrumbSchema([
      { name: 'Home', url: 'https://flushondemand.com' },
      { name: 'Service Areas', url: 'https://flushondemand.com/areas' },
      { name: `${city.name}, ${city.state_code}`, url: `https://flushondemand.com/${city.name.toLowerCase().replace(/\s+/g, '-')}-${city.state_code.toLowerCase()}` }
    ]);

    injectMultipleSchemas([localBusinessSchema, breadcrumbSchema]);
  }, [city]);

  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-8 h-8" />
            <span className="text-xl">{city.name}, {city.state_code}</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Portable Toilet Rentals in {city.name}
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Professional portable sanitation services for {city.name} events, construction sites, and gatherings
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Serving {city.name}, {city.state_code}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {city.description || `GoGreen Portable Toilets proudly serves ${city.name} and the surrounding areas with premium portable toilet rentals. Whether you're planning a wedding, festival, construction project, or outdoor event, we provide clean, reliable sanitation solutions.`}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our local service team understands the unique needs of {city.name} residents and businesses. We offer same-day delivery, regular maintenance, and 24/7 emergency service throughout the {city.name} area.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Same-day delivery in {city.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Serving all {city.name} neighborhoods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Local service team you can trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>24/7 emergency service available</span>
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
                alt={`Portable toilets in ${city.name}`}
                className="rounded-lg shadow-lg mb-6"
              />

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose GoGreen in {city.name}?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Over 500 satisfied customers in the {city.name} area</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Fast, reliable service with on-time delivery guarantee</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Clean, well-maintained units serviced regularly</span>
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
              Our Services in {city.name}
            </h2>
            <p className="text-xl text-gray-600">
              Complete portable toilet solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => onPageChange('regular-toilet')}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard Units</h3>
              <p className="text-gray-600 text-sm">Perfect for construction sites and outdoor events</p>
            </button>

            <button
              onClick={() => onPageChange('deluxe-toilet')}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deluxe Units</h3>
              <p className="text-gray-600 text-sm">Upgraded facilities for weddings and upscale events</p>
            </button>

            <button
              onClick={() => onPageChange('ada-toilet')}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ADA Accessible</h3>
              <p className="text-gray-600 text-sm">Wheelchair accessible units meeting all requirements</p>
            </button>

            <button
              onClick={() => onPageChange('hand-wash-station')}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hand Wash Stations</h3>
              <p className="text-gray-600 text-sm">Standalone handwashing facilities</p>
            </button>
          </div>

          <div className="text-center mt-8">
            <button onClick={() => onPageChange('services')} className="btn-primary">
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Rent in {city.name}?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get a free quote today and see why we're the trusted choice in {city.name}
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

export default CityPage;
