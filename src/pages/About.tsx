import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

interface AboutProps {
  onPageChange: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onPageChange }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About GoGreen
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Your trusted partner for clean, reliable portable toilet solutions since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, GoGreen Portable Toilets started with a simple mission: provide the cleanest, 
                most reliable portable toilet solutions in the region. What began as a small family business 
                has grown into the area's most trusted portable sanitation company.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We've served over 500 events, from intimate weddings to large festivals, and countless 
                construction projects. Our commitment to cleanliness, reliability, and exceptional customer 
                service has made us the go-to choice for portable toilet rentals.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and expand our services while maintaining the personal touch 
                and attention to detail that our customers have come to expect.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional service team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our customers and their experience.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in cleanliness, equipment, and service delivery.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                When you need us, we're there. On time, every time, with dependable service.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We're proud to serve our local community and support the events that bring us together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The dedicated professionals behind GoGreen's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sarah Johnson"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-green-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                Sarah founded GoGreen with a vision to revolutionize portable sanitation. 
                Her commitment to excellence drives our company culture.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Michael Chen"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-green-600 font-medium mb-3">Operations Manager</p>
              <p className="text-gray-600">
                Michael ensures our operations run smoothly, from scheduling deliveries 
                to maintaining our fleet of premium units.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Emily Rodriguez"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-green-600 font-medium mb-3">Customer Success</p>
              <p className="text-gray-600">
                Emily works directly with our clients to ensure every event and project 
                receives the perfect portable sanitation solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-green-200">Events Served</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">14</div>
              <div className="text-green-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-green-200">Service Available</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-green-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;