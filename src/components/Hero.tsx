import { Github, Linkedin, Mail } from "lucide-react";


const Hero = () => {
  const openMailClient = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'ghartibeeplap@gmail.com';
    const subject = 'Hello from your portfolio!';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_blank');
  };
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <section id="home" className="px-4 py-10 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-[0_0_30px_hsl(var(--primary)/0.06)] p-5 md:p-7">
          <div className="flex flex-col cursor-default gap-4">
            {/* Top row: avatar, name, role */}
            <div className="flex items-center gap-4 md:gap-5">
              <img
                src="/assets/beeo.jpg"
                alt="Beeplap Gharti Magar - Full Stack Developer"
                className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div>
                <p className="text-xl md:text-2xl font-semibold text-[hsl(var(--primary))]">Beeplap</p>
                <p className="text-sm md:text-base text-foreground/80">Full Stack Developer</p>
              </div>
            </div>

            {/* Greeting headline */}
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              {getGreeting()}, I'm Beeplap!
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed max-w-3xl">
              A passionate Nepali software developer studying BCA, fluent in English and Nepali. I'm a full stack developer with a love for building innovative web applications and mobile apps that make a difference.
            </p>

            {/* Social icons row */}
            <div className="flex items-center justify-center gap-2 md:gap-3 pt-1">
              <a
                href="https://github.com/beeplap"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 rounded-full border border-border/70 bg-background/60 flex items-center justify-center hover:shadow-[0_0_18px_hsl(var(--primary)/0.22)] transition-shadow"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/beeplap-gharti-magar-5027592b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full border border-border/70 bg-background/60 flex items-center justify-center hover:shadow-[0_0_18px_hsl(var(--primary)/0.22)] transition-shadow"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href="mailto:ghartibeeplap@gmail.com"
                onClick={openMailClient}
                aria-label="Email"
                className="h-9 w-9 rounded-full border border-border/70 bg-background/60 flex items-center justify-center hover:shadow-[0_0_18px_hsl(var(--primary)/0.22)] transition-shadow"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
