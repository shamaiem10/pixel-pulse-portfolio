import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light") {
      setLightTheme(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = !lightTheme;
    setLightTheme(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("portfolio-theme", next ? "light" : "dark");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl border-primary/20 nav-scrolled" : "bg-background/65 backdrop-blur-md border-border"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a href="#" className="font-pixel text-[10px] text-primary tracking-wider">
          SS<span className="text-secondary">_</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors link-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
        <button onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${lightTheme ? "dark" : "light"} theme`} title={`Switch to ${lightTheme ? "dark" : "light"} theme`}>
          {lightTheme ? <Moon size={13} /> : <Sun size={13} />}
        </button>
        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        </div>
      </div>

      {/* Mobile menu */}
        <div className={`mobile-menu md:hidden bg-background/95 border-b border-border px-4 ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
};

export default Navigation;
