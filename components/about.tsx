import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Cody Bontecou",
    role: "Co-founder and CTO",
    image: "https://i.imgur.com/s3hhldB.png",
    bio: "Cody drives the creative vision at the heart of our work, bringing over 12 years of expertise in digital design and brand strategy. With a sharp eye for detail and a passion for innovation, he bridges technology and creativity to build standout digital experiences.",
  },
  {
    name: "Daniela Bontecou",
    role: "Co-founder and Lead graphic designer",
    image: "https://i.imgur.com/m8zxDjP.png",
    bio: "Daniela blends design and development as a full-stack architect, specializing in scalable web applications and modern development practices. Her creative precision and technical fluency shape digital products that are as functional as they are visually compelling.",
  },
]

const stats = [
  {
    icon: Users,
    number: "150+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    number: "25+",
    label: "Awards Won",
  },
  {
    icon: Clock,
    number: "5+",
    label: "Years Experience",
  },
  {
    icon: Target,
    number: "300+",
    label: "Projects Completed",
  },
]

export function About() {
  return (
    <section id="about" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-foreground mb-8 leading-tight">About ISO TECH</h2>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              We are a team of strategists, designers, and developers who believe great digital experiences drive
              business growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extralight text-foreground mb-3">{stat.number}</div>
              <div className="text-sm text-foreground/60 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-6 sm:mb-8">Our Approach</h3>
            <p className="text-sm sm:text-base text-foreground/80 mb-4">
              Founded with a vision to bridge the gap between technology and creativity, ISO TECH has grown from a small
              startup to a recognized leader in digital innovation.
            </p>
            <p className="text-sm sm:text-base text-foreground/80 mb-4">
              Our approach combines strategic thinking with creative execution, ensuring that every project we undertake
              not only meets but exceeds our clients' expectations.
            </p>
            <p className="text-sm sm:text-base text-foreground/80">
              We believe in the power of collaboration, continuous learning, and pushing the boundaries of what's
              possible in the digital realm.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl p-8">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our team at work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-8 sm:mb-12 text-center">The Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white text-center border border-primary/10 hover:border-primary/20 transition-colors duration-300"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                  <p className="text-foreground font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/70">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
