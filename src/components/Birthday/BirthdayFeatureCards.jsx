import { useState } from "react";
import "./BirthdayFeatureCards.css";

const cards = [
  {
    step: 1,
    label: "Choose Theme",
    tag: "Design",
    desc: "Choose from dozens of premium layouts, colors, and birthday templates.",
    accent: "#ff7675",
    bg: "linear-gradient(145deg, #ffebee, #ffcdd2)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#ffebee" opacity="0.4"/>
        <rect width="148" height="42" fill="#ff7675"/>
        <text x="74" y="26" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">BIRTHDAY THEMES</text>
        
        {/* Cake Stand */}
        <path d="M 44,175 L 104,175 L 94,162 L 54,162 Z" fill="#b2bec3" />
        
        {/* Layer 1 (Bottom) */}
        <rect x="34" y="122" width="80" height="40" rx="4" fill="#ff7675" />
        <rect x="34" y="122" width="80" height="8" fill="#ff8a80" />
        
        {/* Layer 2 (Middle) */}
        <rect x="44" y="88" width="60" height="34" rx="4" fill="#fd79a8" />
        <rect x="44" y="88" width="60" height="6" fill="#ff80ab" />

        {/* Candles on top */}
        {/* Candle 1 */}
        <rect x="56" y="68" width="4" height="20" fill="#74b9ff" />
        <path d="M 58,68 C 56,63 60,58 58,53 C 58,58 62,63 60,68 Z" fill="#ffa100" className="birthday-candle-flame" />
        
        {/* Candle 2 */}
        <rect x="72" y="68" width="4" height="20" fill="#a29bfe" />
        <path d="M 74,68 C 72,63 76,58 74,53 C 74,58 78,63 76,68 Z" fill="#ffa100" className="birthday-candle-flame-delay" />

        {/* Candle 3 */}
        <rect x="88" y="68" width="4" height="20" fill="#55efc4" />
        <path d="M 90,68 C 88,63 92,58 90,53 C 90,58 94,63 92,68 Z" fill="#ffa100" className="birthday-candle-flame" />

        {/* Decorative sparkles */}
        <circle cx="25" cy="80" r="2" fill="#fdcb6e" />
        <circle cx="125" cy="95" r="1.5" fill="#fdcb6e" />
        <circle cx="115" cy="70" r="2.5" fill="#ff7675" />
        <circle cx="30" cy="130" r="1.5" fill="#74b9ff" />
      </svg>
    ),
  },
  {
    step: 2,
    label: "Gather Wishes",
    tag: "Invite",
    desc: "Collect messages, images, GIFs, and birthday greetings from the team.",
    accent: "#fdcb6e",
    bg: "linear-gradient(145deg, #fffde7, #fff9c4)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#fffde7" opacity="0.4"/>
        <rect width="148" height="42" fill="#fdcb6e"/>
        <text x="74" y="26" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">COLLECT WISHES</text>

        {/* Balloon 1 (Red) */}
        <path d="M 50,105 Q 46,135 60,175" stroke="#b2bec3" strokeWidth="1" fill="none" />
        <g className="fc-svg-balloon-1">
          <ellipse cx="50" cy="80" rx="16" ry="22" fill="#ff7675" />
          <polygon points="47,102 53,102 50,98" fill="#ff7675" />
          {/* Highlight shine */}
          <ellipse cx="44" cy="72" rx="4" ry="6" fill="white" opacity="0.3" transform="rotate(-15 44 72)" />
        </g>

        {/* Balloon 2 (Purple) */}
        <path d="M 98,110 Q 104,140 88,175" stroke="#b2bec3" strokeWidth="1" fill="none" />
        <g className="fc-svg-balloon-2">
          <ellipse cx="98" cy="85" rx="15" ry="20" fill="#7c3aed" />
          <polygon points="95,105 101,105 98,101" fill="#7c3aed" />
          {/* Highlight shine */}
          <ellipse cx="92" cy="77" rx="3.5" ry="5.5" fill="white" opacity="0.3" transform="rotate(-15 92 77)" />
        </g>

        {/* Balloon 3 (Yellow) */}
        <path d="M 74,120 Q 70,145 74,180" stroke="#b2bec3" strokeWidth="1" fill="none" />
        <g className="fc-svg-balloon-3">
          <ellipse cx="74" cy="95" rx="14" ry="18" fill="#fdcb6e" />
          <polygon points="71,113 77,113 74,109" fill="#fdcb6e" />
          {/* Highlight shine */}
          <ellipse cx="69" cy="88" rx="3" ry="5" fill="white" opacity="0.3" transform="rotate(-15 69 88)" />
        </g>

        {/* Confetti dots */}
        <circle cx="28" cy="140" r="1.5" fill="#7c3aed" />
        <circle cx="120" cy="130" r="2" fill="#ff7675" />
        <circle cx="110" cy="160" r="1.5" fill="#fdcb6e" />
      </svg>
    ),
  },
  {
    step: 3,
    label: "Deliver Book",
    tag: "Keepsake",
    desc: "A premium printed birthday book shipped directly to their doorstep.",
    accent: "#00b894",
    bg: "linear-gradient(145deg, #e8f5e9, #c8e6c9)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#e8f5e9" opacity="0.4"/>
        <rect width="148" height="42" fill="#00b894"/>
        <text x="74" y="26" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">DELIVER THE BOOK</text>

        {/* Gift Box Base */}
        <rect x="34" y="94" width="80" height="66" rx="3" fill="#81c784" />
        {/* Ribbon Stripes */}
        <rect x="71" y="94" width="6" height="66" fill="#ff7675" />
        <rect x="34" y="124" width="80" height="6" fill="#ff7675" />

        {/* Bow (Left loop, Right loop, Center knot) */}
        <g className="fc-svg-gift-bow">
          <path d="M 74,86 C 58,70 52,86 74,86 Z" fill="#ff7675" />
          <path d="M 74,86 C 90,70 96,86 74,86 Z" fill="#ff7675" />
          <circle cx="74" cy="86" r="4.5" fill="#d63031" />
        </g>

        {/* Gift Lid (slides up on hover) */}
        <g className="fc-svg-gift-lid">
          <rect x="30" y="84" width="88" height="12" rx="2" fill="#a5d6a7" />
          <rect x="71" y="84" width="6" height="12" fill="#ff7675" />
        </g>

        {/* Sparkle stars */}
        <path d="M22,70 L24,74 L28,74 L25,76 L26,80 L22,78 L18,80 L19,76 L16,74 L20,74 Z" fill="#fdcb6e" />
        <path d="M124,78 L125,81 L128,81 L126,83 L127,86 L124,84 L121,86 L122,83 L120,81 L123,81 Z" fill="#00b894" />
      </svg>
    ),
  },
  {
    step: 4,
    label: "Confetti Reveal",
    tag: "Surprise",
    desc: "Unlock an explosion of confetti, music, and virtual cards.",
    accent: "#6c5ce7",
    bg: "linear-gradient(145deg, #f3e5f5, #e1bee7)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#f3e5f5" opacity="0.4"/>
        <rect width="148" height="42" fill="#6c5ce7"/>
        <text x="74" y="26" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">SURPRISE REVEAL</text>

        {/* Popper Horn Body */}
        <g className="fc-svg-horn">
          <path d="M 20,180 L 30,190 L 74,138 L 64,128 Z" fill="#a29bfe" />
          <path d="M 18,177 L 24,183 L 42,165 L 36,159 Z" fill="#fdcb6e" />
        </g>

        {/* Confetti streams */}
        <path d="M 69,130 Q 90,100 115,85" stroke="#ff7675" strokeWidth="1.5" fill="none" className="fc-svg-streamer-1" />
        <path d="M 69,130 Q 100,120 125,115" stroke="#55efc4" strokeWidth="1.5" fill="none" className="fc-svg-streamer-2" />

        {/* Small floating items */}
        <circle cx="85" cy="95" r="3" fill="#ff7675" className="fc-svg-dot-1" />
        <circle cx="100" cy="130" r="2" fill="#74b9ff" className="fc-svg-dot-2" />
        <polygon points="104,60 106,65 111,65 107,69 109,74 104,71 99,74 101,69 97,65 102,65" fill="#fdcb6e" className="fc-svg-star-1" />

        {/* Emojis bursting */}
        <text x="116" y="70" fontSize="11" className="fc-svg-emoji-1">🎉</text>
        <text x="110" y="110" fontSize="11" className="fc-svg-emoji-2">🎂</text>
      </svg>
    ),
  },
];

const getPathD = (hoveredIdx) => {
  const yBase = 374;
  const y0 = hoveredIdx === 0 ? yBase - 10 : yBase;
  const y1 = hoveredIdx === 1 ? yBase - 10 : yBase;
  const y2 = hoveredIdx === 2 ? yBase - 10 : yBase;
  const y3 = hoveredIdx === 3 ? yBase - 10 : yBase;

  const dip = yBase + 8;

  return `M 0,${yBase} ` +
         `C 58.75,${yBase} 58.75,${y0} 117.5,${y0} ` +
         `C 176.25,${y0} 200,${dip} 259,${dip} ` +
         `C 318,${dip} 341.75,${y1} 400.5,${y1} ` +
         `C 459.25,${y1} 483,${dip} 542,${dip} ` +
         `C 601,${dip} 624.75,${y2} 683.5,${y2} ` +
         `C 742.25,${y2} 766,${dip} 825,${dip} ` +
         `C 884,${dip} 907.75,${y3} 966.5,${y3} ` +
         `C 1025.25,${y3} 1025.25,${yBase} 1084,${yBase}`;
};

const getCircleCoords = (hoveredIdx) => {
  const yBase = 374;
  if (hoveredIdx === null) {
    return { cx: 0, cy: yBase, opacity: 0 };
  }
  const xCoords = [117.5, 400.5, 683.5, 966.5];
  const yCoords = [
    hoveredIdx === 0 ? yBase - 10 : yBase,
    hoveredIdx === 1 ? yBase - 10 : yBase,
    hoveredIdx === 2 ? yBase - 10 : yBase,
    hoveredIdx === 3 ? yBase - 10 : yBase
  ];
  return {
    cx: xCoords[hoveredIdx],
    cy: yCoords[hoveredIdx],
    opacity: 1
  };
};

export default function BirthdayFeatureCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-white) 50%, var(--bg) 100%)",
      fontFamily: "var(--font-sans)",
      padding: "100px 20px 80px",
    }}>
      <h2 style={{
        fontSize: "clamp(2.25rem, 4.5vw, 3rem)",
        fontWeight: "800",
        color: "var(--navy-dark)",
        marginBottom: "18px",
        letterSpacing: "-0.03em",
        textAlign: "center",
        fontFamily: "var(--font-sans)",
      }}>
        How it works
      </h2>
      <p style={{
        fontSize: "1.15rem",
        color: "var(--text-light)",
        marginBottom: "48px",
        textAlign: "center",
        lineHeight: "1.68",
        maxWidth: "580px",
        fontFamily: "var(--font-sans)",
      }}>
        Four simple steps to create a memorable group card
      </p>

      <div
        className="fc-card-deck"
        style={{
          position: "relative",
          display: "flex",
          gap: "48px",
          perspective: "1000px",
          transformStyle: "preserve-3d",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Wavy curved line connecting the step indicators */}
        <svg
          className="fc-connector-svg"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "1084px",
            height: "410px",
            overflow: "visible",
            pointerEvents: "none",
            zIndex: 0,
          }}
          viewBox="0 0 1084 410"
        >
          <defs>
            <linearGradient id="connector-grad-b" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7675" />
              <stop offset="33%" stopColor="#fdcb6e" />
              <stop offset="66%" stopColor="#00b894" />
              <stop offset="100%" stopColor="#6c5ce7" />
            </linearGradient>
          </defs>
          
          {/* Background drop shadow curve */}
          <path
            d={getPathD(hovered)}
            fill="none"
            stroke="rgba(26, 43, 74, 0.05)"
            strokeWidth="5"
            style={{
              transition: "d 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          />

          {/* Main gradient dashed curved line */}
          <path
            d={getPathD(hovered)}
            fill="none"
            stroke="url(#connector-grad-b)"
            strokeWidth="3"
            strokeDasharray="6 5"
            opacity={hovered !== null ? 1 : 0.6}
            style={{
              transition: "opacity 0.4s ease, d 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          />

          {/* Glowing dynamic traveling dot */}
          <circle
            cx={getCircleCoords(hovered).cx}
            cy={getCircleCoords(hovered).cy}
            r="7"
            fill={hovered !== null ? cards[hovered].accent : "transparent"}
            style={{
              transition: "cx 0.45s cubic-bezier(0.23, 1, 0.32, 1), cy 0.45s cubic-bezier(0.23, 1, 0.32, 1), fill 0.4s ease, opacity 0.3s ease",
              opacity: hovered !== null ? 1 : 0,
              filter: `drop-shadow(0 0 8px ${hovered !== null ? cards[hovered].accent : "transparent"})`,
            }}
          />

          {/* Pulsing sonar rings */}
          {hovered !== null && (
            <>
              <circle
                cx={getCircleCoords(hovered).cx}
                cy={getCircleCoords(hovered).cy}
                r="7"
                fill="none"
                stroke={cards[hovered].accent}
                strokeWidth="2"
                className="fc-sonar-ring"
                style={{
                  pointerEvents: "none",
                  transition: "cx 0.45s cubic-bezier(0.23, 1, 0.32, 1), cy 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              />
              <circle
                cx={getCircleCoords(hovered).cx}
                cy={getCircleCoords(hovered).cy}
                r="7"
                fill="none"
                stroke={cards[hovered].accent}
                strokeWidth="2"
                className="fc-sonar-ring-delay"
                style={{
                  pointerEvents: "none",
                  transition: "cx 0.45s cubic-bezier(0.23, 1, 0.32, 1), cy 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              />
            </>
          )}
        </svg>

        {cards.map((card, i) => {
          let tilt = "rotateY(0deg) scale(1) translateZ(0px)";
          let opacity = 1;
          if (hovered !== null) {
            if (i < hovered) {
              tilt = "rotateY(20deg) scale(0.92) translateZ(-40px)";
              opacity = 0.45;
            } else if (i > hovered) {
              tilt = "rotateY(-20deg) scale(0.92) translateZ(-40px)";
              opacity = 0.45;
            } else {
              tilt = "rotateY(0deg) scale(1.2) translateZ(40px)";
              opacity = 1;
            }
          }

          return (
            <div
              key={i}
              className="fc-card-wrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  width: "235px",
                  height: "335px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transform: tilt,
                  opacity: opacity,
                  transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s ease, opacity 0.45s ease",
                  boxShadow: hovered === i
                    ? "0 28px 56px rgba(0,0,0,0.35)"
                    : "0 4px 16px rgba(0,0,0,0.12)",
                  zIndex: hovered === i ? 10 : 1,
                  transformStyle: "preserve-3d",
                  flexShrink: 0,
                }}
              >
                {/* SVG illustration fills entire card */}
                <div style={{ width: "100%", height: "100%", background: card.bg }}>
                  {card.svg}
                </div>

                {/* Subtle dark dimming overlay on hover */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10, 5, 20, 0.16)",
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity 0.45s ease",
                  pointerEvents: "none",
                }}/>

                {/* slide-up content on hover */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                  display: "flex",
                  padding: "24px 16px 20px",
                  alignItems: "flex-end",
                  boxSizing: "border-box",
                  background: hovered === i 
                    ? "linear-gradient(to top, rgba(10, 5, 15, 0.98) 0%, rgba(10, 5, 15, 0.75) 60%, transparent 100%)" 
                    : "transparent",
                  transition: "background 0.5s ease",
                  pointerEvents: "none",
                }}>
                  <div style={{ width: "100%" }}>
                    <h2 style={{
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "800",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      marginBottom: "6px",
                      fontFamily: "var(--font-sans)",
                      textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                      transform: hovered === i ? "translateY(0)" : "translateY(160px)",
                      transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1)",
                      transitionDelay: hovered === i ? "0.15s" : "0s",
                    }}>
                      {card.label}
                    </h2>
                    <p style={{
                      color: "rgba(255,255,255,0.92)",
                      fontSize: "11.5px",
                      lineHeight: "1.55",
                      fontFamily: "var(--font-sans)",
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                      transform: hovered === i ? "translateY(0)" : "translateY(160px)",
                      transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1)",
                      transitionDelay: hovered === i ? "0.25s" : "0s",
                    }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step indicator below card */}
              <div 
                className="fc-step-indicator"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 20px",
                  background: "var(--bg-white)",
                  borderRadius: "999px",
                  boxShadow: hovered === i 
                    ? "0 8px 20px rgba(26, 43, 74, 0.15)"
                    : "0 2px 8px rgba(26, 43, 74, 0.06)",
                  border: `1.5px solid ${hovered === i ? card.accent : "var(--border)"}`,
                  transition: "all 0.3s ease",
                  transform: hovered === i ? "translateY(-10px)" : "translateY(0)",
                }}
              >
                <span style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "22px",
                  height: "22px",
                  background: hovered === i ? card.accent : "var(--navy)",
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: "800",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                }}>
                  {card.step}
                </span>
                <span style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "var(--navy-dark)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontFamily: "var(--font-sans)",
                }}>
                  {card.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p style={{
        marginTop: "40px",
        fontSize: "12px",
        color: "#bbb",
        letterSpacing: "0.3px",
        fontFamily: "var(--font-sans)",
      }}>
        Hover over each card to explore
      </p>
    </div>
  );
}
