const Experience = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "Svelte",
        "React",
        "Vue",
        "WordPress",
        "Astro",
        "TailwindCSS"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Python",
        "Typescript",
        "C#",
        "Kotlin",
        "PHP",
        "PostgreSQL",
        "MySQL",
        "MongoDB"
      ]
    },
    {
      title: "Data Science",
      skills: [
        "Python",
        "R",
        "OpenCV",
        "SAS",
        "MySQL",
        "Pandas",
        "Selenium",
        "BeautifulSoup4"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Skills</h2>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="border-t border-border pt-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-muted text-foreground rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
