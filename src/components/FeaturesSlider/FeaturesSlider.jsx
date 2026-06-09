import { useState, useEffect } from 'react'
import './FeaturesSlider.css'
import imgBoard from '../../assets/the-board.png'
import imgDashboard from '../../assets/dashboard.png'
import imgAnalytics from '../../assets/analytics.png'

const FEATURES = [
  {
    id: 0,
    title: 'Beautiful, collaborative boards',
    desc: 'Every contributor adds a card — messages, GIFs, photos, reactions. The result is a board worth keeping.',
    label: '📌 The Board',
    image: imgBoard
  },
  {
    id: 1,
    title: 'All your boards, one place',
    desc: 'See every board you\'ve created or contributed to. Track status, deadlines, and contributors at a glance.',
    label: '🏠 Dashboard',
    image: imgDashboard
  },
  {
    id: 2,
    title: 'Insights on recognition',
    desc: 'See who\'s celebrating and who\'s being celebrated. Understand engagement across your team over time.',
    label: '📊 Analytics',
    image: imgAnalytics
  }
]

export default function FeaturesSlider() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % FEATURES.length)
    }, 2250) // Slide every 2.5 seconds
    
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="features__heading">
          Everything your team needs,<br />nothing it doesn't.
        </h2>
        
        <div 
          className="features__slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {FEATURES.map((feature, idx) => {
            let className = 'feature-card'
            if (idx === activeIndex) className += ' feature-card--active'
            else if (idx === (activeIndex - 1 + FEATURES.length) % FEATURES.length) className += ' feature-card--prev'
            else if (idx === (activeIndex + 1) % FEATURES.length) className += ' feature-card--next'
            

            return (
              <div 
                key={feature.id} 
                className={className} 
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${feature.title}`}
              >
                <div className="feature-card__img-wrapper">
                  <div className="feature-card__mac-bar">
                    <div className="feature-card__mac-dots">
                      <span style={{ background: '#FF5F57' }} />
                      <span style={{ background: '#FEBC2E' }} />
                      <span style={{ background: '#28C840' }} />
                    </div>
                    <div className="feature-card__mac-url">workkudo.ai</div>
                  </div>
                  <img src={feature.image} alt={feature.title} className="feature-card__img" />
                </div>
                <div className="feature-card__content">
                  <span className="feature-card__label">{feature.label}</span>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__desc">{feature.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
