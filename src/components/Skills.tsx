const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: "Typescript,  React,  TailwindCSS",
    },
    {
      title: "Backend",
      skills: "Node.js,  PHP,  Go,  Rust",
    },
    {
      title: "Tools",
      skills: "Git,  Github,  Codeberg,\nVisual Studio Code",
    },
  ];

  return (
    <section id="skills" className="px-4 py-12 scroll-mt-28 md:py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-5xl font-semibold tracking-tight md:mb-9 md:text-6xl">
          Skills
        </h2>

        <div className="grid gap-7 md:grid-cols-[0.9fr_1.9fr] md:gap-8">
          <div className="relative rounded-[26px] border border-[hsl(172_100%_30%_/0.42)] bg-[hsl(220_14%_8%_/0.92)] p-6 shadow-[0_0_45px_hsl(172_100%_30%_/0.24)] md:p-8">
            <div className="space-y-4">
              {skillCategories.map((category) => (
                <div key={category.title} className="cursor-default">
                  <h3 className="text-[clamp(1.8rem,1.7vw,2.05rem)] leading-none font-semibold">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 whitespace-pre-line text-[clamp(1.05rem,1.08vw,1.35rem)] leading-relaxed text-foreground/95">
                    {category.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[26px] border border-[hsl(172_100%_30%_/0.42)] bg-[hsl(220_14%_8%_/0.92)] p-6 shadow-[0_0_45px_hsl(172_100%_30%_/0.24)] md:p-8">
            <div className="max-w-4xl cursor-default space-y-4 text-[clamp(1.05rem,1.08vw,1.35rem)] leading-relaxed text-foreground/95">
              <p>
                I primarily work on websites on both the frontend and the
                backend.
              </p>
              <p>
                Other projects I work on include Python scripts, Discord bots,
                and Streamer.bot C# scripts.
              </p>
              <p>
                Full resume available upon requests via{" "}
                <a
                  href="mailto:ghartibeeplap@gmail.com?subject=Resume%20Request"
                  className="underline decoration-1 underline-offset-4 hover:text-white"
                >
                  Email
                </a>
                .
              </p>

              <a
                href="mailto:ghartibeeplap@gmail.com?subject=Resume%20Request"
                className="inline-flex rounded-full bg-white px-8 py-2.5 text-[clamp(1.1rem,1.05vw,1.3rem)] font-semibold text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-white/95"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
