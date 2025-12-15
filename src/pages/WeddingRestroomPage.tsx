import React, { useEffect } from 'react';
import { Phone, CheckCircle, Heart, Sparkles, Star, Users } from 'lucide-react';
import { setMetaTags, generateServiceMetaTags } from '../utils/meta';
import { createServiceSchema, createFAQSchema, injectMultipleSchemas } from '../utils/schema';

interface WeddingRestroomPageProps {
  onPageChange: (page: string) => void;
}

const WeddingRestroomPage: React.FC<WeddingRestroomPageProps> = ({ onPageChange }) => {
  useEffect(() => {
    const metaTags = generateServiceMetaTags(
      'Wedding Portable Restroom Rentals',
      'Luxury portable restrooms for weddings. Elegant, clean facilities that match your special day. Deluxe units with running water, mirrors, climate control. Call (888) 519-9743.'
    );
    setMetaTags(metaTags);

    const serviceSchema = createServiceSchema(
      'Wedding Portable Restroom Rental',
      'Elegant portable restroom solutions for weddings with deluxe units, luxury trailers, and premium service to ensure your guests enjoy comfortable facilities.',
      'United States'
    );

    const faqSchema = createFAQSchema([
      {
        question: 'How many portable restrooms do I need for my wedding?',
        answer: 'For a 4-hour wedding, we recommend 1 restroom for every 50 guests. For longer receptions or events with bars, consider 1 per 35 guests. We always recommend including at least one ADA-accessible unit.'
      },
      {
        question: 'What type of portable restroom is best for weddings?',
        answer: 'We recommend our Deluxe or Deluxe Plus units for weddings. These feature flushing toilets, running water, mirrors, interior lighting, and premium finishes that match the elegance of your event.'
      },
      {
        question: 'When should portable restrooms be delivered for a wedding?',
        answer: 'We typically deliver 1-2 days before your wedding to ensure everything is perfect. Our team will place units discreetly and ensure they are immaculately clean for your big day.'
      },
      {
        question: 'Can portable restrooms match my wedding theme?',
        answer: 'Yes! Our deluxe units feature neutral, elegant interiors. We can also provide luxury restroom trailers with upscale finishes for high-end weddings. Contact us to discuss your specific aesthetic needs.'
      }
    ]);

    injectMultipleSchemas([serviceSchema, faqSchema]);
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-10 h-10" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Wedding Portable Restroom Rentals
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Elegant, Luxury Portable Restrooms for Your Special Day
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Restroom Facilities That Match Your Wedding Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your wedding day deserves facilities as beautiful as your venue. Flush On Demand provides luxury portable restrooms that ensure your guests enjoy elegant, comfortable facilities throughout your celebration.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From intimate garden ceremonies to grand outdoor receptions, we offer deluxe units with premium amenities including flushing toilets, running water, mirrors, climate control, and sophisticated interiors that complement any wedding style.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Luxury units with running water and mirrors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Climate-controlled for guest comfort</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Immaculately cleaned and serviced</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Discreet placement and setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">On-site attendant service available</span>
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
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury portable restrooms for weddings"
                className="rounded-lg shadow-lg mb-6"
              />

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Wedding Planning Made Easy
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Free consultation to determine exact needs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Delivery and setup timed to your schedule</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">24/7 emergency support during your event</span>
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
              Wedding Restroom Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect facilities for your guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Deluxe Units</h3>
              <p className="text-gray-600 mb-6">
                Elegant portable restrooms with flushing toilets, interior lighting, and premium finishes. Perfect for most weddings.
              </p>
              <button onClick={() => onPageChange('deluxe-toilet')} className="w-full text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-600">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Recommended
              </div>
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Deluxe Plus Units</h3>
              <p className="text-gray-600 mb-6">
                Luxury restrooms with built-in sinks, mirrors, running water, and climate control. The ultimate wedding experience.
              </p>
              <button onClick={() => onPageChange('deluxe-plus-toilet')} className="w-full text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">ADA-Accessible</h3>
              <p className="text-gray-600 mb-6">
                Wheelchair accessible units ensuring all your guests can comfortably attend your celebration.
              </p>
              <button onClick={() => onPageChange('ada-toilet')} className="w-full text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Wedding Restroom Rental FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How many portable restrooms do I need for my wedding?
              </h3>
              <p className="text-gray-600">
                For a 4-hour wedding, we recommend 1 restroom for every 50 guests. For longer receptions or events with bars, consider 1 per 35 guests. We always recommend including at least one ADA-accessible unit.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What type of portable restroom is best for weddings?
              </h3>
              <p className="text-gray-600">
                We recommend our Deluxe or Deluxe Plus units for weddings. These feature flushing toilets, running water, mirrors, interior lighting, and premium finishes that match the elegance of your event.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                When should portable restrooms be delivered for a wedding?
              </h3>
              <p className="text-gray-600">
                We typically deliver 1-2 days before your wedding to ensure everything is perfect. Our team will place units discreetly and ensure they are immaculately clean for your big day.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can portable restrooms match my wedding theme?
              </h3>
              <p className="text-gray-600">
                Yes! Our deluxe units feature neutral, elegant interiors. We can also provide luxury restroom trailers with upscale finishes for high-end weddings. Contact us to discuss your specific aesthetic needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Reserve Restrooms for Your Wedding?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Book early to secure the best units for your wedding date.
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

export default WeddingRestroomPage;
