'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: <Linkedin className="w-6 h-6" />, 
    url: 'https://www.linkedin.com/in/sonu-kumar-443803231',
    gradient: 'from-blue-400 to-blue-600'
  },
  { 
    name: 'GitHub', 
    icon: <Github className="w-6 h-6" />, 
    url: 'https://github.com/Guptsonu22',
    gradient: 'from-gray-700 to-gray-900'
  },
  { 
    name: 'Twitter', 
    icon: <Twitter className="w-6 h-6" />, 
    url: 'https://x.com/SonuGup46022700', 
    gradient: 'from-blue-400 to-blue-500'
  },
]

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
}

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:sonugupta411093@gmail.com"
                  className="flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white group-hover:text-blue-400 transition-colors">sonugupta411093@gmail.com</p>
                  </div>
                </motion.a>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-white">Social Links</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      className={`w-12 h-12 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

