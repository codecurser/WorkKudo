import { useState, useEffect, useRef } from "react";
import "./MemoryMap.css";

const pins = [
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

export default function MemoryMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reactionsState, setReactionsState] = useState(
    pins.map(() => ({
      "💖": 12,
      "🎉": 8,
      "👏": 15,
      "👍": 10,
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
            className: "so-leaflet-connector-line",
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
        <div class="so-leaflet-marker-wrapper">
          <div class="so-leaflet-marker-sonar" style="border-color: ${pin.color}"></div>
          <div class="so-leaflet-marker-dot" style="background: ${pin.color}; box-shadow: 0 0 10px ${pin.color}dd"></div>
        </div>
      `;

      const customIcon = window.L.divIcon({
        className: `so-leaflet-custom-icon pin-${pin.id}`,
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
        className: "so-leaflet-tooltip",
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
    <section className="so-map-section" id="memory-map">
      <div className="so-map-container">
        
        {/* Title Header */}
        <header className="so-map-header">
          <span className="so-map-badge">Worldwide Connections</span>
          <h2 className="so-map-title">Global Memory Map</h2>
          <p className="so-map-subtitle">
            Connect from everywhere. Tap a pin to engage.
          </p>
        </header>

        {/* Content Layout */}
        <div className="so-map-layout">
          
          {/* Left Column: Interactive Map */}
          <div className="so-map-wrapper">
            <div 
              ref={mapContainerRef} 
              id="leaflet-world-map"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#f0f2f5",
              }}
            >
              {!leafletLoaded && (
                <div className="so-map-loader">
                  <div className="so-loader-spinner"></div>
                  <span>Loading Interactive Map...</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Card */}
          <div className="so-map-card-panel">
            <div 
              className="so-glass-card" 
              key={activeIndex}
              style={{
                border: `1px solid ${activePin.color}33`,
                boxShadow: `0 24px 50px rgba(26, 43, 74, 0.08), 0 0 20px ${activePin.color}08`,
              }}
            >
              {/* Giant watermark quote mark */}
              <span className="so-card-quote-mark" style={{ color: `${activePin.color}0d` }}>“</span>

              {/* Header inside Card */}
              <div className="so-glass-card-header">
                <div 
                  className="so-card-avatar"
                  style={{
                    background: activePin.color,
                    boxShadow: `0 8px 20px ${activePin.color}44`,
                  }}
                >
                  {activePin.avatar}
                </div>
                <div className="so-card-meta">
                  <h4 className="so-card-name">{activePin.name}</h4>
                  <div className="so-card-meta-row">
                    <span className="so-card-role-pill">{activePin.role}</span>
                    <span className="so-card-location">📍 {activePin.location}</span>
                  </div>
                </div>
                <span className="so-card-time">{activePin.time}</span>
              </div>

              {/* Message Content */}
              <div className="so-glass-card-body">
                <p className="so-card-msg">“ {activePin.msg} ”</p>
              </div>

              {/* Interactive Emoji Reactions */}
              <div className="so-card-reactions">
                {Object.entries(reactionsState[activeIndex]).map(([emoji, count]) => (
                  <button
                    key={emoji}
                    className="so-reaction-btn"
                    onClick={() => handleReact(emoji)}
                    style={{
                      "--active-glow": activePin.color,
                    }}
                  >
                    <span className="so-reaction-emoji">{emoji}</span>
                    <span className="so-reaction-count">{count}</span>
                  </button>
                ))}
              </div>

              {/* Slideshow indicator dots */}
              <div className="so-card-footer">
                <div className="so-map-dots">
                  {pins.map((_, idx) => (
                    <button
                      key={idx}
                      className={`so-map-dot ${idx === activeIndex ? "active" : ""}`}
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
                  className="so-map-play-btn"
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
