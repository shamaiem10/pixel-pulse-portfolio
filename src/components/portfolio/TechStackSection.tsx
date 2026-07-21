import useFadeIn from "@/hooks/useFadeIn";
import { Brain, Cloud, Code2, Database, Layout, Server, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    color: "primary",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "secondary",
    items: ["React.js", "Bootstrap", "Responsive Design", "Leaflet.js", "Recharts"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "primary",
    items: ["Node.js", "Express.js", "Flask", "RESTful APIs", "WebSockets", "JWT Auth", "Nodemailer"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "secondary",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "LIME", "Grad-CAM", "Tesseract OCR"],
  },
  {
    title: "AI Automation & LLMs",
    icon: Brain,
    color: "primary",
    items: ["n8n", "OpenRouter", "OpenAI API", "Groq", "Hugging Face", "Tavily API", "Pollinations AI"],
  },
  {
    title: "Data & Storage",
    icon: Database,
    color: "secondary",
    items: ["MongoDB Atlas", "MySQL", "SQLite", "Cloudinary"],
  },
  {
    title: "Platforms & Integrations",
    icon: Wrench,
    color: "secondary",
    items: ["Discord", "Buffer", "Gmail", "Google Sheets", "Google Drive", "AssemblyAI"],
  },
  {
    title: "DevOps, Testing & Cloud",
    icon: Cloud,
    color: "primary",
    items: ["Git", "Docker", "Postman", "JMeter", "Google Cloud", "Vercel", "Netlify"],
  },
];

const TechStackSection = () => {
  const ref = useFadeIn();

  return (
    <section id="stack" ref={ref as any} className="fade-section py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-pixel text-sm sm:text-base text-primary">
            {"// "}TECH_STACK
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`pixel-border p-5 bg-card transition-all duration-300 group ${cat.color === "primary" ? "hover:glow-pink" : "hover:glow-yellow"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`pixel-border p-2 ${cat.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                  <cat.icon size={14} className={cat.color === "primary" ? "text-primary" : "text-secondary"} />
                </div>
                <h3 className={`font-pixel text-[9px] ${cat.color === "primary" ? "text-primary" : "text-secondary"}`}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] text-muted-foreground bg-muted px-2.5 py-1 hover:text-foreground hover:bg-muted/80 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
