import { useState, useEffect, useRef } from 'react'
import './SpeedyRecovery.css'
import FeatureCards from '../Shared/FeatureCards/FeatureCards'
import MemoryMap from '../Shared/MemoryMap/MemoryMap'
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid'
import FAQ from '../FAQ/FAQ'

export default function SpeedyRecovery() {
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
      a: "It's a one-time flat fee of $5 per board. No subscriptions, no hidden charges. Unlimited contributors, unlimited posts, and lifetime access."
    },
    {
      q: "Can the whole team contribute get-well wishes?",
      a: "Absolutely! Anyone with the private link can add messages, fun GIFs, encouraging words, photos or videos. There's no limit on contributors or posts."
    },
    {
      q: "Can I download the board as a PDF to print?",
      a: "Yes! Download a high-resolution, print-ready PDF of the entire get-well board — perfect to mail or deliver with a wellness gift."
    },
    {
      q: "How long does a board stay active?",
      a: "Forever. The get-well board never expires. The recipient can revisit it, re-read every warm message, and download it any time."
    }
  ]

  return (
    <div className="recovery-page">

      {/* ── HERO ── */}
      <section className="recovery-hero">
        <div className="recovery-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="recovery-hero__overlay" aria-hidden="true" />

        {/* Floating healing orbs */}
        <div className="rec-orbs" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`rec-orb rec-orb--${i + 1}`} />
          ))}
        </div>

        <div className="recovery-hero__container container">

          {/* Left */}
          <div className={`rec-hero-left ${mounted ? 'rec-hero-left--visible' : ''}`}>

            <div className="rec-hero-badge">
              💚 Speedy Recovery
            </div>

            <h1 className="rec-hero-heading">
              Send warmth,<br />
              <span className="rec-hero-heading-accent">wish them well.</span>
            </h1>

            <p className="rec-hero-sub">
              A cheerful team get-well board filled with warm wishes, encouraging messages, and healing thoughts — delivered to lift their spirits right when they need it most.
            </p>

            <div className="rec-hero-ctas">
              <a href="#create" className="rec-cta-primary">
                Create a Get-Well Board
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#memory-map-shared" className="rec-cta-ghost">See how it works</a>
            </div>

            <p className="rec-hero-trust">
              Flat fee · $5 per board · Unlimited well-wishers · Yours forever
            </p>
          </div>

          {/* Right — floating card */}
          <div className={`rec-hero-right ${mounted ? 'rec-hero-right--visible' : ''}`}>
            <div className="rec-quote-card">
              <div className="rec-quote-card__label">💚 Get Well Soon</div>

              <blockquote className="rec-quote-card__quote">
                "Sam, we're all rooting for you! Take all the rest you need — we've got things covered here. Your energy and positivity are missed every single day. Get well soon!"
              </blockquote>

              <div className="rec-quote-card__footer">
                <div className="rec-quote-card__avatars">
                  <span className="rec-avatar" style={{ background: '#10b981' }}>J</span>
                  <span className="rec-avatar" style={{ background: '#059669' }}>C</span>
                  <span className="rec-avatar" style={{ background: '#0d9488' }}>Y</span>
                  <span className="rec-avatar rec-avatar--more">+16</span>
                </div>
                <span className="rec-quote-card__signers">19 teammates signed</span>
              </div>

              {/* Recovery progress strip */}
              <div className="rec-wellness-strip">
                <div className="rec-wellness-item">
                  <span className="rec-wellness-emoji">😴</span>
                  <span className="rec-wellness-label">Rest</span>
                </div>
                <div className="rec-wellness-bar">
                  <div className="rec-wellness-fill" style={{ width: '75%' }} />
                </div>
                <div className="rec-wellness-item">
                  <span className="rec-wellness-emoji">💪</span>
                  <span className="rec-wellness-label">Recovery</span>
                </div>
                <div className="rec-wellness-bar">
                  <div className="rec-wellness-fill" style={{ width: '45%' }} />
                </div>
                <div className="rec-wellness-item">
                  <span className="rec-wellness-emoji">🌟</span>
                  <span className="rec-wellness-label">Back Soon!</span>
                </div>
              </div>

              <div className="rec-quote-card__price-row">
                <span className="rec-price-label">One board · One price</span>
                <span className="rec-price-badge">$5</span>
              </div>

              <div className="rec-quote-card__shimmer" aria-hidden="true" />
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <FeatureCards pageType="speedy-recovery" />

      {/* ── GLOBAL MEMORY MAP ── */}
      <MemoryMap pageType="speedy-recovery" />

      {/* ── CELEBRATION GRID ── */}
      <CelebrationGrid themeClass="green" />

      {/* ── FAQ ── */}
      <FAQ data={faqItems} subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="recovery-cta">
        <div className="container">
          <div className="recovery-cta-box">
            <h2 className="rec-cta-title">Brighten someone's recovery today</h2>
            <p className="rec-cta-desc">Build a cheerful get-well board in just 2 minutes and send healing wishes their way.</p>
            <a href="#create" className="rec-btn-primary rec-animate-pulse">
              Create a Board for $5
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
