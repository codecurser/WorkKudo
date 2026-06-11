import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import './Programs.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';

/* ─────────────────────────────────────────────
   SHARED VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.25, 1, 0.5, 1] } }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (d = 0) => ({ opacity: 1, transition: { duration: 0.6, delay: d } }),
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.6, delay: d, ease: [0.34, 1.56, 0.64, 1] } }),
};

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
  };

  const notes = [
    { text: '"You make every day better 🌟"', from: 'Alex R.', color: '#FF6B2C', bg: '#FFF3EE', delay: 0.2 },
    { text: '"Congrats on your milestone! 🎉"', from: 'Maya S.', color: '#A78BFA', bg: '#F5F3FF', delay: 0.4 },
    { text: '"So proud of everything you do 💚"', from: 'Sam K.', color: '#34D399', bg: '#ECFDF5', delay: 0.6 },
    { text: '"Your leadership inspires us all ⭐"', from: 'Priya M.', color: '#F59E0B', bg: '#FFFBEB', delay: 0.8 },
  ];

  

  return (
    <section className="pg-hero" onMouseMove={handleMouseMove}>
      {/* Animated background blobs */}
      <div className="pg-hero-bg" aria-hidden="true">
        <motion.div className="pg-blob pg-blob--1" style={{ x: springX, y: springY }} />
        <motion.div className="pg-blob pg-blob--2" style={{ x: useTransform(springX, v => -v), y: useTransform(springY, v => -v) }} />
        <motion.div className="pg-blob pg-blob--3" />
        {/* Confetti dots */}
        {[...Array(22)].map((_, i) => (
          <motion.div
            key={i}
            className="pg-confetti"
            style={{ left: `${4 + i * 4.5}%`, top: `${10 + (i % 6) * 14}%` }}
            animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="pg-container pg-hero-inner">
        {/* LEFT — Text */}
        <div className="pg-hero-content">
          <motion.h1 className="pg-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
            Run Meaningful Programs That
            <span className="pg-gradient-text"> Bring Your People Together</span>
          </motion.h1>

          <motion.p className="pg-hero-sub" variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
            Create company-wide celebrations, recognition campaigns, and culture initiatives that
            strengthen workplace connections and encourage participation across your organization.
          </motion.p>

          <motion.div className="pg-hero-ctas" variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
            <button className="pg-btn pg-btn--primary">
              Create a Program
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="pg-btn pg-btn--ghost">Explore Programs</button>
          </motion.div>

        </div>

        {/* RIGHT — Illustration */}
        <motion.div className="pg-hero-visual" variants={fadeIn} initial="hidden" animate="visible" custom={0.15}>
          <div className="pg-board-wrapper">
            {/* Main board */}
            <motion.div
              className="pg-board"
              style={{ rotateX: useTransform(springY, v => -v * 0.4), rotateY: useTransform(springX, v => v * 0.4) }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="pg-board-header">
                <div className="pg-board-dots"><span /><span /><span /></div>
                <span className="pg-board-title">WorkKudo Board — Team Appreciation</span>
              </div>
              <div className="pg-board-body">
                {notes.map((n, i) => (
                  <motion.div
                    key={i}
                    className="pg-note"
                    style={{ borderLeftColor: n.color, background: n.bg }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: n.delay + 0.5, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <span className="pg-note-av" style={{ background: n.color }}>{n.from[0]}</span>
                    <div>
                      <p className="pg-note-text">{n.text}</p>
                      <span className="pg-note-from">{n.from}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="pg-board-footer">
                <div className="pg-board-avs">
                  {['#FF6B2C', '#A78BFA', '#34D399', '#F59E0B', '#3B82F6'].map((c, i) => (
                    <span key={i} className="pg-board-av" style={{ background: c }}>
                      {['A', 'M', 'S', 'P', 'J'][i]}
                    </span>
                  ))}
                  <span className="pg-board-av-more">+9</span>
                </div>
                <span className="pg-board-signed">14 teammates contributed</span>
              </div>
            </motion.div>

            {/* Floating badges around the board */}
            {floatingBadges.map((b, i) => (
              <motion.div
                key={i}
                className="pg-float-chip"
                style={{ x: b.x, y: b.y }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [b.y, b.y - 8, b.y] }}
                transition={{ opacity: { delay: b.delay }, scale: { delay: b.delay }, y: { duration: 3, repeat: Infinity, delay: b.delay } }}
              >{b.text}</motion.div>
            ))}

            {/* Live status pill */}
            <motion.div
              className="pg-live-pill"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="pg-live-dot" />Program Active
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   OVERVIEW SECTION
───────────────────────────────────────────── */
function OverviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pg-overview" ref={ref}>
      <div className="pg-container pg-overview-inner">
        {/* Illustration */}
        <motion.div
          className="pg-overview-visual"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <OverviewIllustration />
        </motion.div>

        {/* Content */}
        <div className="pg-overview-content">
          <motion.h2 className="pg-section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}>
            Built for Every<br />Workplace Initiative
          </motion.h2>
          <motion.p className="pg-overview-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}>
            WorkKudo helps organizations create engaging experiences that bring employees together,
            celebrate achievements, and strengthen company culture.
          </motion.p>
          <motion.p className="pg-overview-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.35}>
            Whether you're organizing celebrations, recognition campaigns, or inclusion initiatives,
            WorkKudo provides a collaborative space where employees can participate, contribute, and feel genuinely appreciated.
          </motion.p>
          <motion.div className="pg-overview-chips" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.4}>
            {['Celebrations', 'Recognition', 'Culture Drives', 'Onboarding', 'Milestones', 'Appreciation'].map((chip, i) => (
              <motion.span
                key={chip}
                className="pg-chip"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ delay: 0.45 + i * 0.06 }}
              >{chip}</motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OverviewIllustration() {
  const items = [
    { label: '🎉 Team Celebration', active: true },
    { label: '🏆 Kudos Drive', active: false },
    { label: '🌎 Inclusion Week', active: false },
    { label: '🎂 Birthday Board', active: false },
  ];
  return (
    <div className="pg-overview-illus">
      <div className="pg-ov-sidebar">
        <div className="pg-ov-sidebar-title">Programs</div>
        {items.map((it, i) => (
          <motion.div
            key={i}
            className={`pg-ov-item ${it.active ? 'active' : ''}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            viewport={{ once: true }}
          >{it.label}</motion.div>
        ))}
      </div>
      <div className="pg-ov-main">
        <div className="pg-ov-board-title">Team Celebration</div>
        <div className="pg-ov-board-meta">HR · 12 contributors</div>
        {[
          { name: 'Alex R.', msg: '"You make our team shine every day 🌟"', color: '#FF6B2C', bg: '#FFF3EE' },
          { name: 'Maya S.', msg: '"Grateful for you on the team! 💜"', color: '#A78BFA', bg: '#F5F3FF' },
          { name: 'Sam K.', msg: '"Your energy is contagious 🎉"', color: '#34D399', bg: '#ECFDF5' },
        ].map((n, i) => (
          <motion.div
            key={i}
            className="pg-ov-note"
            style={{ background: n.bg, borderLeft: `3px solid ${n.color}` }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            viewport={{ once: true }}
          >
            <span className="pg-ov-av" style={{ background: n.color }}>{n.name[0]}</span>
            <div>
              <strong>{n.name}</strong>
              <p>{n.msg}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CELEBRATIONS SECTION
───────────────────────────────────────────── */
function CelebrationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const features = ['🎂 Birthdays', '🚀 Promotions', '🎊 Work Anniversaries', '👋 Farewells', '🏢 Company Milestones', '🥳 Team Successes'];

  const cards = [
    { emoji: '🎂', tag: 'Birthday', title: 'Happy Birthday, Sarah!', msg: 'Wishing you the happiest of birthdays! Thank you for bringing so much energy and passion to the product team every single day.', author: 'The Whole Team', role: 'Company-wide', accent: '#FF6B2C' },
    { emoji: '🚀', tag: 'Promotion', title: 'Congrats on Your Promotion!', msg: 'So well-deserved! Your leadership during the Q1 launch was outstanding. Excited to see you thrive in your new Senior Manager role.', author: 'Engineering Team', role: 'VP of Engineering', accent: '#A78BFA' },
    { emoji: '🎊', tag: 'Anniversary', title: 'Happy 5-Year Work Anniversary!', msg: 'Five years of absolute dedication and building our team to success. We are incredibly lucky to have you. Here is to five more!', author: 'HR & Leadership', role: 'People Team', accent: '#34D399' },
  ];

  return (
    <section className="pg-feature-section pg-celebrations" ref={ref} id="celebrations">
      <div className="pg-container pg-feature-inner">
        {/* Left content */}
        <div className="pg-feature-content">
          <motion.h2 className="pg-feature-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}>
            Turn Workplace Moments Into<br />
            <span style={{ color: '#FF6B2C' }}>Shared Celebrations</span>
          </motion.h2>
          <motion.p className="pg-feature-desc" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}>
            Whether it's a birthday, promotion, farewell, retirement, work anniversary, project success,
            or company milestone — every important moment deserves recognition.
          </motion.p>
          <motion.p className="pg-feature-desc" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.25}>
            WorkKudo helps teams create meaningful celebration experiences through collaborative boards,
            messages, photos, memories, and appreciation.
          </motion.p>
          <motion.div className="pg-feature-tags" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}>
            {features.map((f, i) => (
              <motion.span key={f} className="pg-feature-tag pg-feature-tag--celebrations"
                initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }} whileHover={{ scale: 1.06, y: -2 }}
              >{f}</motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right — Award-style board mockup */}
        <motion.div className="pg-board-mockup-wrap"
          initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 1, 0.5, 1] }}>
          <div className="pg-aw-board">
            <div className="pg-aw-board__header">
              <div className="pg-board-dots"><span /><span /><span /></div>
              <span className="pg-aw-board__title">✨ Celebrations Board</span>
            </div>
            <div className="pg-aw-board__cards">
              {cards.map((card, i) => (
                <motion.div key={i} className="pg-aw-card"
                  initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.14, ease: [0.25, 1, 0.5, 1] }}>
                  <div className="pg-aw-card__header">
                    <span className="pg-aw-card__emoji">{card.emoji}</span>
                    <span className="pg-aw-card__tag" style={{ background: `${card.accent}18`, color: card.accent }}>{card.tag}</span>
                  </div>
                  <h4 className="pg-aw-card__title">{card.title}</h4>
                  <p className="pg-aw-card__msg">"{card.msg}"</p>
                  <div className="pg-aw-card__footer">
                    <div className="pg-aw-card__av" style={{ background: card.accent }}>{card.author[0]}</div>
                    <div>
                      <strong>{card.author}</strong>
                      <span>{card.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TRANSITION: CELEBRATIONS → RECOGNITION
───────────────────────────────────────────── */
function TransitionCelebToRecog() {
  return null;
}

/* ─────────────────────────────────────────────
   RECOGNITION SECTION
───────────────────────────────────────────── */
function RecognitionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const features = ['⭐ Peer Recognition', '💜 Appreciation Walls', '🏅 Achievement Highlights', '👏 Employee Spotlights', '🚀 Team Wins', '🌟 Culture Champions'];

  const cards = [
    { emoji: '⭐', tag: 'Top Performer', title: 'Excellence in Q1 Delivery', msg: 'Kudos to Jordan for shipping 3 features ahead of schedule. Your dedication and technical leadership set the bar for the whole team.', author: 'Jordan L.', role: 'Engineering Lead', accent: '#F59E0B' },
    { emoji: '🔥', tag: 'Innovator', title: 'Innovation in Action', msg: 'Priya\'s refactoring of the backend API reduced latency by 45%. This perfectly embodies our core value of technical innovation.', author: 'Priya M.', role: 'Senior Engineer', accent: '#FF6B2C' },
    { emoji: '❤️', tag: 'Culture Champ', title: 'Kudos from the Team', msg: 'You set the bar for everyone around you. Your kindness, positivity, and commitment to collaboration make this a better place to work.', author: 'The Whole Team', role: 'Company-wide', accent: '#A78BFA' },
  ];

  return (
    <section className="pg-feature-section pg-recognition" ref={ref} id="recognition">
      <div className="pg-container pg-feature-inner pg-feature-inner--reverse">
        {/* Left — Award-style board mockup */}
        <motion.div className="pg-board-mockup-wrap pg-board-mockup-wrap--reverse"
          initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 1, 0.5, 1] }}>
          <div className="pg-aw-board pg-aw-board--reverse">
            <div className="pg-aw-board__header">
              <div className="pg-board-dots"><span /><span /><span /></div>
              <span className="pg-aw-board__title">🏆 Recognition Wall</span>
            </div>
            <div className="pg-aw-board__cards">
              {cards.map((card, i) => (
                <motion.div key={i} className="pg-aw-card"
                  initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.14, ease: [0.25, 1, 0.5, 1] }}>
                  <div className="pg-aw-card__header">
                    <span className="pg-aw-card__emoji">{card.emoji}</span>
                    <span className="pg-aw-card__tag" style={{ background: `${card.accent}18`, color: card.accent }}>{card.tag}</span>
                  </div>
                  <h4 className="pg-aw-card__title">{card.title}</h4>
                  <p className="pg-aw-card__msg">"{card.msg}"</p>
                  <div className="pg-aw-card__footer">
                    <div className="pg-aw-card__av" style={{ background: card.accent }}>{card.author[0]}</div>
                    <div>
                      <strong>{card.author}</strong>
                      <span>{card.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <div className="pg-feature-content">
          <motion.h2 className="pg-feature-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}>
            Build a Culture Where<br />
            <span style={{ color: '#F59E0B' }}>Great Work Never Goes Unnoticed</span>
          </motion.h2>
          <motion.p className="pg-feature-desc" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}>
            Recognition helps employees feel valued, engaged, and connected. WorkKudo enables
            organizations to build appreciation into everyday work through kudos, recognition boards,
            employee spotlights, achievement celebrations, and team acknowledgements.
          </motion.p>
          <motion.p className="pg-feature-desc" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.25}>
            Create a culture where contributions are consistently celebrated.
          </motion.p>
          <motion.div className="pg-feature-tags" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}>
            {features.map((f, i) => (
              <motion.span key={f} className="pg-feature-tag pg-feature-tag--recognition"
                initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }} whileHover={{ scale: 1.06, y: -2 }}
              >{f}</motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TRANSITION: RECOGNITION → CULTURE
───────────────────────────────────────────── */
function TransitionRecogToCulture() {
  return null;
}

/* ─────────────────────────────────────────────
   CULTURE & INCLUSION SECTION
───────────────────────────────────────────── */
function CultureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const features = ['🤝 Belonging', '🌍 Diversity', '🎓 Onboarding', '💚 Employee Wellbeing', '👥 Community Building', '🌐 Distributed Teams'];

  const cards = [
    { emoji: '🤝', tag: 'Belonging', title: 'Welcome to the Team, Alex!', msg: 'We are so glad you are here. Your unique perspective and skills make our team stronger. Can\'t wait to see all the amazing things you will accomplish with us.', author: 'The Whole Team', role: 'Company-wide', accent: '#34D399' },
    { emoji: '🌍', tag: 'Inclusion', title: 'Celebrating Our Diversity', msg: 'Every voice here matters. Thank you for bringing your authentic self to work every day and making this a place where everyone truly belongs.', author: 'People & Culture', role: 'HR Team', accent: '#3B82F6' },
    { emoji: '💚', tag: 'Community', title: 'Your Perspective Makes Us Stronger', msg: 'Our team thrives because of people like you who show up with empathy, curiosity, and kindness. We are grateful to build this community together.', author: 'Jordan Lee', role: 'Culture Lead', accent: '#A78BFA' },
  ];

  return (
    <section className="pg-feature-section pg-culture" ref={ref} id="culture">
      <div className="pg-container pg-feature-inner">
        {/* Left content */}
        <div className="pg-feature-content">
          <motion.h2 className="pg-feature-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}>
            Create a Workplace<br />
            <span style={{ color: '#34D399' }}>Where Everyone Belongs</span>
          </motion.h2>
          <motion.p className="pg-feature-desc" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}>
            Strong workplace cultures are built through connection, belonging, and shared experiences.
            WorkKudo helps organizations create initiatives that celebrate diversity, strengthen relationships,
            support onboarding, and encourage participation across teams.
          </motion.p>
          <motion.p className="pg-feature-desc" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.25}>
            Create environments where everyone feels welcomed, represented, and valued.
          </motion.p>
          <motion.div className="pg-feature-tags" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}>
            {features.map((f, i) => (
              <motion.span key={f} className="pg-feature-tag pg-feature-tag--culture"
                initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }} whileHover={{ scale: 1.06, y: -2 }}
              >{f}</motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right — Award-style board mockup */}
        <motion.div className="pg-board-mockup-wrap"
          initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 1, 0.5, 1] }}>
          <div className="pg-aw-board">
            <div className="pg-aw-board__header">
              <div className="pg-board-dots"><span /><span /><span /></div>
              <span className="pg-aw-board__title">💚 Culture & Community Board</span>
            </div>
            <div className="pg-aw-board__cards">
              {cards.map((card, i) => (
                <motion.div key={i} className="pg-aw-card"
                  initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.14, ease: [0.25, 1, 0.5, 1] }}>
                  <div className="pg-aw-card__header">
                    <span className="pg-aw-card__emoji">{card.emoji}</span>
                    <span className="pg-aw-card__tag" style={{ background: `${card.accent}18`, color: card.accent }}>{card.tag}</span>
                  </div>
                  <h4 className="pg-aw-card__title">{card.title}</h4>
                  <p className="pg-aw-card__msg">"{card.msg}"</p>
                  <div className="pg-aw-card__footer">
                    <div className="pg-aw-card__av" style={{ background: card.accent }}>{card.author[0]}</div>
                    <div>
                      <strong>{card.author}</strong>
                      <span>{card.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────── */
function HowItWorks() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    { n: '01', icon: '✨', title: 'Create', desc: 'Launch a celebration, recognition initiative, or culture program in minutes. Choose a template or start from scratch.', color: '#FF6B2C' },
    { n: '02', icon: '📩', title: 'Invite', desc: 'Bring employees, teams, or entire departments together via a shareable link — no account needed.', color: '#A78BFA' },
    { n: '03', icon: '💬', title: 'Participate', desc: 'Contributors share appreciation, messages, photos, and support. Async-friendly so everyone joins on their own time.', color: '#34D399' },
    { n: '04', icon: '🎉', title: 'Celebrate', desc: 'Deliver a memorable experience — digitally, via Notion, or email — that employees will genuinely treasure.', color: '#F59E0B' },
  ];

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % steps.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="pg-how" ref={ref}>
      <div className="pg-container">
        <div className="pg-section-header">
          <motion.h2 className="pg-section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}>
            Four Steps to a<br />Meaningful Program
          </motion.h2>
        </div>

        <div className="pg-how-layout">
          <div className="pg-how-steps">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                className={`pg-how-step ${active === i ? 'active' : ''}`}
                style={{ '--step-c': s.color }}
                onClick={() => setActive(i)}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={0.15 + i * 0.1}
                whileHover={{ x: 4 }}
              >
                <div className="pg-how-num-col">
                  <motion.span
                    className="pg-how-num"
                    animate={active === i ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >{s.n}</motion.span>
                  {i < steps.length - 1 && <span className="pg-how-connector" />}
                </div>
                <div className="pg-how-body">
                  <div className="pg-how-step-header">
                    <span className="pg-how-icon">{s.icon}</span>
                    <h3>{s.title}</h3>
                  </div>
                  <p>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="pg-how-panel"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="pg-how-panel-inner"
                style={{ borderTopColor: steps[active].color }}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="pg-how-panel-icon"
                  animate={{ scale: [0.7, 1], rotate: [-10, 0] }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >{steps[active].icon}</motion.div>
                <h3 style={{ color: steps[active].color }}>{steps[active].title}</h3>
                <p>{steps[active].desc}</p>
                <div className="pg-how-dots">
                  {steps.map((_, i) => (
                    <motion.span
                      key={i}
                      className="pg-how-dot"
                      animate={{ scale: active === i ? 1.4 : 1, background: active === i ? steps[active].color : '#E5E7EB' }}
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

/* ─────────────────────────────────────────────
   WHY WORKKUDO
───────────────────────────────────────────── */
function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    { icon: '🙌', title: 'Encourage Participation', desc: 'Make it effortless for every employee to contribute and engage, regardless of role or location.' },
    { icon: '🏛️', title: 'Strengthen Culture', desc: 'Create consistent opportunities for appreciation, recognition, and authentic human connection.' },
    { icon: '🌍', title: 'Support Distributed Teams', desc: 'Enable full participation for remote, hybrid, and globally distributed workplaces without friction.' },
    { icon: '📸', title: 'Create Lasting Memories', desc: 'Preserve meaningful workplace moments that employees can revisit and share long after the day.' },
    { icon: '⚡', title: 'Simple to Launch', desc: 'Set up programs quickly with intuitive templates and minimal configuration — no IT required.' },
    { icon: '💼', title: 'Designed for Modern Teams', desc: 'Built for the realities of remote, hybrid, and in-office workplaces with async-first workflows.' },
  ];

  return (
    <section className="pg-why" ref={ref}>
      <div className="pg-container">
        <div className="pg-section-header">
          <motion.h2 className="pg-section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}>
            Why Organizations<br />Use WorkKudo
          </motion.h2>
        </div>

        <div className="pg-why-grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="pg-why-card"
              variants={scaleIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.1 + i * 0.08}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="pg-why-card__header">
                <motion.div
                  className="pg-why-icon"
                  whileHover={{ scale: 1.1, rotate: -7 }}
                  transition={{ type: 'spring', stiffness: 260 }}
                >{card.icon}</motion.div>
                <span className="pg-why-card__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VISUAL SHOWCASE — BENTO
───────────────────────────────────────────── */
function ShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pg-showcase" ref={ref}>
      <div className="pg-container">
        <div className="pg-section-header">
          <motion.h2 className="pg-section-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}>
            What WorkKudo<br />Programs Look Like
          </motion.h2>
          <motion.p className="pg-section-sub" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}>
            From celebration boards to recognition walls — a glimpse into the experiences you can create.
          </motion.p>
        </div>

        <div className="pg-bento">
          {/* Large — celebration board */}
          <motion.div
            className="pg-bento-item pg-bento-large"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.15}
            whileHover={{ scale: 1.01 }}
          >
            <div className="pg-bento-inner" style={{ background: '#FFF3EE', border: '1px solid rgba(255,107,44,0.15)' }}>
              <div className="pg-bento-board-header">
                <div className="pg-board-dots"><span /><span /><span /></div>
                <span>Celebration Board</span>
              </div>
              <div className="pg-bento-notes">
                {[
                  { t: '"You inspire us every single day 🎉"', av: 'A', c: '#FF6B2C', bg: '#FFF3EE' },
                  { t: '"Thank you for being incredible 💜"', av: 'M', c: '#A78BFA', bg: '#F5F3FF' },
                  { t: '"Cheers to an amazing milestone! 🌟"', av: 'S', c: '#34D399', bg: '#ECFDF5' },
                ].map((n, i) => (
                  <motion.div key={i} className="pg-bento-note" style={{ background: n.bg, borderLeft: `3px solid ${n.c}` }} whileHover={{ x: 4 }}>
                    <span style={{ background: n.c, color: 'white' }}>{n.av}</span>
                    <p>{n.t}</p>
                  </motion.div>
                ))}
              </div>
              <div className="pg-bento-footer">
                <span className="pg-bento-badge" style={{ background: '#FFF3EE', color: '#FF6B2C' }}>🎉 Celebration</span>
                <span>14 contributors</span>
              </div>
            </div>
          </motion.div>

          {/* Tall — recognition wall */}
          <motion.div
            className="pg-bento-item pg-bento-tall"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
            whileHover={{ scale: 1.01 }}
          >
            <div className="pg-bento-inner" style={{ background: '#F5F3FF', border: '1px solid rgba(167,139,250,0.2)' }}>
              <div className="pg-bento-label">🏆 Recognition Wall</div>
              <div className="pg-bento-badges-wrap">
                {['⭐ Top Performer', '🔥 Innovator', '💪 Team Player', '🧠 Problem Solver', '❤️ Culture Champ', '🚀 Go-Getter'].map((b, i) => (
                  <motion.span
                    key={i}
                    className="pg-bento-rbadge"
                    style={{ background: ['#FFF3EE','#F5F3FF','#ECFDF5','#FFFBEB','#FDF2F8','#ECFDF5'][i], color: ['#FF6B2C','#7C3AED','#059669','#D97706','#DB2777','#059669'][i] }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >{b}</motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small — appreciation */}
          <motion.div
            className="pg-bento-item pg-bento-small"
            variants={scaleIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.25}
            whileHover={{ scale: 1.04 }}
          >
            <div className="pg-bento-inner" style={{ background: '#ECFDF5', border: '1px solid rgba(52,211,153,0.2)' }}>
              <span className="pg-bento-emoji">💌</span>
              <div className="pg-bento-label">Appreciation Card</div>
              <p className="pg-bento-quote">"Your work matters and so do you."</p>
            </div>
          </motion.div>

          {/* Small — shoutout */}
          <motion.div
            className="pg-bento-item pg-bento-small"
            variants={scaleIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
            whileHover={{ scale: 1.04 }}
          >
            <div className="pg-bento-inner" style={{ background: '#FFFBEB', border: '1px solid rgba(245,158,11,0.2)' }}>
              <span className="pg-bento-emoji">🌟</span>
              <div className="pg-bento-label">Team Shout-out</div>
              <p className="pg-bento-quote">"Celebrating wins, big and small."</p>
            </div>
          </motion.div>

          {/* Medium — milestone */}
          <motion.div
            className="pg-bento-item pg-bento-medium"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
            whileHover={{ scale: 1.01 }}
          >
            <div className="pg-bento-inner" style={{ background: 'linear-gradient(135deg, #1A2B4A, #2D4070)', border: 'none' }}>
              <div className="pg-bento-milestone-row">
                <span>🎊</span>
                <div>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: '1rem' }}>Milestone Moment</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>Celebrate every achievement</div>
                </div>
              </div>
              <div className="pg-bento-milestone-tags">
                {['Work Anniversary', '5 Years', 'Team Win'].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Small — welcome */}
          <motion.div
            className="pg-bento-item pg-bento-small"
            variants={scaleIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.35}
            whileHover={{ scale: 1.04 }}
          >
            <div className="pg-bento-inner" style={{ background: '#EEF1F7', border: '1px solid rgba(26,43,74,0.1)' }}>
              <span className="pg-bento-emoji">🤝</span>
              <div className="pg-bento-label">Welcome Board</div>
              <p className="pg-bento-quote">"Start every journey with belonging."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WORKPLACE CULTURE SECTION
───────────────────────────────────────────── */
function WorkplaceCultureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pg-culture-dark" ref={ref}>
      <div className="pg-container pg-culture-dark-inner">
        <div className="pg-culture-dark-content">
          <motion.h2 className="pg-culture-dark-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}>
            Create Moments<br />That Matter
          </motion.h2>
          <motion.p className="pg-culture-dark-text" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}>
            Recognition and appreciation are most impactful when they become part of everyday workplace culture.
            WorkKudo helps organizations create experiences that make employees feel seen, valued, and connected —
            not just during major milestones, but throughout their entire journey.
          </motion.p>
          <div className="pg-culture-dark-points">
            {['Make appreciation a daily habit, not an annual event', 'Build genuine connection across any distance', 'Celebrate the people behind every success'].map((pt, i) => (
              <motion.div
                key={pt}
                className="pg-culture-point"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <motion.span className="pg-culture-check" whileHover={{ scale: 1.2 }}>✓</motion.span>
                <span>{pt}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated orbit */}
        <motion.div
          className="pg-culture-orbit"
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.2}
        >
          <svg viewBox="0 0 340 300" fill="none" className="pg-orbit-svg">
            {[120, 88, 56].map((r, ri) => (
              <motion.circle
                key={ri}
                cx="170" cy="150"
                r={r}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="6 4"
                animate={{ rotate: ri % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 20 + ri * 8, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '170px 150px' }}
              />
            ))}
            <motion.circle
              cx="170" cy="150" r="30"
              fill="rgba(255,107,44,0.2)"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{ transformOrigin: '170px 150px' }}
            />
            <text x="158" y="158" fontSize="18" fill="white">💛</text>
            {[
              { a: 0, e: '🧑', l: 'Alex', r: 120 },
              { a: 60, e: '👩', l: 'Maya', r: 120 },
              { a: 120, e: '👨', l: 'Sam', r: 120 },
              { a: 180, e: '🧕', l: 'Priya', r: 120 },
              { a: 240, e: '🧑‍💻', l: 'Lee', r: 120 },
              { a: 300, e: '👩‍🎤', l: 'Kim', r: 120 },
            ].map(({ a, e, l, r }, i) => {
              const rad = (a * Math.PI) / 180;
              const cx = 170 + r * Math.cos(rad);
              const cy = 150 + r * Math.sin(rad);
              return (
                <g key={i}>
                  <motion.circle
                    cx={cx} cy={cy} r="18"
                    fill="rgba(255,255,255,0.1)"
                    whileHover={{ fill: 'rgba(255,255,255,0.2)' }}
                  />
                  <text x={cx - 8} y={cy + 6} fontSize="13">{e}</text>
                  <text x={cx - 10} y={cy + 24} fontSize="7" fill="rgba(255,255,255,0.65)">{l}</text>
                  <line x1="170" y1="150" x2={cx} y2={cy} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────────── */
function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pg-cta" ref={ref}>
      <div className="pg-container pg-cta-inner">
        <motion.h2 className="pg-cta-title" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
          Build Programs Employees<br />Love Participating In
        </motion.h2>
        <motion.p className="pg-cta-sub" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}>
          Bring people together through celebrations, recognition, and culture initiatives
          that strengthen workplace connections.
        </motion.p>
        <motion.div className="pg-cta-actions" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}>
          <motion.a
            href="https://workkudo.ai/signin"
            className="pg-btn pg-btn--cta-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Creating
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <motion.button
            className="pg-btn pg-btn--cta-ghost"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >Learn More</motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROOT PAGE
───────────────────────────────────────────── */
export default function Programs() {
  return (
    <div className="programs-page">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <CelebrationsSection />
      <TransitionCelebToRecog />
      <RecognitionSection />
      <TransitionRecogToCulture />
      <CultureSection />
      <HowItWorks />
      <WhySection />
      <ShowcaseSection />
      <WorkplaceCultureSection />
      <FAQ
        title="Programs & Drives — FAQs"
        subtitle="Everything you need to know about running programs on WorkKudo."
        data={[
          { q: 'What kinds of programs can I create?', a: 'Celebration campaigns, peer recognition drives, culture & inclusion initiatives, onboarding welcome boards, and team appreciation walls — all in one place.' },
          { q: 'Can I invite people outside my organization?', a: 'Yes. You control who gets invited. Share a private link with internal team members, departments, or select external collaborators.' },
          { q: 'Is there a participant limit?', a: 'WorkKudo scales with your team. Whether you have 10 or 10,000 employees, everyone can contribute asynchronously from any location.' },
          { q: 'Can programs be scheduled in advance?', a: 'Absolutely. Set a target delivery date and WorkKudo will remind contributors before the deadline, ensuring nothing slips.' },
          { q: 'Do participants need a WorkKudo account?', a: 'No. Contributors can add messages, photos, and appreciation via a shareable link — no account required to participate.' },
        ]}
      />
      <FinalCTA />
      <Footer />
    </div>
  );
}
