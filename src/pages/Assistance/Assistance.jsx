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
  { q: 'How do contributors add messages?', a: 'Share the unique invite link via email or Notion. Contributors simply click the link, add their message, photo, or GIF, and submit — no account sign-up required.' },
  { q: 'Does WorkKudo support custom login options?', a: 'WorkKudo supports email and social login (Google, GitHub). For enterprise login requirements, reach out to our team to discuss available options.' },
  { q: 'Can we automate employee milestones?', a: 'Yes. WorkKudo can be set up to remind your team ahead of birthdays, work anniversaries, and onboarding dates via email or Notion.' },
  { q: 'Can I schedule celebrations in advance?', a: 'Yes. Set a delivery date when creating the board and WorkKudo will notify the recipient automatically on that day. You can collect signatures asynchronously beforehand.' },
  { q: 'Is employee data secure?', a: 'WorkKudo takes data privacy seriously. All data is transmitted securely and we follow responsible data handling practices. Contact our team for details on how we handle data for your organization.' },
  { q: 'Are there any subscriptions or recurring fees?', a: 'No. WorkKudo charges a one-time flat fee of $5 per board. There are no subscriptions, seat fees, or hidden recurring charges.' },
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
                    { icon: '✉️', title: 'Invite Contributors', desc: 'Share your unique invite link via email, Notion, or any messaging platform.', link: '#contact-us' },
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
                    <p className="assist-hub-group__sub">Manage your account and payment details.</p>
                  </div>
                </div>
                <div className="assist-hub-cards">
                  {[
                    { icon: '💰', title: 'Payment Questions', desc: 'Update billing details, view invoices, and get answers about charges.', link: '#contact-us' },
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

          {/* ── Section header ── */}
          <div className={`assist-section-header ${hbVisible ? 'assist-in' : ''}`}>
            <div className="assist-eyebrow"><span className="assist-eyebrow-dot" />Appreciation Handbook</div>
            <h2 className="assist-section-title">Build a Culture of Recognition</h2>
            <p className="assist-section-sub">Everything you need to make appreciation a habit — not an afterthought.</p>
          </div>

          {/* ── Row 1: Why it matters — dark hero banner ── */}
          <div className={`assist-hb-why-banner ${hbVisible ? 'assist-in assist-in--d1' : ''}`}>
            <div className="assist-hb-why-banner__glow" aria-hidden="true" />
            <div className="assist-hb-why-banner__left">
              <div className="assist-eyebrow assist-eyebrow--light"><span className="assist-eyebrow-dot" style={{ background: '#FFB380' }} />Why It Matters</div>
              <h3 className="assist-hb-why-banner__title">Recognition isn't a&nbsp;perk.<br />It's a&nbsp;performance driver.</h3>
              <p className="assist-hb-why-banner__body">
                Employees who feel genuinely appreciated stay longer, perform better, and lift everyone around them. WorkKudo makes it effortless to celebrate the people who make a difference — every single day.
              </p>
            </div>
            <div className="assist-hb-why-banner__stats">
              {[
                { value: '63%', label: 'less likely to job-hunt', icon: '📉' },
                { value: '2×', label: 'stronger team culture', icon: '🤝' },
                { value: '40%', label: 'higher engagement', icon: '📈' },
              ].map((s, i) => (
                <div key={i} className="assist-hb-why-stat">
                  <span className="assist-hb-why-stat__icon">{s.icon}</span>
                  <span className="assist-hb-why-stat__value">{s.value}</span>
                  <span className="assist-hb-why-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Row 2: Best Practices — 2-col grid ── */}
          <div className={`assist-hb-practices-wrap ${hbVisible ? 'assist-in assist-in--d2' : ''}`}>
            <div className="assist-hb-practices-header">
              <div className="assist-eyebrow"><span className="assist-eyebrow-dot" />Best Practices</div>
              <h3 className="assist-hb-practices-title">5 Ways to Make Recognition Land</h3>
            </div>
            <div className="assist-hb-practices-grid">
              {bestPractices.map((p, i) => (
                <div key={i} className="assist-hb-practice-pill">
                  <span className="assist-hb-practice-pill__num">0{i + 1}</span>
                  <span className="assist-hb-practice-pill__icon">{p.icon}</span>
                  <div className="assist-hb-practice-pill__text">
                    <strong>{p.title}</strong>
                    <span>{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Row 3: Recognition Examples — tab + card ── */}
          <div className={`assist-hb-examples-wrap ${hbVisible ? 'assist-in assist-in--d3' : ''}`}>
            <div className="assist-hb-examples-header">
              <div className="assist-eyebrow"><span className="assist-eyebrow-dot" />Real Examples</div>
              <h3 className="assist-hb-practices-title">Recognition Messages That Resonate</h3>
            </div>

            <div className="assist-hb-examples-layout">
              {/* Tab buttons — vertical on left */}
              <div className="assist-hb-ex-sidebar">
                {recognitionExamples.map((ex, i) => (
                  <button
                    key={i}
                    className={`assist-hb-ex-sitem ${activeEx === i ? 'assist-hb-ex-sitem--active' : ''}`}
                    style={activeEx === i ? { '--ex-color': ex.color, '--ex-bg': ex.bg, '--ex-border': ex.border } : {}}
                    onClick={() => setActiveEx(i)}
                  >
                    <span className="assist-hb-ex-sitem__tag" style={activeEx === i ? { background: ex.bg, color: ex.color, borderColor: ex.border } : {}}>
                      {ex.tag}
                    </span>
                    <span className="assist-hb-ex-sitem__name">{ex.name}</span>
                  </button>
                ))}
              </div>

              {/* Preview card — right */}
              <div className="assist-hb-ex-preview">
                {recognitionExamples.map((ex, i) => (
                  <div
                    key={i}
                    className={`assist-hb-ex-preview-card ${activeEx === i ? 'assist-hb-ex-preview-card--active' : ''}`}
                    style={{ '--ex-color': ex.color, '--ex-bg': ex.bg, '--ex-border': ex.border }}
                  >
                    {/* Faux browser chrome */}
                    <div className="assist-hb-ex-chrome">
                      <span className="assist-hb-ex-chrome__dot" style={{ background: '#ff5f57' }} />
                      <span className="assist-hb-ex-chrome__dot" style={{ background: '#febc2e' }} />
                      <span className="assist-hb-ex-chrome__dot" style={{ background: '#28c840' }} />
                      <span className="assist-hb-ex-chrome__title">{ex.name}</span>
                      <span className="assist-hb-ex-chrome__badge" style={{ background: ex.bg, color: ex.color, borderColor: ex.border }}>{ex.tag}</span>
                    </div>
                    {/* Message body */}
                    <div className="assist-hb-ex-body">
                      <div className="assist-hb-ex-avatar" style={{ background: `linear-gradient(135deg, ${ex.color}cc 0%, ${ex.color} 100%)` }}>
                        {ex.from.split(' ').slice(-2, -1)[0]?.[0] ?? '★'}
                      </div>
                      <div className="assist-hb-ex-bubble" style={{ borderColor: ex.border, background: '#fff' }}>
                        <p className="assist-hb-ex-msg">{ex.msg}</p>
                        <span className="assist-hb-ex-from" style={{ color: ex.color }}>— {ex.from}</span>
                      </div>
                    </div>
                    {/* Bottom action row */}
                    <div className="assist-hb-ex-actions">
                      <span className="assist-hb-ex-action">👍 Like</span>
                      <span className="assist-hb-ex-action">💬 Reply</span>
                      <span className="assist-hb-ex-action">✨ Celebrate</span>
                    </div>
                  </div>
                ))}
              </div>
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
          <div className={`assist-reach-merged ${reachVisible ? 'assist-in assist-in--d1' : ''}`}>
            {/* Left — info */}
            <div className="assist-reach-merged__left">
              <div className="assist-reach-merged__icon-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="assist-reach-merged__title">Email us directly</h3>
              <a href="mailto:support@proso.ai" className="assist-reach-merged__email">support@proso.ai</a>
              <p className="assist-reach-merged__desc">
                Whether you need help with a board, have billing questions, want to explore enterprise plans, or just want to learn best practices — one email gets you to the right person.
              </p>
              <span className="assist-reach-merged__badge">
                <span className="assist-bdot" style={{ background: '#F67021' }} />
                Typically replies within 2 hours on business days
              </span>
            </div>

            {/* Right — service list */}
            <div className="assist-reach-merged__right">
              {[
                { icon: '💬', label: 'Customer Support', desc: 'Account issues, board creation, contributor access, troubleshooting.', color: '#F67021', bg: '#FFF3EE' },
                { icon: '🏢', label: 'Sales & Enterprise', desc: 'Enterprise deployments, integrations, large-scale programs, and custom setups.', color: '#3B82F6', bg: '#EFF6FF' },
                { icon: '🌟', label: 'Customer Success', desc: 'Recognition best practices, engagement strategy, program consulting.', color: '#10B981', bg: '#ECFDF5' },
              ].map((item, i) => (
                <div key={i} className="assist-reach-merged__item">
                  <span className="assist-reach-merged__item-icon" style={{ background: item.bg, color: item.color }}>{item.icon}</span>
                  <div>
                    <strong style={{ color: item.color }}>{item.label}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
              <button className="assist-btn" style={{ marginTop: '8px' }} onClick={() => scrollTo('contact-us')}>
                Send a Message
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
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
                  { icon: '✉️', label: 'Email Support', sub: 'support@proso.ai', color: '#F67021' },
                  { icon: '📖', label: 'Help Center', sub: 'Browse our guides and docs', color: '#A78BFA' },
                  { icon: '🤝', label: 'Partnerships', sub: 'support@proso.ai', color: '#34D399' },
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
