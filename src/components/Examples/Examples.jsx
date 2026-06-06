import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Examples.css'

// Import Backdrop Images
import imgBirthday from '../../assets/birthday_backdrop.png'
import imgFarewell from '../../assets/farewell_backdrop.png'
import imgMilestone from '../../assets/carrier_milestone.png'
import imgGetWell from '../../assets/getwellsoon_backdrop.png'
import imgRetirement from '../../assets/retirement_backdrop.png'
import imgPromotion from '../../assets/promotion_backdrop.png'

const EXAMPLES_DATA = [
  {
    id: 'birthday',
    category: 'Birthday Celebration',
    accentColor: '#FF6B2C',
    image: imgBirthday,
    message: 'Wishing you the absolute best today, Sarah! Cheers to another great year.',
    author: '— Michael K.'
  },
  {
    id: 'farewell',
    category: 'Farewell Sendoff',
    accentColor: '#34D399',
    image: imgFarewell,
    message: 'Good luck at your new role, Alex! Thank you for being an amazing teammate.',
    author: '— HR Team'
  },
  {
    id: 'milestone',
    category: 'Career Milestone',
    accentColor: '#1A2B4A',
    image: imgMilestone,
    message: 'Congrats on 5 years, David! Thank you for your dedication and leadership.',
    author: '— Product Team'
  },
  {
    id: 'getwell',
    category: 'Healing Wishes',
    accentColor: '#F59E0B',
    image: imgGetWell,
    message: 'Wishing you a speedy recovery, Elena! Sending you love and positive vibes.',
    author: '— Engineering Dept'
  },
  {
    id: 'retirement',
    category: 'Happy Retirement',
    accentColor: '#A78BFA',
    image: imgRetirement,
    message: 'Cheers to your next chapter, Robert! You will be deeply missed here.',
    author: '— Management'
  },
  {
    id: 'promotion',
    category: 'Job Promotion',
    accentColor: '#EC4899',
    image: imgPromotion,
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

function ExampleCard({ ex, idx, cardRef, onClick }) {
  const [emojis, setEmojis] = useState([])

  const handleMouseEnter = () => {
    const emojiPool = getEmojiPool(ex.id)
    const newEmojis = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      char: emojiPool[Math.floor(Math.random() * emojiPool.length)],
      left: Math.random() * 80 + 10,
      delay: Math.random() * 0.25,
      duration: 1.6 + Math.random() * 0.6,
      size: 24 + Math.random() * 20,
      rotation: Math.random() * 360 - 180,
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
      style={{ transitionDelay: `${(idx % 3) * 120}ms`, cursor: 'pointer' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(ex.id)}
    >
      {/* Card Header Bar */}
      <div 
        className="examples__card-header" 
        style={{ backgroundColor: ex.accentColor }}
      >
        <span>{ex.category}</span>
      </div>

      {/* Board Image Container */}
      <div className="examples__board-placeholder">
        
        {/* Darkened Overlay to dull exposure */}
        <div className="examples__board-overlay" />

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

        {/* Real Board Image Backdrop */}
        <img src={ex.image} alt={ex.category} className="examples__board-img" />

        {/* Simulated Message Card Overlay */}
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
  const navigate = useNavigate()

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
              onClick={(id) => ['birthday', 'farewell', 'milestone', 'getwell', 'retirement', 'promotion'].includes(id) ? navigate(`/examples/${id}`) : alert('Page coming soon!')}
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
