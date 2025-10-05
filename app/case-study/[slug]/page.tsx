import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a database or CMS
const caseStudies = {
  "lumina-health": {
    title: "Lumina Health",
    subtitle: "Digital Health Platform",
    description: "Complete digital transformation for a healthcare startup, creating an intuitive patient portal and telemedicine platform.",
    heroImage: "/placeholder.svg?height=600&width=1200",
    challenge: "Lumina Health needed a comprehensive digital platform that could handle patient scheduling, telemedicine consultations, and secure health record management while maintaining HIPAA compliance.",
    solution: "We designed and developed a full-stack healthcare platform with real-time video consultations, secure messaging, and an intuitive patient dashboard. The solution included a responsive web app and native mobile applications.",
    results: [
      "300% increase in patient engagement",
      "Reduced appointment scheduling time by 75%",
      "98% patient satisfaction rating",
      "HIPAA compliant infrastructure"
    ],
    services: ["Web Development", "Mobile Development", "UX/UI Design", "Security Consulting"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ]
  },
  "fintech-pro": {
    title: "FinTech Pro",
    subtitle: "Banking Innovation Platform",
    description: "Revolutionary mobile banking experience that transformed how users interact with their finances.",
    heroImage: "/placeholder.svg?height=600&width=1200",
    challenge: "FinTech Pro wanted to create a next-generation banking platform that would appeal to millennials and Gen Z users while maintaining enterprise-grade security.",
    solution: "We developed a modern banking application with AI-powered insights, real-time spending analytics, and gamified savings features. The platform integrates with multiple banking APIs and provides a seamless user experience.",
    results: [
      "500K+ active users in first year",
      "4.8 star app store rating",
      "40% increase in user savings",
      "Zero security breaches"
    ],
    services: ["Mobile Development", "API Integration", "UI/UX Design", "Financial Consulting"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ]
  },
  "eco-market": {
    title: "EcoMarket",
    subtitle: "E-commerce Platform",
    description: "Sustainable e-commerce platform connecting conscious consumers with eco-friendly brands.",
    heroImage: "/placeholder.svg?height=600&width=1200",
    challenge: "EcoMarket needed a scalable e-commerce solution that could verify product sustainability claims and provide transparency to environmentally conscious consumers.",
    solution: "We built a comprehensive marketplace with blockchain-based product verification, carbon footprint tracking, and an engaging shopping experience that educates users about sustainability.",
    results: [
      "2M+ products listed",
      "150% YoY growth",
      "85% repeat customer rate",
      "Carbon neutral operations"
    ],
    services: ["E-commerce Development", "Blockchain Integration", "Brand Strategy", "Visual Design"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600"
    ]
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug as keyof typeof caseStudies]
  
  if (!study) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-muted">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/#portfolio">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">{study.title}</h1>
          <p className="text-2xl text-foreground/80">{study.subtitle}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-foreground/80 leading-relaxed">
            {study.description}
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">The Challenge</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {study.challenge}
              </p>
            </div>
            <div>
              <Image
                src={study.images[0]}
                alt="Challenge visualization"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src={study.images[1]}
                alt="Solution showcase"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Solution</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {study.solution}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {study.results.map((result, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-primary mb-2">{result}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <Image
              src={study.images[2]}
              alt="Results visualization"
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to start your project?</h2>
          <p className="text-xl text-foreground/80 mb-8">
            Let's create something amazing together.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="rounded-full">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}