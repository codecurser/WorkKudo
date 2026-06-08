import React, { useEffect, useState, useRef } from 'react';
import FeatureCards from '../Shared/FeatureCards/FeatureCards';
import MemoryMap from '../Shared/MemoryMap/MemoryMap';
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../FAQ/FAQ';
import './Kudos.css';

export default function Kudos() {
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
    <div className="kudos-page">
      {/* ── HERO SECTION ── */}
      <section className="ku-hero">
        <div className="ku-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="ku-hero__overlay" aria-hidden="true" />

        {/* Floating elements */}
        <div className="ku-floaters">
          <div className="ku-float ku-float--1" />
          <div className="ku-float ku-float--2" />
          <div className="ku-float ku-float--3" />
          <div className="ku-float ku-float--4" />
          <div className="ku-float ku-float--5" />
        </div>

        <div className="ku-hero__container container">
          <div className={`ku-hero-left ${isVisible ? 'ku-hero-left--visible' : ''}`}>
            {/* <div className="ku-hero-badge">
              <span className="ku-hero-badge-icon">🔥</span>
              Project Success
            </div>
             */}
            <h1 className="ku-hero-heading">
              Celebrate the <br />
              <span className="ku-hero-heading-accent">Massive Wins</span>
            </h1>

            <p className="ku-hero-sub">
              Did a team just crush a huge launch or hit a major goal? Give them the ultimate high-five with a collaborative digital kudos board.
            </p>

            <div className="ku-hero-ctas">
              <a href="#" className="ku-cta-primary">
                Create a Kudos Board
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#" className="ku-cta-ghost">View an Example</a>
            </div>

            <div className="ku-hero-trust">
              ★ Used by top teams to boost morale and celebrate wins
            </div>
          </div>

          <div className={`ku-hero-right ${isVisible ? 'ku-hero-right--visible' : ''}`}>
            {/* Glass Card Showcase */}
            <div className="ku-glass-card">
              <div className="ku-glass-card__shimmer" />
              <div className="ku-glass-card__header">
                <span className="ku-glass-card__label">TEAM SHOUTOUT</span>
                <span className="ku-glass-card__emoji">🏆</span>
              </div>
              <p className="ku-glass-card__desc">
                "We printed out the Kudos board as a giant poster for the office after the v2.0 launch. The team felt so incredibly recognized and valued."
              </p>
              <div className="ku-glass-card__footer">
                <div className="ku-glass-card__avatars">
                  <div className="ku-avatar" style={{ background: '#f43f5e' }}>E</div>
                  <div className="ku-avatar" style={{ background: '#e11d48' }}>M</div>
                  <div className="ku-avatar" style={{ background: '#be123c' }}>A</div>
                  <div className="ku-avatar ku-avatar--more">+40</div>
                </div>
                <div className="ku-glass-card__signers">Signed by 43 colleagues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHARED COMPONENTS ── */}
      <FeatureCards pageType="kudos" />
      <MemoryMap pageType="kudos" />
      <CelebrationGrid themeClass="red" />
      <FAQ subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="ku-cta">
        <div className="container">
          <div className="ku-cta-box">
            <h2 className="ku-cta-title">Ready to celebrate a win?</h2>
            <p className="ku-cta-desc">
              Start a kudos board in seconds. Invite the company, collect high-fives, and reward amazing work.
            </p>
            <a href="#" className="ku-btn-primary ku-animate-pulse">
              Start for Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
