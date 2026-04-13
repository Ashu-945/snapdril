"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, Camera, Sparkles } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-6 md:px-8 transition-all duration-500 ${
        scrolled 
          ? "bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
          : "bg-black/20 backdrop-blur-md border border-white/5"
      }`}>
        {/* Logo */}
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center"
          >
            <img src="/snapdrill-media/logoPhotoCropped.png" alt="SnapDrill Logo" className="h-10 md:h-14 w-auto object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:gap-10 md:flex">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className={`relative whitespace-nowrap text-sm font-bold tracking-wide transition-all duration-300 ${
                  pathname === link.href
                    ? "text-sky-200 drop-shadow-[0_0_8px_rgba(98,168,255,0.35)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span className={`${pathname !== link.href && "hover:bg-gradient-to-r hover:from-sky-300 hover:to-indigo-300 hover:bg-clip-text hover:text-transparent"} transition-all duration-300`}>
                  {link.name}
                </span>
                {pathname === link.href && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 shadow-[0_0_10px_rgba(98,168,255,0.5)]"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(98, 168, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_20px_rgba(98,168,255,0.22)] transition-all"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Book Now
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-white/10 p-2.5 text-white backdrop-blur-md border border-white/10 md:hidden shrink-0"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 px-4 py-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-lg font-bold transition-all ${
                      pathname === link.href
                        ? "bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white shadow-lg"
                        : "text-foreground hover:bg-white/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-2"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-4 py-3 font-bold text-white shadow-xl">
                    <Sparkles className="h-5 w-5" />
                    Book Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
