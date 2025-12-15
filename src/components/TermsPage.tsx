import React from 'react';
import { FileText } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-16 h-16 text-green-600" />
          </div>

          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the services of GoGreen Portable Toilets, you accept and agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rental Services</h2>
            <p className="text-gray-600 mb-4">
              Our portable toilet rental services are subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Rentals are subject to availability and confirmation</li>
              <li>Minimum rental periods may apply</li>
              <li>Delivery and pickup times will be scheduled based on availability</li>
              <li>Site access must be provided for delivery and service</li>
              <li>Customer is responsible for providing accurate location and event information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Payment is due as specified in your rental agreement</li>
              <li>We accept credit cards, checks, and approved business accounts</li>
              <li>Late payments may incur additional fees</li>
              <li>Prices are subject to change with notice</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
            <p className="text-gray-600 mb-6">
              Cancellations must be made at least 48 hours before scheduled delivery to avoid charges.
              Cancellations made with less notice may incur a cancellation fee. Emergency cancellations
              due to weather or unforeseen circumstances will be handled on a case-by-case basis.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              Customers are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Ensuring safe and accessible delivery location</li>
              <li>Notifying us of any site restrictions or special requirements</li>
              <li>Preventing misuse or damage to rental units</li>
              <li>Ensuring units are not moved or relocated without authorization</li>
              <li>Reporting any damage or issues promptly</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability and Damage</h2>
            <p className="text-gray-600 mb-6">
              Customers are responsible for any damage to rental units beyond normal wear and tear.
              Charges will apply for vandalism, theft, or improper use. We maintain insurance on our
              equipment, but customers may be held liable for damage caused by negligence.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Modifications</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any
              time. We will provide reasonable notice of significant changes when possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              Our liability is limited to the amount paid for the rental service. We are not responsible
              for indirect, consequential, or incidental damages arising from the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms are governed by the laws of the state in which we operate. Any disputes will
              be resolved in the courts of that jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none text-gray-600 space-y-2">
              <li>Email: info@gogreentoilets.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Service Street, Your City, ST 12345</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
