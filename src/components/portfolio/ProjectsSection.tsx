import { Github } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const projects = [
  {
    name: "RapidResq",
    subtitle: "Emergency Response Platform",
    github: "https://github.com/shamaiem10",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Leaflet.js", "Groq AI", "WebSockets"],
    description:
      "Real-time emergency alerts with geolocation tracking, AI crisis chatbot, secure authentication, and scalable backend.",
  },
  {
    name: "AURI",
    subtitle: "Real-Time AI Voice Assistant",
    github: "https://github.com/shamaiem10",
    tech: ["Python", "Flask", "React", "Groq LLM", "AssemblyAI", "gTTS"],
    description:
      "Real-time speech-to-text AI assistant with persistent memory and low-latency voice synthesis.",
  },
  {
    name: "Whisper",
    subtitle: "AI Travel Memory Tracker",
    github: "https://github.com/shamaiem10",
    tech: ["React", "TypeScript", "Flask", "SQLite", "HuggingFace Qwen"],
    description:
      "AI-powered travel companion with intelligent categorization and recommendation system.",
  },
  {
    name: "Vytal",
    subtitle: "AI Health & Wellness Platform",
    github: "https://github.com/shamaiem10",
    tech: ["React", "Flask", "SQLite", "TailwindCSS", "Recharts", "HuggingFace", "Tesseract OCR"],
    description:
      "Mood sentiment analysis, OCR prescription scanning, real-time health dashboards.",
  },
  {
    name: "ServeSpace",
    subtitle: "Volunteer Management Web Application",
    github: "https://github.com/shamaiem10/ServeSpace",
    tech: ["Django", "SQL", "Bootstrap", "JavaScript"],
    description:
      "A comprehensive platform that helps organizations manage volunteers, track hours, and schedule events efficiently. Built with a focus on user experience and administrative functionality.",
  },
];

const ProjectsSection = () => {
  const ref = useFadeIn();

  return (
    <section id="projects" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-pixel text-sm sm:text-base text-primary mb-10">
          {"// "}PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="pixel-border p-6 bg-card hover:glow-yellow transition-shadow duration-300 flex flex-col"
            >
              <h3 className="font-pixel text-[11px] text-foreground mb-1">{p.name}</h3>
              <p className="text-xs text-secondary mb-3">{p.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
              >
                <Github size={14} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
