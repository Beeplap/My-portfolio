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
    <section id="experience" className="py-6 px-4 scroll-mt-28">
      <div className="max-w-3xl cursor-default mx-auto">

        <div className="flex flex-nowrap items-center justify-center gap-2 mb-4 px-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-xs sm:text-sm md:text-base transition-all rounded-xl border border-white/10  whitespace-nowrap ${isActive
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
