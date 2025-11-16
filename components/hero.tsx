"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Palette, Zap, Database, Server } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { CVViewerButton } from "@/components/cv-viewer"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-primary"></div>
                <p className="text-primary font-mono text-sm tracking-wider">01. INTRODUCTION</p>
              </div>

              <div className="space-y-4">
                <p className="text-primary font-mono text-sm">Hi, my name is</p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-none">
                  <span className="text-foreground block">Luis Albert</span>
                  <span className="text-muted-foreground/60 block text-3xl sm:text-5xl lg:text-6xl mt-2">
                    Systems Engineer
                  </span>
                  <span className="text-primary block text-2xl sm:text-3xl lg:text-4xl mt-3 font-medium">
                    Frontend Design & Development
                  </span>
                </h1>
              </div>
            </div>

            <div className="max-w-2xl space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a Systems Engineer specializing in building exceptional digital experiences through modern frontend technologies. 
                I bridge the gap between system architecture and user experience, creating scalable, performant, and beautiful applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-mono px-6 py-3 bg-transparent group"
                  asChild
                >
                  <Link href="/portfolio">
                    View My Work
                    <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </Link>
                </Button>
                <CVViewerButton
                  size="lg"
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary font-mono px-6 py-3"
                >
                  Download Resume
                </CVViewerButton>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                <Code className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Frontend</div>
              </div>
              <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                <Palette className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Design</div>
              </div>
              <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Performance</div>
              </div>
              <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                <Database className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Systems</div>
              </div>
            </div>
          </div>

          {/* Right side - Technical showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background glow */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 blur-3xl absolute -inset-4"></div>
              
              {/* Main card */}
              <div className="relative w-72 h-72 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-xl p-6 flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* Tech stack visualization */}
                  <div className="space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center shadow-lg">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-mono text-muted-foreground">Tech Stack</div>
                      <div className="text-lg font-semibold text-foreground">Modern Frontend</div>
                      
                      {/* Technology badges */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          React
                        </span>
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                          TypeScript
                        </span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          Next.js
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                          Tailwind
                        </span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          Node.js
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-xl border border-accent/30 flex items-center justify-center">
                <Server className="w-6 h-6 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-lg border border-primary/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
