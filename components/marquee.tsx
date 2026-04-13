"use client"

import { motion } from "framer-motion"

const clients = [
  "THE CAKE & CAFE",
  "HAIR & CARE UNISEX SALON",
  "KANHAIYA CORNER", 
  "AUTO SHOWROOMS",
  "BEAUTY PARLORS",
  "PREMIUM BRANDS",
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 py-8 mt-12">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap"
      >
        {[...clients, ...clients].map((client, index) => (
          <span
            key={index}
            className="mx-8 text-2xl font-black tracking-widest text-white/40 md:text-4xl uppercase"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {client}
            <span className="mx-10 text-sky-300/60">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
