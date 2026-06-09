import BenefitPage from './BenefitPage';

const data = {
  heroVariant: 'v1',
  icon: '🌱',
  category: 'Build Community',
  heroTitle: 'Create a Workplace Where People Feel Connected',
  heroDesc: 'Employees thrive when they feel they belong to a supportive community. WorkKudo helps organizations build that sense of connection through shared experiences and genuine appreciation.',
  ctaPrimary: 'Build Your Community',
  ctaSecondary: 'See How It Works',
  heroChips: ['🤝 Belonging', '💛 Connection', '🌍 Inclusive'],
  heroStats: [
    { val: '4×', label: 'Higher retention' },
    { val: '91%', label: 'Feel they belong' },
  ],
  heroCardContent: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
      {[
        { text: '"Welcome to the team, Sarah! So excited to have you here 🌱"', from: 'The Whole Team', color: '#FF6B2C', bg: '#FFF3EE' },
        { text: '"This community is what makes coming to work worthwhile every day 💛"', from: 'People Team · HR', color: '#A78BFA', bg: '#F5F3FF' },
        { text: '"Five years together — thank you all for making it meaningful 🌟"', from: 'Jordan L. · Member', color: '#34D399', bg: '#ECFDF5' },
      ].map((n, i) => (
        <div key={i} className="bpg-note" style={{ borderLeftColor: n.color, background: n.bg }}>
          <span className="bpg-note-av" style={{ background: n.color }}>{n.from[0]}</span>
          <div><p>{n.text}</p><span>{n.from}</span></div>
        </div>
      ))}
    </div>
  ),

  problemTitle: 'Workplaces Without Community Leave People Feeling Isolated',
  problemDesc: 'Community doesn\'t form automatically. Without intentional recognition, shared celebrations, and visible appreciation, employees — especially in remote and distributed settings — feel disconnected.',
  problemDesc2: 'WorkKudo creates the shared experiences that build genuine workplace community: moments people remember, connections that outlast projects, and a culture where everyone feels they belong.',
  problemPoints: [
    'Remote and hybrid employees report higher rates of isolation and disconnection',
    'New employees take longer to feel part of the team without structured welcome experiences',
    'Cross-functional teams rarely celebrate shared achievements, limiting relationship depth',
    'Without shared touchpoints, workplace culture becomes fragmented and inconsistent',
  ],
  problemIllustration: (
    <>
      {[
        { icon: '🎉', label: 'Shared Celebrations', sub: 'Moments that bring people together' },
        { icon: '💌', label: 'Appreciation Campaigns', sub: 'Recognition that reaches everyone' },
        { icon: '🤝', label: 'Team Engagement', sub: 'Activities that build real connection' },
      ].map((r, i) => (
        <div key={i} className="bpg-widget-row">
          <div className="bpg-widget-icon">{r.icon}</div>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  deepDiveTitle: 'Build the Shared Experiences That Form Real Community',
  deepDiveDesc: 'WorkKudo gives organizations the tools to create moments of connection that employees genuinely remember.',
  deepDiveFeatures: [
    { icon: '🎉', title: 'Shared Celebrations', desc: 'Collaborative boards where the whole organization participates in welcoming, honoring, and celebrating people.' },
    { icon: '🏆', title: 'Recognition Programs', desc: 'Structured recognition campaigns that involve employees across all teams, levels, and locations.' },
    { icon: '💌', title: 'Appreciation Campaigns', desc: 'Time-bound appreciation initiatives that create collective moments of gratitude across the organization.' },
    { icon: '🌱', title: 'New Hire Welcome Boards', desc: 'Give every new employee a warm, memorable welcome from day one — signed by their entire team.' },
    { icon: '👥', title: 'Employee Spotlights', desc: 'Feature individuals in public recognition experiences that introduce them to the broader community.' },
    { icon: '🎊', title: 'Team Bonding Moments', desc: 'Create shared milestone experiences that bond teams beyond the daily work they do together.' },
  ],

  howItWorks: [
    { n: '01', icon: '🌱', title: 'Create a Shared Experience', desc: 'Launch a welcome board, celebration, or recognition campaign that the whole community can join.' },
    { n: '02', icon: '📩', title: 'Invite Everyone', desc: 'Share a link across your organization. No account needed — anyone can contribute instantly.' },
    { n: '03', icon: '💬', title: 'Community Participates', desc: 'Colleagues from every team add messages and appreciation, building genuine connections.' },
    { n: '04', icon: '🎉', title: 'A Memory Is Made', desc: 'The experience becomes a lasting community touchpoint that employees carry with them.' },
  ],

  useCases: [
    { icon: '🤝', title: 'New Hire Welcomes', desc: 'Give every new employee a board signed by their team before their first day.' },
    { icon: '🎊', title: 'Milestone Celebrations', desc: 'Bring the community together to celebrate anniversaries, promotions, and personal milestones.' },
    { icon: '👥', title: 'Team Bonding', desc: 'Create shared celebration experiences that strengthen bonds across and within teams.' },
    { icon: '🌟', title: 'Employee Spotlights', desc: 'Feature individuals publicly so the whole community can show appreciation.' },
    { icon: '💌', title: 'Appreciation Months', desc: 'Run company-wide appreciation campaigns that turn recognition into a community-building event.' },
    { icon: '🌍', title: 'Cross-Team Connection', desc: 'Bridge teams and departments through shared recognition experiences that span organizational lines.' },
  ],

  benefits: [
    { icon: '🌱', title: 'Strong Workplace Culture', desc: 'Shared experiences embed appreciation into daily culture, making community feel natural.' },
    { icon: '🤝', title: 'Increased Belonging', desc: 'Employees who are recognized and welcomed feel a deeper sense of belonging and commitment.' },
    { icon: '💛', title: 'Better Employee Relationships', desc: 'Shared celebrations create genuine connections that improve communication and trust across teams.' },
    { icon: '📈', title: 'Improved Retention', desc: 'Employees who feel part of a community are significantly more likely to stay long-term.' },
    { icon: '🌍', title: 'Inclusive Community', desc: 'WorkKudo ensures remote, hybrid, and distributed employees are equally part of the community.' },
    { icon: '🔗', title: 'Organizational Cohesion', desc: 'Shared recognition touchpoints align people around common values and a shared identity.' },
  ],

  faqTitle: 'Build Community — FAQs',
  faqSubtitle: 'How WorkKudo helps organizations create genuine workplace connection.',
  faq: [
    { q: 'Can WorkKudo help onboard new employees into the community?', a: 'Yes. Welcome boards are one of the most popular WorkKudo use cases — the whole team signs before day one.' },
    { q: 'Does this work for remote and distributed teams?', a: 'Fully. WorkKudo is async-first, mobile-friendly, and accessible globally — no timezone or location barriers.' },
    { q: 'Can we create community experiences across departments?', a: 'Absolutely. Boards and campaigns can be shared across the entire organization with unlimited contributors.' },
    { q: 'How does WorkKudo help new employees feel welcomed?', a: 'By making it easy for every colleague to add a personal message, photo, or note before the new hire starts.' },
    { q: 'Can boards be kept as lasting community memories?', a: 'Yes. Every board is preserved indefinitely and can be downloaded as a high-quality PDF keepsake.' },
  ],

  ctaHeadline: 'Build a Workplace People Are Proud to Belong To',
  ctaDesc: 'Create shared experiences, celebrate together, and make every employee feel genuinely connected — no matter where they work.',
};

export default function BuildCommunity() {
  return <BenefitPage data={data} />;
}
