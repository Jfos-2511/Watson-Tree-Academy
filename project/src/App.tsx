import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import About from './components/About';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  useEffect(() => {
    document.title = "Watson Tree Academy | Always Learning, Always Growing";
  }, []);
  
  return (
    <HelmetProvider>
      <Router>
        <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <ServiceArea />
                <Testimonials />
                <Gallery />
                <FAQ />
                <Contact />
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;