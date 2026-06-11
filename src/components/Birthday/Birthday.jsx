import { useState, useEffect, useRef } from 'react'
import './Birthday.css'
import FeatureCards from '../Shared/FeatureCards/FeatureCards'
import MemoryMap from '../Shared/MemoryMap/MemoryMap'
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid'
import FAQ from '../FAQ/FAQ'

export default function Birthday() {
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
    <div className="birthday-page">

      {/* ── HERO ── */}
      <section className="birthday-hero">
        <div className="birthday-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="birthday-hero__overlay" aria-hidden="true" />

        <div className="birthday-hero__container container">

          {/* Left */}
          <div className={`bd-hero-left ${mounted ? 'bd-hero-left--visible' : ''}`}>
            <h1 className="bd-hero-heading">
              Celebrate their birthday<br />
              <span className="bd-hero-heading-accent">the right way.</span>
            </h1>

            <p className="bd-hero-sub">
              A collaborative birthday board your whole team signs — messages, photos, memories — delivered as a keepsake they'll keep forever.
            </p>

            <div className="bd-hero-ctas">
              <a href="https://workkudo.ai/signin" className="bd-cta-primary">
                Create a Birthday Board
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Minimal trust line */}
            <p className="bd-hero-trust">
              Flat fee · $5 per board · Unlimited signers · Yours forever
            </p>
          </div>

          {/* Right — floating card */}
          <div className={`bd-hero-right ${mounted ? 'bd-hero-right--visible' : ''}`}>
            <div className="bd-quote-card">
              <div className="bd-quote-card__label">Birthday Card</div>

              <blockquote className="bd-quote-card__quote">
                "Another year older, another year wiser! Wishing you a day filled with celebration, cake, and a fantastic year ahead from the entire team."
              </blockquote>

              <div className="bd-quote-card__footer">
                <div className="bd-quote-card__avatars">
                  <span className="bd-avatar" style={{ background: '#FF7675' }}>S</span>
                  <span className="bd-avatar" style={{ background: '#FDCB6E' }}>O</span>
                  <span className="bd-avatar" style={{ background: '#00B894' }}>F</span>
                  <span className="bd-avatar bd-avatar--more">+22</span>
                </div>
                <span className="bd-quote-card__signers">25 teammates signed</span>
              </div>

              <div className="bd-quote-card__price-row">
                <span className="bd-price-label">One board · One price</span>
                <span className="bd-price-badge">$5</span>
              </div>

              {/* Animated shimmer line */}
              <div className="bd-quote-card__shimmer" aria-hidden="true" />
            </div>
          </div>

        </div>

      </section>

      {/* ── HOW IT WORKS SECTION ── */}
      <FeatureCards pageType="birthday" />

      {/* ── GLOBAL MEMORY MAP SECTION ── */}
      <MemoryMap pageType="birthday" />

      {/* ── CELEBRATION GRID ── */}
      <CelebrationGrid themeClass="rose" />

      {/* ── FAQ SECTION ── */}
      <FAQ data={faqItems} subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="birthday-cta">
        <div className="container">
          <div className="birthday-cta-box">
            <h2 className="cta-title">Ready to create a memorable birthday card?</h2>
            <p className="cta-desc">Start building a celebration board for your colleague in just 2 minutes.</p>
            <a href="https://workkudo.ai/signin" className="btn-primary btn-large animate-pulse-rose">
              Create a Board for $5
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
