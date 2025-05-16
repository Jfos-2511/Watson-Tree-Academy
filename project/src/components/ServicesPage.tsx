import React from 'react';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Professional Tree Services | Watson Tree Academy</title>
        <meta name="description" content="Expert tree services in Tulsa, OK including tree removal, seasonal trimming, deadwooding, and 24/7 emergency response. Licensed and insured arborists." />
      </Helmet>
      
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Professional Tree Services
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Comprehensive tree care solutions delivered by certified arborists in Tulsa, Oklahoma
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <div className="prose max-w-none text-gray-600">
                      {service.id === 'tree-removal' && (
                        <>
                          <p className="mb-4">Our professional tree removal service ensures safe and efficient removal of trees of any size. Using state-of-the-art equipment and proven techniques, our certified arborists handle even the most challenging removals with precision and care.</p>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Complete tree removal and cleanup</li>
                            <li>Safe removal in tight spaces</li>
                            <li>Expert assessment and planning</li>
                            <li>Property protection measures</li>
                          </ul>
                        </>
                      )}
                      
                      {service.id === 'seasonal-trimming' && (
                        <>
                          <p className="mb-4">Regular seasonal trimming is essential for maintaining healthy, beautiful trees. Our expert trimming service promotes proper growth patterns, reduces disease risk, and enhances your property's aesthetic appeal.</p>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Crown thinning and reduction</li>
                            <li>Vista pruning</li>
                            <li>Growth direction training</li>
                            <li>Seasonal maintenance plans</li>
                          </ul>
                        </>
                      )}
                      
                      {service.id === 'deadwooding' && (
                        <>
                          <p className="mb-4">Deadwooding is crucial for tree health and safety. We carefully remove dead, dying, or diseased branches to prevent potential hazards and promote healthy growth throughout the entire tree.</p>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Disease prevention</li>
                            <li>Hazard elimination</li>
                            <li>Improved air circulation</li>
                            <li>Enhanced tree aesthetics</li>
                          </ul>
                        </>
                      )}
                      
                      {service.id === 'emergency' && (
                        <>
                          <p className="mb-4">Our 24/7 emergency response team is always ready to handle urgent tree situations. Whether it's storm damage, fallen trees, or dangerous limbs, we provide rapid, professional service to protect your property.</p>
                          <ul className="list-disc pl-5 mb-4">
                            <li>24/7 rapid response</li>
                            <li>Storm damage cleanup</li>
                            <li>Hazard assessment</li>
                            <li>Emergency tree removal</li>
                          </ul>
                        </>
                      )}
                      
                      <a 
                        href="#contact" 
                        className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md shadow-md transition-all duration-300 mt-6"
                      >
                        Request Service <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;