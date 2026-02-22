import { Github, Linkedin, Mail, Globe, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  { icon: Github, href: "https://github.com/shamaiem10", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/shamaiem-shabbir", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shamaiemshabbir2@gmail.com", label: "Email" },
  { icon: Globe, href: "https://devpost.com/shamaiem10", label: "Devpost" },
];

const roles = ["MERN Stack Developer", "Software Engineer", "AI Engineer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pixel-grid overflow-hidden">
      {/* Decorative pixel accents */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary pixel-shimmer" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary pixel-shimmer" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary pixel-shimmer" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-secondary pixel-shimmer" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/3 left-[8%] w-1 h-1 bg-primary/60 pixel-shimmer" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[60%] right-[12%] w-1.5 h-1.5 bg-secondary/50 pixel-shimmer" style={{ animationDelay: "2.5s" }} />
      <div className="absolute top-[15%] right-[35%] w-1 h-1 bg-primary/40 pixel-shimmer" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[40%] left-[15%] w-2 h-2 bg-secondary/30 pixel-shimmer" style={{ animationDelay: "0.8s" }} />

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 font-pixel text-[8px] text-muted-foreground/30 hidden sm:block">
        {">"} v1.0.0
      </div>
      <div className="absolute top-6 right-6 font-pixel text-[8px] text-muted-foreground/30 hidden sm:block">
        STATUS: ONLINE
      </div>
      <div className="absolute bottom-6 left-6 font-pixel text-[8px] text-muted-foreground/30 hidden sm:block">
        COORD: 33.6°N 73.0°E
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="inline-block pixel-border-pink px-4 py-2 mb-8 animate-fade-up">
          <p className="font-pixel text-[9px] sm:text-[10px] text-secondary tracking-widest">
            {">"} HELLO_WORLD
          </p>
        </div>

        <h1 className="font-pixel text-xl sm:text-2xl md:text-4xl text-foreground mb-6 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Shamaiem<span className="text-primary text-glow-pink"> Shabbir</span>
        </h1>

        <div className="h-8 mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-sm sm:text-base text-primary font-medium">
            {displayed}<span className="animate-pulse text-secondary">_</span>
          </p>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Software Engineering student building production-ready{" "}
          <span className="text-foreground font-medium">MERN + AI systems</span> with real-world scalability and intelligent architecture.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="pixel-border-pink bg-primary/10 text-primary px-8 py-3 text-xs font-medium hover:bg-primary/20 transition-all duration-300 hover:glow-pink"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="pixel-border bg-card text-foreground px-8 py-3 text-xs font-medium hover:bg-muted transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="pixel-border p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-pink bg-card"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce">
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
