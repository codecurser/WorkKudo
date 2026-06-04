import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/workkudosvg.svg'

/* ─── Data ─────────────────────────────────────────────────── */

const occasions = [
  { emoji: '👋', label: 'Send-Off',         desc: 'Send off a colleague with warmth' },
  { emoji: '🎂', label: 'Birthday',          desc: 'Celebrate their special day' },
  { emoji: '💌', label: 'Appreciation',      desc: 'Express genuine appreciation' },
  { emoji: '🏖', label: 'Retirement',        desc: 'Honor years of dedication' },
  { emoji: '💙', label: 'Condolence',        desc: 'Offer comfort and support' },
  { emoji: '🏆', label: 'Work Milestone',    desc: 'Milestone worth celebrating' },
  { emoji: '🌼', label: 'Speedy Recovery',   desc: 'Lift someone\'s spirits' },
  { emoji: '👶', label: 'Baby Arrival',      desc: 'Welcome the newest member' },
  { emoji: '🎉', label: 'Onboarding',        desc: 'Make a great first impression' },
  { emoji: '🥳', label: 'Kudos',             desc: 'Celebrate achievements big & small' },
  { emoji: '🎄', label: 'Festive Season',    desc: 'Season\'s greetings for everyone' },
]

const events = [
  { emoji: '🎤', label: 'Leadership Exit',       desc: 'Honour leadership transitions' },
  { emoji: '🎊', label: 'Org Milestone',          desc: 'Mark company-wide milestones' },
  { emoji: '🏅', label: 'Star Performer',         desc: 'Recognize top performers' },
  { emoji: '🌎', label: 'Diversity & Belonging',  desc: 'Celebrate cultural diversity' },
  { emoji: '👏', label: 'Team Recognition',       desc: 'Dedicated appreciation events' },
  { emoji: '🕊', label: 'Digital Tribute',        desc: 'A place to share memories' },
  { emoji: '🏢', label: 'Team Gathering',         desc: 'Team-level celebrations' },
  { emoji: '❄',  label: 'Festive Party',          desc: 'Festive moments together' },
  { emoji: '🎉', label: 'Squad Win',              desc: 'Celebrate team wins' },
  { emoji: '🏆', label: 'Workplace Challenge',    desc: 'Friendly competitive spirit' },
  { emoji: '🎯', label: 'Summits & Retreats',     desc: 'Events beyond the office' },
]

const recognitionCards = [
  {
    emoji: '⭐',
    title: 'Key Milestones',
    desc: 'Birthdays, promotions, retirements and milestones.',
    bg: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
    border: '#FED7AA',
    accent: '#F97316',
  },
  {
    emoji: '📣',
    title: 'Connection & Values',
    desc: 'Recognition programs and team engagement.',
    bg: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
    border: '#BFDBFE',
    accent: '#3B82F6',
  },
  {
    emoji: '🤝',
    title: 'Peer Kudos',
    desc: 'Peer-to-peer recognition and appreciation.',
    bg: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
    border: '#BBF7D0',
    accent: '#22C55E',
  },
]

const extras = [
  { emoji: '💌', label: 'Digital Cards',       desc: 'Digital cards with personality' },
  { emoji: '🎁', label: 'Business Gifts',      desc: 'Meaningful, curated gifts' },
  { emoji: '🎟', label: 'Reward Vouchers',     desc: 'Let them choose their reward' },
  { emoji: '📋', label: 'Shared Group Cards',  desc: 'Sign together, anywhere' },
  { emoji: '📖', label: 'Printed Keepsakes',   desc: 'Physical keepsakes that last' },
  { emoji: '🖼', label: 'Photo Mosaics',       desc: 'Photo memories, beautifully arranged' },
  { emoji: '🎞', label: 'Memory Reels',        desc: 'Video-style memory reels' },
]

/* Tab definitions for the Build mega menu */
const createTabs = [
  {
    id: 'occasions',
    label: 'Moments',
    emoji: '🎉',
    tagline: 'Life moments worth celebrating',
    items: occasions,
    type: 'grid',
  },
  {
    id: 'events',
    label: 'Programs & Drives',
    emoji: '📅',
    tagline: 'Company-wide celebrations & campaigns',
    items: events,
    type: 'grid',
  },
  {
    id: 'recognition',
    label: 'Award Style',
    emoji: '⭐',
    tagline: 'Choose how you want to recognise',
    items: recognitionCards,
    type: 'cards',
  },
  {
    id: 'extras',
    label: 'Add-ons',
    emoji: '✨',
    tagline: 'More ways to show appreciation',
    items: extras,
    type: 'grid',
  },
]

const platformFeatures = [
  { icon: '📊', label: 'Appreciation Walls',     desc: 'Group cards your team can sign' },
  { icon: '📈', label: 'Group Insights',          desc: 'Visualize recognition in real-time' },
  { icon: '🔍', label: 'Metrics',                 desc: 'Insights into team engagement' },
  { icon: '🎨', label: 'Festive Layouts',         desc: 'Beautiful ready-made designs' },
  { icon: '💡', label: 'Staff Motivation',        desc: 'Tools that motivate your people' },
  { icon: '📋', label: 'Data Reports',            desc: 'Export data and share results' },
  { icon: '🔗', label: 'Connections',             desc: 'Slack, Teams, HRIS and more' },
  { icon: '🔔', label: 'Alerts',                  desc: 'Never miss a milestone' },
]

const platformBenefits = [
  { icon: '🚀', label: 'Boost team spirit',         color: '#FF6B2C' },
  { icon: '💬', label: 'Enhance participation',     color: '#3B82F6' },
  { icon: '🌱', label: 'Build community',           color: '#22C55E' },
  { icon: '🎯', label: 'Honor achievements',        color: '#F59E0B' },
  { icon: '🌐', label: 'Remote workforce',          color: '#8B5CF6' },
  { icon: '🏡', label: 'Virtual appreciation',      color: '#EC4899' },
]

const customersData = {
  Sectors:           ['New Ventures', 'Studios', 'Academia', 'Medical', 'Charities'],
  'Trusted By':      ['Distributed Teams', 'People Teams', 'Entrepreneurs', 'Workforce Ops'],
  'Win Stories':     ['Success Highlights', 'Use Cases'],
}

const resourcesData = {
  Guides:     ['Support Hub', 'Layouts', 'Appreciation Handbook', 'Insights'],
  Assistance: ['Reach Us', 'Common Questions', 'Forum'],
}

/* ─── Icons ─────────────────────────────────────────────────── */
const ChevronIcon = ({ className = '' }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`nav-chevron ${className}`}>
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ─── Create Mega Menu — Sidebar Tab UI ────────────────────── */
function CreateMegaMenu() {
  const [activeTab, setActiveTab] = useState('occasions')
  const [animKey, setAnimKey]     = useState(0)

  const tab = createTabs.find(t => t.id === activeTab)

  const handleTabChange = (id) => {
    if (id === activeTab) return
    setActiveTab(id)
    setAnimKey(k => k + 1)
  }

  return (
    <div className="mega-menu mega-menu--create">
      {/* Left Rail */}
      <aside className="create-rail">
        <p className="create-rail__eyebrow">BROWSE BY</p>
        {createTabs.map(t => (
          <button
            key={t.id}
            className={`create-rail__tab ${activeTab === t.id ? 'create-rail__tab--active' : ''}`}
            onMouseEnter={() => handleTabChange(t.id)}
            onClick={() => handleTabChange(t.id)}
          >
            <span className="create-rail__tab-emoji">{t.emoji}</span>
            <div className="create-rail__tab-text">
              <span className="create-rail__tab-label">{t.label}</span>
              <span className="create-rail__tab-count">
                {t.items.length} {t.type === 'cards' ? 'types' : 'options'}
              </span>
            </div>
            <ArrowIcon />
          </button>
        ))}

        {/* Bottom CTA */}
        <div className="create-rail__footer">
          <a href="#create" className="create-rail__cta">
            🎉 Create a Board
          </a>
        </div>
      </aside>

      {/* Right Panel */}
      <div className="create-panel" key={animKey}>
        <div className="create-panel__header">
          <span className="create-panel__emoji">{tab.emoji}</span>
          <div>
            <h3 className="create-panel__title">{tab.label}</h3>
            <p className="create-panel__tagline">{tab.tagline}</p>
          </div>
        </div>

        {tab.type === 'grid' && (
          <div className="create-panel__grid">
            {tab.items.map((item, i) => (
              <a
                key={item.label}
                href="#"
                className="panel-item"
                style={{ animationDelay: `${i * 18}ms` }}
              >
                <span className="panel-item__emoji">{item.emoji}</span>
                <div className="panel-item__text">
                  <span className="panel-item__label">{item.label}</span>
                  <span className="panel-item__desc">{item.desc}</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {tab.type === 'cards' && (
          <div className="create-panel__cards">
            {tab.items.map((card, i) => (
              <a
                key={card.title}
                href="#"
                className="panel-card"
                style={{
                  background: card.bg,
                  borderColor: card.border,
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div className="panel-card__icon" style={{ background: card.border }}>
                  {card.emoji}
                </div>
                <div>
                  <p className="panel-card__title" style={{ color: card.accent }}>{card.title}</p>
                  <p className="panel-card__desc">{card.desc}</p>
                </div>
                <span className="panel-card__arrow" style={{ color: card.accent }}>
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Platform Mega Menu ───────────────────────────────────── */
function PlatformMegaMenu() {
  return (
    <div className="mega-menu mega-menu--platform">
      <div className="mega-menu__inner mega-menu__inner--two-col">

        <div className="mega-col">
          <p className="mega-col__title">FEATURES</p>
          <div className="platform-list">
            {platformFeatures.map(f => (
              <a key={f.label} href="#" className="platform-item">
                <span className="platform-item__icon">{f.icon}</span>
                <div>
                  <p className="platform-item__label">{f.label}</p>
                  <p className="platform-item__desc">{f.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mega-divider" />

        <div className="mega-col">
          <p className="mega-col__title">BENEFITS</p>
          <div className="benefits-list">
            {platformBenefits.map(b => (
              <a key={b.label} href="#" className="benefit-item">
                <span className="benefit-item__icon" style={{ background: `${b.color}18`, color: b.color }}>
                  {b.icon}
                </span>
                <span className="benefit-item__label">{b.label}</span>
              </a>
            ))}
          </div>

          {/* Feature highlight */}
          <div className="platform-highlight">
            <p className="platform-highlight__title">Trusted by 50,000+ employees</p>
            <p className="platform-highlight__sub">Across 120+ countries worldwide</p>
          </div>
        </div>

      </div>
    </div>
  )
}

/* ─── Small Dropdown ───────────────────────────────────────── */
function SmallDropdown({ data }) {
  return (
    <div className="small-dropdown">
      {Object.entries(data).map(([section, items]) => (
        <div key={section} className="small-dropdown__section">
          <p className="small-dropdown__title">{section}</p>
          <ul>
            {items.map(item => (
              <li key={item}>
                <a href="#" className="small-dropdown__item">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/* ─── Mobile Accordion ─────────────────────────────────────── */
function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mobile-accordion">
      <button
        className={`mobile-accordion__trigger ${open ? 'mobile-accordion__trigger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {label}
        <ChevronIcon />
      </button>
      <div className={`mobile-accordion__body ${open ? 'mobile-accordion__body--open' : ''}`}>
        {children}
      </div>
    </div>
  )
}

/* ─── Main Navbar ──────────────────────────────────────────── */
const NAV_ITEMS      = ['Build', 'Solutions', 'Business', 'Community', 'Learn', 'Pricing']
const MEGA_ITEMS     = ['Build', 'Solutions']
const DROPDOWN_ITEMS = ['Community', 'Learn']

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10)
          if (window.scrollY > 10) setActiveMenu(null)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMenu  = (name) => { clearTimeout(closeTimer.current); setActiveMenu(name) }
  const closeMenu = ()     => { closeTimer.current = setTimeout(() => setActiveMenu(null), 140) }
  const keepOpen  = ()     => clearTimeout(closeTimer.current)

  const hasMegaOrDropdown = (item) =>
    MEGA_ITEMS.includes(item) || DROPDOWN_ITEMS.includes(item)

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          {/* Logo */}
          <a href="/" className="navbar__logo">
            <img src={logo} alt="WorkKudo" className="navbar__logo-icon" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">WorkKudo</span>
              <span className="navbar__logo-tagline">Recognition for modern teams</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {NAV_ITEMS.map(item => (
              <div
                key={item}
                className={`nav-item ${activeMenu === item ? 'nav-item--active' : ''}`}
                onMouseEnter={() => hasMegaOrDropdown(item) ? openMenu(item) : null}
                onMouseLeave={() => hasMegaOrDropdown(item) ? closeMenu() : null}
              >
                {item === 'Pricing' ? (
                  <Link to="/pricing" className="nav-link">
                    Pricing
                  </Link>
                ) : (
                  <a href={`#${item.toLowerCase()}`} className="nav-link"
                     aria-haspopup={hasMegaOrDropdown(item)}
                     aria-expanded={activeMenu === item}>
                    {item}
                    {hasMegaOrDropdown(item) && <ChevronIcon />}
                  </a>
                )}

                {item === 'Build'     && activeMenu === 'Build'     && (
                  <div className="menu-wrapper menu-wrapper--mega" onMouseEnter={keepOpen} onMouseLeave={closeMenu}>
                    <CreateMegaMenu />
                  </div>
                )}
                {item === 'Solutions' && activeMenu === 'Solutions' && (
                  <div className="menu-wrapper menu-wrapper--platform" onMouseEnter={keepOpen} onMouseLeave={closeMenu}>
                    <PlatformMegaMenu />
                  </div>
                )}
                {item === 'Community' && activeMenu === 'Community' && (
                  <div className="menu-wrapper menu-wrapper--small" onMouseEnter={keepOpen} onMouseLeave={closeMenu}>
                    <SmallDropdown data={customersData} />
                  </div>
                )}
                {item === 'Learn'     && activeMenu === 'Learn'     && (
                  <div className="menu-wrapper menu-wrapper--small" onMouseEnter={keepOpen} onMouseLeave={closeMenu}>
                    <SmallDropdown data={resourcesData} />
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right */}
          <div className="navbar__actions">
            <a href="#signin" className="navbar__signin">Sign In</a>
            <a href="#create" className="navbar__cta">
              Create a Board
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5h10M8 3l5 4.5L8 12" stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__body">
          <MobileAccordion label="Build">
            <div className="mobile-section-title">MOMENTS</div>
            {occasions.map(o => (
              <a key={o.label} href="#" className="mobile-link">{o.emoji} {o.label}</a>
            ))}
            <div className="mobile-section-title" style={{ marginTop: 14 }}>PROGRAMS</div>
            {events.slice(0, 5).map(e => (
              <a key={e.label} href="#" className="mobile-link">{e.emoji} {e.label}</a>
            ))}
          </MobileAccordion>

          <MobileAccordion label="Solutions">
            <div className="mobile-section-title">FEATURES</div>
            {platformFeatures.map(f => (
              <a key={f.label} href="#" className="mobile-link">{f.icon} {f.label}</a>
            ))}
          </MobileAccordion>

          <a href="#business" className="mobile-top-link">Business</a>
          <a href="#community" className="mobile-top-link">Community</a>

          <MobileAccordion label="Learn">
            {Object.entries(resourcesData).map(([sec, items]) => (
              <div key={sec}>
                <div className="mobile-section-title">{sec}</div>
                {items.map(i => <a key={i} href="#" className="mobile-link">{i}</a>)}
              </div>
            ))}
          </MobileAccordion>

          <Link to="/pricing" className="mobile-top-link" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <a href="#signin"  className="mobile-top-link">Sign In</a>
        </div>

        <div className="mobile-menu__footer">
          <a href="#create" className="navbar__cta mobile-cta">🎉 Create a Board</a>
        </div>
      </div>

      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  )
}
