"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export function SidebarLinks() {
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience')
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect()
        // Mostrar cuando la sección experience esté visible
        setShowLinks(rect.top < window.innerHeight && rect.bottom > 0)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!showLinks) return null

  return (
    <>
      <div className="fixed left-6 bottom-0 hidden xl:flex flex-col items-center space-y-6 z-30">
        <div className="flex flex-col space-y-6">
          <a
            href="https://github.com/luisalbertmschz"
            className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/luisalbertmschz"
            className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:luisalbertmschz@gmail.com"
            className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <div className="w-px h-28 bg-gradient-to-t from-primary/60 to-transparent"></div>
      </div>

      <div className="fixed right-6 bottom-0 hidden xl:flex flex-col items-center space-y-6 z-30">
        <a
          href="mailto:luisalbertmschz@gmail.com"
          className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform writing-mode-vertical text-sm tracking-widest font-mono"
        >
          luisalbertmschz@gmail.com
        </a>
        <div className="w-px h-28 bg-gradient-to-t from-primary/60 to-transparent"></div>
      </div>
    </>
  )
}
