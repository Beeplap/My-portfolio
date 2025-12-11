"use client";

import { Github, Globe } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "ScholarSync",
    description:
      "A comprehensive Student management system with real-time tracking, analytics dashboard, and automated reporting for teams.",
    tech: ["React", "Supabase", "Tailwind CSS"],
    link: "https://student-management-bzx9.vercel.app/login",
    github: "https://github.com/beeplap/studentManagement",
    image: "/assets/scholar.png",
  },
  {
    title: "Client Portfolio Site",
    description:
      "A custom portfolio website built with Next.js, optimized for SEO and performance, showcasing the client's work with a CMS-driven content flow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.arvindpandey.com.np",
    github: "https://github.com/beeplap/client_site",
    image: "/assets/arvind.png", 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl cursor-default font-bold mb-14 text-center">Projects</h2>

        <div className="space-y-16">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={project.title}
                className={`flex flex-col gap-10 items-center lg:items-stretch ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                {/* Image card */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative group">
                    <div
                      className={`overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.24)] transition-transform duration-700 transform ${
                        isReversed
                          ? "[transform:perspective(1200px)_rotateY(-17deg)_translateY(0)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_translateY(-10px)] group-active:[transform:perspective(1200px)_rotateY(0deg)_translateY(-6px)]"
                          : "[transform:perspective(1200px)_rotateY(17deg)_translateY(0)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_translateY(-10px)] group-active:[transform:perspective(1200px)_rotateY(0deg)_translateY(-6px)]"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="block w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-primary text-background text-sm font-semibold shadow-lg hover:scale-[1.03] transition-transform"
                        >
                          Visit site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="w-full lg:w-1/2 cursor-default flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-6 text-lg md:text-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm md:text-base bg-primary/20 text-foreground font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm md:text-base"
                    >
                      <Globe className="h-4 w-4" />
                      Visit site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm md:text-base"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
