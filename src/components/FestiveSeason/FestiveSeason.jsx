import React, { useEffect, useState, useRef } from 'react';
import FeatureCards from '../Shared/FeatureCards/FeatureCards';
import MemoryMap from '../Shared/MemoryMap/MemoryMap';
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../FAQ/FAQ';
import './FestiveSeason.css';

export default function FestiveSeason() {
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
    <div className="festive-season-page">
      {/* ── HERO SECTION ── */}
      <section className="fs-hero">
        <div className="fs-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="fs-hero__overlay" aria-hidden="true" />

        {/* Floating elements */}
        <div className="fs-floaters">
          <div className="fs-float fs-float--1" />
          <div className="fs-float fs-float--2" />
          <div className="fs-float fs-float--3" />
          <div className="fs-float fs-float--4" />
          <div className="fs-float fs-float--5" />
        </div>

        <div className="fs-hero__container container">
          <div className={`fs-hero-left ${isVisible ? 'fs-hero-left--visible' : ''}`}>
            {/* <div className="fs-hero-badge">
              <span className="fs-hero-badge-icon">🎄</span>
              Happy Holidays
            </div> */}

            <h1 className="fs-hero-heading">
              Spread Joy this <br />
              <span className="fs-hero-heading-accent">Festive Season</span>
            </h1>

            <p className="fs-hero-sub">
              Bring the whole company together for the holidays. Share festive cheer, family updates, and warm wishes on a massive, collaborative digital board.
            </p>

            <div className="fs-hero-ctas">
              <a href="#" className="fs-cta-primary">
                Create a Holiday Board
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#" className="fs-cta-ghost">View an Example</a>
            </div>

            <div className="fs-hero-trust">
              ★ The perfect way to wrap up the year as a team
            </div>
          </div>

          <div className={`fs-hero-right ${isVisible ? 'fs-hero-right--visible' : ''}`}>
            {/* Glass Card Showcase */}
            <div className="fs-glass-card">
              <div className="fs-glass-card__shimmer" />
              <div className="fs-glass-card__header">
                <span className="fs-glass-card__label">YEAR IN REVIEW</span>
                <span className="fs-glass-card__emoji">🎁</span>
              </div>
              <p className="fs-glass-card__desc">
                "Our global holiday board was amazing! Reading messages and seeing everyone's holiday traditions from all over the world was the highlight of my year."
              </p>
              <div className="fs-glass-card__footer">
                <div className="fs-glass-card__avatars">
                  <div className="fs-avatar" style={{ background: '#ef4444' }}>T</div>
                  <div className="fs-avatar" style={{ background: '#dc2626' }}>M</div>
                  <div className="fs-avatar" style={{ background: '#b91c1c' }}>A</div>
                  <div className="fs-avatar fs-avatar--more">+102</div>
                </div>
                <div className="fs-glass-card__signers">Signed by 105 colleagues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHARED COMPONENTS ── */}
      <FeatureCards pageType="festive-season" />
      <MemoryMap pageType="festive-season" />
      <CelebrationGrid themeClass="red" />
      <FAQ subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="fs-cta">
        <div className="container">
          <div className="fs-cta-box">
            <h2 className="fs-cta-title">Ready to celebrate the season?</h2>
            <p className="fs-cta-desc">
              Start a holiday board in seconds. Invite the company, share the joy, and create a beautiful end-of-year keepsake.
            </p>
            <a href="#" className="fs-btn-primary fs-animate-pulse">
              Start for Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
