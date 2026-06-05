import { useState, useEffect, useRef } from "react";
import "./BirthdayMemoryMap.css";

const pins = [
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

export default function BirthdayMemoryMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reactionsState, setReactionsState] = useState(
    pins.map(() => ({
      "🎂": 15,
      "🎉": 22,
      "🥳": 18,
      "🎁": 12,
    }))
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
  }, [isPlaying]);

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
    if (!mapRef.current || activeIndex === null) return;
    updateMapState(activeIndex);
  }, [activeIndex]);

  const updateMapState = (index) => {
    const activePin = pins[index];
    const map = mapRef.current;
    if (!map) return;

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
            className: "bd-leaflet-connector-line",
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
        <div class="bd-leaflet-marker-wrapper">
          <div class="bd-leaflet-marker-sonar" style="border-color: ${pin.color}"></div>
          <div class="bd-leaflet-marker-dot" style="background: ${pin.color}; box-shadow: 0 0 10px ${pin.color}dd"></div>
        </div>
      `;

      const customIcon = window.L.divIcon({
        className: `bd-leaflet-custom-icon pin-${pin.id}`,
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
        className: "bd-leaflet-tooltip",
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
  }, [leafletLoaded]);

  const handleReact = (emoji) => {
    setReactionsState((prev) => {
      const updated = [...prev];
      updated[activeIndex] = {
        ...updated[activeIndex],
        [emoji]: updated[activeIndex][emoji] + 1,
      };
      return updated;
    });
  };

  const handlePinClick = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const activePin = pins[activeIndex];

  return (
    <section className="bd-map-section" id="birthday-memory-map">
      <div className="bd-map-container">
        
        {/* Title Header */}
        <header className="bd-map-header">
          <span className="bd-map-badge">Worldwide Wishes</span>
          <h2 className="bd-map-title">Global Birthday Memory Map</h2>
          <p className="bd-map-subtitle">
            Celebrate colleagues around the globe. Watch remote teammates in Tokyo, London, Lagos, and beyond light up the map with warm birthday greetings!
          </p>
        </header>

        {/* Content Layout */}
        <div className="bd-map-layout">
          
          {/* Left Column: Interactive Map */}
          <div className="bd-map-wrapper">
            <div 
              ref={mapContainerRef} 
              id="bd-leaflet-world-map"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#f0f2f5",
              }}
            >
              {!leafletLoaded && (
                <div className="bd-map-loader">
                  <div className="bd-loader-spinner"></div>
                  <span>Loading Interactive Map...</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Card */}
          <div className="bd-map-card-panel">
            <div 
              className="bd-glass-card" 
              key={activeIndex}
              style={{
                border: `1px solid ${activePin.color}33`,
                boxShadow: `0 24px 50px rgba(26, 43, 74, 0.08), 0 0 20px ${activePin.color}08`,
              }}
            >
              {/* Giant watermark quote mark */}
              <span className="bd-card-quote-mark" style={{ color: `${activePin.color}0d` }}>“</span>

              {/* Header inside Card */}
              <div className="bd-glass-card-header">
                <div 
                  className="bd-card-avatar"
                  style={{
                    background: activePin.color,
                    boxShadow: `0 8px 20px ${activePin.color}44`,
                  }}
                >
                  {activePin.avatar}
                </div>
                <div className="bd-card-meta">
                  <h4 className="bd-card-name">{activePin.name}</h4>
                  <div className="bd-card-meta-row">
                    <span className="bd-card-role-pill">{activePin.role}</span>
                    <span className="bd-card-location">📍 {activePin.location}</span>
                  </div>
                </div>
                <span className="bd-card-time">{activePin.time}</span>
              </div>

              {/* Message Content */}
              <div className="bd-glass-card-body">
                <p className="bd-card-msg">“ {activePin.msg} ”</p>
              </div>

              {/* Interactive Emoji Reactions */}
              <div className="bd-card-reactions">
                {Object.entries(reactionsState[activeIndex]).map(([emoji, count]) => (
                  <button
                    key={emoji}
                    className="bd-reaction-btn"
                    onClick={() => handleReact(emoji)}
                    style={{
                      "--active-glow": activePin.color,
                    }}
                  >
                    <span className="bd-reaction-emoji">{emoji}</span>
                    <span className="bd-reaction-count">{count}</span>
                  </button>
                ))}
              </div>

              {/* Slideshow indicator dots */}
              <div className="bd-card-footer">
                <div className="bd-map-dots">
                  {pins.map((_, idx) => (
                    <button
                      key={idx}
                      className={`bd-map-dot ${idx === activeIndex ? "active" : ""}`}
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
                  className="bd-map-play-btn"
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
