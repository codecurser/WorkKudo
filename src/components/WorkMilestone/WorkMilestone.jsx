import { useState, useEffect, useRef } from 'react'
import './WorkMilestone.css'
import FeatureCards from '../Shared/FeatureCards/FeatureCards'
import MemoryMap from '../Shared/MemoryMap/MemoryMap'
import CelebrationGrid from '../Shared/CelebrationGrid/CelebrationGrid'
import FAQ from '../FAQ/FAQ'

export default function WorkMilestone() {
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
      q: "Can the whole team contribute congratulations?",
      a: "Yes! Anyone with the link can add their messages, photos, GIFs, milestone memories or videos. There is no limit to the number of contributors or posts."
    },
    {
      q: "Can I download the board as a PDF to print?",
      a: "Absolutely. Once everyone has signed, you can download a high-resolution, print-ready PDF of the entire milestone board — perfect for framing or gifting."
    },
    {
      q: "How long does a board stay active?",
      a: "Forever. Your milestone boards never expire. You can revisit them, read old messages, and download them at any time in the future."
    }
  ]

  return (
    <div className="milestone-page">

      {/* ── HERO ── */}
      <section className="milestone-hero">
        <div className="milestone-hero__bg" ref={bgRef} aria-hidden="true" />
        <div className="milestone-hero__overlay" aria-hidden="true" />

        {/* Floating stars */}
        <div className="wm-stars" aria-hidden="true">
          {[...Array(7)].map((_, i) => (
            <span key={i} className={`wm-star wm-star--${i + 1}`} />
          ))}
        </div>

        <div className="milestone-hero__container container">

          {/* Left */}
          <div className={`wm-hero-left ${mounted ? 'wm-hero-left--visible' : ''}`}>

            {/* <div className="wm-hero-badge">
              🏆 Work Milestone
            </div> */}

            <h1 className="wm-hero-heading">
              Celebrate every<br />
              <span className="wm-hero-heading-accent">career milestone.</span>
            </h1>

            <p className="wm-hero-sub">
              A collaborative milestone board your whole team signs — congratulations, career highlights, and shared memories — delivered as a stunning keepsake they'll treasure for years.
            </p>

            <div className="wm-hero-ctas">
              <a href="https://workkudo.ai/signin" className="wm-cta-primary">
                Create a Milestone Board
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#memory-map-shared" className="wm-cta-ghost">See how it works</a>
            </div>

            <p className="wm-hero-trust">
              Flat fee · $5 per board · Unlimited signers · Yours forever
            </p>
          </div>

          {/* Right — floating card */}
          <div className={`wm-hero-right ${mounted ? 'wm-hero-right--visible' : ''}`}>
            <div className="wm-quote-card">
              <div className="wm-quote-card__label">⭐ Work Anniversary · 5 Years</div>

              <blockquote className="wm-quote-card__quote">
                "Five years of brilliance, dedication and leadership. You have made this company a better place every single day. Here's to the next five and many more milestones ahead!"
              </blockquote>

              <div className="wm-quote-card__footer">
                <div className="wm-quote-card__avatars">
                  <span className="wm-avatar" style={{ background: '#7c3aed' }}>A</span>
                  <span className="wm-avatar" style={{ background: '#5b21b6' }}>N</span>
                  <span className="wm-avatar" style={{ background: '#f59e0b' }}>M</span>
                  <span className="wm-avatar wm-avatar--more">+19</span>
                </div>
                <span className="wm-quote-card__signers">22 teammates signed</span>
              </div>

              {/* Milestone badge strip */}
              <div className="wm-badge-strip">
                <div className="wm-badge-item wm-badge-item--active">
                  <span className="wm-badge-icon">🏅</span>
                  <span className="wm-badge-label">1 Year</span>
                </div>
                <div className="wm-badge-connector" />
                <div className="wm-badge-item wm-badge-item--active">
                  <span className="wm-badge-icon">🥈</span>
                  <span className="wm-badge-label">3 Years</span>
                </div>
                <div className="wm-badge-connector" />
                <div className="wm-badge-item wm-badge-item--current">
                  <span className="wm-badge-icon">🏆</span>
                  <span className="wm-badge-label">5 Years</span>
                </div>
              </div>

              <div className="wm-quote-card__price-row">
                <span className="wm-price-label">One board · One price</span>
                <span className="wm-price-badge">$5</span>
              </div>

              <div className="wm-quote-card__shimmer" aria-hidden="true" />
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <FeatureCards pageType="work-milestone" />

      {/* ── GLOBAL MEMORY MAP ── */}
      <MemoryMap pageType="work-milestone" />

      {/* ── CELEBRATION GRID ── */}
      <CelebrationGrid themeClass="purple" />

      {/* ── FAQ ── */}
      <FAQ data={faqItems} subtitle="Got questions? We've got answers." />

      {/* ── BOTTOM CTA ── */}
      <section className="milestone-cta">
        <div className="container">
          <div className="milestone-cta-box">
            <h2 className="wm-cta-title">Ready to celebrate a career milestone?</h2>
            <p className="wm-cta-desc">Build a stunning milestone board for your teammate in just 2 minutes.</p>
            <a href="https://workkudo.ai/signin" className="wm-btn-primary wm-animate-pulse">
              Create a Board for $5
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
