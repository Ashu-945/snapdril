"use client"

import { motion } from "framer-motion"
import { Play, Camera, Film, Heart, Eye, Sparkles, TrendingUp, Instagram } from "lucide-react"
import { useState } from "react"
import { TiltCard } from "@/components/tilt-card"
import Link from "next/link"

const photoShowcase = [
  {
    id: 1,
    title: "Wedding Highlight Frame",
    category: "Wedding",
    image: "/snapdrill-media/photoA.jpg",
    likes: "12.5K",
    views: "45K"
  },
  {
    id: 2,
    title: "Brand Portrait Series",
    category: "Brand",
    image: "/snapdrill-media/photoB.jpg",
    likes: "8.2K",
    views: "32K"
  },
  {
    id: 3,
    title: "Pre-Wedding Story",
    category: "Wedding",
    image: "/snapdrill-media/photoC.jpg",
    likes: "15.3K",
    views: "58K"
  },
  {
    id: 4,
    title: "Product Campaign Shot",
    category: "Commercial",
    image: "/snapdrill-media/photoD.jpg",
    likes: "6.8K",
    views: "28K"
  },
  {
    id: 5,
    title: "Food & Product Feature",
    category: "Brand",
    image: "/snapdrill-media/photoE.jpg",
    likes: "9.4K",
    views: "34K"
  },
  {
    id: 6,
    title: "Creator Portrait Session",
    category: "Portrait",
    image: "/snapdrill-media/photoF.jpg",
    likes: "11.1K",
    views: "39K"
  },
]

const reelShowcase = [
  {
    id: 1,
    title: "Wedding Reel Cut",
    platform: "Instagram",
    video: "/snapdrill-media/reelA.mp4",
    poster: "/snapdrill-media/photoA.jpg",
    views: "2.5M",
    likes: "180K",
    icon: Instagram
  },
  {
    id: 2,
    title: "Brand Launch Reel",
    platform: "Instagram",
    video: "/snapdrill-media/reelB.mp4",
    poster: "/snapdrill-media/photoB.jpg",
    views: "1.8M",
    likes: "95K",
    icon: Instagram
  },
  {
    id: 3,
    title: "Social Promo Reel",
    platform: "Instagram",
    video: "/snapdrill-media/reelC.mp4",
    poster: "/snapdrill-media/photoC.jpg",
    views: "950K",
    likes: "45K",
    icon: Instagram
  },
  {
    id: 4,
    title: "Event Energy Reel",
    platform: "Instagram",
    video: "/snapdrill-media/reelD.mp4",
    poster: "/snapdrill-media/photoD.jpg",
    views: "1.1M",
    likes: "88K",
    icon: Instagram
  },
  {
    id: 5,
    title: "Product Promo Reel",
    platform: "Instagram",
    video: "/snapdrill-media/reelE.mp4",
    poster: "/snapdrill-media/photoE.jpg",
    views: "1.6M",
    likes: "102K",
    icon: Instagram
  },
  {
    id: 6,
    title: "Behind The Scenes Reel",
    platform: "Instagram",
    video: "/snapdrill-media/ab.mp4",
    poster: "/snapdrill-media/logoPhoto.jpg",
    views: "730K",
    likes: "39K",
    icon: Instagram
  },
]

export function Showcase() {
  const [activeTab, setActiveTab] = useState<"photos" | "reels">("photos")

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="section-shell mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.span 
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] glass-card robot-panel sm:px-5 sm:text-sm"
            animate={{ boxShadow: ["0 0 18px rgba(112, 167, 255, 0.25)", "0 0 28px rgba(129, 227, 255, 0.18)", "0 0 18px rgba(112, 167, 255, 0.25)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="h-4 w-4 text-sky-300" />
            <span className="text-sky-100">Featured Work</span>
          </motion.span>
          <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
            <span className="gradient-text">Work That Helps</span>
            <br />
            <span className="gradient-text-alt">Brands Stand Out</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            Explore photography and short-form reels crafted for weddings, businesses, products, and creator-first marketing.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center md:mb-12"
        >
          <div className="inline-flex w-full max-w-md gap-2 rounded-2xl glass-card p-2 robot-panel">
            <motion.button
              onClick={() => setActiveTab("photos")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all sm:px-6 sm:text-base ${
                activeTab === "photos"
                  ? "bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-xl"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Camera className="h-5 w-5" />
              Photos
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("reels")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all sm:px-6 sm:text-base ${
                activeTab === "reels"
                  ? "bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-xl"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Film className="h-5 w-5" />
              Reels
            </motion.button>
          </div>
        </motion.div>

        {/* Photos Grid */}
        {activeTab === "photos" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
          >
            {photoShowcase.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <TiltCard tiltFactor={12} className="relative overflow-hidden rounded-3xl glass-card card-hover-lift robot-panel">
                  <motion.img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-80 lg:h-96"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <motion.span 
                      className="px-4 py-2 rounded-full text-xs font-bold text-white glass-dark"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {photo.category}
                    </motion.span>
                  </div>

                  {/* Stats on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-0 p-4 transition-transform duration-500 sm:p-6 sm:translate-y-full sm:group-hover:translate-y-0">
                    <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">{photo.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/80 sm:gap-4 sm:text-sm">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-sky-300" fill="currentColor" />
                        {photo.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {photo.views}
                      </span>
                    </div>
                  </div>

                  {/* Floating Camera Icon */}
                  <motion.div
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 opacity-100 transition-opacity sm:h-12 sm:w-12 sm:opacity-0 sm:group-hover:opacity-100"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Camera className="h-5 w-5 text-white" />
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Reels Grid */}
        {activeTab === "reels" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
          >
            {reelShowcase.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <TiltCard tiltFactor={12} className="relative aspect-[9/16] overflow-hidden rounded-3xl glass-card card-hover-lift robot-panel">
                  <video
                    src={reel.video}
                    poster={reel.poster}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => { e.currentTarget.play().catch(err => console.log(err)) }}
                    onMouseLeave={(e) => { e.currentTarget.pause() }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                  
                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <motion.div 
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <reel.icon className="h-4 w-4 text-white" />
                    </motion.div>
                    <span className="text-xs font-bold text-white/90">{reel.platform}</span>
                  </div>

                  {/* Play Button Center */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-sm sm:h-20 sm:w-20"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </motion.div>
                  </motion.div>

                  {/* Stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="mb-2 text-base font-bold text-white sm:text-lg">{reel.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/80">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-sky-300" />
                        {reel.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3 text-sky-300" fill="currentColor" />
                        {reel.likes}
                      </span>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 transition-opacity sm:group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, rgba(98, 168, 255, 0.35), rgba(129, 227, 255, 0.3), rgba(98, 168, 255, 0.35))",
                      padding: "3px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                    animate={{
                      background: [
                        "linear-gradient(0deg, rgba(98, 168, 255, 0.35), rgba(129, 227, 255, 0.3))",
                        "linear-gradient(90deg, rgba(129, 227, 255, 0.3), rgba(98, 168, 255, 0.35))",
                        "linear-gradient(180deg, rgba(98, 168, 255, 0.35), rgba(129, 227, 255, 0.3))",
                        "linear-gradient(270deg, rgba(129, 227, 255, 0.3), rgba(98, 168, 255, 0.35))",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link href="/portfolio">
            <motion.button
              className="group flex items-center gap-3 rounded-2xl px-6 py-3.5 text-base font-bold glass-card neon-glow robot-panel sm:px-10 sm:py-4 sm:text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(98, 168, 255, 0.24)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="gradient-text">{activeTab === "photos" ? "Browse Full Gallery" : "Browse All Reels"}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <TrendingUp className="h-5 w-5 text-sky-300" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
