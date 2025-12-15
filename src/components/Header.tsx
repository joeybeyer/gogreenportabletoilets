import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="GoGreen Portable Toilets Logo"
              className="h-16 md:h-20 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${currentPage === 'home' ? 'text-green-600' : ''}`}
            >
              Home
            </button>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${currentPage === 'services' ? 'text-green-600' : ''}`}
              >
                Services
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50">
                  <button
                    onClick={() => handleNavClick('services')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    All Services
                  </button>
                  <div className="border-t border-gray-100 my-2"></div>
                  <button
                    onClick={() => handleNavClick('wedding-restroom-rentals')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Wedding Restrooms
                  </button>
                  <button
                    onClick={() => handleNavClick('construction-site-rentals')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Construction Sites
                  </button>
                  <button
                    onClick={() => handleNavClick('ada-toilet')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    ADA Accessible
                  </button>
                  <button
                    onClick={() => handleNavClick('regular-toilet')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    Standard Rentals
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${currentPage === 'about' ? 'text-green-600' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${currentPage === 'contact' ? 'text-green-600' : ''}`}
            >
              Contact
            </button>
            <a href="tel:8885199743" className="btn-primary flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(888) 519-9743</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left text-gray-700 hover:text-green-600 font-medium transition-colors ${currentPage === 'home' ? 'text-green-600' : ''}`}
              >
                Home
              </button>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`text-left text-gray-700 hover:text-green-600 font-medium transition-colors w-full ${currentPage === 'services' ? 'text-green-600' : ''}`}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="block text-left text-gray-600 hover:text-green-600 text-sm"
                    >
                      All Services
                    </button>
                    <button
                      onClick={() => handleNavClick('wedding-restroom-rentals')}
                      className="block text-left text-gray-600 hover:text-green-600 text-sm"
                    >
                      Wedding Restrooms
                    </button>
                    <button
                      onClick={() => handleNavClick('construction-site-rentals')}
                      className="block text-left text-gray-600 hover:text-green-600 text-sm"
                    >
                      Construction Sites
                    </button>
                    <button
                      onClick={() => handleNavClick('ada-toilet')}
                      className="block text-left text-gray-600 hover:text-green-600 text-sm"
                    >
                      ADA Accessible
                    </button>
                    <button
                      onClick={() => handleNavClick('regular-toilet')}
                      className="block text-left text-gray-600 hover:text-green-600 text-sm"
                    >
                      Standard Rentals
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left text-gray-700 hover:text-green-600 font-medium transition-colors ${currentPage === 'about' ? 'text-green-600' : ''}`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left text-gray-700 hover:text-green-600 font-medium transition-colors ${currentPage === 'contact' ? 'text-green-600' : ''}`}
              >
                Contact
              </button>
              <a href="tel:8885199743" className="btn-primary flex items-center space-x-2 w-fit">
                <Phone className="w-4 h-4" />
                <span>(888) 519-9743</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;