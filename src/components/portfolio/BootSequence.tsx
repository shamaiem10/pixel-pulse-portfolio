import { useEffect, useState } from "react";

const BootSequence = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("portfolio-booted") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("portfolio-booted", "true");
    }, 1700);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="boot-screen" role="status" aria-label="Loading portfolio">
      <div className="boot-window pixel-border-pink">
        <p className="font-pixel text-[9px] text-primary mb-5">SS_OS v2.6</p>
        <div className="space-y-2 font-pixel text-[7px] text-muted-foreground">
          <p className="boot-line">{">"} loading intelligent systems...</p>
          <p className="boot-line">{">"} waking pixie guide...</p>
          <p className="boot-line text-secondary">{">"} portfolio ready_</p>
        </div>
        <div className="boot-progress mt-5"><i /></div>
      </div>
    </div>
  );
};

export default BootSequence;
