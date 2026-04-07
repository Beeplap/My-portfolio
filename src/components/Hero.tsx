import { Github, Linkedin, Mail, Facebook } from "lucide-react";


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
    <section id="home" className="px-4 pb-0 pt-6 md:pt-6 scroll-mt-36">
      <div className="mx-auto w-full max-w-[1008px]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[hsl(172_100%_30%_/0.2)] bg-card/60 backdrop-blur-sm shadow-[0_0_0_1px_hsl(172_100%_30%_/0.05),0_0_60px_hsl(172_100%_30%_/0.12),0_0_120px_hsl(172_100%_30%_/0.08)] p-5 md:p-7">
            <div className="flex flex-col cursor-default gap-4">
              <div className="flex items-center gap-4 md:gap-5">
                <img
                  src="/assets/beeo.jpg"
                  alt="Beeplap Gharti Magar - Full Stack Developer"
                  className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div>
                  <p className="text-xl md:text-2xl font-semibold text-[hsl(var(--primary))]">Beeplap Gharti Magar</p>
                  <p className="text-sm md:text-base text-foreground/80">Full Stack Developer</p>
                </div>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                {getGreeting()}!
              </h1>

              <p className="text-sm md:text-base text-foreground/90 leading-relaxed max-w-3xl">
                I'm a Nepali software developer studying BCA, fluent in English, Nepali and Hindi. I'm a full stack developer with a love for building innovative web applications and mobile apps that make a difference.
              </p>

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
                  href="www.linkedin.com/in/beeplap"
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
                <a
                  href="https://www.facebook.com/beeplap.g.magar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-9 w-9 rounded-full border border-border/70 bg-background/60 flex items-center justify-center hover:shadow-[0_0_18px_hsl(var(--primary)/0.22)] transition-shadow"
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-20 md:h-28">
          <div className="absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-cyan-100/25 md:h-20" />
          <div className="absolute left-1/2 top-14 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent md:top-20 md:w-[74%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
