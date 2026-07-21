import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let current = { x: -300, y: -300 };
    let target = { ...current };
    const animate = () => {
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${current.x - 150}px, ${current.y - 150}px, 0)`;
      frame = requestAnimationFrame(animate);
    };
    const handler = (e: MouseEvent) => { target = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", handler);
    frame = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", handler); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow hidden md:block"
    />
  );
};

export default CursorGlow;
