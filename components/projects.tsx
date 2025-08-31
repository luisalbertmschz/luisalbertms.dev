import { Card } from "@/components/ui/card"
import { ExternalLink, Github, Folder, Zap, Users, TrendingUp, Cpu, Shield } from "lucide-react"

const techIcons: { [key: string]: string } = {
  React: "⚛️",
  TypeScript: "🔷",
  "Node.js": "🟢",
  PostgreSQL: "🐘",
  "Vue.js": "💚",
  Laravel: "🔴",
  Python: "🐍",
  Django: "🎯",
  Docker: "🐳",
  AWS: "☁️",
  MySQL: "🗄️",
  Redis: "🔴",
  "D3.js": "📊",
  PHP: "💜",
  JavaScript: "💛",
  HTML: "🧡",
  CSS: "💙",
  Bootstrap: "🟣",
  jQuery: "💙",
  Sass: "🌸",
  Linux: "🐧",
  Nginx: "🟢",
  "Next.js": "⚡",
  "Tailwind CSS": "🎨",
  GraphQL: "🔮",
  "Socket.io": "🔌",
}

const featuredProjects = [
  {
    title: "Energy Management Dashboard",
    description:
      "A comprehensive dashboard for monitoring and managing energy distribution across multiple regions. Features real-time analytics, predictive maintenance alerts, and automated reporting systems.",
    image: "/ai-content-generator-ui.png",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true,
    metrics: {
      performance: "60% faster load times",
      users: "10K+ daily users",
      uptime: "99.9%",
      scale: "Microservices architecture"
    }
  },
  {
    title: "Customer Portal Platform",
    description:
      "Self-service portal allowing customers to manage their accounts, view billing history, report issues, and track service requests. Serves over 500K active users with 99.9% uptime.",
    image: "/placeholder-x700o.png",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
    github: "#",
    demo: "#",
    featured: true,
    metrics: {
      performance: "75% faster processing",
      users: "500K+ active users",
      uptime: "99.9%",
      scale: "Load balanced clusters"
    }
  },
  {
    title: "Hosting Management System",
    description:
      "Complete hosting management platform with automated provisioning, monitoring, and billing integration. Reduced manual operations by 80% and improved customer satisfaction.",
    image: "/placeholder-lxpy4.png",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
    featured: true,
    metrics: {
      performance: "50% faster deployments",
      users: "5K+ hosting clients",
      uptime: "99.8%",
      scale: "Containerized architecture"
    }
  },
]

const otherProjects = [
  {
    title: "API Gateway Service",
    description: "Microservices API gateway with rate limiting, authentication, and monitoring capabilities.",
    technologies: ["Node.js", "Redis", "Docker"],
    github: "#",
    demo: "#",
    metrics: {
      performance: "40ms avg response",
      scale: "10K+ req/min"
    }
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat application with file sharing and message encryption.",
    technologies: ["React", "Node.js", "Socket.io"],
    github: "#",
    demo: "#",
    metrics: {
      performance: "Real-time messaging",
      scale: "1K+ concurrent users"
    }
  },
  {
    title: "E-commerce Analytics",
    description: "Advanced analytics dashboard for e-commerce platforms with predictive insights.",
    technologies: ["Python", "Django", "PostgreSQL"],
    github: "#",
    demo: "#",
    metrics: {
      performance: "2s data processing",
      scale: "1M+ data points"
    }
  },
  {
    title: "Mobile App Backend",
    description: "RESTful API backend for mobile applications with user management and data sync.",
    technologies: ["Laravel", "MySQL", "AWS"],
    github: "#",
    demo: "#",
    metrics: {
      performance: "200ms avg response",
      scale: "100K+ API calls/day"
    }
  },
  {
    title: "DevOps Automation",
    description: "CI/CD pipeline automation tools for streamlined deployment processes.",
    technologies: ["Docker", "Linux", "Nginx"],
    github: "#",
    demo: "#",
    metrics: {
      performance: "80% faster deployments",
      scale: "Multi-environment"
    }
  },
  {
    title: "Data Visualization Tool",
    description: "Interactive data visualization platform for business intelligence and reporting.",
    technologies: ["D3.js", "React", "TypeScript"],
    github: "#",
    demo: "#",
    metrics: {
      performance: "Smooth 60fps",
      scale: "Real-time updates"
    }
  },
]

export function Projects() {
  return (
    <section id="projects" className="section-spacing px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header - Simplified */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 mb-8">
            <Folder className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Projects</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            Some Things I've Built
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of my recent work showcasing system architecture, performance optimization, and user experience design.
          </p>
        </div>

        {/* Featured Projects - Enhanced with Metrics */}
        <div className="space-y-16 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "lg:text-right" : ""}`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>
                <div className="relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} space-y-4`}>
                <p className="text-primary font-mono text-sm">Featured Project</p>
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>

                <div className="bg-card/50 p-4 rounded-lg border border-border/50">
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">{project.description}</p>
                  
                  {/* Project Metrics */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Zap className="h-3 w-3 text-primary" />
                      <span>{project.metrics.performance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-3 w-3 text-primary" />
                      <span>{project.metrics.users}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="h-3 w-3 text-primary" />
                      <span>{project.metrics.uptime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span>{project.metrics.scale}</span>
                    </div>
                  </div>
                </div>

                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-muted-foreground font-mono text-xs flex items-center gap-1">
                      <span>{techIcons[tech] || "🔧"}</span>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-3 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects - Enhanced with Metrics */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold mb-2">Other Noteworthy Projects</h3>
          <p className="text-primary font-mono text-sm">view the archive</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card/50 border-border/50"
            >
              <div className="flex justify-between items-start mb-3">
                <Folder className="h-8 w-8 text-primary" />
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h4 className="text-base font-bold text-foreground mb-2">{project.title}</h4>
              <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{project.description}</p>

              {/* Project Metrics */}
              <div className="mb-3 p-2 bg-muted/20 rounded text-xs">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Cpu className="h-3 w-3 text-primary" />
                  <span className="font-medium">Performance</span>
                </div>
                <div className="text-xs text-muted-foreground">{project.metrics.performance}</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-muted-foreground font-mono text-xs flex items-center gap-1">
                    <span>{techIcons[tech] || "🔧"}</span>
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
