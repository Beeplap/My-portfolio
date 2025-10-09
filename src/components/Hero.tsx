import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent animate-glow-pulse" />
      
      <div className="max-w-4xl mx-auto text-center z-10 space-y-8 animate-fade-in">
        {/* Profile Avatar */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-full blur-xl animate-glow-pulse" />
          <div className="relative w-full h-full bg-card rounded-full border-2 border-primary/30 flex items-center justify-center text-4xl font-bold text-primary">
            BG
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-primary">Beeplap</span> Gharti Magar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer | Creating clean, fast, and modern web experiences
          </p>
        </div>

        {/* Bio */}
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          I'm a passionate developer focused on building efficient web apps with clean UI and smooth UX. 
          I love working with React, Tailwind, and Supabase.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/Beeplap" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://www.linkedin.com/in/beeplap-gharti-magar-5027592b9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="mailto:ghartibeeplap@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 rounded-full"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 rounded-full px-8"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
