"use client"

import { Contact } from "@/components/contact"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* Page Header */}
      <section className="px-4 pb-10 pt-28 sm:px-6 md:px-8 md:pt-32">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-6xl"
          >
            <span className="gradient-text">Contact Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg"
          >
            Ready to create something amazing? Let&apos;s talk!
          </motion.p>
        </div>
      </section>
      
      <Contact />
    </main>
  )
}
