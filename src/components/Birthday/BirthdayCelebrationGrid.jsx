import { celebrationData } from "../SendOff/celebrationData";
import CelebrationCard from "../SendOff/CelebrationCard";
import "../SendOff/celebration.css"; // Reuse the flip card styles

export default function BirthdayCelebrationGrid() {
  return (
    <section className="celebration-section birthday-celebration-section section">
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
