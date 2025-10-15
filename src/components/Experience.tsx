import {
  Code2,
  Database,
  BarChart3,
  FlaskConical,
  Boxes,
  HelpCircle,
} from "lucide-react";

const Experience = () => {
  // Custom recognizable brand icons
  const iconMap: Record<string, JSX.Element> = {
    HTML: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML"
        className="w-6 h-6"
      />
    ),
    CSS: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS"
        className="w-6 h-6"
      />
    ),
    Javascript: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="w-6 h-6"
      />
    ),
    Typescript: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className="w-6 h-6"
      />
    ),
    React: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="w-6 h-6"
      />
    ),
    Vue: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        alt="Vue"
        className="w-6 h-6"
      />
    ),
    Svelte: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
        alt="Svelte"
        className="w-6 h-6"
      />
    ),
    WordPress: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
        alt="WordPress"
        className="w-6 h-6"
      />
    ),
    Astro: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg"
        alt="Astro"
        className="w-6 h-6"
      />
    ),
    TailwindCSS: (
      <img
        src="src/assets/tailwindcss-original-1.svg"
        alt="TailwindCSS"
        className="w-6 h-6"
      />
    ),
    Python: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-6 h-6"
      />
    ),
    "C#": (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        alt="C#"
        className="w-6 h-6"
      />
    ),
    Kotlin: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
        alt="Kotlin"
        className="w-6 h-6"
      />
    ),
    PHP: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        alt="PHP"
        className="w-6 h-6"
      />
    ),
    PostgreSQL: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        alt="PostgreSQL"
        className="w-6 h-6"
      />
    ),
    MySQL: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        alt="MySQL"
        className="w-6 h-6"
      />
    ),
    MongoDB: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
        className="w-6 h-6"
      />
    ),
    R: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
        alt="R"
        className="w-6 h-6"
      />
    ),
    OpenCV: <Code2 className="w-6 h-6" />, // custom placeholder
    SAS: <BarChart3 className="w-6 h-6" />,
    Pandas: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
        alt="Pandas"
        className="w-6 h-6"
      />
    ),
    Selenium: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
        alt="Selenium"
        className="w-6 h-6"
      />
    ),
    BeautifulSoup4: <Boxes className="w-6 h-6" />,
  };

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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="border-t border-border pt-6">
                <div className="flex flex-wrap gap-4">
                  {category.exp.map((skill) => {
                    const Icon =
                      iconMap[skill] ?? (
                        <HelpCircle className="w-6 h-6 text-muted-foreground" />
                      );
                    return (
                      <div
                        key={skill}
                        className="group relative p-4 rounded-xl border border-border bg-muted/30 text-foreground transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.15)]"
                        title={skill}
                        aria-label={skill}
                      >
                        <span className="block group-hover:scale-110 transition-transform">
                          {Icon}
                        </span>
                      </div>
                    );
                  })}
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
