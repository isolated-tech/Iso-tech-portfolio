"use client"

import { X } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2">
          {/* Socials */}
          <div>
            <h4 className="mb-4" style={{ color: '#F9FAFB' }}>Socials</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-bold uppercase" style={{ fontSize: '30px' }}>
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-bold uppercase" style={{ fontSize: '30px' }}>
                  GITHUB
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-bold uppercase" style={{ fontSize: '30px' }}>
                  LINKEDIN
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-bold uppercase" style={{ fontSize: '30px' }}>
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Email */}
          <div className="text-right">
            <h4 className="mb-4" style={{ color: '#F9FAFB' }}>Email</h4>
            <a href="mailto:info@isolated.tech" className="text-white/70 hover:text-white transition-colors font-bold uppercase" style={{ fontSize: '30px' }}>
              INFO@ISOLATED.TECH
            </a>
            
            <div style={{ marginTop: '100px', display: 'flex', gap: '30px', justifyContent: 'flex-end' }}>
              <span style={{ color: '#F9FAFB' }}>SERVICES</span>
              <span style={{ color: '#F9FAFB' }}>PORTFOLIO</span>
              <span style={{ color: '#F9FAFB' }}>BLOG</span>
              <span style={{ color: '#F9FAFB' }}>ABOUT</span>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <p className="text-white/50 text-sm">© 2024 ISO TECH. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
