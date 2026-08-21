import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS, PERSONAL_INFO } from '../data/portfolioData';

const CATEGORIES = ['ALL', 'WORK', 'BUSINESS', 'TRAVEL', 'LIFE'];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'ALL'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category.toUpperCase().includes(selectedCategory) || selectedCategory.includes(photo.category.toUpperCase()));

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#07090e] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Moments & Field Operations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 font-display"
          >
            LIFE BEHIND THE SCREEN
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base text-slate-300 font-normal leading-relaxed"
          >
            Visual highlights from agency execution, travel consultancy, and executive representation.
          </motion.p>

          {/* Categories Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid of Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onClick={() => openLightbox(index)}
              data-cursor="image"
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 cursor-pointer shadow-lg transition-all duration-300 aspect-[4/5] gallery-card"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-300 border border-slate-700">
                  {photo.category}
                </span>
              </div>

              {/* Zoom Icon Button */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Album Link CTA */}
        <div className="mt-12 text-center">
          <a
            href={PERSONAL_INFO.imgurAlbumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-all cursor-pointer"
          >
            <span>View Full Official Imgur Photo Album</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {filteredPhotos[selectedPhotoIndex].title}
                  </h3>
                  <span className="text-xs text-cyan-400 font-mono">
                    {filteredPhotos[selectedPhotoIndex].category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono mr-2">
                    {selectedPhotoIndex + 1} / {filteredPhotos.length}
                  </span>
                  <button
                    onClick={closeLightbox}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lightbox Image Stage */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden">
                <img
                  src={filteredPhotos[selectedPhotoIndex].imageUrl}
                  alt={filteredPhotos[selectedPhotoIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto object-contain mx-auto"
                />

                {/* Left/Right Nav Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all cursor-pointer"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition-all cursor-pointer"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <p>{filteredPhotos[selectedPhotoIndex].description}</p>
                <span className="font-mono text-[11px] hidden sm:inline">Use Arrow keys or Esc</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
