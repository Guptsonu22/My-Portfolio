'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`text-base font-bold transition-colors duration-300 ${
                    activeSection === item.href.replace('#', '') 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-300'
                  }`}
                  style={{
                    textShadow: activeSection === item.href.replace('#', '') ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none'
                  }}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.name}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

