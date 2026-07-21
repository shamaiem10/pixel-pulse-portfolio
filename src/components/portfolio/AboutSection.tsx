import useFadeIn from "@/hooks/useFadeIn";
import { Brain, Cloud, Code2, Sparkles, Workflow, Zap } from "lucide-react";

const badges = [
  { label: "AI Automation", icon: Workflow },
  { label: "Full-Stack Engineering", icon: Code2 },
  { label: "Explainable AI", icon: Brain },
  { label: "Cloud Deployment", icon: Cloud },
  { label: "Systems Thinking", icon: Zap },
];

const AboutSection = () => {
  const ref = useFadeIn();
  return (
    <section id="about" ref={ref as any} className="fade-section py-24 px-4 relative overflow-hidden">
      <div className="about-orbit about-orbit--one" aria-hidden="true" />
      <div className="about-orbit about-orbit--two" aria-hidden="true" />
      <div className="max-w-5xl mx-auto relative">
        <div className="flex items-center gap-4 mb-10"><h2 className="font-pixel text-sm sm:text-base text-primary">{"// "}ABOUT_ME</h2><div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" /></div>

        <div className="grid lg:grid-cols-[1.45fr_.55fr] gap-5 items-stretch">
          <div className="pixel-border p-6 sm:p-8 bg-card relative overflow-hidden about-terminal">
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
            <div className="flex items-center gap-2 mb-7 border-b border-border pb-4">
              <div className="w-2.5 h-2.5 bg-primary pixel-shimmer" /><div className="w-2.5 h-2.5 bg-secondary" /><div className="w-2.5 h-2.5 bg-muted" />
              <span className="text-[8px] font-pixel text-muted-foreground ml-2">shamaiem.profile</span>
              <span className="ml-auto flex items-center gap-2 text-[8px] font-pixel text-secondary"><span className="status-dot" /> AVAILABLE</span>
            </div>
            <p className="font-pixel text-[9px] text-secondary mb-4">{"const builder ="} <span className="text-primary">"curious by default"</span>;</p>
            <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-foreground mb-5">I turn ambitious ideas into <span className="text-primary text-glow-pink">intelligent products</span> people can actually use.</h3>
            <p className="text-sm text-muted-foreground leading-7 mb-5">I’m a software engineer working where <span className="text-foreground">full-stack development, AI, and automation</span> meet. I enjoy taking a messy real-world problem, finding the useful signal inside it, and shipping a system that feels simple on the outside.</p>
            <p className="text-sm text-muted-foreground leading-7">Currently, I’m an <span className="text-secondary">AI & Automation Intern at Matrix AE</span>. Alongside building autonomous workflows and production integrations, I bring research experience in explainable AI and multimodal ML—especially work aimed at making intelligent systems more transparent.</p>
          </div>

          <div className="pixel-border bg-card p-6 relative overflow-hidden current-panel">
            <div className="flex items-center justify-between mb-7">
              <p className="font-pixel text-[9px] text-primary">CURRENTLY</p>
              <div className="sound-bars" aria-hidden="true"><i /><i /><i /><i /></div>
            </div>
            <div className="space-y-6">
              <div><p className="font-pixel text-[7px] text-muted-foreground mb-2">ROLE</p><p className="text-sm text-foreground">AI & Automation Intern</p><p className="text-xs text-secondary mt-1">Matrix AE</p></div>
              <div><p className="font-pixel text-[7px] text-muted-foreground mb-2">BUILDING</p><p className="text-sm text-foreground leading-relaxed">Useful AI workflows that remove repetitive work.</p></div>
              <div><p className="font-pixel text-[7px] text-muted-foreground mb-2">CURIOUS ABOUT</p><p className="text-sm text-foreground leading-relaxed">Trustworthy AI, agents, and human-centered automation.</p></div>
            </div>
            <div className="mt-7 pt-5 border-t border-border flex items-center gap-3"><Sparkles size={14} className="text-secondary sparkle-icon" /><p className="font-pixel text-[7px] text-muted-foreground">LEARNING IN PUBLIC</p></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {badges.map((badge, index) => (
            <span key={badge.label} style={{ animationDelay: `${index * 90}ms` }} className="skill-chip pixel-border text-[8px] font-pixel px-4 py-3 text-secondary bg-secondary/5 inline-flex items-center gap-2">
              <badge.icon size={12} className={index % 2 ? "text-primary" : "text-secondary"} />{badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
