import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'tree-removal', name: 'Tree Removal' },
    { id: 'tree-trimming', name: 'Tree Trimming' },
    { id: 'emergency', name: 'Emergency' },
    { id: 'stump-removal', name: 'Stump Removal' },
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  const selectedItemData = galleryItems.find(item => item.id === selectedItem);
  
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our completed tree service projects across Tulsa
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-md h-64 cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedItem(item.id)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-200">
                  {categories.find(c => c.id === item.category)?.name || item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedItem && selectedItemData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              {selectedItemData.before && selectedItemData.after ? (
                <div className="md:flex">
                  <div className="md:w-1/2 p-1">
                    <div className="relative">
                      <img 
                        src={selectedItemData.before} 
                        alt={`Before ${selectedItemData.title}`} 
                        className="w-full h-auto rounded"
                      />
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                        BEFORE
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-1">
                    <div className="relative">
                      <img 
                        src={selectedItemData.after} 
                        alt={`After ${selectedItemData.title}`} 
                        className="w-full h-auto rounded"
                      />
                      <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={selectedItemData.image} 
                  alt={selectedItemData.title} 
                  className="w-full h-auto"
                />
              )}
              
              <div className="p-4 bg-white">
                <h3 className="font-bold text-xl text-gray-900">{selectedItemData.title}</h3>
                <p className="text-gray-600">
                  {categories.find(c => c.id === selectedItemData.category)?.name || selectedItemData.category}
                </p>
              </div>
            </div>
            
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:-left-16">
              <button 
                onClick={() => {
                  const currentIndex = filteredItems.findIndex(item => item.id === selectedItem);
                  const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                  setSelectedItem(filteredItems[prevIndex].id);
                }}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:-right-16">
              <button 
                onClick={() => {
                  const currentIndex = filteredItems.findIndex(item => item.id === selectedItem);
                  const nextIndex = (currentIndex + 1) % filteredItems.length;
                  setSelectedItem(filteredItems[nextIndex].id);
                }}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
                aria-label="Next image"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;