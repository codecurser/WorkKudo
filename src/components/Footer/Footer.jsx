import './Footer.css'
import logo from '../../assets/workkudosvg.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ─── Footer Link Data ──────────────────────────────────────── */
const columns = [
  {
    heading: 'Community',
    links: [
      'Corporations & Enterprise',
      'Distributed Workforces',
      'People & Culture Teams',
      'Medical & Healthcare',
      'Charities & NGOs',
      'Early-Stage Ventures',
    ],
  },
  {
    heading: 'Company',
    links: [
      'About Us',
      'Blog',
      'Careers',
      'Contact Us',
      'Request a Demo',
    ],
  },
  {
    heading: 'Learn',
    links: [
      'Support Hub',
      'Appreciation Handbook',
      'Common Questions',
      'Insights',
      'Forum',
    ],
  },
]

/* ─── Social Icons ──────────────────────────────────────────── */
const socials = [
  {
    label: 'Facebook',
    href: '#',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1A2B4A"/>
      </svg>
    ),
  },
]

/* ─── Component ─────────────────────────────────────────────── */
export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <footer className="footer">

      {/* ── Main Grid ── */}
      <div className="footer__top">
        <div className="footer__inner">

          {/* Brand column */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <img src={logo} alt="WorkKudo" className="footer__logo-img" />
              <span className="footer__logo-name">WorkKudo</span>
            </a>
            <p className="footer__tagline">
              Celebrate the people who make work worth it — with beautiful group cards, kudos, and milestone recognition.
            </p>
            {/* Social Icons */}
            <div className="footer__socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="footer__social" aria-label={s.label}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.heading} className="footer__col">
              <p className="footer__col-heading">{col.heading}</p>
              <ul className="footer__col-list">
                {col.links.map(link => {
                  let href = '#'
                  let isRouterLink = false

                  if (link === 'About Us') {
                    href = '/about-us'
                    isRouterLink = true
                  } else if (link === 'Contact Us') {
                    href = '/connect#contact'
                    isRouterLink = true
                  } else if (link === 'Careers') {
                    href = '/connect#careers'
                    isRouterLink = true
                  } else if (link === 'Request a Demo') {
                    href = '/connect#demo'
                    isRouterLink = true
                  } else if (link === 'Corporations & Enterprise') {
                    href = '/solutions/enterprise'
                    isRouterLink = true
                  } else if (link === 'Distributed Workforces') {
                    href = '/solutions/distributed'
                    isRouterLink = true
                  } else if (link === 'People & Culture Teams') {
                    href = '/solutions/people-culture'
                    isRouterLink = true
                  } else if (link === 'Medical & Healthcare') {
                    href = '/solutions/healthcare'
                    isRouterLink = true
                  } else if (link === 'Charities & NGOs') {
                    href = '/solutions/nonprofits'
                    isRouterLink = true
                  } else if (link === 'Early-Stage Ventures') {
                    href = '/solutions/startups'
                    isRouterLink = true
                  }

                  return (
                    <li key={link}>
                      {isRouterLink ? (
                        <Link to={href} className="footer__link">{link}</Link>
                      ) : (
                        <a href={href} className="footer__link">{link}</a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Newsletter ── */}
      <div className="footer__newsletter">
        <div className="footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <h3>Love happy coworkers?</h3>
            <p>Get recognition tips, templates & updates — straight to your inbox.</p>
          </div>
          {!subscribed ? (
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="footer__email-input"
                required
              />
              <button type="submit" className="footer__subscribe-btn">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="footer__subscribed">
              You're in! Welcome to the WorkKudo community.
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__bottom-left">
            <img src={logo} alt="WorkKudo" className="footer__bottom-logo" />
            <span className="footer__copyright">© 2026 WorkKudo, Inc. All rights reserved.</span>
          </div>
          <div className="footer__bottom-links">
            <Link to="/pricing" className="footer__legal">Pricing</Link>
            <span className="footer__divider">|</span>
            <Link to="/privacy" className="footer__legal">Privacy Policy</Link>
            <span className="footer__divider">|</span>
            <Link to="/terms" className="footer__legal">Terms of Service</Link>
            <span className="footer__divider">|</span>
            <a href="#" className="footer__legal">Cookie Settings</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
