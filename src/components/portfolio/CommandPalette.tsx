import { Command, CornerDownLeft, X } from "lucide-react";
import { useEffect, useState } from "react";

const commands = [
  ["About me", "#about"], ["Tech stack", "#stack"], ["Experience", "#experience"],
  ["Projects", "#projects"], ["Research", "#research"], ["Education", "#education"], ["Contact", "#contact"],
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (event.key === "/" && !target.matches("input, textarea, [contenteditable='true']")) { event.preventDefault(); setOpen(true); }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  const go = (href: string) => { document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <>
      <button className="command-hint hidden sm:flex" onClick={() => setOpen(true)} aria-label="Open command navigation"><Command size={11} /><span>/</span></button>
      {open && <div className="command-overlay" onMouseDown={() => setOpen(false)}>
        <div className="command-box pixel-border bg-card" role="dialog" aria-modal="true" aria-label="Quick navigation" onMouseDown={(e) => e.stopPropagation()}>
          <div className="flex items-center gap-3 pb-4 border-b border-border"><Command size={14} className="text-primary" /><p className="font-pixel text-[8px] text-foreground">QUICK_JUMP</p><button className="ml-auto text-muted-foreground hover:text-primary" onClick={() => setOpen(false)} aria-label="Close"><X size={14} /></button></div>
          <div className="grid sm:grid-cols-2 gap-2 mt-4">{commands.map(([label, href], index) => <button key={href} onClick={() => go(href)} className="command-item"><span>0{index + 1}</span>{label}<CornerDownLeft size={11} /></button>)}</div>
          <p className="font-pixel text-[6px] text-muted-foreground mt-4">ESC TO CLOSE</p>
        </div>
      </div>}
    </>
  );
};

export default CommandPalette;
