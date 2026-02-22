import useFadeIn from "@/hooks/useFadeIn";

const badges = [
  "MERN Stack",
  "AI / ML Integration",
  "RESTful APIs",
  "Cloud Deployment",
  "Scalable Systems",
];

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="about" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-pixel text-sm sm:text-base text-primary mb-8">
          {"// "}ABOUT
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          Results-driven Software Engineering student with hands-on experience building
          scalable MERN applications integrated with AI/ML systems. Strong focus on
          intelligent architecture, cloud deployment, and performance optimization.
        </p>
        <div className="flex flex-wrap gap-3">
          {badges.map((b) => (
            <span
              key={b}
              className="pixel-border text-[10px] font-pixel px-4 py-2 text-secondary bg-secondary/5"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
