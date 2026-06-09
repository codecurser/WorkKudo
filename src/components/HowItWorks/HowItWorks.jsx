import { useEffect, useRef, useState } from 'react'
import './HowItWorks.css'

import imgBoard from '../../assets/new-board.png'
import imgInvite from '../../assets/invite-people.png'
import imgSurprise from '../../assets/surprise-them.png'

const STEPS = [
  {
    id: 1,
    emoji: '🎨',
    title: 'Create a board',
    desc: 'Pick the occasion, name the person, set a deadline. Done in under a minute.',
    image: imgBoard,
    blobGradient: 'linear-gradient(135deg, var(--orange) 0%, var(--orange-light) 100%)'
  },
  {
    id: 2,
    emoji: '📬',
    title: 'Invite your team',
    desc: 'Share a link or email contributors directly. No accounts needed to add a message.',
    image: imgInvite,
    blobGradient: 'linear-gradient(135deg, #34D399 0%, #A7F3D0 100%)'
  },
  {
    id: 3,
    emoji: '🥳',
    title: 'Surprise them',
    desc: 'Reveal the board when the moment comes. Download, share, or just send the link.',
    image: imgSurprise,
    blobGradient: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)'
  }
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const stepRefs = useRef([])
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Start drawing when the top of container is 70% down the screen
      const startPoint = windowHeight * 0.7
      // Finish drawing exactly when the bottom of the container reaches 60% of the screen height
      const endPoint = (windowHeight * 0.6) - rect.height
      
      let progress = (startPoint - rect.top) / (startPoint - endPoint)
      progress = Math.min(Math.max(progress, 0), 1) // Clamp 0 to 1
      
      setScrollProgress(progress)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hiw__step--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 }
    )
    
    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="hiw" id="how-it-works" ref={containerRef}>
      <div className="container">
        
        <div className="hiw__header">
          <h2>How it works</h2>
          <p>Three simple steps to make someone's day.</p>
        </div>

        <div className="hiw__timeline-wrapper">
          
          {/* Animated SVG Curve */}
          <div className="hiw__svg-container">
            <svg className="hiw__svg-line" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Background faint line */}
              <path 
                d="M 50 0 C 10 20, 10 30, 50 50 C 90 70, 90 80, 50 100" 
                fill="none" 
                stroke="#F3F4F6" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
              />
              {/* Animated orange line */}
              <path 
                d="M 50 0 C 10 20, 10 30, 50 50 C 90 70, 90 80, 50 100" 
                fill="none" 
                stroke="var(--orange)" 
                strokeWidth="4" 
                vectorEffect="non-scaling-stroke"
                pathLength="1000"
                strokeDasharray="1000"
                strokeDashoffset={1000 - (scrollProgress * 1000)}
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="hiw__steps">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 !== 0
              return (
                <div 
                  key={step.id} 
                  ref={el => stepRefs.current[idx] = el}
                  className={`hiw__step ${isEven ? 'hiw__step--even' : 'hiw__step--odd'}`}
                >
                  
                  {/* Text Content */}
                  <div className="hiw__step-content">
                    <span className="hiw__step-number">0{step.id}</span>
                    <div className="hiw__step-emoji-wrap">
                      <div className="hiw__step-emoji">{step.emoji}</div>
                    </div>
                    <h3 className="hiw__step-title">{step.title}</h3>
                    <p className="hiw__step-desc">{step.desc}</p>
                  </div>

                  {/* Animated Blob Glass Card */}
                  <div className="hiw__step-image-wrapper">
                    <div className="hiw__animated-card">
                      
                      {/* Floating Blob */}
                      <div 
                        className="hiw__card-blob" 
                        style={{ background: step.blobGradient }}
                      />
                      
                      {/* Glass Panel */}
                      <div className="hiw__card-bg">
                        {/* Mac Bar inside Glass */}
                        <div className="hiw__mac-bar">
                          <div className="hiw__mac-dots">
                            <span style={{ background: '#FF5F57' }} />
                            <span style={{ background: '#FEBC2E' }} />
                            <span style={{ background: '#28C840' }} />
                          </div>
                          <div className="hiw__mac-url">workkudo.ai</div>
                        </div>
                        <img src={step.image} alt={step.title} className="hiw__mac-img" />
                      </div>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
