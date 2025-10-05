"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black border-b border-gray-800" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white">ISO TECH</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              <button
                onClick={() => scrollToSection("our-model")}
                className="text-white/80 hover:text-white px-0 py-2 text-sm font-medium transition-colors duration-300"
              >
                Our Model
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/80 hover:text-white px-0 py-2 text-sm font-medium transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-white/80 hover:text-white px-0 py-2 text-sm font-medium transition-colors duration-300"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-white/80 hover:text-white px-0 py-2 text-sm font-medium transition-colors duration-300"
              >
                The Team
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-black border-2 border-white hover:bg-black hover:text-white hover:border-white px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <button
                onClick={() => scrollToSection("our-model")}
                className="text-foreground block px-3 py-2 text-base font-medium w-full text-left"
              >
                Our Model
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground block px-3 py-2 text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-foreground block px-3 py-2 text-base font-medium w-full text-left"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-foreground block px-3 py-2 text-base font-medium w-full text-left"
              >
                The Team
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
