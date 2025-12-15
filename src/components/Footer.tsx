import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <button onClick={() => onPageChange('home')} className="mb-4 block">
              <img
                src="/logo.png"
                alt="Flush On Demand Logo"
                className="h-16 w-auto"
              />
            </button>
            <p className="text-gray-400 mb-4">
              Providing clean, reliable portable toilet solutions for events, construction sites, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => onPageChange('home')} className="text-left text-gray-400 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => onPageChange('services')} className="text-left text-gray-400 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => onPageChange('about')} className="text-left text-gray-400 hover:text-white transition-colors">
                About Us
              </button>
              <button onClick={() => onPageChange('contact')} className="text-left text-gray-400 hover:text-white transition-colors">
                Contact
              </button>
            </nav>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => onPageChange('wedding-restroom-rentals')} className="text-left text-gray-400 hover:text-white transition-colors">
                Wedding Restrooms
              </button>
              <button onClick={() => onPageChange('construction-site-rentals')} className="text-left text-gray-400 hover:text-white transition-colors">
                Construction Sites
              </button>
              <button onClick={() => onPageChange('ada-toilet')} className="text-left text-gray-400 hover:text-white transition-colors">
                ADA Accessible
              </button>
              <button onClick={() => onPageChange('regular-toilet')} className="text-left text-gray-400 hover:text-white transition-colors">
                Standard Rentals
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">info@gogreentoilets.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">123 Service St, Your City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-gray-400">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sat: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-400">Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 GoGreen Portable Toilets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;