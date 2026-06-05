import { useState, useEffect, useRef } from 'react'
import './Condolence.css'
import FeatureCards from '../Shared/FeatureCards/FeatureCards'
import MemoryMap from '../Shared/MemoryMap/MemoryMap'
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid'
import FAQ from '../FAQ/FAQ'

export default function Condolence() {
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
      a: "It's a one-time flat fee of $5 per board. No subscriptions, no hidden charges. You get unlimited contributors, unlimited posts, and lifetime access to download or view the tribute."
    },
    {
      q: "Can colleagues from anywhere contribute?",
      a: "Yes. Anyone with the private link can add their messages, shared memories, photos, or personal tributes. There is no limit to the number of contributors or posts."
    },
    {
      q: "Can I download the tribute as a PDF to give to the family?",
      a: "Absolutely. Once everyone has contributed, you can download a high-resolution, print-ready PDF of the entire memorial board — a beautiful keepsake for the family."
    },
    {
      q: "How long does a board stay active?",
      a: "Forever. The memorial board does not expire. Family members can revisit it, read every tribute, and download it at any time in the future."
    }
  ]

  return (
    <div className="condolence-page">

      {/* ── HERO ── */}
      <section className="condolence-hero">
        <div className="condolence-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="condolence-hero__overlay" aria-hidden="true" />

        {/* Soft floating orbs */}
        <div className="con-orbs" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`con-orb con-orb--${i + 1}`} />
          ))}
        </div>

        <div className="condolence-hero__container container">

          {/* Left */}
          <div className={`con-hero-left ${mounted ? 'con-hero-left--visible' : ''}`}>

            {/* Badge */}
            <div className="con-hero-badge">
              🕊️ Condolence
            </div>

            <h1 className="con-hero-heading">
              Offer comfort<br />
              <span className="con-hero-heading-accent">with kindness.</span>
            </h1>

            <p className="con-hero-sub">
              A compassionate group tribute board your whole team signs — heartfelt messages, shared memories, and words of comfort — delivered as a keepsake that honours a life well lived.
            </p>

            <div className="con-hero-ctas">
              <a href="#create" className="con-cta-primary">
                Create a Tribute Board
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#memory-map-shared" className="con-cta-ghost">See how it works</a>
            </div>

            <p className="con-hero-trust">
              Flat fee · $5 per board · Unlimited contributors · Yours forever
            </p>
          </div>

          {/* Right — floating card */}
          <div className={`con-hero-right ${mounted ? 'con-hero-right--visible' : ''}`}>
            <div className="con-quote-card">
              <div className="con-quote-card__label">💙 In Loving Memory</div>

              <blockquote className="con-quote-card__quote">
                "Michael touched so many lives with his kindness and warmth. He was a beacon of positivity and professionalism, and we are grateful for every moment we got to know him."
              </blockquote>

              <div className="con-quote-card__footer">
                <div className="con-quote-card__avatars">
                  <span className="con-avatar" style={{ background: '#4a6fa5' }}>S</span>
                  <span className="con-avatar" style={{ background: '#7c8ba8' }}>T</span>
                  <span className="con-avatar" style={{ background: '#5a7a6e' }}>A</span>
                  <span className="con-avatar con-avatar--more">+28</span>
                </div>
                <span className="con-quote-card__signers">31 colleagues signed</span>
              </div>

              {/* Dove & memorial strip */}
              <div className="con-memorial-strip">
                <div className="con-memorial-icon">🕊️</div>
                <div className="con-memorial-text">
                  <span className="con-memorial-name">In Memory of Michael Evans</span>
                  <span className="con-memorial-years">A beloved colleague · 1968 – 2026</span>
                </div>
              </div>

              <div className="con-quote-card__price-row">
                <span className="con-price-label">One tribute · One price</span>
                <span className="con-price-badge">$5</span>
              </div>

              <div className="con-quote-card__shimmer" aria-hidden="true" />
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <FeatureCards pageType="condolence" />

      {/* ── GLOBAL MEMORY MAP ── */}
      <MemoryMap pageType="condolence" />

      {/* ── CELEBRATION GRID ── */}
      <CelebrationGrid themeClass="blue" />

      {/* ── FAQ ── */}
      <FAQ data={faqItems} subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="condolence-cta">
        <div className="container">
          <div className="condolence-cta-box">
            <h2 className="con-cta-title">Create a heartfelt tribute today</h2>
            <p className="con-cta-desc">Help your team come together to honour and remember a cherished colleague in just 2 minutes.</p>
            <a href="#create" className="con-btn-primary con-animate-pulse">
              Create a Tribute for $5
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
