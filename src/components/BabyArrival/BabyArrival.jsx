import React, { useEffect, useState, useRef } from 'react';
import FeatureCards from '../Shared/FeatureCards/FeatureCards';
import MemoryMap from '../Shared/MemoryMap/MemoryMap';
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../FAQ/FAQ';
import './BabyArrival.css';

export default function BabyArrival() {
  const [isVisible, setIsVisible] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 60);
    window.scrollTo(0, 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="baby-arrival-page">
      {/* ── HERO SECTION ── */}
      <section className="ba-hero">
        <div className="ba-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="ba-hero__overlay" aria-hidden="true" />

        {/* Floating elements */}
        <div className="ba-floaters">
          <div className="ba-float ba-float--1" />
          <div className="ba-float ba-float--2" />
          <div className="ba-float ba-float--3" />
          <div className="ba-float ba-float--4" />
          <div className="ba-float ba-float--5" />
        </div>

        <div className="ba-hero__container container">
          <div className={`ba-hero-left ${isVisible ? 'ba-hero-left--visible' : ''}`}>
            {/* <div className="ba-hero-badge">
              <span className="ba-hero-badge-icon">🍼</span>
              Welcome Baby
            </div> */}

            <h1 className="ba-hero-heading">
              Celebrate the <br />
              <span className="ba-hero-heading-accent">Newest Arrival</span>
            </h1>

            <p className="ba-hero-sub">
              Shower expecting parents with love, advice, and sweet messages.
              Create a collaborative digital baby book that the whole team can sign, no matter where they are.
            </p>

            <div className="ba-hero-ctas">
              <a href="#" className="ba-cta-primary">
                Create a Baby Board
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#" className="ba-cta-ghost">View an Example</a>
            </div>

            <div className="ba-hero-trust">
              ★ The sweetest way for teams to say congratulations
            </div>
          </div>

          <div className={`ba-hero-right ${isVisible ? 'ba-hero-right--visible' : ''}`}>
            {/* Glass Card Showcase */}
            <div className="ba-glass-card">
              <div className="ba-glass-card__shimmer" />
              <div className="ba-glass-card__header">
                <span className="ba-glass-card__label">GIFT IDEA</span>
                <span className="ba-glass-card__emoji">🧸</span>
              </div>
              <p className="ba-glass-card__desc">
                "We printed our digital board into a beautiful hardcover book. The parents were in tears reading messages from the whole global team!"
              </p>
              <div className="ba-glass-card__footer">
                <div className="ba-glass-card__avatars">
                  <div className="ba-avatar" style={{ background: '#ec4899' }}>A</div>
                  <div className="ba-avatar" style={{ background: '#db2777' }}>S</div>
                  <div className="ba-avatar" style={{ background: '#be185d' }}>M</div>
                  <div className="ba-avatar ba-avatar--more">+42</div>
                </div>
                <div className="ba-glass-card__signers">Signed by 45 colleagues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHARED COMPONENTS ── */}
      <FeatureCards pageType="baby-arrival" />
      <MemoryMap pageType="baby-arrival" />
      <CelebrationGrid themeClass="pink" />
      <FAQ subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="ba-cta">
        <div className="container">
          <div className="ba-cta-box">
            <h2 className="ba-cta-title">Ready to shower them with love?</h2>
            <p className="ba-cta-desc">
              Start a baby board in seconds. Invite the team, collect messages, and deliver a memorable keepsake.
            </p>
            <a href="#" className="ba-btn-primary ba-animate-pulse">
              Start for Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
