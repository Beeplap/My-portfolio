const Projects = () => {
  const projects = [
    {
      title: "Attendance Tracker",
      description: "A comprehensive attendance management system with real-time tracking, analytics dashboard, and automated reporting features.",
      tech: ["React", "Supabase", "Tailwind CSS"],
      link: "https://example.com",
      github: "https://github.com",
    },
    {
      title: "Upcoming Project",
      description: "An exciting new project currently in development. Stay tuned for updates on this innovative web application.",
      tech: ["Next.js", "Node.js", "Python"],
      link: "https://example.com",
      github: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Projects</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.title} className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Visit Site
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  View Repository
                </a>
              </div>
              
              <p className="text-foreground/70 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-muted text-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
