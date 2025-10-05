import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="py-12 bg-gradient-to-t from-space-black via-deep-space to-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-stellar-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-galaxy-pink/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            Tharsan.
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <motion.a 
              href="https://www.linkedin.com/in/tharisan0111/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass rounded-lg hover:glow transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-stellar-cyan text-xl" />
            </motion.a>
            
            <motion.a 
              href="https://github.com/ThaRSan1101"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass rounded-lg hover:glow transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-stellar-cyan text-xl" />
            </motion.a>
            
            <motion.a 
              href="https://wa.me/94715112782"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass rounded-lg hover:glow transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-stellar-cyan text-xl" />
            </motion.a>
            
            <motion.a 
              href="mailto:tharsan2001@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass rounded-lg hover:glow transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="text-stellar-cyan text-xl" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-stellar-cyan/20">
            <p className="text-cosmic-light">
              © 2025 Tharsan | All Rights Reserved
            </p>
            <p className="text-cosmic-gray text-sm mt-2">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
