"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function MouseSpotlight() {
  const [isMounted, setIsMounted] = useState(false)
  
  // Smoothly damp the mouse position for a high-end feel
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the size of the spotlight (size = 800px)
      mouseX.set(e.clientX - 400)
      mouseY.set(e.clientY - 400)
    }

    // Initialize to center
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2 - 400)
      mouseY.set(window.innerHeight / 2 - 400)
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!isMounted) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden"
      style={{
        zIndex: 1 // Above background images, below content
      }}
    >
      <motion.div
        className="absolute h-[800px] w-[800px] rounded-full mix-blend-screen opacity-40"
        style={{
          x: mouseX,
          y: mouseY,
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0) 60%)"
        }}
      />
    </motion.div>
  )
}
