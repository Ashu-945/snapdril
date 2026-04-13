"use client"

import { motion, useInView } from "framer-motion"
import { Award, Star, Camera, Users, Clock, Heart, Sparkles, Trophy, Target, Zap } from "lucide-react"
import { useRef, useEffect, useState } from "react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black gradient-text">
      {count}{suffix}
    </div>
  )
}

const stats = [
  { icon: Camera, value: 500, suffix: "+", label: "Projects Delivered", color: "from-sky-500 to-indigo-500" },
  { icon: Users, value: 200, suffix: "+", label: "Clients Supported", color: "from-sky-500 to-indigo-500" },
  { icon: Clock, value: 8, suffix: "+", label: "Years of Experience", color: "from-sky-500 to-indigo-500" },
  { icon: Trophy, value: 50, suffix: "+", label: "Brand Launches Shot", color: "from-sky-500 to-indigo-500" },
]

const team = [
  {
    name: "SnapDrill Studio",
    role: "Photography Direction",
    image: "/snapdrill-media/logoPhoto.jpg",
    color: "from-sky-500 to-indigo-500"
  },
  {
    name: "Visual Reels Unit",
    role: "Short-Form Production",
    image: "/snapdrill-media/photoF.jpg",
    color: "from-sky-500 to-indigo-500"
  },
  {
    name: "Brand Content Desk",
    role: "Creative Strategy",
    image: "/snapdrill-media/photoA.jpg",
    color: "from-sky-500 to-indigo-500"
  },
]

const highlights = [
  { icon: Target, title: "Clear Strategy", desc: "Content with purpose" },
  { icon: Heart, title: "Local Focus", desc: "Built for real businesses" },
  { icon: Zap, title: "Fast Delivery", desc: "Quick production flow" },
  { icon: Star, title: "Polished Output", desc: "Premium final finish" },
]

export function About() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="section-shell mx-auto max-w-7xl">
        {/* Header */}
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
            <span className="text-sky-100">About SnapDrill</span>
          </motion.span>
          <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
            <span className="gradient-text">Built For Businesses</span>
            <br />
            <span className="gradient-text-alt">That Want Better Visuals</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl neon-glow">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="/snapdrill-media/photoB.jpg"
                alt="Photographer at work"
                className="h-[360px] w-full object-cover sm:h-[460px] md:h-[560px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Award floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-5 right-3 rounded-2xl glass p-4 shadow-xl neon-glow robot-panel sm:-bottom-6 sm:right-6 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award className="text-white" size={24} />
                </motion.div>
                <div>
                    <div className="text-xl font-black gradient-text sm:text-2xl">
                    Trusted Creative
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Photo & reels partner
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rating floating element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className="absolute left-3 top-6 flex items-center gap-2 rounded-full glass px-4 py-2.5 shadow-lg robot-panel sm:-left-4 sm:top-10 sm:px-5 sm:py-3"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                >
                  <Star size={16} className="fill-sky-300 text-sky-300" />
                </motion.div>
              ))}
              <span className="ml-1 text-sm font-bold gradient-text">5.0</span>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <span className="font-bold gradient-text">SnapDrill</span> helps local brands, cafes, creators, and event businesses look sharper online with photography and reel content that feels modern, clean, and conversion-ready.
            </p>
            <p className="mb-8 text-muted-foreground">
              We focus on simple communication, strong framing, and fast execution so your content works on Instagram, WhatsApp, posters, menus, product pages, and campaign launches without feeling generic.
            </p>

            {/* Highlights grid */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 rounded-xl glass-card px-4 py-3 card-hover-lift robot-panel"
                >
                  <motion.div 
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500"
                    whileHover={{ rotate: 10 }}
                  >
                    <item.icon size={18} className="text-white" />
                  </motion.div>
                  <div>
                    <span className="text-sm font-bold text-foreground">{item.title}</span>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 md:mt-20 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="rounded-2xl glass-card p-4 text-center card-hover-lift robot-panel sm:p-6"
            >
              <motion.div 
                className={`mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                style={{ boxShadow: `0 10px 30px rgba(98, 168, 255, 0.22)` }}
              >
                <stat.icon size={24} className="text-white" />
              </motion.div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 relative"
        >
          {/* Background glow for the section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />
          
          <h3 className="mb-10 text-center text-3xl font-black sm:text-4xl md:mb-16 md:text-5xl tracking-tight">
            <span className="text-white">Our Creative</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(98,168,255,0.4)]">Core Strengths</span>
          </h3>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto z-10 relative">
            {[
               {
                 name: "SnapDrill Studio",
                 role: "Photography Direction",
                 image: "/snapdrill-media/logoPhoto.jpg",
                 color: "from-sky-400 to-blue-600",
                 tags: ["Camera Ops", "Lighting", "Framing"]
               },
               {
                 name: "Visual Reels Unit",
                 role: "Short-Form Production",
                 image: "/snapdrill-media/photoF.jpg",
                 color: "from-indigo-400 to-purple-600",
                 tags: ["Editing", "Transitions", "Color Grading"]
               },
               {
                 name: "Brand Content Desk",
                 role: "Creative Strategy",
                 image: "/snapdrill-media/photoA.jpg",
                 color: "from-blue-400 to-cyan-600",
                 tags: ["Marketing", "Trends", "Scripts"]
               }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="group relative h-full rounded-[2rem] border border-white/10 bg-[#0a0f18]/80 backdrop-blur-xl p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-3 hover:border-sky-500/40 hover:shadow-[0_20px_40px_-15px_rgba(98,168,255,0.4)] overflow-hidden">
                  
                  {/* Subtle Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Holographic Inner Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${member.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`} />

                  {/* High-Tech Circular Image Wrapper */}
                  <div className="relative mx-auto mb-8 h-32 w-32 mt-4">
                    {/* Rotating Dashed Ring */}
                    <motion.div 
                      className="absolute -inset-4 rounded-full border-[3px] border-dashed border-sky-400/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Rotating Solid Ring opposite direction */}
                    <motion.div 
                      className="absolute -inset-1 rounded-full border-t-[3px] border-b-[3px] border-sky-300/50 shadow-[0_0_15px_rgba(98,168,255,0.3)]"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/20 bg-black p-1 shadow-inner z-10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110 blur-[1px] group-hover:blur-0"
                      />
                    </div>
                  </div>

                  <h4 className="text-2xl font-black text-white drop-shadow-md mb-1.5 transition-colors group-hover:text-sky-300">{member.name}</h4>
                  <p className="text-xs font-bold tracking-widest uppercase text-sky-400/80 mb-6">{member.role}</p>
                  
                  {/* Skill/Role Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {member.tags.map((tag, i) => (
                      <span key={i} className="rounded-md border border-white/5 bg-white-[0.03] py-1.5 px-3 text-[10px] font-mono text-white/50 uppercase tracking-wider group-hover:border-sky-400/30 group-hover:text-white/90 group-hover:bg-sky-500/10 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
