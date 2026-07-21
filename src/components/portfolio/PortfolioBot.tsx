import { X } from "lucide-react";
import { useEffect, useState } from "react";

const shortcuts = [
  { label: "Meet me", href: "#about" },
  { label: "My toolkit", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Say hello", href: "#contact" },
];

const reactions: Record<string, string> = {
  about: "This is the human behind the code!",
  stack: "A very well-stocked toolbox.",
  experience: "Every role unlocked a new level.",
  projects: "These are fun—pick a cartridge!",
  research: "Careful: serious brainpower ahead.",
  education: "The origin story and achievements.",
  contact: "You made it! Time to say hello?",
};

const PixelGirl = ({ unlocked }: { unlocked: boolean }) => (
  <svg className={`pixel-girl ${unlocked ? "pixel-girl--powered" : ""}`} viewBox="0 0 16 18" aria-hidden="true" shapeRendering="crispEdges">
    {unlocked && <><rect x="4" y="0" width="2" height="1" className="pixel-crown" /><rect x="7" y="0" width="2" height="1" className="pixel-crown" /><rect x="10" y="0" width="2" height="1" className="pixel-crown" /></>}
    <rect x="5" y="1" width="6" height="1" className="pixel-hair" />
    <rect x="3" y="2" width="10" height="1" className="pixel-hair" />
    <rect x="2" y="3" width="12" height="5" className="pixel-hair" />
    <rect x="4" y="3" width="8" height="6" className="pixel-skin" />
    <rect x="3" y="4" width="1" height="6" className="pixel-hair" />
    <rect x="12" y="4" width="1" height="6" className="pixel-hair" />
    <rect x="5" y="5" width="2" height="1" className="pixel-eye" />
    <rect x="9" y="5" width="2" height="1" className="pixel-eye" />
    <rect x="7" y="7" width="2" height="1" className="pixel-smile" />
    <rect x="6" y="9" width="4" height="1" className="pixel-skin" />
    <rect x="4" y="10" width="8" height="5" className="pixel-shirt" />
    <rect x="2" y="11" width="2" height="3" className="pixel-skin pixel-wave" />
    <rect x="12" y="11" width="2" height="3" className="pixel-skin" />
    <rect x="5" y="15" width="2" height="2" className="pixel-skirt" />
    <rect x="9" y="15" width="2" height="2" className="pixel-skirt" />
    <rect x="4" y="17" width="3" height="1" className="pixel-shoe" />
    <rect x="9" y="17" width="3" height="1" className="pixel-shoe" />
  </svg>
);

const PortfolioBot = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting && entry.target.id) setActiveSection(entry.target.id); });
    }, { rootMargin: "-35% 0px -35%", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let cursor = 0;
    const listen = (event: KeyboardEvent) => {
      cursor = event.key.toLowerCase() === code[cursor].toLowerCase() ? cursor + 1 : 0;
      if (cursor === code.length) { setUnlocked(true); setOpen(true); cursor = 0; }
    };
    window.addEventListener("keydown", listen);
    return () => window.removeEventListener("keydown", listen);
  }, []);

  const navigate = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="portfolio-bot">
      {!open && <div key={activeSection} className="pixie-comment"><span>PIXIE'S MIND</span><p>{reactions[activeSection] || "Need a tour?"}</p></div>}
      <div className={`bot-panel pixel-border bg-card ${open ? "bot-panel--open" : ""}`} aria-hidden={!open}>
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border">
          <span className="bot-status" />
          <p className="font-pixel text-[8px] text-primary">PIXIE_GUIDE</p>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{unlocked ? "✨ PIXIE POWER MODE UNLOCKED!" : reactions[activeSection] || "Hi, I’m Pixie! Where should we go?"}</p>
        <p className="font-pixel text-[6px] text-secondary mb-4">CURRENT: {activeSection.toUpperCase()}</p>
        <div className="grid grid-cols-2 gap-2">
          {shortcuts.map((shortcut) => (
            <button key={shortcut.href} onClick={() => navigate(shortcut.href)} className="bot-shortcut">
              <span>{">"}</span>{shortcut.label}
            </button>
          ))}
        </div>
      </div>
      <button onClick={() => setOpen(!open)} className="bot-toggle" aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"} aria-expanded={open}>
        {open ? <X size={15} /> : <PixelGirl unlocked={unlocked} />}
        {!open && <span className="bot-notification" />}
      </button>
    </div>
  );
};

export default PortfolioBot;
