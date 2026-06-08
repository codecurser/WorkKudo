import React, { useEffect, useRef } from 'react';
import '../Enterprise/Enterprise.css';
import './Startups.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CelebrationGrid from '../../components/Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../../components/FAQ/FAQ';

const startupFaq = [
  {
    q: "Do you offer discounts for early-stage startups?",
    a: "Yes. We offer startup-friendly pricing programs designed to help early-stage ventures establish positive recognition habits early in their growth journey."
  },
  {
    q: "How fast can we set up WorkKudo?",
    a: "In under two minutes. You can create a board, select a background layout, and share the contribution link directly in your Slack or Teams channel immediately."
  },
  {
    q: "Can we customize boards with our startup's branding?",
    a: "Yes. Startups can upload custom logos, configure organization brand color schemes, and tag cards with your specific company values."
  },
  {
    q: "How do global rewards work for remote contractors?",
    a: "When a board is completed, the recipient can select their preferred reward from a catalog of digital vouchers supported in over 150 countries with local currency conversion."
  },
  {
    q: "Does WorkKudo integrate with Slack?",
    a: "Yes. Our native Slack app lets you launch boards, collect signatures asynchronously, and broadcast milestone wins directly within your shared workspaces."
  }
];

export default function Startups() {
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

        // Color transition: White (#ffffff) to Deep Indigo (rgb(30, 27, 75) / #1E1B4B)
        const r = Math.round(255 - bgP * (255 - 30));
        const g = Math.round(255 - bgP * (255 - 27));
        const b = Math.round(255 - bgP * (255 - 75));
        
        bgRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        // Text color inversion threshold based on the accelerated background
        const isDark = bgP > 0.6;
        bgRef.current.style.color = isDark ? 'white' : '#1e293b';
        
        const title = bgRef.current.querySelector('.ep-section-header--sticky h2');
        if (title) title.style.color = isDark ? 'white' : '#1E1B4B';

        const subtitle = bgRef.current.querySelector('.ep-section-header--sticky p');
        if (subtitle) subtitle.style.color = isDark ? '#c7d2fe' : '#64748b';
        
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
    <div className="enterprise-page startups-page">
      <Navbar />
      
      {/* ── Hero Section ── */}
      <section className="ep-hero">
        <div className="ep-hero__bg"></div>
        <div className="ep-container">
          <div className="ep-hero__content">
            <div className="ep-badge">Solutions for Early-Stage Startups</div>
            <h1 className="ep-hero__title">Scale Startup Culture from Day One</h1>
            <p className="ep-hero__subtitle">
              Fast-moving recognition for rapid-growth teams. Keep your team motivated, align wins with startup values, and celebrate milestones seamlessly.
            </p>
            <div className="ep-hero__actions">
              <button className="ep-btn ep-btn--primary">Request Startup Plan</button>
              <button className="ep-btn ep-btn--secondary">Explore Growth Benefits</button>
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Startup Team Collaboration" 
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
              <h2>Build Your Culture Early</h2>
              <p>Appreciation tools designed for agile workflows, rapid scaling, and modern product teams.</p>
            </div>
            
            <div className="ep-horizontal-track" ref={trackRef}>
              
              <div className="ep-feature-card" style={{ '--accent': '#f59e0b' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <h3>Agile Recognition</h3>
                <p>Celebrate rapid iterations, closed rounds, and key feature releases. Support appreciation that moves at the speed of your product roadmap.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#3b82f6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3>Scale Culture Early</h3>
                <p>Deploy positive recognition habits from your first hires. Build alignment with your core values and reduce early-stage developer churn.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#10b981' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3>Startup Friendly Pricing</h3>
                <p>Access cost-effective pricing tiers built for pre-seed and seeded ventures. Maximize engagement impact while managing administrative costs.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#ec4899' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3>Slack & Teams Sync</h3>
                <p>Post wins directly where your team collaborates. Send invite links and celebrate board completions inside your daily chat workspace channels.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#8b5cf6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2z"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <h3>Rapid Configuration</h3>
                <p>Create appreciation boards in under two minutes with no setup guides or complex admin onboarding. Invite collaborators immediately via links.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#06b6d4' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                </div>
                <h3>Global Remote Rewards</h3>
                <p>Reward international remote contractors instantly with choice-based digital gift cards available across 150+ countries with local currency support.</p>
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
              <h2>deep Slack and Workspace Integrations</h2>
              <p>
                WorkKudo integrates directly into your Slack or MS Teams workspace. Set up directory syncs automatically to welcome new hires before day one.
              </p>
              <ul className="ep-integrations__list">
                <li><span className="ep-check">✓</span> Slack & Microsoft Teams</li>
                <li><span className="ep-check">✓</span> Workday & BambooHR</li>
                <li><span className="ep-check">✓</span> Okta & Azure AD (SSO)</li>
                <li><span className="ep-check">✓</span> Outlook & Google Workspace</li>
              </ul>
            </div>
            <div className="ep-integrations__visual">
              <div className="ep-sync-circle">
                <div className="ep-sync-core">WorkKudo</div>
                <div className="ep-sync-node node-1">Slack</div>
                <div className="ep-sync-node node-2">Teams</div>
                <div className="ep-sync-node node-3">Okta</div>
                <div className="ep-sync-node node-4">HRIS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlight Section ── */}
      <section className="ep-testimonial ep-testimonial--startups">
        <div className="ep-container">
          <div className="ep-testimonial__card">
            <svg className="ep-quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <blockquote style={{ margin: 0 }}>
              Scale your company culture alongside your product. WorkKudo provides early-stage startups with a fast-moving, high-impact workspace to keep early hires aligned, celebrate rapid iterations, and build recognition habits that grow with your company.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Celebration Grid ── */}
      <CelebrationGrid themeClass="navy" />

      {/* ── FAQ Section ── */}
      <FAQ 
        title="Startups FAQs" 
        subtitle="Common questions about startup discounts, rapid setups, and Slack integrations." 
        data={startupFaq}
      />

      {/* ── Final CTA ── */}
      <section className="ep-cta">
        <div className="ep-container">
          <h2>Ready to build a strong startup culture?</h2>
          <p>Join fast-growing startup teams using WorkKudo to scale appreciation and values.</p>
          <div className="ep-cta__actions">
            <button className="ep-btn ep-btn--primary">Schedule a Consultation</button>
            <button className="ep-btn ep-btn--outline">View Pricing</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
