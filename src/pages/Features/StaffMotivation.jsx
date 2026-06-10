import React from 'react';
import FeaturePage from './FeaturePage';

const data = {
  accent: '#34D399',
  accentSoft: '#ECFDF5',
  icon: '💡',
  category: 'Staff Motivation',
  heroTitle: 'Create a Workplace Where Employees Feel Genuinely Valued',
  heroDesc: 'Move beyond surface-level perks. Build the kind of recognition culture where employees feel seen, appreciated, and motivated to bring their best every day.',
  ctaPrimary: 'Motivate Your Team',
  ctaSecondary: 'See How It Works',
  heroChips: ['💛 Valued', '🚀 Motivated', '🌱 Growing'],
  heroCardContent: (
    <>
      {[
        { icon: '💛', label: 'Feeling Valued', sub: 'Recognition builds genuine motivation', color: '#34D399' },
        { icon: '🤝', label: 'Team Connection', sub: 'Appreciation strengthens belonging', color: '#FF6B2C' },
        { icon: '🌱', label: 'Growth & Purpose', sub: 'Recognition reinforces direction', color: '#A78BFA' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row" style={{ borderLeft: `3px solid ${r.color}` }}>
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Employees Who Feel Overlooked Become Disengaged',
  problemDesc: 'Disengagement rarely happens suddenly. It builds slowly when contributions go unacknowledged, when employees feel invisible within their teams, and when effort is met with silence.',
  problemDesc2: 'Organizations that invest in genuine, consistent recognition create workplaces where employees feel connected to their work, their teams, and the larger mission.',
  problemPoints: [
    'Overlooked employees disengage silently before they leave',
    'Generic perks don\'t substitute for genuine appreciation',
    'Inconsistent recognition creates unfair workplace experiences',
    'Motivation drops when effort isn\'t acknowledged',
  ],
  problemIllustration: (
    <div className="fp-problem-illus">
      {[
        { icon: '🌱', label: 'Recognition Journeys', sub: 'Ongoing appreciation experiences', color: '#34D399' },
        { icon: '💛', label: 'Genuine Appreciation', sub: 'Personal, meaningful recognition', color: '#FF6B2C' },
        { icon: '🏆', label: 'Achievement Celebration', sub: 'Milestones recognized publicly', color: '#A78BFA' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row">
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </div>
  ),

  deepDiveTitle: 'Recognition Experiences That Build Lasting Motivation',
  deepDiveDesc: 'Staff Motivation connects appreciation, belonging, and achievement into a continuous workplace experience.',
  deepDiveFeatures: [
    { icon: '💌', title: 'Collaborative Appreciation', desc: 'Team members recognize each other openly, building a culture of visible, shared appreciation.' },
    { icon: '🎯', title: 'Achievement Recognition', desc: 'Celebrate individual and team achievements in ways that feel genuinely personal and meaningful.' },
    { icon: '🌱', title: 'Ongoing Recognition Culture', desc: 'Move beyond annual reviews. Create a rhythm of regular appreciation that keeps motivation high.' },
    { icon: '🤝', title: 'Belonging & Inclusion', desc: 'Recognition that reaches everyone — regardless of role, seniority, or location — builds a true sense of belonging.' },
    { icon: '🔔', title: 'Milestone Celebrations', desc: 'Automated recognition for birthdays, anniversaries, and promotions ensures no meaningful moment is missed.' },
    { icon: '💛', title: 'Personal & Authentic', desc: 'Every recognition experience is personal — with individual messages, photos, and appreciation from real colleagues.' },
  ],

  howItWorks: [
    { n: '01', icon: '🌱', title: 'Build the Foundation', desc: 'Set up recognition programs, automated milestones, and appreciation workflows across your organization.' },
    { n: '02', icon: '💬', title: 'Enable the Team', desc: 'Give every employee the tools and space to recognize each other spontaneously and consistently.' },
    { n: '03', icon: '🏆', title: 'Celebrate Together', desc: 'Shared recognition experiences build connection and make achievement visible to everyone.' },
    { n: '04', icon: '🌟', title: 'Sustain the Culture', desc: 'Continuous appreciation becomes embedded in how your organization works and how your people feel.' },
  ],

  useCases: [
    { icon: '🏅', title: 'Employee Recognition', desc: 'Create meaningful recognition programs that reach every employee, not just top performers.' },
    { icon: '🤝', title: 'Team Motivation', desc: 'Help teams feel supported, appreciated, and connected to the work they do together.' },
    { icon: '🌱', title: 'Workplace Culture', desc: 'Build an appreciation-first culture that becomes a genuine competitive advantage for talent retention.' },
    { icon: '🎯', title: 'Retention Programs', desc: 'Reduce voluntary attrition by ensuring employees feel valued before they consider leaving.' },
    { icon: '💌', title: 'Appreciation Campaigns', desc: 'Run structured appreciation campaigns that give recognition programs momentum and reach.' },
    { icon: '🌟', title: 'Employee Experience', desc: 'Create workplace moments that employees genuinely remember and talk about inside and outside work.' },
  ],

  showcase: [
    { icon: '💛', label: 'Recognition Journey', desc: 'A continuous experience of appreciation that builds motivation over time.', size: 'large', bg: '#ECFDF5', tags: ['Ongoing', 'Personal', 'Team-wide'] },
    { icon: '🏆', label: 'Achievement Celebration', size: 'small', bg: '#FFF3EE', desc: 'Public celebration of team wins.' },
    { icon: '🌱', label: 'Employee Milestone', size: 'small', bg: '#F5F3FF', desc: 'Automated anniversary recognition.' },
    { icon: '💌', label: 'Team Appreciation', size: 'small', bg: '#FFFBEB', desc: 'Peer-led team shout-outs.' },
    { icon: '🌟', label: 'Success Story', size: 'large', bg: '#EEF1F7', tags: ['Peer Recognition', 'Manager Praise', 'Public Acknowledgment'] },
  ],

  benefits: [
    { icon: '🚀', title: 'Higher Morale', desc: 'Regular, genuine recognition keeps employee morale high and sustains day-to-day motivation.' },
    { icon: '🔗', title: 'Better Retention', desc: 'Employees who feel valued are more likely to stay, reducing costly voluntary attrition.' },
    { icon: '🌱', title: 'Stronger Culture', desc: 'Appreciation embedded in daily work creates a culture that attracts and retains great people.' },
    { icon: '💬', title: 'Improved Engagement', desc: 'Recognized employees are more engaged with their work, their teams, and the organization\'s mission.' },
    { icon: '🤝', title: 'Team Cohesion', desc: 'Shared appreciation experiences create stronger bonds between team members across locations.' },
    { icon: '🌟', title: 'Purpose & Meaning', desc: 'Recognition helps employees connect their daily contributions to a larger sense of purpose.' },
  ],

  faqTitle: 'Staff Motivation — FAQs',
  faqSubtitle: 'How WorkKudo helps build a workplace culture driven by genuine recognition.',
  faq: [
    { q: 'How is this different from standard employee perks?', a: 'Perks are transactional. Recognition is relational. WorkKudo creates authentic appreciation experiences that make employees feel genuinely seen and valued by their colleagues.' },
    { q: 'Can small teams use this effectively?', a: 'Absolutely. Recognition culture is equally powerful in teams of 5 or 5,000. WorkKudo scales to any organization size.' },
    { q: 'How does ongoing recognition differ from annual reviews?', a: 'Annual reviews are backward-looking. Ongoing recognition is immediate, personal, and connected to real moments — which makes it far more motivating.' },
    { q: 'Can I set up automated recognition for milestones like birthdays?', a: 'Yes. WorkKudo can automatically trigger recognition boards for birthdays, work anniversaries, promotions, and custom milestones.' },
    { q: 'How do I get the whole team to participate?', a: 'WorkKudo sends contribution reminders, makes participation frictionless with no account required, and works within Notion or via direct link to reach employees where they already work.' },
  ],

  ctaHeadline: 'Build a Workplace People Are Proud to Be Part Of',
  ctaDesc: 'Start creating recognition experiences that make every employee feel seen, valued, and genuinely motivated to do their best work.',
};

export default function StaffMotivation() {
  return <FeaturePage data={data} />;
}
