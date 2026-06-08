import React from 'react';
import FeaturePage from './FeaturePage';

const data = {
  accent: '#FF6B2C',
  accentSoft: '#FFF3EE',
  icon: '📊',
  category: 'Appreciation Walls',
  heroTitle: 'Create Recognition Spaces That Bring Teams Together',
  heroDesc: 'Give your organization a shared place where appreciation is visible, persistent, and felt by everyone — across every team and timezone.',
  ctaPrimary: 'Create a Wall',
  ctaSecondary: 'See How It Works',
  heroChips: ['💌 Team Shout-out', '🏆 Recognition', '🎉 Appreciation'],
  heroCardContent: (
    <>
      {[
        { text: '"Your leadership made this launch possible 🌟"', from: 'Engineering Team', color: '#FF6B2C', bg: '#FFF3EE' },
        { text: '"Thank you for always going above and beyond 💛"', from: 'Sarah M.', color: '#A78BFA', bg: '#F5F3FF' },
        { text: '"Proudest moment of the quarter — your work! 🎉"', from: 'Product Team', color: '#34D399', bg: '#ECFDF5' },
      ].map((n, i) => (
        <div key={i} className="fp-note" style={{ borderLeftColor: n.color, background: n.bg }}>
          <span className="fp-note-av" style={{ background: n.color }}>{n.from[0]}</span>
          <div><p>{n.text}</p><span>{n.from}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Recognition Happens Privately and Is Quickly Forgotten',
  problemDesc: 'Most workplace recognition lives in private messages, one-on-one conversations, or fleeting Slack threads that scroll away within hours.',
  problemDesc2: 'Organizations need a central, persistent space where employees can publicly celebrate achievements, share appreciation, and acknowledge contributions in a way that the whole team can see and participate in.',
  problemPoints: [
    'Private praise disappears — it doesn\'t build team culture',
    'Recognition is inconsistent across departments and teams',
    'Managers carry the burden of recognition alone',
    'Remote employees feel overlooked and disconnected',
  ],
  problemIllustration: (
    <div className="fp-problem-illus">
      {[
        { icon: '👥', label: 'Team Recognition', sub: 'Visible to everyone', color: '#FF6B2C' },
        { icon: '📌', label: 'Pinned Appreciation', sub: 'Stays permanently', color: '#A78BFA' },
        { icon: '🔔', label: 'Real-time Updates', sub: 'Notifies contributors', color: '#34D399' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row">
          <span className="fp-illus-icon">{r.icon}</span>
          <div>
            <strong>{r.label}</strong>
            <span>{r.sub}</span>
          </div>
        </div>
      ))}
    </div>
  ),

  deepDiveTitle: 'Everything Your Team Needs to Recognize Each Other',
  deepDiveDesc: 'Appreciation Walls bring together messages, media, milestones, and contributors in one shared experience.',
  deepDiveFeatures: [
    { icon: '📝', title: 'Rich Appreciation Posts', desc: 'Team members add messages, photos, GIFs, and videos to create meaningful, personal recognition posts.' },
    { icon: '👥', title: 'Multi-Contributor Boards', desc: 'Unlimited team members can sign and contribute, from a single department to the entire organization.' },
    { icon: '📌', title: 'Persistent & Shareable', desc: 'Walls stay active indefinitely. Share via link, embed in your intranet, or display on office screens.' },
    { icon: '🎨', title: 'Themed Experiences', desc: 'Choose from occasion-specific layouts for birthdays, promotions, farewells, and more.' },
    { icon: '📥', title: 'Download & Print', desc: 'Export your wall as a high-resolution PDF or print-ready keepsake booklet.' },
    { icon: '🔔', title: 'Contribution Reminders', desc: 'Automated nudges keep contributors engaged and ensure no teammate is left out.' },
  ],

  howItWorks: [
    { n: '01', icon: '✨', title: 'Create', desc: 'Set up an Appreciation Wall for any occasion. Choose a layout, set a recipient, and add a delivery date.' },
    { n: '02', icon: '📩', title: 'Invite', desc: 'Share a private link with teammates. No account required — anyone can contribute instantly.' },
    { n: '03', icon: '💬', title: 'Participate', desc: 'Team members add messages, photos, GIFs, and reactions at their own pace, from anywhere.' },
    { n: '04', icon: '🎉', title: 'Celebrate', desc: 'Deliver a beautiful, unforgettable appreciation experience. Download and keep it forever.' },
  ],

  useCases: [
    { icon: '🎂', title: 'Employee Appreciation Day', desc: 'Create a company-wide wall that celebrates everyone\'s contributions across all departments.' },
    { icon: '🏆', title: 'Team Recognition', desc: 'Acknowledge a team\'s achievement after a successful launch, project, or quarter.' },
    { icon: '🌟', title: 'Employee Spotlights', desc: 'Feature individuals who go above and beyond, making their contributions visible to the whole organization.' },
    { icon: '👋', title: 'Farewells & Departures', desc: 'Send off a valued colleague with hundreds of personal messages in one beautiful board.' },
    { icon: '🏢', title: 'Company Milestones', desc: 'Celebrate the organization\'s journey — anniversaries, product launches, and company achievements.' },
    { icon: '🤝', title: 'Peer-to-Peer Recognition', desc: 'Empower every employee to recognize colleagues without needing manager involvement.' },
    { icon: '💼', title: 'Leadership Appreciation', desc: 'Let teams show gratitude upward — recognizing leaders who made a positive difference.' },
    { icon: '🎊', title: 'Workplace Celebrations', desc: 'From promotions to personal milestones, celebrate every meaningful moment together.' },
  ],

  showcase: [
    { icon: '📋', label: 'Appreciation Board', desc: 'A live team board with messages, photos, and reactions from the whole organization.', size: 'large', bg: '#FFF3EE', tags: ['Team', 'Recognition', 'Celebration'] },
    { icon: '💌', label: 'Recognition Post', desc: 'Rich posts with photos, emojis, and personal notes.', size: 'small', bg: '#F5F3FF' },
    { icon: '🏆', label: 'Team Shout-out', size: 'small', bg: '#ECFDF5', desc: 'Peer acknowledgments visible to everyone.' },
    { icon: '📥', label: 'PDF Export', size: 'small', bg: '#FFFBEB', desc: 'Download as print-ready keepsake.' },
    { icon: '🎨', label: 'Themed Layouts', size: 'large', bg: '#EEF1F7', tags: ['Birthday', 'Farewell', 'Anniversary', 'Promotion'] },
  ],

  benefits: [
    { icon: '🌱', title: 'Stronger Culture', desc: 'Visible recognition builds a culture where appreciation is the norm, not the exception.' },
    { icon: '💬', title: 'More Recognition Moments', desc: 'Lower the barrier for every employee to celebrate colleagues, not just managers.' },
    { icon: '👁️', title: 'Better Visibility', desc: 'Achievements stay visible over time rather than disappearing into message history.' },
    { icon: '🤝', title: 'Employee Belonging', desc: 'Employees who feel seen and appreciated are more connected and engaged at work.' },
    { icon: '🔗', title: 'Team Connection', desc: 'Shared recognition creates connection between colleagues across teams and locations.' },
    { icon: '📈', title: 'Improved Retention', desc: 'Recognized employees are more likely to stay. Appreciation walls make recognition consistent.' },
  ],

  faqTitle: 'Appreciation Walls — FAQs',
  faqSubtitle: 'Everything you need to know about creating and sharing Appreciation Walls.',
  faq: [
    { q: 'How many people can contribute to a wall?', a: 'Unlimited. Anyone with the link can add their message, photo, or GIF — no account needed. There\'s no cap on contributors.' },
    { q: 'Can I set a deadline for contributions?', a: 'Yes. Set a delivery date and WorkKudo will send automated reminders to contributors so nobody misses the deadline.' },
    { q: 'Can walls be viewed on mobile?', a: 'Fully mobile-optimized. Recipients and contributors can access boards on any device without installing an app.' },
    { q: 'Is there a limit to how long walls stay active?', a: 'No. Walls stay active indefinitely. You can revisit, share, or download them at any time.' },
    { q: 'Can I export the wall as a printable keepsake?', a: 'Yes. Download a high-resolution PDF version, perfect for printing as a booklet or framing as a keepsake.' },
  ],

  ctaHeadline: 'Start Recognizing Your Team Today',
  ctaDesc: 'Create an Appreciation Wall that your team will remember. Set it up in minutes, invite everyone, and celebrate together.',
};

export default function AppreciationWalls() {
  return <FeaturePage data={data} />;
}
