import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

interface IndexProps {
  section?: "home" | "experience" | "projects" | "skills" | "contact";
}

const SECTION_META: Record<string, { title: string; description: string; canonical: string }> = {
  home: {
    title: "Beeplap Gharti Magar | Full-Stack Developer",
    description:
      "Beeplap Gharti Magar is a Full-Stack Developer from Nepal, currently pursuing a BCA at Butwal Kalika Campus. He builds modern web applications using React, Next.js, TypeScript, Node.js, Supabase, and Tailwind CSS.",
    canonical: "https://beeplap.com.np/",
  },
  projects: {
    title: "Projects | Beeplap Gharti Magar — Full-Stack Developer",
    description:
      "Explore portfolio projects built by Beeplap Gharti Magar: Avenue Butwal, Yarsha Byte, OpenDocs, ScholarSync, Greenstar Suppliers, and more.",
    canonical: "https://beeplap.com.np/projects",
  },
  experience: {
    title: "Experience & Education | Beeplap Gharti Magar",
    description:
      "Professional software development experience, education at Butwal Kalika Campus, and technical achievements of Beeplap Gharti Magar.",
    canonical: "https://beeplap.com.np/experience",
  },
  skills: {
    title: "Technical Skills | Beeplap Gharti Magar",
    description:
      "Technical skills and technologies used by Beeplap Gharti Magar: React, Next.js, TypeScript, Node.js, Go, Rust, PHP, Supabase, Tailwind CSS, and Git.",
    canonical: "https://beeplap.com.np/skills",
  },
  contact: {
    title: "Contact | Beeplap Gharti Magar — Full-Stack Developer",
    description:
      "Get in touch with Beeplap Gharti Magar for full-stack web development projects, freelance opportunities, or collaboration. Email: ghartibeeplap@gmail.com.",
    canonical: "https://beeplap.com.np/contact",
  },
};

const Index = ({ section }: IndexProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const key = section || "home";
    const meta = SECTION_META[key] || SECTION_META.home;
    document.title = meta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", meta.canonical);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute("href", meta.canonical);

    if (section && section !== "home") {
      const timer = setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (!section && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [section]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState({}, "", "/");
  };

  return (
    <div className="min-h-screen bg-background bg-dots scroll-smooth">
      <Navigation />
      <main className="pt-28 md:pt-36">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-500 hover:bg-gray-600"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
