import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Tall trees from ground view" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 drop-shadow-lg">
            <span className="block">Expert Tree Services in</span>
            <span className="text-green-400">Tulsa, Oklahoma</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-lg">
            From precision trimming to complete tree removal, our certified arborists 
            ensure the health and safety of your trees with professional, reliable service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get a Free Quote
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
            <a 
              href="tel:918-221-1073" 
              className="bg-white hover:bg-gray-100 text-green-800 font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 918-221-1073
            </a>
          </div>
          
          <div className="mt-12 flex items-center">
            <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">24/7 Emergency Service</span>
            <span className="ml-4 text-gray-200">Licensed & Insured</span>
            <span className="ml-4 text-gray-200">Free Estimates</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="animate-bounce w-2 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;