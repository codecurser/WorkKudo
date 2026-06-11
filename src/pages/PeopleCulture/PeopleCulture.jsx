import React, { useEffect, useRef } from 'react';
import '../Enterprise/Enterprise.css';
import './PeopleCulture.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CelebrationGrid from '../../components/Shared/CelebrationGrid/CelebrationGrid';
import FAQ from '../../components/FAQ/FAQ';

const peopleCultureFaq = [
  {
    q: "How does WorkKudo help improve employee engagement and retention?",
    a: "WorkKudo makes recognition visible, collaborative, and peer-driven. Regular expression of appreciation boosts employee morale, raises net promoter scores (eNPS), and cultivates a sense of belonging that directly reduces talent turnover."
  },
  {
    q: "Can we automate celebrations for birthdays and work anniversaries?",
    a: "Yes! WorkKudo can be set up to send reminder emails ahead of upcoming milestones like birthdays and work anniversaries, so teammates have time to add their messages before delivery."
  },
  {
    q: "How do we allocate and manage appreciation budgets?",
    a: "People and Culture leaders can distribute budgets across departments or locations. Managers receive allocation limits, while our dashboard provides real-time tracking of redemptions and physical gift deliveries."
  },
  {
    q: "Is it possible to print physical keepsakes of the digital boards?",
    a: "Absolutely! Teammates and recipients can order premium hardbound books containing all messages, photos, and mosaics from the board, shipped globally right to their doorstep."
  },
  {
    q: "How does the platform align recognition with our core company values?",
    a: "When employees send cards or add signatures, they can tag specific company values (e.g., integrity, client success, innovation). This provides HR leaders with insights into how values are being lived out."
  }
];

export default function PeopleCulture() {
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

        // Color transition: White (#ffffff) to Deep Purple/Plum (rgb(45, 18, 77) / #2D124D)
        const r = Math.round(255 - bgP * (255 - 45));
        const g = Math.round(255 - bgP * (255 - 18));
        const b = Math.round(255 - bgP * (255 - 77));
        
        bgRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        // Text color inversion threshold based on the accelerated background
        const isDark = bgP > 0.6;
        bgRef.current.style.color = isDark ? 'white' : '#1e293b';
        
        const title = bgRef.current.querySelector('.ep-section-header--sticky h2');
        if (title) title.style.color = isDark ? 'white' : '#2D124D';

        const subtitle = bgRef.current.querySelector('.ep-section-header--sticky p');
        if (subtitle) subtitle.style.color = isDark ? '#e9d5ff' : '#64748b';
        
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
    <div className="enterprise-page people-culture-page">
      <Navbar />
      
      {/* ── Hero Section ── */}
      <section className="ep-hero">
        <div className="ep-hero__bg"></div>
        <div className="ep-container">
          <div className="ep-hero__content">
            <h1 className="ep-hero__title">Foster a Vibrant, Value-Driven Culture</h1>
            <p className="ep-hero__subtitle">
              Bring teams together with personalized milestone celebrations, peer-to-peer kudos, and meaningful rewards. Retain your top talent by making appreciation a daily habit.
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
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="People and Culture Collaboration" 
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
              <h2>Empower Your People Operations</h2>
              <p>Everything you need to run employee recognition programs that scale with your organization.</p>
            </div>
            
            <div className="ep-horizontal-track" ref={trackRef}>
              
              <div className="ep-feature-card" style={{ '--accent': '#a855f7' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <h3>Milestone Celebrations</h3>
                <p>Automate birthdays, work anniversaries, and key corporate achievements. Build a continuous loop of celebration without manual administration.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#10b981' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                </div>
                <h3>Peer-to-Peer Kudos</h3>
                <p>Enable employees to appreciate each other. Support cross-functional visibility, cultivate mutual respect, and surface silent contributors instantly.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#f43f5e' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <h3>Culture & Belonging</h3>
                <p>Support diversity and inclusion. Use tailor-made layouts for Pride Month, Women's Day, cultural holidays, and highlighting core values.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#3b82f6' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="16" y1="11" x2="22" y2="11"></line></svg>
                </div>
                <h3>Onboarding Welcomes</h3>
                <p>Make new hires feel part of the family before day one. Create team welcomes, share survival guides, and exchange positive intro greetings.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#f59e0b' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
                <h3>Engagement Analytics</h3>
                <p>Measure cultural health. View real-time participation metrics, track value alignment, and gain structural insights into team-specific sentiment.</p>
              </div>

              <div className="ep-feature-card" style={{ '--accent': '#06b6d4' }}>
                <div className="ep-feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                </div>
                <h3>Global Gifting & Prints</h3>
                <p>Send gift vouchers, customized brand swag, or physical printed keepsake books globally. Let the employee choose their preferred reward.</p>
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
              <h2>Fits Into Your Existing Workflow</h2>
              <p>
                WorkKudo connects with the tools your HR team already relies on. Use our Notion integration to keep recognition visible, and reach employees via email or shareable link.
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
      <section className="ep-testimonial ep-testimonial--people-culture">
        <div className="ep-container">
          <div className="ep-testimonial__card">
            <svg className="ep-quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <blockquote style={{ margin: 0 }}>
              Streamline your people operations by setting up milestone reminders for employee birthdays and work anniversaries directly in WorkKudo. By introducing positive recognition loops and peer-to-peer appreciation daily, you build a workplace culture where employees feel valued and motivated to stay.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Celebration Grid ── */}
      <CelebrationGrid themeClass="purple" />

      {/* ── FAQ Section ── */}
      <FAQ 
        title="People & Culture FAQs" 
        subtitle="Common questions about celebrating culture, managing rewards, and automations." 
        data={peopleCultureFaq}
      />

      {/* ── Final CTA ── */}
      <section className="ep-cta">
        <div className="ep-container">
          <h2>Ready to build a thriving workplace culture?</h2>
          <p>Join thousands of People Operations teams who trust WorkKudo to recognize their employees.</p>
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
