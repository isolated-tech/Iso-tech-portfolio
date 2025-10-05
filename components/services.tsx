import { Check } from "lucide-react"

const services = [
  "A website that actually looks good",
  "Hosting (so it stays online) with your own domain",
  "Payment stuff if you need it",
  "Login systems for your customers",
  "We'll update the design when you need changes"
]

const additionalServices = [
  {
    title: "Web Development",
    description: "We build scalable, performant web applications using modern technologies and best practices that drive business results.",
    capabilities: ["React & Next.js", "Full-stack Architecture", "API Development", "Performance Optimization"]
  },
  {
    title: "Social Media Design",
    description: "User-centered design solutions that create meaningful connections between your brand and your audience.",
    capabilities: ["UI/UX Strategy", "Design Systems", "Responsive Design", "User Research"]
  },
  {
    title: "Brand & Visual Identity",
    description: "Comprehensive visual identity systems that differentiate your brand and communicate your values effectively.",
    capabilities: ["Brand Strategy", "Visual Identity", "Print & Digital", "Brand Guidelines"]
  },
  {
    title: "Visual Content",
    description: "Professional photography and visual content that showcases your products and tells your brand story.",
    capabilities: ["Product Photography", "Brand Photography", "Content Strategy", "Post-Production"]
  }
]

export function Services() {
  return (
    <>
      <section id="our-model" className="py-40" style={{ backgroundColor: '#131313' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex items-center justify-center lg:justify-start">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                PRICING
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                  $200/month.
                </p>
                <p className="text-lg sm:text-xl text-gray-400 mt-2">
                  That's it.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-white mb-6">What you get:</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="text-white/70 mt-1">-</span>
                      <p className="text-base sm:text-lg text-white/90">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-40 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex items-center justify-center lg:justify-start">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                SERVICES
              </h2>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
                {additionalServices.map((service, index) => (
                  <div key={index}>
                    <h4 className="text-lg sm:text-xl font-normal text-white">
                      {String(index + 1).padStart(2, '0')}. {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
