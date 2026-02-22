import useFadeIn from "@/hooks/useFadeIn";
import { Database, Layout, Server, Brain, HardDrive, Wrench, Cloud } from "lucide-react";

const categories = [
  {
    title: "MERN Stack",
    icon: Blocks,
    color: "primary",
    items: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript (ES6+)", "Mongoose"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "secondary",
    items: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "primary",
    items: ["Node.js", "Express.js", "JWT Auth", "Middleware", "REST APIs"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "secondary",
    items: ["Python", "Machine Learning", "LLMs (OpenAI, Groq, HuggingFace)", "OCR", "Scikit-learn", "NumPy", "Pandas"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "primary",
    items: ["MongoDB", "MongoDB Atlas", "SQL", "SQLite"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "secondary",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "primary",
    items: ["Google Cloud Platform", "Netlify"],
  },
];

// Need to import Blocks separately since it's used in the array
import { Blocks } from "lucide-react";

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`pixel-border p-5 bg-card hover:${cat.color === "primary" ? "glow-pink" : "glow-yellow"} transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`pixel-border p-2 bg-${cat.color}/10`}>
                  <cat.icon size={14} className={`text-${cat.color}`} />
                </div>
                <h3 className="font-pixel text-[9px] text-secondary">{cat.title}</h3>
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
