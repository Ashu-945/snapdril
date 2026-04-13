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

        {/* Extreme Target Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0f18] p-8 sm:p-12 md:p-16 shadow-2xl"
        >
          {/* Animated Tech Background */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-600/30 via-[#0a0f18] to-[#0a0f18]" />
          <motion.div 
             className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
             animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
             className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"
             animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 7, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 relative z-10 tracking-tight">
            <span className="text-white">Ideal for </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(98,168,255,0.4)]">Businesses Like Yours</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 relative z-10 w-full">
            {[
              { label: "Cake Shops & Cafes", icon: Coffee, glow: "from-amber-500/20 to-orange-600/20", border: "hover:border-amber-400/50" },
              { label: "Showrooms", icon: Car, glow: "from-sky-500/20 to-blue-600/20", border: "hover:border-sky-400/50" },
              { label: "Retail Stores", icon: Store, glow: "from-indigo-500/20 to-purple-600/20", border: "hover:border-indigo-400/50" },
              { label: "Beauty Salons", icon: Scissors, glow: "from-pink-500/20 to-rose-600/20", border: "hover:border-pink-400/50" },
              { label: "Home Businesses", icon: Home, glow: "from-emerald-500/20 to-teal-600/20", border: "hover:border-emerald-400/50" },
            ].map((audience, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 sm:px-8 sm:py-5 flex items-center gap-4 shadow-xl transition-all duration-300 ${audience.border} cursor-pointer w-full sm:w-auto`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <motion.div 
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 shadow-inner group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <audience.icon size={20} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </motion.div>
                <span className="relative z-10 text-white font-bold text-base sm:text-lg tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                  {audience.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
