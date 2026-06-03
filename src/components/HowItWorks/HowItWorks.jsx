import { useEffect, useRef, useState } from 'react'
import './HowItWorks.css'

const STEPS = [
  {
    id: 1,
    emoji: '🎨',
    title: 'Create a board',
    desc: 'Pick the occasion, name the person, set a deadline. Done in under a minute.',
  },
  {
    id: 2,
    emoji: '📬',
    title: 'Invite your team',
    desc: 'Share a link or email contributors directly. No accounts needed to add a message.',
  },
  {
    id: 3,
    emoji: '🥳',
    title: 'Surprise them',
    desc: 'Reveal the board when the moment comes. Download, share, or just send the link.',
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
      // Finish drawing when the bottom of container is 30% from bottom of screen
      const endPoint = -rect.height * 0.3
      
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
                    <div className="hiw__step-emoji">{step.emoji}</div>
                    <h3 className="hiw__step-title">{step.title}</h3>
                    <p className="hiw__step-desc">{step.desc}</p>
                  </div>

                  {/* Image Placeholder */}
                  <div className="hiw__step-image-wrapper">
                    <div className="hiw__image-placeholder">
                      <div className="hiw__image-placeholder-inner">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span>Placeholder for Step {step.id} Image</span>
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
