import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const openMailClient = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'ghartibeeplap@gmail.com';
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink, '_blank');
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto cursor-default">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Beeplap Gharti Magar. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/beeplap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/beeplap-gharti-magar-5027592b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ghartibeeplap@gmail.com"
              onClick={openMailClient}
              className="relative group inline-flex items-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <span className="relative">
                <Mail className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6 group-hover:translate-y-[-1px]" />
                {/* subtle glow */}
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md bg-primary/20 transition-opacity duration-500" />
              </span>
              {/* animated underline */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-6 bg-primary/80 rounded-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
