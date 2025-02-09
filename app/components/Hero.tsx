'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1717527632476_optimized_50.jpg-By8G2wXNVffnvoWtg2MI5Gl0HY1qzB.jpeg"
            alt="Sonu Kumar"
            width={180}
            height={180}
            className="rounded-full border-4 border-white/10 shadow-2xl mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white">Sonu Kumar</h1>
          <p className="text-xl text-blue-200 mb-8">Aspiring Web Developer | IT Student</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </div>
    </section>
  )
}

