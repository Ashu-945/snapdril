"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Weddings", "Reels", "Commercial", "Events"]

const portfolioItems = [
  {
    id: 1,
    title: "Wedding Highlight Frame",
    category: "Weddings",
    type: "photo",
    image: "/snapdrill-media/photoA.jpg",
    description: "A beautiful sunset ceremony captured in warm golden tones"
  },
  {
    id: 2,
    title: "Brand Launch Reel",
    category: "Commercial",
    type: "reel",
    video: "/snapdrill-media/reelA.mp4",
    poster: "/snapdrill-media/photoA.jpg",
    description: "A clean brand reel built to look premium across social platforms"
  },
  {
    id: 3,
    title: "Lifestyle Promo Reel",
    category: "Reels",
    type: "reel",
    video: "/snapdrill-media/reelB.mp4",
    poster: "/snapdrill-media/photoB.jpg",
    description: "Short-form content designed for stronger reach and engagement"
  },
  {
    id: 4,
    title: "Brand Portrait Coverage",
    category: "Commercial",
    type: "photo",
    image: "/snapdrill-media/photoB.jpg",
    description: "Commercial event coverage with attention to detail"
  },
  {
    id: 5,
    title: "Pre-Wedding Story",
    category: "Weddings",
    type: "photo",
    image: "/snapdrill-media/photoC.jpg",
    description: "Romantic location wedding celebration"
  },
  {
    id: 6,
    title: "Event Motion Cut",
    category: "Reels",
    type: "reel",
    video: "/snapdrill-media/reelC.mp4",
    poster: "/snapdrill-media/photoC.jpg",
    description: "Adventure and event content creation"
  },
  {
    id: 7,
    title: "Product Promo Reel",
    category: "Commercial",
    type: "reel",
    video: "/snapdrill-media/reelE.mp4",
    poster: "/snapdrill-media/photoE.jpg",
    description: "High-end content for brand promotion"
  },
  {
    id: 8,
    title: "Product Feature Frame",
    category: "Events",
    type: "photo",
    image: "/snapdrill-media/photoE.jpg",
    description: "Elegant product photography and coverage"
  },
  {
    id: 9,
    title: "Portrait Session",
    category: "Weddings",
    type: "photo",
    image: "/snapdrill-media/photoF.jpg",
    description: "A sharp, expressive portrait frame with studio polish"
  },
  {
    id: 10,
    title: "Behind The Lens Reel",
    category: "Reels",
    type: "reel",
    video: "/snapdrill-media/ab.mp4",
    poster: "/snapdrill-media/logoPhoto.jpg",
    description: "An energetic behind-the-scenes reel with a branded thumbnail"
  },
  {
    id: 11,
    title: "Studio Identity Shot",
    category: "Commercial",
    type: "photo",
    image: "/snapdrill-media/logoPhoto.jpg",
    description: "A branded frame that strengthens the visual identity of the studio"
  },
  {
    id: 12,
    title: "Motion Promo Cut",
    category: "Reels",
    type: "reel",
    video: "/snapdrill-media/aa.mp4",
    poster: "/snapdrill-media/photoD.jpg",
    description: "A quick-cut promo reel built for social reach and impact"
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const handlePrev = () => {
    if (selectedImage === null) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    setSelectedImage(filteredItems[prevIndex].id)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage)
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(filteredItems[nextIndex].id)
  }

  return (
    <section className="relative px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="section-shell mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] glass-card robot-panel text-sky-100 sm:text-sm">
            Portfolio
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="gradient-text">Selected Work</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
            A growing library of wedding frames, business visuals, product shoots, and reel edits from SnapDrill.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all sm:px-6 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20"
                  : "glass-card text-foreground/70 hover:text-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="masonry-item group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-2xl glass-card robot-panel">
                  {item.type === "photo" ? (
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ height: index % 3 === 0 ? '360px' : index % 2 === 0 ? '280px' : '320px' }}
                    />
                  ) : (
                    <video
                      src={item.video}
                      poster={item.poster}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => { e.currentTarget.play().catch(err => console.log(err)) }}
                      onMouseLeave={(e) => { e.currentTarget.pause() }}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ height: index % 3 === 0 ? '360px' : index % 2 === 0 ? '280px' : '320px' }}
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                      <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>

                  {/* Play icon for reels */}
                  {item.type === "reel" && (
                    <motion.div
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play size={16} className="ml-0.5" fill="currentColor" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>

              <motion.button
                className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm md:flex"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm md:flex"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <ChevronRight size={24} />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {portfolioItems.find(item => item.id === selectedImage) && (
                  <>
                    {portfolioItems.find(item => item.id === selectedImage)?.type === "photo" ? (
                      <img
                        src={portfolioItems.find(item => item.id === selectedImage)?.image}
                        alt={portfolioItems.find(item => item.id === selectedImage)?.title}
                        className="max-h-[70vh] w-full object-contain"
                      />
                    ) : (
                      <video
                        src={portfolioItems.find(item => item.id === selectedImage)?.video}
                        poster={portfolioItems.find(item => item.id === selectedImage)?.poster}
                        autoPlay
                        loop
                        controls
                        className="max-h-[70vh] w-full object-contain bg-black/50"
                      />
                    )}
                    <div className="bg-white/10 backdrop-blur-sm p-4 text-white">
                      <h3 className="text-xl font-bold">{portfolioItems.find(item => item.id === selectedImage)?.title}</h3>
                      <p className="text-white/70">{portfolioItems.find(item => item.id === selectedImage)?.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
