import React from 'react';
import { Phone, CheckCircle, Star, Sparkles } from 'lucide-react';

interface DeluxePlusToiletPageProps {
  onPageChange: (page: string) => void;
}

const DeluxePlusToiletPage: React.FC<DeluxePlusToiletPageProps> = ({ onPageChange }) => {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Deluxe Plus Portable Toilets
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Our premium luxury portable toilet with sink, mirror, and full amenities
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Deluxe Plus Portable Toilet
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The ultimate in portable luxury. Our Deluxe Plus units include an interior sink with running water,
                mirror, and upscale finishes that rival permanent facilities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Built-in sink with running water</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Large mirror and vanity area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Premium interior lighting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Flushing toilet with freshwater</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Soap dispenser and paper towels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Climate-controlled ventilation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Luxury interior finishes</span>
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
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Deluxe Plus portable toilet"
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
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Luxury Weddings</h3>
              <p className="text-gray-600">
                The perfect complement to upscale wedding venues and high-end ceremonies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">VIP Events</h3>
              <p className="text-gray-600">
                Premium facilities for executive gatherings, galas, and exclusive events.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Film & Production</h3>
              <p className="text-gray-600">
                Talent trailers and VIP facilities for on-location filming and productions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeluxePlusToiletPage;
