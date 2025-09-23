import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Calendar, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="section-spacing px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header - Enhanced */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 mb-8">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Contact</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Let's Build Something Great</h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities, interesting projects, or just connecting with fellow developers and designers. 
            Whether you have a question about system architecture, want to discuss frontend technologies, or just want to say hi, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-card/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">Perfect for detailed discussions and project proposals</p>
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono"
              asChild
            >
              <a href="mailto:john.doe@example.com">Send Email</a>
            </Button>
          </div>

          <div className="p-6 bg-card/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
            <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground mb-4">Great for professional networking and collaboration</p>
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono"
              asChild
            >
              <a href="https://linkedin.com/in/luisalbertmschz" target="_blank" rel="noopener noreferrer">Connect</a>
            </Button>
          </div>

          <div className="p-6 bg-card/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Schedule Call</h3>
            <p className="text-sm text-muted-foreground mb-4">Let's discuss your project in detail</p>
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono"
              asChild
            >
              <a href="https://linkedin.com/in/luisalbertmschz" target="_blank" rel="noopener noreferrer">Book Time</a>
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="mb-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-mono px-8 py-4 bg-transparent"
            asChild
          >
            <a href="mailto:john.doe@example.com">Start a Conversation</a>
          </Button>
        </div>

        {/* Location & Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm">Santo Domingo, Dominican Republic</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm">Available for new opportunities</span>
          </div>
        </div>

        {/* Footer - Enhanced */}
        <footer className="mt-20 pt-6 border-t border-border/50">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6 md:hidden">
              <a href="https://github.com/luisalbertmschz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/luisalbertmschz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:john.doe@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>

            <p className="text-muted-foreground font-mono text-xs">Built with Next.js, TypeScript & Tailwind CSS</p>
            <p className="text-muted-foreground font-mono text-xs">© 2024 Luis Albert. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
