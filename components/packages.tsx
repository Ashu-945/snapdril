"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Starter",
    icon: Sparkles,
    price: "299",
    description: "Perfect for small events and personal shoots",
    color: "from-sky-500 to-indigo-500",
    features: [
      "2 Hours Coverage",
      "50 Edited Photos",
      "1 Location",
      "Digital Delivery",
      "Social Media Ready",
    ],
    popular: false
  },
  {
    name: "Professional",
    icon: Star,
    price: "599",
    description: "Ideal for weddings and corporate events",
    color: "from-sky-500 to-indigo-500",
    features: [
      "Full Day Coverage",
      "200+ Edited Photos",
      "3 Locations",
      "1 Cinematic Reel",
      "Premium Album",
      "Drone Shots",
      "Same Day Edit",
    ],
    popular: true
  },
  {
    name: "Premium",
    icon: Crown,
    price: "999",
    description: "Complete solution for brands and creators",
    color: "from-sky-500 to-indigo-500",
    features: [
      "2 Days Coverage",
      "Unlimited Photos",
      "Unlimited Locations",
      "3 Cinematic Reels",
      "Luxury Album",
      "Drone + Gimbal",
      "Raw Files Included",
      "Priority Delivery",
    ],
    popular: false
  },
]

export function Packages() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="section-shell mx-auto max-w-7xl">
        {/* Section Header */}
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
            <Zap className="h-4 w-4 text-sky-300" />
            <span className="gradient-text-vibrant">Pricing Plans</span>
          </motion.span>
          <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
            <span className="gradient-text">Choose Your</span>
            <br />
            <span className="gradient-text-alt">Perfect Package</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            Flexible packages designed to meet your unique needs and budget
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${pkg.popular ? "md:-mt-6 md:mb-6" : ""}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <motion.div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-6 py-2 text-sm font-bold text-white shadow-xl">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <motion.div
                className={`relative h-full overflow-hidden rounded-3xl robot-panel ${
                  pkg.popular 
                    ? "glass-card ring-4 ring-sky-500/60 shadow-2xl neon-glow" 
                    : "glass-card"
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card Header */}
                <div className="p-6 pb-5 sm:p-8 sm:pb-6">
                  <motion.div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${pkg.color} mb-6`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <pkg.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="mb-2 text-xl font-black text-foreground sm:text-2xl">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-lg font-bold text-muted-foreground">$</span>
                    <span className="text-4xl font-black gradient-text sm:text-5xl">{pkg.price}</span>
                    <span className="text-muted-foreground">/project</span>
                  </div>
                </div>

                {/* Features */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div 
                          className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${pkg.color}`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </motion.div>
                        <span className="text-sm font-medium text-foreground/80 sm:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <motion.button
                      className={`w-full rounded-2xl py-3.5 text-base font-bold transition-all sm:py-4 sm:text-lg ${
                        pkg.popular
                          ? "bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-xl"
                          : "glass border-2 border-sky-500/40 text-foreground hover:bg-sky-500 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>

                {/* Shimmer Effect for Popular */}
                {pkg.popular && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We&apos;ve got you covered.
          </p>
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-base font-bold glass-card neon-glow robot-panel sm:px-8 sm:py-4 sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="gradient-text">Get Custom Quote</span>
              <Zap className="h-5 w-5 text-sky-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
