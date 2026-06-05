import { useState } from "react";
import "./FeatureCards.css";

// ─── SEND-OFF CARDS DATA ───
const sendOffCards = [
  {
    step: 1,
    label: "Create Board",
    tag: "Dashboard",
    desc: "Start a new farewell board & set up the recipient",
    accent: "#e84393",
    bg: "linear-gradient(145deg,#f5e6ff,#ede0fa)",
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
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="h4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5722"/>
            <stop offset="100%" stopColor="#ff9800"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#fff8f0" opacity="0.5"/>
        <rect width="148" height="42" fill="url(#h4)"/>
        <text x="16" y="25" fontSize="8.5" fill="white" fontWeight="800" fontFamily="var(--font-sans)">SHARE &amp; REVEAL</text>
        
        <rect x="8" y="50" width="132" height="76" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.06))" }}/>
        <rect x="14" y="60" width="80" height="14" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
        <text x="20" y="69" fontSize="5" fill="#9ca3af" fontFamily="var(--font-sans)">workkudo.com/b/akshal-farewell</text>
        <g className="fc-svg-copy-btn">
          <rect x="98" y="60" width="36" height="14" rx="4" fill="#ff5722"/>
          <text x="116" y="69" fontSize="5.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">COPY LINK</text>
        </g>

        <rect x="14" y="82" width="120" height="36" rx="6" fill="#fdfdfd" stroke="#e5e7eb" strokeWidth="1"/>
        
        <rect x="20" y="88" width="50" height="11" rx="3" fill="#ffebee"/>
        <text x="45" y="95" fontSize="5" fill="#c62828" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💾 DOWNLOAD PDF</text>
        
        <rect x="78" y="88" width="50" height="11" rx="3" fill="#e8f5e9"/>
        <text x="103" y="95" fontSize="5" fill="#2e7d32" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💌 SEND EMAIL</text>
        
        <circle cx="24" cy="109" r="3" fill="#ff5722"/>
        <text x="32" y="111.5" fontSize="5" fill="#374151" fontWeight="700" fontFamily="var(--font-sans)">Board remains active forever</text>

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

// ─── BIRTHDAY CARDS DATA ───
const birthdayCards = [
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
        
        <path d="M 44,175 L 104,175 L 94,162 L 54,162 Z" fill="#b2bec3" />
        
        <rect x="34" y="122" width="80" height="40" rx="4" fill="#ff7675" />
        <rect x="34" y="122" width="80" height="8" fill="#ff8a80" />
        
        <rect x="44" y="88" width="60" height="34" rx="4" fill="#fd79a8" />
        <rect x="44" y="88" width="60" height="6" fill="#ff80ab" />

        <rect x="56" y="68" width="4" height="20" fill="#74b9ff" />
        <path d="M 58,68 C 56,63 60,58 58,53 C 58,58 62,63 60,68 Z" fill="#ffa100" className="birthday-candle-flame" />
        
        <rect x="72" y="68" width="4" height="20" fill="#a29bfe" />
        <path d="M 74,68 C 72,63 76,58 74,53 C 74,58 78,63 76,68 Z" fill="#ffa100" className="birthday-candle-flame-delay" />

        <rect x="88" y="68" width="4" height="20" fill="#55efc4" />
        <path d="M 90,68 C 88,63 92,58 90,53 C 90,58 94,63 92,68 Z" fill="#ffa100" className="birthday-candle-flame" />

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

        <path d="M 50,105 Q 46,135 60,175" stroke="#b2bec3" strokeWidth="1" fill="none" />
        <g className="fc-svg-balloon-1">
          <ellipse cx="50" cy="80" rx="16" ry="22" fill="#ff7675" />
          <polygon points="47,102 53,102 50,98" fill="#ff7675" />
          <ellipse cx="44" cy="72" rx="4" ry="6" fill="white" opacity="0.3" transform="rotate(-15 44 72)" />
        </g>

        <path d="M 98,110 Q 104,140 88,175" stroke="#b2bec3" strokeWidth="1" fill="none" />
        <g className="fc-svg-balloon-2">
          <ellipse cx="98" cy="85" rx="15" ry="20" fill="#7c3aed" />
          <polygon points="95,105 101,105 98,101" fill="#7c3aed" />
          <ellipse cx="92" cy="77" rx="3.5" ry="5.5" fill="white" opacity="0.3" transform="rotate(-15 92 77)" />
        </g>

        <path d="M 74,120 Q 70,145 74,180" stroke="#b2bec3" strokeWidth="1" fill="none" />
        <g className="fc-svg-balloon-3">
          <ellipse cx="74" cy="95" rx="14" ry="18" fill="#fdcb6e" />
          <polygon points="71,113 77,113 74,109" fill="#fdcb6e" />
          <ellipse cx="69" cy="88" rx="3" ry="5" fill="white" opacity="0.3" transform="rotate(-15 69 88)" />
        </g>

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

        <rect x="34" y="94" width="80" height="66" rx="3" fill="#81c784" />
        <rect x="71" y="94" width="6" height="66" fill="#ff7675" />
        <rect x="34" y="124" width="80" height="6" fill="#ff7675" />

        <g className="fc-svg-gift-bow">
          <path d="M 74,86 C 58,70 52,86 74,86 Z" fill="#ff7675" />
          <path d="M 74,86 C 90,70 96,86 74,86 Z" fill="#ff7675" />
          <circle cx="74" cy="86" r="4.5" fill="#d63031" />
        </g>

        <g className="fc-svg-gift-lid">
          <rect x="30" y="84" width="88" height="12" rx="2" fill="#a5d6a7" />
          <rect x="71" y="84" width="6" height="12" fill="#ff7675" />
        </g>

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

        <g className="fc-svg-horn">
          <path d="M 20,180 L 30,190 L 74,138 L 64,128 Z" fill="#a29bfe" />
          <path d="M 18,177 L 24,183 L 42,165 L 36,159 Z" fill="#fdcb6e" />
        </g>

        <path d="M 69,130 Q 90,100 115,85" stroke="#ff7675" strokeWidth="1.5" fill="none" className="fc-svg-streamer-1" />
        <path d="M 69,130 Q 100,120 125,115" stroke="#55efc4" strokeWidth="1.5" fill="none" className="fc-svg-streamer-2" />

        <circle cx="85" cy="95" r="3" fill="#ff7675" className="fc-svg-dot-1" />
        <circle cx="100" cy="130" r="2" fill="#74b9ff" className="fc-svg-dot-2" />
        <polygon points="104,60 106,65 111,65 107,69 109,74 104,71 99,74 101,69 97,65 102,65" fill="#fdcb6e" className="fc-svg-star-1" />

        <text x="116" y="70" fontSize="11" className="fc-svg-emoji-1">🎉</text>
        <text x="110" y="110" fontSize="11" className="fc-svg-emoji-2">🎂</text>
      </svg>
    ),
  },
];

// ─── APPRECIATION CARDS DATA ───
const appreciationCards = [
  {
    step: 1,
    label: "Card Design",
    tag: "Themes",
    desc: "Select a custom digital card template with elegant designs and badge borders.",
    accent: "#00b894",
    bg: "linear-gradient(145deg, #e8f5e9, #c8e6c9)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#e8f5e9" opacity="0.4"/>
        <rect width="148" height="42" fill="#00b894"/>
        <text x="74" y="26" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">CARD DESIGNS</text>
        
        <rect x="24" y="72" width="100" height="96" rx="6" fill="white" stroke="#00b894" strokeWidth="2" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.06))" }} />
        <rect x="29" y="77" width="90" height="86" rx="4" fill="none" stroke="#a5d6a7" strokeWidth="0.8" strokeDasharray="3 2" />
        
        <g className="fc-svg-medal" style={{ transformOrigin: '74px 115px' }}>
          <polygon points="66,120 62,142 74,134 86,142 82,120" fill="#ff7675" />
          <circle cx="74" cy="115" r="16" fill="#fdcb6e" stroke="#f39c12" strokeWidth="1.5" />
          <circle cx="74" cy="115" r="12" fill="#ffeaa7" />
          <polygon points="74,106 77,112 83,113 79,117 80,123 74,120 68,123 69,117 65,113 71,112" fill="#f39c12" />
        </g>
        
        <rect x="44" y="148" width="60" height="3" rx="1" fill="#e8f5e9" />
        <rect x="54" y="154" width="40" height="2" rx="1" fill="#e8f5e9" />
      </svg>
    ),
  },
  {
    step: 2,
    label: "Collect Kudos",
    tag: "Invite",
    desc: "Gather positive recognition, thank-yous, and praise from teammates.",
    accent: "#7c3aed",
    bg: "linear-gradient(145deg, #f3e5f5, #e1bee7)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#f3e5f5" opacity="0.4"/>
        <rect width="148" height="42" fill="#7c3aed"/>
        <text x="74" y="26" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">COLLECT KUDOS</text>

        <g className="fc-svg-kudos-1" style={{ transformOrigin: '42px 92px' }}>
          <rect x="12" y="66" width="60" height="52" rx="4" fill="#fff9db" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(-4 42 92)" />
          <text x="20" y="82" fontSize="5.5" fontWeight="800" fill="#855800" fontFamily="var(--font-sans)">Thank you! 👍</text>
          <text x="20" y="92" fontSize="4.5" fill="#855800" fontFamily="var(--font-sans)">You saved the project</text>
          <text x="20" y="100" fontSize="4.5" fill="#855800" fontFamily="var(--font-sans)">timeline, you rock!</text>
          <text x="20" y="111" fontSize="4.5" fill="#a1a1a1" fontWeight="700" fontFamily="var(--font-sans)">- amy.d</text>
        </g>

        <g className="fc-svg-kudos-2" style={{ transformOrigin: '106px 108px' }}>
          <rect x="76" y="82" width="60" height="52" rx="4" fill="#e3f2fd" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(3 106 108)" />
          <text x="82" y="98" fontSize="5.5" fontWeight="800" fill="#0d47a1" fontFamily="var(--font-sans)">Great Job! 🌟</text>
          <text x="82" y="108" fontSize="4.5" fill="#0d47a1" fontFamily="var(--font-sans)">Awesome support with</text>
          <text x="82" y="116" fontSize="4.5" fill="#0d47a1" fontFamily="var(--font-sans)">the team onboarding.</text>
          <text x="82" y="127" fontSize="4.5" fill="#8baec4" fontWeight="700" fontFamily="var(--font-sans)">- sam.r</text>
        </g>

        <circle cx="28" cy="148" r="1.5" fill="#7c3aed" />
        <circle cx="124" cy="70" r="2.5" fill="#ff7675" />
        <path d="M115,160 L117,163 L120,163 L118,165 L119,168 L116,166 L113,168 L114,165 L112,163 L115,163 Z" fill="#fdcb6e" />
      </svg>
    ),
  },
  {
    step: 3,
    label: "Keepsake Book",
    tag: "Deliver",
    desc: "Shipped directly to their home as a gorgeous, softcover memory book.",
    accent: "#fdcb6e",
    bg: "linear-gradient(145deg, #fffde7, #fff9c4)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#fffde7" opacity="0.4"/>
        <rect width="148" height="42" fill="#fdcb6e"/>
        <text x="74" y="26" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">KEEPSAKE BOOK</text>

        <rect x="24" y="96" width="100" height="76" rx="6" fill="#7c3aed" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.12))" }}/>
        <rect x="24" y="96" width="8" height="76" fill="#5b21b6" />
        
        <g className="fc-svg-book">
          <rect x="34" y="60" width="80" height="68" rx="4" fill="#ffffff" style={{ filter: "drop-shadow(0 -3px 6px rgba(0,0,0,0.08))" }}/>
          <circle cx="74" cy="88" r="10" fill="#ffeaa7" />
          <polygon points="74,82 76,86 80,87 77,90 78,94 74,92 70,94 71,90 68,87 72,86" fill="#f39c12" />
          <text x="74" y="112" fontSize="6.5" fill="#5b21b6" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">THANK YOU!</text>
        </g>
        
        <path d="M16,70 L18,73 L21,73 L19,75 L20,78 L17,76 L14,78 L15,75 L13,73 L16,73 Z" fill="#ff7675" />
        <path d="M128,78 L129.5,81 L132,81 L130,83 L131,86 L128,84.5 L125,86 L126,83 L124,81 L126.5,81 Z" fill="#00b894" />
      </svg>
    ),
  },
  {
    step: 4,
    label: "Surprise Reveal",
    tag: "Celebrate",
    desc: "Generate private web pages, high-res PDF exports, or Slack sharing links.",
    accent: "#ff7675",
    bg: "linear-gradient(145deg, #ffebee, #ffcdd2)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#ffebee" opacity="0.4"/>
        <rect width="148" height="42" fill="#ff7675"/>
        <text x="74" y="26" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">REVEAL CHECKS</text>

        <rect x="8" y="50" width="132" height="76" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.06))" }}/>
        
        <rect x="14" y="60" width="80" height="14" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
        <text x="20" y="69" fontSize="5" fill="#9ca3af" fontFamily="var(--font-sans)">workkudo.com/b/thanks-team</text>
        
        <g className="fc-svg-copy-btn">
          <rect x="98" y="60" width="36" height="14" rx="4" fill="#ff7675"/>
          <text x="116" y="69" fontSize="5.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">COPY LINK</text>
        </g>

        <rect x="14" y="82" width="120" height="36" rx="6" fill="#fdfdfd" stroke="#e5e7eb" strokeWidth="1"/>
        
        <rect x="20" y="88" width="50" height="11" rx="3" fill="#ffebee"/>
        <text x="45" y="95" fontSize="5" fill="#c62828" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💾 DOWNLOAD PDF</text>
        
        <rect x="78" y="88" width="50" height="11" rx="3" fill="#e8f5e9"/>
        <text x="103" y="95" fontSize="5" fill="#2e7d32" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💌 SEND EMAIL</text>
        
        <circle cx="24" cy="109" r="3" fill="#ff7675"/>
        <text x="32" y="111.5" fontSize="5" fill="#374151" fontWeight="700" fontFamily="var(--font-sans)">Board remains active forever</text>

        <rect x="8" y="134" width="132" height="68" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <text x="16" y="147" fontSize="6.5" fill="#ff7675" fontWeight="800" fontFamily="var(--font-sans)">REVEAL CHECKLIST</text>
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

// ─── RETIREMENT CARDS DATA ───
const retirementCards = [
  {
    step: 1,
    label: "Create Board",
    tag: "Dashboard",
    desc: "Start a golden retirement board and set up the honoured colleague",
    accent: "#e6a817",
    bg: "linear-gradient(145deg,#fff8e1,#ffecc2)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="ret1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e6a817"/>
            <stop offset="100%" stopColor="#f97316"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#fff8e1" opacity="0.5"/>
        <path d="M0,0 H148 V72 Q74,92 0,72 Z" fill="url(#ret1)"/>
        {/* Trophy */}
        <rect x="66" y="20" width="16" height="6" rx="2" fill="white" opacity="0.9"/>
        <rect x="70" y="26" width="8" height="10" rx="1" fill="white" opacity="0.9"/>
        <rect x="65" y="36" width="18" height="3" rx="1" fill="white" opacity="0.9"/>
        <path d="M62,14 Q56,14 56,20 Q56,30 66,34 L66,20 Z" fill="white" opacity="0.7"/>
        <path d="M86,14 Q92,14 92,20 Q92,30 82,34 L82,20 Z" fill="white" opacity="0.7"/>
        <ellipse cx="74" cy="14" rx="14" ry="10" fill="white" opacity="0.95"/>
        <text x="74" y="18" fontSize="7" fill="#e6a817" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">★</text>
        <text x="74" y="62" fontSize="7" fill="white" fontWeight="700" textAnchor="middle" letterSpacing="0.05em" fontFamily="var(--font-sans)">GOLDEN FAREWELL</text>
        {/* Stats */}
        <rect x="8" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="28" y="99" fontSize="10" fill="#e6a817" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">30</text>
        <text x="28" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Yrs</text>
        <rect x="54" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="74" y="99" fontSize="10" fill="#f97316" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">42</text>
        <text x="74" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Posts</text>
        <rect x="100" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="120" y="99" fontSize="10" fill="#7c3aed" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">26</text>
        <text x="120" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Signed</text>
        <rect x="8" y="132" width="132" height="70" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <rect x="8" y="132" width="132" height="20" rx="8" fill="url(#ret1)"/>
        <rect x="8" y="146" width="132" height="6" fill="white"/>
        <text x="14" y="144" fontSize="6.5" fill="white" fontWeight="800" fontFamily="var(--font-sans)">Retirement Board</text>
        <circle cx="20" cy="164" r="8" fill="#fff8e1"/>
        <text x="20" y="167.5" fontSize="9.5" fill="#e6a817" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">R</text>
        <text x="32" y="163" fontSize="7" fill="#1f2937" fontWeight="700" fontFamily="var(--font-sans)">For Robert Singh</text>
        <text x="32" y="170" fontSize="5.5" fill="#9ca3af" fontFamily="var(--font-sans)">Retiring after 30 years</text>
        <rect x="16" y="180" width="116" height="14" rx="5" fill="#e6a817"/>
        <text x="74" y="189" fontSize="6.5" fill="white" fontWeight="700" textAnchor="middle" fontFamily="var(--font-sans)">Open Board</text>
      </svg>
    ),
  },
  {
    step: 2,
    label: "Share Memories",
    tag: "Collaborate",
    desc: "Collect stories, milestones and heartfelt messages from the whole team",
    accent: "#c0392b",
    bg: "linear-gradient(145deg,#fff3e0,#ffe0cc)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#fff7f0" opacity="0.4"/>
        <rect width="148" height="42" fill="#c0392b"/>
        <text x="74" y="26" fontSize="8" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">SHARE MEMORIES</text>
        {/* Memory album sticky notes */}
        <g className="fc-svg-sticky-1">
          <rect x="8" y="52" width="62" height="54" rx="4" fill="#fef9c3" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(-3,39,79)"/>
          <text x="14" y="66" fontSize="5" fontWeight="700" fill="#92400e" fontFamily="var(--font-sans)">30 years of great</text>
          <text x="14" y="74" fontSize="4.5" fill="#92400e" fontFamily="var(--font-sans)">work! Thank you</text>
          <text x="14" y="82" fontSize="4.5" fill="#92400e" fontFamily="var(--font-sans)">for everything!</text>
          <text x="14" y="97" fontSize="4.5" fill="#a1a1a1" fontWeight="700" fontFamily="var(--font-sans)">- priya.s</text>
        </g>
        <g className="fc-svg-sticky-2">
          <rect x="76" y="52" width="64" height="54" rx="4" fill="#dbeafe" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(2,108,79)"/>
          <text x="82" y="66" fontSize="5" fontWeight="700" fill="#1e40af" fontFamily="var(--font-sans)">Enjoy the sunset</text>
          <text x="82" y="74" fontSize="4.5" fill="#1e40af" fontFamily="var(--font-sans)">chapters of life!</text>
          <text x="82" y="82" fontSize="4.5" fill="#1e40af" fontFamily="var(--font-sans)">You've earned it.</text>
          <text x="82" y="97" fontSize="4.5" fill="#8baec4" fontWeight="700" fontFamily="var(--font-sans)">- dev.t</text>
        </g>
        <rect x="8" y="114" width="132" height="90" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}/>
        <text x="16" y="129" fontSize="7" fill="#1f2937" fontWeight="800" fontFamily="var(--font-sans)">CONTRIBUTORS (26)</text>
        <line x1="8" y1="134" x2="140" y2="134" stroke="#f3f4f6" strokeWidth="1"/>
        {[
          { init: "P", name: "Priya Sharma",  role: "Creator", color: "#c0392b", bg: "#fee2e2", y: 149 },
          { init: "D", name: "Dev Tiwari",    role: "Signed",  color: "#10b981", bg: "#d1fae5", y: 163 },
          { init: "R", name: "Raj Mehta",     role: "Signed",  color: "#10b981", bg: "#d1fae5", y: 177 },
          { init: "A", name: "Anjali Roy",    role: "Invited", color: "#6b7280", bg: "#f3f4f6", y: 191 }
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
    label: "Gift & Print",
    tag: "Keepsake",
    desc: "Premium printed memory book + curated retirement gift delivered to their home",
    accent: "#1a6b47",
    bg: "linear-gradient(145deg,#e8f5e9,#d4edda)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#f0faf5" opacity="0.5"/>
        <rect width="148" height="42" fill="#1a6b47"/>
        <text x="74" y="26" fontSize="8.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">GIFT & PRINT</text>
        {/* Gift box */}
        <rect x="30" y="90" width="88" height="64" rx="4" fill="#e6a817" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.12))" }}/>
        <rect x="30" y="90" width="88" height="16" rx="4" fill="#c0392b"/>
        <rect x="30" y="100" width="88" height="6" fill="#c0392b"/>
        {/* Ribbon vertical */}
        <rect x="70" y="90" width="8" height="64" fill="#fff8e1"/>
        {/* Bow */}
        <g className="fc-svg-gift-bow">
          <path d="M74,84 C60,70 54,84 74,84 Z" fill="#c0392b"/>
          <path d="M74,84 C88,70 94,84 74,84 Z" fill="#c0392b"/>
          <circle cx="74" cy="84" r="5" fill="#a93226"/>
          <text x="74" y="87" fontSize="6" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">★</text>
        </g>
        {/* Book spine visible inside gift */}
        <rect x="40" y="96" width="4" height="52" fill="#c0392b"/>
        <rect x="44" y="96" width="66" height="52" fill="#fffcf0"/>
        <text x="77" y="126" fontSize="5.5" fill="#1a6b47" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">Memory</text>
        <text x="77" y="134" fontSize="5.5" fill="#1a6b47" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">Book</text>
        {/* Stars */}
        <path d="M22,72 L24,76 L28,76 L25,78 L26,82 L22,80 L18,82 L19,78 L16,76 L20,76 Z" fill="#e6a817" />
        <path d="M126,78 L127.5,81 L131,81 L129,83 L130,86 L127,84.5 L124,86 L125,83 L123,81 L126.5,81 Z" fill="#1a6b47" />
        {/* Shipping tag */}
        <rect x="8" y="164" width="132" height="38" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.06))" }}/>
        <text x="16" y="178" fontSize="5.5" fill="#1a6b47" fontWeight="800" fontFamily="var(--font-sans)">SHIPPING DETAILS</text>
        <text x="16" y="190" fontSize="5" fill="#9ca3af" fontFamily="var(--font-sans)">Delivered to: Robert Singh · Jun 2026</text>
        <circle cx="130" cy="181" r="6" fill="#e8f5e9"/>
        <path d="M127.5,181 L129,182.5 L132.5,178.5" stroke="#1a6b47" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    step: 4,
    label: "Celebrate",
    tag: "Share & Reveal",
    desc: "Share a private board link, export the PDF and celebrate the golden chapter",
    accent: "#7c3aed",
    bg: "linear-gradient(145deg,#f5f3ff,#ede9fe)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="ret4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#e6a817"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#f5f3ff" opacity="0.5"/>
        <rect width="148" height="42" fill="url(#ret4)"/>
        <text x="74" y="26" fontSize="8.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">CELEBRATE!</text>
        {/* Sunrise illustration */}
        <circle cx="74" cy="140" r="28" fill="#e6a817" opacity="0.15"/>
        <circle cx="74" cy="140" r="18" fill="#e6a817" opacity="0.85"/>
        {/* Sun rays */}
        {[0,45,90,135,180,225,270,315].map((deg, idx) => {
          const r = deg * Math.PI / 180;
          const x1 = 74 + 22 * Math.cos(r);
          const y1 = 140 + 22 * Math.sin(r);
          const x2 = 74 + 30 * Math.cos(r);
          const y2 = 140 + 30 * Math.sin(r);
          return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e6a817" strokeWidth="2" strokeLinecap="round"/>;
        })}
        <path d="M34,140 Q74,100 114,140" fill="#1a6b47" opacity="0.55"/>
        <path d="M20,140 H128" stroke="#1a6b47" strokeWidth="2" opacity="0.3"/>
        <text x="74" y="144" fontSize="9" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">🌅</text>
        {/* Checklist below */}
        <rect x="8" y="164" width="132" height="40" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <text x="16" y="177" fontSize="6.5" fill="#7c3aed" fontWeight="800" fontFamily="var(--font-sans)">REVEAL CHECKLIST</text>
        {[
          { text: "Download print-ready high-res PDF", y: 190 },
          { text: "Copy private link for Slack / Teams", y: 199 },
        ].map((item, idx) => (
          <g key={item.y}>
            <circle cx="18" cy={item.y - 2} r="3.5" fill="#f5f3ff"/>
            <path d="M16.5,188 L17.5,189 L19.5,187" stroke="#7c3aed" strokeWidth="0.8" strokeLinecap="round" fill="none" transform={`translate(0, ${item.y - 190})`}/>
            <text x="26" y={item.y.toString()} fontSize="5" fill="#4b5563" fontWeight="600" fontFamily="var(--font-sans)">{item.text}</text>
          </g>
        ))}
        {/* Confetti dots */}
        <circle cx="30" cy="65" r="3" fill="#e6a817" className="fc-svg-dot-1"/>
        <circle cx="118" cy="58" r="2" fill="#7c3aed" className="fc-svg-dot-2"/>
        <circle cx="108" cy="80" r="2.5" fill="#c0392b" className="fc-svg-dot-1"/>
        <circle cx="42" cy="78" r="2" fill="#1a6b47" className="fc-svg-dot-2"/>
      </svg>
    ),
  },
];

// ─── CONDOLENCE CARDS DATA ───
const condolenceCards = [
  {
    step: 1,
    label: "Create Board",
    tag: "Dashboard",
    desc: "Start a compassionate tribute board and set up the memorial",
    accent: "#4a6fa5",
    bg: "linear-gradient(145deg,#eef2ff,#dde5f4)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="con1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a6fa5"/>
            <stop offset="100%" stopColor="#6b8cba"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#eef2ff" opacity="0.5"/>
        <path d="M0,0 H148 V72 Q74,92 0,72 Z" fill="url(#con1)"/>
        {/* Dove of peace */}
        <g opacity="0.95">
          <path d="M74,28 C68,20 60,22 58,28 C56,34 62,38 70,34 C74,32 78,28 82,30 C86,32 84,38 78,40 C84,42 88,36 86,30 Z" fill="white"/>
          <circle cx="60" cy="26" r="2" fill="white" opacity="0.7"/>
          <path d="M58,28 L50,35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        <text x="74" y="62" fontSize="6.5" fill="white" fontWeight="700" textAnchor="middle" letterSpacing="0.05em" fontFamily="var(--font-sans)">TRIBUTE BOARD</text>
        {/* Stats */}
        <rect x="8" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="28" y="99" fontSize="10" fill="#4a6fa5" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">1</text>
        <text x="28" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Board</text>
        <rect x="54" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="74" y="99" fontSize="10" fill="#6b8cba" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">38</text>
        <text x="74" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Posts</text>
        <rect x="100" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="120" y="99" fontSize="10" fill="#7c8ba8" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">31</text>
        <text x="120" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Signed</text>
        <rect x="8" y="132" width="132" height="70" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <rect x="8" y="132" width="132" height="20" rx="8" fill="url(#con1)"/>
        <rect x="8" y="146" width="132" height="6" fill="white"/>
        <text x="14" y="144" fontSize="6.5" fill="white" fontWeight="800" fontFamily="var(--font-sans)">Memorial Board</text>
        <circle cx="20" cy="164" r="8" fill="#eef2ff"/>
        <text x="20" y="167.5" fontSize="9.5" fill="#4a6fa5" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">M</text>
        <text x="32" y="163" fontSize="7" fill="#1f2937" fontWeight="700" fontFamily="var(--font-sans)">In Memory of</text>
        <text x="32" y="170" fontSize="5.5" fill="#9ca3af" fontFamily="var(--font-sans)">Michael Evans</text>
        <rect x="16" y="180" width="116" height="14" rx="5" fill="#4a6fa5"/>
        <text x="74" y="189" fontSize="6.5" fill="white" fontWeight="700" textAnchor="middle" fontFamily="var(--font-sans)">Open Board</text>
      </svg>
    ),
  },
  {
    step: 2,
    label: "Share Comfort",
    tag: "Collaborate",
    desc: "Gather heartfelt messages, shared memories and words of comfort from the team",
    accent: "#7c8ba8",
    bg: "linear-gradient(145deg,#f0f4ff,#e2e8f8)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#f0f4ff" opacity="0.4"/>
        <rect width="148" height="42" fill="#7c8ba8"/>
        <text x="74" y="26" fontSize="8" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">SHARE COMFORT</text>
        {/* Comfort notes */}
        <g className="fc-svg-sticky-1">
          <rect x="8" y="52" width="62" height="54" rx="4" fill="#f8f0ff" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(-3,39,79)"/>
          <text x="14" y="66" fontSize="5" fontWeight="700" fill="#5b21b6" fontFamily="var(--font-sans)">He was the most</text>
          <text x="14" y="74" fontSize="4.5" fill="#5b21b6" fontFamily="var(--font-sans)">kind and generous</text>
          <text x="14" y="82" fontSize="4.5" fill="#5b21b6" fontFamily="var(--font-sans)">person I've known.</text>
          <text x="14" y="97" fontSize="4.5" fill="#a1a1a1" fontWeight="700" fontFamily="var(--font-sans)">- sarah.k</text>
        </g>
        <g className="fc-svg-sticky-2">
          <rect x="76" y="52" width="64" height="54" rx="4" fill="#e8f4fd" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(2,108,79)"/>
          <text x="82" y="66" fontSize="5" fontWeight="700" fill="#1e40af" fontFamily="var(--font-sans)">Thinking of you</text>
          <text x="82" y="74" fontSize="4.5" fill="#1e40af" fontFamily="var(--font-sans)">and your family</text>
          <text x="82" y="82" fontSize="4.5" fill="#1e40af" fontFamily="var(--font-sans)">during this time.</text>
          <text x="82" y="97" fontSize="4.5" fill="#8baec4" fontWeight="700" fontFamily="var(--font-sans)">- tom.b</text>
        </g>
        <rect x="8" y="114" width="132" height="90" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}/>
        <text x="16" y="129" fontSize="7" fill="#1f2937" fontWeight="800" fontFamily="var(--font-sans)">CONTRIBUTORS (31)</text>
        <line x1="8" y1="134" x2="140" y2="134" stroke="#f3f4f6" strokeWidth="1"/>
        {[
          { init: "S", name: "Sarah Kim",    role: "Creator", color: "#4a6fa5", bg: "#dde5f4", y: 149 },
          { init: "T", name: "Tom Brown",    role: "Signed",  color: "#10b981", bg: "#d1fae5", y: 163 },
          { init: "L", name: "Lisa Patel",   role: "Signed",  color: "#10b981", bg: "#d1fae5", y: 177 },
          { init: "J", name: "James Osei",   role: "Invited", color: "#6b7280", bg: "#f3f4f6", y: 191 }
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
    label: "Print Tribute",
    tag: "Keepsake",
    desc: "A beautifully bound memorial book printed and delivered to the family",
    accent: "#5a7a6e",
    bg: "linear-gradient(145deg,#ecf5f0,#d6ebe2)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#ecf5f0" opacity="0.5"/>
        <rect width="148" height="42" fill="#5a7a6e"/>
        <text x="74" y="26" fontSize="8" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">PRINT TRIBUTE</text>
        {/* Memorial book */}
        <rect x="34" y="56" width="80" height="100" rx="4" fill="#4a6fa5" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.12))" }}/>
        <rect x="34" y="56" width="10" height="100" fill="#3a5a8a"/>
        {/* Book pages */}
        <g className="fc-svg-book">
          <rect x="46" y="62" width="62" height="88" rx="2" fill="#fafafa"/>
          {/* Flower decoration */}
          <circle cx="77" cy="88" r="8" fill="#dde5f4"/>
          <circle cx="77" cy="88" r="4" fill="#4a6fa5"/>
          {[0,60,120,180,240,300].map((deg, i) => {
            const rad = deg * Math.PI / 180;
            return <ellipse key={i} cx={77 + 7*Math.cos(rad)} cy={88 + 7*Math.sin(rad)} rx="3.5" ry="2" fill="#b8c8e8" transform={`rotate(${deg}, ${77 + 7*Math.cos(rad)}, ${88 + 7*Math.sin(rad)})`}/>
          })}
          <text x="77" y="105" fontSize="5" fill="#4a6fa5" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">IN LOVING</text>
          <text x="77" y="112" fontSize="5" fill="#4a6fa5" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">MEMORY</text>
          {/* Lines for text */}
          <rect x="52" y="120" width="50" height="1.5" rx="1" fill="#e5e7eb"/>
          <rect x="56" y="125" width="42" height="1.5" rx="1" fill="#e5e7eb"/>
          <rect x="59" y="130" width="36" height="1.5" rx="1" fill="#e5e7eb"/>
          <rect x="62" y="135" width="30" height="1.5" rx="1" fill="#e5e7eb"/>
        </g>
        {/* Candle */}
        <rect x="20" y="130" width="6" height="20" rx="1" fill="#f5f0e8"/>
        <path d="M23,125 C21,120 25,116 23,112 C23,117 27,121 25,125 Z" fill="#fdcb6e"/>
        <rect x="118" y="135" width="6" height="16" rx="1" fill="#f5f0e8"/>
        <path d="M121,130 C119,125 123,121 121,117 C121,122 125,126 123,130 Z" fill="#fdcb6e"/>
      </svg>
    ),
  },
  {
    step: 4,
    label: "Send with Care",
    tag: "Deliver",
    desc: "Share a private link with the family or send directly to their inbox with love",
    accent: "#4a6fa5",
    bg: "linear-gradient(145deg,#eef2ff,#dde5f4)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="con4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4a6fa5"/>
            <stop offset="100%" stopColor="#7c8ba8"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#eef2ff" opacity="0.5"/>
        <rect width="148" height="42" fill="url(#con4)"/>
        <text x="74" y="26" fontSize="8" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">SEND WITH CARE</text>
        {/* Heart with envelope */}
        <rect x="8" y="50" width="132" height="72" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.06))" }}/>
        {/* Envelope shape */}
        <rect x="20" y="60" width="108" height="56" rx="4" fill="#dde5f4"/>
        <polygon points="20,60 74,95 128,60" fill="#b8c8e8"/>
        <line x1="20" y1="116" x2="55" y2="88" stroke="#b8c8e8" strokeWidth="1"/>
        <line x1="128" y1="116" x2="93" y2="88" stroke="#b8c8e8" strokeWidth="1"/>
        {/* Heart on envelope */}
        <path d="M74,75 C74,75 68,68 62,72 C56,76 60,86 74,92 C88,86 92,76 86,72 C80,68 74,75 74,75 Z" fill="#4a6fa5" opacity="0.7"/>
        {/* Checklist */}
        <rect x="8" y="130" width="132" height="72" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <text x="16" y="145" fontSize="6.5" fill="#4a6fa5" fontWeight="800" fontFamily="var(--font-sans)">DELIVERY OPTIONS</text>
        <line x1="8" y1="150" x2="140" y2="150" stroke="#f3f4f6" strokeWidth="1"/>
        {[
          { text: "Private link for family members",    y: 163 },
          { text: "Download high-res PDF tribute",       y: 176 },
          { text: "Schedule a compassionate email send", y: 189 }
        ].map((item, idx) => (
          <g key={item.y}>
            <circle cx="18" cy={item.y - 2} r="3.5" fill="#dde5f4"/>
            <path d="M16.5,161 L17.5,162 L19.5,160" stroke="#4a6fa5" strokeWidth="0.8" strokeLinecap="round" fill="none" transform={`translate(0,${item.y-163})`}/>
            <text x="26" y={item.y.toString()} fontSize="5" fill="#4b5563" fontWeight="600" fontFamily="var(--font-sans)">{item.text}</text>
          </g>
        ))}
      </svg>
    ),
  },
];

// ─── WORK MILESTONE CARDS DATA ───
const workMilestoneCards = [
  {
    step: 1,
    label: "Create Board",
    tag: "Dashboard",
    desc: "Start a milestone board and set up the honoured team member",
    accent: "#7c3aed",
    bg: "linear-gradient(145deg,#f5f3ff,#ede9fe)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="wm1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#5b21b6"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#f5f3ff" opacity="0.5"/>
        <path d="M0,0 H148 V72 Q74,92 0,72 Z" fill="url(#wm1)"/>
        {/* Trophy */}
        <g>
          <rect x="68" y="36" width="12" height="7" rx="1.5" fill="white" opacity="0.9"/>
          <rect x="72" y="43" width="4" height="8" rx="1" fill="white" opacity="0.9"/>
          <rect x="67" y="51" width="14" height="3" rx="1" fill="white" opacity="0.9"/>
          <path d="M63,18 Q58,18 58,24 Q58,33 68,37 L68,24 Z" fill="white" opacity="0.75"/>
          <path d="M85,18 Q90,18 90,24 Q90,33 80,37 L80,24 Z" fill="white" opacity="0.75"/>
          <ellipse cx="74" cy="20" rx="12" ry="9" fill="white" opacity="0.95"/>
          <text x="74" y="24" fontSize="9" fill="#7c3aed" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">★</text>
        </g>
        <text x="74" y="62" fontSize="6.5" fill="white" fontWeight="700" textAnchor="middle" letterSpacing="0.05em" fontFamily="var(--font-sans)">MILESTONE BOARD</text>
        <rect x="8" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="28" y="99" fontSize="10" fill="#7c3aed" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">5</text>
        <text x="28" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Years</text>
        <rect x="54" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="74" y="99" fontSize="10" fill="#5b21b6" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">34</text>
        <text x="74" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Posts</text>
        <rect x="100" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="120" y="99" fontSize="10" fill="#4f46e5" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">22</text>
        <text x="120" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Signed</text>
        <rect x="8" y="132" width="132" height="70" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <rect x="8" y="132" width="132" height="20" rx="8" fill="url(#wm1)"/>
        <rect x="8" y="146" width="132" height="6" fill="white"/>
        <text x="14" y="144" fontSize="6.5" fill="white" fontWeight="800" fontFamily="var(--font-sans)">Milestone Board</text>
        <circle cx="20" cy="164" r="8" fill="#f5f3ff"/>
        <text x="20" y="167.5" fontSize="9.5" fill="#7c3aed" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">J</text>
        <text x="32" y="163" fontSize="7" fill="#1f2937" fontWeight="700" fontFamily="var(--font-sans)">For Jamie Collins</text>
        <text x="32" y="170" fontSize="5.5" fill="#9ca3af" fontFamily="var(--font-sans)">5 Years at WorkKudo</text>
        <rect x="16" y="180" width="116" height="14" rx="5" fill="#7c3aed"/>
        <text x="74" y="189" fontSize="6.5" fill="white" fontWeight="700" textAnchor="middle" fontFamily="var(--font-sans)">Open Board</text>
      </svg>
    ),
  },
  {
    step: 2,
    label: "Collect Memories",
    tag: "Collaborate",
    desc: "Gather shoutouts, stories and congratulations from the whole team",
    accent: "#5b21b6",
    bg: "linear-gradient(145deg,#ede9fe,#ddd6fe)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#ede9fe" opacity="0.4"/>
        <rect width="148" height="42" fill="#5b21b6"/>
        <text x="74" y="26" fontSize="7.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">COLLECT MEMORIES</text>
        <g className="fc-svg-sticky-1">
          <rect x="8" y="52" width="62" height="54" rx="4" fill="#fef9c3" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(-3,39,79)"/>
          <text x="14" y="66" fontSize="5" fontWeight="700" fill="#78350f" fontFamily="var(--font-sans)">5 years and every</text>
          <text x="14" y="74" fontSize="4.5" fill="#78350f" fontFamily="var(--font-sans)">day better than</text>
          <text x="14" y="82" fontSize="4.5" fill="#78350f" fontFamily="var(--font-sans)">the last. Congrats!</text>
          <text x="14" y="97" fontSize="4.5" fill="#a1a1a1" fontWeight="700" fontFamily="var(--font-sans)">- alex.p</text>
        </g>
        <g className="fc-svg-sticky-2">
          <rect x="76" y="52" width="64" height="54" rx="4" fill="#e0e7ff" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(2,108,79)"/>
          <text x="82" y="66" fontSize="5" fontWeight="700" fill="#3730a3" fontFamily="var(--font-sans)">A true company</text>
          <text x="82" y="74" fontSize="4.5" fill="#3730a3" fontFamily="var(--font-sans)">pillar. Here's to</text>
          <text x="82" y="82" fontSize="4.5" fill="#3730a3" fontFamily="var(--font-sans)">many more years!</text>
          <text x="82" y="97" fontSize="4.5" fill="#8baec4" fontWeight="700" fontFamily="var(--font-sans)">- nina.r</text>
        </g>
        <rect x="8" y="114" width="132" height="90" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}/>
        <text x="16" y="129" fontSize="7" fill="#1f2937" fontWeight="800" fontFamily="var(--font-sans)">CONTRIBUTORS (22)</text>
        <line x1="8" y1="134" x2="140" y2="134" stroke="#f3f4f6" strokeWidth="1"/>
        {[
          { init: "A", name: "Alex Park",   role: "Creator", color: "#7c3aed", bg: "#ede9fe", y: 149 },
          { init: "N", name: "Nina Rao",    role: "Signed",  color: "#10b981", bg: "#d1fae5", y: 163 },
          { init: "M", name: "Matt Chen",   role: "Signed",  color: "#10b981", bg: "#d1fae5", y: 177 },
          { init: "Z", name: "Zara Adams",  role: "Invited", color: "#6b7280", bg: "#f3f4f6", y: 191 }
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
    label: "Award Plaque",
    tag: "Keepsake",
    desc: "Premium printed award plaque and milestone book shipped to their desk",
    accent: "#4f46e5",
    bg: "linear-gradient(145deg,#eef2ff,#e0e7ff)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#eef2ff" opacity="0.5"/>
        <rect width="148" height="42" fill="#4f46e5"/>
        <text x="74" y="26" fontSize="8" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">AWARD PLAQUE</text>
        {/* Plaque */}
        <rect x="24" y="54" width="100" height="96" rx="6" fill="#f5f0dc" style={{ filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.14))" }}/>
        <rect x="24" y="54" width="100" height="96" rx="6" fill="none" stroke="#c9a84c" strokeWidth="3"/>
        <rect x="32" y="62" width="84" height="80" rx="4" fill="none" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
        {/* Star */}
        <polygon points="74,72 77,81 86,81 79,87 82,96 74,90 66,96 69,87 62,81 71,81" fill="#c9a84c"/>
        <text x="74" y="105" fontSize="6" fill="#5b21b6" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">WORK ANNIVERSARY</text>
        <text x="74" y="115" fontSize="9" fill="#7c3aed" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">5 YEARS</text>
        <text x="74" y="125" fontSize="5" fill="#78716c" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Jamie Collins</text>
        <rect x="42" y="132" width="64" height="1.5" rx="1" fill="#c9a84c" opacity="0.5"/>
        <text x="74" y="143" fontSize="4.5" fill="#9ca3af" fontWeight="500" textAnchor="middle" fontFamily="var(--font-sans)">WorkKudo Inc. · 2024</text>
        {/* Confetti stars */}
        <path d="M16,72 L17.5,76 L21,76 L18.5,78 L19.5,82 L16,80 L12.5,82 L13.5,78 L11,76 L14.5,76 Z" fill="#f59e0b" opacity="0.7"/>
        <path d="M130,80 L131,83 L134,83 L132,85 L133,88 L130,86 L127,88 L128,85 L126,83 L129,83 Z" fill="#7c3aed" opacity="0.7"/>
        {/* Shipping detail */}
        <rect x="8" y="162" width="132" height="40" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.06))" }}/>
        <text x="16" y="176" fontSize="5.5" fill="#4f46e5" fontWeight="800" fontFamily="var(--font-sans)">DELIVERY DETAILS</text>
        <text x="16" y="188" fontSize="5" fill="#9ca3af" fontFamily="var(--font-sans)">Shipped to: Jamie Collins · Jun 2026</text>
        <circle cx="130" cy="178" r="6" fill="#eef2ff"/>
        <path d="M127.5,178 L129,179.5 L132.5,175.5" stroke="#4f46e5" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    step: 4,
    label: "Celebrate!",
    tag: "Share & Reveal",
    desc: "Share a private link, export as PDF and celebrate the milestone together",
    accent: "#f59e0b",
    bg: "linear-gradient(145deg,#fffbeb,#fef3c7)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="wm4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b"/>
            <stop offset="100%" stopColor="#7c3aed"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#fffbeb" opacity="0.5"/>
        <rect width="148" height="42" fill="url(#wm4)"/>
        <text x="74" y="26" fontSize="8.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">CELEBRATE! 🎊</text>
        <rect x="8" y="50" width="132" height="72" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.06))" }}/>
        <rect x="14" y="60" width="80" height="14" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
        <text x="20" y="69" fontSize="5" fill="#9ca3af" fontFamily="var(--font-sans)">workkudo.com/b/jamie-5yrs</text>
        <g className="fc-svg-copy-btn">
          <rect x="98" y="60" width="36" height="14" rx="4" fill="#7c3aed"/>
          <text x="116" y="69" fontSize="5.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">COPY LINK</text>
        </g>
        <rect x="14" y="82" width="120" height="32" rx="6" fill="#fdfdfd" stroke="#e5e7eb" strokeWidth="1"/>
        <rect x="20" y="88" width="50" height="11" rx="3" fill="#fef3c7"/>
        <text x="45" y="95" fontSize="5" fill="#92400e" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💾 DOWNLOAD PDF</text>
        <rect x="78" y="88" width="50" height="11" rx="3" fill="#ede9fe"/>
        <text x="103" y="95" fontSize="5" fill="#5b21b6" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💌 SEND EMAIL</text>
        <circle cx="24" cy="108" r="3" fill="#f59e0b"/>
        <text x="32" y="110.5" fontSize="5" fill="#374151" fontWeight="700" fontFamily="var(--font-sans)">Board remains active forever</text>
        {/* Confetti burst */}
        {[
          { x: 32, y: 134, color: "#7c3aed" }, { x: 48, y: 128, color: "#f59e0b" },
          { x: 64, y: 138, color: "#10b981" }, { x: 80, y: 125, color: "#ef4444" },
          { x: 96, y: 136, color: "#7c3aed" }, { x: 112, y: 130, color: "#f59e0b" },
          { x: 40, y: 150, color: "#4f46e5" }, { x: 72, y: 155, color: "#f59e0b" },
          { x: 104, y: 148, color: "#10b981" },
        ].map((d, i) => (
          <rect key={i} x={d.x} y={d.y} width="5" height="5" rx="1" fill={d.color} opacity="0.75" transform={`rotate(${i*25},${d.x+2.5},${d.y+2.5})`}/>
        ))}
        <text x="74" y="180" fontSize="26" textAnchor="middle" fontFamily="var(--font-sans)">🏆</text>
        <text x="74" y="202" fontSize="6" fill="#7c3aed" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">CONGRATULATIONS!</text>
      </svg>
    ),
  },
];

// ─── SPEEDY RECOVERY CARDS DATA ───
const speedyRecoveryCards = [
  {
    step: 1,
    label: "Create Board",
    tag: "Dashboard",
    desc: "Start a cheerful get-well board and set up the recipient",
    accent: "#10b981",
    bg: "linear-gradient(145deg,#ecfdf5,#d1fae5)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="sr1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981"/>
            <stop offset="100%" stopColor="#059669"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#ecfdf5" opacity="0.5"/>
        <path d="M0,0 H148 V72 Q74,92 0,72 Z" fill="url(#sr1)"/>
        {/* Heart with medical cross */}
        <path d="M74,38 C74,38 62,28 56,34 C50,40 54,52 74,62 C94,52 98,40 92,34 C86,28 74,38 74,38 Z" fill="white" opacity="0.9"/>
        <rect x="70" y="40" width="8" height="2.5" rx="1" fill="#10b981"/>
        <rect x="72.5" y="38" width="3" height="7" rx="1" fill="#10b981"/>
        <text x="74" y="62" fontSize="6.5" fill="white" fontWeight="700" textAnchor="middle" letterSpacing="0.05em" fontFamily="var(--font-sans)">GET WELL BOARD</text>
        <rect x="8" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="28" y="99" fontSize="10" fill="#10b981" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">1</text>
        <text x="28" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Board</text>
        <rect x="54" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="74" y="99" fontSize="10" fill="#059669" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">28</text>
        <text x="74" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Posts</text>
        <rect x="100" y="86" width="40" height="34" rx="6" fill="white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}/>
        <text x="120" y="99" fontSize="10" fill="#0d9488" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">19</text>
        <text x="120" y="112" fontSize="5.5" fill="#6b7280" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">Signed</text>
        <rect x="8" y="132" width="132" height="70" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <rect x="8" y="132" width="132" height="20" rx="8" fill="url(#sr1)"/>
        <rect x="8" y="146" width="132" height="6" fill="white"/>
        <text x="14" y="144" fontSize="6.5" fill="white" fontWeight="800" fontFamily="var(--font-sans)">Get Well Board</text>
        <circle cx="20" cy="164" r="8" fill="#ecfdf5"/>
        <text x="20" y="167.5" fontSize="9.5" fill="#10b981" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">S</text>
        <text x="32" y="163" fontSize="7" fill="#1f2937" fontWeight="700" fontFamily="var(--font-sans)">For Sam Rivera</text>
        <text x="32" y="170" fontSize="5.5" fill="#9ca3af" fontFamily="var(--font-sans)">Feel better soon!</text>
        <rect x="16" y="180" width="116" height="14" rx="5" fill="#10b981"/>
        <text x="74" y="189" fontSize="6.5" fill="white" fontWeight="700" textAnchor="middle" fontFamily="var(--font-sans)">Open Board</text>
      </svg>
    ),
  },
  {
    step: 2,
    label: "Gather Wishes",
    tag: "Collaborate",
    desc: "Collect warm get-well messages, fun GIFs and encouraging words from the team",
    accent: "#0d9488",
    bg: "linear-gradient(145deg,#f0fdfa,#ccfbf1)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#f0fdfa" opacity="0.4"/>
        <rect width="148" height="42" fill="#0d9488"/>
        <text x="74" y="26" fontSize="8" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">GATHER WISHES</text>
        <g className="fc-svg-sticky-1">
          <rect x="8" y="52" width="62" height="54" rx="4" fill="#fef9c3" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(-3,39,79)"/>
          <text x="14" y="66" fontSize="5" fontWeight="700" fill="#78350f" fontFamily="var(--font-sans)">Wishing you a</text>
          <text x="14" y="74" fontSize="4.5" fill="#78350f" fontFamily="var(--font-sans)">speedy recovery!</text>
          <text x="14" y="82" fontSize="4.5" fill="#78350f" fontFamily="var(--font-sans)">Miss you on team!</text>
          <text x="14" y="97" fontSize="4.5" fill="#a1a1a1" fontWeight="700" fontFamily="var(--font-sans)">- jade.m</text>
        </g>
        <g className="fc-svg-sticky-2">
          <rect x="76" y="52" width="64" height="54" rx="4" fill="#dcfce7" style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.08))" }} transform="rotate(2,108,79)"/>
          <text x="82" y="66" fontSize="5" fontWeight="700" fill="#166534" fontFamily="var(--font-sans)">Rest up and take</text>
          <text x="82" y="74" fontSize="4.5" fill="#166534" fontFamily="var(--font-sans)">care. The office is</text>
          <text x="82" y="82" fontSize="4.5" fill="#166534" fontFamily="var(--font-sans)">rooting for you!</text>
          <text x="82" y="97" fontSize="4.5" fill="#8baec4" fontWeight="700" fontFamily="var(--font-sans)">- carlos.v</text>
        </g>
        <rect x="8" y="114" width="132" height="90" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}/>
        <text x="16" y="129" fontSize="7" fill="#1f2937" fontWeight="800" fontFamily="var(--font-sans)">CONTRIBUTORS (19)</text>
        <line x1="8" y1="134" x2="140" y2="134" stroke="#f3f4f6" strokeWidth="1"/>
        {[
          { init: "J", name: "Jade Morris",   role: "Creator", color: "#10b981", bg: "#d1fae5", y: 149 },
          { init: "C", name: "Carlos Vega",   role: "Signed",  color: "#10b981", bg: "#d1fae5", y: 163 },
          { init: "Y", name: "Yuki Tanaka",   role: "Signed",  color: "#10b981", bg: "#d1fae5", y: 177 },
          { init: "P", name: "Preet Singh",   role: "Invited", color: "#6b7280", bg: "#f3f4f6", y: 191 }
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
    label: "Wellness Gift",
    tag: "Keepsake",
    desc: "A printed get-well card with a curated wellness gift delivered to their door",
    accent: "#059669",
    bg: "linear-gradient(145deg,#ecfdf5,#a7f3d0)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <rect width="148" height="210" fill="#ecfdf5" opacity="0.5"/>
        <rect width="148" height="42" fill="#059669"/>
        <text x="74" y="26" fontSize="8" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">WELLNESS GIFT</text>
        {/* Gift basket */}
        <ellipse cx="74" cy="142" rx="48" ry="22" fill="#d1fae5" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.08))" }}/>
        <rect x="26" y="110" width="96" height="34" rx="4" fill="#a7f3d0" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}/>
        {/* Weave lines */}
        {[0,1,2,3].map(i => (
          <line key={i} x1={38 + i*22} y1="110" x2={38 + i*22} y2="144" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6"/>
        ))}
        {/* Items in basket */}
        <rect x="38" y="90" width="16" height="22" rx="4" fill="#34d399"/>
        <rect x="38" y="88" width="16" height="6" rx="2" fill="#10b981"/>
        <text x="46" y="104" fontSize="5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">TEA</text>
        <ellipse cx="74" cy="97" rx="10" ry="14" fill="#fde68a"/>
        <text x="74" y="100" fontSize="8" textAnchor="middle" fontFamily="var(--font-sans)">🍊</text>
        <rect x="92" y="88" width="16" height="24" rx="4" fill="#a78bfa"/>
        <text x="100" y="100" fontSize="6" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💊</text>
        {/* Get well card */}
        <g className="fc-svg-card">
          <rect x="34" y="54" width="80" height="52" rx="4" fill="white" style={{ filter: "drop-shadow(0 -3px 6px rgba(0,0,0,0.08))" }}/>
          <path d="M74,66 C74,66 68,60 63,63 C58,66 61,74 74,80 C87,74 90,66 85,63 C80,60 74,66 74,66 Z" fill="#fca5a5" opacity="0.7"/>
          <text x="74" y="92" fontSize="6.5" fill="#059669" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">Get Well Soon!</text>
        </g>
        {/* Stars */}
        <path d="M22,66 L23.5,70 L27,70 L24.5,72 L25.5,76 L22,74 L18.5,76 L19.5,72 L17,70 L20.5,70 Z" fill="#10b981" opacity="0.7"/>
        <path d="M126,72 L127,75 L130,75 L128,77 L129,80 L126,78.5 L123,80 L124,77 L122,75 L125,75 Z" fill="#059669" opacity="0.7"/>
      </svg>
    ),
  },
  {
    step: 4,
    label: "Share & Cheer",
    tag: "Reveal",
    desc: "Send a private link or heartfelt email to lift their spirits instantly",
    accent: "#10b981",
    bg: "linear-gradient(145deg,#ecfdf5,#d1fae5)",
    svg: (
      <svg viewBox="0 0 148 210" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
        <defs>
          <linearGradient id="sr4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981"/>
            <stop offset="100%" stopColor="#0d9488"/>
          </linearGradient>
        </defs>
        <rect width="148" height="210" fill="#ecfdf5" opacity="0.5"/>
        <rect width="148" height="42" fill="url(#sr4)"/>
        <text x="74" y="26" fontSize="8" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">SHARE & CHEER</text>
        <rect x="8" y="50" width="132" height="72" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.06))" }}/>
        <rect x="14" y="60" width="80" height="14" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1"/>
        <text x="20" y="69" fontSize="5" fill="#9ca3af" fontFamily="var(--font-sans)">workkudo.com/b/sam-getwellsoon</text>
        <g className="fc-svg-copy-btn">
          <rect x="98" y="60" width="36" height="14" rx="4" fill="#10b981"/>
          <text x="116" y="69" fontSize="5.5" fill="white" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">COPY LINK</text>
        </g>
        <rect x="14" y="82" width="120" height="32" rx="6" fill="#fdfdfd" stroke="#e5e7eb" strokeWidth="1"/>
        <rect x="20" y="88" width="50" height="11" rx="3" fill="#ecfdf5"/>
        <text x="45" y="95" fontSize="5" fill="#059669" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💾 DOWNLOAD PDF</text>
        <rect x="78" y="88" width="50" height="11" rx="3" fill="#f0fdfa"/>
        <text x="103" y="95" fontSize="5" fill="#0d9488" fontWeight="800" textAnchor="middle" fontFamily="var(--font-sans)">💌 SEND EMAIL</text>
        <circle cx="24" cy="108" r="3" fill="#10b981"/>
        <text x="32" y="110.5" fontSize="5" fill="#374151" fontWeight="700" fontFamily="var(--font-sans)">Board stays active forever</text>
        <rect x="8" y="130" width="132" height="72" rx="8" fill="white" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.06))" }}/>
        <text x="16" y="145" fontSize="6.5" fill="#10b981" fontWeight="800" fontFamily="var(--font-sans)">CHEER CHECKLIST</text>
        <line x1="8" y1="150" x2="140" y2="150" stroke="#f3f4f6" strokeWidth="1"/>
        {[
          { text: "Share private link via Slack / Teams", y: 163 },
          { text: "Download high-res print-ready PDF",    y: 176 },
          { text: "Schedule a cheerful email delivery",   y: 189 },
        ].map((item, idx) => (
          <g key={item.y}>
            <circle cx="18" cy={item.y - 2} r="3.5" fill="#d1fae5"/>
            <path d="M16.5,161 L17.5,162 L19.5,160" stroke="#10b981" strokeWidth="0.8" strokeLinecap="round" fill="none" transform={`translate(0,${item.y-163})`}/>
            <text x="26" y={item.y.toString()} fontSize="5" fill="#4b5563" fontWeight="600" fontFamily="var(--font-sans)">{item.text}</text>
          </g>
        ))}
      </svg>
    ),
  },
];

// Helper to determine active list and gradient configs
const getPageConfig = (pageType) => {
  switch (pageType) {
    case "birthday":
      return {
        cards: birthdayCards,
        title: "How it works",
        subtitle: "Four simple steps to create a memorable group card",
        gradients: ["#ff7675", "#fdcb6e", "#00b894", "#6c5ce7"],
      };
    case "appreciation":
      return {
        cards: appreciationCards,
        title: "How it works",
        subtitle: "Four simple steps to capture meaningful appreciation",
        gradients: ["#00b894", "#7c3aed", "#fdcb6e", "#ff7675"],
      };
    case "retirement":
      return {
        cards: retirementCards,
        title: "How it works",
        subtitle: "Four golden steps to honour a lifetime of dedication",
        gradients: ["#e6a817", "#c0392b", "#1a6b47", "#7c3aed"],
      };
    case "condolence":
      return {
        cards: condolenceCards,
        title: "How it works",
        subtitle: "Four gentle steps to create a heartfelt tribute for those who grieve",
        gradients: ["#4a6fa5", "#7c8ba8", "#5a7a6e", "#4a6fa5"],
      };
    case "work-milestone":
      return {
        cards: workMilestoneCards,
        title: "How it works",
        subtitle: "Four powerful steps to celebrate a career milestone worth remembering",
        gradients: ["#7c3aed", "#5b21b6", "#4f46e5", "#f59e0b"],
      };
    case "speedy-recovery":
      return {
        cards: speedyRecoveryCards,
        title: "How it works",
        subtitle: "Four cheerful steps to lift someone's spirits and help them heal faster",
        gradients: ["#10b981", "#0d9488", "#059669", "#10b981"],
      };
    case "send-off":
    default:
      return {
        cards: sendOffCards,
        title: "How it works",
        subtitle: "Four simple steps to create the perfect farewell",
        gradients: ["#e84393", "#7c3aed", "#1a6b47", "#ff5722"],
      };
  }
};

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

export default function FeatureCards({ pageType = "send-off" }) {
  const [hovered, setHovered] = useState(null);
  const config = getPageConfig(pageType);
  const cards = config.cards;

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
        {config.title}
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
        {config.subtitle}
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
            <linearGradient id="connector-grad-shared" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={config.gradients[0]} />
              <stop offset="33%" stopColor={config.gradients[1]} />
              <stop offset="66%" stopColor={config.gradients[2]} />
              <stop offset="100%" stopColor={config.gradients[3]} />
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
            stroke="url(#connector-grad-shared)"
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
