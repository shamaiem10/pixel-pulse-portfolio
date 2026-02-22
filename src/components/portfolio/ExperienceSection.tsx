import useFadeIn from "@/hooks/useFadeIn";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Fellowship",
    company: "Buildables (Bytewise Ltd.)",
    period: "Aug 2025 – Nov 2025",
    points: ["Advanced prompt engineering", "REST APIs integrating AI services"],
    type: "Fellowship",
  },
  {
    role: "Research Intern",
    company: "Data Science & ML Lab, NUST",
    period: "Oct 2025 – Present",
    points: ["Post-hoc XAI method research", "ML integration pipelines", "Cloud-deployed AI systems"],
    type: "Research",
  },
  {
    role: "Frontend Development Intern",
    company: "Software Productivity Strategists, Inc.",
    period: "Oct 2025 – Nov 2025",
    points: ["Responsive UI redesign"],
    type: "Internship",
  },
];

const ExperienceSection = () => {
  const ref = useFadeIn();

  return (
    <section id="experience" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-pixel text-sm sm:text-base text-primary">
            {"// "}EXPERIENCE
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 group">
              {/* Timeline */}
              {i < experiences.length - 1 && <div className="timeline-line" />}
              <div className="absolute left-0 top-1 timeline-dot rounded-none" />

              <div className="pixel-border p-6 bg-card hover:glow-pink transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-pixel text-[10px] text-foreground mb-1">{exp.role}</h3>
                    <p className="text-xs text-primary">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-pixel px-2 py-1 bg-primary/10 text-primary">{exp.type}</span>
                    <span className="text-[9px] text-muted-foreground font-pixel">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-secondary mt-1.5 text-[6px]">■</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
