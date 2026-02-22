import useFadeIn from "@/hooks/useFadeIn";

const categories = [
  {
    title: "MERN Stack",
    items: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript (ES6+)", "Mongoose"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "JWT Auth", "Middleware", "REST APIs"],
  },
  {
    title: "AI / ML",
    items: ["Python", "Machine Learning", "LLMs (OpenAI, Groq, HuggingFace)", "OCR"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MongoDB Atlas", "SQL", "SQLite"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
  {
    title: "Cloud",
    items: ["Google Cloud Platform", "Netlify"],
  },
];

const TechStackSection = () => {
  const ref = useFadeIn();

  return (
    <section id="stack" ref={ref as any} className="fade-section py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-pixel text-sm sm:text-base text-primary mb-10">
          {"// "}TECH_STACK
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div key={cat.title} className="pixel-border p-5 bg-card hover:glow-pink transition-shadow duration-300">
              <h3 className="font-pixel text-[9px] text-secondary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="text-xs text-muted-foreground bg-muted px-2 py-1">
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
