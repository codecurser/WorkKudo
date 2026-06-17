import React, { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

/* ── Asset imports ── */
import dashboardImg from '../../assets/dashboard.png';
import invitePeopleImg from '../../assets/invite-people.png';
import momentsImg from '../../assets/moments.png';
import theBoardImg from '../../assets/the-board.png';
import workkudoLogo from '../../assets/workkudologo.png';

/* ══════════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════════ */

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useTypewriter(words, typingSpeed = 70, deletingSpeed = 35, pauseMs = 1800) {
  const [display, setDisplay] = useState('');
  const [blink, setBlink] = useState(false);

  // Use refs so the interval callback always has fresh values without deps
  const stateRef = useRef({ wordIdx: 0, charIdx: 0, phase: 'typing', pauseTimer: null });

  useEffect(() => {
    const state = stateRef.current;

    const tick = () => {
      const word = words[state.wordIdx];

      if (state.phase === 'typing') {
        if (state.charIdx < word.length) {
          state.charIdx++;
          setDisplay(word.slice(0, state.charIdx));
          setBlink(false);
        } else {
          // done typing — pause then delete
          state.phase = 'pausing';
          setBlink(true);
          clearInterval(intervalRef.current);
          state.pauseTimer = setTimeout(() => {
            state.phase = 'deleting';
            setBlink(false);
            intervalRef.current = setInterval(tick, deletingSpeed);
          }, pauseMs);
          return;
        }
      } else if (state.phase === 'deleting') {
        if (state.charIdx > 0) {
          state.charIdx--;
          setDisplay(word.slice(0, state.charIdx));
        } else {
          // advance to next word
          state.wordIdx = (state.wordIdx + 1) % words.length;
          state.phase = 'typing';
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(tick, typingSpeed);
        }
      }
    };

    const intervalRef = { current: setInterval(tick, typingSpeed) };
    // capture in outer scope for cleanup
    stateRef.current._interval = intervalRef;

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(state.pauseTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { display, isCursorBlink: blink };
}

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */

const TYPEWRITER_WORDS = ['Recognition', 'Appreciation', 'Belonging', 'Engagement', 'Celebration'];

const features = [
  {
    icon: '🎨', num: '01', title: 'Beautiful Boards',
    desc: 'Design appreciation boards tailored to any occasion — from birthdays to big wins.',
    color: '#FF6B2C', bg: '#FFF3EE',
  },
  {
    icon: '💬', num: '02', title: 'Collect Messages',
    desc: 'Teammates add messages, photos, and GIFs with zero friction — no account needed.',
    color: '#3B82F6', bg: '#EFF6FF',
  },
  {
    icon: '🏆', num: '03', title: 'Every Milestone',
    desc: 'Birthdays, anniversaries, promotions, farewells — every moment gets its due.',
    color: '#10B981', bg: '#ECFDF5',
  },
  {
    icon: '📢', num: '04', title: 'Public Recognition',
    desc: 'Shine a spotlight on outstanding contributors across your whole organization.',
    color: '#8B5CF6', bg: '#F5F3FF',
  },
  {
    icon: '🌍', num: '05', title: 'Remote-First',
    desc: 'Bridge distributed teams across time zones through shared, joyful celebration.',
    color: '#F59E0B', bg: '#FFFBEB',
  },
  {
    icon: '💎', num: '06', title: 'Lasting Memories',
    desc: 'Every board lives on — a digital keepsake employees can revisit for years.',
    color: '#EC4899', bg: '#FDF2F8',
  },
];

const values = [
  {
    icon: '❤️', title: 'Human First',
    desc: 'Behind every metric is a person. We build tools that treat people like people.',
  },
  {
    icon: '✨', title: 'Authentic Always',
    desc: 'No scripts. No corporate fluff. Real appreciation means real words from real people.',
  },
  {
    icon: '🚀', title: 'Effortlessly Simple',
    desc: 'If it takes more than two minutes, we haven\'t done our job. Simplicity is the feature.',
  },
  {
    icon: '🌱', title: 'Culture as a Foundation',
    desc: 'Recognition isn\'t a nice-to-have. It\'s the bedrock of every thriving workplace.',
  },
];

const howItWorks = [
  {
    step: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Pick an Occasion',
    desc: 'Choose from birthdays, work anniversaries, promotions, farewells, and more. Every template is built for the moment.',
    color: '#FF6B2C',
    bg: '#FFF3EE',
    border: '#FFD4B8',
  },
  {
    step: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Invite Your Team',
    desc: 'Share a link via Notion, email, or direct URL. Contributors add messages, photos, and GIFs — no login required.',
    color: '#3B82F6',
    bg: '#EFF6FF',
    border: '#BFDBFE',
  },
  {
    step: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Personalise the Board',
    desc: 'Pick a backdrop, rearrange messages, add GIFs or drawings. Make it feel personal — because it is.',
    color: '#10B981',
    bg: '#ECFDF5',
    border: '#A7F3D0',
  },
  {
    step: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Deliver the Moment',
    desc: 'Send instantly or schedule delivery for the perfect moment. The recipient gets a notification they\'ll never forget.',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
];

/* ══════════════════════════════════════════════════════
   MARQUEE
══════════════════════════════════════════════════════ */

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

const teamTypes = [
  { icon: '🏢', label: 'Enterprise' },
  { icon: '🚀', label: 'Startups' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🌐', label: 'Remote Teams' },
  { icon: '💼', label: 'HR Leaders' },
  { icon: '🎓', label: 'Education' },
  { icon: '🤝', label: 'Non-Profits' },
  { icon: '🛒', label: 'Retail' },
  { icon: '💻', label: 'Tech Agencies' },
  { icon: '🏭', label: 'Manufacturing' },
];

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */

export default function AboutUs() {
  const { display, isCursorBlink } = useTypewriter(TYPEWRITER_WORDS);

  const [heroRef, heroVisible] = useReveal(0.05);
  const [statsRef, statsVisible] = useReveal(0.2);
  const [storyRef, storyVisible] = useReveal(0.1);
  const [valuesRef, valuesVisible] = useReveal(0.1);
  const [featRef, featVisible] = useReveal(0.08);
  const [timelineRef, timelineVisible] = useReveal(0.1);
  const [teamsRef, teamsVisible] = useReveal(0.15);
  const [ctaRef, ctaVisible] = useReveal(0.2);

  return (
    <div className="au-page">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="au-hero" ref={heroRef}>
        {/* Background shapes */}
        <div className="au-hero__shape au-hero__shape--1" aria-hidden="true" />
        <div className="au-hero__shape au-hero__shape--2" aria-hidden="true" />
        <div className="au-hero__shape au-hero__shape--3" aria-hidden="true" />
        <div className="au-hero__grid-pattern" aria-hidden="true" />

        <div className="au-container">
          <div className={`au-hero__inner ${heroVisible ? 'au-in' : ''}`}>

            {/* Left: Text */}
            <div className="au-hero__text">
              <div className="au-eyebrow">
                <span className="au-eyebrow__dot" />
                About WorkKudo
              </div>

              <h1 className="au-hero__heading">
                <span className="au-hero__heading-row">Making Every</span>
                <span className="au-hero__heading-row au-hero__heading-row--typewriter">
                  <span className="au-hero__typed">{display}</span>
                  <span className={`au-hero__cursor${isCursorBlink ? ' au-hero__cursor--blink' : ''}`}>|</span>
                </span>
                <span className="au-hero__heading-row au-hero__heading-light">Matter at Work</span>
              </h1>

              <p className="au-hero__sub">
                WorkKudo is the employee recognition platform that turns everyday moments into lasting memories — bringing teams together through authentic appreciation.
              </p>

              <div className="au-hero__actions">
                <a href="https://workkudo.ai/signin" className="au-btn au-btn--primary">
                  Start a Board
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/pricing" className="au-btn au-btn--ghost">View Pricing</a>
              </div>


            </div>

            {/* Right: Dashboard image */}
            <div className="au-hero__visual">
              <div className="au-hero__img-frame">
                <div className="au-hero__img-chrome">
                  <span className="au-hero__chrome-dot" style={{ background: '#ff5f57' }} />
                  <span className="au-hero__chrome-dot" style={{ background: '#febc2e' }} />
                  <span className="au-hero__chrome-dot" style={{ background: '#28c840' }} />
                  <span className="au-hero__chrome-title">WorkKudo — Dashboard</span>
                </div>
                <img
                  src={dashboardImg}
                  alt="WorkKudo recognition dashboard"
                  className="au-hero__img"
                  loading="eager"
                />
              </div>
              {/* Floating badges */}
              <div className="au-hero__badge-float au-hero__badge-float--1">
                <span>🎉</span> Board Sent!
              </div>
              <div className="au-hero__badge-float au-hero__badge-float--2">
                <span>🏆</span> 5-Year Anniversary
              </div>
              <div className="au-hero__badge-float au-hero__badge-float--3">
                <span>💬</span> 24 messages
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOGO BRAND STRIP
      ══════════════════════════════════════════ */}
      <section className="au-logo-strip" ref={statsRef}>
        <div className="au-logo-strip__inner">
          {/* Repeat the logo unit enough times to fill + scroll */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="au-logo-unit" aria-hidden={i > 0 ? 'true' : undefined}>
              {/* WorkKudo K-shape SVG */}
              <svg
                className="au-logo-unit__svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 192"
                width="36"
                height="36"
                aria-label={i === 0 ? 'WorkKudo' : undefined}
              >
                <rect x="9.75"  y="9.75"   width="60" height="172.5" rx="6" fill="currentColor" className="au-logo-r1" />
                <rect x="122.25" y="9.75"  width="60" height="93"    rx="6" fill="currentColor" className="au-logo-r2" />
                <rect x="76.078" y="109.66" width="106.172" height="72.59" rx="6" fill="currentColor" className="au-logo-r3" />
              </svg>
              <span className="au-logo-unit__name">WorkKudo</span>
              <span className="au-logo-unit__sep">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════ */}
      <section className="au-section au-story" ref={storyRef}>
        <div className="au-container">
          <div className="au-story__grid">

            {/* Left — image stack */}
            <div className={`au-story__images ${storyVisible ? 'au-in' : ''}`}>
              <div className="au-story__img-main">
                <img src={theBoardImg} alt="WorkKudo board" />
              </div>
              <div className="au-story__img-accent">
                <img src={invitePeopleImg} alt="Invite teammates" />
              </div>
              <div className="au-story__img-badge">
                <img src={workkudoLogo} alt="WorkKudo" className="au-story__logo" />
                <span>Built for People</span>
              </div>
            </div>

            {/* Right — copy */}
            <div className={`au-story__copy ${storyVisible ? 'au-in au-in--d2' : ''}`}>
              <div className="au-eyebrow"><span className="au-eyebrow__dot" />Our Story</div>
              <h2 className="au-section-title">Recognition shouldn't be an afterthought</h2>
              <p className="au-body-text">
                WorkKudo was born from a simple frustration: meaningful employee moments were being missed. Birthdays forgotten. Work anniversaries left unacknowledged. Promotions barely noticed in a packed chat thread.
              </p>
              <p className="au-body-text">
                We built WorkKudo to change that — a platform where teams of any size can create beautiful, collaborative appreciation boards in under two minutes. No complicated setup. No lengthy onboarding. Just genuine recognition, made effortless.
              </p>
              <div className="au-story__pillars">
                {[
                  { label: 'Mission', text: 'Help every employee feel seen, valued, and appreciated.' },
                  { label: 'Vision', text: 'A world where gratitude is the default in every workplace.' },
                ].map((p, i) => (
                  <div key={i} className="au-story__pillar">
                    <span className="au-story__pillar-label">{p.label}</span>
                    <span className="au-story__pillar-text">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALUES
      ══════════════════════════════════════════ */}
      <section className="au-section au-values" ref={valuesRef}>
        <div className="au-container">
          <div className={`au-section-header ${valuesVisible ? 'au-in' : ''}`}>
            <div className="au-eyebrow"><span className="au-eyebrow__dot" />What We Stand For</div>
            <h2 className="au-section-title">Our Values</h2>
            <p className="au-section-lead">The principles that guide every product decision we make.</p>
          </div>
          <div className="au-values-grid">
            {values.map((v, i) => (
              <div
                key={i}
                className={`au-value-card ${valuesVisible ? 'au-in' : ''}`}
                style={{ '--delay': `${i * 90}ms` }}
              >
                <span className="au-value-card__icon">{v.icon}</span>
                <h3 className="au-value-card__title">{v.title}</h3>
                <p className="au-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT WE DO — FEATURES
      ══════════════════════════════════════════ */}
      <section className="au-section au-features" ref={featRef}>
        <div className="au-container">
          <div className={`au-section-header ${featVisible ? 'au-in' : ''}`}>
            <div className="au-eyebrow"><span className="au-eyebrow__dot" />Platform Capabilities</div>
            <h2 className="au-section-title">What We Do</h2>
            <p className="au-section-lead">
              Everything your team needs to make recognition a daily habit.
            </p>
          </div>

          <div className="au-features-layout">
            {/* Left: feature grid */}
            <div className="au-feat-grid">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`au-feat-card ${featVisible ? 'au-in' : ''}`}
                  style={{ '--delay': `${i * 80}ms`, '--card-color': f.color, '--card-bg': f.bg }}
                >
                  <div className="au-feat-card__top">
                    <span className="au-feat-card__icon">{f.icon}</span>
                    <span className="au-feat-card__num">{f.num}</span>
                  </div>
                  <h3 className="au-feat-card__title">{f.title}</h3>
                  <p className="au-feat-card__desc">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: moments image */}
            <div className={`au-features-visual ${featVisible ? 'au-in au-in--d3' : ''}`}>
              <div className="au-features-visual__frame">
                <img src={momentsImg} alt="Recognition moments" />
              </div>
              <div className="au-features-visual__stat">
                <span className="au-features-visual__stat-val">2 min</span>
                <span className="au-features-visual__stat-lab">Average setup time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="au-section au-hiw-section" ref={timelineRef}>
        <div className="au-container">
          <div className={`au-section-header ${timelineVisible ? 'au-in' : ''}`}>
            <div className="au-eyebrow"><span className="au-eyebrow__dot" />The Process</div>
            <h2 className="au-section-title">Up and running in minutes</h2>
            <p className="au-section-lead">No training. No setup calls. Just open WorkKudo and go.</p>
          </div>

          <div className="au-hiw-grid">
            {howItWorks.map((step, i) => (
              <div
                key={i}
                className={`au-hiw-card ${timelineVisible ? 'au-in' : ''}`}
                style={{ '--delay': `${i * 100}ms`, '--hiw-color': step.color, '--hiw-bg': step.bg, '--hiw-border': step.border }}
              >
                {/* Step number + connector arrow */}
                <div className="au-hiw-card__top">
                  <span className="au-hiw-card__step">{step.step}</span>
                  {i < howItWorks.length - 1 && (
                    <span className="au-hiw-card__arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="au-hiw-card__icon">
                  {step.icon}
                </div>

                {/* Text */}
                <h3 className="au-hiw-card__title">{step.title}</h3>
                <p className="au-hiw-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BUILT FOR ALL TEAMS — MARQUEE
      ══════════════════════════════════════════ */}
      <section className="au-section au-teams" ref={teamsRef}>
        <div className="au-container">
          <div className={`au-section-header ${teamsVisible ? 'au-in' : ''}`}>
            <div className="au-eyebrow"><span className="au-eyebrow__dot" />Universal Appeal</div>
            <h2 className="au-section-title">Built for Every Team</h2>
            <p className="au-section-lead">
              Whether you're a ten-person startup or a global enterprise with thousands of employees, WorkKudo scales with you.
            </p>
          </div>
        </div>
        <div className={`au-marquee-wrap ${teamsVisible ? 'au-in' : ''}`}>
          <Marquee speed={32} direction="left">
            {teamTypes.map((t, i) => (
              <div className="au-team-chip" key={i}>
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </Marquee>
          <Marquee speed={38} direction="right">
            {[...teamTypes].reverse().map((t, i) => (
              <div className="au-team-chip" key={i}>
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section className="au-cta-section" ref={ctaRef}>
        <div className="au-container">
          <div className={`au-cta-box ${ctaVisible ? 'au-in' : ''}`}>
            <div className="au-cta-box__glow" aria-hidden="true" />
            <div className="au-cta-box__content">
              <div className="au-eyebrow au-eyebrow--light"><span className="au-eyebrow__dot" style={{ background: '#FFB380' }} />Join the Movement</div>
              <h2 className="au-cta-box__title">
                Every team deserves a<br />
                <span className="au-cta-box__title-accent">culture of appreciation.</span>
              </h2>
              <p className="au-cta-box__sub">
                Thousands of meaningful moments happen inside organizations every day. WorkKudo makes sure none of them go unnoticed.
              </p>
              <div className="au-cta-box__actions">
                <a href="https://workkudo.ai/signin" className="au-btn au-btn--primary">
                  Start a Board Today
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/pricing" className="au-btn au-btn--ghost-light">See Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
