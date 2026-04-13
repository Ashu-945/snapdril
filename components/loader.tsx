"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter logic
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 2;
      if (current > 100) current = 100;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
      }
    }, 80);

    // General app load timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(5, 8, 14, 0.99) 0%, rgba(12, 18, 28, 0.99) 50%, rgba(5, 8, 14, 0.99) 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "brightness(2) contrast(1.5)", scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* CRT Scanline Overlay */}
          <div 
            className="absolute inset-0 z-50 pointer-events-none opacity-[0.03]" 
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)"
            }} 
          />

          {/* Emergent Technical Grid & Lens Crosshair */}
          <motion.div
            className="absolute inset-0 z-0 opacity-20"
            initial={{ scale: 0.8, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-sky-500/50 -translate-x-1/2" />
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-sky-500/50 -translate-y-1/2" />
            <div className="absolute left-1/2 top-1/2 w-[80vw] max-w-[600px] aspect-square border border-sky-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute left-1/2 top-1/2 w-[60vw] max-w-[400px] aspect-square border border-sky-500/20 border-dashed rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            {/* Spinning inner target ring */}
            <motion.div 
              className="absolute left-1/2 top-1/2 w-[30vw] max-w-[200px] aspect-square border-t-2 border-b-2 border-sky-400 rounded-full -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Camera Frame Focus Brackets (Center lock-in) */}
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
          >
            <motion.div
              className="relative w-72 h-44 sm:w-[400px] sm:h-64"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: [1.5, 0.98, 1], opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Flashing RED REC Dot */}
              <motion.div 
                className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2"
                animate={{ opacity: [1, 0.4, 1] }} 
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_red]" />
                <span className="text-[10px] font-mono text-red-500 font-bold tracking-widest">REC</span>
              </motion.div>
              
              {/* Bracket Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-white/80 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
              <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-white/80 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-white/80 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-white/80 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />

              {/* Crosshair target snaps */}
              <motion.div 
                className="absolute left-1/2 top-1/2 w-4 h-4 border border-sky-400/50 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 0.5, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Main Logo & UI Content */}
          <div className="flex flex-col items-center gap-8 px-6 text-center relative z-20">
            {/* Dynamic Background Orbs behind logo */}
            <motion.div
              className="absolute top-1/2 left-[10%] h-64 w-64 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[100px]"
              animate={{
                scale: [1, 1.5, 1],
                x: [-100, 100, -100],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Actual Logo Lockup */}
            <motion.div
              className="relative mt-8 sm:mt-12"
              initial={{ scale: 0.9, opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Intense glowing backdrop for logo contrast */}
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                
                <div className="relative py-4 px-6 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl">
                   {/* Continuous Sweeping Metallic/Lens Flare Shine */}
                   <motion.div
                     className="absolute inset-0 z-20 w-[200%]"
                     style={{
                       background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.0) 60%, transparent 100%)",
                       transform: "skewX(-30deg)",
                     }}
                     animate={{ x: ["-100%", "50%", "50%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                   />
                   
                   <img 
                     src="/snapdrill-media/logoPhotoCropped.png" 
                     alt="SnapDrill Logo" 
                     className="h-10 sm:h-14 md:h-16 w-auto object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(98,168,255,0.5)] relative z-10" 
                   />
                </div>
              </motion.div>
            </motion.div>

            {/* Emerging Loading Data */}
            <motion.div
              className="text-center mt-2 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.p
                className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-mono text-sky-300/80 mb-6"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {progress < 100 ? "Syncing Studio Modules..." : "Ready to Shoot."}
              </motion.p>
            </motion.div>
          </div>

          {/* Camera Technical HUD (Left) */}
          <motion.div 
             className="absolute bottom-6 left-6 text-left font-mono text-[9px] sm:text-[11px] text-sky-400/70 tracking-widest leading-relaxed z-30"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="mb-2 text-white font-bold">SNAPDRILL OS v2.0</div>
            <div>ISO: <span className="text-white">100</span></div>
            <div>SHUTTER: <span className="text-white">1/250s</span></div>
            <div>APERTURE: <span className="text-white">F/2.8</span></div>
            <div>WHITE BAL: <span className="text-white">5600K</span></div>
            <div>LENS: <span className="text-white">24-70mm G-Master</span></div>
          </motion.div>

          {/* Load Progress HUD (Right) */}
          <motion.div 
             className="absolute bottom-6 right-6 text-right font-mono text-[9px] sm:text-[11px] text-sky-400/70 tracking-widest leading-relaxed z-30"
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="mb-2 text-white text-2xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {progress}%
            </div>
            <div>BUFFER: <span className="text-green-400">OPTIMAL</span></div>
            <div>FOCUS: <span className="text-white">AF-C WIDE</span></div>
            <div>DATA STREAM: <span className="text-white">RX RAW</span></div>
            <div>MEM: <span className="text-white">{Math.floor(progress * 2.4)}GB / 240GB</span></div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
