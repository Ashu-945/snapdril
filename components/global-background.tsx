"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const heroImages = [
  "/snapdrill-media/photoA.jpg",
  "/snapdrill-media/photoB.jpg",
  "/snapdrill-media/photoC.jpg",
  "/snapdrill-media/photoD.jpg",
  "/snapdrill-media/photoE.jpg",
  "/snapdrill-media/photoF.jpg"
]

export function GlobalBackground() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-[-1]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={currentImage}
          src={heroImages[currentImage]}
          alt="Dynamic Background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/80 to-black/60 backdrop-blur-[2px]" />
    </div>
  )
}
