'use client'

import { motion } from 'framer-motion'
import { Code, GraduationCap, Brain, Award } from 'lucide-react'
import { AboutBox } from './AboutBox'

const aboutItems = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Passionate about creating beautiful and functional web experiences. Proficient in HTML, CSS, and JavaScript.",
    details: "I've worked on various web projects, from simple landing pages to complex web applications. I'm always excited to learn and implement new web technologies.",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "IT Student",
    description: "Pursuing B.E. in Information Technology with dedication at CGC College of Engineering.",
    details: "Currently in my third year, I'm focusing on core IT subjects like Data Structures, Algorithms, Database Management, and Software Engineering. I'm also actively participating in coding competitions and hackathons.",
    gradient: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Continuous Learning",
    description: "Always eager to learn new technologies and improve my skills in the ever-evolving tech landscape.",
    details: "I regularly take online courses, attend webinars, and work on personal projects to stay updated with the latest trends in technology. I believe in the power of lifelong learning.",
    gradient: "bg-gradient-to-br from-orange-500 to-pink-600"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Achievements",
    description: "Participated in hackathons and secured badges in competitive coding platforms.",
    details: "I've earned a 3-star badge on HackerRank for C++ and Problem Solving. I was also part of the top 50 teams in the SMART INDIA HACKATHON at CGC Landran 2023.",
    gradient: "bg-gradient-to-br from-yellow-500 to-red-600"
  }
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-white">About Me</h2>
          <div className="space-y-8">
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              An avid learner exploring the world of coding and web development. Currently pursuing my third year in Bachelor of Engineering in Information Technology at CGC College of Engineering. I'm passionate about gaining knowledge and developing my skill set to contribute effectively to organizational goals.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {aboutItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AboutBox {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

