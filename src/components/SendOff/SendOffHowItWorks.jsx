import { useState, useEffect, useRef } from 'react'
import './SendOffHowItWorks.css'
import imgCreate from '../../assets/1.png'
import imgInvite from '../../assets/2.png'
import imgDeliver from '../../assets/3.png'
import imgCelebrate from '../../assets/4.png'

const STEPS = [
  {
    id: 'create',
    tab: 'Create',
    step: 'Step 1',
    title: 'Create your board',
    desc: 'Pick the occasion, choose a theme, and give your board a title. It takes under a minute to go from idea to a beautiful, ready-to-share farewell board.',
    cta: 'Start creating →',
    image: imgCreate,
    iconBg: 'var(--lavender-soft)',
    iconColor: '#7C3AED',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    cardTitle: 'Choose your occasion',
    cardSub: 'Dozens of themes available',
    bullets: [
      'Pick from beautifully designed templates',
      'Set the recipient name and a delivery date',
      'Personalise the theme, colours, and layout',
    ],
    pills: ['👋 Send-Off', '🎂 Birthday', '🏆 Milestone', '🌼 Get Well Soon', '🎉 Onboarding'],
  },
  {
    id: 'invite',
    tab: 'Invite',
    step: 'Step 2',
    title: 'Invite your team',
    desc: 'Share a private link with your team by Slack, email, or WhatsApp. Contributors don\'t need an account — they just open the link and add their message.',
    cta: 'See how sharing works →',
    image: imgInvite,
    iconBg: 'var(--navy-50)',
    iconColor: 'var(--navy)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    cardTitle: 'Share in one click',
    cardSub: 'No accounts needed for signers',
    bullets: [
      'Copy a private link — no login required to sign',
      'Set a deadline so no one misses out',
      'Works across Slack, Teams, WhatsApp and email',
    ],
    pills: null,
  },
  {
    id: 'deliver',
    tab: 'Deliver',
    step: 'Step 3',
    title: 'Deliver the moment',
    desc: 'When the time is right, reveal the board. Send it by email, present it on a big screen, or just share the link — the recipient sees every message instantly.',
    cta: 'Explore delivery options →',
    image: imgDeliver,
    iconBg: 'var(--beige-bg)',
    iconColor: 'var(--beige)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
    cardTitle: 'Choose how to present',
    cardSub: 'Multiple delivery formats',
    bullets: [
      'Send directly to their email address',
      'Present it live on a shared screen',
      'Download a high-res PDF keepsake',
    ],
    pills: null,
  },
  {
    id: 'celebrate',
    tab: 'Celebrate',
    step: 'Step 4',
    title: 'A memory that lasts',
    desc: 'The board never expires. The recipient can revisit it any time, react to messages, and download it as a print-ready PDF to keep forever.',
    cta: 'Create your board for $5 →',
    image: imgCelebrate,
    iconBg: 'var(--orange-50)',
    iconColor: 'var(--orange)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.8 11.3L2 22l10.7-3.79"/><path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.44 4.44a2 2 0 0 0 .44 2.44l1.37 1.37a2 2 0 0 1 .44 2.44L19 16"/>
        <path d="M4.267 10.68a2 2 0 0 0 2.44.44l1.37-1.37a2 2 0 0 1 2.44.44L12 12"/>
      </svg>
    ),
    cardTitle: 'A keepsake they\'ll treasure',
    cardSub: 'Permanently saved, always accessible',
    bullets: [
      'Permanent link — the board never expires',
      'React and respond to individual messages',
      'Download a print-ready PDF at any time',
    ],
    pills: null,
  },
]

export default function SendOffHowItWorks() {
  const [active, setActive] = useState(0)
  const [typedText, setTypedText] = useState('')
  const step = STEPS[active]
  const typingRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    setTypedText('') // Reset text when tab changes

    let index = 0
    const text = step.desc
    const speed = 30 // Typing speed in ms

    const typeWriter = () => {
      if (index < text.length) {
        setTypedText(prev => prev + text.charAt(index))
        index++
        typingRef.current = setTimeout(typeWriter, speed)
      }
    }

    typeWriter()

    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current)
      }
    }
  }, [active, step.desc])

  return (
    <section className="sohiw" id="features">
      <div className="container">

        {/* Header */}
        <div className="sohiw__header">
          <h2 className="sohiw__heading">How it works</h2>
          <p className="sohiw__subtext">
            From idea to keepsake in four effortless steps — no experience needed.
          </p>
        </div>

        {/* Content — 3D Image Cards */}
        <div className="sohiw__cards-container">
          {STEPS.map((step, index) => (
            <div key={step.id} className="sohiw__card-wrapper">
              <div className="sohiw__card-box">
                <div className="sohiw__imgBx">
                  <img src={step.image} alt={step.tab} />
                </div>
                <div className="sohiw__content">
                  <div>
                    <h2>{step.tab}</h2>
                    <p>{step.cardSub}</p>
                  </div>
                </div>
              </div>
              <div className="sohiw__step-indicator">
                <span className="sohiw__step-number">{index + 1}</span>
                <span className="sohiw__step-label">{step.tab}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
