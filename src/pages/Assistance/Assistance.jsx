import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Assistance.css'

/* ══════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════ */

const popularSearches = ['Creating Boards', 'Employee Recognition', 'Team Celebrations', 'Enterprise Setup', 'Billing Questions']

const faqData = [
  { q: 'How do I create a WorkKudo board?', a: 'Creating a board takes under two minutes. Click "Create a Board", choose your occasion template, customise the layout and message, then share the invite link with your team. No account is required for contributors.' },
  { q: 'Can I edit a board after publishing?', a: 'Yes — as the board creator you can edit the title, background, and settings at any time before the recipient receives it. Contributor messages can be moderated or removed from your admin panel.' },
  { q: 'How do contributors add messages?', a: 'Share the unique invite link via email, Slack, or Teams. Contributors simply click the link, add their message, photo, or GIF, and submit — no account sign-up required.' },
  { q: 'Does WorkKudo support SSO?', a: 'Yes. We support SAML 2.0, Okta, Azure Active Directory, and Ping Identity. SSO can be configured in under 30 minutes with our technical onboarding team.' },
  { q: 'Can we automate employee milestones?', a: 'Yes. Connect WorkKudo to your HRIS (Workday, BambooHR, Rippling, HiBob) and birthdays, work anniversaries, and onboarding boards are created and sent automatically.' },
  { q: 'Can I schedule celebrations in advance?', a: 'Yes. Set a delivery date when creating the board and WorkKudo will notify the recipient automatically on that day. You can collect signatures asynchronously beforehand.' },
  { q: 'Is employee data secure?', a: 'WorkKudo is SOC 2 Type II certified with AES-256 encryption at rest and TLS 1.3 in transit. We are fully GDPR and CCPA compliant with role-based access controls and data residency options.' },
  { q: 'Can I upgrade or change my plan later?', a: 'Yes — you can upgrade, downgrade, or cancel your plan at any time from your account settings. Upgrades take effect immediately and billing is prorated automatically.' },
]

const recognitionExamples = [
  {
    tag: '🎂 Birthday',
    color: '#F67021', bg: '#FFF3EE', border: '#FFD4B8',
    name: 'Happy Birthday, Sarah!',
    msg: '"Wishing you the most amazing birthday! Your energy and creativity light up every room. So grateful to have you on our team. Here\'s to another incredible year! 🎉"',
    from: 'From the entire Marketing team',
  },
  {
    tag: '🏆 Work Anniversary',
    color: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE',
    name: '5 Years with WorkKudo, James!',
    msg: '"Five years of incredible dedication, growth, and impact. Your technical leadership has shaped who we are as a company. Thank you for everything you bring to the team every single day. 🙌"',
    from: 'From Engineering & Leadership',
  },
  {
    tag: '🌟 Team Achievement',
    color: '#10B981', bg: '#ECFDF5', border: '#A7F3D0',
    name: 'Product Launch — Crushed It!',
    msg: '"What a launch! Every single one of you brought something extraordinary to this project. The way this team collaborates and supports each other is truly something special. Proud of every one of you. 💚"',
    from: 'From Product & Design',
  },
  {
    tag: '💌 Manager Appreciation',
    color: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'Thank You, Priya',
    msg: '"Thank you for always making time for us, pushing us to grow, and celebrating our wins as loudly as you do. You\'re not just a great manager — you\'re an amazing human. We appreciate you endlessly. ✨"',
    from: 'From your entire team',
  },
]

const bestPractices = [
  { icon: '🎯', title: 'Be Specific', desc: 'Name the exact action or behaviour you\'re recognising. "Your calm handling of the client issue on Tuesday" lands much better than "great job this week."' },
  { icon: '⚡', title: 'Be Timely', desc: 'Recognition loses impact when delayed. Celebrate wins as close to the moment as possible — ideally the same day or week.' },
  { icon: '💛', title: 'Be Authentic', desc: 'Genuine recognition resonates. Skip the corporate script and write from the heart — even two sincere sentences outperform a polished paragraph.' },
  { icon: '🏅', title: 'Celebrate Milestones', desc: 'Work anniversaries, project completions, promotions, and personal life events all deserve acknowledgment. Make every milestone feel special.' },
  { icon: '🤝', title: 'Encourage Peer Recognition', desc: 'Recognition shouldn\'t only flow top-down. Build a culture where teammates celebrate each other openly — it multiplies engagement across the whole team.' },
]

/* ══════════════════════════════════════════════════════════════
   SHARED UTILITIES
══════════════════════════════════════════════════════════════ */

function TypingAnswer({ text }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0, cur = ''
    setDisplayed('')
    const iv = setInterval(() => {
      if (i < text.length) { cur += text.charAt(i); setDisplayed(cur); i++ }
      else clearInterval(iv)
    }, 8)
    return () => clearInterval(iv)
  }, [text])
  return (
    <p className="assist-typing-text">
      {displayed}<span className="assist-faq-cursor" />
    </p>
  )
}

function PersonSVG() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" fill="none" className="assist-person-avatar" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="var(--orange-50)" stroke="var(--orange-border)" strokeWidth="1.5" />
      <circle cx="32" cy="25" r="14" fill="#5C3E35" />
      <rect x="29" y="36" width="6" height="8" fill="#FDBA74" />
      <path d="M16 54c0-5 6-9 16-9s16 4 16 9" fill="var(--navy-light)" />
      <path d="M28 45l4 4 4-4" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="27" r="11" fill="#FDBA74" />
      <path d="M20 24c0-7 5-11 12-11s12 4 12 11c0 2-2 3-3 2s-3-2-5-2-4 1-4 1-1-1-3-1-3 1-5 1-4-1-4-2z" fill="#5C3E35" />
      <circle cx="28" cy="26" r="1.5" fill="var(--navy-dark)" />
      <circle cx="36" cy="26" r="1.5" fill="var(--navy-dark)" />
      <circle cx="26" cy="29" r="2" fill="#F87171" opacity="0.4" />
      <circle cx="38" cy="29" r="2" fill="#F87171" opacity="0.4" />
      <path d="M29 31a3 3 0 006 0" stroke="var(--navy-dark)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function Assistance() {
  const sectionIds = ['support-hub', 'appreciation-handbook', 'reach-us', 'common-questions', 'contact-us']
  const navLabels = {
    'support-hub': 'Support Hub',
    'appreciation-handbook': 'Appreciation Handbook',
    'reach-us': 'Reach Us',
    'common-questions': 'Common Questions',
    'contact-us': 'Contact Us',
  }

  const [activeSection, setActiveSection] = useState('support-hub')
  const [searchValue, setSearchValue] = useState('')
  const [stickyScrolled, setStickyScrolled] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const [activeEx, setActiveEx] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const handle = () => {
      setStickyScrolled(window.scrollY > 340)
      const offsets = sectionIds.map(id => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top - 160) }
      })
      setActiveSection(offsets.reduce((a, b) => (a.top < b.top ? a : b)).id)
    }
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const scrollTo = id => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 140, behavior: 'smooth' })
  }

  const [heroRef, heroVisible] = useInView(0.1)
  const [hubRef, hubVisible] = useInView(0.08)
  const [hbRef, hbVisible] = useInView(0.08)
  const [reachRef, reachVisible] = useInView(0.08)
  const [faqRef, faqVisible] = useInView(0.06)
  const [contactRef, contactVisible] = useInView(0.06)

  /* ── Support Hub sub-sections ── */
  const hubSections = [
    { id: 'hub-getting-started', label: 'Getting Started' },
    { id: 'hub-account-billing', label: 'Account & Billing' },
    { id: 'hub-need-help', label: 'Need Help?' },
  ]
  const [activeHub, setActiveHub] = useState('hub-getting-started')

  useEffect(() => {
    const handle = () => {
      const offsets = hubSections.map(s => {
        const el = document.getElementById(s.id)
        if (!el) return { id: s.id, top: Infinity }
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 200) }
      })
      setActiveHub(offsets.reduce((a, b) => (a.top < b.top ? a : b)).id)
    }
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <div className="assist-page">
      <Navbar />

      {/* ══════ HERO ══════ */}
      <section className="assist-hero" ref={heroRef}>
        <div className="assist-hero__shape assist-hero__shape--1" aria-hidden="true" />
        <div className="assist-hero__shape assist-hero__shape--2" aria-hidden="true" />
        <div className="assist-hero__shape assist-hero__shape--3" aria-hidden="true" />
        <div className={`assist-hero__inner container ${heroVisible ? 'assist-in' : ''}`}>
          <div className="assist-hero__badge"><span className="assist-hero__badge-dot" />Support Center</div>
          <h1 className="assist-hero__heading">How can we <span className="assist-hero__heading-orange">help?</span></h1>
          <p className="assist-hero__sub">Find answers, connect with our team, and discover resources to make the most of WorkKudo.</p>
          <div className="assist-search-wrap">
            <div className="assist-search">
              <svg className="assist-search__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                <path d="M15 15l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input className="assist-search__input" type="text" placeholder="Search for answers, guides, topics…"
                value={searchValue} onChange={e => setSearchValue(e.target.value)} aria-label="Search" />
              {searchValue && (
                <button className="assist-search__clear" onClick={() => setSearchValue('')} aria-label="Clear">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </button>
              )}
            </div>
          </div>
          <div className="assist-popular">
            <span className="assist-popular__label">Popular:</span>
            {popularSearches.map(s => <button key={s} className="assist-popular__tag" onClick={() => setSearchValue(s)}>{s}</button>)}
          </div>
        </div>
      </section>

      {/* ══════ STICKY NAV ══════ */}
      <nav className={`assist-section-nav ${stickyScrolled ? 'assist-section-nav--stuck' : ''}`} aria-label="Page sections">
        <div className="assist-section-nav__inner container">
          {sectionIds.map(id => (
            <button key={id}
              className={`assist-section-nav__item ${activeSection === id ? 'assist-section-nav__item--active' : ''}`}
              onClick={() => scrollTo(id)}>
              {navLabels[id]}
            </button>
          ))}
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          SECTION 1 — SUPPORT HUB
      ══════════════════════════════════════════ */}
      <section id="support-hub" className="assist-section assist-section--hub" ref={hubRef}>
        <div className="container">
          <div className={`assist-section-header ${hubVisible ? 'assist-in' : ''}`}>
            <div className="assist-eyebrow"><span className="assist-eyebrow-dot" />Guides</div>
            <h2 className="assist-section-title">Support Hub</h2>
            <p className="assist-section-sub">Everything you need to get the most out of WorkKudo, all in one place.</p>
          </div>

          <div className="assist-hub-layout">
            {/* Left sidebar nav */}
            <aside className={`assist-hub-sidebar ${hubVisible ? 'assist-in assist-in--d1' : ''}`}>
              {hubSections.map(s => (
                <button key={s.id}
                  className={`assist-hub-sidebar__item ${activeHub === s.id ? 'assist-hub-sidebar__item--active' : ''}`}
                  onClick={() => { const el = document.getElementById(s.id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 160, behavior: 'smooth' }) }}>
                  {s.label}
                </button>
              ))}
              <div className="assist-hub-sidebar__cta">
                <span>Can't find what you need?</span>
                <button onClick={() => scrollTo('contact-us')}>Contact Support →</button>
              </div>
            </aside>

            {/* Right content */}
            <div className={`assist-hub-content ${hubVisible ? 'assist-in assist-in--d2' : ''}`}>

              {/* Getting Started */}
              <div id="hub-getting-started" className="assist-hub-group">
                <div className="assist-hub-group__header">
                  <span className="assist-hub-group__icon" style={{ background: '#FFF3EE', color: '#F67021' }}>🚀</span>
                  <div>
                    <h3 className="assist-hub-group__title">Getting Started</h3>
                    <p className="assist-hub-group__sub">Everything you need to launch your first WorkKudo board.</p>
                  </div>
                </div>
                <div className="assist-hub-cards">
                  {[
                    { icon: '🎉', title: 'Create a Board', desc: 'Choose an occasion, pick a template, and personalise your board in under two minutes.', link: '#contact-us' },
                    { icon: '✉️', title: 'Invite Contributors', desc: 'Share your unique invite link via email, Slack, Teams, or any messaging platform.', link: '#contact-us' },
                    { icon: '💬', title: 'Add Messages & Photos', desc: 'Team members can add text, photos, GIFs, and drawings — no account required.', link: '#contact-us' },
                    { icon: '🎁', title: 'Deliver a Board', desc: 'Schedule delivery or send immediately. The recipient gets a beautiful notification.', link: '#contact-us' },
                  ].map((c, i) => (
                    <a key={i} href={c.link} onClick={e => { e.preventDefault(); scrollTo('contact-us') }} className="assist-hub-card">
                      <span className="assist-hub-card__icon">{c.icon}</span>
                      <h4 className="assist-hub-card__title">{c.title}</h4>
                      <p className="assist-hub-card__desc">{c.desc}</p>
                      <span className="assist-hub-card__arrow">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Account & Billing */}
              <div id="hub-account-billing" className="assist-hub-group">
                <div className="assist-hub-group__header">
                  <span className="assist-hub-group__icon" style={{ background: '#EFF6FF', color: '#3B82F6' }}>💳</span>
                  <div>
                    <h3 className="assist-hub-group__title">Account & Billing</h3>
                    <p className="assist-hub-group__sub">Manage your subscription, team accounts, and payment details.</p>
                  </div>
                </div>
                <div className="assist-hub-cards">
                  {[
                    { icon: '🔄', title: 'Manage Subscription', desc: 'Upgrade, downgrade, or cancel your plan anytime from your account dashboard.', link: '#contact-us' },
                    { icon: '👥', title: 'Team Accounts', desc: 'Add seats, manage member permissions, and control access across your organisation.', link: '#contact-us' },
                    { icon: '💰', title: 'Payment Questions', desc: 'Update billing details, view invoices, and get answers about charges and prorations.', link: '#contact-us' },
                  ].map((c, i) => (
                    <a key={i} href={c.link} onClick={e => { e.preventDefault(); scrollTo('contact-us') }} className="assist-hub-card">
                      <span className="assist-hub-card__icon">{c.icon}</span>
                      <h4 className="assist-hub-card__title">{c.title}</h4>
                      <p className="assist-hub-card__desc">{c.desc}</p>
                      <span className="assist-hub-card__arrow">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Need Help */}
              <div id="hub-need-help" className="assist-hub-group">
                <div className="assist-hub-group__header">
                  <span className="assist-hub-group__icon" style={{ background: '#F0FDF4', color: '#10B981' }}>🤝</span>
                  <div>
                    <h3 className="assist-hub-group__title">Need Help?</h3>
                    <p className="assist-hub-group__sub">Couldn't find what you're looking for? Our team is here.</p>
                  </div>
                </div>
                <div className="assist-hub-help-strip">
                  {[
                    { icon: '💬', label: 'Reach Us', desc: 'Jump to the Reach Us section for direct support options.', action: () => scrollTo('reach-us'), accent: '#F67021', bg: '#FFF3EE' },
                    { icon: '🛠️', label: 'Contact Support', desc: 'Send our team a message and get help within 2 hours.', action: () => scrollTo('contact-us'), accent: '#3B82F6', bg: '#EFF6FF' },
                    { icon: '❓', label: 'Common Questions', desc: 'Browse the FAQ for instant answers to common queries.', action: () => scrollTo('common-questions'), accent: '#10B981', bg: '#F0FDF4' },
                  ].map((h, i) => (
                    <button key={i} className="assist-hub-help-card" onClick={h.action}
                      style={{ '--help-accent': h.accent, '--help-bg': h.bg }}>
                      <span className="assist-hub-help-card__icon" style={{ background: h.bg, color: h.accent }}>{h.icon}</span>
                      <div>
                        <strong>{h.label}</strong>
                        <span>{h.desc}</span>
                      </div>
                      <svg className="assist-hub-help-card__arr" width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: h.accent }}>
                        <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — APPRECIATION HANDBOOK
      ══════════════════════════════════════════ */}
      <section id="appreciation-handbook" className="assist-section assist-section--handbook" ref={hbRef}>
        <div className="container">
          <div className={`assist-section-header ${hbVisible ? 'assist-in' : ''}`}>
            <div className="assist-eyebrow"><span className="assist-eyebrow-dot" />Guides</div>
            <h2 className="assist-section-title">Appreciation Handbook</h2>
            <p className="assist-section-sub">Your guide to building a culture of recognition that actually resonates.</p>
          </div>

          {/* Why Recognition Matters */}
          <div className={`assist-hb-why ${hbVisible ? 'assist-in assist-in--d1' : ''}`}>
            <div className="assist-hb-why__content">
              <div className="assist-eyebrow" style={{ justifyContent: 'flex-start' }}><span className="assist-eyebrow-dot" />Why It Matters</div>
              <h3 className="assist-hb-why__title">Why Recognition Matters</h3>
              <p className="assist-hb-why__body">
                Employee recognition helps teams feel valued, improves engagement, and strengthens workplace culture. When people know their contributions are seen and appreciated, they show up with more energy, stay longer, and bring their best every day.
              </p>
              <div className="assist-hb-why__stats">
                {[
                  { value: '63%', label: 'of employees who feel recognised are unlikely to look for a new job' },
                  { value: '2×', label: 'more likely to rate their culture as positive when peers recognise each other' },
                  { value: '40%', label: 'higher engagement in organisations with strong recognition programs' },
                ].map((s, i) => (
                  <div key={i} className="assist-hb-stat">
                    <span className="assist-hb-stat__value">{s.value}</span>
                    <span className="assist-hb-stat__label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="assist-hb-why__visual">
              <div className="assist-hb-card-stack">
                {[
                  { emoji: '💛', text: '"Your work this sprint was outstanding."', from: 'Team Lead', color: '#F67021', bg: '#FFF3EE' },
                  { emoji: '🌟', text: "Couldn't have done this without you!", from: 'Teammate', color: '#3B82F6', bg: '#EFF6FF' },
                  { emoji: '🏆', text: '"5 years — thank you for everything."', from: 'Manager', color: '#10B981', bg: '#ECFDF5' },
                ].map((c, i) => (
                  <div key={i} className="assist-hb-mini-card" style={{ background: c.bg, borderColor: `${c.color}30`, '--card-delay': `${i * 0.12}s` }}>
                    <span className="assist-hb-mini-card__emoji">{c.emoji}</span>
                    <p className="assist-hb-mini-card__text">{c.text}</p>
                    <span className="assist-hb-mini-card__from" style={{ color: c.color }}>{c.from}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className={`assist-hb-practices ${hbVisible ? 'assist-in assist-in--d2' : ''}`}>
            <div className="assist-eyebrow" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}><span className="assist-eyebrow-dot" />Best Practices</div>
            <div className="assist-hb-practices__grid">
              {bestPractices.map((p, i) => (
                <div key={i} className="assist-hb-practice-card" style={{ animationDelay: `${i * 60}ms` }}>
                  <span className="assist-hb-practice-card__icon">{p.icon}</span>
                  <h4 className="assist-hb-practice-card__title">{p.title}</h4>
                  <p className="assist-hb-practice-card__desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Examples */}
          <div className={`assist-hb-examples ${hbVisible ? 'assist-in assist-in--d3' : ''}`}>
            <div className="assist-eyebrow" style={{ justifyContent: 'flex-start', marginBottom: '24px' }}><span className="assist-eyebrow-dot" />Recognition Examples</div>
            <div className="assist-hb-examples__tabs">
              {recognitionExamples.map((ex, i) => (
                <button key={i}
                  className={`assist-hb-ex-tab ${activeEx === i ? 'assist-hb-ex-tab--active' : ''}`}
                  style={activeEx === i ? { background: ex.bg, borderColor: ex.border, color: ex.color } : {}}
                  onClick={() => setActiveEx(i)}>
                  {ex.tag}
                </button>
              ))}
            </div>
            <div className="assist-hb-ex-panel">
              {recognitionExamples.map((ex, i) => (
                <div key={i} className={`assist-hb-ex-card ${activeEx === i ? 'assist-hb-ex-card--active' : ''}`}
                  style={{ borderColor: ex.border, background: ex.bg }}>
                  <div className="assist-hb-ex-card__header" style={{ borderBottomColor: `${ex.color}22` }}>
                    <div className="assist-hb-ex-card__dots">
                      <span style={{ background: '#ff5f57' }} /><span style={{ background: '#febc2e' }} /><span style={{ background: '#28c840' }} />
                    </div>
                    <span className="assist-hb-ex-card__title-bar">{ex.name}</span>
                  </div>
                  <div className="assist-hb-ex-card__body">
                    <div className="assist-hb-ex-card__av" style={{ background: ex.color }}>
                      {ex.from.split(' ').pop()[0]}
                    </div>
                    <div className="assist-hb-ex-card__bubble">
                      <p className="assist-hb-ex-card__msg">{ex.msg}</p>
                      <span className="assist-hb-ex-card__from" style={{ color: ex.color }}>{ex.from}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — REACH US
      ══════════════════════════════════════════ */}
      <section id="reach-us" className="assist-section assist-section--reach" ref={reachRef}>
        <div className="container">
          <div className={`assist-section-header ${reachVisible ? 'assist-in' : ''}`}>
            <div className="assist-eyebrow"><span className="assist-eyebrow-dot" />Get in Touch</div>
            <h2 className="assist-section-title">Reach Us</h2>
            <p className="assist-section-sub">Our team is ready to help.</p>
          </div>
          <div className={`assist-support-cards ${reachVisible ? 'assist-in assist-in--d1' : ''}`}>
            <div className="assist-support-card">
              <div className="assist-support-card__icon-wrap" style={{ background: '#FFF3EE', color: '#F67021' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <span className="assist-support-card__label" style={{ color: '#F67021' }}>Customer Support</span>
              <h3 className="assist-support-card__title">Get help fast</h3>
              <p className="assist-support-card__desc">Get help with account issues, board creation, contributor access, and troubleshooting.</p>
              <span className="assist-support-card__badge" style={{ background: '#FFF3EE', color: '#F67021' }}>
                <span className="assist-bdot" style={{ background: '#F67021' }} />Typically replies in 2h
              </span>
              <button className="assist-support-card__cta" style={{ background: '#F67021', boxShadow: '0 4px 14px rgba(246,112,33,0.35)' }}
                onClick={() => scrollTo('contact-us')}>
                Contact Support
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
            <div className="assist-support-card assist-support-card--featured">
              <span className="assist-support-card__featured-badge">Most Popular</span>
              <div className="assist-support-card__icon-wrap" style={{ background: '#EFF6FF', color: '#3B82F6' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              </div>
              <span className="assist-support-card__label" style={{ color: '#3B82F6' }}>Sales & Enterprise</span>
              <h3 className="assist-support-card__title">Scale your team</h3>
              <p className="assist-support-card__desc">Talk with our team about enterprise deployments, integrations, SSO, and large-scale recognition programs.</p>
              <span className="assist-support-card__badge" style={{ background: '#EFF6FF', color: '#3B82F6' }}>
                <span className="assist-bdot" style={{ background: '#3B82F6' }} />Priority response
              </span>
              <button className="assist-support-card__cta" style={{ background: '#1A2B4A', boxShadow: '0 4px 14px rgba(26,43,74,0.25)' }}
                onClick={() => scrollTo('contact-us')}>
                Talk to Sales
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
            <div className="assist-support-card">
              <div className="assist-support-card__icon-wrap" style={{ background: '#F0FDF4', color: '#10B981' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <span className="assist-support-card__label" style={{ color: '#10B981' }}>Customer Success</span>
              <h3 className="assist-support-card__title">Maximise impact</h3>
              <p className="assist-support-card__desc">Learn best practices for employee recognition, engagement, and celebration programs.</p>
              <span className="assist-support-card__badge" style={{ background: '#F0FDF4', color: '#10B981' }}>
                <span className="assist-bdot" style={{ background: '#10B981' }} />30-min session
              </span>
              <button className="assist-support-card__cta" style={{ background: '#10B981', boxShadow: '0 4px 14px rgba(16,185,129,0.3)' }}
                onClick={() => scrollTo('contact-us')}>
                Book Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
          <div className={`assist-support-info ${reachVisible ? 'assist-in assist-in--d2' : ''}`}>
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F67021" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Standard Support', sub: 'Monday – Friday, 9am – 6pm EST' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Enterprise Support', sub: 'Priority 24/7 support for enterprise customers' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, title: 'Average Response', sub: 'Under 2 hours during business hours' },
            ].map((item, i) => (
              <div key={i} className="assist-support-info__item">
                {item.icon}
                <div><strong>{item.title}</strong><span>{item.sub}</span></div>
                {i < 2 && <span className="assist-support-info__sep" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — COMMON QUESTIONS
      ══════════════════════════════════════════ */}
      <section id="common-questions" className="assist-section assist-section--faq" ref={faqRef}>
        <div className="container">
          <div className="assist-faq-grid">
            <div className={`assist-faq-visual ${faqVisible ? 'assist-in' : ''}`}>
              <header className="assist-faq-header">
                <div className="assist-eyebrow"><span className="assist-eyebrow-dot" />FAQ</div>
                <h2>Common Questions</h2>
                <p>Quick answers to the questions we hear most often about WorkKudo.</p>
              </header>
              <div className="assist-faq-sticker-box">
                <div className="assist-faq-sticker">
                  <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="10" width="52" height="44" rx="8" fill="#FFFFFF" stroke="var(--navy)" strokeWidth="3" />
                    <path d="M14 20H36M14 28H48M14 36H30" stroke="var(--navy-light)" strokeWidth="3" strokeLinecap="round" />
                    <rect x="42" y="14" width="8" height="10" rx="2" fill="var(--orange-50)" stroke="var(--orange)" strokeWidth="1.5" />
                    <path d="M46 17c0 0-.5-.6-1-.6s-.8.3-.8.6c0 .4.8 1.2.8 1.2s.8-.8.8-1.2c0-.3-.3-.6-.8-.6z" fill="var(--orange)" />
                    <circle cx="48" cy="46" r="10" fill="var(--orange)" />
                    <path d="M45 46H51M48 43V49" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="assist-faq-bubble assist-faq-bubble--1">👋</span>
                <span className="assist-faq-bubble assist-faq-bubble--2">🎉</span>
                <span className="assist-faq-bubble assist-faq-bubble--3">✨</span>
                <span className="assist-faq-bubble assist-faq-bubble--4">💖</span>
              </div>
              <div className="assist-faq-visual-cta">
                <p>Still have questions?</p>
                <button className="assist-faq-visual-cta__btn" onClick={() => scrollTo('contact-us')}>
                  Contact us
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
            <div className={`assist-faq-list ${faqVisible ? 'assist-in assist-in--d1' : ''}`}>
              {faqData.map((item, idx) => {
                const isActive = activeFaq === idx
                return (
                  <div key={idx} className={`assist-faq-card ${isActive ? 'assist-faq-card--active' : ''}`}
                    onClick={() => setActiveFaq(isActive ? null : idx)}>
                    <button className="assist-faq-trigger" aria-expanded={isActive}>
                      <span>{item.q}</span>
                      <span className="assist-faq-chevron">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </button>
                    <div className="assist-faq-content-wrapper" style={{ maxHeight: isActive ? '280px' : '0px' }}>
                      <div className="assist-faq-content">
                        {isActive && (
                          <div className="assist-faq-chat-bubble">
                            <PersonSVG />
                            <div className="assist-faq-chat-text">
                              <TypingAnswer text={item.a} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — CONTACT US
      ══════════════════════════════════════════ */}
      <section id="contact-us" className="assist-section assist-section--contact" ref={contactRef}>
        <div className="container">
          <div className={`assist-section-header ${contactVisible ? 'assist-in' : ''}`}>
            <div className="assist-eyebrow"><span className="assist-eyebrow-dot" />Contact</div>
            <h2 className="assist-section-title">We're Here To Help</h2>
            <p className="assist-section-sub">Questions about WorkKudo? Need assistance? Our team is ready to respond.</p>
          </div>
          <div className={`assist-contact-grid ${contactVisible ? 'assist-in assist-in--d1' : ''}`}>
            <div className="assist-contact-left">
              <div className="assist-contact-cats">
                {[
                  { icon: '💬', title: 'General Questions', desc: 'Learn more about WorkKudo features and platform capabilities.' },
                  { icon: '🛠️', title: 'Product Support', desc: 'Get help with setup, troubleshooting, and platform guidance.' },
                  { icon: '💼', title: 'Sales Inquiries', desc: 'Talk with our team about workplace recognition programs.' },
                  { icon: '🤝', title: 'Partnerships', desc: 'Explore collaboration and integration opportunities.' },
                ].map((c, i) => (
                  <div key={i} className="assist-contact-cat">
                    <span className="assist-contact-cat__icon">{c.icon}</span>
                    <div>
                      <h4 className="assist-contact-cat__title">{c.title}</h4>
                      <p className="assist-contact-cat__desc">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="assist-contact-channels">
                {[
                  { icon: '✉️', label: 'Email Support', sub: 'support@workkudo.com', color: '#F67021' },
                  { icon: '📖', label: 'Help Center', sub: 'Browse our guides and docs', color: '#A78BFA' },
                  { icon: '🤝', label: 'Partnerships', sub: 'partners@workkudo.com', color: '#34D399' },
                ].map((ch, i) => (
                  <div key={i} className="assist-contact-channel">
                    <span className="assist-contact-channel__icon" style={{ background: `${ch.color}18`, color: ch.color }}>{ch.icon}</span>
                    <div><strong>{ch.label}</strong><span>{ch.sub}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="assist-form-wrap">
              {sent ? (
                <div className="assist-form-thanks">
                  <span className="assist-form-thanks__icon">✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. Our team will get back to you within 2 business hours.</p>
                  <button className="assist-btn" onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <form className="assist-form" onSubmit={e => { e.preventDefault(); if (form.name && form.email) setSent(true) }}>
                  <h3 className="assist-form-title">Send Us a Message</h3>
                  <div className="assist-form-row">
                    <div className="assist-field"><label>Full Name <span>*</span></label><input name="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your full name" required /></div>
                    <div className="assist-field"><label>Work Email <span>*</span></label><input name="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@company.com" required /></div>
                  </div>
                  <div className="assist-form-row">
                    <div className="assist-field"><label>Company Name</label><input name="company" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Your company" /></div>
                    <div className="assist-field">
                      <label>How can we help?</label>
                      <select name="topic" value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}>
                        <option value="">Select a topic</option>
                        <option>Product Question</option><option>Support Request</option><option>Sales Inquiry</option><option>Partnership</option><option>Billing</option><option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="assist-field"><label>Message <span>*</span></label><textarea name="message" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} placeholder="Tell us how we can help…" required /></div>
                  <button type="submit" className="assist-btn assist-btn--full">
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
