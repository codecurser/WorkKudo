import { useState } from "react";

export default function CelebrationCard({ title, icon }) {
  const [direction, setDirection] = useState("");

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const w = rect.width;
    const h = rect.height;

    const distToTop = y;
    const distToBottom = h - y;
    const distToLeft = x;
    const distToRight = w - x;

    const minDist = Math.min(distToTop, distToBottom, distToLeft, distToRight);

    if (minDist === distToTop) {
      setDirection("top");
    } else if (minDist === distToBottom) {
      setDirection("bottom");
    } else if (minDist === distToLeft) {
      setDirection("left");
    } else {
      setDirection("right");
    }
  };

  const handleMouseLeave = () => {
    setDirection("");
  };

  return (
    <div
      className={`celebration-card ${direction}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="celebration-card-inner">
        <div className="celebration-front">
          <div className="card-icon">{icon}</div>
          <h3>{title}</h3>
        </div>

        <div className="celebration-back">
          <div className="back-icon">✨</div>
          <span>Create Board</span>
        </div>
      </div>
    </div>
  );
}
