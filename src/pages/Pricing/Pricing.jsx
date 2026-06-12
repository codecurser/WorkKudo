import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'
import logo from '../../assets/workkudosvg.svg'

const FEATURES = [
  { id: 1, text: 'Unlimited contributors — share the link, anyone can add a message' },
  { id: 2, text: 'Unlimited messages, GIFs, and images per board' },
  { id: 3, text: 'Board stays live permanently — revisit any time' },
  { id: 4, text: 'Media (images & videos) stored for 90 days after board deletion' },
  { id: 5, text: 'Export board as a beautiful printable PDF / PNG' },
  { id: 6, text: 'Email delivery to the honoree' },
  { id: 7, text: 'Contributor access is always free' }
]

export default function Pricing() {
  const [boardsCount, setBoardsCount] = useState(1)
  const [promoCode, setPromoCode] = useState('')
  const [promoSuccess, setPromoSuccess] = useState(false)
  const [promoError, setPromoError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Pricing — WorkKudo'
    return () => { document.title = 'WorkKudo' }
  }, [])

  const handleApplyPromo = (e) => {
    e.preventDefault()
    setPromoError('Promo code feature is not yet functional (Coming soon!)')
    setPromoSuccess(false)
  }

  // Calculate pricing
  const basePricePerBoard = 5
  const totalPrice = promoSuccess ? 0 : boardsCount * basePricePerBoard

  const getSliderLabel = (count) => {
    if (count === 1) return 'Perfect for a single milestone celebration.'
    if (count <= 3) return 'Great for departmental birthdays & farewells.'
    if (count <= 6) return 'Ideal for regular team recognition & appreciation.'
    return 'Complete corporate coverage for the year!'
  }

  return (
    <div className="pricing-page">
      
      {/* ── Header ── */}
      <header className="pricing-page__header">
        <div className="pricing-page__header-inner">
          <Link to="/" className="pricing-page__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            WorkKudo
          </Link>
          <a href="/" className="pricing-page__logo">
            <img src={logo} alt="WorkKudo" className="pricing-page__logo-img" />
            <span className="pricing-page__logo-name">WorkKudo</span>
          </a>
        </div>
      </header>

      <main className="pricing-page__content">
        <div className="pricing-page__container">
          
          {/* ── Intro ── */}
          <div className="pricing-page__intro">
            <h1 className="pricing-page__title">One board. One price. No surprises.</h1>
            <p className="pricing-page__subtitle">
              Contribute to any board for free — you only pay when you create one.
            </p>
          </div>

          {/* ── Interactive Pricing Calculator Card ── */}
          <div className="pricing-page__calculator-section">
            <div className="pricing-card">
              <div className="pricing-card__grid">
                
                {/* Left Panel: Pricing / Slider */}
                <div className="pricing-card__left">
                  <span className="pricing-card__popular-badge">Most Popular</span>
                  <h3 className="pricing-card__heading">Per Board Pricing</h3>
                  
                  <div className="pricing-card__price-wrapper">
                    <span className="pricing-card__currency">$</span>
                    <span className="pricing-card__amount">{totalPrice}</span>
                    <span className="pricing-card__period">
                      {promoSuccess ? 'credited' : `for ${boardsCount} board${boardsCount > 1 ? 's' : ''}`}
                    </span>
                  </div>
                  
                  <p className="pricing-card__subheader">
                    One flat fee. No subscriptions. No per-contributor charges.
                  </p>

                  {/* Interactive Board Slider */}
                  {!promoSuccess && (
                    <div className="pricing-card__slider-wrap">
                      <div className="pricing-card__slider-labels">
                        <span>Boards to Create</span>
                        <span className="pricing-card__slider-count">{boardsCount}</span>
                      </div>
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        value={boardsCount} 
                        onChange={(e) => setBoardsCount(parseInt(e.target.value))}
                        className="pricing-card__slider"
                      />
                      <p className="pricing-card__slider-tip">
                        {getSliderLabel(boardsCount)}
                      </p>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="pricing-card__action">
                    <button className="btn-primary pricing-card__btn">
                      Create a board for {promoSuccess ? 'Free' : `$${totalPrice}`}
                    </button>
                    <p className="pricing-card__footnote">
                      Secure payment via Stripe · No account needed to contribute
                    </p>
                  </div>
                </div>

                {/* Right Panel: Features List */}
                <div className="pricing-card__right">
                  <h4 className="pricing-card__features-heading">What's Included</h4>
                  <ul className="pricing-card__features">
                    {FEATURES.map((feat) => (
                      <li key={feat.id} className="pricing-card__feature">
                        <span className="pricing-card__feature-check">✓</span>
                        <span className="pricing-card__feature-text">{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* ── Sub Details Grid ── */}
          <div className="pricing-page__details-grid">
            
            {/* Credit Code */}
            <div className="detail-card">
              <div className="detail-card__icon">🎁</div>
              <h4>Have a credit?</h4>
              <p>
                Credits are gifted by our team for special occasions or promotions. Each credit covers one board, no payment needed.
              </p>
              
              {/* Interactive Credit Form */}
              <form onSubmit={handleApplyPromo} className="detail-card__promo-form">
                <input 
                  type="text" 
                  placeholder="Enter code (e.g. WELCOME)" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={promoSuccess}
                  className="detail-card__promo-input"
                />
                <button 
                  type="submit" 
                  disabled={promoSuccess}
                  className="detail-card__promo-btn"
                >
                  {promoSuccess ? 'Applied' : 'Apply'}
                </button>
              </form>
              {promoSuccess && (
                <p className="detail-card__promo-success">
                  🎉 Code applied! 1 Free Board Credit Active.
                </p>
              )}
              {promoError && (
                <p className="detail-card__promo-error">{promoError}</p>
              )}
            </div>

            {/* Free Contributions */}
            <div className="detail-card">
              <div className="detail-card__icon">👥</div>
              <h4>Contributing is always free</h4>
              <p>
                Anyone can add messages, GIFs, images and reactions to a board without creating an account or paying anything.
              </p>
            </div>

            {/* Data Safety */}
            <div className="detail-card">
              <div className="detail-card__icon">🔒</div>
              <h4>Your data is safe</h4>
              <p>
                All data is stored securely. Media files on paid boards are retained for 90 days after deletion. We never sell your data.
              </p>
            </div>

          </div>

          {/* ── Footer Link ── */}
          <div className="pricing-page__footer">
            <Link to="/privacy" className="pricing-page__privacy-link">
              Privacy Policy →
            </Link>
          </div>

        </div>
      </main>

    </div>
  )
}
