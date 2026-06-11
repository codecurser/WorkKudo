import React from 'react';
import FeaturePage from './FeaturePage';
import heroImg from '../../assets/dashboard.png';

const data = {
  accent: '#3B82F6',
  accentSoft: '#EFF6FF',
  icon: '📈',
  category: 'Group Insights',
  heroImage: heroImg,
  heroTitle: 'Understand How Recognition Flows Across Your Organization',
  heroDesc: 'See participation patterns, engagement activity, and culture adoption across groups — without fabricated metrics or fake analytics.',
  ctaPrimary: 'Explore Insights',
  ctaSecondary: 'See How It Works',
  heroChips: ['👥 Group Activity', '📊 Participation', '🔍 Trends'],
  heroCardContent: (
    <>
      {[
        { icon: '👥', label: 'Engineering', sub: 'Active contributors this month', color: '#3B82F6' },
        { icon: '🎯', label: 'Product Team', sub: 'Recognition campaign participation', color: '#A78BFA' },
        { icon: '🌱', label: 'People & Culture', sub: 'Culture initiative engagement', color: '#34D399' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row" style={{ borderLeft: `3px solid ${r.color}` }}>
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong style={{ color: r.color }}>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Organizations Struggle to Understand Participation and Engagement',
  problemDesc: 'HR leaders and managers often have no visibility into how recognition programs are actually being used across teams and departments.',
  problemDesc2: 'Without this visibility, it\'s impossible to know which teams are thriving, which are disengaged, or how to improve culture initiatives over time.',
  problemPoints: [
    'No visibility into which teams are actively participating',
    'Recognition gaps are invisible until they become retention issues',
    'Program effectiveness is difficult to measure without data',
    'Leadership lacks insight to make culture-driven decisions',
  ],
  problemMockup: {
    title: '📈 Group Engagement Insights',
    cards: [
      { emoji: '👥', tag: 'Engineering', title: 'Highest Participation This Quarter', msg: "Engineering hit 91% participation in the recognition program — the highest of any department. This data helped us replicate their approach org-wide.", from: 'Fatima Al-Hassan', role: 'Head of HR' },
      { emoji: '📊', tag: 'Product', title: 'Engagement Up 34% After Campaign', msg: "After the appreciation campaign, Product team recognition activity jumped significantly. Group insights made that visible.", from: 'Raj Mehta', role: 'Culture Program Manager' },
      { emoji: '🔍', tag: 'Trend', title: 'Q3 vs Q2 Participation Trend', msg: "Seeing participation by department over time helped us identify which teams were drifting and reach out proactively.", from: 'Yuki Tanaka', role: 'People Analytics Lead' },
    ],
  },

  deepDiveTitle: 'See the Full Picture of Recognition Across Your Organization',
  deepDiveDesc: 'Group Insights surfaces engagement patterns and participation trends across every team, department, and initiative.',
  deepDiveFeatures: [
    { icon: '👥', title: 'Group Participation Views', desc: 'See how different teams and departments engage with recognition programs across a given period.' },
    { icon: '📊', title: 'Department Comparisons', desc: 'Identify which groups are most active and which may need additional support or visibility.' },
    { icon: '📅', title: 'Timeline Views', desc: 'Track how engagement changes over time — around campaigns, milestones, or organizational changes.' },
    { icon: '🎯', title: 'Program Adoption', desc: 'See how quickly new recognition initiatives are adopted across different groups in your organization.' },
    { icon: '🔔', title: 'Participation Alerts', desc: 'Get notified when group engagement drops below expected levels, so you can act before disengagement sets in.' },
    { icon: '📤', title: 'Export & Share', desc: 'Export group reports to share with HR leaders and department heads for culture reviews and planning.' },
  ],

  howItWorks: [
    { n: '01', icon: '🏗️', title: 'Set Up Programs', desc: 'Launch recognition campaigns and culture initiatives across your organization.' },
    { n: '02', icon: '👥', title: 'Employees Participate', desc: 'Teams contribute, recognize each other, and engage with programs at their own pace.' },
    { n: '03', icon: '📊', title: 'Insights Are Generated', desc: 'WorkKudo automatically surfaces group participation patterns and engagement activity.' },
    { n: '04', icon: '🔍', title: 'Take Action', desc: 'Use insights to improve programs, support disengaged teams, and strengthen culture initiatives.' },
  ],

  useCases: [
    { icon: '🏢', title: 'Department Analysis', desc: 'Understand engagement levels across different departments and organizational units.' },
    { icon: '📋', title: 'Engagement Reviews', desc: 'Conduct quarterly reviews of recognition participation as part of HR culture reporting.' },
    { icon: '🎯', title: 'Recognition Campaigns', desc: 'Track adoption and participation in company-wide recognition drives and appreciation months.' },
    { icon: '👀', title: 'Participation Monitoring', desc: 'Identify teams that are consistently underrepresented in recognition programs.' },
    { icon: '📊', title: 'Team Comparisons', desc: 'Compare engagement across teams to understand what drives high-participation cultures.' },
    { icon: '🌎', title: 'Culture Initiatives', desc: 'Measure how effectively culture and inclusion programs are reaching their intended audiences.' },
  ],

  showcase: [
    { icon: '👥', label: 'Team Participation Overview', desc: 'A clear view of which teams are engaging with recognition programs.', size: 'large', bg: '#EFF6FF', tags: ['Engineering', 'Product', 'Design', 'HR'] },
    { icon: '📊', label: 'Department Engagement', size: 'small', bg: '#F5F3FF', desc: 'Compare activity across groups.' },
    { icon: '📅', label: 'Activity Timeline', size: 'small', bg: '#ECFDF5', desc: 'Track trends over time.' },
    { icon: '🎯', label: 'Program Adoption', size: 'small', bg: '#FFFBEB', desc: 'See how campaigns are adopted.' },
    { icon: '📤', label: 'Export Reports', size: 'large', bg: '#EEF1F7', tags: ['PDF', 'CSV', 'Leadership Reports'] },
  ],

  benefits: [
    { icon: '🧠', title: 'Better Decision Making', desc: 'Equip HR leaders and managers with real participation data to guide culture decisions.' },
    { icon: '👁️', title: 'Team Visibility', desc: 'Surface which teams are thriving and which may be disengaged before issues become serious.' },
    { icon: '🌱', title: 'Culture Improvement', desc: 'Use participation patterns to refine recognition programs and strengthen culture initiatives.' },
    { icon: '🎯', title: 'Participation Awareness', desc: 'Understand engagement levels across your organization without manual surveys or reports.' },
    { icon: '⚡', title: 'Faster Action', desc: 'Identify gaps quickly so HR teams can respond before engagement drops impact retention.' },
    { icon: '🔗', title: 'Organization Alignment', desc: 'Ensure recognition efforts are reaching all teams consistently, not just the most vocal ones.' },
  ],

  faqTitle: 'Group Insights — FAQs',
  faqSubtitle: 'How WorkKudo helps you understand recognition patterns across your organization.',
  faq: [
    { q: 'What does Group Insights actually measure?', a: 'It surfaces participation patterns across teams and departments — which groups are engaging with recognition programs, contributing to boards, and participating in culture initiatives.' },
    { q: 'Is this real-time or historical?', a: 'Both. You can view current activity in near real-time and also explore historical trends to see how engagement changes over time.' },
    { q: 'Can I filter insights by department or team?', a: 'Yes. Insights can be segmented by department, team, location, or custom group depending on your organizational setup.' },
    { q: 'Does this require any setup or integrations?', a: 'Basic insights are available automatically as your team uses WorkKudo. Deeper group segmentation can be set up by your admin.' },
    { q: 'Who can access Group Insights?', a: 'Access is role-based. HR admins and leadership can access full organizational views, while managers see data relevant to their teams.' },
  ],

  ctaHeadline: 'See What\'s Really Happening Across Your Organization',
  ctaDesc: 'Understand how recognition flows through your teams and use those insights to build a stronger, more engaged workplace culture.',
};

export default function GroupInsights() {
  return <FeaturePage data={data} />;
}
