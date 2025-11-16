"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { ObfuscatedEmail, ObfuscatedEmailButton } from "@/components/obfuscated-email"

// Obfuscated email parts (encoded to prevent bot scraping)
const ENCODED_EMAIL_LOCAL = "6VGaj5WYz1GdyVmYsF2cpVHb"
const ENCODED_EMAIL_DOMAIN = "t92YuwWah12Z"

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
            href="https://www.linkedin.com/in/luisalbertmorlas"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <ObfuscatedEmail
            encodedLocal={ENCODED_EMAIL_LOCAL}
            encodedDomain={ENCODED_EMAIL_DOMAIN}
            className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </ObfuscatedEmail>
        </div>
        <div className="w-px h-28 bg-gradient-to-t from-primary/60 to-transparent"></div>
      </div>

      <div className="fixed right-6 bottom-0 hidden xl:flex flex-col items-center space-y-6 z-30">
        <ObfuscatedEmail
          encodedLocal={ENCODED_EMAIL_LOCAL}
          encodedDomain={ENCODED_EMAIL_DOMAIN}
          className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform writing-mode-vertical text-sm tracking-widest font-mono"
          showEmail={true}
        />
        <div className="w-px h-28 bg-gradient-to-t from-primary/60 to-transparent"></div>
      </div>
    </>
  )
}
