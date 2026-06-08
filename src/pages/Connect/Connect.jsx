import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import './Connect.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.25, 1, 0.5, 1] } }),
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.55, delay: d, ease: [0.34, 1.56, 0.64, 1] } }),
};

/* ═══════════════════════════════════════════
   HERO
═══════════════════════════════════════════ */
function Hero() {
  const notes = [
    { text: '"Thank you for going above and beyond 🌟"', from: 'Sarah M.', color: '#FF6B2C', bg: '#FFF3EE' },
    { text: '"Your presentation was outstanding 🎉"', from: 'James L.', color: '#A78BFA', bg: '#F5F3FF' },
    { text: '"Proud to have you on the team 💚"', from: 'Priya K.', color: '#34D399', bg: '#ECFDF5' },
  ];

  return (
    <section className="cn-hero">
      <div className="cn-hero-bg" aria-hidden="true">
        <div className="cn-blob cn-blob--1" />
        <div className="cn-blob cn-blob--2" />
        <div className="cn-blob cn-blob--3" />
      </div>

      <div className="cn-container cn-hero-inner">
        <div className="cn-hero-text">
          <motion.div className="cn-hero-badges" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="cn-badge">💬 Contact</span>
            <span className="cn-badge-sep">•</span>
            <span className="cn-badge">🚀 Demo</span>
            <span className="cn-badge-sep">•</span>
            <span className="cn-badge">💼 Careers</span>
          </motion.div>

          <motion.h1 className="cn-hero-title" variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
            Let's Build Better<br />
            <span className="cn-gradient-text">Workplace Experiences</span><br />
            Together
          </motion.h1>

          <motion.p className="cn-hero-sub" variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
            Whether you're looking to transform workplace recognition, explore WorkKudo for your team,
            or join our mission of making work more meaningful — we'd love to connect.
          </motion.p>

          <motion.div className="cn-hero-ctas" variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
            <a href="#demo" className="cn-btn cn-btn--primary">
              Request a Demo
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="cn-btn cn-btn--ghost">Contact Us</a>
            <a href="#careers" className="cn-btn cn-btn--ghost">View Careers</a>
          </motion.div>
        </div>

        <motion.div className="cn-hero-visual"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="cn-board">
            <div className="cn-board-bar">
              <span className="cn-bar-dot r" /><span className="cn-bar-dot y" /><span className="cn-bar-dot g" />
              <span className="cn-bar-title">WorkKudo — Recognition Board</span>
            </div>
            <div className="cn-board-body">
              {notes.map((n, i) => (
                <motion.div key={i} className="cn-note"
                  style={{ borderLeftColor: n.color, background: n.bg }}
                  initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.18 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <span className="cn-note-av" style={{ background: n.color }}>{n.from[0]}</span>
                  <div>
                    <p className="cn-note-text">{n.text}</p>
                    <span className="cn-note-from">{n.from}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="cn-board-foot">
              <div className="cn-avs">
                {['#FF6B2C','#A78BFA','#34D399','#F59E0B'].map((c,i)=>(
                  <span key={i} className="cn-av" style={{background:c}}>{['S','J','P','A'][i]}</span>
                ))}
                <span className="cn-av-more">+7</span>
              </div>
              <span className="cn-signed">11 teammates contributed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT SECTION
═══════════════════════════════════════════ */
const contactCategories = [
  { icon: '💬', title: 'General Questions', desc: 'Learn more about WorkKudo, features, and platform capabilities.' },
  { icon: '🛠️', title: 'Product Support', desc: 'Get help with setup, troubleshooting, and platform guidance.' },
  { icon: '💼', title: 'Sales Inquiries', desc: 'Talk with our team about workplace recognition programs.' },
  { icon: '🤝', title: 'Partnerships', desc: 'Explore collaboration and integration opportunities.' },
];

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name:'', email:'', company:'', subject:'', topic:'', message:'' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); if(form.name && form.email) setSent(true); };

  return (
    <section className="cn-section cn-contact" id="contact" ref={ref}>
      <div className="cn-container">
        <div className="cn-section-header">
          <motion.h2 className="cn-section-title" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}>
            We're Here To Help
          </motion.h2>
          <motion.p className="cn-section-sub" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1}>
            Questions about WorkKudo? Need assistance? Looking for partnership opportunities?
            Our team is ready to help.
          </motion.p>
        </div>

        <div className="cn-contact-grid">
          {/* Left — categories + floating cards */}
          <div className="cn-contact-left">
            <div className="cn-cat-grid">
              {contactCategories.map((c, i) => (
                <motion.div key={c.title} className="cn-cat-card"
                  variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1+i*0.08}
                  whileHover={{ y:-5, boxShadow:'0 16px 40px rgba(26,43,74,0.1)' }}
                >
                  <span className="cn-cat-icon">{c.icon}</span>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating support glass cards */}
            <motion.div className="cn-support-cards"
              variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.4}
            >
              {[
                { icon:'✉️', label:'Email Support', sub:'support@proso.ai', color:'#FF6B2C' },
                { icon:'📖', label:'Product Guides', sub:'Explore our help center', color:'#A78BFA' },
                { icon:'🤝', label:'Partnership', sub:'support@proso.ai', color:'#34D399' },
              ].map((sc,i)=>(
                <motion.div key={i} className="cn-support-card"
                  animate={{ y:[0,-5,0] }}
                  transition={{ duration:3+i*0.6, repeat:Infinity, delay:i*0.5 }}
                  whileHover={{ scale:1.03 }}
                >
                  <span className="cn-support-icon" style={{ background:`${sc.color}18`, color:sc.color }}>{sc.icon}</span>
                  <div>
                    <strong>{sc.label}</strong>
                    <span>{sc.sub}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div className="cn-form-wrap"
            variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.2}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="thanks" className="cn-form-thanks"
                  initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0 }} transition={{ type:'spring', stiffness:160 }}
                >
                  <span className="cn-thanks-icon">✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. Our team will get back to you shortly.</p>
                  <button className="cn-btn cn-btn--primary" onClick={()=>setSent(false)}>Send Another</button>
                </motion.div>
              ) : (
                <motion.form key="form" className="cn-form" onSubmit={submit} initial={{ opacity:1 }}>
                  <h3 className="cn-form-title">Send Us a Message</h3>
                  <div className="cn-form-row">
                    <div className="cn-field">
                      <label>Full Name <span>*</span></label>
                      <input name="name" value={form.name} onChange={handle} placeholder="Your full name" required />
                    </div>
                    <div className="cn-field">
                      <label>Work Email <span>*</span></label>
                      <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@company.com" required />
                    </div>
                  </div>
                  <div className="cn-form-row">
                    <div className="cn-field">
                      <label>Company Name</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="Your company" />
                    </div>
                    <div className="cn-field">
                      <label>How can we help?</label>
                      <select name="topic" value={form.topic} onChange={handle}>
                        <option value="">Select a topic</option>
                        <option>Product Question</option>
                        <option>Support Request</option>
                        <option>Sales Inquiry</option>
                        <option>Partnership</option>
                        <option>Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="cn-field">
                    <label>Subject</label>
                    <input name="subject" value={form.subject} onChange={handle} placeholder="Brief subject line" />
                  </div>
                  <div className="cn-field">
                    <label>Message <span>*</span></label>
                    <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell us how we can help..." required />
                  </div>
                  <motion.button type="submit" className="cn-btn cn-btn--primary cn-btn--full"
                    whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:0.98 }}
                  >
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   DEMO SECTION
═══════════════════════════════════════════ */
const demoFeatures = [
  { icon:'🎉', title:'Celebration Boards', desc:'Collaborative appreciation experiences for every occasion.' },
  { icon:'🏆', title:'Recognition Walls', desc:'Company-wide acknowledgment spaces and kudos.' },
  { icon:'🌎', title:'Culture Programs', desc:'Initiatives that strengthen belonging and inclusion.' },
  { icon:'🎊', title:'Employee Milestones', desc:'Meaningful moments that deserve recognition.' },
];

const demoSteps = [
  { n:'01', icon:'📝', title:'Submit Your Request', desc:'Tell us a bit about your team and goals.' },
  { n:'02', icon:'🤝', title:'Meet Our Team', desc:'A friendly intro call to understand your needs.' },
  { n:'03', icon:'🔍', title:'Explore Use Cases', desc:'Walk through features relevant to your organization.' },
  { n:'04', icon:'🚀', title:'Start Building', desc:'Launch your first recognition program.' },
];

function DemoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name:'', email:'', company:'', role:'', size:'', country:'', date:'', time:'', notes:'' });
  const [sent, setSent] = useState(false);
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); if(form.name && form.email) setSent(true); };
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveFeature(p => (p + 1) % demoFeatures.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="cn-section cn-demo" id="demo" ref={ref}>
      <div className="cn-container">
        <div className="cn-section-header">
          <motion.h2 className="cn-section-title" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}>
            See WorkKudo In Action
          </motion.h2>
          <motion.p className="cn-section-sub" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1}>
            Discover how WorkKudo helps organizations celebrate employees, strengthen culture,
            and create meaningful recognition experiences — tailored to your team's needs.
          </motion.p>
        </div>

        <div className="cn-demo-grid">
          {/* Left — product showcase */}
          <motion.div className="cn-demo-showcase"
            variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.15}
          >
            {/* Feature tabs */}
            <div className="cn-demo-tabs">
              {demoFeatures.map((f, i) => (
                <motion.button key={i}
                  className={`cn-demo-tab ${activeFeature===i?'active':''}`}
                  onClick={() => setActiveFeature(i)}
                  whileHover={{ scale:1.03 }}
                >
                  <span>{f.icon}</span>
                  <span>{f.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Feature panel */}
            <AnimatePresence mode="wait">
              <motion.div key={activeFeature} className="cn-demo-panel"
                initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y:-12 }} transition={{ duration:0.35 }}
              >
                <div className="cn-demo-panel-icon">{demoFeatures[activeFeature].icon}</div>
                <h3>{demoFeatures[activeFeature].title}</h3>
                <p>{demoFeatures[activeFeature].desc}</p>

                {/* Mini board mockup */}
                <div className="cn-demo-mockup">
                  <div className="cn-demo-mockup-bar">
                    <span className="cn-bar-dot r"/><span className="cn-bar-dot y"/><span className="cn-bar-dot g"/>
                    <span className="cn-demo-mockup-title">WorkKudo · {demoFeatures[activeFeature].title}</span>
                  </div>
                  <div className="cn-demo-mockup-body">
                    {[
                      {c:'#FF6B2C', bg:'#FFF3EE', msg:'"Amazing work this quarter!"', av:'A'},
                      {c:'#A78BFA', bg:'#F5F3FF', msg:'"Your dedication inspires everyone."', av:'M'},
                      {c:'#34D399', bg:'#ECFDF5', msg:'"Thank you for making a difference."', av:'S'},
                    ].map((n,i)=>(
                      <motion.div key={i} className="cn-demo-note"
                        style={{borderLeft:`3px solid ${n.c}`, background:n.bg}}
                        initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}}
                        transition={{delay:i*0.12}}
                        whileHover={{x:3}}
                      >
                        <span className="cn-demo-note-av" style={{background:n.c}}>{n.av}</span>
                        <p>{n.msg}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Process timeline */}
            <div className="cn-demo-timeline">
              <h4>How It Works</h4>
              <div className="cn-demo-steps">
                {demoSteps.map((s, i) => (
                  <motion.div key={i} className="cn-demo-step"
                    variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.3+i*0.1}
                  >
                    <div className="cn-demo-step-num">{s.n}</div>
                    <div className="cn-demo-step-body">
                      <span className="cn-demo-step-icon">{s.icon}</span>
                      <strong>{s.title}</strong>
                      <p>{s.desc}</p>
                    </div>
                    {i < demoSteps.length - 1 && <div className="cn-demo-step-line" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div className="cn-form-wrap cn-demo-form-wrap"
            variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.2}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="thanks" className="cn-form-thanks"
                  initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} exit={{opacity:0}}
                  transition={{type:'spring',stiffness:160}}
                >
                  <span className="cn-thanks-icon">🚀</span>
                  <h3>Demo Requested!</h3>
                  <p>Thanks! Our team will reach out within 1 business day to schedule your personalized walkthrough.</p>
                  <button className="cn-btn cn-btn--primary" onClick={()=>setSent(false)}>Submit Another</button>
                </motion.div>
              ) : (
                <motion.form key="form" className="cn-form" onSubmit={submit}>
                  <h3 className="cn-form-title">Request a Personalized Demo</h3>
                  <div className="cn-form-row">
                    <div className="cn-field">
                      <label>Full Name <span>*</span></label>
                      <input name="name" value={form.name} onChange={handle} placeholder="Your full name" required />
                    </div>
                    <div className="cn-field">
                      <label>Work Email <span>*</span></label>
                      <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@company.com" required />
                    </div>
                  </div>
                  <div className="cn-form-row">
                    <div className="cn-field">
                      <label>Company Name</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="Your company" />
                    </div>
                    <div className="cn-field">
                      <label>Job Title</label>
                      <input name="role" value={form.role} onChange={handle} placeholder="e.g. HR Manager" />
                    </div>
                  </div>
                  <div className="cn-form-row">
                    <div className="cn-field">
                      <label>Team Size</label>
                      <select name="size" value={form.size} onChange={handle}>
                        <option value="">Select team size</option>
                        <option>1–10</option>
                        <option>11–50</option>
                        <option>51–200</option>
                        <option>201–500</option>
                        <option>500+</option>
                      </select>
                    </div>
                    <div className="cn-field">
                      <label>Country</label>
                      <input name="country" value={form.country} onChange={handle} placeholder="Your country" />
                    </div>
                  </div>
                  <div className="cn-form-row">
                    <div className="cn-field">
                      <label>Preferred Date</label>
                      <input name="date" type="date" value={form.date} onChange={handle} />
                    </div>
                    <div className="cn-field">
                      <label>Preferred Time</label>
                      <select name="time" value={form.time} onChange={handle}>
                        <option value="">Select a time</option>
                        <option>9:00 AM – 10:00 AM</option>
                        <option>10:00 AM – 11:00 AM</option>
                        <option>11:00 AM – 12:00 PM</option>
                        <option>1:00 PM – 2:00 PM</option>
                        <option>2:00 PM – 3:00 PM</option>
                        <option>3:00 PM – 4:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="cn-field">
                    <label>What would you like to explore? <span className="cn-optional">(optional)</span></label>
                    <textarea name="notes" value={form.notes} onChange={handle} rows={4} placeholder="Tell us about your goals, team size, and what you'd like to see..." />
                  </div>
                  <motion.button type="submit" className="cn-btn cn-btn--primary cn-btn--full"
                    whileHover={{scale:1.02,y:-1}} whileTap={{scale:0.98}}
                  >
                    Request My Demo
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CAREERS SECTION
═══════════════════════════════════════════ */
const values = [
  { icon:'💛', title:'People First', desc:'We build products that put people at the center of every decision.' },
  { icon:'🤝', title:'Collaboration', desc:'Great ideas emerge when talented people work together openly.' },
  { icon:'🚀', title:'Ownership', desc:'Everyone has the opportunity to make a meaningful impact.' },
  { icon:'🌱', title:'Growth', desc:'Continuous learning is deeply embedded in our culture.' },
  { icon:'✨', title:'Appreciation', desc:'Recognition starts from within — we celebrate our own team.' },
  { icon:'🌎', title:'Inclusion', desc:'Everyone deserves a genuine sense of belonging here.' },
];

const benefits = [
  { icon:'🏠', title:'Flexible Work', desc:'Remote and hybrid-friendly environment.' },
  { icon:'📚', title:'Learning Opportunities', desc:'Support for personal and professional growth.' },
  { icon:'🎯', title:'Meaningful Impact', desc:'Build products that improve workplace experiences.' },
  { icon:'🛠️', title:'Modern Tools', desc:'Work with high-quality tools and technologies.' },
  { icon:'👥', title:'Collaborative Team', desc:'Join people who care deeply about what they build.' },
  { icon:'🔬', title:'Growth Mindset', desc:'Experiment, learn, and improve continuously.' },
];

const departments = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'Operations'];

const hiringSteps = [
  { n:'01', icon:'📝', title:'Apply', desc:'Submit your application and share your story.' },
  { n:'02', icon:'💬', title:'Connect', desc:'Meet our team in a friendly intro conversation.' },
  { n:'03', icon:'🔍', title:'Showcase Your Skills', desc:'Demonstrate how you approach real problems.' },
  { n:'04', icon:'🎉', title:'Join WorkKudo', desc:'Start making an impact from day one.' },
];

const lifeCards = [
  { emoji:'💻', label:'Product Brainstorm', color:'#FFF3EE', border:'rgba(255,107,44,0.2)' },
  { emoji:'🎨', label:'Design Workshop', color:'#F5F3FF', border:'rgba(167,139,250,0.2)' },
  { emoji:'🌍', label:'Remote Sessions', color:'#ECFDF5', border:'rgba(52,211,153,0.2)' },
  { emoji:'🤝', label:'Team Gathering', color:'#FFFBEB', border:'rgba(245,158,11,0.2)' },
  { emoji:'⚙️', label:'Engineering Sprint', color:'#EFF6FF', border:'rgba(59,130,246,0.2)' },
  { emoji:'🎉', label:'Company Celebration', color:'#FDF2F8', border:'rgba(236,72,153,0.2)' },
];

function CareersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [dept, setDept] = useState('All');
  const [search, setSearch] = useState('');

  return (
    <section className="cn-section cn-careers" id="careers" ref={ref}>
      <div className="cn-container">
        {/* Header */}
        <div className="cn-section-header">
          <motion.h2 className="cn-section-title" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}>
            Help Us Build More<br />Appreciative Workplaces
          </motion.h2>
          <motion.p className="cn-section-sub" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1}>
            WorkKudo exists to help people feel valued at work. Join us and help shape the future
            of workplace recognition.
          </motion.p>
        </div>

        {/* Mission */}
        <motion.div className="cn-mission"
          variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.2}
        >
          <div className="cn-mission-icon">💛</div>
          <div>
            <h3>Why We Exist</h3>
            <p>We believe appreciation has the power to transform workplace experiences. Our mission is to help organizations create cultures where employees feel recognized, connected, and valued every single day.</p>
          </div>
        </motion.div>

        {/* Life at WorkKudo — visual gallery */}
        <motion.div className="cn-life-header"
          variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.25}
        >
          <h3>Life at WorkKudo</h3>
        </motion.div>
        <div className="cn-life-gallery">
          {lifeCards.map((card, i) => (
            <motion.div key={i} className="cn-life-card"
              style={{ background: card.color, border: `1px solid ${card.border}` }}
              variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'} custom={0.3+i*0.07}
              whileHover={{ scale:1.04, y:-5, boxShadow:'0 16px 40px rgba(26,43,74,0.1)' }}
            >
              <span className="cn-life-emoji">{card.emoji}</span>
              <span className="cn-life-label">{card.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.h3 className="cn-sub-heading"
          variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.3}
        >Our Values</motion.h3>
        <div className="cn-values-grid">
          {values.map((v, i) => (
            <motion.div key={v.title} className="cn-value-card"
              variants={scaleIn} initial="hidden" animate={inView?'visible':'hidden'} custom={0.35+i*0.07}
              whileHover={{ y:-5, boxShadow:'0 14px 36px rgba(26,43,74,0.09)' }}
            >
              <span className="cn-value-icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.h3 className="cn-sub-heading"
          variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.4}
        >Benefits &amp; Perks</motion.h3>
        <div className="cn-benefits-grid">
          {benefits.map((b, i) => (
            <motion.div key={b.title} className="cn-benefit-card"
              variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.45+i*0.07}
              whileHover={{ y:-4, borderColor:'rgba(255,107,44,0.25)' }}
            >
              <span>{b.icon}</span>
              <div>
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Opportunities */}
        <motion.h3 className="cn-sub-heading"
          variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.5}
        >Open Opportunities</motion.h3>

        <motion.div className="cn-jobs-controls"
          variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.55}
        >
          <div className="cn-search-wrap">
            <svg className="cn-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#9CA3AF" strokeWidth="1.5"/>
              <path d="M11 11l3 3" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input className="cn-search" placeholder="Search roles..." value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
          <div className="cn-dept-filters">
            {departments.map(d => (
              <button key={d} className={`cn-dept-btn ${dept===d?'active':''}`} onClick={()=>setDept(d)}>{d}</button>
            ))}
          </div>
        </motion.div>

        <motion.div className="cn-jobs-placeholder"
          variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.6}
        >
          <div className="cn-jobs-empty">
            <span className="cn-jobs-empty-icon">🔍</span>
            <h4>Roles Coming Soon</h4>
            <p>We're growing fast. New positions will be listed here. Follow us or check back soon for the latest openings.</p>
            <a href="#contact" className="cn-btn cn-btn--ghost cn-btn--sm">Send Us Your CV</a>
          </div>
        </motion.div>

        {/* Hiring Journey */}
        <motion.h3 className="cn-sub-heading"
          variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.65}
        >Our Hiring Journey</motion.h3>
        <div className="cn-hiring-timeline">
          {hiringSteps.map((s, i) => (
            <motion.div key={i} className="cn-hiring-step"
              variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.7+i*0.1}
            >
              <div className="cn-hiring-num">{s.n}</div>
              <span className="cn-hiring-icon">{s.icon}</span>
              <strong>{s.title}</strong>
              <p>{s.desc}</p>
              {i < hiringSteps.length - 1 && <div className="cn-hiring-connector" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COMMUNITY CTA
═══════════════════════════════════════════ */
function CommunityCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="cn-cta" ref={ref}>
      <div className="cn-cta-bg" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <motion.div key={i} className="cn-cta-orb"
            style={{ left:`${8+i*9}%`, top:`${20+(i%3)*25}%` }}
            animate={{ scale:[1,1.4,1], opacity:[0.12,0.28,0.12] }}
            transition={{ duration:4+i*0.5, repeat:Infinity, delay:i*0.4 }}
          />
        ))}
      </div>

      <div className="cn-container cn-cta-inner">
        <motion.h2 className="cn-cta-title" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0}
          ref={ref}
        >
          Let's Create More<br />Meaningful Workplaces
        </motion.h2>
        <motion.p className="cn-cta-sub" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.1}>
          Whether you're exploring WorkKudo for your organization, looking for support, requesting a demo,
          or searching for your next opportunity — we'd love to hear from you.
        </motion.p>
        <motion.div className="cn-cta-actions" variants={fadeUp} initial="hidden" animate={inView?'visible':'hidden'} custom={0.2}>
          <motion.a href="#contact" className="cn-btn cn-btn--cta-white" whileHover={{scale:1.04,y:-2}} whileTap={{scale:0.97}}>
            Contact Us
          </motion.a>
          <motion.a href="#demo" className="cn-btn cn-btn--cta-outline" whileHover={{scale:1.04,y:-2}} whileTap={{scale:0.97}}>
            Request a Demo
          </motion.a>
          <motion.a href="#careers" className="cn-btn cn-btn--cta-outline" whileHover={{scale:1.04,y:-2}} whileTap={{scale:0.97}}>
            Explore Careers
          </motion.a>
        </motion.div>

        {/* Floating appreciation cards */}
        <div className="cn-cta-floats" aria-hidden="true">
          {['🎉 Celebration','🏆 Recognition','💌 Appreciation','💼 Careers','🚀 Demo'].map((t,i)=>(
            <motion.span key={i} className="cn-cta-float-chip"
              animate={{ y:[0,-10,0], rotate:[-2,2,-2] }}
              transition={{ duration:3+i*0.4, repeat:Infinity, delay:i*0.5 }}
            >{t}</motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   ROOT
═══════════════════════════════════════════ */
export default function Connect() {
  return (
    <div className="connect-page">
      <Navbar />
      <Hero />
      <ContactSection />
      <DemoSection />
      <CareersSection />
      <CommunityCTA />
      <Footer />
    </div>
  );
}
