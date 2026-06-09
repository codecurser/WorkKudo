import { useState, useEffect, useRef } from 'react'
import './Appreciation.css'
import FeatureCards from '../Shared/FeatureCards/FeatureCards'
import MemoryMap from '../Shared/MemoryMap/MemoryMap'
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid'
import FAQ from '../FAQ/FAQ'

export default function Appreciation() {
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
      q: "Can multiple people sign the card?",
      a: "Yes! Anyone with the link can add their messages, photos, GIFs, or videos. There is no limit to the number of signers or posts."
    },
    {
      q: "Can I download the board as a PDF?",
      a: "Absolutely. Once everyone has signed, you can download a high-resolution, print-ready PDF of the entire board to print as a booklet or keepsake."
    },
    {
      q: "How long does a board stay active?",
      a: "Forever. Your boards do not expire. You can revisit them, read old memories, and download them at any time in the future."
    }
  ]

  return (
    <div className="appreciation-page">

      {/* ── HERO ── */}
      <section className="appreciation-hero">
        <div className="appreciation-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="appreciation-hero__overlay" aria-hidden="true" />

        <div className="appreciation-hero__container container">

          {/* Left */}
          <div className={`ap-hero-left ${mounted ? 'ap-hero-left--visible' : ''}`}>

            <div className="ap-eyebrow">
              <span className="ap-eyebrow__dot" aria-hidden="true" />
              Appreciation Handbook
            </div>

            <h1 className="ap-hero-heading">
              Show appreciation<br />
              <span className="ap-hero-heading-accent">the right way.</span>
            </h1>

            <p className="ap-hero-sub">
              A collaborative appreciation board your whole team signs — praise, thank-yous, and kudos — delivered as a keepsake they'll keep forever.
            </p>

            <div className="ap-hero-ctas">
              <a href="https://workkudo.ai/signin" className="ap-cta-primary">
                Create a Kudos Board
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#memory-map-shared" className="ap-cta-ghost">How it works</a>
            </div>

            <p className="ap-hero-trust">
              Flat fee · $5 per board · Unlimited signers · Yours forever
            </p>

            {/* Social proof */}
            <div className="ap-social-proof">
              <div className="ap-social-proof__avatars">
                {['#FF6B6B','#4ECDC4','#45B7D1','#96CEB4'].map((bg, i) => (
                  <span key={i} className="ap-sp-av" style={{ background: bg }} />
                ))}
              </div>
              <span className="ap-social-proof__text">
                <strong>4,200+</strong> appreciation boards sent this month
              </span>
            </div>
          </div>

          {/* Right — floating card */}
          <div className={`ap-hero-right ${mounted ? 'ap-hero-right--visible' : ''}`}>
            <div className="ap-quote-card">

              {/* Card header */}
              <div className="ap-quote-card__header">
                <div className="ap-quote-card__label">
                  <span className="ap-label-dot" aria-hidden="true" />
                  Kudos Board
                </div>
                <div className="ap-quote-card__board-meta">
                  <span className="ap-live-badge">
                    <span className="ap-live-dot" aria-hidden="true" />
                    Live
                  </span>
                </div>
              </div>

              <blockquote className="ap-quote-card__quote">
                "Feeling appreciated is one of the most important needs in the workplace. Thank you for always going above and beyond — you make this entire team so much better!"
              </blockquote>

              {/* Reaction chips */}
              <div className="ap-reactions">
                {[['❤️','24'],['🙌','18'],['⭐','31'],['🎉','12']].map(([emoji, count], i) => (
                  <div key={i} className="ap-reaction-chip">
                    <span>{emoji}</span>
                    <span>{count}</span>
                  </div>
                ))}
              </div>

              <div className="ap-quote-card__footer">
                <div className="ap-quote-card__avatars">
                  <span className="ap-avatar" style={{ background: '#00B894' }}>S</span>
                  <span className="ap-avatar" style={{ background: '#7C3AED' }}>O</span>
                  <span className="ap-avatar" style={{ background: '#FDCB6E', color: '#1a1a1a' }}>F</span>
                  <span className="ap-avatar ap-avatar--more">+15</span>
                </div>
                <span className="ap-quote-card__signers">18 teammates signed</span>
              </div>

              <div className="ap-quote-card__price-row">
                <span className="ap-price-label">One board · One price</span>
                <span className="ap-price-badge">$5</span>
              </div>

              <div className="ap-quote-card__shimmer" aria-hidden="true" />
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <FeatureCards pageType="appreciation" />

      {/* ── MEMORY MAP ── */}
      <MemoryMap pageType="appreciation" />

      {/* ── CELEBRATION GRID ── */}
      <CelebrationGrid themeClass="green" />

      {/* ── FAQ ── */}
      <FAQ data={faqItems} subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="appreciation-cta">
        <div className="container">
          <div className="appreciation-cta-box">
            <div className="ap-cta-icon" aria-hidden="true">✦</div>
            <h2 className="cta-title">Ready to create a memorable kudos card?</h2>
            <p className="cta-desc">Start building an appreciation board for your colleague in just 2 minutes.</p>
            <a href="https://workkudo.ai/signin" className="btn-primary btn-large animate-pulse-green">
              Create a Board for $5
            </a>
            <div className="ap-cta-trust">
              <span>✓ No subscription</span>
              <span>✓ Unlimited signers</span>
              <span>✓ Yours forever</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
