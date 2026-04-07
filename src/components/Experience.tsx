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
    <section id="experience" className="px-4 pb-14 pt-4 scroll-mt-28 md:pb-16 md:pt-6">
      <div className="mx-auto w-full max-w-[1008px] cursor-default">
        <div className="relative mb-6 hidden h-28 -translate-y-4 md:block">
          <div className="absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 bg-cyan-100/25" />
          <div className="absolute left-1/2 top-20 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-1/2 top-20 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/15 to-transparent blur-sm" />
          <div className="experience-beam-drop absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 bg-cyan-50 shadow-[0_0_10px_hsl(182_100%_85%_/0.55)]" />
          <div className="experience-beam-node absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-50 blur-[8px]" />
          <div className="experience-line-spread absolute left-1/2 top-20 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-50 to-transparent" />
          <div className="experience-line-spread-glow absolute left-1/2 top-20 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-100/80 to-transparent blur-[3px]" />
        </div>

        <div className="mb-4 grid w-full grid-cols-3 gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full rounded-2xl border border-white/10 px-3 py-3 text-center text-sm transition-all whitespace-nowrap md:text-base ${
                  isActive
                    ? "bg-white/10 text-white shadow-inner"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.04)] p-8 md:p-10">
          <div className="space-y-10">
            {entries.map((entry, index) => (
              <div key={entry.title} className={index !== entries.length - 1 ? "pb-10" : ""}>
                <div className="mb-4">
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
