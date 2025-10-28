"use client"
import { Globe, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Attendance Tracker",
      description:
        "A comprehensive attendance management system with real-time tracking, analytics dashboard, and automated reporting features.",
      tech: ["React", "Supabase", "Tailwind CSS"],
      link: "https://example.com",
      github: "https://github.com/Beeplap/Attendance-tracker",
    },
    {
      title: "Upcoming Project",
      description:
        "An exciting new project currently in development. Stay tuned for updates on this innovative web application.",
      tech: ["Next.js", "Node.js", "Python"],
      link: "https://example.com",
      github: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl cursor-default font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
  key={project.title}
  className="group cursor-default relative overflow-hidden bg-muted/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
>
  <div className="relative z-10">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <div className="flex gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          title="Visit Site"
        >
          <Globe className="w-5 h-5 text-primary" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          title="View Repository"
        >
          <Github className="w-5 h-5 text-primary" />
        </a>
      </div>
    </div>

    <p className="text-foreground/70 leading-relaxed mb-6">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-sm bg-primary/10 text-primary font-medium rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Decorative gradient effect */}
  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 transition-opacity duration-500 pointer-events-none" />
</div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
