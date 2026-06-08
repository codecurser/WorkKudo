import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './FeaturePage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';

/* ── animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.25, 1, 0.5, 1] } }),
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.6, delay: d, ease: [0.34, 1.56, 0.64, 1] } }),
};

/* ════════════════════════════════════
   HERO
════════════════════════════════════ */
function Hero({ data }) {
  return (
    <section className="fp-hero">
      <div className="fp-hero-bg" aria-hidden="true">
        <div className="fp-blob fp-blob--1" />
        <div className="fp-blob fp-blob--2" />
        <div className="fp-blob fp-blob--3" />
      </div>

      <div className="fp-container fp-hero-inner">
        <div className="fp-hero-content">
          <motion.div className="fp-hero-badge"
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>{data.icon}</span>
            {data.category}
          </motion.div>

          <motion.h1 className="fp-hero-title"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            {data.heroTitle}
          </motion.h1>

          <motion.p className="fp-hero-sub"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            {data.heroDesc}
          </motion.p>

          <motion.div className="fp-hero-ctas"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <a href="#create" className="fp-btn fp-btn--primary">
              {data.ctaPrimary}
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="fp-btn fp-btn--ghost">{data.ctaSecondary}</a>
          </motion.div>
        </div>

        <motion.div className="fp-hero-visual"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="fp-hero-card">
            <div className="fp-hero-card-header">
              <div className="fp-dots"><span /><span /><span /></div>
              <span className="fp-hero-card-title">WorkKudo — {data.category}</span>
            </div>
            <div className="fp-hero-card-body">
              {data.heroCardContent}
            </div>
          </div>

          {data.heroChips?.map((chip, i) => (
            <motion.div key={i} className={`fp-chip fp-chip--${i}`}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
            >{chip}</motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   PROBLEM SECTION
════════════════════════════════════ */
function ProblemSection({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="fp-problem" ref={ref}>
      <div className="fp-container fp-problem-inner">
        <div className="fp-problem-content">
          <motion.h2 className="fp-section-title"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >{data.problemTitle}</motion.h2>
          <motion.p className="fp-section-text"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          >{data.problemDesc}</motion.p>
          <motion.p className="fp-section-text"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.18}
          >{data.problemDesc2}</motion.p>

          <motion.div className="fp-problem-points"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.25}
          >
            {data.problemPoints.map((pt, i) => (
              <div key={i} className="fp-problem-point">
                <span className="fp-problem-dot" style={{ background: 'var(--orange)' }}>{i + 1}</span>
                <span>{pt}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="fp-problem-visual"
          variants={scaleIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
        >
          {data.problemIllustration}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   FEATURE DEEP DIVE
════════════════════════════════════ */
function DeepDive({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="fp-deepdive" ref={ref}>
      <div className="fp-container">
        <div className="fp-section-header">
          <motion.h2 className="fp-section-title"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >{data.deepDiveTitle}</motion.h2>
          <motion.p className="fp-section-sub"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          >{data.deepDiveDesc}</motion.p>
        </div>

        <div className="fp-deepdive-grid">
          {data.deepDiveFeatures.map((f, i) => (
            <motion.div key={i} className="fp-feature-card"
              variants={scaleIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1 + i * 0.08}
              whileHover={{ y: -6 }}
            >
              <div className="fp-feature-card-icon">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   HOW IT WORKS
════════════════════════════════════ */
function HowItWorks({ data }) {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="fp-how" ref={ref} id="how-it-works">
      <div className="fp-container">
        <div className="fp-section-header">
          <motion.h2 className="fp-section-title"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >How It Works</motion.h2>
        </div>

        <div className="fp-how-layout">
          <div className="fp-how-steps">
            {data.howItWorks.map((step, i) => (
              <motion.div key={i}
                className={`fp-how-step ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1 + i * 0.1}
              >
                <div className="fp-how-num-col">
                  <span className="fp-how-num">{step.n}</span>
                  {i < data.howItWorks.length - 1 && <span className="fp-how-line" />}
                </div>
                <div className="fp-how-body">
                  <div className="fp-how-header">
                    <span className="fp-how-icon">{step.icon}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="fp-how-panel"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
          >
            <AnimatePresence mode="wait">
              <motion.div key={active} className="fp-how-panel-inner"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35 }}
              >
                <div className="fp-how-panel-icon">{data.howItWorks[active].icon}</div>
                <h3>{data.howItWorks[active].title}</h3>
                <p>{data.howItWorks[active].desc}</p>
                <div className="fp-how-dots">
                  {data.howItWorks.map((_, i) => (
                    <span key={i}
                      className={`fp-how-dot ${active === i ? 'active' : ''}`}
                      onClick={() => setActive(i)}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   USE CASES — Infinite marquee scroll
════════════════════════════════════ */
function UseCases({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Split use cases into two rows for dual-direction scroll
  const half = Math.ceil(data.useCases.length / 2);
  const row1 = data.useCases.slice(0, half);
  const row2 = data.useCases.slice(half);

  return (
    <section className="fp-usecases" ref={ref}>
      <div className="fp-container">
        <div className="fp-section-header">
          <motion.h2 className="fp-section-title"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >Use Cases</motion.h2>
          <motion.p className="fp-section-sub"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          >See how organizations put <span style={{ color: 'var(--orange)', fontWeight: 700 }}>{data.category}</span> to work.</motion.p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="fp-marquee-wrap">
        <div className="fp-marquee fp-marquee--left">
          {[...row1, ...row1, ...row1].map((uc, i) => (
            <div key={i} className="fp-marquee-card">
              <span className="fp-marquee-icon">{uc.icon}</span>
              <div>
                <h4>{uc.title}</h4>
                <p>{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="fp-marquee-wrap" style={{ marginTop: 16 }}>
        <div className="fp-marquee fp-marquee--right">
          {[...row2, ...row2, ...row2].map((uc, i) => (
            <div key={i} className="fp-marquee-card">
              <span className="fp-marquee-icon">{uc.icon}</span>
              <div>
                <h4>{uc.title}</h4>
                <p>{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   VISUAL SHOWCASE — Compact abstract grid
════════════════════════════════════ */
function Showcase({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="fp-showcase" ref={ref}>
      <div className="fp-container">
        <div className="fp-section-header">
          <motion.h2 className="fp-section-title"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >See It In Action</motion.h2>
        </div>

        <div className="fp-showcase-grid">
          {data.showcase.map((item, i) => (
            <motion.div
              key={i}
              className={`fp-sc-card ${item.size === 'large' ? 'fp-sc-card--large' : ''}`}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.08 + i * 0.09}
              whileHover={{ y: -5, boxShadow: '0 18px 44px rgba(255,107,44,0.12)' }}
            >
              <div className="fp-sc-card-inner" style={{ background: item.bg || 'var(--orange-50)' }}>
                <div className="fp-sc-icon-wrap">
                  <span className="fp-sc-emoji">{item.icon}</span>
                </div>
                <div className="fp-sc-content">
                  <span className="fp-sc-label">{item.label}</span>
                  {item.desc && <p className="fp-sc-desc">{item.desc}</p>}
                  {item.tags && (
                    <div className="fp-sc-tags">
                      {item.tags.map(t => (
                        <span key={t}>{t}</span>
                      ))}
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
   BENEFITS
════════════════════════════════════ */
function Benefits({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="fp-benefits" ref={ref}>
      <div className="fp-container">
        <div className="fp-section-header">
          <motion.h2 className="fp-section-title"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          >Why It Matters</motion.h2>
        </div>

        <div className="fp-benefits-grid">
          {data.benefits.map((b, i) => (
            <motion.div key={i} className="fp-benefit-card"
              variants={scaleIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.08 + i * 0.08}
              whileHover={{ y: -6, boxShadow: `0 18px 44px rgba(26,43,74,0.1)` }}
            >
              <motion.span className="fp-benefit-icon"
                whileHover={{ scale: 1.2, rotate: -8 }}
                transition={{ type: 'spring', stiffness: 260 }}
              >{b.icon}</motion.span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
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
    <section className="fp-cta" ref={ref}>
      <div className="fp-container fp-cta-inner">
        <motion.h2 className="fp-cta-title"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
        >{data.ctaHeadline}</motion.h2>
        <motion.p className="fp-cta-sub"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
        >{data.ctaDesc}</motion.p>
        <motion.div className="fp-cta-actions"
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
        >
          <motion.a href="#create" className="fp-btn fp-btn--cta-primary"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
          >{data.ctaPrimary}</motion.a>
          <motion.a href="#create" className="fp-btn fp-btn--cta-ghost"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
          >{data.ctaSecondary}</motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════
   ROOT FEATURE PAGE
════════════════════════════════════ */
export default function FeaturePage({ data }) {
  return (
    <div className="feature-page">
      <Navbar />
      <Hero data={data} />
      <ProblemSection data={data} />
      <DeepDive data={data} />
      <HowItWorks data={data} />
      <UseCases data={data} />
      <Showcase data={data} />
      <Benefits data={data} />
      <FAQ
        title={data.faqTitle}
        subtitle={data.faqSubtitle}
        data={data.faq}
      />
      <FinalCTA data={data} />
      <Footer />
    </div>
  );
}
