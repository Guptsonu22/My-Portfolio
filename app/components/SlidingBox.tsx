'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import { Tilt } from 'react-tilt'

interface SlidingBoxProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveDemo: string
  sourceCode: string
}

const defaultOptions = {
  reverse:        false,
  max:            35,
  perspective:    1000,
  scale:          1.05,
  speed:          1000,
  transition:     true,
  axis:           null,
  reset:          true,
  easing:         "cubic-bezier(.03,.98,.52,.99)",
}

export function SlidingBox({ title, description, image, technologies, liveDemo, sourceCode }: SlidingBoxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Tilt options={defaultOptions} className="w-full h-full">
      <Card 
        className="relative overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-xl h-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-70" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/20 text-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 bg-white overflow-hidden"
        >
          <CardContent className="p-4">
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
              <Button variant="default" size="sm" asChild>
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </motion.div>
      </Card>
    </Tilt>
  )
}

