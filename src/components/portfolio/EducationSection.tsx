import useFadeIn from "@/hooks/useFadeIn";
import { GraduationCap, Trophy, Award, ExternalLink } from "lucide-react";

const achievements = [
  "Quaid-e-Azam Merit Scholarship",
];

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
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Education */}
        <div>
          <h2 className="font-pixel text-sm sm:text-base text-primary mb-8">
            {"// "}EDUCATION
          </h2>
          <div className="pixel-border p-6 bg-card flex items-start gap-4">
            <GraduationCap size={20} className="text-secondary mt-1 shrink-0" />
            <div>
              <h3 className="font-pixel text-[10px] text-foreground mb-1">
                BE Software Engineering
              </h3>
              <p className="text-sm text-muted-foreground">
                National University of Sciences & Technology (NUST)
              </p>
              <p className="text-xs text-muted-foreground mt-1">2023 – 2027</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="font-pixel text-sm sm:text-base text-primary mb-8">
            {"// "}ACHIEVEMENTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {achievements.map((a) => (
              <div key={a} className="flex items-center gap-3 pixel-border p-4 bg-card">
                <Trophy size={14} className="text-secondary shrink-0" />
                <span className="text-sm text-muted-foreground">{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="font-pixel text-sm sm:text-base text-primary mb-8">
            {"// "}CERTIFICATIONS
          </h2>
          <div className="space-y-3">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 pixel-border p-4 bg-card hover:glow-pink transition-shadow duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <Award size={14} className="text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {c.name}
                  </span>
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
