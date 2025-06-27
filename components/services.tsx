import { Code, Palette, Camera, Monitor } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "We build scalable, performant web applications using modern technologies and best practices that drive business results.",
    capabilities: ["React & Next.js", "Full-stack Architecture", "API Development", "Performance Optimization"],
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "User-centered design solutions that create meaningful connections between your brand and your audience.",
    capabilities: ["UI/UX Strategy", "Design Systems", "Responsive Design", "User Research"],
  },
  {
    icon: Palette,
    title: "Brand & Visual Identity",
    description:
      "Comprehensive visual identity systems that differentiate your brand and communicate your values effectively.",
    capabilities: ["Brand Strategy", "Visual Identity", "Print & Digital", "Brand Guidelines"],
  },
  {
    icon: Camera,
    title: "Visual Content",
    description: "Professional photography and visual content that showcases your products and tells your brand story.",
    capabilities: ["Product Photography", "Brand Photography", "Content Strategy", "Post-Production"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extralight text-foreground mb-8 leading-tight">
              Our Capabilities
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              We partner with forward-thinking organizations to create digital experiences that drive growth and build
              lasting relationships with their audiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6 mb-8">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-foreground mb-4">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="text-sm text-foreground/60 font-medium">
                        {capability}
                      </div>
                    ))}
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
