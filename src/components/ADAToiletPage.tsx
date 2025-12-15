import React from 'react';
import { Phone, CheckCircle, Accessibility, Shield } from 'lucide-react';

interface ADAToiletPageProps {
  onPageChange: (page: string) => void;
}

const ADAToiletPage: React.FC<ADAToiletPageProps> = ({ onPageChange }) => {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            ADA Accessible Portable Toilets
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Wheelchair accessible units meeting all ADA compliance requirements
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                ADA Compliant Portable Toilet
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our ADA-accessible portable toilets provide spacious, wheelchair-friendly facilities that meet
                all federal accessibility guidelines for public events and construction sites.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Wheelchair accessible ramp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Extra-wide door and interior space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Safety grab bars</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Lowered fixtures for easy access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Interior lighting</span>
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
                src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ADA accessible portable toilet"
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
                Required for festivals, concerts, and public gatherings to meet accessibility laws.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction Sites</h3>
              <p className="text-gray-600">
                Meet OSHA and ADA requirements for accessible facilities at job sites.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Any Event</h3>
              <p className="text-gray-600">
                Ensure all guests have comfortable, accessible restroom facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ADAToiletPage;
