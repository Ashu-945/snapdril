"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight, Sparkles, Camera, Star, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-16 sm:px-6 md:px-8">
      <div className="section-shell relative z-20 container mx-auto max-w-7xl py-8 sm:py-12 border-none before:hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <motion.div 
              className="inline-flex max-w-full items-center gap-2 rounded-full px-4 py-2.5 text-left sm:px-6 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-sky-300" />
              </motion.div>
              <span className="text-xs font-bold text-white sm:text-sm tracking-widest uppercase">
                SnapDrill Studio
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Star className="h-4 w-4 text-sky-300" fill="currentColor" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="mb-5 text-4xl font-black leading-[1.1] sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl xl:text-[5.4rem] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Capture Moments,
            </motion.span>
            <motion.span 
              className="block gradient-text-alt drop-shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Build Your
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Brand
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mb-8 max-w-3xl px-2 text-sm leading-relaxed text-white/80 sm:text-base md:mb-10 md:text-lg drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            SnapDrill creates sharp photography and reel content for weddings, products, cafes, events, and personal brands. We focus on visuals that feel premium, modern, and made to perform across social media and business promotions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link href="/contact">
              <motion.button
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl sm:w-auto sm:px-8 border border-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Book Your Session
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                className="group flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all sm:w-auto sm:px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 transition-colors group-hover:bg-sky-500/40"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Play className="ml-0.5 h-3 w-3 text-sky-300" fill="currentColor" />
                </motion.div>
                <span>View Our Work</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats with Glow Effects */}
          <motion.div
            className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {[
              { value: "500+", label: "Projects Delivered", icon: Camera },
              { value: "200+", label: "Clients Served", icon: Star },
              { value: "8+", label: "Years Experience", icon: Zap },
              { value: "50+", label: "Brand Stories", icon: Sparkles },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center rounded-2xl p-5 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.15 }}
              >
                <div 
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/20"
                >
                  <stat.icon className="h-5 w-5 text-sky-300" />
                </div>
                <div className="text-2xl font-black text-white sm:text-3xl md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] sm:text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
