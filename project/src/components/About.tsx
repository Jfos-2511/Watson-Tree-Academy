import React from 'react';
import { CheckCircle, Award, Clock, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/assets/WatsonChainsaw.webp" 
              alt="Professional arborist working in a tree" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
          
          <div>
            <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Tulsa Tree Service
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted Tree Care Professionals in Tulsa, Oklahoma
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Since 2010, we've been providing Tulsa and surrounding communities with expert tree care services. 
              Our team of certified arborists combines years of experience with modern techniques to deliver 
              the highest quality tree services while ensuring the safety of your property and loved ones.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Professional, certified arborists with extensive training</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Modern equipment and techniques for safe, efficient service</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Fully licensed and insured for your protection</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">Committed to environmental responsibility and tree preservation</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900">Certified</h3>
                <p className="text-sm text-gray-600">ISA Certified Arborists</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Clock className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900">Responsive</h3>
                <p className="text-sm text-gray-600">24/7 Emergency Service</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900">Established</h3>
                <p className="text-sm text-gray-600">Serving Tulsa since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;