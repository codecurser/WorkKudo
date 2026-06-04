import { useEffect, useRef, useState } from 'react'
import './Examples.css'

const EXAMPLES_DATA = [
  {
    id: 'birthday',
    category: 'Birthday Celebration',
    accentColor: '#FF6B2C',
    gradient: 'linear-gradient(135deg, #FFE9DF 0%, #FFCCB4 100%)',
    icon: '🎂',
    title: 'Happy Birthday!',
    message: 'Wishing you the absolute best today, Sarah! Cheers to another great year.',
    author: '— Michael K.'
  },
  {
    id: 'farewell',
    category: 'Farewell Sendoff',
    accentColor: '#34D399',
    gradient: 'linear-gradient(135deg, #E6FBF3 0%, #A7F3D0 100%)',
    icon: '🚀',
    title: "We'll Miss You!",
    message: 'Good luck at your new role, Alex! Thank you for being an amazing teammate.',
    author: '— HR Team'
  },
  {
    id: 'milestone',
    category: 'Career Milestone',
    accentColor: '#1A2B4A',
    gradient: 'linear-gradient(135deg, #EEF1F7 0%, #C3D0E6 100%)',
    icon: '🏆',
    title: 'Work Anniversary',
    message: 'Congrats on 5 years, David! Thank you for your dedication and leadership.',
    author: '— Product Team'
  },
  {
    id: 'getwell',
    category: 'Healing Wishes',
    accentColor: '#F59E0B',
    gradient: 'linear-gradient(135deg, #FFFBEB 0%, #FDE68A 100%)',
    icon: '❤️',
    title: 'Thinking of You',
    message: 'Wishing you a speedy recovery, Elena! Sending you love and positive vibes.',
    author: '— Engineering Dept'
  },
  {
    id: 'retirement',
    category: 'Happy Retirement',
    accentColor: '#A78BFA',
    gradient: 'linear-gradient(135deg, #F5F3FF 0%, #DDD6FE 100%)',
    icon: '🌴',
    title: 'Enjoy Retirement',
    message: 'Cheers to your next chapter, Robert! You will be deeply missed here.',
    author: '— Management'
  },
  {
    id: 'promotion',
    category: 'Job Promotion',
    accentColor: '#EC4899',
    gradient: 'linear-gradient(135deg, #FDF2F8 0%, #FBCFE8 100%)',
    icon: '🎉',
    title: 'Congratulations!',
    message: 'So proud of your new Director role, Maya! Extremely well-deserved.',
    author: '— Leadership Ops'
  }
]

function getEmojiPool(id) {
  switch (id) {
    case 'birthday':
      return ['🎂', '🎉', '🎈', '🎁', '🧁', '✨', '🥳']
    case 'farewell':
      return ['🚀', '👋', '💼', '😢', '💪', '🌟', '✈️']
    case 'milestone':
      return ['🏆', '🎖️', '💼', '👏', '⭐', '🙌', '💯']
    case 'getwell':
      return ['❤️', '🩹', '🍵', '☀️', '🌸', '🤗', '🙏']
    case 'retirement':
      return ['🌴', '🍹', '🏖️', '⛳', '🕶️', '⛵', '🚶']
    case 'promotion':
      return ['🎉', '🥂', '📈', '🔥', '👑', '👏', '🚀']
    default:
      return ['⭐', '✨', '💖']
  }
}

function ExampleCard({ ex, idx, cardRef }) {
  const [emojis, setEmojis] = useState([])

  const handleMouseEnter = () => {
    const emojiPool = getEmojiPool(ex.id)
    // Spawn 10 falling emojis with randomized positioning and speeds
    const newEmojis = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      char: emojiPool[Math.floor(Math.random() * emojiPool.length)],
      left: Math.random() * 80 + 10, // range: 10% to 90%
      delay: Math.random() * 0.25, // staggered delay
      duration: 1.6 + Math.random() * 0.6, // slower speed: 1.6s to 2.2s
      size: 24 + Math.random() * 20, // larger size: 24px to 44px
      rotation: Math.random() * 360 - 180, // spin rotation
    }))
    setEmojis(newEmojis)
  }

  const handleMouseLeave = () => {
    setEmojis([])
  }

  return (
    <div 
      ref={cardRef}
      className="examples__card"
      style={{ transitionDelay: `${(idx % 3) * 120}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Header Bar */}
      <div 
        className="examples__card-header" 
        style={{ backgroundColor: ex.accentColor }}
      >
        <span>{ex.category}</span>
      </div>

      {/* Placeholder Board Image Simulation */}
      <div 
        className="examples__board-placeholder"
        style={{ background: ex.gradient }}
      >
        {/* Emojis Burst Container */}
        <div className="examples__emoji-burst-container">
          {emojis.map((emoji) => (
            <span 
              key={emoji.id}
              className="examples__burst-emoji"
              style={{
                left: `${emoji.left}%`,
                fontSize: `${emoji.size}px`,
                animationDelay: `${emoji.delay}s`,
                animationDuration: `${emoji.duration}s`,
                '--rotate-end': `${emoji.rotation}deg`
              }}
            >
              {emoji.char}
            </span>
          ))}
        </div>

        {/* Simulated Board Title */}
        <div className="examples__board-title-wrap">
          <span className="examples__board-emoji" role="img" aria-label={ex.category}>
            {ex.icon}
          </span>
          <h4>{ex.title}</h4>
        </div>

        {/* Simulated Message Card */}
        <div className="examples__mock-card">
          <p className="examples__mock-text">"{ex.message}"</p>
          <span className="examples__mock-author">{ex.author}</span>
        </div>
      </div>
    </div>
  )
}

export default function Examples() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('examples__card--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="examples" id="examples">
      <div className="container">
        
        <div className="examples__header">
          <h2>Explore WorkKudo Examples</h2>
          <p>Choose an occasion to view how teams celebrate milestones and appreciate their colleagues.</p>
        </div>

        <div className="examples__grid">
          {EXAMPLES_DATA.map((ex, idx) => (
            <ExampleCard 
              key={ex.id} 
              ex={ex} 
              idx={idx} 
              cardRef={(el) => (cardRefs.current[idx] = el)} 
            />
          ))}
        </div>

        <div className="examples__action">
          <a href="#create" className="btn-primary">
            Start a Board
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M9.5 4.5l5 4.5-5 4.5" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
