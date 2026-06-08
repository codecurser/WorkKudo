import BenefitPage from './BenefitPage';

const data = {
  heroVariant: 'v2',   // Centered + dashboard board preview
  icon: '🚀',
  category: 'Boost Team Spirit',
  heroTitle: 'Build Teams That Celebrate Success Together',
  heroDesc: 'Strong teams are built through appreciation, recognition, and shared experiences. WorkKudo gives every team the space to celebrate wins and strengthen the bonds that make work meaningful.',
  ctaPrimary: 'Start Celebrating',
  ctaSecondary: 'See How It Works',
  heroChips: ['🎉 Celebrations', '🏆 Recognition', '💛 Team Wins', '🤝 Together'],

  previewNotes: [
    { name: 'Sarah Chen', role: 'Engineering · Lead', color: '#FF6B2C', msg: '"Incredible work on the launch — every single one of you! Couldn\'t be prouder 🚀"' },
    { name: 'Marcus R.', role: 'Product · Manager', color: '#A78BFA', msg: '"Proudest quarter yet. Thank you for showing up every day, this win belongs to all of us 💛"' },
    { name: 'Aiko T.', role: 'Design · Director', color: '#34D399', msg: '"This team is the reason we keep winning. You make everything look beautiful 🌟"' },
  ],

  problemTitle: 'Teams That Don\'t Celebrate Together Drift Apart',
  problemDesc: 'When wins go unacknowledged, team spirit weakens quietly. People do great work, hit milestones, and support each other — but without shared celebration, the effort feels invisible.',
  problemDesc2: 'WorkKudo gives teams a dedicated space to celebrate together, acknowledge contributions, and build the kind of morale that sustains performance over the long term.',
  problemPoints: [
    'Unrecognized wins create a culture where effort feels thankless',
    'Remote and hybrid teams miss out on natural in-person celebration moments',
    'Strong performance doesn\'t automatically lead to strong team cohesion',
    'Managers carry the entire recognition burden, which limits reach and consistency',
  ],
  problemIllustration: (
    <>
      {[
        { icon: '🎉', label: 'Team Celebrations', sub: 'Shared moments that build connection' },
        { icon: '🏆', label: 'Recognition Campaigns', sub: 'Organized appreciation across teams' },
        { icon: '🌟', label: 'Shared Milestones', sub: 'Every win acknowledged together' },
      ].map((r, i) => (
        <div key={i} className="bpg-widget-row">
          <div className="bpg-widget-icon">{r.icon}</div>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  deepDiveTitle: 'Every Tool Your Team Needs to Celebrate Together',
  deepDiveDesc: 'WorkKudo turns everyday workplace moments into shared celebrations that strengthen team bonds.',
  deepDiveFeatures: [
    { icon: '📋', title: 'Appreciation Walls', desc: 'Public spaces where team members recognize each other openly — visible to the whole organization.' },
    { icon: '🎉', title: 'Team Celebrations', desc: 'Collaborative boards for team wins, project completions, and department achievements.' },
    { icon: '📣', title: 'Recognition Campaigns', desc: 'Organized, time-bound recognition drives that bring entire teams together around shared appreciation.' },
    { icon: '🎊', title: 'Shared Milestones', desc: 'Celebrate anniversaries, promotions, and company milestones as a team — not just between manager and employee.' },
    { icon: '💌', title: 'Personal Messages', desc: 'Every team member can add rich, heartfelt messages with photos, GIFs, and personal notes.' },
    { icon: '🔔', title: 'Celebration Reminders', desc: 'Automated alerts ensure every team moment — big and small — gets the celebration it deserves.' },
  ],

  howItWorks: [
    { n: '01', icon: '✨', title: 'Create a Celebration', desc: 'Launch a board for a team win, project success, or workplace milestone in minutes.' },
    { n: '02', icon: '📩', title: 'Invite Your Team', desc: 'Share a link so everyone can contribute — no account needed, no friction.' },
    { n: '03', icon: '💬', title: 'Celebrate Together', desc: 'Team members add messages, photos, and reactions that build a shared memory.' },
    { n: '04', icon: '🎉', title: 'Deliver the Moment', desc: 'Send the completed celebration experience and let it become a lasting team memory.' },
  ],

  useCases: [
    { icon: '🚀', title: 'Project Completion', desc: 'Celebrate finishing a product launch, campaign, or major deliverable as a whole team.' },
    { icon: '🏆', title: 'Team Wins', desc: 'Acknowledge quarterly achievements, sales targets hit, or operational goals reached.' },
    { icon: '🏢', title: 'Department Achievements', desc: 'Recognize department-wide milestones and the collaborative effort behind them.' },
    { icon: '🎊', title: 'Company Celebrations', desc: 'Bring the entire organization together to celebrate company anniversaries and major moments.' },
    { icon: '🌟', title: 'Individual Spotlights', desc: 'Highlight team members who went above and beyond so the whole team can show appreciation.' },
    { icon: '🤝', title: 'Cross-Team Recognition', desc: 'Bridge departments and functions by celebrating collaboration across organizational lines.' },
  ],

  showcase: [
    { icon: '🚀', label: 'Launch Celebration Board', desc: 'A team board capturing every message from the product launch.', bg: '#FFF3EE', tags: ['Engineering', 'Product', 'Design'] },
    { icon: '🏆', label: 'Team Win Wall', bg: '#ECFDF5', desc: 'Public recognition of a quarterly achievement.' },
    { icon: '💛', label: 'Appreciation Post', bg: '#F5F3FF', desc: 'Peer-to-peer celebration in one click.' },
    { icon: '🎊', label: 'Company Milestone', bg: '#FFFBEB', tags: ['Company-wide', 'Shared'] },
    { icon: '📸', label: 'Memory Board', bg: '#EEF1F7', desc: 'Photos + messages = lasting team memory.' },
  ],

  benefits: [
    { icon: '🤝', title: 'Stronger Relationships', desc: 'Shared celebration builds genuine trust and connection between team members.' },
    { icon: '💬', title: 'Improved Collaboration', desc: 'Teams that celebrate together communicate better and support each other more effectively.' },
    { icon: '😊', title: 'Greater Employee Satisfaction', desc: 'Recognized employees report higher satisfaction and are more likely to stay long-term.' },
    { icon: '🌟', title: 'Better Workplace Atmosphere', desc: 'A culture of celebration creates an environment where people are genuinely excited to show up.' },
    { icon: '🚀', title: 'Higher Team Performance', desc: 'Morale and motivation compound — celebrated teams consistently outperform.' },
    { icon: '🌱', title: 'Lasting Team Culture', desc: 'Celebration habits become embedded in how your team works and connects every day.' },
  ],

  faqTitle: 'Boost Team Spirit — FAQs',
  faqSubtitle: 'How WorkKudo helps teams celebrate and strengthen their bonds.',
  faq: [
    { q: 'Can entire departments use WorkKudo for team celebrations?', a: 'Yes. WorkKudo boards can be shared across entire departments or the whole organization, with unlimited contributors.' },
    { q: 'Do remote team members need an account to participate?', a: 'No. Anyone with the shareable link can contribute messages, photos, and reactions without creating an account.' },
    { q: 'Can we celebrate team wins rather than just individual milestones?', a: 'Absolutely. WorkKudo supports team-level celebrations — boards dedicated to group achievements, project completions, and shared wins.' },
    { q: 'How quickly can we set up a team celebration?', a: 'A board is ready to share in under two minutes. Invite your team, and contributions can start immediately.' },
    { q: 'Can boards be saved as lasting team memories?', a: 'Yes. Every board stays active indefinitely and can be downloaded as a high-resolution PDF keepsake.' },
  ],

  ctaHeadline: 'Give Your Team the Celebration They Deserve',
  ctaDesc: 'Start building team spirit through shared recognition, collaborative celebrations, and appreciation that brings people closer together.',
};

export default function BoostTeamSpirit() {
  return <BenefitPage data={data} />;
}
