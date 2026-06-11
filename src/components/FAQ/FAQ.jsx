import { useState, useEffect } from 'react'
import './FAQ.css'

const FAQ_DATA = [
  {
    q: "What occasions can I create a board for?",
    a: "Birthdays, work anniversaries, farewells, promotions, project launches, new-hire welcomes, retirements, graduations — anything worth celebrating. If your team has a milestone, there's a board for it."
  },
  {
    q: "Do my teammates need to sign up?",
    a: "No. Share an invite link or email contributors directly. They can add messages, GIFs, photos and reactions without creating an account — great for external collaborators too."
  },
  {
    q: "How much does it cost?",
    a: "Just $5 per board, one-time. No subscription, no seat fees. The board creator pays once — all contributors add their posts for free."
  },
  {
    q: "Can I download or print the board?",
    a: "Yes. Export any board as a high-resolution PNG image or a PDF with one click — perfect for printing, framing, or sending by email."
  },
  {
    q: "Is it good for remote or distributed teams?",
    a: "Built exactly for that. Anyone with the invite link can contribute from any device, anywhere in the world. No timezone coordination needed."
  },
  {
    q: "Can contributors add photos, GIFs or voice messages?",
    a: "Yes — text, emoji, uploaded images, GIFs from Giphy, short video clips (up to 1 min) and voice messages. Every post has personality."
  },
  {
    q: "What happens after the event date?",
    a: "The board is locked to new posts once the event date passes, so the board is preserved exactly as it was on the day. You can still view, share and download it anytime."
  },
  {
    q: "How long are boards kept?",
    a: "Boards stay on your dashboard indefinitely. If you archive a board, all data is retained for 90 days and can be restored at any time."
  },
  {
    q: "How does WorkKudo help build community?",
    a: "WorkKudo fosters community by creating shared experiences, such as welcome boards for new hires and milestone celebrations, making every employee feel genuinely connected across departments."
  },
  {
    q: "Do you offer an Enterprise plan?",
    a: "Yes. Our Enterprise plan offers dedicated support, customized onboarding, and advanced controls designed for large organizations."
  },
  {
    q: "Can we restrict signing to internal employees only?",
    a: "Yes. With enterprise permissions, you can lock board access to verified corporate email domains so only your internal employees can view and contribute."
  }
];

function TypingAnswer({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let current = "";
    setDisplayedText("");
    
    const interval = setInterval(() => {
      if (index < text.length) {
        current += text.charAt(index);
        setDisplayedText(current);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 8); // Fast typing speed

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="faq-typing-text">
      {displayedText}
      <span className="faq-cursor"></span>
    </p>
  );
}

function PersonSVG() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" fill="none" className="faq-person-avatar" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="var(--orange-50)" stroke="var(--orange-border)" strokeWidth="1.5" />
      {/* Hair back */}
      <circle cx="32" cy="25" r="14" fill="#5C3E35" />
      {/* Neck */}
      <rect x="29" y="36" width="6" height="8" fill="#FDBA74" />
      {/* Shoulders / Shirt */}
      <path d="M16 54c0-5 6-9 16-9s16 4 16 9" fill="var(--navy-light)" />
      {/* Collar */}
      <path d="M28 45l4 4 4-4" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
      {/* Face */}
      <circle cx="32" cy="27" r="11" fill="#FDBA74" />
      {/* Hair front */}
      <path d="M20 24c0-7 5-11 12-11s12 4 12 11c0 2-2 3-3 2s-3-2-5-2-4 1-4 1-1-1-3-1-3 1-5 1-4-1-4-2z" fill="#5C3E35" />
      {/* Eyes */}
      <circle cx="28" cy="26" r="1.5" fill="var(--navy-dark)" />
      <circle cx="36" cy="26" r="1.5" fill="var(--navy-dark)" />
      {/* Cheeks */}
      <circle cx="26" cy="29" r="2" fill="#F87171" opacity="0.4" />
      <circle cx="38" cy="29" r="2" fill="#F87171" opacity="0.4" />
      {/* Smile */}
      <path d="M29 31a3 3 0 006 0" stroke="var(--navy-dark)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function FAQ({
  data = FAQ_DATA,
  title = "Frequently Asked Questions",
  subtitle = "Got questions about WorkKudo? We've got answers."
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        <div className="faq-grid">
          
          {/* Left Column: Header & Interactive Graphic */}
          <div className="faq-visual">
            <header className="faq-header">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </header>
            
            {/* Interactive sticker card area */}
            <div className="faq-sticker-box">
              <div className="faq-sticker">
                <svg width="72" height="72" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="10" width="52" height="44" rx="8" fill="#FFFFFF" stroke="var(--navy)" strokeWidth="3" />
                  <path d="M14 20H36M14 28H48M14 36H30" stroke="var(--navy-light)" strokeWidth="3" strokeLinecap="round" />
                  {/* Decorative stamp/heart */}
                  <rect x="42" y="14" width="8" height="10" rx="2" fill="var(--orange-50)" stroke="var(--orange)" strokeWidth="1.5" />
                  <path d="M46 17c0 0-.5-.6-1-.6s-.8.3-.8.6c0 .4.8 1.2.8 1.2s.8-.8.8-1.2c0-.3-.3-.6-.8-.6z" fill="var(--orange)" />
                  {/* Floating badge */}
                  <circle cx="48" cy="46" r="10" fill="var(--orange)" />
                  <path d="M45 46H51M48 43V49" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Floating Emojis acting as stickers */}
              <span className="faq-bubble faq-bubble--1">👋</span>
              <span className="faq-bubble faq-bubble--2">🎉</span>
              <span className="faq-bubble faq-bubble--3">✨</span>
              <span className="faq-bubble faq-bubble--4">💖</span>
            </div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="faq-list">
            {data.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`faq-card ${isActive ? 'faq-card--active' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <button
                    className="faq-trigger"
                    aria-expanded={isActive}
                  >
                    <span>{item.q}</span>
                    <span className="faq-chevron">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    className="faq-content-wrapper"
                    style={{ maxHeight: isActive ? '280px' : '0px' }}
                  >
                    <div className="faq-content">
                      {isActive && (
                        <div className="faq-chat-bubble">
                          <PersonSVG />
                          <div className="faq-chat-text">
                            <TypingAnswer text={item.a} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
