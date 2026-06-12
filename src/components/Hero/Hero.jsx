import { useState, useRef, useEffect } from 'react'
import './Hero.css'
import heroVideo from '../../assets/hero-video.mp4'

/* ─── Typewriter words ─────────────────────────────────────── */
const WORDS = ['Recognition', 'Appreciation', 'Culture', 'Engagement', 'Connection']



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
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 0)
    } else if (phase === 'deleting') {
      if (display.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplay(d => d.slice(0, -1)),
          deletingSpeed
        )
      } else {
        timeoutRef.current = setTimeout(() => {
          setWordIdx(i => (i + 1) % words.length)
          setPhase('typing')
        }, 0)
      }
    }

    return () => clearTimeout(timeoutRef.current)
  }, [display, phase, wordIdx, words, typingSpeed, deletingSpeed, pauseMs])

  return { display, isTyping: phase === 'typing' || phase === 'pausing' }
}


/* ─── Subtext word-reveal ──────────────────────────────────── */
const SUBTEXT = 'Build a culture of appreciation that drives real engagement, reduces turnover, and makes your people feel genuinely valued every day.'

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
          {word}
        </span>
      ))}
    </p>
  )
}


/* ─── Main Hero ────────────────────────────────────────────── */
export default function Hero() {
  const videoRef = useRef(null)
  const videoContainerRef = useRef(null)
  const [muted, setMuted]         = useState(true)
  const [playing, setPlaying]     = useState(true)
  const [scrollTransform, setScrollTransform] = useState({})
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

  // Scroll-linked 3D Unfold Animation
  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current) return
      
      const rect = videoContainerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Video Unfold Animation
      const targetPoint = windowHeight * 0.35
      let progress = 1 - ((rect.top - targetPoint) / (windowHeight - targetPoint))
      progress = Math.min(Math.max(progress, 0), 1)
      const ease = 1 - (1 - progress) * (1 - progress)
      
    const scale = 0.85 + (0.30 * ease)
      const rotateX = 20 - (20 * ease)
      const translateY = 60 - (60 * ease)
      
      setScrollTransform({
        transform: `perspective(1200px) translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`,
        transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'
      })
    
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section className="hero" id="hero">

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
              <a href="https://workkudo.ai/signin" className="hero__btn-primary">
                Start Free Today
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M9.5 4.5l5 4.5-5 4.5" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>



          </div>

          {/* ── Video frame ── */}
          <div className="hero__video-section animate-fade-up delay-300" style={{ opacity: 0 }}>
            <div 
              className="video-frame" 
              ref={videoContainerRef}
              style={{ ...scrollTransform, transformOrigin: 'top center' }}
            >
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
                </div>
              </div>

              <div className="video-frame__screen">
                <video ref={videoRef} src={heroVideo} autoPlay loop muted playsInline
                       preload="auto" className="video-frame__video" />
              </div>

              <div className="video-frame__glow" aria-hidden="true" />
            </div>
          </div>


        </div>
      </section>
    </>
  )
}
