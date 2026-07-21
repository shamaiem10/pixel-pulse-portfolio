import { ExternalLink, Folder, Github } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

type Project = {
  name: string;
  subtitle: string;
  github: string;
  live?: string;
  tech: string[];
  description: string;
  category: string;
};

const projects: Project[] = [
  {
    name: "LoopedIn",
    subtitle: "Autonomous LinkedIn Content Engine",
    github: "https://github.com/shamaiem10/LoopedIn",
    tech: ["n8n", "OpenRouter", "Tavily", "Discord", "Buffer", "Pollinations AI", "Cloudinary"],
    description: "Daily content workflow that studies posting history, drafts original posts, fact-checks claims, generates branded art, and publishes only after Discord approval.",
    category: "AUTOMATION",
  },
  {
    name: "ResuMatch",
    subtitle: "AI Resume Screening Automation",
    github: "https://github.com/shamaiem10/ResuMatch",
    tech: ["n8n", "Gmail", "OpenRouter", "Google Sheets"],
    description: "Monitors incoming applications, reads every resume consistently against a job description, scores candidates, logs results, and alerts recruiters only above a chosen threshold.",
    category: "AUTOMATION",
  },
  {
    name: "Localyse",
    subtitle: "AI Commerce Intelligence Layer",
    github: "https://github.com/Kiranwaqar/Localyse",
    live: "https://localyse-tawny.vercel.app/",
    tech: ["React", "TypeScript", "Node.js", "MongoDB Atlas", "Groq LLM", "Tavily API"],
    description: "Context-aware merchant offer engine combining budget, mood, weather, and geolocation through a modular multi-signal inference pipeline.",
    category: "AI PLATFORM",
  },
  {
    name: "RapidResq",
    subtitle: "Emergency Response Platform",
    github: "https://github.com/shamaiem10/RapidResq",
    live: "https://rapid-res-qn-ew.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Leaflet.js", "Groq AI", "JWT"],
    description: "Emergency platform with panic alerts, an AI guidance assistant, community coordination, first-aid resources, safety mapping, and volunteer email notifications.",
    category: "FULL STACK",
  },
  {
    name: "AURI",
    subtitle: "Real-Time AI Voice Assistant",
    github: "https://github.com/shamaiem10/auri",
    tech: ["Python", "Flask", "React", "Groq LLM", "AssemblyAI", "gTTS"],
    description: "Full-duplex AssemblyAI STT to Groq LLM to gTTS speech pipeline with persistent conversation memory and sub-second audio turnaround.",
    category: "VOICE AI",
  },
  {
    name: "Vytal",
    subtitle: "AI Health Intelligence Platform",
    github: "https://github.com/shamaiem10/vytal",
    tech: ["React", "Flask", "SQLite", "Hugging Face", "Tesseract OCR", "Recharts"],
    description: "Health platform with LLM-powered mood analysis, Tesseract OCR prescription parsing, and real-time intelligence dashboards.",
    category: "HEALTH AI",
  },
  {
    name: "Sync",
    subtitle: "Student Project Manager",
    github: "https://github.com/shamaiem10/sync",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
    description: "Lightweight collaboration workspace for university teams to create projects, manage members, assign tasks, and track progress through a clean responsive interface.",
    category: "PRODUCTIVITY",
  },
];

const ProjectsSection = () => {
  const ref = useFadeIn();
  return (
    <section id="projects" ref={ref as any} className="fade-section py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center gap-4 mb-4"><h2 className="font-pixel text-sm sm:text-base text-primary">{"// "}PROJECTS</h2><div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" /></div>
        <p className="text-sm text-muted-foreground mb-10">AI automation, intelligent platforms, and full-stack products built for real-world use.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {projects.map((project, index) => (
            <article key={project.name} className="project-cartridge pixel-border p-5 bg-card hover:glow-yellow flex flex-col h-[315px] group relative overflow-hidden">
              <div className="cartridge-teeth" aria-hidden="true"><i /><i /><i /><i /></div>
              <span className="cartridge-number">CART_0{index + 1}</span>
              <div className="flex items-center gap-3 mb-4">
                <div className="pixel-border p-2 bg-primary/10"><Folder size={14} className="text-primary" /></div>
                <div><h3 className="font-pixel text-[11px] text-foreground">{project.name}</h3><p className="text-[10px] text-secondary mt-1">{project.subtitle}</p></div>
              </div>
              <span className="cartridge-category">{project.category}</span>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4 min-h-12 content-start">{project.tech.map((item) => <span key={item} className="text-[9px] px-2 py-0.5 bg-muted text-muted-foreground">{item}</span>)}</div>
              <div className="flex flex-wrap gap-4 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80"><Github size={14} />GitHub</a>
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-secondary hover:text-secondary/80"><ExternalLink size={13} />Live Demo</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
