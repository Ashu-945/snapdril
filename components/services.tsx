"use client"

import { motion } from "framer-motion"
import { Camera, Video, Share2, Palette, TrendingUp, Sparkles } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Photography & Creative Design",
    description: "Capturing the essence of your products, outlets, menus, and events with professional photography, plus designing eye-catching flyers, banners, and social media posts.",
    features: ["Product Photography", "Outlet & Menu Shoots", "Event Coverage", "Flyer & Banner Design", "Brand Identity"],
    gradient: "from-sky-500 to-indigo-500",
    bgGlow: "rgba(98, 168, 255, 0.18)"
  },
  {
    icon: Video,
    title: "Reels & Social Media",
    description: "Crafting creative, trending short videos and managing your social media with strategic planning, captivating captions, and community engagement.",
    features: ["Trending Audios", "Creative Storytelling", "Content Calendar", "Community Engagement", "Fast Turnaround"],
    gradient: "from-sky-500 to-cyan-400",
    bgGlow: "rgba(129, 227, 255, 0.18)"
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy & Growth",
    description: "Developing monthly growth and engagement strategies with performance tracking, audience targeting, and social media graphics to boost your online presence.",
    features: ["Monthly Growth Plans", "Performance Tracking", "Audience Targeting", "Social Media Graphics", "Campaign Planning"],
    gradient: "from-blue-500 to-indigo-500",
    bgGlow: "rgba(98, 168, 255, 0.18)"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Services() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 md:px-8 md:py-16">
      <div className="section-shell relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center md:mb-10"
        >
          <motion.span 
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] glass-card robot-panel sm:px-5 sm:text-sm bg-white/5"
          >
            <Sparkles className="h-4 w-4 text-sky-300" />
            <span className="text-sky-100">Our Comprehensive Services</span>
          </motion.span>
          <h2 className="mb-4 text-xl font-black tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-white">
            <span>What We</span>
            <br />
            <span className="gradient-text-alt">Offer You</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70 sm:text-base md:text-lg">
            Empowering your brand through a complete suite of creative and digital media services.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 justify-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                className="relative h-full overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 transition-all robot-panel sm:p-8"
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  boxShadow: `0 25px 50px -12px ${service.bgGlow}, 0 0 40px ${service.bgGlow}`
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background glow effect */}
                <motion.div 
                  className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                />
                
                <div className="relative">
                  {/* Icon with animation */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl`}
                    style={{ boxShadow: `0 10px 30px -5px ${service.bgGlow}` }}
                  >
                    <service.icon size={28} className="text-white" />
                  </motion.div>

                  {/* Title with gradient on hover */}
                  <h3 className="mb-3 text-xl font-black text-white transition-all group-hover:text-sky-200 sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-white/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 text-sm font-medium text-white/90"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <motion.span 
                          className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${service.gradient} shadow-[0_0_10px_rgba(98,168,255,0.24)]`}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
