import React, { useEffect } from 'react';
import { CheckCircle, Phone, Mail } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-600725915/BbPqCI_ppvAaEJuzuZ4C',
        'value': 200,
        'currency': 'USD'
      });
    }

    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'CompleteRegistration');
      window.fbq('trackCustom', 'QuoteCompleted');
    }
  }, []);

  return (
    <div>
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Thank You!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            We've received your request and will get back to you within 24 hours with a detailed quote.
          </p>

          <div className="bg-green-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <div className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Review Your Request</h3>
                  <p className="text-gray-600">
                    Our team will review your requirements and event details.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Prepare Your Quote</h3>
                  <p className="text-gray-600">
                    We'll calculate the best pricing and options for your specific needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Contact You</h3>
                  <p className="text-gray-600">
                    A team member will reach out within 24 hours to discuss your quote and answer any questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-600 mb-6">
              If you have an urgent need or questions, don't hesitate to contact us directly:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8885199743" className="btn-primary flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call (888) 519-9743</span>
              </a>
              <a href="mailto:info@gogreentoilets.com" className="btn-secondary flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Choose GoGreen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service Available</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">14+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
