import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'
import logo from '../../assets/workkudosvg.svg'

const sections = [
  { id: 'who',       num: '01', title: 'Who We Are' },
  { id: 'collect',   num: '02', title: 'What Data We Collect' },
  { id: 'use',       num: '03', title: 'How We Use Your Data' },
  { id: 'storage',   num: '04', title: 'Data Storage & Security' },
  { id: 'retention', num: '05', title: 'Data Retention' },
  { id: 'third',     num: '06', title: 'Third-Party Services' },
  { id: 'cookies',   num: '07', title: 'Cookies' },
  { id: 'rights',    num: '08', title: 'Your Rights' },
  { id: 'children',  num: '09', title: 'Children' },
  { id: 'changes',   num: '10', title: 'Changes to This Policy' },
  { id: 'contact',   num: '11', title: 'Contact' },
]

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy — WorkKudo'
    return () => { document.title = 'WorkKudo' }
  }, [])

  return (
    <div className="pp">

      {/* ── Top Bar ── */}
      <header className="pp__header">
        <div className="pp__header-inner">
          <Link to="/" className="pp__back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            WorkKudo
          </Link>
          <a href="/" className="pp__logo">
            <img src={logo} alt="WorkKudo" className="pp__logo-img" />
            <span className="pp__logo-name">WorkKudo</span>
          </a>
        </div>
      </header>

      <div className="pp__layout">

        {/* ── Sidebar TOC ── */}
        <aside className="pp__sidebar">
          <p className="pp__toc-label">Contents</p>
          <nav className="pp__toc">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="pp__toc-link">
                <span className="pp__toc-num">{s.num}</span>
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="pp__content">

          {/* Hero */}
          <div className="pp__hero">
            <div className="pp__badge">Legal</div>
            <h1 className="pp__title">Privacy Policy</h1>
            <p className="pp__meta">Last updated: <strong>May 2026</strong></p>
            <p className="pp__intro">
              Your privacy matters to us. This policy explains what data we collect, why we collect it,
              how it is stored, and what rights you have. We keep it <strong>simple and honest</strong>.
            </p>
          </div>

          {/* ── 01 Who We Are ── */}
          <section id="who" className="pp__section">
            <div className="pp__section-num">01</div>
            <h2 className="pp__section-title">Who We Are</h2>
            <p>
              <strong>workkudo.ai</strong> is a web application for creating collaborative digital
              celebration boards. If you have any questions about this policy, contact us at{' '}
              <a href="mailto:support@proso.ai" className="pp__inline-link">support@proso.ai</a>.
            </p>
          </section>

          {/* ── 02 What Data We Collect ── */}
          <section id="collect" className="pp__section">
            <div className="pp__section-num">02</div>
            <h2 className="pp__section-title">What Data We Collect</h2>

            <div className="pp__data-grid">
              <div className="pp__data-card">
                <div className="pp__data-card-head">
                  <span className="pp__data-icon">👤</span>
                  <p className="pp__data-title">Account Information</p>
                </div>
                <p className="pp__data-sub">When you sign in we collect:</p>
                <ul className="pp__check-list">
                  <li><strong>Name</strong> — from your Google or GitHub account, or the name you provide.</li>
                  <li><strong>Email address</strong> — used to identify your account and send transactional messages.</li>
                  <li><strong>Profile picture URL</strong> — from your social login provider, if available.</li>
                </ul>
              </div>

              <div className="pp__data-card">
                <div className="pp__data-card-head">
                  <span className="pp__data-icon">🎉</span>
                  <p className="pp__data-title">Board & Message Content</p>
                </div>
                <p className="pp__data-sub">When you create boards or add messages, we store:</p>
                <ul className="pp__check-list">
                  <li>Board title, purpose, description, and settings you configure.</li>
                  <li>Messages, comments, and reactions you post.</li>
                  <li>Images and videos you upload as part of a message.</li>
                </ul>
              </div>

              <div className="pp__data-card">
                <div className="pp__data-card-head">
                  <span className="pp__data-icon">💳</span>
                  <p className="pp__data-title">Payment Information</p>
                </div>
                <p>
                  Payments are processed by <strong>Stripe</strong>. We <strong>never</strong> store
                  your card number, CVV, or bank details. We retain a Stripe session ID and payment
                  status for record-keeping.
                </p>
              </div>

              <div className="pp__data-card">
                <div className="pp__data-card-head">
                  <span className="pp__data-icon">📊</span>
                  <p className="pp__data-title">Usage Data</p>
                </div>
                <p>
                  We may collect basic usage data such as page visits and actions taken within the app
                  to help us understand how the service is used and to improve it. This data is
                  <strong> not linked to individuals</strong> for marketing purposes.
                </p>
              </div>
            </div>
          </section>

          {/* ── 03 How We Use Your Data ── */}
          <section id="use" className="pp__section">
            <div className="pp__section-num">03</div>
            <h2 className="pp__section-title">How We Use Your Data</h2>
            <ul className="pp__tick-list">
              <li>To operate and provide the WorkKudo service.</li>
              <li>To send you transactional emails (magic sign-in links, board notifications).</li>
              <li>To process payments securely through Stripe.</li>
              <li>To improve the service by understanding how it is used.</li>
              <li>To enforce our Terms of Service and prevent misuse.</li>
            </ul>
            <div className="pp__callout pp__callout--green">
              <span className="pp__callout-icon">🛡️</span>
              <div>
                <p className="pp__callout-title">Our Commitment</p>
                <p>We do <strong>not</strong> sell your personal data to third parties. We do <strong>not</strong> use
                  your data for advertising or share it with advertisers.</p>
              </div>
            </div>
          </section>

          {/* ── 04 Data Storage & Security ── */}
          <section id="storage" className="pp__section">
            <div className="pp__section-num">04</div>
            <h2 className="pp__section-title">Data Storage &amp; Security</h2>
            <p>
              Your data is stored on cloud infrastructure (database servers and <strong>Microsoft Azure
              Blob Storage</strong>). We use industry-standard measures — encrypted connections (HTTPS),
              access controls, and regular security reviews — to protect your data.
            </p>
            <div className="pp__callout pp__callout--warning">
              <span className="pp__callout-icon">⚠️</span>
              <div>
                <p className="pp__callout-title">Honest Disclosure</p>
                <p>No system is 100% secure. We cannot guarantee absolute security, but we take
                  reasonable steps to protect your information and notify you in the event of a
                  significant breach affecting your data.</p>
              </div>
            </div>
          </section>

          {/* ── 05 Data Retention ── */}
          <section id="retention" className="pp__section">
            <div className="pp__section-num">05</div>
            <h2 className="pp__section-title">Data Retention</h2>
            <div className="pp__retention-list">
              {[
                { icon: '🔐', label: 'Account Data', desc: 'Retained while your account is active. You can request deletion at any time by contacting us.' },
                { icon: '📝', label: 'Board Content (text)', desc: 'Retained while the board exists. Deleted when you or the board creator removes it.' },
                { icon: '📷', label: 'Media Files — Paid Boards', desc: 'Images and videos are retained for 90 days after deletion, then permanently purged. This allows a grace period for exports or accidental deletions.' },
                { icon: '🆓', label: 'Media Files — Free/Credited Boards', desc: 'May be deleted immediately upon removal of the associated post or board.' },
                { icon: '🧾', label: 'Payment Records', desc: 'Retained as required by applicable financial regulations.' },
              ].map(item => (
                <div key={item.label} className="pp__retention-row">
                  <span className="pp__retention-icon">{item.icon}</span>
                  <div>
                    <p className="pp__retention-label">{item.label}</p>
                    <p className="pp__retention-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 06 Third-Party Services ── */}
          <section id="third" className="pp__section">
            <div className="pp__section-num">06</div>
            <h2 className="pp__section-title">Third-Party Services</h2>
            <p>We use the following third-party services, each with their own privacy policies:</p>
            <div className="pp__third-grid">
              {[
                { icon: '🔐', name: 'Firebase Authentication (Google)', desc: 'Handles Google and GitHub sign-in.', policy: "Subject to Google's Privacy Policy." },
                { icon: '💳', name: 'Stripe', desc: 'Payment processing.', policy: "Subject to Stripe's Privacy Policy." },
                { icon: '☁️', name: 'Microsoft Azure', desc: 'Cloud hosting and blob storage.', policy: "Subject to Microsoft's Privacy Statement." },
              ].map(tp => (
                <div key={tp.name} className="pp__third-card">
                  <span className="pp__third-icon">{tp.icon}</span>
                  <div>
                    <p className="pp__third-name">{tp.name}</p>
                    <p className="pp__third-desc">{tp.desc}</p>
                    <p className="pp__third-policy">{tp.policy}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 07 Cookies ── */}
          <section id="cookies" className="pp__section">
            <div className="pp__section-num">07</div>
            <h2 className="pp__section-title">Cookies</h2>
            <p>
              workkudo.ai uses <strong>minimal cookies</strong> strictly necessary to keep you signed
              in (session tokens). We do <strong>not</strong> use advertising cookies, third-party
              tracking pixels, or cross-site analytics cookies.
            </p>
          </section>

          {/* ── 08 Your Rights ── */}
          <section id="rights" className="pp__section">
            <div className="pp__section-num">08</div>
            <h2 className="pp__section-title">Your Rights</h2>
            <p>Depending on your location you may have the right to:</p>
            <ul className="pp__rights-list">
              {[
                { icon: '👁️', right: 'Access the personal data we hold about you.' },
                { icon: '✏️', right: 'Request correction of inaccurate data.' },
                { icon: '🗑️', right: 'Request deletion of your account and associated data.' },
                { icon: '🚫', right: 'Object to or restrict certain types of processing.' },
                { icon: '📦', right: 'Receive a copy of your data in a portable format.' },
              ].map(r => (
                <li key={r.right} className="pp__right-item">
                  <span className="pp__right-icon">{r.icon}</span>
                  <span>{r.right}</span>
                </li>
              ))}
            </ul>
            <div className="pp__callout pp__callout--blue">
              <span className="pp__callout-icon">📬</span>
              <div>
                <p className="pp__callout-title">Exercise Your Rights</p>
                <p>To exercise any of these rights, email us at{' '}
                  <a href="mailto:support@proso.ai" className="pp__inline-link">support@proso.ai</a>.
                  We will respond within <strong>30 days</strong>.</p>
              </div>
            </div>
          </section>

          {/* ── 09 Children ── */}
          <section id="children" className="pp__section">
            <div className="pp__section-num">09</div>
            <h2 className="pp__section-title">Children</h2>
            <p>
              WorkKudo is not directed at children under <strong>13 years of age</strong>. We do not
              knowingly collect personal data from children. If you believe we have inadvertently
              collected data from a child, please contact us and we will delete it promptly.
            </p>
          </section>

          {/* ── 10 Changes ── */}
          <section id="changes" className="pp__section">
            <div className="pp__section-num">10</div>
            <h2 className="pp__section-title">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The "Last updated" date at the top will
              reflect any changes. Continued use of the service after an update constitutes acceptance
              of the revised policy.
            </p>
          </section>

          {/* ── 11 Contact ── */}
          <section id="contact" className="pp__section">
            <div className="pp__section-num">11</div>
            <h2 className="pp__section-title">Contact</h2>
            <p>Questions or concerns? We'd love to hear from you.</p>
            <a href="mailto:support@proso.ai" className="pp__email">
              <span>✉️</span> support@proso.ai
            </a>
          </section>

          {/* ── Page Footer ── */}
          <div className="pp__page-footer">
            <p>© 2026 WorkKudo, Inc. All rights reserved.</p>
            <Link to="/" className="pp__back-home">← Back to home</Link>
          </div>

        </main>
      </div>
    </div>
  )
}
