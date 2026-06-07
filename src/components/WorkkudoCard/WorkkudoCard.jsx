import React, { useState, useRef } from 'react';

const WorkkudoCard = () => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg) scale(1)');
  const [glareStyle, setGlareStyle] = useState({ '--mx': '50%', '--my': '50%' });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse coordinates relative to the center of the card
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation limits (maximum 20 degrees tilt)
    const rotX = -(y / (rect.height / 2)) * 20;
    const rotY = (x / (rect.width / 2)) * 20;

    setTransformStyle(`rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`);

    // Calculate dynamic coordinates for the lighting glare highlight
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    setGlareStyle({ '--mx': `${mx}%`, '--my': `${my}%` });
  };

  const handleMouseLeave = () => {
    // Smoothly snap back to flat position when mouse exits
    setTransformStyle('rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div style={styles.bodyWrapper}>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ ...styles.cardContainer, transform: transformStyle }}
      >
        {/* Dynamic Light Glare */}
        <div style={{ ...styles.glare, ...glareStyle }} />
        
        {/* Company Title Info Section */}
        <div style={styles.cardInfo}>
          <div style={styles.companyName}>WORKKUDO</div>
          <div style={styles.tagline}>Corporate Premium Member</div>
        </div>

        {/* 3D Rendered Orange Block Logo */}
        <div style={styles.logoContainer}>
          <div style={{ ...styles.block, ...styles.blockLeft }}></div>
          <div style={{ ...styles.block, ...styles.blockTopRight }}></div>
          <div style={{ ...styles.block, ...styles.blockBottomRight }}></div>
        </div>

        {/* Card Footer Elements */}
        <div style={styles.cardFooter}>
          <span>ID: #884-2026</span>
          <span>PREMIUM STOCK</span>
        </div>
      </div>
    </div>
  );
};

// Component Styles (Scoped JavaScript Object Layout)
const styles = {
  bodyWrapper: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '1000px',
  },
  cardContainer: {
    position: 'relative',
    width: '420px',
    height: '260px',
    background: 'rgba(255, 255, 255, 0.06)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
    cursor: 'pointer',
  },
  glare: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)',
    borderRadius: '20px',
    pointerEvents: 'none',
  },
  cardInfo: {
    transform: 'translateZ(40px)',
  },
  companyName: {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '700',
    letterSpacing: '1px',
    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
    marginBottom: '5px',
    fontFamily: 'sans-serif'
  },
  tagline: {
    color: '#a0aec0',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: '500',
    fontFamily: 'sans-serif'
  },
  logoContainer: {
    width: '80px',
    height: '80px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1.2fr 0.8fr',
    gap: '6px',
    alignSelf: 'flex-end',
    transform: 'translateZ(50px)', 
    filter: 'drop-shadow(0 8px 10px rgba(0,0,0,0.3))',
  },
  block: {
    background: 'linear-gradient(135deg, #ff8c21, #e85f00)',
    borderRadius: '2px',
    boxShadow: 'inset -1px -1px 3px rgba(0,0,0,0.4), inset 1px 1px 3px rgba(255,255,255,0.3)',
  },
  blockLeft: {
    gridRow: '1 / span 2',
  },
  blockTopRight: {
    gridColumn: '2',
    gridRow: '1',
  },
  blockBottomRight: {
    gridColumn: '2',
    gridRow: '2',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    transform: 'translateZ(30px)',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '12px',
    letterSpacing: '1px',
    fontFamily: 'sans-serif'
  },
};

export default WorkkudoCard;
