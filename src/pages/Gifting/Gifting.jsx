import React, { useRef, useState, useEffect } from 'react';
import './Gifting.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FAQ from '../../components/FAQ/FAQ';
import WorkkudoCard from '../../components/WorkkudoCard/WorkkudoCard';
import physicalGiftsImg from '../../assets/physical_gifts.png';
import giftCardsImg from '../../assets/gift_cards.png';
import momentsImg from '../../assets/moments.png';
import heroBgImg from '../../assets/minimalist_hero_bg.png';

const TYPING_WORDS = ['personal touch.', 'lasting impact.', 'digital twist.'];

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

  return (
    <div className="gifting-page">
      <Navbar />

      {/* ── Hero Section ── */}
      <section 
        className="gf-hero gf-hero--minimalist"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        {/* Dark overlay for text readability */}
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
              <button className="gf-btn gf-btn--primary">Get Started Today</button>
              <button className="gf-btn gf-btn--secondary">Browse Gift Catalog</button>
            </div>
          </div>
          
          <div className="gf-hero__visual">
             <div className="gf-canvas-wrapper">
               <WorkkudoCard />
             </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="gf-features" onMouseMove={handleMouseMove}>
        <div className="gf-container">
          <div className="gf-section-header">
            <h2>Gifting that brings recognition to life</h2>
            <p>Turn corporate gifts into meaningful moments for employees — pair any WorkKudo board with gifts or digital rewards to elevate impact.</p>
          </div>
          
          <div className="gf-grid" ref={featuresRef}>
            
            <div className="gf-glass-card">
              <div className="gf-glass-card__image">
                <img src={physicalGiftsImg} alt="Physical gifts delivered" />
              </div>
              <h3>Physical gifts delivered</h3>
              <p>Powered by Snappy, employees can choose from 250,000+ gifts from top brands, delivered straight to their door with global fulfillment.</p>
            </div>

            <div className="gf-glass-card">
              <div className="gf-glass-card__image">
                <img src={giftCardsImg} alt="Instant digital gift cards" />
              </div>
              <h3>Gift cards instant</h3>
              <p>Digital gifting, simplified. Employees choose from 2,000+ electronic gift card options with instant delivery worldwide.</p>
              <div className="gf-tag-list">
                <span>Visa</span>
                <span>Amazon</span>
                <span>Best Buy</span>
              </div>
            </div>

            <div className="gf-glass-card">
              <div className="gf-glass-card__image">
                <img src={momentsImg} alt="Personalized corporate moments" />
              </div>
              <h3>Personalized moments felt</h3>
              <p>Every gift is powered by WorkKudo — from 1-to-1 eCards to group boards with personal messages, images, and videos.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Use Cases Section (Bento Grid) ── */}
      <section className="gf-use-cases">
        <div className="gf-container">
           <div className="gf-use-cases__header">
             <h2>Corporate Gifting Employees Love</h2>
             <p className="gf-use-cases__subtitle">Gifting for all meaningful moments</p>
             <p className="gf-use-cases__desc">
               Corporate gifting supports employees through the moments that define their experience. WorkKudo makes it simple to match each occasion with the right gift and meaningful message.
             </p>
           </div>

           <div className="gf-bento-grid">
             {/* Large Card */}
             <div className="gf-bento-card gf-bento-large">
               <div className="gf-bento-content">
                 <h3>Onboarding & Welcomes</h3>
                 <p>Welcome new hires with a business gift and messages from their team, setting the tone for employee engagement from day one. From cookies to candles, artwork, and electronics, WorkKudo has plenty of gifts to shop for.</p>
                 <button className="gf-link-btn">Explore Onboarding <span>→</span></button>
               </div>
               <div className="gf-bento-bg bento-pulse"></div>
             </div>

             {/* Medium Card 1 */}
             <div className="gf-bento-card">
               <div className="gf-bento-content">
                 <h3>Birthdays & Milestones</h3>
                 <p>Never miss a work anniversary or birthday. Automate group cards attached to premium digital rewards.</p>
               </div>
             </div>

             {/* Medium Card 2 */}
             <div className="gf-bento-card">
               <div className="gf-bento-content">
                 <h3>Holidays & Appreciation</h3>
                 <p>Scale your end-of-year gifting effortlessly. Send custom seasonal cards loaded with choice-based gift links.</p>
               </div>
             </div>

             {/* Wide Bottom Card */}
             <div className="gf-bento-card gf-bento-wide">
               <div className="gf-bento-content">
                 <div className="gf-bento-wide-inner">
                   <div className="gf-bento-col">
                     <h3>Life Events & Support</h3>
                     <p>Offer comfort and congratulations during major life events with a unified team message and thoughtful care packages.</p>
                   </div>
                   <div className="gf-bento-col">
                     <h3>Contests, Spiffs & Spot Bonuses</h3>
                     <p>Drive performance by rewarding top achievers instantly with digital currency they can spend anywhere.</p>
                   </div>
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
      />

      <Footer />
    </div>
  );
}
