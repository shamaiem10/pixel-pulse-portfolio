import useFadeIn from "@/hooks/useFadeIn";
import { Code2, Brain, Cloud, Blocks, Zap } from "lucide-react";

const badges = [
  { label: "MERN Stack", icon: Blocks },
  { label: "AI / ML Integration", icon: Brain },
  { label: "RESTful APIs", icon: Code2 },
  { label: "Cloud Deployment", icon: Cloud },
  { label: "Scalable Systems", icon: Zap },
];

const stats = [
  { value: "50+", label: "GitHub Repos" },
  { value: "5+", label: "AI Projects" },
  { value: "3+", label: "Internships" },
  { value: "4", label: "Certifications" },
];

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="about" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-pixel text-sm sm:text-base text-primary mb-10">
          {"// "}ABOUT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main about text */}
          <div className="lg:col-span-2 pixel-border p-8 bg-card">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-primary" />
              <div className="w-3 h-3 bg-secondary" />
              <div className="w-3 h-3 bg-muted" />
              <span className="text-[9px] font-pixel text-muted-foreground ml-2">about.tsx</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Results-driven Software Engineering student with hands-on experience building
              scalable <span className="text-foreground font-medium">MERN applications</span> integrated with{" "}
              <span className="text-primary font-medium">AI/ML systems</span>. Strong focus on
              intelligent architecture, cloud deployment, and performance optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Currently pursuing <span className="text-secondary">BE Software Engineering at NUST</span>, 
              working on cutting-edge research in explainable AI and building production-grade systems 
              that solve real-world problems.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="pixel-border p-4 bg-card flex flex-col items-center justify-center text-center">
                <span className="font-pixel text-lg text-primary text-glow-pink">{s.value}</span>
                <span className="text-[9px] text-muted-foreground mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-6">
          {badges.map((b) => (
            <span
              key={b.label}
              className="pixel-border text-[9px] font-pixel px-4 py-3 text-secondary bg-secondary/5 hover:glow-yellow transition-shadow duration-300 inline-flex items-center gap-2"
            >
              <b.icon size={12} className="text-secondary" />
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
