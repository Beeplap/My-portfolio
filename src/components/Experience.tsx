const Experience = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-12">
          {/* Card 1 */}
          <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--primary)/0.08)] p-6 md:p-8">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold">Full Stack Developer </h3>
              <p className="text-sm text-muted-foreground">@ Beeplap Dev</p>
              <p className="text-sm text-muted-foreground">Dec 2024 - Present</p>
            </div>
            <div className="h-px w-full bg-border/80 my-4" />
            <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">
              Led implementation of frontend development of websites. Efficiently translated designs into code, while
              ensuring maintainability, accessibility and performance. Actively researching and developing for LLM
              integration into product.
            </p>
            <div className="mt-6">
              <p className="font-semibold mb-2 text-sm md:text-base">Relevant skills:</p>
              <div className="grid grid-cols-2 gap-x-6 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>NextJS</li>
                  <li>React</li>
                  <li>MongoDB</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Typescript</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--primary)/0.08)] p-6 md:p-8">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold">Bachelor in Computer Application (BCA) Student</h3>
              <p className="text-sm text-muted-foreground">July 2023 - Present</p>
            </div>
            <div className="h-px w-full bg-border/80 my-4" />
            <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">
              Currently on fourth Semester of BCA studying at Butwal Kalika Campus
            </p>
            <div className="mt-6">
              <p className="font-semibold mb-2 text-sm md:text-base">Relevant skills:</p>
              <div className="grid grid-cols-2 gap-x-6 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Java</li>
                  <li>C</li>
                  <li>DSA</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ReactJS</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--primary)/0.08)] p-6 md:p-8">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold">Frontend Web Developer Intern</h3>
              <p className="text-sm text-muted-foreground">Jan 2024 - April 2024</p>
            </div>
            <div className="h-px w-full bg-border/80 my-4" />
            <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">
              Learnt how to build WordPress sites and further enhance my skills in PHP. I also learnt how to closely
              work with UI/UX designers and pay close attention to details with the designs I am given.
            </p>
            <div className="mt-6">
              <p className="font-semibold mb-2 text-sm md:text-base">Relevant skills:</p>
              <div className="grid grid-cols-2 gap-x-6 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>WordPress & PHP</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Adobe XD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
