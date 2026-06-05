import { useState, useEffect, useRef } from "react";
import "./MemoryMap.css";

// ─── PINS DATA FOR SEND-OFF ───
const sendOffPins = [
  {
    id: "ny",
    name: "Aakash M.",
    role: "Lead Engineer",
    location: "New York, USA",
    avatar: "A",
    color: "#e84393",
    msg: "Good luck on the new adventure! You've been a rockstar mentor and collaborator. The engineering team won't be the same without your whiteboarding sessions!",
    time: "2 hours ago",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "london",
    name: "Emma W.",
    role: "UX Designer",
    location: "London, UK",
    avatar: "E",
    color: "#7c3aed",
    msg: "Cheerio, mate! The London design crew is going to miss your brilliant ideas and positive vibes. Best of luck with the next step, let's stay in touch!",
    time: "4 hours ago",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "lagos",
    name: "Chidi O.",
    role: "API Architect",
    location: "Lagos, Nigeria",
    avatar: "C",
    color: "#1a6b47",
    msg: "Your code was always clean and your guidance inspiring. Thank you for always unblocking us on the API integrations. Wishing you all the best in your next chapter!",
    time: "6 hours ago",
    lat: 6.5244,
    lng: 3.3792,
  },
  {
    id: "tokyo",
    name: "Kenji T.",
    role: "Regional Director",
    location: "Tokyo, Japan",
    avatar: "K",
    color: "#ff5722",
    msg: "Thank you for supporting our Japan regional launch! We couldn't have done it without your late-night reviews. Wishing you massive success!",
    time: "1 day ago",
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    id: "sydney",
    name: "Chloe L.",
    role: "Product Manager",
    location: "Sydney, Australia",
    avatar: "C",
    color: "#00b894",
    msg: "It was an absolute pleasure working together across the timezones. Safe travels and congratulations on this exciting new opportunity!",
    time: "2 days ago",
    lat: -33.8688,
    lng: 151.2093,
  },
];

// ─── PINS DATA FOR BIRTHDAY ───
const birthdayPins = [
  {
    id: "ny",
    name: "Sarah K.",
    role: "Project Manager",
    location: "New York, USA",
    avatar: "S",
    color: "#ff7675",
    msg: "Happy Birthday! 🎂 Have an absolutely amazing day filled with joy, laughter, and lots of cake! The team is so lucky to have you leading us.",
    time: "1 hour ago",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "london",
    name: "Oliver P.",
    role: "Frontend Engineer",
    location: "London, UK",
    avatar: "O",
    color: "#fdcb6e",
    msg: "Cheers to another great trip around the sun! 🎈 Wishing you a brilliant birthday and an even better year ahead. Have a pint for me!",
    time: "3 hours ago",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "lagos",
    name: "Fatima A.",
    role: "Database Specialist",
    location: "Lagos, Nigeria",
    avatar: "F",
    color: "#00b894",
    msg: "Wishing you a wonderful birthday, my friend! May this year bring you endless happiness, good health, and major breakthroughs. Enjoy your day!",
    time: "5 hours ago",
    lat: 6.5244,
    lng: 3.3792,
  },
  {
    id: "tokyo",
    name: "Yuki H.",
    role: "QA Lead",
    location: "Tokyo, Japan",
    avatar: "Y",
    color: "#6c5ce7",
    msg: "Happy Birthday! 🌸 Hope you have a wonderful celebration. Thank you for always being so helpful and patient. Let's eat lots of cake!",
    time: "12 hours ago",
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    id: "sydney",
    name: "Liam M.",
    role: "Content Creator",
    location: "Sydney, Australia",
    avatar: "L",
    color: "#ff7675",
    msg: "Happy Birthday from sunny Sydney! 🐨 Sending you the warmest wishes for a fantastic day. Hope you get spoiled rotten today!",
    time: "1 day ago",
    lat: -33.8688,
    lng: 151.2093,
  },
];

// ─── PINS DATA FOR APPRECIATION ───
const appreciationPins = [
  {
    id: "ny",
    name: "Sarah K.",
    role: "Project Manager",
    location: "New York, USA",
    avatar: "S",
    color: "#00b894",
    msg: "Thank you for all the help! 🌟 You always go the extra mile to unblock the team, and we really appreciate your support in resolving project blockers.",
    time: "1 hour ago",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "london",
    name: "Oliver P.",
    role: "Frontend Engineer",
    location: "London, UK",
    avatar: "O",
    color: "#7c3aed",
    msg: "Working with you is an absolute pleasure. Your positive attitude and brilliant layouts make a huge difference. Thanks for the team support!",
    time: "3 hours ago",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "lagos",
    name: "Fatima A.",
    role: "Database Specialist",
    location: "Lagos, Nigeria",
    avatar: "F",
    color: "#fdcb6e",
    msg: "A massive thank you for mentoring me on the database schema designs and queries. You are an incredible teacher and peer!",
    time: "5 hours ago",
    lat: 6.5244,
    lng: 3.3792,
  },
  {
    id: "tokyo",
    name: "Yuki H.",
    role: "QA Lead",
    location: "Tokyo, Japan",
    avatar: "Y",
    color: "#ff7675",
    msg: "Thank you for supporting the QA launch and keeping our standards high! Your attention to detail is outstanding, and we appreciate it.",
    time: "12 hours ago",
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    id: "sydney",
    name: "Liam M.",
    role: "Content Creator",
    location: "Sydney, Australia",
    avatar: "L",
    color: "#00b894",
    msg: "I truly appreciate your creative energy and collaboration on our latest campaigns. Thank you for being such an awesome teammate!",
    time: "1 day ago",
    lat: -33.8688,
    lng: 151.2093,
  },
];

// ─── PINS DATA FOR RETIREMENT ───
const retirementPins = [
  {
    id: "ny",
    name: "Priya Sharma",
    role: "Department Head",
    location: "New York, USA",
    avatar: "P",
    color: "#e6a817",
    msg: "Robert, 30 incredible years! The entire New York office is going to miss your mentorship and legendary Friday evening stories. Wishing you the most golden retirement!",
    time: "1 hour ago",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "london",
    name: "Dev Tiwari",
    role: "Senior Engineer",
    location: "London, UK",
    avatar: "D",
    color: "#c0392b",
    msg: "Enjoy the next chapter! You've given so much to this company over the decades. London will never forget your contributions to the global expansion. Cheers to you!",
    time: "3 hours ago",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "mumbai",
    name: "Anjali Roy",
    role: "Operations Lead",
    location: "Mumbai, India",
    avatar: "A",
    color: "#1a6b47",
    msg: "You were a guiding star for so many of us in the Mumbai team. Your patience, your wisdom, and your work ethic are unmatched. Enjoy every moment of retirement!",
    time: "6 hours ago",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "tokyo",
    name: "Kenji T.",
    role: "Regional Director",
    location: "Tokyo, Japan",
    avatar: "K",
    color: "#7c3aed",
    msg: "From Tokyo with so much appreciation! You supported our regional office from day one. Your leadership made our success possible. Congratulations and enjoy your rest!",
    time: "12 hours ago",
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    id: "sydney",
    name: "Chloe L.",
    role: "Product Manager",
    location: "Sydney, Australia",
    avatar: "C",
    color: "#f97316",
    msg: "The Sydney crew is raising a glass to you! Thank you for everything you've built and the team culture you nurtured. We'll carry your legacy forward. Enjoy the beach!",
    time: "1 day ago",
    lat: -33.8688,
    lng: 151.2093,
  },
];

// ─── PINS DATA FOR CONDOLENCE ───
const condolencePins = [
  {
    id: "ny",
    name: "Sarah Kim",
    role: "Team Lead",
    location: "New York, USA",
    avatar: "S",
    color: "#4a6fa5",
    msg: "Michael touched so many lives here in New York. His kindness, patience, and brilliant mind made our office a better place every single day. We hold you and your family in our hearts.",
    time: "2 hours ago",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "london",
    name: "Tom Brown",
    role: "Senior Developer",
    location: "London, UK",
    avatar: "T",
    color: "#7c8ba8",
    msg: "Sending our deepest condolences from the London team. Michael was a wonderful colleague and an even better human being. He will be truly missed by everyone who was lucky enough to know him.",
    time: "4 hours ago",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "lagos",
    name: "Amara D.",
    role: "Product Designer",
    location: "Lagos, Nigeria",
    avatar: "A",
    color: "#5a7a6e",
    msg: "Our thoughts are with you and your loved ones during this incredibly difficult time. Michael's warmth and generosity will live on in all of us who had the privilege of working alongside him.",
    time: "8 hours ago",
    lat: 6.5244,
    lng: 3.3792,
  },
  {
    id: "berlin",
    name: "Lena M.",
    role: "Data Analyst",
    location: "Berlin, Germany",
    avatar: "L",
    color: "#6b8cba",
    msg: "From Berlin, we send our heartfelt sympathies. Michael's contributions to the project and to our team culture were invaluable. May his memory be a source of comfort and peace for everyone.",
    time: "12 hours ago",
    lat: 52.52,
    lng: 13.405,
  },
  {
    id: "sydney",
    name: "James O.",
    role: "Engineering Manager",
    location: "Sydney, Australia",
    avatar: "J",
    color: "#4a6fa5",
    msg: "The Sydney office is grieving alongside you. Michael was a beacon of positivity and professionalism. We will carry his legacy of kindness and dedication in everything we do going forward.",
    time: "1 day ago",
    lat: -33.8688,
    lng: 151.2093,
  },
];

// ─── PINS DATA FOR WORK MILESTONE ───
const workMilestonePins = [
  {
    id: "ny",
    name: "Alex Park",
    role: "Engineering Lead",
    location: "New York, USA",
    avatar: "A",
    color: "#7c3aed",
    msg: "Jamie, 5 years of incredible work! You have been a cornerstone of our New York team. Every project you touched came out better. Here's to the next 5 and beyond — congratulations!",
    time: "1 hour ago",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "london",
    name: "Nina Rao",
    role: "Product Manager",
    location: "London, UK",
    avatar: "N",
    color: "#5b21b6",
    msg: "Five brilliant years! Working with you across timezones has been such a pleasure. Your dedication, creativity and positivity make this company a truly great place. Huge congratulations!",
    time: "3 hours ago",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "singapore",
    name: "Wei L.",
    role: "Regional Sales Director",
    location: "Singapore",
    avatar: "W",
    color: "#4f46e5",
    msg: "Half a decade of excellence! The Singapore office celebrates with you. Your work on the APAC expansion was pivotal. A big congratulations from all of us here — keep shining!",
    time: "6 hours ago",
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    id: "toronto",
    name: "Matt Chen",
    role: "Data Scientist",
    location: "Toronto, Canada",
    avatar: "M",
    color: "#f59e0b",
    msg: "Congratulations on 5 years! Every hackathon, every sprint, every late night — you always brought your A-game. Toronto is proud to have worked with you. Here's to many more milestones!",
    time: "10 hours ago",
    lat: 43.6511,
    lng: -79.3834,
  },
  {
    id: "sydney",
    name: "Zara Adams",
    role: "UX Researcher",
    location: "Sydney, Australia",
    avatar: "Z",
    color: "#7c3aed",
    msg: "5 years and still the most enthusiastic person in every meeting! Sydney sends massive congratulations. Your passion for the product and care for the team is truly unmatched. Cheers!",
    time: "1 day ago",
    lat: -33.8688,
    lng: 151.2093,
  },
];

// Configuration selector
const getMapConfig = (pageType) => {
  switch (pageType) {
    case "birthday":
      return {
        pins: birthdayPins,
        badgeText: "Worldwide Wishes",
        title: "Global Birthday Memory Map",
        subtitle: "Celebrate colleagues around the globe. Watch remote teammates in Tokyo, London, Lagos, and beyond light up the map with warm birthday greetings!",
        badgeBg: "rgba(255, 118, 117, 0.08)",
        badgeColor: "#ff7675",
        badgeBorder: "rgba(255, 118, 117, 0.15)",
        reactions: { "🎂": 15, "🎉": 22, "🥳": 18, "🎁": 12 }
      };
    case "appreciation":
      return {
        pins: appreciationPins,
        badgeText: "Team Recognition",
        title: "Appreciation Memory Map",
        subtitle: "Show appreciation across borders. Watch global colleagues in New York, London, Lagos, and Tokyo light up the map with messages of gratitude!",
        badgeBg: "rgba(0, 184, 148, 0.08)",
        badgeColor: "#00b894",
        badgeBorder: "rgba(0, 184, 148, 0.15)",
        reactions: { "💌": 24, "👏": 18, "🌟": 30, "👍": 15 }
      };
    case "retirement":
      return {
        pins: retirementPins,
        badgeText: "Worldwide Tributes",
        title: "Retirement Memory Map",
        subtitle: "Colleagues across the globe honour decades of dedication. Watch heartfelt tributes light up from New York, London, Mumbai, Tokyo, and beyond!",
        badgeBg: "rgba(230, 168, 23, 0.08)",
        badgeColor: "#e6a817",
        badgeBorder: "rgba(230, 168, 23, 0.2)",
        reactions: { "🌴": 18, "🥂": 14, "🏆": 22, "❤️": 30 }
      };
    case "condolence":
      return {
        pins: condolencePins,
        badgeText: "Messages of Comfort",
        title: "Global Condolence Map",
        subtitle: "Compassionate colleagues from around the world share their words of comfort and cherished memories to support those who grieve.",
        badgeBg: "rgba(74, 111, 165, 0.08)",
        badgeColor: "#4a6fa5",
        badgeBorder: "rgba(74, 111, 165, 0.18)",
        reactions: { "💙": 24, "💖": 18, "🕊️": 20, "💫": 15 }
      };
    case "work-milestone":
      return {
        pins: workMilestonePins,
        badgeText: "Global Celebrations",
        title: "Work Milestone Memory Map",
        subtitle: "Colleagues from New York to Singapore, Toronto to Sydney celebrate a career milestone. Watch the world light up with pride and congratulations!",
        badgeBg: "rgba(124, 58, 237, 0.08)",
        badgeColor: "#7c3aed",
        badgeBorder: "rgba(124, 58, 237, 0.2)",
        reactions: { "🏆": 22, "🎉": 18, "⭐": 28, "👏": 20 }
      };
    case "send-off":
    default:
      return {
        pins: sendOffPins,
        badgeText: "Worldwide Connections",
        title: "Global Memory Map",
        subtitle: "Remote colleagues in Tokyo, London, Lagos, and beyond show up as glowing dots on an interactive map. Tap on a pin or reaction card to engage.",
        badgeBg: "rgba(124, 58, 237, 0.08)",
        badgeColor: "var(--navy)",
        badgeBorder: "rgba(124, 58, 237, 0.15)",
        reactions: { "💖": 12, "🎉": 8, "👏": 15, "👍": 10 }
      };
  }
};

export default function MemoryMap({ pageType = "send-off" }) {
  const config = getMapConfig(pageType);
  const pins = config.pins;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reactionsState, setReactionsState] = useState(
    pins.map(() => ({ ...config.reactions }))
  );

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const polylineGroupRef = useRef(null);
  const timerRef = useRef(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  // Keep references to state updates fresh for Leaflet callbacks
  const onPinClickRef = useRef(null);
  onPinClickRef.current = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const onPinHoverRef = useRef(null);
  onPinHoverRef.current = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const onPinLeaveRef = useRef(null);
  onPinLeaveRef.current = () => {
    setIsPlaying(true);
  };

  // Reset reactions state if type changes
  useEffect(() => {
    setReactionsState(pins.map(() => ({ ...config.reactions })));
    setActiveIndex(0);
  }, [pageType]);

  // Autoplay slideshow cycling through the pins
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % pins.length);
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, pins.length]);

  // Dynamically load Leaflet CDN assets
  useEffect(() => {
    let cssLink = document.getElementById("leaflet-css");
    if (!cssLink) {
      cssLink = document.createElement("link");
      cssLink.id = "leaflet-css";
      cssLink.rel = "stylesheet";
      cssLink.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(cssLink);
    }

    let scriptTag = document.getElementById("leaflet-js");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "leaflet-js";
      scriptTag.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      scriptTag.async = true;
      scriptTag.onload = () => {
        setLeafletLoaded(true);
      };
      document.body.appendChild(scriptTag);
    } else if (window.L) {
      setLeafletLoaded(true);
    }
  }, []);

  // Update Leaflet Map state when activeIndex changes
  useEffect(() => {
    if (!mapRef.current || activeIndex === null || activeIndex >= pins.length) return;
    updateMapState(activeIndex);
  }, [activeIndex, pins]);

  const updateMapState = (index) => {
    const activePin = pins[index];
    const map = mapRef.current;
    if (!map || !activePin) return;

    // 1. Center map on active pin
    map.flyTo([activePin.lat, activePin.lng], 3.2, {
      animate: true,
      duration: 1.2,
    });

    // 2. Redraw dashed connecting lines
    if (polylineGroupRef.current) {
      polylineGroupRef.current.clearLayers();
      pins.forEach((p, idx) => {
        if (idx === index) return;
        window.L.polyline(
          [[activePin.lat, activePin.lng], [p.lat, p.lng]],
          {
            color: activePin.color,
            weight: 2,
            dashArray: "6, 8",
            opacity: 0.6,
            className: "shared-leaflet-connector-line",
          }
        ).addTo(polylineGroupRef.current);
      });
    }

    // 3. Update active classes on marker elements
    markersRef.current.forEach((marker, idx) => {
      const el = marker.getElement();
      if (el) {
        if (idx === index) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      }
    });
  };

  // Initialize Map once Leaflet JS is fully loaded
  useEffect(() => {
    if (!leafletLoaded || !mapContainerRef.current || mapRef.current) return;

    // Create Leaflet Map Instance
    const map = window.L.map(mapContainerRef.current, {
      center: [20, 0],
      zoom: 2,
      zoomControl: false,
      attributionControl: false,
      minZoom: 1.5,
      maxZoom: 8,
      worldCopyJump: true,
    });

    // Use CartoDB Positron greyscale tiles for premium dashboard aesthetic
    window.L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    const polylineGroup = window.L.layerGroup().addTo(map);
    polylineGroupRef.current = polylineGroup;

    const markerList = [];
    pins.forEach((pin, idx) => {
      // Build custom DivIcon with pulse animation circles
      const iconHtml = `
        <div class="shared-leaflet-marker-wrapper">
          <div class="shared-leaflet-marker-sonar" style="border-color: ${pin.color}"></div>
          <div class="shared-leaflet-marker-dot" style="background: ${pin.color}; box-shadow: 0 0 10px ${pin.color}dd"></div>
        </div>
      `;

      const customIcon = window.L.divIcon({
        className: `shared-leaflet-custom-icon pin-${pin.id}`,
        html: iconHtml,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const marker = window.L.marker([pin.lat, pin.lng], { icon: customIcon }).addTo(map);

      marker.on("click", () => {
        if (onPinClickRef.current) onPinClickRef.current(idx);
      });

      marker.on("mouseover", () => {
        if (onPinHoverRef.current) onPinHoverRef.current(idx);
      });

      marker.on("mouseout", () => {
        if (onPinLeaveRef.current) onPinLeaveRef.current();
      });

      // Bind tooltip matching the design
      marker.bindTooltip(pin.location, {
        direction: "top",
        offset: [0, -10],
        className: "shared-leaflet-tooltip",
      });

      markerList.push(marker);
    });

    markersRef.current = markerList;
    mapRef.current = map;

    // Trigger initial load rendering
    updateMapState(activeIndex);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [leafletLoaded, pins]);

  const handleReact = (emoji) => {
    setReactionsState((prev) => {
      const updated = [...prev];
      if (!updated[activeIndex]) return prev;
      updated[activeIndex] = {
        ...updated[activeIndex],
        [emoji]: (updated[activeIndex][emoji] || 0) + 1,
      };
      return updated;
    });
  };

  const handlePinClick = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const activePin = pins[activeIndex] || pins[0];

  return (
    <section className="shared-map-section" id="memory-map-shared">
      <div className="shared-map-container">
        
        {/* Title Header */}
        <header className="shared-map-header">
          <span 
            className="shared-map-badge"
            style={{
              background: config.badgeBg,
              color: config.badgeColor,
              borderColor: config.badgeBorder
            }}
          >
            {config.badgeText}
          </span>
          <h2 className="shared-map-title">{config.title}</h2>
          <p className="shared-map-subtitle">{config.subtitle}</p>
        </header>

        {/* Content Layout */}
        <div className="shared-map-layout">
          
          {/* Left Column: Interactive Map */}
          <div className="shared-map-wrapper">
            <div 
              ref={mapContainerRef} 
              id="shared-leaflet-world-map"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#f0f2f5",
              }}
            >
              {!leafletLoaded && (
                <div className="shared-map-loader">
                  <div className="shared-loader-spinner" style={{ borderTopColor: config.badgeColor }}></div>
                  <span>Loading Interactive Map...</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Card */}
          <div className="shared-map-card-panel">
            <div 
              className="shared-glass-card" 
              key={`${pageType}-${activeIndex}`}
              style={{
                border: `1px solid ${activePin.color}33`,
                boxShadow: `0 24px 50px rgba(26, 43, 74, 0.08), 0 0 20px ${activePin.color}08`,
              }}
            >
              {/* Giant watermark quote mark */}
              <span className="shared-card-quote-mark" style={{ color: `${activePin.color}0d` }}>“</span>

              {/* Header inside Card */}
              <div className="shared-glass-card-header">
                <div 
                  className="shared-card-avatar"
                  style={{
                    background: activePin.color,
                    boxShadow: `0 8px 20px ${activePin.color}44`,
                  }}
                >
                  {activePin.avatar}
                </div>
                <div className="shared-card-meta">
                  <h4 className="shared-card-name">{activePin.name}</h4>
                  <div className="shared-card-meta-row">
                    <span className="shared-card-role-pill">{activePin.role}</span>
                    <span className="shared-card-location">📍 {activePin.location}</span>
                  </div>
                </div>
                <span className="shared-card-time">{activePin.time}</span>
              </div>

              {/* Message Content */}
              <div className="shared-glass-card-body">
                <p className="shared-card-msg">“ {activePin.msg} ”</p>
              </div>

              {/* Interactive Emoji Reactions */}
              <div className="shared-card-reactions">
                {reactionsState[activeIndex] && Object.entries(reactionsState[activeIndex]).map(([emoji, count]) => (
                  <button
                    key={emoji}
                    className="shared-reaction-btn"
                    onClick={() => handleReact(emoji)}
                    style={{
                      "--active-glow": activePin.color,
                    }}
                  >
                    <span className="shared-reaction-emoji">{emoji}</span>
                    <span className="shared-reaction-count">{count}</span>
                  </button>
                ))}
              </div>

              {/* Slideshow indicator dots */}
              <div className="shared-card-footer">
                <div className="shared-map-dots">
                  {pins.map((_, idx) => (
                    <button
                      key={idx}
                      className={`shared-map-dot ${idx === activeIndex ? "active" : ""}`}
                      onClick={() => handlePinClick(idx)}
                      style={{
                        background: idx === activeIndex ? activePin.color : "rgba(26, 43, 74, 0.12)",
                      }}
                      aria-label={`Show message ${idx + 1}`}
                    />
                  ))}
                </div>
                
                {/* Autoplay Pause / Play button */}
                <button 
                  className="shared-map-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isPlaying ? "⏸ Pause" : "▶ Autoplay"}
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
