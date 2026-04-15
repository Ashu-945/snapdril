"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { Sparkles, Star, Handshake, ArrowRight } from "lucide-react"
import { useRef, useEffect } from "react"

const clients = [
  {
    name: "The Cake & Cafe",
    logo: "/snapdrill-media/tcc.jpg",
    industry: "Food & Bakery",
    color: "from-amber-400 via-orange-500 to-red-500",
    description: "Complete visual branding & social media content for their bakery and cafe outlets.",
  },
  {
    name: "Hair & Care Unisex Salon",
    logo: "/snapdrill-media/salon.png",
    industry: "Beauty & Wellness",
    color: "from-pink-400 via-rose-500 to-fuchsia-500",
    description: "Professional photoshoots, reels, and promotional content for salon services.",
  },
  {
    name: "कन्हैया कोर्नर",
    logo: "/snapdrill-media/kanhaiyacorner.jpg",
    industry: "Food & Restaurant",
    color: "from-emerald-400 via-teal-500 to-cyan-500",
    description: "Mouth-watering food photography and engaging Instagram reels for the restaurant.",
  },
]

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (latest) => Math.round(latest))
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      animate(motionVal, value, { duration: 2, ease: "easeOut" })
    }
  }, [isInView, motionVal, value])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v)
    })
    return unsubscribe
  }, [rounded])

  return <span ref={ref}>0</span>
}

export function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-4 py-12 sm:px-6 md:px-8 md:py-16">
      {/* Large animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.4, 1], x: [0, 80, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-sky-400/30"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.8 }}
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
              <Handshake className="h-4 w-4 text-sky-300" />
            </motion.div>
            <span className="text-sky-100">Trusted By Local Brands</span>
          </motion.span>
          <h2 className="mb-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="gradient-text">Our Valued</span>{" "}
            <span className="gradient-text-alt">Clients</span>
          </h2>
          <motion.p
            className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Partnering with local businesses to build powerful visual identities and digital presence.
          </motion.p>
        </motion.div>

        {/* Clients Grid - Larger Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.25, type: "spring", stiffness: 80 }}
              className="perspective-1000"
            >
              <motion.div
                whileHover={{
                  y: -16,
                  scale: 1.04,
                  rotateY: 3,
                  boxShadow: "0 30px 60px -15px rgba(98, 168, 255, 0.35), 0 0 50px rgba(98, 168, 255, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0f18]/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Animated top gradient bar */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${client.color}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.25 + 0.5 }}
                />

                {/* Animated corner beams on hover */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-sky-400/0 rounded-tl-[2rem] group-hover:border-sky-400/50 transition-all duration-700"
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-sky-400/0 rounded-br-[2rem] group-hover:border-sky-400/50 transition-all duration-700"
                />

                {/* Hover inner glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700`} />

                {/* Logo container - BIGGER */}
                <div className="relative w-full flex items-center justify-center p-8 pt-10 pb-6">
                  <motion.div
                    className="relative h-40 w-40 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center"
                    whileHover={{ rotate: [0, -3, 3, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Shimmer sweep */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                      animate={{ x: [-300, 300] }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    />
                    {/* Rotating ring behind logo */}
                    <motion.div
                      className="absolute inset-2 rounded-xl border border-dashed border-sky-400/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="relative z-10 max-h-28 max-w-[75%] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-115"
                    />
                  </motion.div>
                </div>

                {/* Client info */}
                <div className="w-full px-6 pb-8 text-center">
                  <motion.h3
                    className="text-lg font-black text-white mb-1 group-hover:text-sky-300 transition-colors duration-300 sm:text-xl"
                    whileHover={{ scale: 1.03 }}
                  >
                    {client.name}
                  </motion.h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-400/70 mb-3 block">{client.industry}</span>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 sm:text-sm">{client.description}</p>

                  {/* Animated stars */}
                  <div className="flex justify-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{ delay: index * 0.25 + 0.8 + i * 0.12, type: "spring", stiffness: 200 }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        >
                          <Star size={16} className="fill-sky-400 text-sky-400 drop-shadow-[0_0_4px_rgba(98,168,255,0.5)]" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          {[
            { value: 200, suffix: "+", label: "Happy Clients" },
            { value: 100, suffix: "+", label: "Projects Done" },
            { value: 3, suffix: "+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-2xl font-black gradient-text sm:text-3xl">
                <AnimatedNumber value={stat.value} />{stat.suffix}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
