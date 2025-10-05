"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement)
        setIsPointer(computedStyle.cursor === 'pointer')
      }
    }

    window.addEventListener("mousemove", updateCursorPosition)
    window.addEventListener("mouseover", updateCursorType)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("mouseover", updateCursorType)
    }
  }, [position.x, position.y])

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.2s ease;
          mix-blend-mode: difference;
        }
        
        @media (hover: none) {
          * {
            cursor: auto !important;
          }
          
          .custom-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  )
}