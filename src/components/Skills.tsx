const Skills = () => {
  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Supabase", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">Tools and technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-slide-up">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden bg-card hover:bg-card/80 border border-border hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.18)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <p className="text-xs text-primary mb-2 font-medium">{skill.category}</p>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              {/* Decorative gradient effect to mirror Projects hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
