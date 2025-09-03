import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WorkExperience } from "@/components/work-experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />

      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.6) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Header />

      <div className="fixed left-6 bottom-0 hidden xl:flex flex-col items-center space-y-6 z-30">
        <div className="flex flex-col space-y-6">
          <a
            href="https://github.com"
            className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:john.doe@example.com"
            className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <div className="w-px h-28 bg-gradient-to-t from-primary/60 to-transparent"></div>
      </div>

      <div className="fixed right-6 bottom-0 hidden xl:flex flex-col items-center space-y-6 z-30">
        <a
          href="mailto:john.doe@example.com"
          className="group text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-2 transform writing-mode-vertical text-sm tracking-widest font-mono"
        >
          john.doe@example.com
        </a>
        <div className="w-px h-28 bg-gradient-to-t from-primary/60 to-transparent"></div>
      </div>

      <main className="relative z-10">
        <div id="about">
          <Hero />
        </div>

        <div className="flex justify-center py-12">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/60 to-primary/60"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary/60 to-primary/60"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="experience" className="pt-20">
            <WorkExperience />
          </div>

          <div className="flex justify-center py-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/60 to-primary/60"></div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary/60 to-primary/60"></div>
            </div>
          </div>

          <div id="projects" className="pt-20">
            <Projects />
          </div>

          <div className="flex justify-center py-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/60 to-primary/60"></div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary/60 to-primary/60"></div>
            </div>
          </div>

          <div id="contact" className="pt-20">
            <Contact />
          </div>
        </div>
      </main>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-30">
        <div className="flex flex-col space-y-6">
          <div className="group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse group-hover:scale-125 transition-transform"></div>
            <div className="w-px h-20 bg-gradient-to-b from-primary/60 to-primary/30 ml-1.5"></div>
          </div>
          <div className="group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/40 group-hover:bg-primary/60 group-hover:scale-125 transition-all"></div>
            <div className="w-px h-20 bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/10 ml-1.5"></div>
          </div>
          <div className="group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/40 group-hover:bg-primary/60 group-hover:scale-125 transition-all"></div>
            <div className="w-px h-20 bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/10 ml-1.5"></div>
          </div>
          <div className="group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/40 group-hover:bg-primary/60 group-hover:scale-125 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
