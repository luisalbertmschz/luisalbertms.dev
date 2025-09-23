"use client"

import { useEffect, useState } from "react"

export function FrostGlassBottom() {
  const [isVisible, setIsVisible] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Mostrar cuando se ha scrolleado más de 200px
      if (scrollY > 200) {
        setIsVisible(true)
        
        // Calcular opacidad basada en la distancia al footer
        const distanceToBottom = documentHeight - (scrollY + windowHeight)
        const footerThreshold = 300 // 300px antes del footer
        
        if (distanceToBottom < footerThreshold) {
          // Desvanecer gradualmente cuando se acerca al footer
          const fadeRatio = Math.max(0, distanceToBottom / footerThreshold)
          setOpacity(fadeRatio)
        } else {
          // Opacidad completa cuando está lejos del footer
          setOpacity(1)
        }
      } else {
        setIsVisible(false)
        setOpacity(0)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-40 transition-opacity duration-300"
      style={{ opacity }}
    >
      {/* Gradiente ultra largo y suave - sin cortes */}
      <div 
        className="w-full h-full"
        style={{
          background: `linear-gradient(
            to top,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.025) 10%,
            rgba(255, 255, 255, 0.015) 20%,
            rgba(255, 255, 255, 0.01) 30%,
            rgba(255, 255, 255, 0.008) 40%,
            rgba(255, 255, 255, 0.006) 50%,
            rgba(255, 255, 255, 0.004) 60%,
            rgba(255, 255, 255, 0.003) 70%,
            rgba(255, 255, 255, 0.002) 80%,
            rgba(255, 255, 255, 0.001) 90%,
            transparent 100%
          )`,
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
        }}
      />
      
      {/* Efecto de color ultra sutil */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.003) 0%,
            rgba(16, 185, 129, 0.002) 50%,
            rgba(139, 92, 246, 0.003) 100%
          )`,
        }}
      />
    </div>
  )
}
