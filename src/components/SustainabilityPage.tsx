import React from 'react';
import { Leaf, Droplet, Recycle, Sun } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Commitment to Sustainability
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Providing eco-friendly portable sanitation solutions that protect our environment
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why GoGreen?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At GoGreen Portable Toilets, sustainability isn't just part of our name – it's at the core of
              everything we do. We're committed to providing clean, reliable portable sanitation while minimizing
              our environmental impact.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From the products we use to the way we service our units, we make environmentally conscious decisions
              at every step to ensure a cleaner, greener future for all.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Green Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Droplet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Water Conservation</h3>
              <p className="text-gray-600">
                Our units use minimal water while maintaining hygiene standards. Compared to traditional
                restrooms, our portable toilets save thousands of gallons of water per unit annually.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly Products</h3>
              <p className="text-gray-600">
                We use biodegradable chemicals and environmentally safe cleaning products in all our units.
                Our toilet paper and paper products are made from recycled materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsible Waste Management</h3>
              <p className="text-gray-600">
                All waste is processed at EPA-approved treatment facilities. We follow strict environmental
                guidelines for waste transportation and disposal to protect local waterways and ecosystems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fleet Efficiency</h3>
              <p className="text-gray-600">
                We optimize service routes to reduce fuel consumption and emissions. Our modern fleet vehicles
                meet current emission standards and are maintained for maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Continuous Improvement
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're constantly researching and implementing new technologies and practices to reduce our environmental
              footprint. From solar-powered lighting options to advanced waste treatment methods, we stay at the
              forefront of sustainable sanitation solutions.
            </p>
            <p className="text-lg text-gray-600">
              When you choose GoGreen, you're not just getting quality portable toilet services – you're partnering
              with a company that cares about the planet and is actively working to make a positive difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
