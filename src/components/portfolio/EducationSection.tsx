import useFadeIn from "@/hooks/useFadeIn";
import { GraduationCap, Trophy, Award, ExternalLink, Star } from "lucide-react";

const certifications = [
  { name: "AI For Everyone - DeepLearning.AI", url: "https://drive.google.com/file/d/1b5cm4-rNawkpWhWrzaQrI_AHNYL7KBzh/view" },
  { name: "Data Analysis with Python - IBM", url: "https://drive.google.com/file/d/1LwM401HXy7-Bz01yr9vTkgVHTo_LpsVd/view" },
  { name: "Python for Data Science & AI - IBM", url: "https://drive.google.com/file/d/1-b_xRRbAFiek4w1jajoUzaDJP_PI_qvJ/view" },
  { name: "Flask for Beginners - Coursera", url: "https://drive.google.com/file/d/1c9OcwSJF78o79p0hXNjgblPqnE6Wh6uM/view" },
];

const EducationSection = () => {
  const ref = useFadeIn();
  return (
    <section id="education" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        <div>
          <div className="flex items-center gap-4 mb-8"><h2 className="font-pixel text-sm sm:text-base text-primary">{"// "}EDUCATION</h2><div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" /></div>
          <div className="pixel-border p-8 bg-card hover:glow-pink relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            <div className="flex items-start gap-5 relative">
              <div className="pixel-border-pink p-3 bg-primary/10 shrink-0 hidden sm:block"><GraduationCap size={24} className="text-primary" /></div>
              <div><h3 className="font-pixel text-[11px] text-foreground mb-2">BE Software Engineering</h3><p className="text-sm text-primary mb-1">National University of Sciences & Technology (NUST)</p><p className="text-xs text-muted-foreground font-pixel">2023 - 2027</p><p className="text-xs text-muted-foreground mt-3 leading-relaxed">Machine Learning, Cloud Computing, Web Engineering, Data Structures & Algorithms, Software Design & Architecture, Computer Networks</p></div>
            </div>
          </div>
          <div className="pixel-border p-6 bg-card hover:glow-yellow mt-4">
            <div className="flex items-start gap-5"><div className="pixel-border-yellow p-3 bg-secondary/10 shrink-0 hidden sm:block"><GraduationCap size={22} className="text-secondary" /></div><div><h3 className="font-pixel text-[10px] text-foreground mb-2">Intermediate, FSc Pre-Engineering</h3><p className="text-sm text-secondary mb-1">Punjab College Faisalabad</p><p className="text-xs text-muted-foreground">2021 - 2023 · 1032 / 1100 · 3rd Position, Faisalabad Board</p></div></div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8"><h2 className="font-pixel text-sm sm:text-base text-primary">{"// "}ACHIEVEMENTS</h2><div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" /></div>
          <div className="pixel-border-yellow p-6 bg-card hover:glow-yellow"><div className="flex items-center gap-4"><div className="pixel-border p-3 bg-secondary/10 shrink-0"><Trophy size={18} className="text-secondary" /></div><div><h3 className="font-pixel text-[10px] text-foreground mb-1">Quaid-e-Azam Merit Scholarship</h3><p className="text-xs text-muted-foreground">Awarded for placing 3rd in FSc Pre-Engineering, Faisalabad Board (2023)</p></div><Star size={14} className="text-secondary ml-auto shrink-0" /></div></div>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            <div className="pixel-border p-5 bg-card"><h3 className="font-pixel text-[9px] text-primary mb-3">HACKATHONS</h3><p className="text-xs text-muted-foreground leading-relaxed">MIT IT Winter Contest 2025 · HackNation Global Hackathon, 5th Edition · University and national-level competitions</p></div>
            <div className="pixel-border p-5 bg-card"><h3 className="font-pixel text-[9px] text-secondary mb-3">LEADERSHIP & ACTIVITIES</h3><p className="text-xs text-muted-foreground leading-relaxed">Organised SGT, a department-wide event, and Khaapa Fest as an entrepreneurship course project.</p></div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8"><h2 className="font-pixel text-sm sm:text-base text-primary">{"// "}CERTIFICATIONS</h2><div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{certifications.map((c) => <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 pixel-border p-4 bg-card hover:glow-pink group"><div className="flex items-center gap-3"><Award size={14} className="text-primary shrink-0" /><span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{c.name}</span></div><ExternalLink size={12} className="text-muted-foreground group-hover:text-primary shrink-0" /></a>)}</div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
