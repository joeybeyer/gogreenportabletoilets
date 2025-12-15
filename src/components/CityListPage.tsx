import React, { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import { getAllCities, searchCities, type CityWithState } from '../data/cities';

interface CityListPageProps {
  onPageChange: (page: string) => void;
}

const CityListPage: React.FC<CityListPageProps> = ({ onPageChange }) => {
  const [cities, setCities] = useState<CityWithState[]>([]);
  const [filteredCities, setFilteredCities] = useState<CityWithState[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {
    setLoading(true);
    const allCities = await getAllCities();
    setCities(allCities);
    setFilteredCities(allCities);
    setLoading(false);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredCities(cities);
    } else {
      const results = await searchCities(query);
      setFilteredCities(results);
    }
  };

  const groupByState = (cityList: CityWithState[]) => {
    const grouped: { [key: string]: CityWithState[] } = {};
    cityList.forEach(city => {
      const stateKey = `${city.state_name} (${city.state_code})`;
      if (!grouped[stateKey]) {
        grouped[stateKey] = [];
      }
      grouped[stateKey].push(city);
    });
    return grouped;
  };

  const groupedCities = groupByState(filteredCities);
  const sortedStates = Object.keys(groupedCities).sort();

  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Service Areas
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            GoGreen Portable Toilets proudly serves communities across multiple states
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for your city..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Loading service areas...</p>
            </div>
          ) : filteredCities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No cities found. Try a different search term.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {sortedStates.map(state => (
                <div key={state}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{state}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupedCities[state].map(city => (
                      <button
                        key={city.id}
                        onClick={() => onPageChange(city.slug)}
                        className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors text-left"
                      >
                        <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">{city.name}</div>
                          {city.population > 0 && (
                            <div className="text-sm text-gray-600">
                              Pop: {city.population.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Don't See Your City?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're constantly expanding our service areas. Contact us to see if we can serve your location!
          </p>
          <button onClick={() => onPageChange('contact')} className="btn-primary">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default CityListPage;
