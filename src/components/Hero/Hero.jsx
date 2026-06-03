import { useState, useRef, useEffect, useCallback } from 'react'
import './Hero.css'
import heroVideo from '../../assets/hero-video.mp4'

/* ─── Typewriter words ─────────────────────────────────────── */
const WORDS = ['Recognition', 'Appreciation', 'Culture', 'Engagement', 'Connection']

/* ─── Stats with count-up ──────────────────────────────────── */
const stats = [
  { target: 10, suffix: 'K+', label: 'Teams worldwide',    emoji: '🌍' },
  { target: 98, suffix: '%',  label: 'Employee happiness', emoji: '😊' },
  { target: 3,  suffix: 'x',  label: 'Engagement boost',   emoji: '🚀' },
  { target: 50, suffix: 'K+', label: 'Kudos sent daily',   emoji: '💌' },
]

const trustBadges = ['Slack', 'Notion', 'Figma', 'Stripe', 'Shopify', 'Atlassian']

/* ─── Hook: Typewriter ─────────────────────────────────────── */
function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [display, setDisplay]   = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [phase, setPhase]       = useState('typing') // typing | pausing | deleting
  const timeoutRef              = useRef(null)

  useEffect(() => {
    const word = words[wordIdx]

    if (phase === 'typing') {
      if (display.length < word.length) {
        timeoutRef.current = setTimeout(
          () => setDisplay(word.slice(0, display.length + 1)),
          typingSpeed
        )
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pausing'), pauseMs)
      }
    } else if (phase === 'pausing') {
      setPhase('deleting')
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplay(d => d.slice(0, -1)),
          deletingSpeed
        )
      } else {
        setWordIdx(i => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeoutRef.current)
  }, [display, phase, wordIdx, words, typingSpeed, deletingSpeed, pauseMs])

  return { display, isTyping: phase === 'typing' || phase === 'pausing' }
}

/* ─── Hook: Count-up on visibility ────────────────────────── */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(ease * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

/* ─── Subtext word-reveal ──────────────────────────────────── */
const SUBTEXT = 'Build a culture of appreciation that drives real engagement, reduces turnover, and makes your people feel genuinely valued — every day.'

function AnimatedSubtext() {
  const words = SUBTEXT.split(' ')
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <p className="hero__subtext" ref={ref} aria-label={SUBTEXT}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`hero__word ${visible ? 'hero__word--visible' : ''}`}
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  )
}

/* ─── Stat item with count-up ──────────────────────────────── */
function StatItem({ stat, index, total }) {
  const { count, ref } = useCountUp(stat.target)
  return (
    <div className="hero__stat" ref={ref}>
      <span className="hero__stat-emoji">{stat.emoji}</span>
      <div>
        <p className="hero__stat-value">{count}{stat.suffix}</p>
        <p className="hero__stat-label">{stat.label}</p>
      </div>
      {index < total - 1 && <div className="hero__stat-sep" />}
    </div>
  )
}

/* ─── Main Hero ────────────────────────────────────────────── */
export default function Hero() {
  const videoRef = useRef(null)
  const [muted, setMuted]         = useState(true)
  const [playing, setPlaying]     = useState(true)
  const [showModal, setShowModal] = useState(false)
  const { display, isTyping }     = useTypewriter(WORDS)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(m => !m)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      playing ? videoRef.current.pause() : videoRef.current.play()
      setPlaying(p => !p)
    }
  }

  // Close modal on Esc
  useEffect(() => {
    const fn = e => e.key === 'Escape' && setShowModal(false)
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  return (
    <>
      <section className="hero" id="hero">

        {/* Background blobs */}
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />
        <div className="hero__blob hero__blob--3" aria-hidden="true" />

        <div className="hero__inner container">

          {/* ── Text block ── */}
          <div className="hero__text">

            {/* Headline with typewriter */}
            <h1 className="hero__heading animate-fade-up" style={{ opacity: 0 }}>
              <span className="hero__heading-static">Make Every</span>
              <br />
              <span className="hero__heading-typewriter">
                <span className="hero__heading-gradient">{display}</span>
                <span className={`hero__cursor ${isTyping ? '' : 'hero__cursor--blink'}`}>|</span>
              </span>
              <span className="hero__heading-static"> Count</span>
            </h1>

            {/* Word-reveal subtext */}
            <AnimatedSubtext />

            {/* CTAs */}
            <div className="hero__ctas animate-fade-up delay-200" style={{ opacity: 0 }}>
              <a href="#signup" className="hero__btn-primary">
                Start Free Today
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M9.5 4.5l5 4.5-5 4.5" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <button className="hero__btn-ghost" onClick={() => setShowModal(true)}>
                <span className="hero__play-dot">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="white">
                    <path d="M1.5 1l8 4.5-8 4.5V1z"/>
                  </svg>
                </span>
                Watch Demo
              </button>
            </div>

            {/* Trust strip */}
            <div className="hero__trust animate-fade-up delay-300" style={{ opacity: 0 }}>
              <span className="hero__trust-label">Trusted by teams at</span>
              <div className="hero__trust-logos">
                {trustBadges.map((name, i) => (
                  <span
                    key={name}
                    className="hero__trust-pill"
                    style={{ animationDelay: `${i * 80 + 600}ms` }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ── Video frame ── */}
          <div className="hero__video-section animate-fade-up delay-300" style={{ opacity: 0 }}>
            <div className="video-frame">
              <div className="video-frame__bar">
                <div className="video-frame__dots">
                  <span style={{ background: '#FF5F57' }} />
                  <span style={{ background: '#FEBC2E' }} />
                  <span style={{ background: '#28C840' }} />
                </div>
                <div className="video-frame__title">WorkKudo — Recognition Platform</div>
                <div className="video-frame__controls">
                  <button className="video-frame__ctrl" onClick={togglePlay} aria-label="play/pause">
                    {playing ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <rect x="1.5" y="1" width="3" height="10" rx="1"/>
                        <rect x="7.5" y="1" width="3" height="10" rx="1"/>
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M2 1l9 5-9 5V1z"/>
                      </svg>
                    )}
                  </button>
                  <button className="video-frame__ctrl" onClick={toggleMute} aria-label="mute">
                    {muted ? (
                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M1 4.5H3.5L7 2v8L3.5 7.5H1V4.5Z" fill="currentColor" stroke="none"/>
                        <path d="M10 4l3 3M13 4l-3 3"/>
                      </svg>
                    ) : (
                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M1 4.5H3.5L7 2v8L3.5 7.5H1V4.5Z" fill="currentColor" stroke="none"/>
                        <path d="M9.5 3.5c1 .8 1.5 1.7 1.5 2.5s-.5 1.7-1.5 2.5"/>
                        <path d="M11.5 2c1.7 1.3 2.5 2.7 2.5 4s-.8 2.7-2.5 4"/>
                      </svg>
                    )}
                  </button>
                  <button className="video-frame__ctrl video-frame__ctrl--expand"
                          onClick={() => setShowModal(true)} aria-label="fullscreen">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M1 4.5V1h3.5M10.5 1H7.5M7.5 11h3v-3.5M1 7.5V11h3.5"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="video-frame__screen">
                <video ref={videoRef} src={heroVideo} autoPlay loop muted playsInline
                       preload="auto" className="video-frame__video" />
                <div className="video-frame__overlay" onClick={() => setShowModal(true)}
                     role="button" aria-label="Open full screen video" tabIndex={0}>
                  <div className="video-frame__play-hint">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M4 3l13 7-13 7V3z"/>
                    </svg>
                    <span>Watch full demo</span>
                  </div>
                </div>
              </div>

              <div className="video-frame__glow" aria-hidden="true" />
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="hero__stats animate-fade-up delay-500" style={{ opacity: 0 }}>
            {stats.map((s, i) => (
              <StatItem key={s.label} stat={s} index={i} total={stats.length} />
            ))}
          </div>

        </div>
      </section>

      {/* Fullscreen modal */}
      {showModal && (
        <div className="video-modal" onClick={() => setShowModal(false)} role="dialog" aria-modal="true">
          <div className="video-modal__box" onClick={e => e.stopPropagation()}>
            <button className="video-modal__close" onClick={() => setShowModal(false)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                   stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l14 14M15 1L1 15"/>
              </svg>
            </button>
            <video src={heroVideo} controls autoPlay className="video-modal__video" />
          </div>
        </div>
      )}
    </>
  )
}
