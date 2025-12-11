import { useState } from "react";
import { Calendar, MapPin, Building2 } from "lucide-react";

type TabKey = "experience" | "education" | "extracurricular";

type Entry = {
  title: string;
  period: string;
  org?: string;
  location?: string;
  description: string;
};

const tabs: { id: TabKey; label: string }[] = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "extracurricular", label: "Extracurricular" },
];

const experienceEntries: Entry[] = [
  {
    title: "Full Stack Developer",
    period: "Dec 2024 - Now",
    org: "",
    location: "Nepal",
    description:
      "Led development of clients'Dynamic websites with SEO optimization, managed GitHub Actions CI/CD and deployments.",
  },
  {
    title: "Frontend Web Developer Intern",
    period: "Jan 2024 - Apr 2024",
    org: "",
    location: "Nepal",
    description:
      "Developed WordPress sites and NextJS apps using lazy-loading to optimise page speed. Ensured CMS allowed easy yet flexible customisations for clients.",
  },
];

const educationEntries: Entry[] = [
  {
    title: "Bachelor in Computer Application (BCA) Student",
    period: "July 2023 - Present",
    org: "Butwal Kalika Campus",
    location: "Butwal",
    description: "Currently pursuing BCA with focus on software engineering (4th semester).",
  },
];

const extracurricularEntries: Entry[] = [
  {
    title: "24-hour Hackathon Organizer",
    period: "College Event",
    org: "Butwal Kalika Campus",
    description: "Organised and ran a 24-hour hackathon within the campus, coordinating teams and judging.",
  },
  {
    title: "Git & GitHub Workshop",
    period: "Campus Program",
    org: "Butwal Kalika Campus",
    description: "Conducted hands-on sessions for juniors teaching Git fundamentals and GitHub workflows.",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");

  const getEntries = (): Entry[] => {
    if (activeTab === "education") return educationEntries;
    if (activeTab === "extracurricular") return extracurricularEntries;
    return experienceEntries;
  };

  const entries = getEntries();

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl cursor-default mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Experience</h2>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-4 px-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 text-sm md:text-base transition-all rounded-md border ${
                  isActive
                    ? "bg-[#151515] text-primary border-primary/50 shadow-[0_0_28px_rgba(255,255,255,0.08)]"
                    : "text-foreground/80 border-border/60 bg-card/40 hover:bg-[#151515]/70"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--primary)/0.08)] p-6 md:p-8">
          <div className="space-y-10">
            {entries.map((entry, index) => (
              <div key={entry.title} className={index !== entries.length - 1 ? "pb-8 border-b border-border/60" : ""}>
                <div className="flex items-center gap-2 text-primary mb-4">
                  <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)]" />
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">{entry.title}</h3>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-foreground/70" aria-hidden />
                    <span>{entry.period}</span>
                  </div>
                  {entry.org && entry.org.trim() !== "" && (
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-foreground/70" aria-hidden />
                      <span>{entry.org}</span>
                    </div>
                  )}
                  {entry.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-foreground/70" aria-hidden />
                      <span>{entry.location}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">{entry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
