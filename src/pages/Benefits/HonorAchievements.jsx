import BenefitPage from './BenefitPage';

const data = {
  heroVariant: 'v5',   // Warm gradient + award card leaderboard
  icon: '🎯',
  category: 'Honor Achievements',
  heroTitle: 'Recognize Every Contribution That Matters',
  heroDesc: 'Achievements deserve visibility and appreciation. WorkKudo gives organizations a structured way to honor accomplishments at every level — from individual wins to organization-wide milestones.',
  ctaPrimary: 'Start Recognizing',
  ctaSecondary: 'See How It Works',
  heroChips: ['🏆 Achievements', '⭐ Recognition', '🌟 Milestones'],
  floatChips: ['🏆 Just promoted', '⭐ 5-year milestone'],

  awardCardTitle: 'Recognition Board — Q4 2024',
  awardCardSub: '3 achievements celebrated this week',
  awardRows: [
    { name: 'Priya Sharma', role: 'Engineering Lead · Promoted', color: '#FF6B2C', badge: '🚀 Promoted' },
    { name: 'Marcus Chen', role: 'Design · 5-Year Anniversary', color: '#A78BFA', badge: '⭐ 5 Years' },
    { name: 'Aiko Tanaka', role: 'Product · Project Launch', color: '#34D399', badge: '🎯 Launch' },
  ],

  problemTitle: 'Most Achievements Go Unrecognized Until It\'s Too Late',
  problemDesc: 'Work anniversaries pass quietly. Promotions get a brief announcement. Project successes are celebrated in a meeting and forgotten by the following week. Individual contributions rarely receive the visibility they deserve.',
  problemDesc2: 'WorkKudo gives every achievement — personal, team-level, or organizational — a dedicated recognition experience that people actually remember.',
  problemPoints: [
    'Milestone recognition is inconsistent and depends entirely on manager initiative',
    'Individual contributions are often invisible to anyone outside the immediate team',
    'Annual reviews are too infrequent to capture ongoing achievements that drive culture',
    'Recognition moments that aren\'t preserved are quickly forgotten by employees',
  ],
  problemIllustration: (
    <>
      {[
        { icon: '🏆', label: 'Recognition Walls', sub: 'Public acknowledgment of achievement' },
        { icon: '📋', label: 'Celebration Boards', sub: 'Collaborative tributes to milestones' },
        { icon: '👏', label: 'Employee Spotlights', sub: 'Individual contributions made visible' },
      ].map((r, i) => (
        <div key={i} className="bpg-widget-row">
          <div className="bpg-widget-icon">{r.icon}</div>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  deepDiveTitle: 'Recognition Experiences Built for Every Type of Achievement',
  deepDiveDesc: 'WorkKudo provides tools to honor achievements at the individual, team, and organizational level — consistently and memorably.',
  deepDiveFeatures: [
    { icon: '🏆', title: 'Recognition Walls', desc: 'Public appreciation spaces where achievements are acknowledged and remain visible over time.' },
    { icon: '📋', title: 'Celebration Boards', desc: 'Collaborative boards where the whole team contributes to honoring a colleague\'s achievement.' },
    { icon: '👏', title: 'Employee Spotlights', desc: 'Feature individuals\' contributions in experiences that give their work company-wide visibility.' },
    { icon: '🎯', title: 'Achievement Campaigns', desc: 'Structured recognition programs that ensure key milestones are celebrated at the right moment.' },
    { icon: '📅', title: 'Automated Milestone Tracking', desc: 'Birthdays, anniversaries, and promotions are surfaced automatically so nothing goes uncelebrated.' },
    { icon: '📥', title: 'Permanent Keepsakes', desc: 'Every recognition experience can be downloaded and kept as a lasting reminder of the achievement.' },
  ],

  howItWorks: [
    { n: '01', icon: '🎯', title: 'Identify the Achievement', desc: 'Promotion, anniversary, project success, or individual milestone — every achievement qualifies.' },
    { n: '02', icon: '📩', title: 'Invite Colleagues', desc: 'Share the board so teammates can add personal messages, photos, and recognition.' },
    { n: '03', icon: '💬', title: 'Recognition Flows In', desc: 'Colleagues contribute appreciation that reflects the real impact of the achievement.' },
    { n: '04', icon: '🏆', title: 'Deliver the Tribute', desc: 'Present the complete recognition experience — a meaningful tribute they\'ll keep forever.' },
  ],

  useCases: [
    { icon: '🚀', title: 'Promotions', desc: 'Honor career advancement with a board signed by the whole team and leadership.' },
    { icon: '🎊', title: 'Work Anniversaries', desc: 'Celebrate years of dedication with a recognition experience that captures collective gratitude.' },
    { icon: '🏢', title: 'Team Accomplishments', desc: 'Acknowledge group achievements — product launches, milestones hit, goals exceeded.' },
    { icon: '🌟', title: 'Individual Success Stories', desc: 'Give exceptional individual contributors company-wide visibility and appreciation.' },
    { icon: '📣', title: 'Monthly Recognition', desc: 'Run structured monthly recognition programs that ensure achievements are honored consistently.' },
    { icon: '👔', title: 'Leadership Acknowledgements', desc: 'Enable leaders to recognize employees publicly in a way that resonates and is remembered.' },
  ],

  showcase: [
    { icon: '🏆', label: 'Promotion Celebration Board', desc: 'A board signed by the whole organization honoring a career milestone.', bg: '#FFF3EE', tags: ['Team-wide', 'Personal', 'Lasting'] },
    { icon: '⭐', label: 'Recognition Wall', bg: '#FFFBEB', desc: 'Public achievements visible to all.' },
    { icon: '👏', label: 'Employee Spotlight', bg: '#F5F3FF', desc: 'Individual contributions made visible.' },
    { icon: '📥', label: 'PDF Keepsake', bg: '#ECFDF5', tags: ['Download', 'Print', 'Frame'] },
    { icon: '📅', label: 'Milestone Timeline', bg: '#EEF1F7', desc: 'Anniversaries, promotions, project wins.' },
  ],

  benefits: [
    { icon: '🚀', title: 'Increased Motivation', desc: 'Employees who see their achievements recognized are more motivated to continue delivering great work.' },
    { icon: '💛', title: 'Better Morale', desc: 'Consistent recognition of contributions creates an environment where effort is genuinely valued.' },
    { icon: '😊', title: 'Greater Employee Satisfaction', desc: 'Recognized employees report higher satisfaction and feel a deeper connection to their organization.' },
    { icon: '🌱', title: 'Stronger Culture of Appreciation', desc: 'When achievement recognition is consistent, appreciation becomes part of how the organization works.' },
    { icon: '👁️', title: 'Visibility for All Contributions', desc: 'WorkKudo ensures recognition reaches every level, not just those with the most visible roles.' },
    { icon: '📈', title: 'Improved Retention', desc: 'Employees who feel their achievements are honored are more likely to stay and grow with the organization.' },
  ],

  faqTitle: 'Honor Achievements — FAQs',
  faqSubtitle: 'How WorkKudo helps organizations recognize contributions at every level.',
  faq: [
    { q: 'Can we recognize team achievements as well as individual ones?', a: 'Yes. WorkKudo supports both individual and team-level recognition experiences — boards can be dedicated to a person, a project, or an entire group.' },
    { q: 'Can achievements be recognized retroactively?', a: 'Absolutely. Create a recognition board at any time to honor a past achievement that deserves visibility and appreciation.' },
    { q: 'Can recognition boards be made public within the organization?', a: 'Yes. Boards can be shared via link with specific team members, a department, or the entire organization.' },
    { q: 'Can contributors add photos and personal stories?', a: 'Yes. Contributors can add rich messages, photos, GIFs, and personal notes that make recognition genuinely meaningful.' },
    { q: 'Are recognition boards preserved permanently?', a: 'Yes. Every board stays active indefinitely and can be downloaded as a high-resolution PDF keepsake.' },
  ],

  ctaHeadline: 'Every Achievement Deserves to Be Remembered',
  ctaDesc: 'Create recognition experiences that give contributions the visibility, appreciation, and lasting tribute they deserve.',
};

export default function HonorAchievements() {
  return <BenefitPage data={data} />;
}
