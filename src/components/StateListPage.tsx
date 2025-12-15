import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { getAllStates, type State } from '../data/states';

interface StateListPageProps {
  onPageChange: (page: string) => void;
}

const StateListPage: React.FC<StateListPageProps> = ({ onPageChange }) => {
  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStates();
  }, []);

  const loadStates = async () => {
    setLoading(true);
    const allStates = await getAllStates();
    setStates(allStates);
    setLoading(false);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            States We Serve
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Professional portable toilet rentals across multiple states
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Loading states...</p>
            </div>
          ) : states.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No service areas found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {states.map(state => (
                <button
                  key={state.id}
                  onClick={() => onPageChange('service-areas')}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 hover:shadow-lg transition-all text-left group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-900">{state.code}</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{state.name}</h4>

                  {state.cities_count > 0 && (
                    <p className="text-gray-600 mb-3">
                      {state.cities_count} {state.cities_count === 1 ? 'city' : 'cities'} served
                    </p>
                  )}

                  {state.description && (
                    <p className="text-gray-600 text-sm line-clamp-3">{state.description}</p>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Find Your City
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Browse all the cities we serve to find your location
          </p>
          <button onClick={() => onPageChange('service-areas')} className="btn-primary">
            View All Cities
          </button>
        </div>
      </section>
    </div>
  );
};

export default StateListPage;
