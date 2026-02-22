import useFadeIn from "@/hooks/useFadeIn";

const experiences = [
  {
    role: "AI Fellowship",
    company: "Buildables (Bytewise Ltd.)",
    period: "Aug 2025 – Nov 2025",
    points: ["Advanced prompt engineering", "REST APIs integrating AI services"],
  },
  {
    role: "Research Intern",
    company: "Data Science & ML Lab, NUST",
    period: "Oct 2025 – Present",
    points: ["ML integration pipelines", "Cloud-deployed AI systems"],
  },
  {
    role: "Frontend Development Intern",
    company: "Software Productivity Strategists, Inc.",
    period: "Oct 2025 – Nov 2025",
    points: ["Responsive UI redesign"],
  },
];

const ExperienceSection = () => {
  const ref = useFadeIn();

  return (
    <section id="experience" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-sm sm:text-base text-primary mb-10">
          {"// "}EXPERIENCE
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8">
              {/* Timeline */}
              {i < experiences.length - 1 && <div className="timeline-line" />}
              <div className="absolute left-0 top-1 timeline-dot rounded-none" />

              <div>
                <h3 className="font-pixel text-[10px] text-foreground mb-1">{exp.role}</h3>
                <p className="text-xs text-primary mb-1">{exp.company}</p>
                <p className="text-[10px] text-muted-foreground font-pixel mb-3">{exp.period}</p>
                <ul className="space-y-1">
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
