import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './AwardStyle.css';

const stylesData = {
  milestones: {
    id: 'milestones',
    title: 'Key Milestones',
    tagline: 'Honor professional journeys and life events',
    accent: '#F97316',
    accentLight: '#FFE4D5',
    themeClass: 'award-theme--orange',
    intro: 'Automate celebrations for employee birthdays, promotions, career retirements, and long-term service milestones. Ensure no milestone goes unnoticed with HRIS integrations.',
    cards: [
      {
        emoji: '🎂',
        title: 'Happy Birthday, Sarah!',
        message: 'Wishing you the happiest of birthdays! Thank you for bringing so much energy and passion to the product team every single day. Have an amazing celebration!',
        author: 'Marcus Vance',
        role: 'Director of Product',
        tag: 'Birthday'
      },
      {
        emoji: '🏆',
        title: 'Happy 5-Year Work Anniversary!',
        message: 'Five years of absolute dedication, building code bases, and leading our team to success. We are incredibly lucky to have you, David. Here is to five more!',
        author: 'Elena Rostova',
        role: 'VP of Engineering',
        tag: 'Milestone'
      },
      {
        emoji: '🎖',
        title: 'Congrats on the Promotion!',
        message: 'So well-deserved, Clara! Your leadership during the Q1 launch was outstanding. Excited to see you excel in your new Senior Manager role!',
        author: 'James Patel',
        role: 'Head of Operations',
        tag: 'Promotion'
      }
    ],
    details: [
      { icon: '📅', label: 'HRIS Automated Triggers', desc: 'Sync automatically with Workday, BambooHR, or Rippling to trigger boards before the date.' },
      { icon: '🎁', label: 'Curated Gifts & Books', desc: 'Add optional physical gifts or print a high-quality hardcover keepsake book with all co-signed messages.' },
      { icon: '👥', label: 'Multi-Department Signing', desc: 'Easily coordinate large-scale boards that span multiple teams, geographical divisions, or external partners.' }
    ]
  },
  values: {
    id: 'values',
    title: 'Connection & Values',
    tagline: 'Bring company values to life in everyday work',
    accent: '#3B82F6',
    accentLight: '#DBEAFE',
    themeClass: 'award-theme--blue',
    intro: 'Embed corporate principles into everyday employee behaviors. Create values-driven appreciation campaigns that showcase real teamwork in action, aligned to your core mission.',
    cards: [
      {
        emoji: '💡',
        title: 'Innovation in Action',
        message: 'Kudos to Priya for thinking outside the box! Her refactoring of the backend API reduced latency by 45%. This perfectly embodies our core value of Tech Innovation.',
        author: 'Simon Peter',
        role: 'Lead Architect',
        tag: 'Core Value'
      },
      {
        emoji: '🤝',
        title: 'Customer Obsession',
        message: 'A massive thank you to Ken for staying late on Friday to resolve the server issue for our enterprise customer. Truly outstanding commitment to customer trust!',
        author: 'Rachel Green',
        role: 'Customer Success',
        tag: 'Collaboration'
      },
      {
        emoji: '🚀',
        title: 'Ownership & Drive',
        message: 'Thomas took full ownership of the marketing campaign launch under a tight deadline and delivered stellar results. Proud to have you on the squad!',
        author: 'Chloe Simmons',
        role: 'CMO',
        tag: 'Ownership'
      }
    ],
    details: [
      { icon: '🏷', label: 'Bespoke Value Badges', desc: 'Assign custom tags and stickers matching your company core values (e.g. Integrity, Customer First).' },
      { icon: '📈', label: 'Engagement Insights', desc: 'Track which company values are demonstrating high adoption using real-time employee sentiment analytics.' },
      { icon: '📣', label: 'Public Appreciation Walls', desc: 'Display value-driven recognition cards on office displays or corporate intranets to keep positive wins visible.' }
    ]
  },
  kudos: {
    id: 'kudos',
    title: 'Peer Kudos',
    tagline: 'Spontaneous appreciation across all levels',
    accent: '#22C55E',
    accentLight: '#DCFCE7',
    themeClass: 'award-theme--green',
    intro: 'Give everyone a voice. Foster a peer-to-peer appreciation culture that breaks down corporate silos and increases team engagement by celebrating everyday collaborative victories.',
    cards: [
      {
        emoji: '🙌',
        title: 'Thanks for the Help!',
        message: 'A quick shout-out to Leo for jumping in to help me debug my frontend code yesterday. I would have been stuck for hours without your support. You rock!',
        author: 'Maya Lin',
        role: 'Frontend Dev',
        tag: 'Spontaneous Kudos'
      },
      {
        emoji: '🍕',
        title: 'Friday Deployment Savior',
        message: 'Huge thanks to the devops team for ensuring a smooth release on Friday evening! Celebrating with pizza in the Slack channel. Appreciate you all!',
        author: 'Arjun Mehta',
        role: 'Release Manager',
        tag: 'Team Shoutout'
      },
      {
        emoji: '⚡',
        title: 'Quick Turnaround',
        message: 'Kudos to Lisa for polishing the client deck within an hour. The client was absolutely blown away by our responsiveness and detailed figures!',
        author: 'Robert Chen',
        role: 'Account Director',
        tag: 'Peer Thanks'
      }
    ],
    details: [
      { icon: '🔓', label: 'Zero-Friction Access', desc: 'Teammates can sign instantly via single sign-on (SSO) or magic links without managing complex credentials.' },
      { icon: '💬', label: 'Slack & Teams Integrations', desc: 'Let employees send kudos directly from Slack or MS Teams without changing their workspace workflows.' },
      { icon: '🎉', label: 'Interactive Confetti & Media', desc: 'Allow co-signers to attach GIFs, customized background styles, photos, and animated greetings to highlight card uniqueness.' }
    ]
  }
};

export default function AwardStyle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="award-page">
      <Navbar />

      {/* Hero Section */}
      <section className="aw-hero">
        <div className="aw-hero__gradient"></div>
        <div className="aw-container">
          <div className="aw-hero__content">
            <h1 className="aw-hero__title">
              Elevate Workplace Appreciation
            </h1>
            <p className="aw-hero__subtitle">
              Empower your teams with a premium recognition platform. Choose from specialized formats designed to celebrate life milestones, reinforce company values, and spark peer-to-peer gratitude.
            </p>
          </div>
        </div>
      </section>

      {/* Three Sections in Zig-Zag Layout */}
      {Object.values(stylesData).map((style, index) => {
        const isReversed = index % 2 === 1;
        return (
          <section 
            key={style.id} 
            className={`aw-section ${style.themeClass} ${isReversed ? 'aw-section--reverse' : ''}`}
          >
            <div className="aw-container">
              <div className="aw-section__grid">
                
                {/* Info Column */}
                <div className="aw-section__info">
                  <span className="aw-section__badge" style={{ color: style.accent, borderColor: `${style.accent}40`, background: `${style.accent}12` }}>
                    {style.title}
                  </span>
                  <h2 className="aw-section__title" style={{ borderLeftColor: style.accent }}>
                    {style.tagline}
                  </h2>
                  <p className="aw-section__intro">
                    {style.intro}
                  </p>

                  <div className="aw-details-list">
                    {style.details.map((detail, idx) => (
                      <div key={idx} className="aw-detail-item">
                        <div className="aw-detail-item__icon" style={{ background: `${style.accent}15`, color: style.accent }}>
                          {detail.icon}
                        </div>
                        <div>
                          <h4 className="aw-detail-item__label">{detail.label}</h4>
                          <p className="aw-detail-item__desc">{detail.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Card Mockup Column */}
                <div className="aw-section__visual">
                  <div className="aw-board-mockup" style={{ '--accent-color': style.accent }}>
                    <div className="aw-board-mockup__header">
                      <div className="aw-mock-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="aw-mock-title">
                        ✨ {style.title} Board
                      </div>
                    </div>

                    <div className="aw-board-mockup__cards-container">
                      {style.cards.map((card, i) => (
                        <div 
                          key={i} 
                          className="aw-mock-card"
                          style={{ 
                            animationDelay: `${i * 100}ms`,
                            borderColor: i === 0 ? `${style.accent}30` : 'rgba(255,255,255,0.06)'
                          }}
                        >
                          <div className="aw-mock-card__header">
                            <span className="aw-mock-card__emoji">{card.emoji}</span>
                            <span className="aw-mock-card__tag" style={{ background: `${style.accent}15`, color: style.accent }}>
                              {card.tag}
                            </span>
                          </div>
                          <h4 className="aw-mock-card__title">{card.title}</h4>
                          <p className="aw-mock-card__msg">"{card.message}"</p>
                          <div className="aw-mock-card__footer">
                            <div>
                              <strong>{card.author}</strong>
                              <span>{card.role}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="aw-cta-section">
        <div className="aw-container">
          <div className="aw-cta-card">
            <h2>Ready to recognize your team?</h2>
            <p>Start a board in 2 minutes. No subscription required, invite unlimited co-signers, and customize layouts effortlessly.</p>
            <div className="aw-cta-actions">
              <a href="#create" className="aw-btn aw-btn--primary" style={{ background: 'linear-gradient(135deg, #F97316 0%, #3B82F6 100%)', boxShadow: '0 8px 24px rgba(59, 130, 246, 0.25)' }}>
                Start recognition board
              </a>
              <a href="#demo" className="aw-btn aw-btn--secondary">
                Explore demo boards
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
