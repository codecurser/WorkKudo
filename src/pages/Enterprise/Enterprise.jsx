import React, { useEffect, useRef } from 'react';
import './Enterprise.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CelebrationGrid from '../../components/Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../../components/FAQ/FAQ';

const enterpriseFaq = [
  {
    q: "How does WorkKudo handle data privacy?",
    a: "WorkKudo takes data privacy seriously. All data is transmitted securely and we follow responsible data handling practices. Reach out to our team for details on how we manage data for your organization."
  },
  {
    q: "Can we restrict signing to internal employees only?",
    a: "Yes. With enterprise permissions, you can lock board access to verified corporate email domains so only your internal employees can view and contribute to boards."
  },
  {
    q: "What support does the Enterprise plan offer?",
    a: "Enterprise customers receive a dedicated Customer Success Manager, priority support, and a customized onboarding program to get your workforce up and running quickly."
  },
  {
    q: "Can we connect WorkKudo to our existing tools?",
    a: "WorkKudo currently integrates with Notion and supports email delivery and shareable links out of the box. More integrations are on the roadmap — reach out to our team to discuss your specific needs."
  },
  {
    q: "How do we get started with the Enterprise plan?",
    a: "Get in touch with our sales team and we'll walk you through onboarding, configuration, and any customization your organization needs."
  }
];

export default function Enterprise() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current || !trackRef.current || !bgRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate how far down we are in the tall section
        // Subtract Navbar height (80px) to start sticky effect accurately
        const top = rect.top - 80;
        const height = rect.height - window.innerHeight;

        // Progress from 0 to 1
        let p = -top / height;
        if (p < 0) p = 0;
        if (p > 1) p = 1;

        // Calculate max horizontal translation
        // Total track width minus viewport width
        const maxTranslate = trackRef.current.scrollWidth - window.innerWidth;
        trackRef.current.style.transform = `translateX(-${p * maxTranslate}px)`;

        // Accelerate the background transition so it becomes fully dark by the time the second card appears
        let bgP = p * 2.5;
        if (bgP > 1) bgP = 1;

        // Color transition: White (#ffffff) to Dark Blue (#1A2B4A)
        const r = Math.round(255 - bgP * (255 - 26));
        const g = Math.round(255 - bgP * (255 - 43));
        const b = Math.round(255 - bgP * (255 - 74));

        bgRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        // Text color inversion threshold based on the accelerated background
        const isDark = bgP > 0.6;
        bgRef.current.style.color = isDark ? 'white' : '#1e293b';

        const title = bgRef.current.querySelector('.ep-section-header--sticky h2');
        if (title) title.style.color = isDark ? 'white' : '#1A2B4A';

        const subtitle = bgRef.current.querySelector('.ep-section-header--sticky p');
        if (subtitle) subtitle.style.color = isDark ? '#cbd5e1' : '#64748b';

        // Explicitly enforce solid white cards and dark text to prevent HMR ghost styles
        const cards = bgRef.current.querySelectorAll('.ep-feature-card');
        cards.forEach(card => {
          card.style.backgroundColor = 'white';
          card.style.boxShadow = isDark ? '0 20px 40px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.05)';
          card.style.borderColor = isDark ? 'transparent' : '#e2e8f0';

          const h3 = card.querySelector('h3');
          if (h3) h3.style.color = '#0f172a';

          const cardP = card.querySelector('p');
          if (cardP) cardP.style.color = '#64748b';
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount to set initial styles
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="enterprise-page">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="ep-hero">
        <div className="ep-hero__bg"></div>
        <div className="ep-container">
          <div className="ep-hero__content">
            <h1 className="ep-hero__title">Elevate Corporate Culture at Global Scale</h1>
            <p className="ep-hero__subtitle">
              Empower your distributed workforce with a recognition platform built for scale. Build a unified culture across teams of any size, anywhere in the world.
            </p>
            <div className="ep-hero__actions">
              <a href="https://workkudo.ai/signin" className="ep-btn ep-btn--primary">Request a Demo</a>
              <button className="ep-btn ep-btn--secondary">Contact Sales</button>
            </div>
          </div>
          <div className="ep-hero__visual">
            <div className="ep-glass-card">
              <div className="ep-glass-card__header">
                <span className="ep-dot red"></span>
                <span className="ep-dot yellow"></span>
                <span className="ep-dot green"></span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Enterprise Analytics Dashboard"
                className="ep-hero__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Horizontal Scroll Features ── */}
      <section ref={sectionRef} className="ep-horizontal-wrapper">
        <div ref={bgRef} className="ep-sticky-container">
          <div className="ep-sticky-content">

            <div className="ep-container ep-section-header ep-section-header--sticky">
              <h2>Enterprise-Grade Infrastructure</h2>
              <p>Designed for administrative control, team scale, and consistent recognition across your organization.</p>
            </div>

            <div className="ep-horizontal-track" ref={trackRef}>

              <div className="ep-feature-card" style={{ '--accent': '#3b82f6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h3>Privacy & Access Controls</h3>
                <p>Role-based permissions, domain-restricted boards, and responsible data handling — giving your org the control it needs.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#10b981' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <h3>Advanced Analytics</h3>
                <p>Track engagement, cultural sentiment, and core value adoption across thousands of employees with high-fidelity, real-time reporting dashboards.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#8b5cf6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                </div>
                <h3>Custom Branding</h3>
                <p>Deliver fully white-labeled recognition experiences. Integrate your own domains, brand colorways, and bespoke physical reward catalogs.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#f59e0b' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3>Global Fulfillment</h3>
                <p>Automate physical gifts, digital vouchers, and localized currency rewards in over 150 countries instantly without the logistical headache.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#ec4899' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>Role-Based Access</h3>
                <p>Deploy granular viewing permissions, multi-tier admin approval flows, and hierarchical budget allocations tailored for massive organizations.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#06b6d4' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3>Integrations</h3>
                <p>Connect WorkKudo to your existing tools via our API. We currently offer a Notion integration, with more on the way.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Integrations Section ── */}
      <section className="ep-integrations">
        <div className="ep-container">
          <div className="ep-integrations__inner">
            <div className="ep-integrations__content">
              <h2>Fits Right Into How Your Team Works</h2>
              <p>
                WorkKudo connects with the tools your team already uses. Our Notion integration keeps everything in one place, with more integrations on the way.
              </p>
              <ul className="ep-integrations__list">
                <li><span className="ep-check">✓</span> Notion</li>
                <li><span className="ep-check">✓</span> Email delivery (all accounts)</li>
                <li><span className="ep-check">✓</span> Shareable links & embeds</li>
                <li><span className="ep-check">✓</span> More integrations coming soon</li>
              </ul>
            </div>
            <div className="ep-integrations__visual">
              <div className="ep-sync-circle">
                <div className="ep-sync-core">WorkKudo</div>
                <div className="ep-sync-node node-1">Notion</div>
                <div className="ep-sync-node node-2">Email</div>
                <div className="ep-sync-node node-3">Links</div>
                <div className="ep-sync-node node-4">More</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlight Section ── */}
      <section className="ep-testimonial ep-testimonial--enterprise">
        <div className="ep-container">
          <div className="ep-testimonial__card">
            <svg className="ep-quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <blockquote style={{ margin: 0 }}>
              WorkKudo gives corporate teams a dedicated workspace for recognition at scale. Set up boards, manage access, and celebrate employees across thousands of people — without the complexity.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Celebration Grid ── */}
      <CelebrationGrid themeClass="navy" />

      {/* ── FAQ Section ── */}
      <FAQ
        title="Enterprise FAQs"
        subtitle="Everything you need to know about WorkKudo for Enterprise."
        data={enterpriseFaq}
      />

      {/* ── Final CTA ── */}
      <section className="ep-cta">
        <div className="ep-container">
          <h2>Ready to transform your enterprise culture?</h2>
          <p>Join the world's leading organizations building stronger teams with WorkKudo.</p>
          <div className="ep-cta__actions">
            <a href="https://workkudo.ai/signin" className="ep-btn ep-btn--primary">Schedule a Consultation</a>
            <button className="ep-btn ep-btn--outline">View Pricing</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
