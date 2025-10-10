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
      <div className="max-w-4xl mx-auto text-center space-y-8">
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
        <div className="flex items-center justify-center gap-4 pt-4">
          <a 
            href="https://github.com/Beeplap" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/beeplap-gharti-magar-5027592b9/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a 
            target="_blank" 
            href="mailto:ghartibeeplap@gmail.com" 
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
