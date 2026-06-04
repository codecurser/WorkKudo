import { useState, useEffect, useRef } from 'react'
import './SendOff.css'
import SendOffHowItWorks from './SendOffHowItWorks'
import CelebrationGrid from './CelebrationGrid'

export default function SendOff() {
  const [activeFaq, setActiveFaq] = useState(null)
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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

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
              <a href="#create" className="so-cta-primary">
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
      <SendOffHowItWorks />

      {/* ── FEATURES SECTION ── */}
      <section className="sendoff-features section" id="features">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Everything You Need for a Perfect Send-off</h2>
            <p className="section-subtitle">Make their departure unforgettable with rich collaborative features.</p>
          </header>

          <div className="so-features-grid">
            <div className="so-feature-card">
              <div className="so-feature-icon orange-icon">💬</div>
              <h3 className="so-feature-card-title">Unlimited Signatures</h3>
              <p className="so-feature-card-desc">Invite the whole company, division, or team. There's no cap on how many people can leave a message.</p>
            </div>
            <div className="so-feature-card">
              <div className="so-feature-icon lavender-icon">🎨</div>
              <h3 className="so-feature-card-title">Rich Customization</h3>
              <p className="so-feature-card-desc">Add GIFs, custom images, change backgrounds, and choose fonts that match their unique personality.</p>
            </div>
            <div className="so-feature-card">
              <div className="so-feature-icon mint-icon">🎞️</div>
              <h3 className="so-feature-card-title">Media &amp; Reels</h3>
              <p className="so-feature-card-desc">Embed video messages directly into the board. Turn comments into a beautiful visual wall of memories.</p>
            </div>
            <div className="so-feature-card">
              <div className="so-feature-icon beige-icon">📖</div>
              <h3 className="so-feature-card-title">Downloadable Keepsakes</h3>
              <p className="so-feature-card-desc">Export the entire board as a high-resolution, print-ready PDF book for them to keep forever.</p>
            </div>
          </div>
        </div>
      </section>

      <CelebrationGrid />

      {/* ── FAQ SECTION ── */}
      <section className="sendoff-faq section">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Got questions? We've got answers.</p>
          </header>

          <div className="faq-accordion-container">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? 'faq-item--active' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <button className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-chevron-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer"><p>{item.a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="sendoff-cta">
        <div className="container">
          <div className="sendoff-cta-box">
            <h2 className="cta-title">Ready to create a memorable goodbye?</h2>
            <p className="cta-desc">Start building a legacy board for your colleague in just 2 minutes.</p>
            <a href="#create" className="btn-primary btn-large animate-pulse-orange">
              Create a Board for $5
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
