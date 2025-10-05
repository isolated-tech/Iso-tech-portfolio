import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "i18n",
    slug: "i18n",
    category: "Digital Health Platform",
    description:
      "Complete digital transformation for a healthcare startup, creating an intuitive patient portal and telemedicine platform.",
    image: "https://i.imgur.com/6gkz2rK.png",
    tags: ["Strategy", "Development", "UX"],
    year: "2024",
  },
  {
    title: "Talasofilia Pilates",
    slug: "talasofilia-pilates",
    category: "Banking Platform",
    description:
      "Revolutionary mobile banking experience that transformed how users interact with their finances.",
    image: "https://i.imgur.com/vnm6y5S.png",
    tags: ["Mobile", "API", "Finance"],
    year: "2024",
  },
  {
    title: "Servigrafic Solutions",
    slug: "servigrafic-solutions",
    category: "E-commerce Platform",
    description:
      "Sustainable e-commerce platform connecting conscious consumers with eco-friendly brands.",
    image: "https://i.imgur.com/3VCsN5d.png",
    tags: ["E-commerce", "Blockchain", "Sustainability"],
    year: "2023",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-40" style={{ backgroundColor: '#131313' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex items-center justify-center lg:justify-start">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              WORK
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project, index) => (
              <Link key={index} href={`/case-study/${project.slug}`} className="group block">
                <div className={`relative h-64 ${
                  index === 0 ? 'bg-gray-700' : 'bg-gray-400'
                } rounded-lg overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <h3 className={`text-white text-3xl text-center ${
                      index === 1 ? 'font-serif italic' : 'font-normal'
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <Button
            variant="outline"
            className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white hover:border-white px-8 py-3 text-base font-medium transition-all duration-300 rounded-full"
          >
            View all projects
          </Button>
        </div>
      </div>
    </section>
  )
}
