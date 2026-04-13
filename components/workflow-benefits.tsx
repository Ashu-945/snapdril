"use client"

import { motion } from "framer-motion"
import { Target, Zap, MessageCircle, TrendingUp, CheckCircle2, ChevronRight, Store, ShoppingBag, Coffee, Car, Scissors, Home } from "lucide-react"

const workflows = [
  {
    step: "1",
    title: "Understand & Strategize",
    description: "We dive deep into your brand, target audience, and business goals to tailor our approach."
  },
  {
    step: "2",
    title: "Plan & Create",
    description: "Developing a detailed content plan, including shoot schedules and reel concepts."
  },
  {
    step: "3",
    title: "Execute & Publish",
    description: "Professional shooting, expert editing, and timely posting across your chosen platforms."
  },
  {
    step: "4",
    title: "Engage & Report",
    description: "Boosting visibility, fostering engagement, and providing optional monthly performance reports."
  }
]

const benefits = [
  { icon: TrendingUp, title: "Boost Online Visibility", desc: "Increase your brand's reach and get noticed by more potential customers online." },
  { icon: Zap, title: "Professional Brand Image", desc: "Elevate your brand with high-quality visuals and consistent, cohesive messaging." },
  { icon: MessageCircle, title: "More Customer Inquiries", desc: "Drive engagement that translates into direct messages, calls, and customer interactions." },
  { icon: Target, title: "Hyper-Local Targeting", desc: "Connect with your local audience effectively through trending and tailored reels." },
  { icon: CheckCircle2, title: "Increased Footfall", desc: "Attract more customers to your physical shops and showrooms with compelling digital content." },
]

export function WorkflowBenefits() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-white">
            Our Simple <span className="text-sky-300">Workflow</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">From concept to completion, we make the process seamless.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-24 relative">
          {workflows.map((flow, idx) => (
            <motion.div
              key={flow.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl bg-white/5 border border-white/10 p-8 glass-card"
            >
              <div className="absolute top-4 right-6 mb-4 text-5xl font-black text-sky-400/18">{flow.step}</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">{flow.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{flow.description}</p>
              {idx < workflows.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-sky-300 lg:block">
                  <ChevronRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-white">
            Benefits for <span className="text-sky-300">Your Business</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 transition-colors hover:border-sky-400/40"
            >
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                  <benefit.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/70">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-700 p-8 text-center shadow-2xl sm:p-12"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000')] opacity-10 mix-blend-overlay object-cover" />
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 relative z-10">
            Ideal for Businesses Like Yours
          </h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {[
              { label: "Cake Shops & Cafes", icon: Coffee },
              { label: "Showrooms", icon: Car },
              { label: "Retail Stores", icon: Store },
              { label: "Beauty Salons", icon: Scissors },
              { label: "Home Businesses", icon: Home },
            ].map((audience, idx) => (
              <span key={idx} className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2 border border-white/20">
                <audience.icon size={16} />
                {audience.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
