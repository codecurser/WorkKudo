import { useState } from "react";
import "./FeatureCards.css";
 
const cards = [
  {
    step: 1,
    label: "Create Board",
    tag: "Dashboard",
    desc: "Start a new farewell board & set up the recipient",
    accent: "#e84393",
    bg: "linear-gradient(145deg,#f5e6ff,#ede0fa)",
    headerBg: "linear-gradient(135deg,#e84393,#ff6b35)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="h1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e84393"/>
            <stop offset="100%" stopColor="#ff6b35"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="url(#h1)" opacity="0.08"/>
        <path d="M0,0 H148 V72 Q74,92 0,72 Z" fill="url(#h1)"/>
        
        <circle cx="74" cy="36" r="16" fill="white" opacity="0.95" style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))" }}/>
        <g className="fc-svg-plus">
          <path d="M74,28 V44 M66,36 H82" stroke="#e84393" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        <text x="74" y="62" fontSize="7" fill="white" fontWeight="700" textAnchor="middle" letterSpacing="0.05em" fontFamily="var(--font-sans)">CREATE NEW BOARD</text>

        <rect x="8" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="28" y="99" fontSize="10" fill="#e84393" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">1</text>
        <text x="28" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Board</text>

        <rect x="54" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="74" y="99" fontSize="10" fill="#ff6b35" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">17</text>
        <text x="74" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Posts</text>

        <rect x="100" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="120" y="99" fontSize="10" fill="#7c3aed" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">14</text>
        <text x="120" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Signers</text>

        <rect x="8" y="132" width="132" height="70" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <rect x="8" y="132" width="132" height="20" rx="8" fill="url(#h1)"/>
        <rect x="8" y="146" width="132" height="6" fill="white"/>
        <text x="14" y="144" fontSize="6.5" fill="white" fontWeight="800" fontFamily="var(--font-sans)">Farewell Card</text>
        <circle cx="20" cy="164" r="8" fill="#e8f5e9"/>
        <text x="20" y="167.5" fontSize="9.5" fill="#2e7d32" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">A</text>
        <text x="32" y="163" fontSize="7" fill="#1f2937" fontWeight="700" fontFamily="var(--font-sans)">For Akshal Raina</text>
        <text x="32" y="170" fontSize="5.5" fill="#9ca3af" fontFamily="var(--font-sans)">Created 2 hours ago</text>
        
        <rect x="16" y="180" width="116" height="14" rx="5" fill="#e84393"/>
        <text x="74" y="189" fontSize="6.5" fill="white" fontWeight="700" textAnchor="middle" fontFamily="var(--font-sans)">Open Board</text>
      </svg>
    ),
  },
  {
    step: 2,
    label: "Invite Team",
    tag: "Collaborate",
    desc: "Collect messages, GIFs & memories from teammates",
    accent: "#7c3aed",
    bg: "linear-gradient(145deg,#fff3e0,#fce8d5)",
    headerBg: "#7c3aed",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#fff7f0" opacity="0.4"/>
        <rect width="148" height="42" fill="#7c3aed"/>
        <circle cx="20" cy="21" r="10" fill="white" opacity="0.2"/>
        <path d="M16,21 H24 M20,17 V25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <text x="36" y="25" fontSize="7.5" fill="white" fontWeight="800" fontFamily="var(--font-sans)">INVITE CONTRIBUTORS</text>

        <g className="fc-svg-sticky-1">
          <rect x="8" y="52" width="60" height="52" rx="4" fill="#fff9db" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(-3,38,78)"/>
          <text x="14" y="66" fontSize="5" fontWeight="700" fill="#855800" fontFamily="var(--font-sans)">Good luck Akshal!</text>
          <text x="14" y="74" fontSize="4.5" fill="#855800" fontFamily="var(--font-sans)">We will miss your</text>
          <text x="14" y="82" fontSize="4.5" fill="#855800" fontFamily="var(--font-sans)">positive energy!</text>
          <text x="14" y="96" fontSize="4.5" fill="#a1a1a1" fontWeight="700" fontFamily="var(--font-sans)">- yukti.t</text>
        </g>

        <g className="fc-svg-sticky-2">
          <rect x="76" y="52" width="64" height="52" rx="4" fill="#e3f2fd" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(2,108,78)"/>
          <text x="82" y="66" fontSize="5" fontWeight="700" fill="#0d47a1" fontFamily="var(--font-sans)">Congratulations!</text>
          <text x="82" y="74" fontSize="4.5" fill="#0d47a1" fontFamily="var(--font-sans)">Amazing working</text>
          <text x="82" y="82" fontSize="4.5" fill="#0d47a1" fontFamily="var(--font-sans)">with you, congrats!</text>
          <text x="82" y="96" fontSize="4.5" fill="#8baec4" fontWeight="700" fontFamily="var(--font-sans)">- sanchit.s</text>
        </g>

        <rect x="8" y="112" width="132" height="90" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}/>
        <text x="16" y="127" fontSize="7" fill="#1f2937" fontWeight="800" fontFamily="var(--font-sans)">CONTRIBUTORS (14)</text>
        <line x1="8" y1="132" x2="140" y2="132" stroke="#f3f4f6" strokeWidth="1"/>

        {[
          { init: "R", name: "Ravinder K.", role: "Creator", color: "#e84393", bg: "#fce4ec", y: 147 },
          { init: "V", name: "Vivek Sharma", role: "Signed", color: "#10b981", bg: "#d1fae5", y: 161 },
          { init: "P", name: "Pragati Tiwari", role: "Signed", color: "#10b981", bg: "#d1fae5", y: 175 },
          { init: "M", name: "Mukul Singh", role: "Invited", color: "#6b7280", bg: "#f3f4f6", y: 189 }
        ].map((item) => (
          <g key={item.y}>
            <circle cx="20" cy={item.y - 2.5} r="6" fill={item.bg}/>
            <text x="20" y={item.y} fontSize="5.5" fill="#374151" fontWeight="700" textAnchor="middle" fontFamily="var(--font-sans)">{item.init}</text>
            <text x="32" y={item.y} fontSize="6" fill="#374151" fontWeight="700" fontFamily="var(--font-sans)">{item.name}</text>
            <rect x="106" y={item.y - 7} width="26" height="9" rx="3" fill={item.bg}/>
            <text x="119" y={item.y - 1} fontSize="4.5" fill={item.color} fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">{item.role}</text>
          </g>
        ))}
      </svg>
    ),
  },
  {
    step: 3,
    label: "Deliver",
    tag: "Print & Ship",
    desc: "Premium cardstock printed & shipped to their door",
    accent: "#1a6b47",
    bg: "linear-gradient(145deg,#e8f5e9,#f1f8e9)",
    headerBg: "#1a6b47",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#f0faf5" opacity="0.5"/>
        <rect width="148" height="42" fill="#1a6b47"/>
        <circle cx="20" cy="21" r="10" fill="white" opacity="0.2"/>
        <text x="20" y="25" fontSize="11" textAnchor="middle" fontFamily="var(--font-sans)">📦</text>
        <text x="36" y="24" fontSize="8" fill="white" fontWeight="800" fontFamily="var(--font-sans)">DELIVER THE KEEPSAKE</text>

        <rect x="24" y="56" width="100" height="76" rx="6" fill="#e8c88a" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.12))" }}/>
        <polygon points="24,56 74,90 124,56" fill="#d4b07a"/>
        
        <g className="fc-svg-card">
          <rect x="34" y="48" width="80" height="60" rx="4" fill="#fffcf7" style={{ filter: "drop-shadow(0 -3px 6px rgba(0,0,0,0.08))" }}/>
          <text x="74" y="66" fontSize="6.5" fill="#1a6b47" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">Farewell, Akshal!</text>
          <rect x="42" y="74" width="64" height="2" rx="1" fill="#e5e7eb"/>
          <rect x="42" y="80" width="48" height="2" rx="1" fill="#e5e7eb"/>
          <circle cx="50" cy="92" r="5" fill="#ff8f5e"/>
          <circle cx="64" cy="92" r="5" fill="#a78bfa"/>
          <circle cx="78" cy="92" r="5" fill="#34d399"/>
          <text x="96" y="94" fontSize="4.5" fill="#9ca3af" fontWeight="700" fontFamily="var(--font-sans)">+14 signed</text>
        </g>

        <rect x="8" y="124" width="132" height="78" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <text x="16" y="139" fontSize="6.5" fill="#1a6b47" fontWeight="800" fontFamily="var(--font-sans)">SHIPPING DETAILS</text>
        
        <text x="16" y="152" fontSize="5" fill="#9ca3af" fontWeight="700" fontFamily="var(--font-sans)">RECIPIENT</text>
        <text x="16" y="161" fontSize="6.5" fill="#1f2937" fontWeight="800" fontFamily="var(--font-sans)">Akshal Raina</text>

        <text x="86" y="152" fontSize="5" fill="#9ca3af" fontWeight="700" fontFamily="var(--font-sans)">DELIVERY DATE</text>
        <text x="86" y="161" fontSize="6.5" fill="#1f2937" fontWeight="800" fontFamily="var(--font-sans)">Jun 6, 2026</text>
        
        <rect x="16" y="172" width="116" height="18" rx="4" fill="#f0faf5"/>
        <circle cx="26" cy="181" r="4" fill="#1a6b47"/>
        <path d="M24.5,181 L25.5,182 L27.5,180" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none"/>
        <text x="36" y="183" fontSize="5.5" fill="#1a6b47" fontWeight="800" fontFamily="var(--font-sans)">Printed on premium linen cardstock</text>
      </svg>
    ),
  },
  {
    step: 4,
    label: "Surprise",
    tag: "Share & Reveal",
    desc: "Export as PDF, copy link, or share via email",
    accent: "#ff5722",
    bg: "linear-gradient(145deg,#fff8f0,#fff0e8)",
    headerBg: "linear-gradient(135deg,#ff5722,#ff9800)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="h4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5722"/>
            <stop offset="100%" stopColor="#ff9800"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#fff8f0" opacity="0.5"/>
        {/* Header Banner */}
        <rect width="148" height="42" fill="url(#h4)"/>
        <text x="16" y="25" fontSize="8.5" fill="white" fontWeight="800" fontFamily="var(--font-sans)">SHARE &amp; REVEAL</text>
        
        {/* Board Controls Card */}
        <rect x="8" y="50" width="132" height="76" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.06))" }}/>
        {/* Share Link Input Mock */}
        <rect x="14" y="60" width="80" height="14" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
        <text x="20" y="69" fontSize="5" fill="#9ca3af" fontFamily="var(--font-sans)">workkudo.com/b/akshal-farewell</text>
        {/* Copy Button */}
        <g className="fc-svg-copy-btn">
          <rect x="98" y="60" width="36" height="14" rx="4" fill="#ff5722"/>
          <text x="116" y="69" fontSize="5.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">COPY LINK</text>
        </g>

        {/* Dropdown Menu overlay */}
        <rect x="14" y="82" width="120" height="36" rx="6" fill="#fdfdfd" stroke="#e5e7eb" strokeWidth="1"/>
        
        {/* Dropdown choices */}
        <rect x="20" y="88" width="50" height="11" rx="3" fill="#ffebee"/>
        <text x="45" y="95" fontSize="5" fill="#c62828" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💾 DOWNLOAD PDF</text>
        
        <rect x="78" y="88" width="50" height="11" rx="3" fill="#e8f5e9"/>
        <text x="103" y="95" fontSize="5" fill="#2e7d32" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💌 SEND EMAIL</text>
        
        <circle cx="24" cy="109" r="3" fill="#ff5722"/>
        <text x="32" y="111.5" fontSize="5" fill="#374151" fontWeight="700" fontFamily="var(--font-sans)">Board remains active forever</text>

        {/* Checklists */}
        <rect x="8" y="134" width="132" height="68" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <text x="16" y="147" fontSize="6.5" fill="#ff5722" fontWeight="800" fontFamily="var(--font-sans)">REVEAL CHECKLIST</text>
        <line x1="8" y1="152" x2="140" y2="152" stroke="#f3f4f6" strokeWidth="1"/>

        {[
          { text: "Download print-ready high-res PDF", y: 164 },
          { text: "Copy private link for Slack or Teams", y: 176 },
          { text: "Schedule automated email reveal", y: 188 }
        ].map((item, idx) => (
          <g key={item.y} className={`fc-svg-check-${idx}`}>
            <circle cx="18" cy={item.y - 2} r="3.5" fill="#e8f5e9"/>
            <path d="M16.5,162 L17.5,163 L19.5,161" stroke="#2e7d32" strokeWidth="0.8" strokeLinecap="round" fill="none" transform={`translate(0, ${item.y - 164})`}/>
            <text x="26" y={item.y.toString()} fontSize="5.5" fill="#4b5563" fontWeight="600" fontFamily="var(--font-sans)">{item.text}</text>
          </g>
        ))}
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

export default function FeatureCards() {
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
      <h1 style={{
        fontSize: "clamp(2.25rem, 4.5vw, 3rem)",
        fontWeight: "800",
        color: "var(--navy-dark)",
        marginBottom: "18px",
        letterSpacing: "-0.03em",
        textAlign: "center",
        fontFamily: "var(--font-sans)",
      }}>
        How it works
      </h1>
      <p style={{
        fontSize: "1.15rem",
        color: "var(--text-light)",
        marginBottom: "48px",
        textAlign: "center",
        lineHeight: "1.68",
        maxWidth: "580px",
        fontFamily: "var(--font-sans)",
      }}>
        Four simple steps to create the perfect farewell
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
            <linearGradient id="connector-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e84393" />
              <stop offset="33%" stopColor="#7c3aed" />
              <stop offset="66%" stopColor="#1a6b47" />
              <stop offset="100%" stopColor="#ff5722" />
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
            stroke="url(#connector-grad)"
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

                {/* Subtle dark dimming overlay on hover to soften the illustration */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10, 5, 20, 0.16)",
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity 0.45s ease",
                  pointerEvents: "none",
                }}/>
 
                {/* slide-up content on hover with high readability background gradient */}
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
