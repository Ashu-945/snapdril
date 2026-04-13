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

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h3 className="mb-10 text-center text-2xl font-black sm:text-3xl md:mb-12 md:text-4xl">
            <span className="gradient-text">Our Creative</span>{" "}
            <span className="gradient-text-alt">Core Strengths</span>
          </h3>
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12 }}
                className="rounded-3xl glass-card p-6 text-center card-hover-lift robot-panel sm:p-8"
              >
                <motion.div 
                  className={`relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full p-1.5 bg-gradient-to-br ${member.color}`}
                  whileHover={{ scale: 1.1 }}
                  style={{ boxShadow: `0 15px 40px rgba(98, 168, 255, 0.22)` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </motion.div>
                <h4 className="text-xl font-black gradient-text">{member.name}</h4>
                <p className="text-sm text-muted-foreground font-medium mt-1">{member.role}</p>
                
                {/* Social icons placeholder */}
                <div className="flex justify-center gap-3 mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className={`h-8 w-8 rounded-full bg-gradient-to-br ${member.color} opacity-70`}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
