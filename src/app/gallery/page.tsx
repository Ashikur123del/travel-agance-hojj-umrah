"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaTag } from "react-icons/fa";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Tropical beach",
    title: "Tropical Beach",
    category: "Beach",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    alt: "Greek island",
    title: "Santorini Coast",
    category: "Beach",
  },

  {
    id: 3,
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    alt: "City skyline",
    title: "City Skyline",
    category: "City",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?w=800&q=80",
    alt: "Bangkok temple",
    title: "Temple of Dawn",
    category: "City",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "Mountain view",
    title: "Mountain Adventure",
    category: "Nature",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Alpine lake",
    title: "Alpine Lake",
    category: "Nature",
  },

  {
    id: 7,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    alt: "Forest path",
    title: "Enchanted Forest",
    category: "Nature",
  },

  {
    id: 8,
    src: "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=800&q=80",
    alt: "Luggage and travel",
    title: "Travel Essentials",
    category: "Lifestyle",
  },

  {
    id: 9,
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    alt: "Traveler with map",
    title: "Explorer",
    category: "Lifestyle",
  },
  
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    alt: "Airplane wing",
    title: "Flight Journey",
    category: "Travel",
  },
 
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
    alt: "Road trip",
    title: "Road to Adventure",
    category: "Travel",
  },

  {
    id: 12,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    alt: "Starry sky",
    title: "Night Sky Adventure",
    category: "Adventure",
  },

  {
    id: 13,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    alt: "Hiking trail",
    title: "Hiking Trail",
    category: "Adventure",
  },

  {
    id: 14,
    src: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
    alt: "Japanese shrine",
    title: "Kyoto Shrine",
    category: "Culture",
  },

];

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

export default function GalleryPage() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <main className="bg-gradient-to-b from-emerald-950 via-teal-900 to-cyan-900 min-h-screen">
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-teal-900/80 to-cyan-900/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase bg-black/30 px-3 py-1 rounded-full inline-block">
              Our Gallery
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4">
              Capturing{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Travel Moments
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-teal-100/80 max-w-2xl mx-auto">
              Explore our collection of breathtaking destinations and travel experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30"
                    : "bg-white/5 border border-white/10 text-teal-100/70 hover:bg-white/20"
                }`}
              > 
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="relative cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/20 transition-shadow group aspect-[4/3]"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-lg">{image.title}</p>
                    <p className="text-teal-200/70 text-sm flex items-center gap-1">
                      <FaTag className="w-3 h-3" /> {image.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-teal-100/50 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-2xl">{selectedImage.title}</h3>
                <p className="text-teal-200/70 flex items-center gap-2">
                  <FaTag className="w-4 h-4" /> {selectedImage.category}
                </p>
              </div>
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 rounded-full p-2 transition"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}