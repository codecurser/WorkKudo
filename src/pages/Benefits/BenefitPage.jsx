import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './BenefitPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';

/* ── animation helpers ── */
const ease = [0.25, 1, 0.5, 1];
const spring = { type: 'spring', stiffness: 300, damping: 24 };
const fadeUp   = { hidden: { opacity: 0, y: 34 },  visible: (d=0) => ({ opacity:1, y:0,  transition:{ duration:0.66, delay:d, ease } }) };
const fadeLeft = { hidden: { opacity: 0, x: -30 }, visible: (d=0) => ({ opacity:1, x:0,  transition:{ duration:0.60, delay:d, ease } }) };
const fadeRight= { hidden: { opacity: 0, x: 30 },  visible: (d=0) => ({ opacity:1, x:0,  transition:{ duration:0.60, delay:d, ease } }) };
const popIn    = { hidden: { opacity: 0, scale:0.88 }, visible: (d=0) => ({ opacity:1, scale:1, transition:{ duration:0.50, delay:d, ease:[0.34,1.56,0.64,1] } }) };

/* shared arrow svg */
const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ════════════════════════════════════════════
   HERO V1 — Diagonal dark/light split
   VirtualAppreciation (unchanged)
════════════════════════════════════════════ */
function HeroV1({ data }) {
  return (
    <section className="bpg-hero-v1">
      {/* ── Left dark panel ── */}
      <div className="bpg-hero-v1__left">
        <div className="bpg-hero-v1__left-bg" />
        <div className="bpg-hero-v1__dots" />
        <div style={{ position:'relative', zIndex:1, maxWidth:460 }}>
          <motion.div className="bpg-eyebrow bpg-eyebrow--white"
            initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <span className="bpg-eyebrow-dot bpg-eyebrow-dot--w" /> {data.icon} {data.category}
          </motion.div>
          <motion.h1 className="bpg-h1 bpg-h1--white"
            initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.72, delay:0.1, ease }}>
            {data.heroTitle}
          </motion.h1>
          <motion.p className="bpg-lead bpg-lead--soft"
            initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.2, ease }}>
            {data.heroDesc}
          </motion.p>
          <motion.div className="bpg-hero-actions"
            initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3, ease }}>
            <motion.a href="#features" className="bpg-btn bpg-btn--primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>
              {data.ctaPrimary} <Arrow />
            </motion.a>
            <motion.a href="#how-it-works" className="bpg-btn bpg-btn--ghost-white" whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }}>
              {data.ctaSecondary}
            </motion.a>
          </motion.div>
          {data.heroChips && (
            <motion.div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:28 }}
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.45 }}>
              {data.heroChips.map((c, i) => (
                <span key={i} style={{ padding:'6px 14px', borderRadius:100, background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', fontSize:12.5, fontWeight:700, color:'rgba(255,255,255,0.82)' }}>{c}</span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      {/* ── Right light panel ── */}
      <div className="bpg-hero-v1__right">
        {data.heroStats?.map((s, i) => (
          <motion.div key={i} className={`bpg-hero-v1__stat bpg-hero-v1__stat--${i===0?'a':'b'}`}
            initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
            transition={{ delay:0.5+i*0.15, ...spring }}>
            <span className="bpg-hero-v1__stat-val">{s.val}</span>
            {s.label}
          </motion.div>
        ))}
        <motion.div className="bpg-hero-v1__card"
          initial={{ opacity:0, y:32, scale:0.95 }} animate={{ opacity:1, y:0, scale:1 }}
          transition={{ duration:0.78, delay:0.18, ease }} style={{ position:'relative', zIndex:1 }}>
          <div className="bpg-hero-v1__mac-bar">
            <span className="bpg-mac-dot" style={{ background:'#FF5F57' }} />
            <span className="bpg-mac-dot" style={{ background:'#FEBC2E' }} />
            <span className="bpg-mac-dot" style={{ background:'#28C840' }} />
            <span className="bpg-hero-v1__mac-title">WorkKudo · {data.category}</span>
          </div>
          <div className="bpg-hero-v1__mac-body">{data.heroCardContent}</div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   HERO V2 — Centered headline + bottom board preview
   BoostTeamSpirit
════════════════════════════════════════════ */
function HeroV2({ data }) {
  return (
    <section className="bpg-hero-v2">
      <div className="bpg-hero-v2__bg" />
      <div className="bpg-hero-v2__dots" />

      {/* centered text */}
      <div className="bpg-hero-v2__text">
        <motion.div className="bpg-eyebrow bpg-eyebrow--orange"
          initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
          <span className="bpg-eyebrow-dot" /> {data.icon} {data.category}
        </motion.div>
        <motion.h1 className="bpg-h1 bpg-h1--dark bpg-hero-v2__h1"
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.72, delay:0.1, ease }}>
          {data.heroTitle}
        </motion.h1>
        <motion.p className="bpg-lead bpg-lead--muted bpg-hero-v2__lead"
          initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.2, ease }}>
          {data.heroDesc}
        </motion.p>
        <motion.div className="bpg-hero-v2__actions"
          initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3, ease }}>
          <motion.a href="#features" className="bpg-btn bpg-btn--primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>
            {data.ctaPrimary} <Arrow />
          </motion.a>
          <motion.a href="#how-it-works" className="bpg-btn bpg-btn--outline" whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }}>
            {data.ctaSecondary}
          </motion.a>
        </motion.div>
      </div>

      {/* bottom board preview */}
      <div className="bpg-hero-v2__preview-wrap">
        <motion.div className="bpg-hero-v2__preview"
          initial={{ opacity:0, y:52 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.88, delay:0.42, ease }}>
          <div className="bpg-hero-v2__preview-bar">
            <span className="bpg-mac-dot" style={{ background:'#FF5F57' }} />
            <span className="bpg-mac-dot" style={{ background:'#FEBC2E' }} />
            <span className="bpg-mac-dot" style={{ background:'#28C840' }} />
            <span className="bpg-hero-v2__bar-title">WorkKudo — {data.category}</span>
            <span className="bpg-hero-v2__live">
              <span className="bpg-hero-v2__live-dot" /> LIVE
            </span>
          </div>
          <div className="bpg-hero-v2__preview-body">
            {(data.previewNotes || []).map((n, i) => (
              <motion.div key={i} className="bpg-hero-v2__note"
                style={{ borderLeft:`3px solid ${n.color}` }}
                initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:0.58+i*0.1, ease }}>
                <div className="bpg-hero-v2__note-head">
                  <div className="bpg-hero-v2__av" style={{ background:n.color }}>{n.name[0]}</div>
                  <div>
                    <span className="bpg-hero-v2__av-name">{n.name}</span>
                    <span className="bpg-hero-v2__av-role">{n.role}</span>
                  </div>
                </div>
                <p className="bpg-hero-v2__note-text">{n.msg}</p>
                <div className="bpg-hero-v2__note-foot">
                  <span className="bpg-hero-v2__note-like">❤ {2+i*3}</span>
                  <span className="bpg-hero-v2__note-tag" style={{ color:n.color }}>#kudos</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   HERO V3 — Left text + right floating mosaic
   BuildCommunity
════════════════════════════════════════════ */
function HeroV3({ data }) {
  return (
    <section className="bpg-hero-v3">
      <div className="bpg-hero-v3__bg" />
      <div className="bpg-container">
        <div className="bpg-hero-v3__inner">
          {/* left */}
          <div className="bpg-hero-v3__left">
            <motion.div className="bpg-eyebrow bpg-eyebrow--orange"
              initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
              <span className="bpg-eyebrow-dot" /> {data.icon} {data.category}
            </motion.div>
            <motion.h1 className="bpg-h1 bpg-h1--dark"
              initial={{ opacity:0, y:26 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.72, delay:0.1, ease }}>
              {data.heroTitle}
            </motion.h1>
            <motion.p className="bpg-lead bpg-lead--muted"
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.2, ease }}>
              {data.heroDesc}
            </motion.p>
            <motion.div className="bpg-hero-actions"
              initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3, ease }}>
              <motion.a href="#features" className="bpg-btn bpg-btn--primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>
                {data.ctaPrimary} <Arrow />
              </motion.a>
              <motion.a href="#how-it-works" className="bpg-btn bpg-btn--outline" whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }}>
                {data.ctaSecondary}
              </motion.a>
            </motion.div>
            {data.heroStats3 && (
              <motion.div className="bpg-hero-v3__stats"
                initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45 }}>
                {data.heroStats3.map((s, i) => (
                  <div key={i} className="bpg-hero-v3__stat">
                    <div className="bpg-hero-v3__stat-val">{s.val}</div>
                    <div className="bpg-hero-v3__stat-lbl">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
          {/* right mosaic */}
          <motion.div className="bpg-hero-v3__mosaic"
            initial={{ opacity:0, x:36 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.78, delay:0.18, ease }}>
            {(data.mosaicCards || []).map((mc, i) => (
              <motion.div key={i}
                className={`bpg-hero-v3__mc${mc.tall?' bpg-hero-v3__mc--tall':''}`}
                animate={{ y:[0, i%2===0 ? -7 : 7, 0] }}
                transition={{ duration:3.8+i*0.5, repeat:Infinity, ease:'easeInOut', delay:i*0.38 }}>
                <div className="bpg-hero-v3__mc-icon">{mc.icon}</div>
                <span className="bpg-hero-v3__mc-title">{mc.title}</span>
                <span className="bpg-hero-v3__mc-sub">{mc.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   HERO V4 — Full dark navy + 2×2 metric grid
   EnhanceParticipation
════════════════════════════════════════════ */
function HeroV4({ data }) {
  return (
    <section className="bpg-hero-v4">
      <div className="bpg-hero-v4__mesh" />
      <div className="bpg-hero-v4__dots" />
      <div className="bpg-container">
        <div className="bpg-hero-v4__inner">
          {/* left */}
          <div>
            <motion.div className="bpg-eyebrow bpg-eyebrow--white"
              initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
              <span className="bpg-eyebrow-dot bpg-eyebrow-dot--w" /> {data.icon} {data.category}
            </motion.div>
            <motion.h1 className="bpg-h1 bpg-h1--white"
              initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.72, delay:0.1, ease }}>
              {data.heroTitle}
            </motion.h1>
            <motion.p className="bpg-lead bpg-lead--soft"
              initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.2, ease }}>
              {data.heroDesc}
            </motion.p>
            <motion.div className="bpg-hero-v4__actions"
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3, ease }}>
              <motion.a href="#features" className="bpg-btn bpg-btn--primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>
                {data.ctaPrimary} <Arrow />
              </motion.a>
              <motion.a href="#how-it-works" className="bpg-btn bpg-btn--ghost-white" whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }}>
                {data.ctaSecondary}
              </motion.a>
            </motion.div>
          </div>
          {/* right metric grid */}
          <motion.div className="bpg-hero-v4__grid"
            initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.78, delay:0.22, ease }}>
            {(data.numCards || []).map((nc, i) => (
              <motion.div key={i}
                className={`bpg-hero-v4__card${nc.accent?' bpg-hero-v4__card--accent':''}`}
                whileHover={{ y:-5, scale:1.03 }} transition={spring}>
                <div className="bpg-hero-v4__card-icon">{nc.icon}</div>
                <div className="bpg-hero-v4__card-val">
                  {nc.val}<span className="bpg-hero-v4__card-unit">{nc.unit}</span>
                </div>
                <div className="bpg-hero-v4__card-lbl">{nc.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   HERO V5 — Warm gradient bg + award card
   HonorAchievements
════════════════════════════════════════════ */
function HeroV5({ data }) {
  return (
    <section className="bpg-hero-v5">
      <div className="bpg-container">
        <div className="bpg-hero-v5__inner">
          {/* left */}
          <div>
            <motion.div className="bpg-eyebrow bpg-eyebrow--orange"
              initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
              <span className="bpg-eyebrow-dot" /> {data.icon} {data.category}
            </motion.div>
            <motion.h1 className="bpg-h1 bpg-h1--dark"
              initial={{ opacity:0, y:26 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.72, delay:0.1, ease }}>
              {data.heroTitle}
            </motion.h1>
            <motion.p className="bpg-lead bpg-lead--muted"
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.2, ease }}>
              {data.heroDesc}
            </motion.p>
            <motion.div className="bpg-hero-actions"
              initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.28, ease }}>
              <motion.a href="#features" className="bpg-btn bpg-btn--primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>
                {data.ctaPrimary} <Arrow />
              </motion.a>
              <motion.a href="#how-it-works" className="bpg-btn bpg-btn--outline" whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}>
                {data.ctaSecondary}
              </motion.a>
            </motion.div>
            {data.heroChips && (
              <motion.div className="bpg-hero-v5__chips"
                initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.44 }}>
                {data.heroChips.map((c, i) => <span key={i} className="bpg-hero-v5__chip">{c}</span>)}
              </motion.div>
            )}
          </div>
          {/* right award card */}
          <motion.div className="bpg-hero-v5__right"
            initial={{ opacity:0, x:36 }} animate={{ opacity:1, x:0 }}
            transition={{ duration:0.78, delay:0.18, ease }}>
            {data.floatChips && (
              <>
                <motion.div className="bpg-hero-v5__float bpg-hero-v5__float--a"
                  animate={{ y:[0,-9,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}>
                  {data.floatChips[0]}
                </motion.div>
                <motion.div className="bpg-hero-v5__float bpg-hero-v5__float--b"
                  animate={{ y:[0,8,0] }} transition={{ duration:4.6, repeat:Infinity, ease:'easeInOut', delay:0.8 }}>
                  {data.floatChips[1]}
                </motion.div>
              </>
            )}
            <div className="bpg-hero-v5__card">
              <div className="bpg-hero-v5__card-top">
                <div className="bpg-hero-v5__trophy">{data.icon}</div>
                <div>
                  <div className="bpg-hero-v5__card-title">{data.awardCardTitle}</div>
                  <div className="bpg-hero-v5__card-sub">{data.awardCardSub}</div>
                </div>
              </div>
              <div className="bpg-hero-v5__rows">
                {(data.awardRows || []).map((row, i) => (
                  <motion.div key={i} className="bpg-hero-v5__row"
                    initial={{ opacity:0, x:-14 }} animate={{ opacity:1, x:0 }}
                    transition={{ delay:0.42+i*0.12, ease }}
                    whileHover={{ x:4 }}>
                    <div className="bpg-hero-v5__row-av" style={{ background:row.color }}>{row.name[0]}</div>
                    <div>
                      <span className="bpg-hero-v5__row-name">{row.name}</span>
                      <span className="bpg-hero-v5__row-role">{row.role}</span>
                    </div>
                    <span className="bpg-hero-v5__row-badge">{row.badge}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   HERO V6 — Deep navy + live global pins card
   RemoteWorkforce
════════════════════════════════════════════ */
function HeroV6({ data }) {
  return (
    <section className="bpg-hero-v6">
      <div className="bpg-hero-v6__orb-a" />
      <div className="bpg-hero-v6__orb-b" />
      <div className="bpg-hero-v6__dots" />
      <div className="bpg-container">
        <div className="bpg-hero-v6__inner">
          {/* left */}
          <div>
            <motion.div className="bpg-eyebrow bpg-eyebrow--white"
              initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
              <span className="bpg-eyebrow-dot bpg-eyebrow-dot--w" /> {data.icon} {data.category}
            </motion.div>
            <motion.h1 className="bpg-h1 bpg-h1--white"
              initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.72, delay:0.1, ease }}>
              {data.heroTitle}
            </motion.h1>
            <motion.p className="bpg-lead bpg-lead--soft"
              initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.2, ease }}>
              {data.heroDesc}
            </motion.p>
            <motion.div className="bpg-hero-v6__actions"
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3, ease }}>
              <motion.a href="#features" className="bpg-btn bpg-btn--primary" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}>
                {data.ctaPrimary} <Arrow />
              </motion.a>
              <motion.a href="#how-it-works" className="bpg-btn bpg-btn--ghost-white" whileHover={{ scale:1.03, y:-1 }} whileTap={{ scale:0.97 }}>
                {data.ctaSecondary}
              </motion.a>
            </motion.div>
          </div>
          {/* right glass card */}
          <motion.div
            initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.22, ease }}>
            <div className="bpg-hero-v6__glass">
              <div className="bpg-hero-v6__glass-bar">
                <span className="bpg-mac-dot" style={{ background:'#FF5F57' }} />
                <span className="bpg-mac-dot" style={{ background:'#FEBC2E' }} />
                <span className="bpg-mac-dot" style={{ background:'#28C840' }} />
                <span className="bpg-hero-v6__glass-title">Live contributions</span>
                <span className="bpg-hero-v6__live">
                  <span className="bpg-hero-v6__live-dot" /> LIVE
                </span>
              </div>
              <div className="bpg-hero-v6__pins">
                {(data.globalPins || []).map((pin, i) => (
                  <motion.div key={i} className="bpg-hero-v6__pin"
                    initial={{ opacity:0, x:-18 }} animate={{ opacity:1, x:0 }}
                    transition={{ delay:0.38+i*0.1, ease }}
                    whileHover={{ x:4 }}>
                    <span className="bpg-hero-v6__pin-flag">{pin.flag}</span>
                    <div className="bpg-hero-v6__pin-info">
                      <span className="bpg-hero-v6__pin-name">{pin.name}</span>
                      <span className="bpg-hero-v6__pin-msg">{pin.msg}</span>
                    </div>
                    <span className="bpg-hero-v6__pin-dot" />
                  </motion.div>
                ))}
              </div>
              <div className="bpg-hero-v6__foot">
                <span className="bpg-hero-v6__foot-txt">
                  <span className="bpg-hero-v6__foot-val">{data.globalPins?.length || 4}</span> active now
                </span>
                <span className="bpg-hero-v6__foot-chip">🌍 Global</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CHALLENGE
════════════════════════════════════════════ */
function Challenge({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-90px' });
  return (
    <section className="bpg-challenge" ref={ref}>
      <div className="bpg-container bpg-challenge__grid">
        <div>
          <motion.div className="bpg-eyebrow bpg-eyebrow--orange" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}>⚡ The Challenge</motion.div>
          <motion.h2 className="bpg-h2" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.07}>{data.problemTitle}</motion.h2>
          <motion.p className="bpg-lead bpg-lead--muted" style={{ maxWidth:520 }} variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.13}>{data.problemDesc}</motion.p>
          {data.problemDesc2 && (
            <motion.p className="bpg-lead bpg-lead--muted" style={{ maxWidth:520 }} variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.18}>{data.problemDesc2}</motion.p>
          )}
          <div className="bpg-challenge__pts">
            {data.problemPoints.map((pt, i) => (
              <motion.div key={i} className="bpg-challenge__pt" variants={fadeLeft} initial="hidden" animate={inView?'visible':'hidden'} custom={0.22+i*0.09}>
                <span className="bpg-challenge__pt-num">{String(i+1).padStart(2,'0')}</span>
                {pt}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div variants={fadeRight} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1}>
          <div className="bpg-widget">
            <div className="bpg-widget__hd">
              <span className="bpg-widget__hd-icon">📊</span>
              <span className="bpg-widget__hd-title">Team Health Overview</span>
            </div>
            <div className="bpg-widget__body">{data.problemIllustration}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FEATURES — 3-col cards
════════════════════════════════════════════ */
function Features({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  const [hov, setHov] = useState(null);
  return (
    <section className="bpg-features" ref={ref} id="features">
      <div className="bpg-container">
        <div className="bpg-sec-hd">
          <motion.div className="bpg-eyebrow bpg-eyebrow--orange" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}>✦ How WorkKudo Helps</motion.div>
          <motion.h2 className="bpg-h2 bpg-h2--center" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.08}>{data.deepDiveTitle}</motion.h2>
          <motion.p className="bpg-section-sub" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.14}>{data.deepDiveDesc}</motion.p>
        </div>
        <div className="bpg-features__grid">
          {data.deepDiveFeatures.map((f, i) => (
            <motion.div key={i} className="bpg-feat-card"
              variants={popIn} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1+i*0.07}
              onHoverStart={() => setHov(i)} onHoverEnd={() => setHov(null)}>
              <div className="bpg-feat-card__head">
                <motion.div className="bpg-feat-card__icon"
                  animate={hov===i ? { scale:1.1, rotate:-7 } : { scale:1, rotate:0 }} transition={spring}>
                  {f.icon}
                </motion.div>
                <span className="bpg-feat-card__num">{String(i+1).padStart(2,'0')}</span>
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

/* ════════════════════════════════════════════
   HOW IT WORKS — 4-step timeline
════════════════════════════════════════════ */
function HowItWorks({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  return (
    <section className="bpg-hiw" ref={ref} id="how-it-works">
      <div className="bpg-container">
        <div className="bpg-sec-hd">
          <motion.div className="bpg-eyebrow bpg-eyebrow--orange" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}>→ Process</motion.div>
          <motion.h2 className="bpg-h2 bpg-h2--center" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.08}>How It Works</motion.h2>
        </div>
        <div className="bpg-hiw__steps">
          {data.howItWorks.map((step, i) => (
            <motion.div key={i} className="bpg-hiw__step"
              variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.12+i*0.1}>
              <div className="bpg-hiw__step-card">
                <div style={{ position:'relative', marginBottom:0, display:'flex', justifyContent:'center' }}>
                  <motion.div className="bpg-hiw__step-circle" whileHover={{ scale:1.1 }} transition={spring}>
                    {step.icon}
                  </motion.div>
                  <span className="bpg-hiw__step-num">{i+1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="bpg-hiw__step-bar">
                  <motion.div className="bpg-hiw__step-bar-fill"
                    initial={{ width:0 }}
                    animate={inView ? { width:'100%' } : { width:0 }}
                    transition={{ duration:1.1, delay:0.5+i*0.2, ease:[0.25,1,0.5,1] }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   USE CASES — Dual marquee
════════════════════════════════════════════ */
function UseCases({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  const half = Math.ceil(data.useCases.length / 2);
  const row1 = data.useCases.slice(0, half);
  const row2 = data.useCases.slice(half);
  return (
    <section className="bpg-usecases" ref={ref}>
      <div className="bpg-container">
        <div className="bpg-sec-hd">
          <motion.div className="bpg-eyebrow bpg-eyebrow--orange" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}>◉ Use Cases</motion.div>
          <motion.h2 className="bpg-h2 bpg-h2--center" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.08}>{data.category} In Action</motion.h2>
          <motion.p className="bpg-section-sub" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.14}>Real scenarios where WorkKudo delivers meaningful results</motion.p>
        </div>
      </div>
      {[row1, row2].map((row, ri) => (
        <div key={ri} className="bpg-marquee-track">
          <div className={`bpg-marquee-inner${ri===1?' bpg-marquee-inner--rev':''}`}>
            {[...row, ...row, ...row].map((uc, i) => (
              <div key={i} className="bpg-uc-card">
                <div className="bpg-uc-icon">{uc.icon}</div>
                <div><h4>{uc.title}</h4><p>{uc.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ════════════════════════════════════════════
   BENEFITS — 3-col
════════════════════════════════════════════ */
function BenefitsSection({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  return (
    <section className="bpg-benefits" ref={ref}>
      <div className="bpg-container">
        <div className="bpg-sec-hd">
          <motion.div className="bpg-eyebrow bpg-eyebrow--orange" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}>★ Why It Matters</motion.div>
          <motion.h2 className="bpg-h2 bpg-h2--center" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.08}>Real Results for Real Teams</motion.h2>
          <motion.p className="bpg-section-sub" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.14}>The measurable impact of building a culture of appreciation</motion.p>
        </div>
        <div className="bpg-benefits__grid">
          {data.benefits.map((b, i) => (
            <motion.div key={i} className="bpg-benefit-card"
              variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1+i*0.07}
              whileHover={{ y:-5 }} transition={{ type:'spring', stiffness:280, damping:22 }}>
              <motion.div className="bpg-benefit-card__icon" whileHover={{ scale:1.12, rotate:-8 }} transition={spring}>
                {b.icon}
              </motion.div>
              <div><h3>{b.title}</h3><p>{b.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   FINAL CTA
════════════════════════════════════════════ */
function FinalCTA({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  return (
    <section className="bpg-cta" ref={ref}>
      <div className="bpg-cta__orb-a" />
      <div className="bpg-cta__orb-b" />
      <div className="bpg-cta__inner">
        <motion.div className="bpg-cta__icon"
          variants={popIn} initial="hidden" animate={inView?'visible':'hidden'} custom={0}
          whileHover={{ scale:1.08, rotate:-6 }} transition={spring}>
          {data.icon}
        </motion.div>
        <motion.h2 className="bpg-cta__h2" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1}>{data.ctaHeadline}</motion.h2>
        <motion.p className="bpg-cta__sub" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.18}>{data.ctaDesc}</motion.p>
        <motion.div className="bpg-cta__actions" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.26}>
          <motion.a href="#create" className="bpg-btn bpg-btn--primary" style={{ padding:'15px 32px', fontSize:15.5 }}
            whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.97 }}>
            {data.ctaPrimary} <Arrow />
          </motion.a>
          <motion.a href="#how-it-works" className="bpg-btn bpg-btn--ghost-white" style={{ padding:'15px 28px', fontSize:15 }}
            whileHover={{ scale:1.04, y:-1 }} whileTap={{ scale:0.97 }}>
            {data.ctaSecondary}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   HERO ROUTER + PAGE ROOT
════════════════════════════════════════════ */
const heroMap = { v1:HeroV1, v2:HeroV2, v3:HeroV3, v4:HeroV4, v5:HeroV5, v6:HeroV6 };

export default function BenefitPage({ data }) {
  const HeroComponent = heroMap[data.heroVariant] || HeroV1;
  return (
    <div className="bpg">
      <Navbar />
      <HeroComponent    data={data} />
      <Challenge        data={data} />
      <Features         data={data} />
      <HowItWorks       data={data} />
      <UseCases         data={data} />
      <BenefitsSection  data={data} />
      <FAQ data={data.faq} title={data.faqTitle} subtitle={data.faqSubtitle} />
      <FinalCTA         data={data} />
      <Footer />
    </div>
  );
}
