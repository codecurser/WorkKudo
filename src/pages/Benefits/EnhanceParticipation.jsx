import BenefitPage from './BenefitPage';

const data = {
  heroVariant: 'v1',
  icon: '💬',
  category: 'Enhance Participation',
  heroTitle: 'Encourage Every Employee to Get Involved',
  heroDesc: 'Recognition programs only succeed when people actively participate. WorkKudo removes every barrier so contributing feels as natural as sending a message.',
  ctaPrimary: 'Get More People Involved',
  ctaSecondary: 'See How It Works',
  heroChips: ['📩 Easy Contributions', '🌍 Remote-Friendly', '⚡ No Friction'],
  heroStats: [
    { val: '<1min', label: 'To contribute' },
    { val: '3×', label: 'Higher participation' },
  ],
  heroCardContent: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
      {[
        { text: '"Added my message in 30 seconds from my phone — zero friction 📱"', from: 'Alex R. · Remote', color: '#FF6B2C', bg: '#FFF3EE' },
        { text: '"No account needed, just clicked the link and signed the board 💛"', from: 'Maya S. · Hybrid', color: '#A78BFA', bg: '#F5F3FF' },
        { text: '"Got a reminder and contributed right before the deadline 🔔"', from: 'Jordan L. · Distributed', color: '#34D399', bg: '#ECFDF5' },
      ].map((n, i) => (
        <div key={i} className="bpg-note" style={{ borderLeftColor: n.color, background: n.bg }}>
          <span className="bpg-note-av" style={{ background: n.color }}>{n.from[0]}</span>
          <div><p>{n.text}</p><span>{n.from}</span></div>
        </div>
      ))}
    </div>
  ),

  problemTitle: 'Low Participation Is the Most Common Reason Recognition Programs Fail',
  problemDesc: 'Even the best-designed recognition program delivers little value if only a fraction of employees participate. Busy schedules, platform friction, and lack of reminders keep contribution rates low.',
  problemDesc2: 'WorkKudo is designed from the ground up to maximize participation — making it effortless for every employee to contribute, regardless of their role, location, or schedule.',
  problemPoints: [
    'Contribution platforms that require sign-up see dramatically lower participation',
    'Distributed and remote teams miss opportunities due to timezone and tool gaps',
    'Without reminders, contributors simply forget until it\'s too late',
    'Complex contribution processes deter busy employees from getting involved',
  ],
  problemIllustration: (
    <>
      {[
        { icon: '🔗', label: 'Shareable Link Access', sub: 'No account required to contribute' },
        { icon: '📱', label: 'Mobile Participation', sub: 'Contribute from any device, anywhere' },
        { icon: '🔔', label: 'Automated Reminders', sub: 'Timely nudges before deadlines' },
      ].map((r, i) => (
        <div key={i} className="bpg-widget-row">
          <div className="bpg-widget-icon">{r.icon}</div>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  deepDiveTitle: 'Every Feature Built to Drive Higher Participation',
  deepDiveDesc: 'WorkKudo removes every obstacle between an employee and their contribution.',
  deepDiveFeatures: [
    { icon: '🔗', title: 'Zero-Account Contribution', desc: 'Anyone with the link can add a message, photo, or GIF without creating an account. No onboarding, no friction.' },
    { icon: '📱', title: 'Mobile-First Experience', desc: 'Fully optimized for phones and tablets — employees can contribute from anywhere in under a minute.' },
    { icon: '🔔', title: 'Automated Reminders', desc: 'Scheduled reminders notify contributors when boards are open and again as deadlines approach.' },
    { icon: '💬', title: 'Notion Integration', desc: 'Board invitations and contribution links can be shared directly inside your Notion workspace.' },
    { icon: '📅', title: 'Flexible Timing', desc: 'Contributors can participate at any time — async-first design accommodates every timezone and schedule.' },
    { icon: '🌍', title: 'Global Accessibility', desc: 'Every WorkKudo experience works across geographies, languages, and devices without technical barriers.' },
  ],

  howItWorks: [
    { n: '01', icon: '✨', title: 'Create the Board', desc: 'Launch a recognition board or celebration in minutes and set a delivery date.' },
    { n: '02', icon: '📩', title: 'Invite Contributors', desc: 'Share a link via email, Notion, or direct URL — no account required to participate.' },
    { n: '03', icon: '💬', title: 'Everyone Contributes', desc: 'Team members add messages at their own pace. Automated reminders keep participation high.' },
    { n: '04', icon: '🎉', title: 'Deliver Together', desc: 'The completed experience is delivered with contributions from the whole team.' },
  ],

  useCases: [
    { icon: '🎂', title: 'Recognition Campaigns', desc: 'Drive high participation in structured appreciation drives across teams and departments.' },
    { icon: '📋', title: 'Celebration Boards', desc: 'Ensure maximum contribution on birthday, farewell, and milestone boards before delivery.' },
    { icon: '🌍', title: 'Employee Appreciation Events', desc: 'Engage every employee across locations in company-wide appreciation initiatives.' },
    { icon: '🌱', title: 'Culture Initiatives', desc: 'Build participation habits through regular, low-friction recognition touchpoints.' },
    { icon: '🤝', title: 'Onboarding Welcome Boards', desc: 'Help new hires feel immediately welcomed with a board signed by the whole team on day one.' },
    { icon: '📣', title: 'Team Shout-outs', desc: 'Enable spontaneous peer-to-peer recognition that anyone can initiate and everyone can join.' },
  ],

  benefits: [
    { icon: '📈', title: 'Increased Engagement', desc: 'Frictionless contribution drives dramatically higher participation rates across programs.' },
    { icon: '💛', title: 'Higher Contribution Rates', desc: 'More team members contribute when participation is simple, accessible, and well-timed.' },
    { icon: '🌍', title: 'More Inclusive Participation', desc: 'Remote, hybrid, and distributed employees participate equally with no geographic barriers.' },
    { icon: '😊', title: 'Better Employee Experience', desc: 'Employees who contribute to recognition feel more connected to their teams and organization.' },
    { icon: '⚡', title: 'Faster Completion', desc: 'Boards fill up faster when contribution is effortless, ensuring great results every time.' },
    { icon: '🔗', title: 'Greater Culture Reach', desc: 'Recognition reaches every corner of the organization, not just those nearest the manager.' },
  ],

  faqTitle: 'Enhance Participation — FAQs',
  faqSubtitle: 'How WorkKudo helps maximize employee participation in recognition programs.',
  faq: [
    { q: 'Do employees need a WorkKudo account to contribute?', a: 'No. Anyone with the shareable link can add messages, photos, and GIFs without creating an account.' },
    { q: 'How are contribution reminders sent?', a: 'Reminders are delivered via email. When Notion is connected, updates are also visible in your team workspace.' },
    { q: 'Can employees contribute from their phone?', a: 'Yes. WorkKudo is fully mobile-optimized. Employees can contribute from any smartphone or tablet without installing an app.' },
    { q: 'How much time does it take to contribute?', a: 'Most contributors are done in under a minute — add a message, optionally attach a photo, and submit.' },
    { q: 'Can I see who has and hasn\'t contributed yet?', a: 'Board creators can see contribution counts and, on certain plans, individual contributor status to help with follow-up.' },
  ],

  ctaHeadline: 'Make Participation the Easy Part',
  ctaDesc: 'Remove every barrier between your team and meaningful recognition. More participation means more connection, more culture, and more impact.',
};

export default function EnhanceParticipation() {
  return <BenefitPage data={data} />;
}
