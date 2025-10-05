"use client"

import { X } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0">
          {/* Socials */}
          <div>
            <h4 className="mb-4" style={{ color: '#F9FAFB' }}>Socials</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="https://www.instagram.com/isolated.tech" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors font-bold uppercase text-xl sm:text-2xl lg:text-3xl">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="https://github.com/isolated-tech" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors font-bold uppercase text-xl sm:text-2xl lg:text-3xl">
                  GITHUB
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/isolated-tech/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors font-bold uppercase text-xl sm:text-2xl lg:text-3xl">
                  LINKEDIN
                </a>
              </li>
              <li>
                <a href="https://x.com/isolatedtech" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors font-bold uppercase text-xl sm:text-2xl lg:text-3xl">
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Email */}
          <div className="text-left sm:text-right">
            <h4 className="mb-4" style={{ color: '#F9FAFB' }}>Email</h4>
            <a href="mailto:hello@isolated.tech" className="text-white/70 hover:text-white transition-colors font-bold uppercase text-xl sm:text-2xl lg:text-3xl block">
              HELLO@ISOLATED.TECH
            </a>
            
            <div className="mt-12 sm:mt-24 flex flex-wrap gap-4 sm:gap-6 justify-start sm:justify-end">
              <a href="#about" className="text-gray-100 no-underline text-sm sm:text-base">PRICING</a>
              <a href="#services" className="text-gray-100 no-underline text-sm sm:text-base">SERVICES</a>
              <a href="#portfolio" className="text-gray-100 no-underline text-sm sm:text-base">PORTFOLIO</a>
              <a href="#team" className="text-gray-100 no-underline text-sm sm:text-base">THE TEAM</a>
            </div>
            
            <div className="mt-4 sm:mt-5">
              <p className="text-white/50 text-xs sm:text-sm">© 2024 ISO TECH. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
