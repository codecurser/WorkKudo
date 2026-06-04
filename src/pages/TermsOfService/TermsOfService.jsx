import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TermsOfService.css'
import logo from '../../assets/workkudosvg.svg'

const sections = [
  { id: 'what', num: '01', title: 'What WorkKudo is' },
  { id: 'pricing', num: '02', title: 'Pricing & Payment' },
  { id: 'data', num: '03', title: 'Data Storage & Retention' },
  { id: 'use', num: '04', title: 'Acceptable Use' },
  { id: 'content', num: '05', title: 'Content Ownership & Licence' },
  { id: 'ip', num: '06', title: 'Intellectual Property' },
  { id: 'warranty', num: '07', title: 'Disclaimer of Warranties' },
  { id: 'liability', num: '08', title: 'Limitation of Liability' },
  { id: 'third', num: '09', title: 'Third-Party Services' },
  { id: 'changes', num: '10', title: 'Changes to These Terms' },
  { id: 'contact', num: '11', title: 'Contact' },
]

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms of Service — WorkKudo'
    return () => { document.title = 'WorkKudo' }
  }, [])

  return (
    <div className="tos">

      {/* ── Top Bar ── */}
      <header className="tos__header">
        <div className="tos__header-inner">
          <Link to="/" className="tos__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            WorkKudo
          </Link>
          <a href="/" className="tos__logo">
            <img src={logo} alt="WorkKudo" className="tos__logo-img" />
            <span className="tos__logo-name">WorkKudo</span>
          </a>
        </div>
      </header>

      <div className="tos__layout">

        {/* ── Sidebar TOC ── */}
        <aside className="tos__sidebar">
          <p className="tos__toc-label">Contents</p>
          <nav className="tos__toc">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="tos__toc-link">
                <span className="tos__toc-num">{s.num}</span>
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="tos__content">

          {/* Hero */}
          <div className="tos__hero">
            <div className="tos__badge">Legal</div>
            <h1 className="tos__title">Terms of Service</h1>
            <p className="tos__meta">Last updated: <strong>May 2026</strong></p>
            <p className="tos__intro">
              Welcome to <strong>workkudo.ai</strong>. By accessing or using our service you agree to these terms.
              Please read them carefully. If you do not agree, please do not use the service.
            </p>
          </div>

          {/* ── Section 1 ── */}
          <section id="what" className="tos__section">
            <div className="tos__section-num">01</div>
            <h2 className="tos__section-title">What WorkKudo is</h2>
            <p>
              <strong>workkudo.ai</strong> is a web application that allows users to create collaborative digital
              celebration boards — for birthdays, farewells, promotions, and other team milestones.
              Board creators pay a one-time fee per board. Contributing to a board (adding messages,
              reactions, or media) is <strong>free</strong> for all contributors.
            </p>
          </section>

          {/* ── Section 2 ── */}
          <section id="pricing" className="tos__section">
            <div className="tos__section-num">02</div>
            <h2 className="tos__section-title">Pricing &amp; Payment</h2>
            <p>
              Creating a board costs <strong>$5 USD per board</strong>. Payment is processed securely
              through <strong>Stripe</strong>. There are no subscriptions, no recurring charges, and no
              per-contributor fees. Pricing may change at any time; changes will not affect boards that
              have already been paid for.
            </p>
            <p>
              Certain users may receive complimentary board credits granted by the workkudo.ai team.
              Each credit entitles the holder to create one board at no charge.
            </p>
          </section>

          {/* ── Section 3 ── */}
          <section id="data" className="tos__section">
            <div className="tos__section-num">03</div>
            <h2 className="tos__section-title">Data Storage &amp; Retention</h2>
            <p>
              Your account information (name, email address, profile picture) and all board content
              (messages, comments, reactions) are stored in our database hosted on cloud infrastructure.
              We take reasonable technical and organisational measures to protect your data.
            </p>
            <div className="tos__cards">
              <div className="tos__card tos__card--orange">
                <div className="tos__card-icon">💳</div>
                <div>
                  <p className="tos__card-title">Paid Boards</p>
                  <p className="tos__card-body">Images and video files are retained for <strong>90 days</strong> after
                    the board or associated media is deleted. Board text content follows standard database retention.</p>
                </div>
              </div>
              <div className="tos__card">
                <div className="tos__card-icon">🆓</div>
                <div>
                  <p className="tos__card-title">Free / Credited Boards</p>
                  <p className="tos__card-body">Media files may be deleted immediately or shortly after the
                    associated post or board is removed.</p>
                </div>
              </div>
              <div className="tos__card">
                <div className="tos__card-icon">🗑️</div>
                <div>
                  <p className="tos__card-title">Account Deletion</p>
                  <p className="tos__card-body">If you delete your account, your personal data is removed from
                    our systems, subject to any legal obligations to retain certain records.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 4 ── */}
          <section id="use" className="tos__section">
            <div className="tos__section-num">04</div>
            <h2 className="tos__section-title">Acceptable Use</h2>
            <p>You agree that you will <strong>not</strong> use WorkKudo to:</p>
            <ul className="tos__list">
              <li>Post or share any content that is illegal, harassing, defamatory, obscene, or otherwise objectionable.</li>
              <li>Share confidential, proprietary, or sensitive business information — including trade secrets, personal health data, financial account details, passwords, or private identifying information of others.</li>
              <li>Impersonate another person or entity.</li>
              <li>Attempt to gain unauthorised access to any part of the service or its infrastructure.</li>
              <li>Use the service for any commercial spam or bulk marketing purpose.</li>
              <li>Violate any applicable local, national, or international law or regulation.</li>
            </ul>
            <div className="tos__callout tos__callout--warning">
              <span className="tos__callout-icon">⚠️</span>
              <div>
                <p className="tos__callout-title">Important</p>
                <p>WorkKudo is designed for celebratory, positive workplace communication. It is <strong>not</strong> a
                  secure document platform. Do not post passwords, API keys, medical records, financial data,
                  or any other sensitive or confidential material.</p>
              </div>
            </div>
          </section>

          {/* ── Section 5 ── */}
          <section id="content" className="tos__section">
            <div className="tos__section-num">05</div>
            <h2 className="tos__section-title">Content Ownership &amp; Licence</h2>
            <p>
              You retain ownership of the content you post. By submitting content to WorkKudo you grant us
              a non-exclusive, worldwide, royalty-free licence to store, display, and transmit that content
              solely for the purpose of operating and improving the service. We will <strong>never</strong> sell
              or share your content with third parties for marketing purposes.
            </p>
          </section>

          {/* ── Section 6 ── */}
          <section id="ip" className="tos__section">
            <div className="tos__section-num">06</div>
            <h2 className="tos__section-title">Intellectual Property</h2>
            <p>
              The WorkKudo name, logo, application design, and all original software are the intellectual
              property of <strong>workkudo.ai</strong>. You may not copy, reproduce, or redistribute any
              part of the service without our prior written consent.
            </p>
          </section>

          {/* ── Section 7 ── */}
          <section id="warranty" className="tos__section">
            <div className="tos__section-num">07</div>
            <h2 className="tos__section-title">Disclaimer of Warranties</h2>
            <p>
              The service is provided <strong>"as is"</strong> and <strong>"as available"</strong> without
              warranties of any kind, express or implied, including but not limited to fitness for a particular
              purpose, merchantability, or uninterrupted availability. We do not guarantee that the service
              will be error-free or that data will never be lost.
            </p>
          </section>

          {/* ── Section 8 ── */}
          <section id="liability" className="tos__section">
            <div className="tos__section-num">08</div>
            <h2 className="tos__section-title">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, workkudo.ai shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of — or
              inability to use — the service, even if we have been advised of the possibility of such damages.
              Our total liability for any claim arising from the service shall not exceed the amount you paid
              us in the 12 months preceding the claim.
            </p>
          </section>

          {/* ── Section 9 ── */}
          <section id="third" className="tos__section">
            <div className="tos__section-num">09</div>
            <h2 className="tos__section-title">Third-Party Services</h2>
            <p>WorkKudo uses the following third-party services to operate:</p>
            <div className="tos__third-party-grid">
              <div className="tos__third-party">
                <span className="tos__tp-icon">🔐</span>
                <div>
                  <p className="tos__tp-name">Firebase Authentication</p>
                  <p className="tos__tp-desc">For Google and GitHub sign-in.</p>
                </div>
              </div>
              <div className="tos__third-party">
                <span className="tos__tp-icon">💳</span>
                <div>
                  <p className="tos__tp-name">Stripe</p>
                  <p className="tos__tp-desc">For payment processing. We do not store card details.</p>
                </div>
              </div>
              <div className="tos__third-party">
                <span className="tos__tp-icon">☁️</span>
                <div>
                  <p className="tos__tp-name">Microsoft Azure Blob Storage</p>
                  <p className="tos__tp-desc">For storing uploaded images and videos.</p>
                </div>
              </div>
            </div>
            <p className="tos__tp-note">
              Your use of these services is also subject to their respective terms and privacy policies.
            </p>
          </section>

          {/* ── Section 10 ── */}
          <section id="changes" className="tos__section">
            <div className="tos__section-num">10</div>
            <h2 className="tos__section-title">Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. When we do, we will revise the "Last updated"
              date at the top of this page. Continued use of the service after changes are posted constitutes
              your acceptance of the revised terms.
            </p>
          </section>

          {/* ── Section 11 ── */}
          <section id="contact" className="tos__section">
            <div className="tos__section-num">11</div>
            <h2 className="tos__section-title">Contact</h2>
            <p>If you have questions about these terms, please contact us at:</p>
            <a href="mailto:support@proso.ai" className="tos__email">
              <span>✉️</span> support@proso.ai
            </a>
          </section>

          {/* ── Footer strip ── */}
          <div className="tos__page-footer">
            <p>© 2026 WorkKudo, Inc. All rights reserved.</p>
            <Link to="/" className="tos__back-home">← Back to home</Link>
          </div>

        </main>
      </div>
    </div>
  )
}
