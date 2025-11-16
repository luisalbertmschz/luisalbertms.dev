"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { CVViewerButton } from "@/components/cv-viewer"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Height of the header
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/20" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-sans font-bold text-2xl text-primary hover:text-primary/80 transition-colors cursor-pointer">
            &lt;/&gt;
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm group"
            >
              <span className="text-primary mr-2">01.</span>
              <span className="group-hover:text-primary">About</span>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm group"
            >
              <span className="text-primary mr-2">02.</span>
              <span className="group-hover:text-primary">Experience</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm group"
            >
              <span className="text-primary mr-2">03.</span>
              <span className="group-hover:text-primary">Work</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm group"
            >
              <span className="text-primary mr-2">04.</span>
              <span className="group-hover:text-primary">Contact</span>
            </button>
            <CVViewerButton
              variant="outline"
              className="ml-4 border-primary text-primary hover:bg-primary/10 font-mono text-sm bg-transparent"
            />
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-6 text-center">
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary mr-2">01.</span> About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary mr-2">02.</span> Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary mr-2">03.</span> Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary mr-2">04.</span> Contact
              </button>
              <CVViewerButton
                variant="outline"
                className="mx-auto border-primary text-primary hover:bg-primary/10 font-mono bg-transparent"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
