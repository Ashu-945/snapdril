"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Youtube, Twitter, ArrowUp, Camera } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Wedding Photography", href: "/services" },
    { name: "Cinematic Reels", href: "/services" },
    { name: "Event Coverage", href: "/services" },
    { name: "Social Media Content", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/contact" },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative mt-10 px-4 py-12 sm:px-6 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] glass-card p-6 robot-panel sm:p-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">SnapDrill</span>
            </Link>
            <p className="mb-6 max-w-sm text-sm text-muted-foreground sm:text-base">
              Photography and reels studio based in Panvel, helping businesses and events present themselves with cleaner, sharper visual content.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/snapdrill_", color: "from-sky-500 to-indigo-500" },
                { icon: Youtube, href: "#", color: "from-sky-500 to-indigo-500" },
                { icon: Twitter, href: "#", color: "from-sky-500 to-indigo-500" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${social.color} text-white shadow-lg`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold gradient-text">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-sky-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold gradient-text">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-sky-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 text-center md:mt-12 md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2026 SnapDrill. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm text-white shadow-lg"
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
