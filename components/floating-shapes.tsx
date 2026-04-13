"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large vibrant blob - top left */}
      <motion.div
        className="absolute -left-28 -top-24 h-[260px] w-[260px] rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 opacity-28 blur-[70px] sm:h-[360px] sm:w-[360px] lg:-left-32 lg:-top-32 lg:h-[500px] lg:w-[500px]"
        animate={{
          x: [0, 60, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Vibrant blob - top right */}
      <motion.div
        className="absolute -right-16 -top-16 h-[240px] w-[240px] rounded-full bg-gradient-to-bl from-indigo-500 via-sky-500 to-cyan-400 opacity-22 blur-[60px] sm:h-[330px] sm:w-[330px] lg:-right-20 lg:-top-20 lg:h-[450px] lg:w-[450px]"
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Center floating blob */}
      <motion.div
        className="absolute left-1/4 top-1/3 hidden h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-slate-500 via-sky-500 to-indigo-500 opacity-18 blur-[60px] md:block"
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Bottom left vibrant blob */}
      <motion.div
        className="absolute -left-16 bottom-8 h-[220px] w-[220px] rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 opacity-20 blur-[60px] sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px]"
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Bottom right blob */}
      <motion.div
        className="absolute -bottom-16 -right-10 h-[260px] w-[260px] rounded-full bg-gradient-to-tl from-sky-500 via-indigo-500 to-cyan-400 opacity-18 blur-[70px] sm:h-[340px] sm:w-[340px] lg:-bottom-20 lg:h-[500px] lg:w-[500px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
          rotate: [0, 30, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles/orbs - multiple vibrant colors */}
      <motion.div
        className="absolute right-1/4 top-1/4 hidden h-16 w-16 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 opacity-60 shadow-lg md:block"
        style={{ boxShadow: "0 0 24px rgba(98, 168, 255, 0.24)" }}
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute left-1/3 top-2/3 hidden h-12 w-12 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 opacity-60 md:block"
        style={{ boxShadow: "0 0 20px rgba(98, 168, 255, 0.22)" }}
        animate={{
          y: [0, 40, 0],
          x: [0, -35, 0],
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute right-1/3 top-1/2 hidden h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-cyan-300 opacity-55 md:block"
        style={{ boxShadow: "0 0 16px rgba(129, 227, 255, 0.22)" }}
        animate={{
          y: [0, -35, 0],
          x: [0, 20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-1/4 top-3/4 hidden h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 opacity-52 md:block"
        style={{ boxShadow: "0 0 16px rgba(98, 168, 255, 0.18)" }}
        animate={{
          y: [0, 30, 0],
          x: [0, 25, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/5 hidden h-6 w-6 rounded-full bg-gradient-to-br from-cyan-300 to-sky-500 opacity-50 md:block"
        style={{ boxShadow: "0 0 12px rgba(129, 227, 255, 0.18)" }}
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Extra small particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden h-3 w-3 rounded-full md:block"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
            background: `linear-gradient(135deg, rgba(98, 168, 255, 0.5) 0%, rgba(129, 227, 255, 0.35) 100%)`,
            boxShadow: `0 0 10px rgba(98, 168, 255, 0.18)`,
            opacity: 0.45,
          }}
          animate={{
            y: [0, -20 - i * 5, 0],
            x: [0, 10 + i * 3, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
