import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/assets/wta-Logo.webp" 
                alt="Watson Tree Academy Logo" 
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white">
                  Watson Tree Academy
                </span>
                <span className="text-xs text-green-400">
                  Always Learning, Always Growing.
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Providing expert tree services to Tulsa and surrounding areas since 2010. 
              Our certified arborists are committed to maintaining the health and beauty of your trees.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-white" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-white" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Tree Removal
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Deadwooding
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Trimming
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  24/7 Emergency Tree Services
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:918-221-1073" className="text-gray-300 hover:text-white transition-colors">
                    (918) 221-1073
                  </a>
                  <p className="text-xs text-gray-500">24/7 Emergency Service</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:watsontreeacademy@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    watsontreeacademy@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Serving Tulsa, OK and surrounding areas
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    Licensed & Insured
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Watson Tree Academy All rights reserved.</p>
          <p className="mt-2">Designed and developed by <a href="#" className="text-green-400 hover:text-green-300">Pinnacle Marketing Group</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;