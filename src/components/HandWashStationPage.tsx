import React from 'react';
import { Phone, CheckCircle, Droplet, Users } from 'lucide-react';

interface HandWashStationPageProps {
  onPageChange: (page: string) => void;
}

const HandWashStationPage: React.FC<HandWashStationPageProps> = ({ onPageChange }) => {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Portable Hand Wash Stations
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Standalone handwashing facilities with soap, water, and paper towels
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Hand Wash Station
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our portable hand wash stations provide convenient handwashing facilities for any outdoor event
                or construction site. Perfect companion to our portable toilets.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Fresh water supply (up to 50 gallons)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Soap dispensers on each sink</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Paper towel dispensers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Foot-pump operation (no electricity needed)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Multiple sink stations available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Regular refill service included</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:8885199743" className="btn-primary flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>(888) 519-9743</span>
                </a>
                <button onClick={() => onPageChange('contact')} className="btn-secondary">
                  Request Info
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hand wash station"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

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
                <Droplet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Food Events</h3>
              <p className="text-gray-600">
                Essential for festivals, fairs, and events serving food where handwashing is required.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction Sites</h3>
              <p className="text-gray-600">
                Meet health and safety requirements with convenient handwashing facilities.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Any Outdoor Event</h3>
              <p className="text-gray-600">
                Provide proper hygiene facilities alongside portable toilets at any event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandWashStationPage;
