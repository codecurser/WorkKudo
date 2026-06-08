import React, { useEffect, useRef } from 'react';
import '../Enterprise/Enterprise.css';
import './DistributedWorkforces.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CelebrationGrid from '../../components/Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../../components/FAQ/FAQ';

const distributedFaq = [
  {
    q: "Can people sign from different countries without signing up?",
    a: "Yes, anyone with the invite link can add messages, images, GIFs, and videos from anywhere in the world. No registration, account creation, or corporate VPN is required to sign a board."
  },
  {
    q: "How do rewards work for international employees?",
    a: "WorkKudo offers global digital gift cards and localized currency rewards in over 150 countries. When a board is completed, recipients can choose their reward, and we handle fulfillment and currency exchange automatically."
  },
  {
    q: "Is there a limit on contributors?",
    a: "No. Whether you have a small remote engineering squad of 10 or a massive global team of 10,000, our boards scale infinitely with unlimited contributors, signers, and files."
  },
  {
    q: "Does it support Slack & Microsoft Teams?",
    a: "Yes, we have native integrations that let you announce milestone celebrations, share board invite links, and notify the channel once a board has been completed and sent."
  },
  {
    q: "How secure is data sharing across international networks?",
    a: "We implement bank-level AES-256 encryption at rest and TLS 1.3 in transit. WorkKudo is SOC 2 Type II compliant and meets all GDPR and CCPA privacy standards for global enterprises."
  }
];

export default function DistributedWorkforces() {
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
    <div className="enterprise-page distributed-page">
      <Navbar />
      
      {/* ── Hero Section ── */}
      <section className="ep-hero">
        <div className="ep-hero__bg"></div>
        <div className="ep-container">
          <div className="ep-hero__content">
            <div className="ep-badge">Solutions for Remote Teams</div>
            <h1 className="ep-hero__title">Empower Distributed Teams at Global Scale</h1>
            <p className="ep-hero__subtitle">
              Build connection, trust, and alignment across timezones. WorkKudo's hybrid-friendly recognition platform bridges the physical distance to keep remote teammates closer than ever.
            </p>
            <div className="ep-hero__actions">
              <button className="ep-btn ep-btn--primary">Start Global Board</button>
              <button className="ep-btn ep-btn--secondary">See Remote Demos</button>
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
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Remote Team Collaboration Screenshot" 
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
              <h2>Built for Borderless Collaboration</h2>
              <p>Asynchronous tools and timezone-friendly features designed to bring remote teammates closer.</p>
            </div>
            
            <div className="ep-horizontal-track" ref={trackRef}>
              
              <div className="ep-feature-card" style={{ '--accent': '#06b6d4' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3>Asynchronous Signing</h3>
                <p>Teammates sign from anywhere, anytime. Our boards collect signatures, images, GIFs, and milestone memories asynchronously on their own schedules.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#3b82f6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3>Slack & Teams Sync</h3>
                <p>Celebrate wins directly in your shared channels. Share invite links, send notifications, and celebrate completions without leaving your daily chat space.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#8b5cf6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <h3>Global Fulfillment</h3>
                <p>Reward international teammates instantly. Automated choice-based gifting across 150+ countries with local shipping and currency support.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#10b981' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3>HRIS Automations</h3>
                <p>Sync directories seamlessly with Workday, BambooHR, and Rippling to automate onboarding greets, work anniversaries, and birthday templates.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#f59e0b' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>Unlimited Contributor Scale</h3>
                <p>Invite internal squads, cross-department teams, or external vendors to co-sign. Boards scale infinitely with no per-user licensing walls.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#ec4899' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3>Localized Experience</h3>
                <p>Provide eCard greetings and digital gift redemptions customized to each recipient's timezone, local language, and regional preferences.</p>
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
              <h2>Meet Remote Teams in Their Daily Workspaces</h2>
              <p>
                WorkKudo integrates deeply into Slack, Microsoft Teams, and your core HRIS to sync global employee directory changes automatically. Send appreciation where your teams already work.
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
      <section className="ep-testimonial ep-testimonial--distributed">
        <div className="ep-container">
          <div className="ep-testimonial__card">
            <svg className="ep-quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <blockquote style={{ margin: 0 }}>
              Bridge the distance in hybrid and remote organizations by giving everyone a timezone-friendly space to share greetings. Our asynchronous boards fit naturally into remote work patterns, making it easy to build authentic employee connection across any location.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Celebration Grid ── */}
      <CelebrationGrid themeClass="navy" />

      {/* ── FAQ Section ── */}
      <FAQ 
        title="Distributed Workforce FAQs" 
        subtitle="Common questions about celebrating milestones in remote and hybrid environments." 
        data={distributedFaq}
      />

      {/* ── Final CTA ── */}
      <section className="ep-cta">
        <div className="ep-container">
          <h2>Ready to connect your distributed team?</h2>
          <p>Join thousands of remote squads building closer relationships with WorkKudo.</p>
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
