"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  tiltFactor?: number
}

export function TiltCard({ children, className = "", tiltFactor = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for smooth return and follow
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  // Transform coordinates into degrees
  const rotateX = useTransform(springY, [-0.5, 0.5], [tiltFactor, -tiltFactor])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-tiltFactor, tiltFactor])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    
    // Calculate 0 to 1 based on mouse position inside the card
    const width = rect.width
    const height = rect.height
    
    // Calculate -0.5 to 0.5 normalize
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-full transform-gpu ${className}`}
    >
      <div
        className="w-full h-full"
        style={{ transform: "translateZ(30px)" }} // Pop children out slightly
      >
        {children}
      </div>
    </motion.div>
  )
}
