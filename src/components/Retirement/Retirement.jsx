import { useState, useEffect, useRef } from 'react'
import './Retirement.css'
import FeatureCards from '../Shared/FeatureCards/FeatureCards'
import MemoryMap from '../Shared/MemoryMap/MemoryMap'
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid'
import FAQ from '../FAQ/FAQ'

export default function Retirement() {
  const [mounted, setMounted] = useState(false)
  const bgRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const faqItems = [
    {
      q: "How does the $5 pricing work?",
      a: "It's a one-time flat fee of $5 per board. No subscriptions, no hidden charges. You get unlimited signers, unlimited posts, and lifetime access to download or view your board."
    },
    {
      q: "Can multiple people sign the retirement card?",
      a: "Yes! Anyone with the link can add their messages, photos, GIFs, career memories, or videos. There is no limit to the number of signers or posts."
    },
    {
      q: "Can I download the board as a PDF?",
      a: "Absolutely. Once everyone has signed, you can download a high-resolution, print-ready PDF of the entire board to print as a beautiful keepsake booklet."
    },
    {
      q: "How long does a board stay active?",
      a: "Forever. Your retirement boards do not expire. You can revisit them, read old memories, and download them at any time in the future."
    }
  ]

  return (
    <div className="retirement-page">

      {/* ── HERO ── */}
      <section className="retirement-hero">
        <div className="retirement-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="retirement-hero__overlay" aria-hidden="true" />

        {/* Gold shimmer particles */}
        <div className="ret-particles" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`ret-particle ret-particle--${i + 1}`} />
          ))}
        </div>

        <div className="retirement-hero__container container">

          {/* Left */}
          <div className={`ret-hero-left ${mounted ? 'ret-hero-left--visible' : ''}`}>

            {/* Badge */}
            <h1 className="ret-hero-heading">
              Honour a lifetime<br />
              <span className="ret-hero-heading-accent">of dedication.</span>
            </h1>

            <p className="ret-hero-sub">
              A collaborative retirement board your whole team signs — heartfelt tributes, career memories, and golden wishes — delivered as a keepsake they'll treasure forever.
            </p>

            <div className="ret-hero-ctas">
              <a href="#create" className="ret-cta-primary">
                Create a Retirement Board
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#memory-map-shared" className="ret-cta-ghost">See how it works</a>
            </div>

            <p className="ret-hero-trust">
              Flat fee · $5 per board · Unlimited signers · Yours forever
            </p>
          </div>

          {/* Right — floating card */}
          <div className={`ret-hero-right ${mounted ? 'ret-hero-right--visible' : ''}`}>
            <div className="ret-quote-card">
              <div className="ret-quote-card__label">🏆 Retirement Tribute</div>

              <blockquote className="ret-quote-card__quote">
                "Three decades of brilliance, leadership, and heart. Thank you for shaping who we are as a team. You've earned every moment of this golden chapter!"
              </blockquote>

              <div className="ret-quote-card__footer">
                <div className="ret-quote-card__avatars">
                  <span className="ret-avatar" style={{ background: '#e6a817' }}>P</span>
                  <span className="ret-avatar" style={{ background: '#c0392b' }}>D</span>
                  <span className="ret-avatar" style={{ background: '#1a6b47' }}>A</span>
                  <span className="ret-avatar ret-avatar--more">+23</span>
                </div>
                <span className="ret-quote-card__signers">26 teammates signed</span>
              </div>

              {/* Career timeline strip */}
              <div className="ret-timeline-strip">
                <div className="ret-timeline-item">
                  <span className="ret-timeline-year">1994</span>
                  <span className="ret-timeline-dot" />
                  <span className="ret-timeline-label">Joined</span>
                </div>
                <div className="ret-timeline-line" />
                <div className="ret-timeline-item">
                  <span className="ret-timeline-year">2008</span>
                  <span className="ret-timeline-dot" style={{ background: '#c0392b' }} />
                  <span className="ret-timeline-label">Director</span>
                </div>
                <div className="ret-timeline-line" />
                <div className="ret-timeline-item">
                  <span className="ret-timeline-year">2024</span>
                  <span className="ret-timeline-dot" style={{ background: '#1a6b47' }} />
                  <span className="ret-timeline-label">Retired 🎉</span>
                </div>
              </div>

              <div className="ret-quote-card__price-row">
                <span className="ret-price-label">One board · One price</span>
                <span className="ret-price-badge">$5</span>
              </div>

              <div className="ret-quote-card__shimmer" aria-hidden="true" />
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <FeatureCards pageType="retirement" />

      {/* ── GLOBAL MEMORY MAP ── */}
      <MemoryMap pageType="retirement" />

      {/* ── CELEBRATION GRID ── */}
      <CelebrationGrid themeClass="gold" />

      {/* ── FAQ ── */}
      <FAQ data={faqItems} subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="retirement-cta">
        <div className="container">
          <div className="retirement-cta-box">
            <h2 className="ret-cta-title">Ready to celebrate their golden chapter?</h2>
            <p className="ret-cta-desc">Start building a heartfelt retirement board for your colleague in just 2 minutes.</p>
            <a href="#create" className="ret-btn-primary ret-animate-pulse">
              Create a Board for $5
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
