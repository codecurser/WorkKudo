import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

/* ── Intersection Observer Hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Animated Counter ── */
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Feature Data ── */
const features = [
  { num: '01', title: 'Create digital boards', desc: 'Create beautiful digital appreciation boards tailored to any event or milestone.', icon: '🎨' },
  { num: '02', title: 'Collect team messages', desc: 'Easily gather messages, photos, and video attachments from teammates, managers, and friends.', icon: '💬' },
  { num: '03', title: 'Celebrate milestones', desc: 'Commemorate promotions, careers, birthdays, recoveries, and significant work anniversaries.', icon: '🏆' },
  { num: '04', title: 'Public recognition', desc: 'Acknowledge and highlight employees\' contributions publicly across the organization.', icon: '📢' },
  { num: '05', title: 'Culture alignment', desc: 'Strengthen company culture and bond remote and hybrid teams together across borders.', icon: '🌍' },
  { num: '06', title: 'Preserve memories', desc: 'Keep a digital memory wall that employees can return to and cherish forever.', icon: '💎' },
];

const benefits = [
  { icon: '📈', title: 'Improve employee engagement', color: '#3b82f6' },
  { icon: '🔒', title: 'Increase retention and loyalty', color: '#10b981' },
  { icon: '🤝', title: 'Strengthen team relationships', color: '#8b5cf6' },
  { icon: '✨', title: 'Build positive workplace culture', color: '#f59e0b' },
  { icon: '💚', title: 'Support employee wellbeing', color: '#06b6d4' },
  { icon: '🚀', title: 'Encourage collaboration & performance', color: '#ec4899' },
];

const stats = [
  { value: 10000, suffix: '+', label: 'Boards Created' },
  { value: 500, suffix: '+', label: 'Organizations' },
  { value: 150, suffix: '+', label: 'Countries Reached' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

export default function AboutUs() {
  const [heroRef, heroVisible] = useReveal(0.1);
  const [originRef, originVisible] = useReveal();
  const [missionRef, missionVisible] = useReveal();
  const [featRef, featVisible] = useReveal(0.1);
  const [teamsRef, teamsVisible] = useReveal();
  const [whyRef, whyVisible] = useReveal(0.1);
  const [ctaRef, ctaVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal(0.2);

  return (
    <div className="about-us-page">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="about-hero" ref={heroRef}>
        <div className="about-hero__bg-orbs">
          <div className="about-orb about-orb--1"></div>
          <div className="about-orb about-orb--2"></div>
          <div className="about-orb about-orb--3"></div>
        </div>
        <div className={`about-container about-hero__inner ${heroVisible ? 'au-reveal' : 'au-hidden'}`}>
          <span className="about-badge">About WorkKudo</span>
          <h1 className="about-hero__title">
            Making Appreciation<br />
            <span className="about-hero__gradient">More Meaningful</span> at Work
          </h1>
          <p className="about-hero__lead">
            At WorkKudo, we believe that recognition shouldn't be reserved for annual reviews, company-wide meetings, or special occasions. The most impactful appreciation happens in everyday moments—when teammates celebrate wins, acknowledge effort, and show gratitude for the people around them.
          </p>
          <div className="about-hero__actions">
            <a href="/#build" className="about-btn about-btn--primary">
              Start a Board
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="/pricing" className="about-btn about-btn--secondary">View Pricing</a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="about-stats" ref={statsRef}>
        <div className={`about-container about-stats__inner ${statsVisible ? 'au-reveal' : 'au-hidden'}`}>
          {stats.map((s, i) => (
            <div className="about-stat" key={i} style={{ animationDelay: `${i * 100}ms` }}>
              <span className="about-stat__value">
                <Counter end={s.value} suffix={s.suffix} />
              </span>
              <span className="about-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Origin Section ── */}
      <section className="about-section about-origin" ref={originRef}>
        <div className={`about-container ${originVisible ? 'au-reveal' : 'au-hidden'}`}>
          <div className="about-origin-content">
            <div className="about-origin__icon">💡</div>
            <h2 className="about-origin__title">Our Story</h2>
            <p>
              WorkKudo was created to help organizations build stronger workplace cultures through meaningful recognition experiences. Whether it's a birthday, work anniversary, promotion, farewell, retirement, recovery message, or simply a heartfelt thank-you, we make it easy for teams to come together and celebrate the people who make work better.
            </p>
            <p>No complicated setup. No lengthy onboarding. Just meaningful recognition made simple.</p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="about-section about-mission-vision" ref={missionRef}>
        <div className={`about-container ${missionVisible ? 'au-reveal' : 'au-hidden'}`}>
          <div className="about-grid-2">
            <div className="about-card about-mission-card">
              <div className="about-card__accent about-card__accent--orange"></div>
              <span className="card-icon">🎯</span>
              <h2>Our Mission</h2>
              <p className="highlight-text">Help every employee feel seen, appreciated, and valued.</p>
              <p>
                We believe recognition is one of the most powerful drivers of engagement, belonging, and team success. When people feel acknowledged for their contributions, they become more connected, motivated, and inspired to do their best work.
              </p>
            </div>

            <div className="about-card about-vision-card">
              <div className="about-card__accent about-card__accent--purple"></div>
              <span className="card-icon">🔭</span>
              <h2>Our Vision</h2>
              <p>
                We envision a future where every workplace prioritizes gratitude, celebrates achievements, and recognizes the people behind the success.
              </p>
              <p>
                By making appreciation effortless and enjoyable, we're helping teams create cultures where employees feel connected, motivated, and proud to belong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="about-section about-what-we-do" ref={featRef}>
        <div className={`about-container ${featVisible ? 'au-reveal' : 'au-hidden'}`}>
          <div className="about-section-header">
            <span className="about-badge about-badge--navy">Platform</span>
            <h2>What We Do</h2>
            <p>WorkKudo provides collaborative recognition boards that allow teams to create personalized celebrations in minutes.</p>
          </div>

          <div className="about-features-grid">
            {features.map((f, i) => (
              <div className="about-feature-card" key={i} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="about-feature-card__top">
                  <span className="feat-icon">{f.icon}</span>
                  <span className="feat-number">{f.num}</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built for Modern Teams ── */}
      <section className="about-section about-modern-teams" ref={teamsRef}>
        <div className={`about-container ${teamsVisible ? 'au-reveal' : 'au-hidden'}`}>
          <div className="about-teams-box">
            <div className="about-teams-box__glow"></div>
            <span className="about-badge">For Teams of All Sizes</span>
            <h2>Built for Modern Teams</h2>
            <p>
              Today's workplaces are more distributed than ever. Teams collaborate across cities, countries, and time zones, making it harder to create shared moments of appreciation.
            </p>
            <p>
              WorkKudo bridges that gap by giving teams a dedicated space to celebrate together, regardless of where they work. Whether you're a startup with ten employees or a global organization with thousands, WorkKudo helps make recognition accessible, engaging, and memorable.
            </p>
            <div className="about-teams-icons">
              <div className="about-teams-icon">🏢<span>Enterprise</span></div>
              <div className="about-teams-icon">🚀<span>Startups</span></div>
              <div className="about-teams-icon">🏥<span>Healthcare</span></div>
              <div className="about-teams-icon">🌐<span>Remote</span></div>
              <div className="about-teams-icon">💼<span>HR Teams</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Recognition Matters ── */}
      <section className="about-section about-why-matters" ref={whyRef}>
        <div className={`about-container ${whyVisible ? 'au-reveal' : 'au-hidden'}`}>
          <div className="about-section-header">
            <span className="about-badge">Research-Backed</span>
            <h2>Why Recognition Matters</h2>
            <p>Research consistently shows that employees who feel recognized are more engaged, productive, and likely to stay with their organizations.</p>
          </div>

          <div className="about-benefits-grid">
            {benefits.map((b, i) => (
              <div className="about-benefit-item" key={i} style={{ animationDelay: `${i * 80}ms`, '--benefit-color': b.color }}>
                <div className="benefit-icon-wrap">
                  <span className="benefit-icon">{b.icon}</span>
                </div>
                <h4>{b.title}</h4>
              </div>
            ))}
          </div>

          <p className="about-commitment">
            At WorkKudo, we're committed to helping organizations unlock these benefits through thoughtful, authentic appreciation.
          </p>
        </div>
      </section>

      {/* ── Join the Movement ── */}
      <section className="about-section about-cta" ref={ctaRef}>
        <div className="about-cta__bg-pattern"></div>
        <div className={`about-container ${ctaVisible ? 'au-reveal' : 'au-hidden'}`}>
          <div className="about-cta-content">
            <h2>Join the Movement</h2>
            <p>
              Thousands of meaningful moments happen every day inside organizations. WorkKudo exists to ensure those moments never go unnoticed. Whether you're celebrating a birthday, recognizing a major milestone, welcoming a new team member, or saying farewell to a colleague, WorkKudo helps turn appreciation into lasting memories.
            </p>
            <blockquote className="cta-quote">
              "Because great workplaces are built on great people—and great people deserve recognition."
            </blockquote>
            <div className="cta-actions">
              <a href="/#build" className="about-btn about-btn--primary about-btn--lg">
                Start a Board Today
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
