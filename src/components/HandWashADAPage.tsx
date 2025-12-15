import React from 'react';
import { Phone, CheckCircle, Accessibility, Droplet } from 'lucide-react';

interface HandWashADAPageProps {
  onPageChange: (page: string) => void;
}

const HandWashADAPage: React.FC<HandWashADAPageProps> = ({ onPageChange }) => {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            ADA Accessible Hand Wash Stations
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Wheelchair accessible handwashing facilities meeting ADA compliance standards
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                ADA Hand Wash Station
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our ADA-compliant hand wash stations feature accessible height sinks and controls,
                making handwashing facilities available to all guests and workers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Wheelchair accessible height</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Easy-to-use lever controls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Accessible soap and towel dispensers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Fresh water supply</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Stable base for wheelchair access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Fully ADA compliant design</span>
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
                alt="ADA accessible hand wash station"
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
                <Accessibility className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Public Events</h3>
              <p className="text-gray-600">
                Ensure all attendees have access to proper handwashing facilities.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Food Service Events</h3>
              <p className="text-gray-600">
                Required accessible handwashing for events serving food to the public.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction Sites</h3>
              <p className="text-gray-600">
                Meet ADA requirements for accessible handwashing facilities at job sites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandWashADAPage;
