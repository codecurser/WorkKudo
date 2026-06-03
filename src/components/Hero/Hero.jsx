import './Hero.css'
import heroBg from '../../assets/workkudologo.png'

const stats = [
  { value: '10K+', label: 'Teams worldwide',    color: 'var(--orange)' },
  { value: '98%',  label: 'Employee happiness', color: 'var(--mint)' },
  { value: '3x',   label: 'Engagement boost',   color: 'var(--lavender)' },
]

const kudoCards = [
  {
    id: 1,
    from: 'Sarah M.',
    to: 'Alex K.',
    emoji: '🚀',
    message: 'Incredible work on the product launch! You made it look effortless.',
    tag: 'Innovation',
    tagColor: 'badge-lavender',
    delay: 0,
  },
  {
    id: 2,
    from: 'James T.',
    to: 'Priya S.',
    emoji: '❤️',
    message: 'Your support during the deadline crunch meant everything to the team.',
    tag: 'Teamwork',
    tagColor: 'badge-mint',
    delay: 150,
  },
  {
    id: 3,
    from: 'Maria L.',
    to: 'David R.',
    emoji: '⭐',
    message: 'Above and beyond, as always. The client loved the presentation!',
    tag: 'Excellence',
    tagColor: 'badge-orange',
    delay: 300,
  },
]

function KudoCard({ card }) {
  return (
    <div
      className="hero__kudo-card animate-fade-up"
      style={{ animationDelay: `${card.delay}ms`, opacity: 0 }}
    >
      <div className="hero__kudo-header">
        <span className="hero__kudo-emoji">{card.emoji}</span>
        <div>
          <p className="hero__kudo-from">{card.from} → <strong>{card.to}</strong></p>
          <span className={`badge ${card.tagColor}`}>{card.tag}</span>
        </div>
      </div>
      <p className="hero__kudo-message">"{card.message}"</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--orange" aria-hidden="true" />
      <div className="hero__blob hero__blob--navy"   aria-hidden="true" />
      <div className="hero__blob hero__blob--lavender" aria-hidden="true" />

      <div className="container hero__inner">

        {/* Left — Text Content */}
        <div className="hero__content">
          <div className="badge badge-orange animate-fade-up" style={{ opacity: 0 }}>
            <span>✨</span> #1 Employee Recognition Platform
          </div>

          <h1 className="hero__heading animate-fade-up delay-100" style={{ opacity: 0 }}>
            Make Every
            <span className="gradient-text"> Kudos </span>
            Count
          </h1>

          <p className="hero__subtext animate-fade-up delay-200" style={{ opacity: 0 }}>
            Build a culture of appreciation that drives engagement, reduces turnover,
            and makes your team genuinely happy to come to work — every single day.
          </p>

          {/* CTA Buttons */}
          <div className="hero__cta animate-fade-up delay-300" style={{ opacity: 0 }}>
            <a href="#signup" className="btn-primary hero__btn-main">
              Start Free Today
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#demo" className="btn-secondary hero__btn-demo">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M7 6.5l5 2.5-5 2.5V6.5z" fill="currentColor"/>
              </svg>
              Watch Demo
            </a>
          </div>

          {/* Social proof */}
          <div className="hero__avatars animate-fade-up delay-400" style={{ opacity: 0 }}>
            <div className="hero__avatar-stack">
              {['S', 'J', 'A', 'M', 'R'].map((l, i) => (
                <div key={i} className="hero__avatar" style={{ zIndex: 5 - i }}>
                  {l}
                </div>
              ))}
            </div>
            <p className="hero__avatars-text">
              Trusted by <strong>50,000+</strong> employees globally
            </p>
          </div>
        </div>

        {/* Right — Visual */}
        <div className="hero__visual animate-fade-up delay-200" style={{ opacity: 0 }}>
          {/* Kudo Cards */}
          <div className="hero__cards">
            {kudoCards.map(card => <KudoCard key={card.id} card={card} />)}
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {stats.map(stat => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
