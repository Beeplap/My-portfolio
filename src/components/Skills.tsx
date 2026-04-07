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
      skills: "Git,  Github, VIM",
    },
  ];

  return (
    <section id="skills" className="px-4 py-12 scroll-mt-28 md:py-14">
      <div className="mx-auto w-full max-w-[1008px]">
        <h2 className="mb-7 text-center text-4xl tracking-tight md:mb-8 md:text-5xl">
          Skills
        </h2>

        <div className="grid gap-7 md:grid-cols-[0.9fr_1.9fr] md:gap-8">
          <div className="relative rounded-[26px] border border-[hsl(172_100%_30%_/0.42)] bg-[hsl(220_14%_8%_/0.92)] p-6 shadow-[0_0_45px_hsl(172_100%_30%_/0.24)] md:p-8">
            <div className="space-y-4">
              {skillCategories.map((category) => (
                <div key={category.title} className="cursor-default">
                  <h3 className="text-xl font-bold leading-none">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-foreground/95">
                    {category.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[26px] border border-[hsl(172_100%_30%_/0.42)] bg-[hsl(220_14%_8%_/0.92)] p-6 shadow-[0_0_45px_hsl(172_100%_30%_/0.24)] md:p-8">
            <div className="max-w-4xl cursor-default space-y-4 text-sm leading-7 text-foreground/95 md:text-base">
              <p>
                I primarily work on websites on both the frontend and the
                backend.
              </p>
              <p>
                Other projects I work on include Python scripts, Supabase Auth,
                and n8n.
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
                className="inline-flex rounded-full bg-white px-7 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-white/95 md:text-base"
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
