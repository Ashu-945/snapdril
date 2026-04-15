import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Twitter, CheckCircle2, Sparkles } from "lucide-react"

// Confetti Particle Component
const ConfettiParticle = ({ index }: { index: number }) => {
  const colors = ["#38bdf8", "#818cf8", "#c084fc", "#fb7185", "#fbbf24"]
  const color = colors[index % colors.length]
  
  return (
    <motion.div
      initial={{ 
        x: "50%", 
        y: "50%", 
        scale: 0, 
        rotate: 0 
      }}
      animate={{ 
        x: `${Math.random() * 100}%`, 
        y: `${Math.random() * 100}%`, 
        scale: [0, 1, 0], 
        rotate: Math.random() * 360 
      }}
      transition={{ 
        duration: 2 + Math.random() * 2, 
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
      className="absolute h-2 w-2 rounded-sm"
      style={{ backgroundColor: color }}
    />
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validation is handled by native HTML 'required'
    console.log(formData)
    setIsSubmitted(true)
    
    // Smooth scroll to success message
    window.scrollTo({ top: document.getElementById('contact-form-container')?.offsetTop || 0, behavior: 'smooth' })
  }

  return (
    <section id="contact-form-container" className="relative overflow-hidden px-4 py-12 sm:px-6 md:px-8 md:py-16">
      <div className="section-shell relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center md:mb-10"
        >
          <span className="mb-4 inline-block rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] glass-card robot-panel text-sky-100 sm:text-sm">
            Contact
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="gradient-text">Let&apos;s Plan Your Next Shoot</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
            Share your requirement and we&apos;ll help shape the right photography or reels package for your business, event, or personal brand.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-8 text-2xl font-bold gradient-text">
              Get in Touch
            </h3>

            <div className="mb-10 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "snapdrillz@gmail.com", gradient: "from-sky-500 to-indigo-500" },
                { icon: Phone, label: "WhatsApp / Call", value: "7045312001", gradient: "from-sky-500 to-indigo-500" },
                { icon: MapPin, label: "Location", value: "Panvel, Navi Mumbai", gradient: "from-sky-500 to-indigo-500" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 rounded-2xl glass-card p-4 robot-panel"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient}`}>
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium text-foreground">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="mb-4 text-sm font-medium text-muted-foreground">
                Follow Us
              </h4>
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
                    whileTap={{ scale: 0.95 }}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${social.color} text-white shadow-lg`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 h-56 overflow-hidden rounded-2xl glass-card robot-panel sm:h-64"
            >
              <iframe
                src="https://maps.google.com/maps?q=Panvel%2C%20new%20Mumbai%2C%20IN&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Contact form / Success Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px]"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-3xl glass-card p-4 robot-panel sm:p-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-border/50 bg-white/8 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">
                        Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-border/50 bg-white/8 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Service Interested In <span className="text-sky-400">*</span>
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-border/50 bg-[#0f172a] px-4 py-3 text-white focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option style={{ backgroundColor: '#0f172a', color: '#ffffff' }} value="">Select a service</option>
                      <option style={{ backgroundColor: '#0f172a', color: '#ffffff' }} value="wedding">Wedding Photography</option>
                      <option style={{ backgroundColor: '#0f172a', color: '#ffffff' }} value="reels">Business & Brand Reels</option>
                      <option style={{ backgroundColor: '#0f172a', color: '#ffffff' }} value="events">Event Coverage</option>
                      <option style={{ backgroundColor: '#0f172a', color: '#ffffff' }} value="social">Social Media Content</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full resize-none rounded-xl border border-border/50 bg-white/8 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-sky-400/50 focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(98, 168, 255, 0.28)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-500/20 transition-all"
                  >
                    Send Enquiry
                    <Send size={18} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="flex flex-col items-center justify-center rounded-3xl border border-sky-500/30 bg-sky-500/5 backdrop-blur-xl p-8 text-center h-full sm:p-12"
                >
                  {/* Celebration Background Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                    {[...Array(20)].map((_, i) => (
                      <ConfettiParticle key={i} index={i} />
                    ))}
                  </div>

                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1.1, rotate: 0 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                    className="mb-8 relative"
                  >
                    <div className="absolute inset-0 bg-sky-400 blur-2xl opacity-20 animate-pulse" />
                    <CheckCircle2 size={100} className="text-sky-400 relative z-10" />
                  </motion.div>

                  <motion.h3 
                    className="text-3xl font-black text-white mb-4 sm:text-4xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Enquiry Sent!
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-sky-100/80 mb-8 max-w-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Thank you <span className="text-white font-bold">{formData.name}</span>! <br />
                    We&apos;ve received your request and will get back to you within 24 hours.
                  </motion.p>

                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-bold text-sky-300 hover:bg-sky-400/20 transition-all"
                  >
                    <Sparkles size={16} />
                    Submit Another Enquiry
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
