"use client"

dimport { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building2, Briefcase, Clock, TrendingUp, Users, Zap, Code, Palette, Database, Server, Cpu, Layers, Github, ExternalLink, Download } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants for scroll reveal effects
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

interface Position {
  title: string
  duration: string
  description: string
  technologies: string[]
  achievements?: string[]
}

interface Experience {
  company: string
  logo: string
  location: string
  totalDuration: string
  positions: Position[]
  industry?: string
}

const experiences: Experience[] = [
  {
    company: "Edesur Dominicana SA",
    logo: "/edesur-dominicana-sa-logo-gray.png",
    location: "Santo Domingo, DR",
    totalDuration: "2021 - Present",
    industry: "Energy Distribution",
    positions: [
      {
        title: "Analista de Sistemas",
        duration: "Jan 2023 - Present",
        description:
          "Analizo y desarrollo sistemas empresariales para la gestión de distribución de energía. Arquitecto infraestructura de microservicios que mejoró la confiabilidad del sistema en 40% y redujo los tiempos de respuesta en 60%.",
        technologies: ["React", "TypeScript", "PostgreSQL", "Docker", "AWS"],
        achievements: [
          "Improved system reliability by 40%",
          "Reduced response times by 60%",
          "Led team of 8 developers"
        ]
      },
      {
        title: "Software Engineer",
        duration: "Mar 2021 - Dec 2022",
        description:
          "Desarrollé y mantuve aplicaciones de portal de clientes que sirven a más de 500K usuarios. Implementé sistemas de facturación en tiempo real y herramientas de reportes automatizados que redujeron el tiempo de procesamiento manual en 75%.",
        technologies: ["JavaScript", "Vue.js", "MySQL", "PHP", "Laravel", "Redis"],
        achievements: [
          "Served 500K+ users",
          "Reduced processing time by 75%",
          "Implemented real-time systems"
        ]
      },
    ],
  },
  {
    company: "HostSeven SRL",
    logo: "/placeholder-ul0ji.png",
    location: "Santiago, DR",
    totalDuration: "2019 - 2021",
    industry: "Web Hosting",
    positions: [
      {
        title: "System Technical Support",
        duration: "Jun 2020 - Feb 2021",
        description:
          "Brindé soporte técnico avanzado para sistemas de hosting web. Resolví problemas complejos de infraestructura y optimicé la configuración de servidores para mejorar el rendimiento y la estabilidad.",
        technologies: ["Linux", "Nginx", "Apache", "MySQL", "cPanel", "WHM"],
        achievements: [
          "Improved server performance by 30%",
          "Reduced support tickets by 50%",
          "Enhanced system stability"
        ]
      },
      {
        title: "Technical Support",
        duration: "Jan 2020 - May 2020",
        description:
          "Proporcioné soporte técnico de primer nivel para clientes de hosting web. Asistí en la configuración de dominios, correos electrónicos y bases de datos, resolviendo consultas técnicas de manera eficiente.",
        technologies: ["cPanel", "WHM", "DNS", "Email", "FTP", "SSL"],
        achievements: [
          "High customer satisfaction scores",
          "Fast ticket resolution times",
          "Improved client onboarding"
        ]
      },
      {
        title: "Programmer Analyst",
        duration: "Aug 2019 - Dec 2019",
        description:
          "Desarrollé aplicaciones web responsivas y páginas de aterrizaje para servicios de hosting. Colaboré con el equipo de diseño para implementar componentes UI pixel-perfect y mejoré las métricas de experiencia de usuario en 25%.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Sass"],
        achievements: [
          "Improved UX metrics by 25%",
          "Pixel-perfect UI implementation",
          "Responsive design expertise"
        ]
      },
    ],
  },
]

// Technical Skills organized by category
const technicalSkills = {
  "Frontend Development": {
    icon: Code,
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Sass", "Responsive Design"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  "Design & UX": {
    icon: Palette,
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Design Systems", "Component Libraries", "Accessibility", "User Research"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  },
  "Systems & Architecture": {
    icon: Server,
    skills: ["Microservices", "REST APIs", "GraphQL", "System Design", "Performance Optimization", "Scalability", "Security"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  "DevOps & Tools": {
    icon: Database,
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx", "Monitoring", "Testing"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30"
  }
}

// Tools I use for work - Flux Academy inspired
const workTools = [
  {
    name: "VS Code",
    icon: Code,
    description: "My primary code editor with custom extensions for React, TypeScript, and web development.",
    download: "https://code.visualstudio.com/"
  },
  {
    name: "GitHub",
    icon: Github,
    description: "Version control and collaboration platform for all my projects and open source contributions.",
    download: "https://github.com/"
  },
  {
    name: "Figma",
    icon: Palette,
    description: "Design and prototyping tool for creating UI/UX designs and component libraries.",
    download: "https://figma.com/"
  },
  {
    name: "Docker",
    icon: Database,
    description: "Containerization platform for consistent development and deployment environments.",
    download: "https://docker.com/"
  },
  {
    name: "PostgreSQL",
    icon: Server,
    description: "Advanced open source database for scalable applications and data management.",
    download: "https://postgresql.org/"
  },
  {
    name: "AWS",
    icon: Cpu,
    description: "Cloud computing platform for hosting, storage, and scalable infrastructure.",
    download: "https://aws.amazon.com/"
  }
]

export function WorkExperience() {
  return (
    <section
      id="experience"
      className="section-spacing px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Background Animation Elements - Flux Academy Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section - Developer X Style */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Experience</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            My Experience
          </motion.h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Over 4+ years of experience building scalable applications and leading development teams.
          </motion.p>
        </motion.div>

        {/* Technical Skills Section - Developer X Style */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-16 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skill Set
          </motion.h3>
          
          {/* Skills Grid - Modern & Clean */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {Object.entries(technicalSkills).map(([category, { icon: Icon, skills }], index) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="group bg-card/50 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground">{category}</h4>
                    </div>
                    
                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-3 py-1.5 text-xs bg-background/80 border border-border/40 text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tools I Use Section - Flux Academy Inspired */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-16 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover what tools I use for work
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {workTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="group bg-card/50 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Tool Icon */}
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <tool.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    {/* Tool Name */}
                    <h4 className="text-lg font-semibold text-foreground mb-3">{tool.name}</h4>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    {/* Download Button */}
                    <a 
                      href={tool.download} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Learn more
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Timeline - LinkedIn Style with Real Logos */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header Section - Exact UI from Image */}
          <motion.div 
            className="flex items-start justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Left: Section Label */}
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono">/</span>
              <span className="text-sm font-medium text-foreground uppercase tracking-wider">My Experience</span>
            </div>
            
            {/* Right: Get in touch button */}
            <div className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
              <span className="text-sm font-medium">Get in touch</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-foreground mb-12 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I've worked with some amazing companies
          </motion.h3>

          {/* Top Divider */}
          <motion.div 
            className="w-full h-px bg-border/30 mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>

          {/* LinkedIn Style Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
            
            <motion.div 
              className="space-y-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {experiences.map((experience, companyIndex) => (
                <motion.div
                  key={companyIndex}
                  className="relative group"
                  variants={fadeInUp}
                  transition={{ delay: companyIndex * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Company Card */}
                  <div className="ml-16">
                    {/* Company Header */}
                    <div className="flex items-start gap-6 mb-6">
                      {/* Company Logo */}
                      <div className="w-20 h-20 rounded-2xl bg-white p-4 flex items-center justify-center shadow-lg border border-border/20 group-hover:shadow-xl transition-all duration-300">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain max-w-full max-h-full"
                        />
                      </div>
                      
                      {/* Company Info */}
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {experience.company}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {experience.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {experience.totalDuration}
                          </div>
                          {experience.industry && (
                            <Badge variant="secondary" className="px-3 py-1 bg-primary/10 text-primary border-primary/20">
                              {experience.industry}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Positions Timeline */}
                    <motion.div 
                      className="space-y-8"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {experience.positions.map((position, positionIndex) => (
                        <motion.div
                          key={positionIndex}
                          className="relative"
                          variants={slideInRight}
                          transition={{ delay: positionIndex * 0.1 }}
                        >
                          {/* Position Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h5 className="text-xl font-semibold text-foreground mb-2">
                                {position.title}
                              </h5>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                <Clock className="h-4 w-4" />
                                <span className="font-medium">{position.duration}</span>
                              </div>
                            </div>
                            
                            {/* Position Duration Badge */}
                            <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                              <span className="text-sm font-medium text-primary">
                                {position.duration.replace(' - ', ' / ')}
                              </span>
                            </div>
                          </div>

                          {/* Position Description */}
                          <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
                            {position.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {position.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="px-3 py-1.5 text-xs bg-background/80 border border-border/40 text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          {position.achievements && position.achievements.length > 0 && (
                            <div className="pt-4 border-t border-border/30">
                              <div className="grid gap-2">
                                {position.achievements.map((achievement, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                                    <span>{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action - Developer X Style */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors duration-300 cursor-pointer">
            <Briefcase className="h-5 w-5" />
            <span className="font-medium">Get in touch</span>
          </div>
        </div>
      </div>
    </section>
  )
}
