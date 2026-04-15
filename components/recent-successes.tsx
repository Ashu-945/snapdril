"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { Sparkles, Instagram, ExternalLink, Eye, Heart, ArrowRight } from "lucide-react"
import { useRef, useState } from "react"
import Link from "next/link"

const recentWork = [
  { image: "/snapdrill-media/Rcs1.png", title: "Event Celebration", category: "Events" },
  { image: "/snapdrill-media/Rcs2.png", title: "Grand Occasion", category: "Wedding" },
  { image: "/snapdrill-media/Rcs3.png", title: "Festive Moments", category: "Events" },
  { image: "/snapdrill-media/Rcs4.png", title: "Client Success", category: "Brand" },
  { image: "/snapdrill-media/Rcs5.png", title: "Brand Story", category: "Commercial" },
  { image: "/snapdrill-media/Rcs6.jpg", title: "Creative Vision", category: "Portrait" },
]

export function RecentSuccesses() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-4 py-12 sm:px-6 md:px-8 md:py-16">
      {/* Animated cinematic background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-sky-500/12 via-indigo-500/8 to-transparent blur-[120px] rounded-full"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-500/5 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-sky-300/40"
          style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 20}%` }}
          animate={{
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="section-shell mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center md:mb-10"
        >
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.28em] glass-card robot-panel sm:px-6 sm:text-sm"
            animate={{
              boxShadow: [
                "0 0 20px rgba(112, 167, 255, 0.3), 0 0 60px rgba(98, 168, 255, 0.1)",
                "0 0 30px rgba(129, 227, 255, 0.25), 0 0 80px rgba(129, 227, 255, 0.08)",
                "0 0 20px rgba(112, 167, 255, 0.3), 0 0 60px rgba(98, 168, 255, 0.1)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="h-4 w-4 text-sky-300" />
            </motion.div>
            <span className="text-sky-100">Recent Work</span>
          </motion.span>
          <h2 className="mb-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="gradient-text">Our Recent</span>{" "}
            <span className="gradient-text-alt">Successes</span>
          </h2>
        </motion.div>

        {/* Masonry-style Image Grid - BIGGER images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Outer container with animated border */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0f18]/80 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            {/* Animated top gradient line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1.5 z-20 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Moving gradient border effect */}
            <motion.div
              className="absolute inset-0 rounded-[2rem] z-10 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, rgba(98,168,255,0.2), transparent, rgba(129,227,255,0.2))",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 p-1">
              {recentWork.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.7, y: 50 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 80,
                  }}
                  className={`group relative overflow-hidden cursor-pointer rounded-xl ${
                    index === 0 || index === 5 ? "aspect-[4/5]" : "aspect-square"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Image with interactive scale + brightness */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    animate={{
                      scale: hoveredIndex === index ? 1.15 : 1,
                      filter: hoveredIndex !== null && hoveredIndex !== index
                        ? "brightness(0.4) saturate(0.6)"
                        : "brightness(1) saturate(1)",
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category pill */}
                  <motion.div
                    className="absolute top-3 left-3 z-10"
                    initial={{ x: -30, opacity: 0 }}
                    animate={hoveredIndex === index ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-sm text-xs font-bold text-white">
                      {item.category}
                    </span>
                  </motion.div>

                  {/* Title + interaction icons overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 z-10"
                    initial={{ y: 30, opacity: 0 }}
                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm font-bold text-white mb-2 sm:text-base">{item.title}</p>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-white/80">
                        <Eye size={12} /> View
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/80">
                        <Heart size={12} className="text-sky-300" fill="currentColor" /> Like
                      </span>
                    </div>
                  </motion.div>

                  {/* Corner shine */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-bl from-white/25 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  />

                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-sky-400/0 group-hover:border-sky-400/40 transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom gradient bar */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1.5 z-20 bg-gradient-to-r from-purple-500 via-sky-400 to-indigo-500"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Instagram CTA - bigger and bolder */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="https://www.instagram.com/snapdrill_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a0f18]/90 backdrop-blur-xl px-7 py-4 sm:px-10 sm:py-5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              whileHover={{
                scale: 1.06,
                borderColor: "rgba(98, 168, 255, 0.4)",
                boxShadow: "0 0 40px rgba(98, 168, 255, 0.25), 0 25px 50px -10px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="p-2 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
              >
                <Instagram className="h-5 w-5 text-white" />
              </motion.div>
              <span className="text-sm font-bold sm:text-base">
                <span className="gradient-text">See More on Instagram</span>
              </span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5 text-sky-400" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={recentWork[selectedImage].image}
              alt={recentWork[selectedImage].title}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
            <motion.p
              className="absolute bottom-8 text-white text-lg font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {recentWork[selectedImage].title}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
