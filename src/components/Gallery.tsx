"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["ALL", "GYM", "TRAINING", "EQUIPMENT", "COMMUNITY"];

  // Using generic high-quality placeholders until verified local images are added.
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", category: "GYM" },
    { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", category: "EQUIPMENT" },
    { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", category: "TRAINING" },
    { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", category: "GYM" },
    { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2070&auto=format&fit=crop", category: "EQUIPMENT" },
    { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", category: "COMMUNITY" },
  ];

  const filteredImages = activeCategory === "ALL" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            Gym <span className="text-primary">Gallery</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 font-bold text-sm uppercase tracking-wider transition-colors border-2 ${
                activeCategory === cat 
                  ? "border-primary bg-primary text-black" 
                  : "border-border text-gray-400 hover:border-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((img, index) => (
            <div 
              key={index}
              className="relative aspect-square cursor-pointer group overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-wider uppercase border border-white/50 px-4 py-2 backdrop-blur-sm">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={36} />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" />
            </button>
            
            <div className="relative w-full max-w-5xl aspect-video mx-8 md:mx-12">
              <Image
                src={filteredImages[currentImageIndex].src}
                alt="Lightbox Image"
                fill
                className="object-contain"
              />
            </div>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10 md:w-14 md:h-14" />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-bold tracking-widest">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
