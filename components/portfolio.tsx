import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A comprehensive e-commerce solution that increased conversion rates by 40% through strategic UX improvements and technical optimization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Strategy", "Development", "UX"],
    year: "2024",
  },
  {
    title: "Brand Identity System",
    category: "Brand & Identity",
    description:
      "Complete visual identity for a sustainable technology startup, establishing market presence and investor confidence.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Branding", "Strategy", "Visual Identity"],
    year: "2024",
  },
  {
    title: "Product Photography",
    category: "Visual Content",
    description:
      "High-end product photography campaign that elevated brand perception and drove 60% increase in online sales.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Photography", "Art Direction", "Retouching"],
    year: "2023",
  },
  {
    title: "SaaS Platform Design",
    category: "Web Design",
    description:
      "Intuitive dashboard design for a project management platform, improving user engagement and reducing churn by 25%.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["UI/UX", "Product Design", "Research"],
    year: "2023",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-40 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extralight text-foreground mb-8 leading-tight">Selected Work</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              A curated selection of projects that demonstrate our strategic approach to digital design and development.
            </p>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden bg-white rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs font-medium px-3 py-1">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-foreground/50 font-medium">{project.year}</span>
                  </div>
                  <h3 className="text-3xl font-light text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-sm text-foreground/60 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
