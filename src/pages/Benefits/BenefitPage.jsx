import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
  useSpring,
} from 'framer-motion';
import './BenefitPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';

/* ─── Shared motion config ─── */
const ease = [0.25, 1, 0.5, 1];
const spring = { type: 'spring', stiffness: 280, damping: 24 };

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.72, delay: d, ease },
  }),
};
const fadeLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.68, delay: d, ease },
  }),
};
const fadeRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.68, delay: d, ease },
  }),
};
const popIn = {
  hidden:  { opacity: 0, scale: 0.82 },
  visible: (d = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.6, delay: d, ease: [0.34, 1.56, 0.64, 1] },
  }),
};

/* ════════════════════════════════════
   HERO
════════════════════════════════════ */
function Hero({ data }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y   = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opc = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="bp-hero" ref={containerRef}>
      {/* layered background */}
      <div className="bp-hero-bg" aria-hidden="true">
        <motion.div className="bp-orb bp-orb--1" style={{ y }} />
        <motion.div className="bp-orb bp-orb--2" />
        <motion.div className="bp-orb bp-orb--3" />
        <div className="bp-grid-overlay" />
      </div>

      <motion.div className="bp-container bp-hero-inner" style={{ opacity: opc }}>
        {/* Left content */}
        <div className="bp-hero-text">
          <motion.div className="bp-eyebrow"
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="bp-eyebrow-dot" />
            <span>{data.icon}</span>
            {data.category}
          </motion.div>

          <motion.h1 className="bp-hero-h1"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
          >
            {data.heroTitle}
          </motion.h1>

          <motion.p className="bp-hero-desc"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.2, ease }}
          >
            {data.heroDesc}
          </motion.p>

          <motion.div className="bp-hero-actions"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease }}
          >
            <motion.a href="#opportunity" className="bp-btn bp-btn--primary"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            >
              {data.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a href="#how-workkudo-helps" className="bp-btn bp-btn--outline"
              whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}
            >
              {data.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* stat chips */}
          {data.heroStats && (
            <motion.div className="bp-hero-stats"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {data.heroStats.map((s, i) => (
                <motion.div key={i} className="bp-stat-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.1, ...spring }}
                >
                  <span className="bp-stat-icon">{s.icon}</span>
                  <div>
                    <div className="bp-stat-label">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Right — card stack illustration */}
        <motion.div className="bp-hero-visual"
          initial={{ opacity: 0, y: 32, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
        >
          <div className="bp-card-stack">
            {/* macOS chrome card */}
            <motion.div className="bp-mac-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="bp-mac-bar">
                <span className="bp-mac-dot" style={{ background: '#FF5F57' }} />
                <span className="bp-mac-dot" style={{ background: '#FEBC2E' }} />
                <span className="bp-mac-dot" style={{ background: '#28C840' }} />
                <span className="bp-mac-title">WorkKudo — {data.category}</span>
              </div>
              <div className="bp-mac-body">
                <div className="bp-hero-notes">
                  {data.heroCardContent}
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            {data.heroChips?.map((chip, i) => (
              <motion.div key={i} className={`bp-float-badge bp-float-badge--${i}`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, y: [0, i % 2 === 0 ? -7 : 7, 0] }}
                transition={{
                  opacity: { delay: 0.6 + i * 0.15, duration: 0.4 },
                  scale: { delay: 0.6 + i * 0.15, ...spring },
                  y: { duration: 3.5 + i * 0.6, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' },
                }}
              >{chip}</motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="bp-hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 80 Q360 0 720 40 Q1080 80 1440 20 L1440 80 Z" fill="var(--bg)"/>
        </svg>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   OPPORTUNITY — Why It Matters
════════════════════════════════════ */
function Opportunity({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bp-opportunity" ref={ref} id="opportunity">
      <div className="bp-container bp-split">
        {/* Left text */}
        <div className="bp-split-content">
          <motion.div className="bp-label-pill"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >The Challenge</motion.div>

          <motion.h2 className="bp-h2"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.08}
          >{data.problemTitle}</motion.h2>

          <motion.p className="bp-body-text"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.16}
          >{data.problemDesc}</motion.p>

          <motion.p className="bp-body-text"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.22}
          >{data.problemDesc2}</motion.p>

          <motion.div className="bp-checklist"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.28}
          >
            {data.problemPoints.map((pt, i) => (
              <motion.div key={i} className="bp-check-item"
                variants={fadeLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3 + i * 0.1}
              >
                <span className="bp-check-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{pt}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right illustration */}
        <motion.div className="bp-split-visual"
          variants={fadeRight} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
        >
          <div className="bp-illus-frame">
            {data.problemIllustration}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   HOW WORKKUDO HELPS — Feature cards
════════════════════════════════════ */
function HowHelps({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bp-helps" ref={ref} id="how-workkudo-helps">
      <div className="bp-container">
        <div className="bp-section-header">
          <motion.div className="bp-label-pill"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >How WorkKudo Helps</motion.div>
          <motion.h2 className="bp-h2 bp-center"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.08}
          >{data.deepDiveTitle}</motion.h2>
          <motion.p className="bp-section-sub"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.16}
          >{data.deepDiveDesc}</motion.p>
        </div>

        <div className="bp-helps-grid">
          {data.deepDiveFeatures.map((f, i) => (
            <motion.div key={i} className={`bp-help-card ${hovered === i ? 'bp-help-card--hovered' : ''}`}
              variants={popIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1 + i * 0.07}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <div className="bp-help-card-top">
                <motion.div className="bp-help-icon"
                  animate={hovered === i ? { scale: 1.15, rotate: -6 } : { scale: 1, rotate: 0 }}
                  transition={spring}
                >{f.icon}</motion.div>
                <div className="bp-help-num">{String(i + 1).padStart(2, '0')}</div>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <motion.div className="bp-help-bar"
                initial={{ scaleX: 0 }}
                animate={hovered === i ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.3, ease }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   HOW IT WORKS — Horizontal timeline
════════════════════════════════════ */
function HowItWorks({ data }) {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setActive(p => (p + 1) % data.howItWorks.length), 3500);
    return () => clearInterval(t);
  }, [inView, data.howItWorks.length]);

  return (
    <section className="bp-hiw" ref={ref} id="how-it-works">
      <div className="bp-container">
        <div className="bp-section-header">
          <motion.div className="bp-label-pill"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >Process</motion.div>
          <motion.h2 className="bp-h2 bp-center"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.08}
          >How It Works</motion.h2>
        </div>

        {/* Step tabs */}
        <div className="bp-hiw-tabs">
          {data.howItWorks.map((step, i) => (
            <motion.button key={i}
              className={`bp-hiw-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.12 + i * 0.08}
            >
              <span className="bp-hiw-tab-num">{step.n}</span>
              <span className="bp-hiw-tab-title">{step.title}</span>
              {active === i && (
                <motion.div className="bp-hiw-tab-underline" layoutId="tab-underline" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Active step panel */}
        <AnimatePresence mode="wait">
          <motion.div key={active} className="bp-hiw-panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="bp-hiw-panel-left">
              <div className="bp-hiw-big-icon">{data.howItWorks[active].icon}</div>
              <span className="bp-hiw-big-num">{data.howItWorks[active].n}</span>
            </div>
            <div className="bp-hiw-panel-right">
              <h3>{data.howItWorks[active].title}</h3>
              <p>{data.howItWorks[active].desc}</p>
              <div className="bp-hiw-progress">
                {data.howItWorks.map((_, i) => (
                  <motion.span key={i} className={`bp-hiw-dot ${active === i ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                    animate={active === i ? { scale: 1.5 } : { scale: 1 }}
                    transition={spring}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   USE CASES — Marquee
════════════════════════════════════ */
function UseCases({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const half = Math.ceil(data.useCases.length / 2);
  const row1 = data.useCases.slice(0, half);
  const row2 = data.useCases.slice(half);

  return (
    <section className="bp-usecases" ref={ref}>
      <div className="bp-container">
        <div className="bp-section-header">
          <motion.div className="bp-label-pill"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >Use Cases</motion.div>
          <motion.h2 className="bp-h2 bp-center"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.08}
          >
            Where <span className="bp-orange">{data.category}</span> Creates Impact
          </motion.h2>
        </div>
      </div>

      {[row1, row2].map((row, ri) => (
        <div key={ri} className="bp-marquee-track" style={{ marginBottom: ri === 0 ? 16 : 0 }}>
          <div className={`bp-marquee-inner ${ri === 1 ? 'bp-marquee-inner--reverse' : ''}`}>
            {[...row, ...row, ...row].map((uc, i) => (
              <div key={i} className="bp-use-card">
                <div className="bp-use-icon">{uc.icon}</div>
                <div>
                  <h4>{uc.title}</h4>
                  <p>{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ════════════════════════════════════
   SHOWCASE — Abstract bento
════════════════════════════════════ */
function Showcase({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bp-showcase" ref={ref}>
      <div className="bp-container">
        <div className="bp-section-header">
          <motion.div className="bp-label-pill"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >Experience</motion.div>
          <motion.h2 className="bp-h2 bp-center"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.08}
          >See It In Action</motion.h2>
        </div>

        <div className="bp-showcase-bento">
          {data.showcase.map((item, i) => (
            <motion.div key={i}
              className={`bp-sc-tile ${item.size === 'large' ? 'bp-sc-tile--large' : ''}`}
              variants={popIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.08 + i * 0.09}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="bp-sc-tile-inner" style={{ background: item.bg || 'var(--orange-50)' }}>
                <motion.div className="bp-sc-tile-icon"
                  whileHover={{ scale: 1.12, rotate: -8 }} transition={spring}
                >{item.icon}</motion.div>
                <div className="bp-sc-tile-body">
                  <strong>{item.label}</strong>
                  {item.desc && <p>{item.desc}</p>}
                  {item.tags && (
                    <div className="bp-sc-tile-tags">
                      {item.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   BENEFITS — Alternating rows
════════════════════════════════════ */
function Benefits({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bp-benefits" ref={ref}>
      <div className="bp-container">
        <div className="bp-section-header">
          <motion.div className="bp-label-pill"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >Benefits</motion.div>
          <motion.h2 className="bp-h2 bp-center"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.08}
          >Why It Matters</motion.h2>
        </div>

        <div className="bp-benefits-grid">
          {data.benefits.map((b, i) => (
            <motion.div key={i} className="bp-benefit-card"
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1 + i * 0.07}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              <motion.div className="bp-benefit-icon-wrap"
                whileHover={{ scale: 1.15, rotate: -8 }} transition={spring}
              >
                <span>{b.icon}</span>
              </motion.div>
              <div className="bp-benefit-body">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   FINAL CTA
════════════════════════════════════ */
function FinalCTA({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bp-cta" ref={ref}>
      {/* ambient orbs */}
      <div className="bp-cta-orb bp-cta-orb--1" aria-hidden="true" />
      <div className="bp-cta-orb bp-cta-orb--2" aria-hidden="true" />

      <div className="bp-container bp-cta-inner">
        <motion.div className="bp-cta-icon-row"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
        >
          <span>{data.icon}</span>
        </motion.div>

        <motion.h2 className="bp-cta-h2"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
        >{data.ctaHeadline}</motion.h2>

        <motion.p className="bp-cta-sub"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.18}
        >{data.ctaDesc}</motion.p>

        <motion.div className="bp-cta-actions"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.26}
        >
          <motion.a href="#create" className="bp-btn bp-btn--cta"
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
          >
            {data.ctaPrimary}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          <motion.a href="#how-it-works" className="bp-btn bp-btn--cta-ghost"
            whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}
          >{data.ctaSecondary}</motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   PAGE ROOT
════════════════════════════════════ */
export default function BenefitPage({ data }) {
  return (
    <div className="benefit-page">
      <Navbar />
      <Hero         data={data} />
      <Opportunity  data={data} />
      <HowHelps     data={data} />
      <HowItWorks   data={data} />
      <UseCases     data={data} />
      <Showcase     data={data} />
      <Benefits     data={data} />
      <FAQ title={data.faqTitle} subtitle={data.faqSubtitle} data={data.faq} />
      <FinalCTA     data={data} />
      <Footer />
    </div>
  );
}
