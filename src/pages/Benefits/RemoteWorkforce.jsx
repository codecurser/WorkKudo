import BenefitPage from './BenefitPage';

const data = {
  heroVariant: 'v1',
  icon: '🌐',
  category: 'Remote Workforce',
  heroTitle: 'Bring Distributed Teams Closer Together',
  heroDesc: "Distance shouldn't prevent meaningful recognition. WorkKudo makes it possible for remote and globally distributed teams to celebrate, appreciate, and connect — regardless of location or timezone.",
  ctaPrimary: 'Connect Your Remote Team',
  ctaSecondary: 'See How It Works',
  heroChips: ['🌍 Global Teams', '⏰ Async-First', '📱 Any Device'],
  heroStats: [
    { val: '192+', label: 'Countries reached' },
    { val: '100%', label: 'Async-first design' },
  ],
  heroCardContent: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
      {[
        { text: '"Celebrating from Singapore — so grateful to be part of this team 🌏"', from: 'Wei L. · Singapore', color: '#FF6B2C', bg: '#FFF3EE' },
        { text: '"Distance never felt smaller. Thank you for including everyone 💛"', from: 'Amara K. · Lagos', color: '#A78BFA', bg: '#F5F3FF' },
        { text: '"Signed from Toronto — this board made my entire week! 🎉"', from: 'James P. · Toronto', color: '#34D399', bg: '#ECFDF5' },
      ].map((n, i) => (
        <div key={i} className="bpg-note" style={{ borderLeftColor: n.color, background: n.bg }}>
          <span className="bpg-note-av" style={{ background: n.color }}>{n.from[0]}</span>
          <div><p>{n.text}</p><span>{n.from}</span></div>
        </div>
      ))}
    </div>
  ),

  problemTitle: 'Remote Employees Miss Out on the Recognition Moments That Build Culture',
  problemDesc: 'In-office birthday cakes, hallway congratulations, and after-work celebrations simply don\'t reach remote employees. The informal recognition that builds culture in physical offices is invisible online.',
  problemDesc2: 'WorkKudo creates digital-first recognition experiences that are just as meaningful for a teammate in a different timezone as they are for someone sitting across the desk.',
  problemPoints: [
    'Remote employees are less likely to receive spontaneous recognition than in-office peers',
    'Timezone differences mean remote workers miss real-time celebrations',
    'Without a digital-first platform, recognition is limited to those physically present',
    'Distributed teams struggle to build shared culture without shared experiences',
  ],
  problemIllustration: (
    <>
      {[
        { icon: '🌍', label: 'Global Accessibility', sub: 'Works in every country and timezone' },
        { icon: '⏰', label: 'Async Participation', sub: 'Contribute when it works for you' },
        { icon: '📱', label: 'Any Device, Anywhere', sub: 'Phone, tablet, or desktop — no install' },
      ].map((r, i) => (
        <div key={i} className="bpg-widget-row">
          <div className="bpg-widget-icon">{r.icon}</div>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  deepDiveTitle: 'Recognition Built for How Distributed Teams Actually Work',
  deepDiveDesc: 'WorkKudo is async-first, mobile-ready, and globally accessible so no remote employee is ever left out.',
  deepDiveFeatures: [
    { icon: '⏰', title: 'Async-First Design', desc: 'Contributors add messages on their own schedule — no need to coordinate across timezones.' },
    { icon: '🌍', title: 'Global Accessibility', desc: 'WorkKudo works in every country, on every device, with no geographic restrictions or limitations.' },
    { icon: '📱', title: 'Mobile-Optimized', desc: 'Full contribution experience on any smartphone — remote employees can participate from anywhere.' },
    { icon: '💬', title: 'Slack & Teams Integration', desc: 'Recognition delivered inside Slack and Microsoft Teams channels, where remote teams already work.' },
    { icon: '🔔', title: 'Timezone-Aware Reminders', desc: 'Contribution reminders reach employees at appropriate times, accounting for global distribution.' },
    { icon: '📥', title: 'Digital Delivery', desc: 'Finished recognition experiences are delivered digitally via email, Slack, or Teams — wherever the recipient is.' },
  ],

  howItWorks: [
    { n: '01', icon: '🌍', title: 'Create the Experience', desc: 'Launch a board or recognition campaign accessible to your entire global team.' },
    { n: '02', icon: '📩', title: 'Invite Globally', desc: 'Share a link that works anywhere in the world — no VPN, no account, no barriers.' },
    { n: '03', icon: '⏰', title: 'Async Contributions', desc: 'Team members contribute in their own time, from their own location, on their own device.' },
    { n: '04', icon: '🎉', title: 'Deliver Everywhere', desc: 'The completed experience is delivered digitally to the recipient, wherever they are.' },
  ],

  useCases: [
    { icon: '🎂', title: 'Remote Birthdays', desc: 'Ensure remote employees receive a board signed by the whole team on their birthday.' },
    { icon: '🏆', title: 'Global Recognition Programs', desc: 'Run recognition campaigns that reach every team member regardless of geography.' },
    { icon: '🎉', title: 'Virtual Team Celebrations', desc: 'Celebrate project launches, milestones, and wins with a team spread across the world.' },
    { icon: '🤝', title: 'Distributed Onboarding', desc: 'Welcome new remote employees with a board signed by the entire team before day one.' },
    { icon: '👋', title: 'Virtual Farewells', desc: 'Send off departing remote employees with a farewell board from their global colleagues.' },
    { icon: '🌱', title: 'Culture Initiatives', desc: 'Run inclusion and culture programs that are equally accessible to all locations.' },
  ],

  benefits: [
    { icon: '🌍', title: 'Stronger Remote Culture', desc: 'Shared digital recognition experiences build culture for teams that never share a physical space.' },
    { icon: '🔗', title: 'Increased Connection', desc: 'Remote employees who receive recognition feel more connected to their team and organization.' },
    { icon: '💬', title: 'Better Engagement', desc: 'Recognition that reaches remote employees consistently drives higher engagement and morale.' },
    { icon: '✅', title: 'Improved Participation', desc: 'Async-first design removes timezone and schedule barriers that typically reduce remote participation.' },
    { icon: '🤝', title: 'Greater Inclusion', desc: 'Every recognition experience reaches all employees equally — no matter where they work.' },
    { icon: '📈', title: 'Reduced Remote Attrition', desc: 'Remote employees who feel seen and appreciated are significantly more likely to stay.' },
  ],

  faqTitle: 'Remote Workforce — FAQs',
  faqSubtitle: 'How WorkKudo connects and recognizes distributed teams globally.',
  faq: [
    { q: 'Can contributors in different timezones still participate?', a: 'Yes. WorkKudo is async-first — there\'s no real-time requirement. Contributors join when it works for them.' },
    { q: 'Does WorkKudo work without a VPN or corporate network?', a: 'Yes. WorkKudo is fully web-based and accessible on any internet connection, anywhere in the world.' },
    { q: 'Can remote employees contribute without creating an account?', a: 'Absolutely. Anyone with the shareable link can contribute without signing up — from any device, anywhere.' },
    { q: 'Can recognition be delivered to remote employees via Slack or Teams?', a: 'Yes. When integrations are connected, boards and notifications are delivered directly in Slack or Microsoft Teams.' },
    { q: 'How does WorkKudo help remote employees feel included in in-office celebrations?', a: 'Boards are digital and async — every remote employee has the same opportunity to contribute and receive recognition as in-office colleagues.' },
  ],

  ctaHeadline: 'Distance Is No Longer a Barrier to Meaningful Recognition',
  ctaDesc: 'Bring your global team together through shared experiences, digital celebrations, and appreciation that reaches everyone — anywhere.',
};

export default function RemoteWorkforce() {
  return <BenefitPage data={data} />;
}
