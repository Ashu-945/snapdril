"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917045312001"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-500/30 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <motion.span
        className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-red-500 sm:h-4 sm:w-4"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}
