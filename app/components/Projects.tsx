"use client"

import { motion } from "framer-motion"
import { SlidingBox } from "./SlidingBox"

const projects = [
  {
    title: "Plant AI Detective",
    description:
      "A web-based application that uses AI to identify plant species, detect diseases, and provide care tips. Users can upload plant images to get instant insights into their plant's health and maintenance recommendations.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1709402886766-s7Sl03ggE1v7sNacqjBDupH12kHn1p.jpeg",
    liveDemo: "http://127.0.0.1:5500/Plant%20AI%20Detectives/Plant%20AI%20Detectives.html",
    sourceCode: "https://github.com/Guptsonu22/Plant-AI-Detective",
    technologies: ["HTML", "CSS", "JavaScript", "AI/ML", "Image Processing"],
  },
  {
    title: "Theme Clock",
    description:
      "A dynamic and visually appealing clock application featuring both analog and digital displays. Built with modern web technologies, it includes real-time updates, dark/light theme support, and smooth animations for an elegant user experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JNISnenrNhiV6TIcZSrJLK4W6cGrpT.png",
    liveDemo: "https://theme-clock-ochre.vercel.app",
    sourceCode: "https://github.com/Guptsonu22/Theme-Clock",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
  },
  {
    title: "GitHub Resume Generator",
    description:
      "A web application that creates professional resumes using GitHub profile data. Features customizable templates, real-time previews, and multiple export formats.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-background.jpg-1lMZRpAHgsh0LF7akgNDv7a4stAhLa.jpeg",
    liveDemo: "http://127.0.0.1:5500/Project%20ITC%202023/front.html",
    sourceCode: "https://github.com/Guptsonu22/solid-disco",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
  },
  {
    title: "Glassmorphism Login Form",
    description:
      "A modern web application featuring a sleek glassmorphism design with dual color themes, frosted glass effects, and an engaging ghost mascot. Implements modern UI/UX principles with smooth transitions.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo1699357486-a7rqoWQnLb3D2TnaBejd6E17jFbHiT.jpeg",
    liveDemo: "http://127.0.0.1:5500/Glassmorphisms%20Login%20Pages/Login%20Pages/index.html",
    sourceCode: "https://github.com/Guptsonu22/Glassmorphism-Login-Pages",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "School Management System",
    description:
      "A modern web application built with Java and SQL for comprehensive school administration. Features include attendance tracking, student profiles, and result management.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smp_i3-C2LiuTqZSgrJLDQtin46cMLx0ePomG.png",
    liveDemo: "https://github.com/Guptsonu22/School-Management-system",
    sourceCode: "https://github.com/Guptsonu22/School-Management-system",
    technologies: ["Java", "SQL", "HTML"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-stretch"
              >
                <SlidingBox {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

