import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea = () => {
  const locations = [
    "Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks", 
    "Sand Springs", "Sapulpa", "Claremore", "Catoosa", "Glenpool"
  ];

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Service Area</h2>
          <p className="max-w-2xl mx-auto text-green-100">
            Serving Tulsa and surrounding communities with expert tree services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-green-300" />
                    <span>{location}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-green-200">
                  Not sure if we service your area? Contact us today to find out!
                </p>
                <a 
                  href="#contact" 
                  className="inline-block mt-4 bg-white text-green-800 font-medium py-2 px-6 rounded-md transition-colors hover:bg-green-100"
                >
                  Check Availability
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/assets/ChainsawCut.webp" 
              alt="Map of Tulsa, Oklahoma and surrounding areas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white/90 text-green-800 px-4 py-3 rounded-lg shadow-lg font-semibold">
                Tulsa & Surrounding Areas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;