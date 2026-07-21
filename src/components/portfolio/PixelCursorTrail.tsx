import { useEffect, useRef } from "react";

const PixelCursorTrail = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    let last = 0;
    const move = (event: PointerEvent) => {
      if (performance.now() - last < 55 || !ref.current) return;
      last = performance.now();
      const pixel = document.createElement("i");
      pixel.style.left = `${event.clientX}px`; pixel.style.top = `${event.clientY}px`;
      ref.current.appendChild(pixel);
      window.setTimeout(() => pixel.remove(), 650);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="cursor-trail" aria-hidden="true" />;
};

export default PixelCursorTrail;
