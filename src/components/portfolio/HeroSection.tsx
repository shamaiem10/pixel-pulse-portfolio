import { Github, Linkedin, Mail, Globe } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/shamaiem10", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/shamaiem-shabbir", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shamaiemshabbir2@gmail.com", label: "Email" },
  { icon: Globe, href: "https://shamaiem.netlify.app", label: "Portfolio" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pixel-grid overflow-hidden">
      {/* Decorative pixel accents */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary pixel-shimmer" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-secondary pixel-shimmer" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary pixel-shimmer" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-secondary pixel-shimmer" style={{ animationDelay: "0.5s" }} />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-pixel text-[10px] sm:text-xs text-secondary mb-6 tracking-widest animate-fade-up">
          {">"} HELLO_WORLD
        </p>

        <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl text-foreground mb-4 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Shamaiem<span className="text-primary"> Shabbir</span>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-primary">MERN Stack Developer</span> •{" "}
          <span className="text-foreground">Software Engineer</span> •{" "}
          <span className="text-secondary">AI Engineer</span>
        </p>

        <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Software Engineering student building production-ready MERN + AI systems with real-world scalability and intelligent architecture.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="pixel-border-pink bg-primary/10 text-primary px-6 py-3 text-xs font-medium hover:bg-primary/20 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#"
            className="pixel-border bg-muted text-foreground px-6 py-3 text-xs font-medium hover:bg-muted/80 transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-5 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-primary transition-colors hover:glow-pink"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
