import React from 'react';
import { services } from '../data/services';
import { 
  Axe, 
  Scissors, 
  Hammer, 
  Siren, 
  Stethoscope, 
  Cable,
  ArrowRight
} from 'lucide-react';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'axe': return <Axe className="w-6 h-6" />;
    case 'scissors': return <Scissors className="w-6 h-6" />;
    case 'hammer': return <Hammer className="w-6 h-6" />;
    case 'siren': return <Siren className="w-6 h-6" />;
    case 'stethoscope': return <Stethoscope className="w-6 h-6" />;
    case 'cable': return <Cable className="w-6 h-6" />;
    default: return null;
  }
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tree Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Professional tree care services to keep your property safe, beautiful, and healthy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 mb-5">
                  {getIconComponent(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center font-medium text-green-700 hover:text-green-800 transition-colors"
                >
                  Request Service <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-md shadow-md transition-all duration-300"
          >
            Request a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;