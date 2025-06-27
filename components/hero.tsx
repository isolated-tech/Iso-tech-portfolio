"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const words = ["Success", "Innovation", "Experiences", "Impact", "Growth"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2500) // Change word every 2.5 seconds

    return () => clearInterval(interval)
  }, [words.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight">
            <span className="block leading-[0.9]">We Build Digital</span>
            <span className="block relative h-[1em] overflow-hidden">
              {words.map((word, index) => (
                <span
                  key={word}
                  className={`absolute left-0 transition-all duration-700 ease-in-out ${
                    index === currentWordIndex
                      ? "opacity-100 transform translate-y-0"
                      : index === (currentWordIndex - 1 + words.length) % words.length
                      ? "opacity-0 transform -translate-y-full"
                      : "opacity-0 transform translate-y-full"
                  }`}
                  style={{ lineHeight: "1em" }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
        </div>
        <h2 className="text-xl md:text-2xl font-light text-foreground/80 mb-12 leading-relaxed max-w-3xl">
          We craft digital experiences that propel your business forward. Our expert team blends stunning design with technical excellence to create websites that don't just look great – they deliver real results.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => scrollToSection("portfolio")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-transparent hover:text-primary hover:border-primary border-2 border-primary px-8 py-3 text-base font-medium transition-all duration-300 rounded-full"
          >
            View Selected Work
          </Button>
        </div>
      </div>
    </section>
  )
}