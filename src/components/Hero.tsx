import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Beeplap
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Full Stack Developer
          </p>
        </div>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          {getGreeting()}, I'm Beeplap!
        </p>

        {/* Social Links */}
         <div className="flex items-center gap-9">
            <a
              href="https://github.com/beeplap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/beeplap-gharti-magar-5027592b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ghartibeeplap@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;
