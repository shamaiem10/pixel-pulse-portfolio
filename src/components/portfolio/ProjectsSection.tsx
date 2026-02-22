import { Github, ExternalLink, Folder } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const projects = [
  {
    name: "RapidResq",
    subtitle: "Emergency Response Platform",
    github: "https://github.com/shamaiem10",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Leaflet.js", "Groq AI", "WebSockets"],
    description:
      "Real-time emergency alerts with geolocation tracking, AI crisis chatbot, secure authentication, and scalable backend.",
    featured: true,
  },
  {
    name: "AURI",
    subtitle: "Real-Time AI Voice Assistant",
    github: "https://github.com/shamaiem10",
    tech: ["Python", "Flask", "React", "Groq LLM", "AssemblyAI", "gTTS"],
    description:
      "Real-time speech-to-text AI assistant with persistent memory and low-latency voice synthesis.",
    featured: true,
  },
  {
    name: "Whisper",
    subtitle: "AI Travel Memory Tracker",
    github: "https://github.com/shamaiem10",
    tech: ["React", "TypeScript", "Flask", "SQLite", "HuggingFace Qwen"],
    description:
      "AI-powered travel companion with intelligent categorization and recommendation system.",
    featured: false,
  },
  {
    name: "Vytal",
    subtitle: "AI Health & Wellness Platform",
    github: "https://github.com/shamaiem10",
    tech: ["React", "Flask", "SQLite", "TailwindCSS", "Recharts", "HuggingFace", "Tesseract OCR"],
    description:
      "Mood sentiment analysis, OCR prescription scanning, real-time health dashboards.",
    featured: false,
  },
  {
    name: "ServeSpace",
    subtitle: "Volunteer Management Web Application",
    github: "https://github.com/shamaiem10/ServeSpace",
    tech: ["Django", "SQL", "Bootstrap", "JavaScript"],
    description:
      "A comprehensive platform that helps organizations manage volunteers, track hours, and schedule events efficiently. Built with a focus on user experience and administrative functionality.",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useFadeIn();

  return (
    <section id="projects" ref={ref as any} className="fade-section py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-pixel text-sm sm:text-base text-primary">
            {"// "}PROJECTS
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        </div>
        <p className="text-sm text-muted-foreground mb-10">
          A selection of projects I've built — from AI-powered platforms to full-stack web applications.
        </p>

        {/* Featured projects - larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {projects.filter(p => p.featured).map((p) => (
            <div
              key={p.name}
              className="pixel-border p-6 bg-card hover:glow-yellow transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 px-2 py-1 bg-secondary/10">
                <span className="text-[7px] font-pixel text-secondary">FEATURED</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="pixel-border p-2 bg-primary/10">
                  <Folder size={14} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-pixel text-[11px] text-foreground">{p.name}</h3>
                  <p className="text-[10px] text-secondary">{p.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{p.description}</p>
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
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          ))}
        </div>

        {/* Other projects - standard cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((p) => (
            <div
              key={p.name}
              className="pixel-border p-5 bg-card hover:glow-yellow transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-2 mb-2">
                <Folder size={12} className="text-secondary" />
                <h3 className="font-pixel text-[10px] text-foreground">{p.name}</h3>
              </div>
              <p className="text-[10px] text-secondary mb-2">{p.subtitle}</p>
              <p className="text-xs text-muted-foreground mb-3 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {p.tech.map((t) => (
                  <span key={t} className="text-[9px] px-1.5 py-0.5 bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] text-primary hover:text-primary/80 transition-colors"
              >
                <Github size={12} />
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
