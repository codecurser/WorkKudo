import React, { useEffect, useRef } from 'react';
import '../Enterprise/Enterprise.css';
import './Healthcare.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CelebrationGrid from '../../components/Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../../components/FAQ/FAQ';

const healthcareFaq = [
  {
    q: "Is WorkKudo HIPAA compliant?",
    a: "Yes. WorkKudo prioritizes user privacy and security. We support secure SSO, TLS 1.3 encryption, and administrative parameters that restrict data viewing to authorized company branches to protect healthcare staff details and meet HIPAA standards."
  },
  {
    q: "How does this fit into busy, rotating shift schedules?",
    a: "Our digital boards operate completely asynchronously. Teammates can easily contribute messages, photos, or GIFs from their own mobile devices or workstations at any time during their shifts, ensuring no clinician is left out."
  },
  {
    q: "Can we use this for campaigns like Nurse Appreciation Week?",
    a: "Absolutely. WorkKudo is ideal for hospital-wide recognition events, department-level milestones, professional credentials, and structured care team campaigns."
  },
  {
    q: "Can we track participation and cultural engagement across hospital branches?",
    a: "Yes. Hospital administrators have access to dashboard analytics to monitor which departments are active, track peer kudos trends, and manage recognition budgets."
  },
  {
    q: "What physical reward options do you offer for healthcare staff?",
    a: "We offer global digital vouchers from popular brands, custom physical gift deliveries, and printed keepsake books containing all team greetings."
  }
];

export default function Healthcare() {
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

        // Color transition: White (#ffffff) to Deep Teal (rgb(13, 59, 66) / #0D3B42)
        const r = Math.round(255 - bgP * (255 - 13));
        const g = Math.round(255 - bgP * (255 - 59));
        const b = Math.round(255 - bgP * (255 - 66));
        
        bgRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        // Text color inversion threshold based on the accelerated background
        const isDark = bgP > 0.6;
        bgRef.current.style.color = isDark ? 'white' : '#1e293b';
        
        const title = bgRef.current.querySelector('.ep-section-header--sticky h2');
        if (title) title.style.color = isDark ? 'white' : '#0D3B42';

        const subtitle = bgRef.current.querySelector('.ep-section-header--sticky p');
        if (subtitle) subtitle.style.color = isDark ? '#ccfbf1' : '#64748b';
        
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
    <div className="enterprise-page healthcare-page">
      <Navbar />
      
      {/* ── Hero Section ── */}
      <section className="ep-hero">
        <div className="ep-hero__bg"></div>
        <div className="ep-container">
          <div className="ep-hero__content">
            <div className="ep-badge">Solutions for Healthcare Providers</div>
            <h1 className="ep-hero__title">Foster Connection and Recognition in Care Teams</h1>
            <p className="ep-hero__subtitle">
              Improve staff morale, reduce burnout, and support healthcare compliance. Celebrate medical milestones, peer achievements, and administrative successes seamlessly.
            </p>
            <div className="ep-hero__actions">
              <button className="ep-btn ep-btn--primary">Request a Demo</button>
              <button className="ep-btn ep-btn--secondary">Explore Care Benefits</button>
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Healthcare Team Collaboration" 
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
              <h2>Support Your Healthcare Staff</h2>
              <p>Appreciation tools designed to handle shift rotation, remote clinical departments, and administrative care teams.</p>
            </div>
            
            <div className="ep-horizontal-track" ref={trackRef}>
              
              <div className="ep-feature-card" style={{ '--accent': '#0d9488' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 3-2 3s2.23.5 4.5-1.5M3 3l18 18M15 3l6 6M9 3l12 12M5 3l14 14M3 9l12 12M3 15l6 6"></path></svg>
                </div>
                <h3>Care Staff Appreciation</h3>
                <p>Recognize nurses, clinicians, and medical technicians publicly. Celebrate everyday care wins that directly reduce physician and clinical fatigue.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#3b82f6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <h3>Milestone Recognition</h3>
                <p>Track residency completions, professional accreditations, and long-term service milestones automatically. Highlight professional growth across branches.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#10b981' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                </div>
                <h3>Peer-to-Peer Kudos</h3>
                <p>Support clinical and non-clinical team cross-connection. Give coworkers a direct way to thank each other and highlight silent support contributions.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#f59e0b' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3>Asynchronous Signatures</h3>
                <p>Enable shift-workers to participate on their own schedule. Boards collect team messages, photos, and media asynchronously across rotating schedules.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#8b5cf6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h3>HIPAA-Compliant Security</h3>
                <p>Protect staff data with SSO validation, role-based controls, and secure data pipelines that comply with strict healthcare industry regulations.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#ec4899' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                </div>
                <h3>Global & Custom Gifting</h3>
                <p>Offer localized digital voucher rewards or high-quality printed keepsake books. Empower staff to select their preferred reward type instantly.</p>
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
              <h2>Integrate with Hospital Communication Systems</h2>
              <p>
                Push recognition feeds directly to Slack, Microsoft Teams, or local intranets. Sync staff records in real-time with HRIS directories to manage branch onboarding.
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
      <section className="ep-testimonial ep-testimonial--healthcare">
        <div className="ep-container">
          <div className="ep-testimonial__card">
            <svg className="ep-quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <blockquote style={{ margin: 0 }}>
              Empower your healthcare workforce by introducing lightweight, positive recognition loops that counter care fatigue. WorkKudo fits into demanding shift patterns, allowing medical and administrative teams to stay connected, celebrate achievements, and reduce clinician burnout.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Celebration Grid ── */}
      <CelebrationGrid themeClass="navy" />

      {/* ── FAQ Section ── */}
      <FAQ 
        title="Healthcare FAQs" 
        subtitle="Common questions about compliance, shift coordination, and employee celebrations in healthcare." 
        data={healthcareFaq}
      />

      {/* ── Final CTA ── */}
      <section className="ep-cta">
        <div className="ep-container">
          <h2>Ready to support your clinical teams?</h2>
          <p>Join healthcare networks who trust WorkKudo to keep their care teams appreciated and connected.</p>
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
