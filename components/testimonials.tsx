"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Absolutely incredible work! They captured every emotion of our wedding day perfectly. The photos and reels exceeded all our expectations.",
  },
  {
    name: "Michael Chen",
    role: "CEO, TechStartup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "Professional, creative, and incredibly easy to work with. Our brand video went viral and brought in tons of new customers!",
  },
  {
    name: "Emily Rodriguez",
    role: "Fashion Influencer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    content: "The reels they create for my brand are consistently engaging and on-trend. My followers love the quality and creativity.",
  },
]

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 px-6 py-16 md:py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Testimonials
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-syne)' }}>
            Client Love
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Don&apos;t just take our word for it – hear what our clients have to say
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8"
            >
              {/* Quote icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Quote className="text-primary" size={20} />
              </div>

              {/* Content */}
              <p className="mb-8 text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <div className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-syne)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
