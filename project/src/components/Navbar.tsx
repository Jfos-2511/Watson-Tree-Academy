import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, smooth scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-700 shadow-md py-3' : 'bg-green-700/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/wta-Logo.webp" 
              alt="Watson Tree Academy Logo" 
              className="w-12 h-12"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-white transition-colors">
                Watson Tree Academy
              </span>
              <span className="text-xs text-green-100 transition-colors">
                Always Learning, Always Growing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-white hover:text-green-100 transition-colors">Home</Link>
            <Link to="/services" className="font-medium text-white hover:text-green-100 transition-colors">Services</Link>
            <button 
              onClick={() => handleNavClick('about')} 
              className="font-medium text-white hover:text-green-100 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('gallery')} 
              className="font-medium text-white hover:text-green-100 transition-colors"
            >
              Gallery
            </button>
            <Link to="/blog" className="font-medium text-white hover:text-green-100 transition-colors">The Leaflet</Link>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="font-medium text-white hover:text-green-100 transition-colors"
            >
              Contact
            </button>
            <a 
              href="tel:918-221-1073" 
              className="flex items-center px-4 py-2 bg-white hover:bg-green-50 text-green-700 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>918-221-1073</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white shadow-lg rounded-lg mt-4 px-2 absolute left-4 right-4 transition-all">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" className="px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <button 
                onClick={() => handleNavClick('about')}
                className="px-4 py-2 text-left text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-md"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('gallery')}
                className="px-4 py-2 text-left text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-md"
              >
                Gallery
              </button>
              <Link to="/blog" className="px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-md" onClick={() => setIsMenuOpen(false)}>The Leaflet</Link>
              <button 
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 text-left text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-md"
              >
                Contact
              </button>
              <a 
                href="tel:918-221-1073" 
                className="flex items-center px-4 py-3 bg-green-700 hover:bg-green-800 text-white rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>918-221-1073</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;