"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    title: "i18n",
    slug: "i18n",
    url: "https://i18n.isolated.tech/",
    category: "Digital Health Platform",
    description:
      "Complete digital transformation for a healthcare startup, creating an intuitive patient portal and telemedicine platform.",
    image: "/i18n-screenshot.png",
    tags: ["Strategy", "Development", "UX"],
    year: "2024",
  },
  {
    title: "Talasofilia Pilates",
    slug: "talasofilia-pilates",
    url: "https://www.talasofiliapilates.com/",
    category: "Banking Platform",
    description:
      "Revolutionary mobile banking experience that transformed how users interact with their finances.",
    image: "/talasofilia-screenshot.png",
    tags: ["Mobile", "API", "Finance"],
    year: "2024",
  },
  {
    title: "Servigrafic Solutions",
    slug: "servigrafic-solutions",
    url: "https://www.servigraficsolutions.com/",
    category: "E-commerce Platform",
    description:
      "Sustainable e-commerce platform connecting conscious consumers with eco-friendly brands.",
    image: "/servigrafic-screenshot.png",
    tags: ["E-commerce", "Blockchain", "Sustainability"],
    year: "2023",
  },
  {
    title: "Voicescript",
    slug: "voicescript",
    url: "https://www.voicescri.pt/",
    category: "AI Transcription Tool",
    description:
      "Advanced voice-to-text platform leveraging AI for accurate transcription and real-time collaboration.",
    image: "/voicescript-screenshot.png",
    tags: ["AI", "Voice Recognition", "Collaboration"],
    year: "2024",
  },
  {
    title: "Cinelist",
    slug: "cinelist",
    url: "https://cinelist-blush.vercel.app/",
    category: "Entertainment Platform",
    description:
      "Movie discovery and tracking platform with personalized recommendations and social features.",
    image: "/cinelist-screenshot.png",
    tags: ["Entertainment", "Social", "Recommendation Engine"],
    year: "2024",
  },
  {
    title: "Costream",
    slug: "costream",
    url: "https://www.costream.app/",
    category: "Live Streaming Platform",
    description:
      "Collaborative streaming platform enabling creators to co-stream and engage with audiences together.",
    image: "/costream-screenshot.png",
    tags: ["Streaming", "Social", "Real-time"],
    year: "2024",
  },
]

export function Portfolio() {
  const [showMore, setShowMore] = useState(false)
  const displayedProjects = showMore ? projects : projects.slice(0, 2)

  return (
    <section id="portfolio" className="py-40" style={{ backgroundColor: '#131313' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="flex items-center justify-center lg:justify-start">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              PORTFOLIO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {displayedProjects.map((project, index) => (
              <a
                key={project.slug}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="space-y-4">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-white text-3xl font-normal">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white px-8 py-3 text-base font-medium transition-all duration-300 rounded-full"
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
    </section>
  )
}
