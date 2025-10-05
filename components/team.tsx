"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function Team() {
  const [currentView, setCurrentView] = useState(0) // 0: Team, 1: Cody, 2: Daniela

  const handleNext = () => {
    setCurrentView((prev) => (prev + 1) % 3)
  }

  return (
    <section id="team" className="py-40 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="flex items-start justify-center lg:justify-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {currentView === 0 ? "THE TEAM" : currentView === 1 ? "CODY BONTECOU" : "DANY BONTECOU"}
              </h2>
              {currentView === 0 && (
                <>
                  <p className="text-white uppercase mt-4" style={{ fontSize: '18px' }}>
                    CODY AND DANIELA BONTECOU
                  </p>
                  <p className="text-white/80 mt-4 text-lg leading-relaxed">
                    Cody and Daniela Bontecou lead the creative and technical vision at Isolated Tech. As Lead Graphic Designer and Lead Software Developer, they combine design and innovation to deliver exceptional digital experiences. Their teamwork blends creativity with cutting-edge technology to bring every project to life.
                  </p>
                </>
              )}
              {currentView === 1 && (
                <>
                  <p className="text-white uppercase mt-4" style={{ fontSize: '18px' }}>
                    FOUNDER & CTO
                  </p>
                  <p className="text-white/80 mt-4 text-lg leading-relaxed">
                    Cody Bontecou is the Lead Software Developer at Isolated Tech, specializing in creating innovative, high-quality solutions and guiding the development team with expertise and vision.
                  </p>
                </>
              )}
              {currentView === 2 && (
                <>
                  <p className="text-white uppercase mt-4" style={{ fontSize: '18px' }}>
                    HEAD OF GRAPHIC DESIGN
                  </p>
                  <p className="text-white/80 mt-4 text-lg leading-relaxed">
                    Daniela Bontecou is the Lead Graphic Designer at Isolated Tech. She specializes in creating bold, modern, and visually engaging designs that connect with audiences. With a keen eye for detail and creativity, she transforms ideas into impactful visuals.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex justify-center lg:justify-end flex-1">
                <div className="relative w-full max-w-2xl">
                  <Image
                    src={currentView === 0 ? "https://i.imgur.com/ll8oOto.jpeg" : currentView === 1 ? "https://i.imgur.com/JTUMGYD.jpeg" : "https://i.imgur.com/rv1IZlM.jpeg"}
                    alt={currentView === 0 ? "Team photo" : currentView === 1 ? "Cody Bontecou" : "Dany Bontecou"}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <button
                onClick={handleNext}
                className="text-white hover:text-white/80 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}