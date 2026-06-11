import { celebrationData } from "./celebrationData";
import CelebrationCard from "./CelebrationCard";
import "./celebration.css";

export default function CelebrationGrid() {
  return (
    <section className="celebration-section section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Celebrate Every Milestone</h2>
          <p className="section-subtitle">
            Choose from 15+ occasion templates to start a board.
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
