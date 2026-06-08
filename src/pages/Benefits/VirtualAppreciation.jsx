import React from 'react';
import BenefitPage from './BenefitPage';

const data = {
  accent: '#FF6B2C',
  accentSoft: '#FFF3EE',
  icon: '🏡',
  category: 'Virtual Appreciation',
  heroTitle: 'Make Recognition Possible Anywhere',
  heroDesc: 'Appreciation shouldn\'t depend on physical location. WorkKudo delivers rich, personal recognition experiences that feel just as meaningful for remote employees as for those in the office.',
  ctaPrimary: 'Start Appreciating',
  ctaSecondary: 'See How It Works',
  heroChips: ['🌐 Digital-First', '💌 Personal', '⚡ Instant'],
  heroStats: [ { icon: '🌐', label: 'Digital-First' }, { icon: '💌', label: 'Personal' }, { icon: '⚡', label: 'Instant' } ],
  heroCardContent: (
    <>
      {[
        { text: '"The virtual card felt more personal than any in-office gift I\'ve received 💛"', from: 'Priya K. · Remote', color: '#FF6B2C', bg: '#FFF3EE' },
        { text: '"Opened the board on my laptop — 40 messages from the team. I cried 🌟"', from: 'Marcus L. · Hybrid', color: '#A78BFA', bg: '#F5F3FF' },
        { text: '"Our appreciation wall brought our global team closer than any meeting 🤝"', from: 'Aisha T. · Distributed', color: '#34D399', bg: '#ECFDF5' },
      ].map((n, i) => (
        <div key={i} className="fp-note" style={{ borderLeftColor: n.color, background: n.bg }}>
          <span className="fp-note-av" style={{ background: n.color }}>{n.from[0]}</span>
          <div><p>{n.text}</p><span>{n.from}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Modern Workplaces Have Moved Online — Recognition Hasn\'t Kept Up',
  problemDesc: 'Remote work, hybrid schedules, and global teams have transformed where and how people work. But many recognition practices are still designed for physical proximity — birthday cakes, office gift cards, in-person acknowledgments.',
  problemDesc2: 'WorkKudo is built for the modern workplace reality: digital-first, async-capable, and personal enough to feel genuinely meaningful whether someone is in the office or working from the other side of the world.',
  problemPoints: [
    'Traditional recognition formats don\'t translate to remote or hybrid environments',
    'Digital appreciation often feels impersonal — a one-line Slack message can\'t replace a real celebration',
    'Hybrid teams experience recognition inequity between office-based and remote employees',
    'Global organizations struggle to create appreciation experiences that reach everyone equally',
  ],
  problemIllustration: (
    <div className="fp-problem-illus">
      {[
        { icon: '💌', label: 'Digital Recognition', sub: 'Rich, personal online experiences' },
        { icon: '📋', label: 'Online Celebration Boards', sub: 'Collaborative appreciation anywhere' },
        { icon: '🚀', label: 'Real-time Collaboration', sub: 'Everyone contributes together' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row">
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </div>
  ),

  deepDiveTitle: 'Digital Recognition Experiences That Feel Genuinely Personal',
  deepDiveDesc: 'WorkKudo creates virtual appreciation that goes far beyond a Slack message or a generic digital card.',
  deepDiveFeatures: [
    { icon: '📋', title: 'Virtual Group Cards', desc: 'Collaborative boards where every team member adds a personal message, photo, or GIF — from anywhere.' },
    { icon: '🏆', title: 'Appreciation Walls', desc: 'Persistent digital spaces where appreciation is publicly visible and permanently accessible to everyone.' },
    { icon: '📣', title: 'Virtual Appreciation Campaigns', desc: 'Structured company-wide recognition programs that create collective appreciation moments digitally.' },
    { icon: '🎨', title: 'Occasion-Specific Themes', desc: 'Premium digital layouts for every occasion — birthdays, farewells, anniversaries — that feel intentional and personal.' },
    { icon: '💬', title: 'Rich Media Contributions', desc: 'Contributors add text, photos, GIFs, and video messages that make virtual appreciation genuinely warm.' },
    { icon: '📥', title: 'Digital Keepsakes', desc: 'Every recognition experience can be downloaded and kept as a lasting digital or printed memory.' },
  ],

  howItWorks: [
    { n: '01', icon: '💌', title: 'Create the Experience', desc: 'Choose a themed layout for the occasion and set up the recognition board in minutes.' },
    { n: '02', icon: '📩', title: 'Invite Your Team', desc: 'Share a link — everyone contributes digitally, no account or app install required.' },
    { n: '03', icon: '💬', title: 'Rich Contributions', desc: 'Team members add personal messages, photos, and reactions that make the experience meaningful.' },
    { n: '04', icon: '🎉', title: 'Deliver Digitally', desc: 'The finished experience is delivered via email, Slack, or Teams — wherever the recipient is.' },
  ],

  useCases: [
    { icon: '📋', title: 'Virtual Group Cards', desc: 'Replace physical cards with digital boards signed by the entire team — more personal, more lasting.' },
    { icon: '🏆', title: 'Team Shout-outs', desc: 'Public peer recognition that reaches the whole organization, not just those nearby.' },
    { icon: '💌', title: 'Appreciation Walls', desc: 'Persistent digital walls where ongoing recognition is collected and kept visible.' },
    { icon: '🎉', title: 'Celebration Campaigns', desc: 'Time-bound digital appreciation events that bring the whole organization together virtually.' },
    { icon: '🌱', title: 'Remote Onboarding Welcome', desc: 'Give new hires a warm digital welcome before their first day with contributions from the team.' },
    { icon: '👋', title: 'Virtual Farewells', desc: 'Send departing colleagues a rich, personal farewell experience from their global team.' },
  ],

  showcase: [
    { icon: '💌', label: 'Virtual Group Card', desc: 'A rich digital card with personal messages, photos, and appreciation from the whole team.', size: 'large', bg: '#FFF3EE', tags: ['Personal', 'Rich Media', 'Permanent'] },
    { icon: '🏆', label: 'Appreciation Wall', size: 'small', bg: '#FFFBEB', desc: 'Ongoing public recognition online.' },
    { icon: '📣', label: 'Digital Campaign', size: 'small', bg: '#F5F3FF', desc: 'Organization-wide virtual appreciation.' },
    { icon: '🎨', label: 'Themed Layout', size: 'small', bg: '#ECFDF5', desc: 'Occasion-specific premium design.' },
    { icon: '📥', label: 'Digital Keepsake', size: 'large', bg: '#EEF1F7', tags: ['Download', 'Print-Ready', 'Kept Forever'] },
  ],

  benefits: [
    { icon: '🌐', title: 'Accessible Recognition', desc: 'Every employee receives the same quality of appreciation regardless of their location or work model.' },
    { icon: '⚡', title: 'Faster Participation', desc: 'Digital contribution is instant — no scheduling, no shipping, no coordination across locations.' },
    { icon: '🌍', title: 'Greater Inclusivity', desc: 'Remote and hybrid employees receive recognition that is equal in quality to what in-office peers experience.' },
    { icon: '💛', title: 'Consistent Appreciation', desc: 'Digital recognition is repeatable and scalable — every employee gets appreciated consistently.' },
    { icon: '😊', title: 'Genuinely Personal', desc: 'Rich messages, photos, and personal notes make virtual appreciation feel warm and authentic, not generic.' },
    { icon: '📈', title: 'Better Engagement', desc: 'Employees who receive meaningful digital recognition are more engaged and connected to their organization.' },
  ],

  faqTitle: 'Virtual Appreciation — FAQs',
  faqSubtitle: 'How WorkKudo delivers meaningful recognition for modern, distributed workplaces.',
  faq: [
    { q: 'Can virtual appreciation feel as personal as in-person recognition?', a: 'Yes. When 20–40 colleagues add personal messages, photos, and heartfelt notes to a board, the experience is deeply personal — often more so than a generic office gift.' },
    { q: 'Do contributors need to be online at the same time?', a: 'No. WorkKudo is async — everyone contributes when it works for them, across any timezone.' },
    { q: 'Can virtual boards include photos and videos?', a: 'Yes. Contributors can add text, photos, GIFs, and short video messages to make appreciation rich and personal.' },
    { q: 'How are completed boards delivered to the recipient?', a: 'Via email, Slack, Microsoft Teams, or a direct link — wherever the recipient prefers to receive it.' },
    { q: 'Can boards be printed or kept as physical keepsakes?', a: 'Yes. Every board can be downloaded as a high-resolution PDF ready for printing, framing, or sharing.' },
  ],

  ctaHeadline: 'Appreciation That Reaches Everyone, Everywhere',
  ctaDesc: 'Create virtual recognition experiences that are personal, rich, and meaningful — no matter where your team works.',
};

export default function VirtualAppreciation() {
  return <BenefitPage data={data} />;
}
