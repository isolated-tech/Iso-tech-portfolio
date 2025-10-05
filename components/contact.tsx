"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Clock, ChevronDown } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(`New inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    )

    // Open email client with pre-filled content
    window.location.href = `mailto:hello@isolated.tech?subject=${subject}&body=${body}`

    // Reset form
    setFormData({ name: "", email: "", company: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-40" style={{ backgroundColor: '#131313' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight inline-flex items-center">
            CONTACT US <ChevronDown className="ml-4" size={48} />
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            We'd love to hear your ideas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-transparent border border-white text-white placeholder-white/50 focus:border-white focus:ring-1 focus:ring-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-transparent border border-white text-white placeholder-white/50 focus:border-white focus:ring-1 focus:ring-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Tell us about your project *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="bg-transparent border border-white text-white placeholder-white/50 focus:border-white focus:ring-1 focus:ring-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white hover:border-white rounded-full transition-all duration-300 px-8 py-2 text-sm"
                  >
                    Send Message
                  </Button>
                </form>
          </div>
        </div>
      </div>
    </section>
  )
}
