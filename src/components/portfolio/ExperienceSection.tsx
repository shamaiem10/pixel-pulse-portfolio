import useFadeIn from "@/hooks/useFadeIn";

const experiences = [
  {
    role: "AI & Automation Intern",
    company: "Matrix AE",
    period: "Jun 2026 - Present",
    points: [
      "Contributing to AI engineering and workflow automation initiatives.",
      "Working with automation tools and intelligent integrations for operational use cases.",
    ],
    type: "Internship",
  },
  {
    role: "Full-Stack Engineering Intern",
    company: "PulseQ - Hospital Queue Intelligence Startup",
    period: "Feb 2026",
    points: [
      "Contributed to MEAN stack development for a hospital patient queue management system.",
      "Built UI components and integrated Express REST APIs for patient-facing views.",
    ],
    type: "Internship",
  },
  {
    role: "Research Intern",
    company: "Data Science & ML Lab, NUST",
    period: "Oct 2025 - Jul 2026",
    points: [
      "Implementing LIME and Grad-CAM feature attribution for transparent production ML models.",
      "Evaluating robustness under distribution shift, adversarial inputs, and class imbalance.",
    ],
    type: "Research",
  },
  {
    role: "Frontend Development Intern",
    company: "Software Productivity Strategists, Inc.",
    period: "Oct 2025 - Nov 2025",
    points: [
      "Built responsive pages with HTML, CSS, JavaScript, and Bootstrap.",
      "Resolved cross-browser layout inconsistencies through systematic testing.",
    ],
    type: "Internship",
  },
  {
    role: "AI Fellow",
    company: "Buildables (Bytewise Ltd.)",
    period: "Aug 2025 - Nov 2025",
    points: [
      "Engineered RESTful AI microservices integrating text generation, STT, and TTS pipelines.",
      "Applied few-shot and system-role prompt engineering to improve LLM output consistency.",
    ],
    type: "Fellowship",
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
                <span className="level-label">LEVEL {String(i + 1).padStart(2, "0")}</span>
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
