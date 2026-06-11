import React, { useRef, useState, useEffect } from 'react';
import './Gifting.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';
import WorkkudoCard from '../../components/WorkkudoCard/WorkkudoCard';

import physicalGiftsImg from '../../assets/physical_gifts.png';
import giftCardsImg from '../../assets/gift_cards.png';
import momentsImg from '../../assets/moments.png';
import theBoardImg from '../../assets/the-board.png';
import invitePeopleImg from '../../assets/invite-people.png';
import dashboardImg from '../../assets/dashboard.png';

const TYPING_WORDS = ['personal touch.', 'lasting impact.', 'digital twist.'];

const steps = [
  {
    number: "01",
    title: "Create a Board",
    desc: "Start a WorkKudo board for any occasion. Set up the recipient, target date, and select a theme template in minutes.",
    icon: "📋",
    color: "#FF6B2C"
  },
  {
    number: "02",
    title: "Collect Contributions",
    desc: "Invite teammates to add messages, photos, videos, and memories. Collaborate asynchronously from anywhere.",
    icon: "💬",
    color: "#3B82F6"
  },
  {
    number: "03",
    title: "Add Gifts or Rewards",
    desc: "Enhance the card with physical gifts, digital rewards, or electronic gift cards within your preferred budget.",
    icon: "🎁",
    color: "#10B981"
  },
  {
    number: "04",
    title: "Deliver Together",
    desc: "Send one complete experience combining recognition and rewards. Delivered on schedule via email or shareable link.",
    icon: "🚀",
    color: "#8B5CF6"
  }
];

const features = [
  { icon: "💌", title: "Digital Cards", desc: "Group appreciation cards signed by the whole team.", image: theBoardImg },
  { icon: "📝", title: "Personal Messages", desc: "Express appreciation with rich text, emojis, and media.", image: momentsImg },
  { icon: "📸", title: "Photo & Video Sharing", desc: "Teammates can post photos and recorded video greetings.", image: invitePeopleImg },
  { icon: "🎁", title: "Physical Gifts", desc: "Employees choose from 250,000+ top-brand products.", image: physicalGiftsImg },
  { icon: "💳", title: "Digital Rewards", desc: "Redemptions from 2,000+ local and global e-gift cards.", image: giftCardsImg },
  { icon: "📱", title: "Accessible Anywhere", desc: "Seamless mobile and desktop access, no app install required.", image: dashboardImg }
];

const choiceTabs = [
  {
    id: "physical",
    icon: "🎁",
    label: "Physical Gifts",
    title: "Curated products for meaningful celebrations",
    desc: "Delight your team with tangible rewards. From top-tier tech accessories to gourmet treats and custom swag, employees choose from a curated catalog of premium physical items delivered worldwide.",
    tagline: "Worldwide physical delivery powered by global logistics networks.",
    badge: "Most Popular",
    badgeColor: "#FF6B2C"
  },
  {
    id: "digital",
    icon: "💳",
    label: "Digital Gift Cards",
    title: "Convenient rewards that can be redeemed instantly",
    desc: "Provide instant utility. Recipient gets a balance to redeem at their choice of over 2,000 brand eCards globally (including Amazon, Visa, Starbucks, Uber, and local leaders).",
    tagline: "Zero delay, zero delivery fees, infinite possibilities.",
    badge: "Instant Delivery",
    badgeColor: "#3B82F6"
  },
  {
    id: "experiences",
    icon: "🌟",
    label: "Reward Experiences",
    title: "Flexible options that allow employees to choose what matters most",
    desc: "Go beyond standard rewards. Let them choose unforgettable activities, classes, dining experiences, or subscriptions that match their personal style and hobbies.",
    tagline: "Memories that last far beyond the working day.",
    badge: "Unique Experience",
    badgeColor: "#8B5CF6"
  },
  {
    id: "recognition",
    icon: "🏆",
    label: "Recognition-First Celebrations",
    title: "Combine rewards with personal messages, photos, and appreciation",
    desc: "Make it emotional. The gift is attached directly to a group appreciation card packed with photos, videos, and congratulatory notes signed by the whole team.",
    tagline: "Because a reward is twice as sweet when paired with heartfelt praise.",
    badge: "Appreciation Plus",
    badgeColor: "#10B981"
  }
];

const environments = [
  {
    id: "office",
    icon: "🏢",
    label: "In-office",
    title: "Celebrate together at the desk",
    desc: "Display group cards on the big screen during team meetings, drop premium physical gifts directly at their desk, and enjoy sharing moments together in-person.",
    highlight: "Great for office cohesion"
  },
  {
    id: "remote",
    icon: "🏠",
    label: "Remote",
    title: "Bridge distances seamlessly",
    desc: "Send cards instantly via Notion or email. Enable home-delivery for physical packages with custom-printed greeting inserts.",
    highlight: "100% borderless delivery"
  },
  {
    id: "hybrid",
    icon: "🔄",
    label: "Hybrid",
    title: "The best of both worlds",
    desc: "Open card signatures online, run hybrid video calls for live reveals, and give options for digital vouchers or physical office handovers.",
    highlight: "Flexible team alignments"
  },
  {
    id: "distributed",
    icon: "🌍",
    label: "Distributed Teams",
    title: "Truly global celebrations",
    desc: "Handle automated local tax adjustments, global customs clearance, localized brand catalog selections, and multiple currency options.",
    highlight: "150+ countries supported"
  }
];

const giftingFaq = [
  {
    q: "How do employees receive their gifts?",
    a: "When a board is completed, the recipient receives a secure link via email. They can view their group card and select their preferred gift from our curated business catalog."
  },
  {
    q: "Do you handle international shipping and taxes?",
    a: "Yes! We support fulfillment in over 150 countries. We handle all global customs, local duties, shipping logistics, and tax calculations automatically."
  },
  {
    q: "Can employees choose their own gifts?",
    a: "Absolutely. We offer choice-based gifting where you set a budget (e.g., $50) and employees choose from a collection of premium physical products or digital gift cards matching that tier."
  },
  {
    q: "What types of gift cards are available?",
    a: "We offer over 2,000 top brand electronic cards globally, including Amazon, Visa, Starbucks, Uber, and local retail giants in each country."
  },
  {
    q: "Can we brand the gifting experience?",
    a: "Yes, you can customize the email invitation, redemption page, eCards, and packaging inserts with your logo, corporate colors, and custom brand messages."
  }
];

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  return (
    <span className="gf-highlight gf-typing">
      {words[index].substring(0, subIndex)}
      <span className="gf-cursor">|</span>
    </span>
  );
}

export default function Gifting() {
  const featuresRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeChoiceIndex, setActiveChoiceIndex] = useState(0);
  const [activeEnvIndex, setActiveEnvIndex] = useState(1); // Default to remote

  // Auto transition timeline steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!featuresRef.current) return;
    const cards = featuresRef.current.getElementsByClassName('gf-glass-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  // Render a dynamic preview graphic based on the active stepper index
  const renderStepPreview = (stepIdx) => {
    switch (stepIdx) {
      case 0:
        return (
          <div className="gf-step-preview-box step-0-preview">
            <div className="gf-preview-board-mockup">
              <div className="mockup-nav">
                <span className="dots"><span className="r"></span><span className="y"></span><span className="g"></span></span>
                <span className="title">New Board Creator</span>
              </div>
              <div className="mockup-content">
                <label>Who is this board for?</label>
                <div className="input-field">Sarah Jenkins</div>
                <label>Choose Occasion</label>
                <div className="occasion-options">
                  <span className="opt active">🎂 Birthday</span>
                  <span className="opt">🏖 Farewell</span>
                  <span className="opt">🎉 Promotion</span>
                </div>
                <button className="create-btn">Create Board & Invite Team</button>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="gf-step-preview-box step-1-preview">
            <div className="gf-preview-signatures">
              <div className="sig-card card-1">
                <div className="sig-header"><span>👋 Alex R.</span></div>
                <p>Happy anniversary, Sarah! You make work so much fun!</p>
              </div>
              <div className="sig-card card-2">
                <div className="sig-header"><span>🎉 Michelle W.</span></div>
                <p>Thanks for being a fantastic mentor! Wishing you all the best.</p>
              </div>
              <div className="sig-card card-3">
                <div className="sig-header"><span>📸 David L.</span></div>
                <div className="photo-placeholder">📸 Group Photo.jpg</div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="gf-step-preview-box step-2-preview">
            <div className="gf-preview-gift-selection">
              <h4>Choose Reward Type</h4>
              <div className="gift-grid-mini">
                <div className="gift-item active">
                  <span className="emoji">🎁</span>
                  <span>Physical Gift</span>
                </div>
                <div className="gift-item">
                  <span className="emoji">💳</span>
                  <span>Gift Card</span>
                </div>
                <div className="gift-item">
                  <span className="emoji">🌟</span>
                  <span>Experience</span>
                </div>
              </div>
              <div className="budget-slider">
                <span>Budget: <strong>$50 USD</strong></span>
                <div className="slider-bar"><div className="fill"></div></div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="gf-step-preview-box step-3-preview">
            <div className="gf-preview-delivery">
              <div className="envelope-box">
                <span className="mail-icon">✉️</span>
                <div className="glowing-pulse"></div>
              </div>
              <h4>Complete Experience Sent!</h4>
              <p>Delivered via email & Notion</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="gifting-page">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="gf-hero gf-hero--minimalist">
        <div className="gf-hero-overlay"></div>
        <div className="gf-container">
          <div className="gf-hero__content">
            <h1 className="gf-hero__title">
              Corporate gifts with a <br/>
              <Typewriter words={TYPING_WORDS} />
            </h1>
            <p className="gf-hero__subtitle">
              Corporate gifting made simple — global fulfillment, 250,000+ business gift options, paired perfectly with personalized employee recognition.
            </p>
            <div className="gf-hero__actions">
              <a href="https://workkudo.ai/signin" className="gf-btn gf-btn--primary">Get Started Today</a>
            </div>
          </div>
          
          <div className="gf-hero__visual">
             <div className="gf-canvas-wrapper">
               <WorkkudoCard />
             </div>
          </div>
        </div>
      </section>

      {/* ── Section 1: How Gifting Works (Redesigned Side-by-Side) ── */}
      <section className="gf-how-it-works">
        <div className="gf-container">
          <div className="gf-section-header">
            <h2>Recognition and Gifting in One Experience</h2>
            <p>Make every workplace celebration more meaningful by combining recognition, appreciation, and rewards in a single experience.</p>
          </div>

          <div className="gf-interactive-stepper">
            <div className="gf-stepper-left">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div
                    key={step.number}
                    className={`gf-stepper-row ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveStep(idx)}
                    style={{ '--step-theme': step.color }}
                  >
                    <div className="gf-stepper-num-col">
                      <span className="num-badge">{step.number}</span>
                      {idx < steps.length - 1 && <span className="stepper-line"></span>}
                    </div>
                    <div className="gf-stepper-content-col">
                      <h4>
                        <span className="step-icon-inline">{step.icon}</span>
                        {step.title}
                      </h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="gf-stepper-right">
              <div className="gf-dynamic-preview-panel">

                {renderStepPreview(activeStep)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Recognition + Gifting ── */}
      <section className="gf-features" onMouseMove={handleMouseMove}>
        <div className="gf-container">
          <div className="gf-section-header">
            <h2>More Than a Gift. A Moment They’ll Remember.</h2>
            <p>A gift is meaningful. Recognition makes it memorable.</p>
          </div>
          
          <div className="gf-grid" ref={featuresRef}>
            {features.map((feat, idx) => (
              <div key={idx} className="gf-glass-card">
                <div className="gf-glass-card-spotlight"></div>
                <div className="gf-glass-card-image">
                  <img src={feat.image} alt={feat.title} />
                </div>
                <div className="gf-glass-card__content">
                  <div className="gf-glass-card-emoji-header">
                    <span className="gf-glass-card-emoji">{feat.icon}</span>
                    <h3>{feat.title}</h3>
                  </div>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Employee Choice ── */}
      <section className="gf-employee-choice">
        <div className="gf-container">
          <div className="gf-section-header">
            <h2>Give Thoughtfully, Let Employees Choose</h2>
            <p>Every employee is different. Provide flexible reward options that fit their preferences.</p>
          </div>

          <div className="gf-choice-showcase">
            <div className="gf-choice-tabs">
              {choiceTabs.map((tab, idx) => {
                const isActive = idx === activeChoiceIndex;
                return (
                  <button
                    key={tab.id}
                    className={`gf-choice-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveChoiceIndex(idx)}
                  >
                    <span className="gf-choice-tab-icon">{tab.icon}</span>
                    <span className="gf-choice-tab-label">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="gf-choice-display">
              <div className="gf-choice-info">
                <span 
                  className="gf-choice-badge" 
                  style={{ backgroundColor: `${choiceTabs[activeChoiceIndex].badgeColor}15`, color: choiceTabs[activeChoiceIndex].badgeColor, borderColor: choiceTabs[activeChoiceIndex].badgeColor }}
                >
                  {choiceTabs[activeChoiceIndex].badge}
                </span>
                <h3>{choiceTabs[activeChoiceIndex].title}</h3>
                <p className="gf-choice-desc">{choiceTabs[activeChoiceIndex].desc}</p>
                <p className="gf-choice-tagline">
                  <span className="gf-check-icon">✓</span> {choiceTabs[activeChoiceIndex].tagline}
                </p>
              </div>

              <div className="gf-choice-preview">
                {/* Dynamic visually rich preview mockup */}
                <div className="gf-mockup-card">
                  <div className="gf-mockup-header">
                    <span className="gf-mockup-logo">WorkKudo Gift Choice</span>
                    <span className="gf-mockup-status">Redeemable</span>
                  </div>
                  <div className="gf-mockup-body">
                    <div className="gf-mockup-illustration">
                      <span className="gf-mockup-emoji">{choiceTabs[activeChoiceIndex].icon}</span>
                    </div>
                    <h4>{choiceTabs[activeChoiceIndex].label}</h4>
                    <p>Select from curated global options.</p>
                  </div>
                  <div className="gf-mockup-footer">
                    <button className="gf-mockup-btn">Claim Reward</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Built for Modern Teams ── */}
      <section className="gf-modern-teams">
        <div className="gf-container">
          <div className="gf-section-header">
            <h2>Support Teams Wherever They Work</h2>
            <p>WorkKudo helps organizations celebrate employees consistently regardless of where work happens.</p>
          </div>

          <div className="gf-teams-layout">
            <div className="gf-teams-cards">
              {environments.map((env, idx) => {
                const isActive = idx === activeEnvIndex;
                return (
                  <div
                    key={env.id}
                    className={`gf-env-card ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveEnvIndex(idx)}
                  >
                    <div className="gf-env-card-header">
                      <span className="gf-env-icon">{env.icon}</span>
                      <h4>{env.label}</h4>
                    </div>
                    <p>{env.desc}</p>
                    <span className="gf-env-highlight">{env.highlight}</span>
                  </div>
                );
              })}
            </div>

            <div className="gf-teams-visualization">
              <div className="gf-visualization-box">
                <span className="gf-vis-emoji">{environments[activeEnvIndex].icon}</span>
                <h3>{environments[activeEnvIndex].title}</h3>
                <p>{environments[activeEnvIndex].desc}</p>
                <div className="gf-vis-indicator">
                  <span className="gf-vis-ping"></span>
                  Active Setup: {environments[activeEnvIndex].label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <FAQ 
        title="Gifting FAQs" 
        subtitle="Everything you need to know about corporate gifting." 
        data={giftingFaq}
      />

      <Footer />
    </div>
  );
}
