import type { CSSProperties } from "react";

const pixels = [
  [7, 18, 0, 7], [92, 12, 1.4, 9], [14, 42, 3.2, 8], [83, 36, 2.1, 11],
  [5, 69, 4.5, 10], [95, 61, .8, 8], [23, 82, 2.8, 12], [75, 88, 5.2, 9],
  [38, 25, 6.1, 11], [66, 48, 3.7, 8], [48, 73, 1.8, 10], [88, 94, 4.1, 12],
];

const PixelField = () => (
  <div className="global-pixel-field" aria-hidden="true">
    {pixels.map(([x, y, delay, duration], index) => (
      <i
        key={`${x}-${y}`}
        className={index % 3 === 0 ? "pixel-alt" : ""}
        style={{ left: `${x}%`, top: `${y}%`, animationDelay: `-${delay}s`, animationDuration: `${duration}s` } as CSSProperties}
      />
    ))}
  </div>
);

export default PixelField;
