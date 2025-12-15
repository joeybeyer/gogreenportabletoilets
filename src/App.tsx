import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RegularToiletPage from './pages/RegularToiletPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import DeluxeToiletPage from './components/DeluxeToiletPage';
import DeluxePlusToiletPage from './components/DeluxePlusToiletPage';
import ADAToiletPage from './components/ADAToiletPage';
import TowableToiletPage from './components/TowableToiletPage';
import TowableDeluxePage from './components/TowableDeluxePage';
import HandWashStationPage from './components/HandWashStationPage';
import HandWashADAPage from './components/HandWashADAPage';
import HandSanitizePage from './components/HandSanitizePage';
import SustainabilityPage from './components/SustainabilityPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import ThankYouPage from './components/ThankYouPage';
import CityPage from './components/CityPage';
import CityListPage from './components/CityListPage';
import StateListPage from './components/StateListPage';
import ConstructionSitePage from './pages/ConstructionSitePage';
import WeddingRestroomPage from './pages/WeddingRestroomPage';
import { getCityBySlug } from './data/cities';

function App() {
  const [currentPage, setCurrentPage] = React.useState(() => {
    const path = window.location.pathname.substring(1);
    return path || 'home';
  });
  const [cityData, setCityData] = React.useState<any>(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when changing pages with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update URL without page reload
    window.history.pushState(null, '', `/${page === 'home' ? '' : page}`);
  };

  // Handle browser back/forward buttons
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1);
      setCurrentPage(path || 'home');
      // Scroll to top on browser navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Ensure scroll to top when currentPage changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Load city data when currentPage changes
  React.useEffect(() => {
    const loadCity = async () => {
      try {
        // Only try to load city data if it's not a known route
        const knownRoutes = [
          'home', 'regular-toilet', 'deluxe-toilet', 'deluxe-plus-toilet',
          'ada-toilet', 'towable-toilet', 'towable-deluxe', 'hand-wash-station',
          'hand-wash-ada', 'hand-sanitize', 'contact', 'about', 'services',
          'sustainability', 'privacy', 'terms', 'thank-you', 'service-areas', 'states',
          'construction-site-rentals', 'wedding-restroom-rentals'
        ];

        if (!knownRoutes.includes(currentPage)) {
          const city = await getCityBySlug(currentPage);
          setCityData(city);
        } else {
          setCityData(null);
        }
      } catch (error) {
        console.error('Error loading city:', error);
        setCityData(null);
      }
    };
    loadCity();
  }, [currentPage]);

  const renderPage = () => {
    // Check if it's a city page
    if (cityData) {
      return <CityPage city={cityData} onPageChange={handlePageChange} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'regular-toilet':
        return <RegularToiletPage onPageChange={handlePageChange} />;
      case 'deluxe-toilet':
        return <DeluxeToiletPage onPageChange={handlePageChange} />;
      case 'deluxe-plus-toilet':
        return <DeluxePlusToiletPage onPageChange={handlePageChange} />;
      case 'ada-toilet':
        return <ADAToiletPage onPageChange={handlePageChange} />;
      case 'towable-toilet':
        return <TowableToiletPage onPageChange={handlePageChange} />;
      case 'towable-deluxe':
        return <TowableDeluxePage onPageChange={handlePageChange} />;
      case 'hand-wash-station':
        return <HandWashStationPage onPageChange={handlePageChange} />;
      case 'hand-wash-ada':
        return <HandWashADAPage onPageChange={handlePageChange} />;
      case 'hand-sanitize':
        return <HandSanitizePage onPageChange={handlePageChange} />;
      case 'contact':
        return <Contact onPageChange={handlePageChange} />;
      case 'about':
        return <About onPageChange={handlePageChange} />;
      case 'services':
        return <Services onPageChange={handlePageChange} />;
      case 'sustainability':
        return <SustainabilityPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'thank-you':
        return <ThankYouPage />;
      case 'service-areas':
        return <CityListPage onPageChange={handlePageChange} />;
      case 'states':
        return <StateListPage onPageChange={handlePageChange} />;
      case 'construction-site-rentals':
        return <ConstructionSitePage onPageChange={handlePageChange} />;
      case 'wedding-restroom-rentals':
        return <WeddingRestroomPage onPageChange={handlePageChange} />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      {renderPage()}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;