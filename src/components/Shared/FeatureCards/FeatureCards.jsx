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
