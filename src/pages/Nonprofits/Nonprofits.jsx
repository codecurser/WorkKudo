import React, { useEffect, useRef } from 'react';
import '../Enterprise/Enterprise.css';
import './Nonprofits.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CelebrationGrid from '../../components/Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../../components/FAQ/FAQ';

const nonprofitFaq = [
  {
    q: "Do you offer special pricing for registered charities and NGOs?",
    a: "Yes. We offer special discounted pricing tiers for 501(c)(3) organizations, registered charities, and international non-profits to ensure you can appreciate your workforce cost-effectively."
  },
  {
    q: "Can volunteers and donors sign boards without creating accounts?",
    a: "Absolutely. Volunteers, donors, and field coordinators can immediately add messages, photos, and greetings using invite links without going through any registration or corporate login process."
  },
  {
    q: "How does the charity donation redirect feature work for gift cards?",
    a: "When a team member or volunteer receives a gift voucher, they have the option to redirect the total cash value as a direct donation back to a curated selection of global charities and NGOs."
  },
  {
    q: "Can we customize boards for specific donation campaigns or national weeks?",
    a: "Yes. You can customize layout backgrounds, add campaign-specific logos, and tag cards with your core mission values to keep your purpose-driven workforce aligned."
  },
  {
    q: "Does the platform support timezone-friendly asynchronous signing?",
    a: "Yes, WorkKudo operates in over 150 countries, enabling international field staff, remote volunteers, and donors to co-sign greetings across different timezones on their own schedules."
  }
];

export default function Nonprofits() {
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

        // Color transition: White (#ffffff) to Deep Forest Green (rgb(20, 57, 44) / #14392C)
        const r = Math.round(255 - bgP * (255 - 20));
        const g = Math.round(255 - bgP * (255 - 57));
        const b = Math.round(255 - bgP * (255 - 44));
        
        bgRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        // Text color inversion threshold based on the accelerated background
        const isDark = bgP > 0.6;
        bgRef.current.style.color = isDark ? 'white' : '#1e293b';
        
        const title = bgRef.current.querySelector('.ep-section-header--sticky h2');
        if (title) title.style.color = isDark ? 'white' : '#14392C';

        const subtitle = bgRef.current.querySelector('.ep-section-header--sticky p');
        if (subtitle) subtitle.style.color = isDark ? '#bbf7d0' : '#64748b';
        
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
    <div className="enterprise-page nonprofits-page">
      <Navbar />
      
      {/* ── Hero Section ── */}
      <section className="ep-hero">
        <div className="ep-hero__bg"></div>
        <div className="ep-container">
          <div className="ep-hero__content">
            <h1 className="ep-hero__title">Inspire and Unite Your Purpose-Driven Workforce</h1>
            <p className="ep-hero__subtitle">
              Keep volunteers and non-profit staff appreciated, connected, and aligned with your mission. Build community, recognize dedication, and coordinate celebrations seamlessly.
            </p>
            <div className="ep-hero__actions">
              <a href="/learn/assistance#contact-us" className="ep-btn ep-btn--primary">Request a Demo</a>
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
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Volunteers and Nonprofits Teamwork" 
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
              <h2>Celebrate Your Purpose-Driven Team</h2>
              <p>Appreciation tools tailored to volunteer recognition, global operations, and mission values.</p>
            </div>
            
            <div className="ep-horizontal-track" ref={trackRef}>
              
              <div className="ep-feature-card" style={{ '--accent': '#10b981' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <h3>Mission-Driven Appreciation</h3>
                <p>Tag recognition with your organization's core values. Show staff and volunteers how their efforts directly make a difference and drive mission alignment.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#3b82f6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3>Volunteer Recognition</h3>
                <p>Celebrate your volunteer networks during national volunteer weeks, major campaign targets, or service milestones with high-visibility boards.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#8b5cf6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2-2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <h3>Budget-Conscious Plans</h3>
                <p>Gain access to discounted tiers tailored for registered non-profits, helping you maximize recognition impact while keeping administrative overhead low.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#f59e0b' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3>Asynchronous Signatures</h3>
                <p>Allow donors, field officers, and remote volunteers to co-sign greetings across timezones, locations, and various rotating schedules.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#ec4899' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3>Custom Campaign Branding</h3>
                <p>Customize boards with your campaign assets. Build custom layout templates, colors, and graphics that support your public fundraising initiatives.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#06b6d4' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                </div>
                <h3>Global Donation Gifting</h3>
                <p>Support direct donation conversions. Give gift card recipients the options to redirect their reward cash values back to global charitable causes instantly.</p>
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
              <h2>Connect Your Purpose-Driven Teams</h2>
              <p>
                WorkKudo helps you recognize volunteers and staff wherever they collaborate. Share boards through Notion or a direct link — no technical setup required.
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
      <section className="ep-testimonial ep-testimonial--nonprofits">
        <div className="ep-container">
          <div className="ep-testimonial__card">
            <svg className="ep-quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <blockquote style={{ margin: 0 }}>
              Unite your non-profit staff and volunteers around the mission that drives them. WorkKudo provides a highly collaborative, cost-effective space to recognize the tireless dedication of purpose-driven teams, helping keep engagement high and volunteer churn low.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Celebration Grid ── */}
      <CelebrationGrid themeClass="forest" />

      {/* ── FAQ Section ── */}
      <FAQ 
        title="Charities & NGOs FAQs" 
        subtitle="Common questions about non-profit discounts, donation options, and volunteer campaign celebrations." 
        data={nonprofitFaq}
      />

      {/* ── Final CTA ── */}
      <section className="ep-cta">
        <div className="ep-container">
          <h2>Ready to coordinate your NGO appreciation?</h2>
          <p>Join global non-profit teams and charities who use WorkKudo to keep volunteers engaged and appreciated.</p>
          <div className="ep-cta__actions">
            <a href="https://workkudo.ai/signin" className="ep-btn ep-btn--primary">Schedule a Consultation</a>
            <a href="/pricing" className="ep-btn ep-btn--outline">View Pricing</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
