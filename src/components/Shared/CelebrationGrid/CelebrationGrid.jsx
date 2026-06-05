import { celebrationData } from "./celebrationData";
import CelebrationCard from "./CelebrationCard";
import "./celebration.css";

export default function CelebrationGrid({ themeClass = "" }) {
  // themeClass can be "rose" or "green" or empty (defaults to orange)
  const bgClass = themeClass ? `celebration-section--${themeClass}` : "";

  return (
    <section className={`celebration-section ${bgClass} section`}>
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Celebrate Every Milestone</h2>
          <p className="section-subtitle">
            Choose from 15+ occasion templates to start a board. Hover over a card to begin.
          </p>
        </header>
        <div className="celebration-grid">
          {celebrationData.map((card) => (
            <CelebrationCard
              key={card.id}
              title={card.title}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
