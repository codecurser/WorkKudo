import { useState, useEffect, useRef } from 'react'
import './SendOff.css'
import FeatureCards from '../Shared/FeatureCards/FeatureCards'
import MemoryMap from '../Shared/MemoryMap/MemoryMap'
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid'
import FAQ from '../FAQ/FAQ'

export default function SendOff() {
  const [mounted, setMounted] = useState(false)
  const bgRef = useRef(null)

  useEffect(() => {
    // Entrance animation
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // Parallax: move bg at 40% of scroll speed
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
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
    <div className="sendoff-page">

      {/* ── HERO ── */}
      <section className="sendoff-hero">
        <div className="sendoff-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="sendoff-hero__overlay" aria-hidden="true" />

        <div className="sendoff-hero__container container">

          {/* Left */}
          <div className={`so-hero-left ${mounted ? 'so-hero-left--visible' : ''}`}>
            <h1 className="so-hero-heading">
              Send them off<br />
              <span className="so-hero-heading-accent">the right way.</span>
            </h1>

            <p className="so-hero-sub">
              A collaborative farewell board your whole team signs — messages, photos, memories — delivered as a keepsake they'll keep forever.
            </p>

            <div className="so-hero-ctas">
              <a href="https://workkudo.ai/signin" className="so-cta-primary">
                Create a Send-Off Board
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#features" className="so-cta-ghost">How it works</a>
            </div>

            {/* Minimal trust line */}
            <p className="so-hero-trust">
              Flat fee · $5 per board · Unlimited signers · Yours forever
            </p>
          </div>

          {/* Right — floating card */}
          <div className={`so-hero-right ${mounted ? 'so-hero-right--visible' : ''}`}>
            <div className="so-quote-card">
              <div className="so-quote-card__label">Legacy Card</div>

              <blockquote className="so-quote-card__quote">
                "Goodbyes aren't the end of a journey — they're the beginning of a legacy carried forward by those you've inspired."
              </blockquote>

              <div className="so-quote-card__footer">
                <div className="so-quote-card__avatars">
                  <span className="so-avatar" style={{ background: '#FF6B2C' }}>S</span>
                  <span className="so-avatar" style={{ background: '#A78BFA' }}>M</span>
                  <span className="so-avatar" style={{ background: '#34D399' }}>J</span>
                  <span className="so-avatar so-avatar--more">+14</span>
                </div>
                <span className="so-quote-card__signers">17 teammates signed</span>
              </div>

              <div className="so-quote-card__price-row">
                <span className="so-price-label">One board · One price</span>
                <span className="so-price-badge">$5</span>
              </div>

              {/* Animated shimmer line */}
              <div className="so-quote-card__shimmer" aria-hidden="true" />
            </div>
          </div>

        </div>

      </section>

      {/* ── HOW IT WORKS SECTION ── */}
      <FeatureCards pageType="send-off" />

      {/* ── GLOBAL MEMORY MAP SECTION ── */}
      <MemoryMap pageType="send-off" />

      <CelebrationGrid />

      {/* ── FAQ SECTION ── */}
      <FAQ data={faqItems} subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="sendoff-cta">
        <div className="container">
          <div className="sendoff-cta-box">
            <h2 className="cta-title">Ready to create a memorable goodbye?</h2>
            <p className="cta-desc">Start building a legacy board for your colleague in just 2 minutes.</p>
            <a href="https://workkudo.ai/signin" className="btn-primary btn-large animate-pulse-orange">
              Create a Board for $5
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
