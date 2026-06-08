import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

/* ── WorkKudo SVG Logo Component ── */
function WorkKudoLogo({ className = '', size = 56 }) {
  return (
    <svg
      className={`wk-logo-svg ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 192"
      width={size}
      height={size}
      aria-label="WorkKudo Logo"
    >
      <rect x="9.75" y="9.75" width="60" height="172.5" rx="6" fill="#f97316" className="wk-rect-1" />
      <rect x="122.25" y="9.75" width="60" height="93" rx="6" fill="#f97316" className="wk-rect-2" />
      <rect x="76.078" y="109.66" width="106.172" height="72.59" rx="6" fill="#f97316" className="wk-rect-3" />
    </svg>
  );
}

/* ── Hooks ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useMouseParallax(strength = 30) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * strength,
        y: (e.clientY / window.innerHeight - 0.5) * strength,
      });
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, [strength]);
  return pos;
}

/* ── Components ── */
function Marquee({ children, speed = 40, direction = 'left' }) {
  return (
    <div className={`au-marquee au-marquee--${direction}`}>
      <div className="au-marquee__track" style={{ animationDuration: `${speed}s` }}>
        <div className="au-marquee__content">{children}</div>
        <div className="au-marquee__content" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

function AnimatedCard({ children, className = '', delay = 0, visible = true }) {
  return (
    <div 
      className={`au-anim-card ${className} ${visible ? 'is-visible' : ''}`} 
      style={{ '--delay': `${delay}ms` }}
    >
      <div className="au-anim-card__inner">
        {children}
      </div>
    </div>
  );
}

/* ── Data ── */
const features = [
  { icon: '🎨', num: '01', title: 'Create Digital Boards', desc: 'Beautiful appreciation boards tailored to any milestone, celebration, or message.' },
  { icon: '💬', num: '02', title: 'Collect Team Messages', desc: 'Gather heartfelt messages, photos, and videos from everyone on the team.' },
  { icon: '🏆', num: '03', title: 'Celebrate Milestones', desc: 'Birthdays, work anniversaries, promotions, farewells — every moment matters.' },
  { icon: '📢', num: '04', title: 'Public Recognition', desc: 'Shine a spotlight on outstanding contributions across your organization.' },
  { icon: '🌍', num: '05', title: 'Culture Alignment', desc: 'Bond remote and hybrid teams across borders through shared celebration.' },
  { icon: '💎', num: '06', title: 'Preserve Memories', desc: 'Build a digital memory archive employees can cherish for years to come.' },
];

const benefits = [
  { icon: '📈', title: 'Improve Employee Engagement', color: '#f97316' },
  { icon: '🔒', title: 'Increase Retention & Loyalty', color: '#3b82f6' },
  { icon: '🤝', title: 'Strengthen Team Relationships', color: '#10b981' },
  { icon: '✨', title: 'Build Positive Workplace Culture', color: '#8b5cf6' },
  { icon: '💚', title: 'Support Employee Wellbeing', color: '#f59e0b' },
  { icon: '🚀', title: 'Encourage Collaboration', color: '#ec4899' },
];

const teams = [
  { icon: '🏢', label: 'Enterprise' },
  { icon: '🚀', label: 'Startups' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🌐', label: 'Remote' },
  { icon: '💼', label: 'HR Teams' },
  { icon: '🎓', label: 'Education' },
  { icon: '🤝', label: 'Non-Profits' },
  { icon: '🛒', label: 'Retail' },
  { icon: '💻', label: 'Tech Agencies' },
];

/* ── Main Component ── */
export default function AboutUs() {
  const mouse = useMouseParallax(40);
  
  const [heroRef, heroVisible] = useReveal(0.05);
  const [storyRef, storyVisible] = useReveal(0.2);
  const [featRef, featVisible] = useReveal(0.1);
  const [teamsRef, teamsVisible] = useReveal(0.2);
  const [whyRef, whyVisible] = useReveal(0.1);
  const [ctaRef, ctaVisible] = useReveal(0.2);

  return (
    <div className="au-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="au-hero" ref={heroRef}>
        <div className="au-hero__bg-pattern" />
        
        {/* Parallax Floating Elements */}
        <div className="au-floating au-floating--1" style={{ transform: `translate(${mouse.x * 0.8}px, ${mouse.y * 0.8}px)` }}></div>
        <div className="au-floating au-floating--2" style={{ transform: `translate(${mouse.x * -1.2}px, ${mouse.y * -1.2}px)` }}></div>
        
        <div className="au-container au-hero__content">
          <div className={`au-hero__text-box ${heroVisible ? 'au-reveal-dramatic' : 'au-hidden-dramatic'}`}>
            <h1 className="au-hero__title">
              Making Appreciation <br/>
              <span className="au-text-gradient">Meaningful</span> At Work
            </h1>
            <p className="au-hero__lead">
              Experience recognition like never before. We provide a highly engaging, elegant platform 
              to celebrate milestones and bring your team's gratitude to the forefront.
            </p>
            <div className="au-hero__actions">
              <a href="/#build" className="au-btn au-btn--primary">Get Started</a>
              <a href="/pricing" className="au-btn au-btn--outline">View Pricing</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FOUNDATION ── */}
      <section className="au-section au-foundation" ref={storyRef}>
        <div className="au-container">
          <div className="au-foundation-grid">
            {/* Origin */}
            <AnimatedCard visible={storyVisible} delay={0} className="au-foundation-card au-foundation-origin">
              <div className="au-foundation-content">
                <div className="au-foundation-icon">💡</div>
                <h3 className="au-card-title">Our Origin</h3>
                <p className="au-card-text">
                  WorkKudo was created to help organizations build stronger workplace cultures through meaningful recognition experiences. Whether it's a birthday, work anniversary, promotion, farewell, retirement, recovery message, or simply a heartfelt thank-you, we make it easy for teams to come together and celebrate the people who make work better.
                </p>
                <p className="au-card-text au-text-bold" style={{ marginTop: '16px' }}>
                  No complicated setup. No lengthy onboarding. Just meaningful recognition made simple.
                </p>
              </div>
              <div className="au-foundation-visual">
                <div className="au-story__logo-wrap">
                  <WorkKudoLogo size={60} className="au-logo-anim" />
                </div>
              </div>
            </AnimatedCard>

            {/* Mission */}
            <AnimatedCard visible={storyVisible} delay={100} className="au-foundation-card au-foundation-mission">
              <div className="au-foundation-icon">
                <WorkKudoLogo size={24} />
              </div>
              <h3 className="au-card-title">Our Mission</h3>
              <div className="au-foundation-highlight">
                Help every employee feel seen, appreciated, and valued.
              </div>
              <p className="au-card-text">
                We believe recognition is one of the most powerful drivers of engagement,
                belonging, and team success. When people feel acknowledged, they become
                more connected, motivated, and inspired to do their best work.
              </p>
            </AnimatedCard>

            {/* Vision */}
            <AnimatedCard visible={storyVisible} delay={200} className="au-foundation-card au-foundation-vision">
              <div className="au-foundation-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="au-card-title">Our Vision</h3>
              <p className="au-card-text">
                A future where every workplace prioritizes gratitude, celebrates achievements,
                and recognizes the people behind the success.
              </p>
              <p className="au-card-text" style={{ marginTop: '16px' }}>
                By making appreciation effortless and enjoyable, we help teams create cultures
                where employees feel connected, motivated, and proud to belong.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="au-section au-features" ref={featRef}>
        <div className="au-container">
          <div className={`au-section-header ${featVisible ? 'au-reveal-up' : 'au-hidden-up'}`}>
            <span className="au-badge">Platform Capabilities</span>
            <h2 className="au-section-title">What We Do</h2>
            <p className="au-section-lead">
              WorkKudo provides collaborative recognition boards that allow teams to create personalized celebrations in minutes.
            </p>
          </div>

          <div className="au-feat-grid">
            {features.map((f, i) => (
              <AnimatedCard visible={featVisible} delay={i * 100} className="au-feat-card" key={i}>
                <div className="au-feat-header">
                  <span className="au-feat-icon">{f.icon}</span>
                  <span className="au-feat-num">{f.num}</span>
                </div>
                <h3 className="au-card-title">{f.title}</h3>
                <p className="au-card-text">{f.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR TEAMS (MARQUEE) ── */}
      <section className="au-section au-teams" ref={teamsRef}>
        <div className="au-container">
          <div className={`au-teams-inner ${teamsVisible ? 'au-reveal-up' : 'au-hidden-up'}`}>
            <span className="au-badge">Universal Appeal</span>
            <h2 className="au-section-title">Built for Modern Teams</h2>
            <p className="au-section-lead">
              Today's workplaces are more distributed than ever. Whether you're a startup with
              ten employees or a global enterprise with thousands, WorkKudo makes recognition
              accessible, engaging, and memorable across every timezone.
            </p>
          </div>
        </div>
        
        <div className={`au-teams-marquee-wrap ${teamsVisible ? 'au-reveal-scale' : 'au-hidden-scale'}`} style={{ '--delay': '200ms' }}>
          <Marquee speed={35} direction="left">
            {teams.map((t, i) => (
              <div className="au-team-chip" key={i}>
                <span className="au-team-chip__icon">{t.icon}</span>
                <span className="au-team-chip__label">{t.label}</span>
              </div>
            ))}
          </Marquee>
          
          <Marquee speed={40} direction="right">
            {[...teams].reverse().map((t, i) => (
              <div className="au-team-chip" key={i}>
                <span className="au-team-chip__icon">{t.icon}</span>
                <span className="au-team-chip__label">{t.label}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ── WHY RECOGNITION MATTERS ── */}
      <section className="au-section au-why" ref={whyRef}>
        <div className="au-container">
          <div className={`au-section-header ${whyVisible ? 'au-reveal-up' : 'au-hidden-up'}`}>
            <span className="au-badge">Research-Backed</span>
            <h2 className="au-section-title">Why Recognition Matters</h2>
            <p className="au-section-lead">
              Employees who feel recognized are more engaged, productive, and likely to stay.
            </p>
          </div>

          <div className="au-benefits-grid">
            {benefits.map((b, i) => (
              <AnimatedCard visible={whyVisible} delay={i * 100} className="au-benefit" key={i}>
                <div className="au-benefit__icon" style={{ color: b.color, backgroundColor: `${b.color}15`, borderColor: `${b.color}30` }}>
                  {b.icon}
                </div>
                <h4 className="au-card-title au-benefit__title">{b.title}</h4>
              </AnimatedCard>
            ))}
          </div>

          <p className={`au-commitment ${whyVisible ? 'au-reveal-up' : 'au-hidden-up'}`} style={{ '--delay': '600ms' }}>
            At WorkKudo, we're committed to helping organizations unlock these benefits through thoughtful, authentic appreciation.
          </p>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="au-section au-cta" ref={ctaRef}>
        <div className="au-container">
          <AnimatedCard visible={ctaVisible} className="au-cta-box">
            <div className="au-cta-box__content">
              <h2 className="au-cta__title">Join the Movement</h2>
              <p className="au-cta__text">
                Thousands of meaningful moments happen inside organizations every day. WorkKudo
                ensures those moments are never unnoticed — turning appreciation into lasting memories.
              </p>
              <div className="au-cta__actions">
                <a href="/#build" className="au-btn au-btn--primary">Start a Board Today</a>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
