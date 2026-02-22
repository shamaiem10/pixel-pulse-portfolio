import useFadeIn from "@/hooks/useFadeIn";
import { GraduationCap, Trophy, Award, ExternalLink, Star } from "lucide-react";

const certifications = [
  { name: "AI For Everyone — DeepLearning.AI", url: "https://www.coursera.org/account/accomplishments/verify/YOUR_ID_1" },
  { name: "Data Analysis with Python — IBM", url: "https://www.coursera.org/account/accomplishments/verify/YOUR_ID_2" },
  { name: "Python for Data Science, AI & Development — IBM", url: "https://www.coursera.org/account/accomplishments/verify/YOUR_ID_3" },
  { name: "Flask for Beginners — IBM", url: "https://www.coursera.org/account/accomplishments/verify/YOUR_ID_4" },
];

const EducationSection = () => {
  const ref = useFadeIn();

  return (
    <section id="education" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Education */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-pixel text-sm sm:text-base text-primary">
              {"// "}EDUCATION
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <div className="pixel-border p-8 bg-card hover:glow-pink transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            <div className="flex items-start gap-5 relative">
              <div className="pixel-border-pink p-3 bg-primary/10 shrink-0 hidden sm:block">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-pixel text-[11px] text-foreground mb-2">
                  BE Software Engineering
                </h3>
                <p className="text-sm text-primary mb-1">
                  National University of Sciences & Technology (NUST)
                </p>
                <p className="text-xs text-muted-foreground font-pixel">2023 – 2027</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-pixel text-sm sm:text-base text-primary">
              {"// "}ACHIEVEMENTS
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <div className="pixel-border-yellow p-6 bg-card hover:glow-yellow transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="pixel-border p-3 bg-secondary/10 shrink-0">
                <Trophy size={18} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-pixel text-[10px] text-foreground mb-1">Quaid-e-Azam Merit Scholarship</h3>
                <p className="text-xs text-muted-foreground">Awarded for academic excellence</p>
              </div>
              <Star size={14} className="text-secondary ml-auto shrink-0" />
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-pixel text-sm sm:text-base text-primary">
              {"// "}CERTIFICATIONS
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 pixel-border p-4 bg-card hover:glow-pink transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Award size={14} className="text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {c.name}
                  </span>
                </div>
                <ExternalLink size={12} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
