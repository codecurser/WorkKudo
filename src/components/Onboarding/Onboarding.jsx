import React, { useEffect, useState, useRef } from 'react';
import FeatureCards from '../Shared/FeatureCards/FeatureCards';
import MemoryMap from '../Shared/MemoryMap/MemoryMap';
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../FAQ/FAQ';
import './Onboarding.css';

export default function Onboarding() {
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
    <div className="onboarding-page">
      {/* ── HERO SECTION ── */}
      <section className="ob-hero">
        <div className="ob-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="ob-hero__overlay" aria-hidden="true" />
        
        {/* Floating elements */}
        <div className="ob-floaters">
          <div className="ob-float ob-float--1" />
          <div className="ob-float ob-float--2" />
          <div className="ob-float ob-float--3" />
          <div className="ob-float ob-float--4" />
          <div className="ob-float ob-float--5" />
        </div>

        <div className="ob-hero__container container">
          <div className={`ob-hero-left ${isVisible ? 'ob-hero-left--visible' : ''}`}>
            <div className="ob-hero-badge">
              <span className="ob-hero-badge-icon">👋</span>
              Team Welcome
            </div>
            
            <h1 className="ob-hero-heading">
              Give new hires a <br />
              <span className="ob-hero-heading-accent">Warm Welcome</span>
            </h1>
            
            <p className="ob-hero-sub">
              Make their first day unforgettable. Create a digital welcome board filled with introductions, tips, and friendly waves from the entire team.
            </p>
            
            <div className="ob-hero-ctas">
              <a href="#" className="ob-cta-primary">
                Create a Welcome Board
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#" className="ob-cta-ghost">View an Example</a>
            </div>
            
            <div className="ob-hero-trust">
              ★ The best way to say "Welcome aboard" remotely
            </div>
          </div>

          <div className={`ob-hero-right ${isVisible ? 'ob-hero-right--visible' : ''}`}>
            {/* Glass Card Showcase */}
            <div className="ob-glass-card">
              <div className="ob-glass-card__shimmer" />
              <div className="ob-glass-card__header">
                <span className="ob-glass-card__label">ONBOARDING MAGIC</span>
                <span className="ob-glass-card__emoji">🚀</span>
              </div>
              <p className="ob-glass-card__desc">
                "As a remote employee, seeing a digital board full of smiling faces and tips on my first day completely calmed my nerves. Best onboarding ever!"
              </p>
              <div className="ob-glass-card__footer">
                <div className="ob-glass-card__avatars">
                  <div className="ob-avatar" style={{ background: '#3b82f6' }}>D</div>
                  <div className="ob-avatar" style={{ background: '#2563eb' }}>R</div>
                  <div className="ob-avatar" style={{ background: '#1d4ed8' }}>S</div>
                  <div className="ob-avatar ob-avatar--more">+24</div>
                </div>
                <div className="ob-glass-card__signers">Signed by 27 teammates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHARED COMPONENTS ── */}
      <FeatureCards pageType="onboarding" />
      <MemoryMap pageType="onboarding" />
      <CelebrationGrid themeClass="blue" />
      <FAQ subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="ob-cta">
        <div className="container">
          <div className="ob-cta-box">
            <h2 className="ob-cta-title">Ready to welcome them?</h2>
            <p className="ob-cta-desc">
              Start a welcome board in seconds. Invite the team, collect friendly waves, and make their day one special.
            </p>
            <a href="#" className="ob-btn-primary ob-animate-pulse">
              Start for Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
