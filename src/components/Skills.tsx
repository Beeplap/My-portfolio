const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      exp: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "React",
        "Vue",
        "WordPress",
        "TailwindCSS",
      ],
    },
    {
      title: "Backend Development",
      exp: [
        "Python",
        "Typescript",
        "C#",
        "Kotlin",
        "PHP",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Data Science",
      exp: [
        "Python",
        "R",
        "OpenCV",
        "SAS",
        "MySQL",
        "Pandas",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--primary)/0.08)] p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
                {category.title}
              </h3>
              <div className="h-px w-full bg-border/80 mb-6" />
              <div className="flex flex-wrap gap-3 md:gap-4">
                {category.exp.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full px-3 md:px-4 py-1.5 text-sm md:text-base font-medium text-foreground/90 bg-[hsl(220_27%_12%_/0.6)] border border-border/60 shadow-[0_2px_0_hsl(0_0%_0%_/0.15)_inset,0_0_20px_hsl(var(--primary)/0.10)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] transition-shadow"
                    style={{
                      background:
                        "linear-gradient(180deg, hsl(220 27% 12% / 0.85), hsl(220 27% 10% / 0.85))",
                    }}
                  >
                    {skill}
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

export default Skills;
