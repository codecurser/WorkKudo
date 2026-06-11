import React from 'react';
import FeaturePage from './FeaturePage';
import heroImg from '../../assets/analytics.png';

const data = {
  accent: '#8B5CF6',
  accentSoft: '#F5F3FF',
  icon: '🔍',
  category: 'Metrics',
  heroImage: heroImg,
  heroTitle: 'Measure the Impact of Recognition Across Your Organization',
  heroDesc: 'Gain clear visibility into activity levels, engagement patterns, and program performance — so you can build recognition programs that actually work.',
  ctaPrimary: 'View Metrics',
  ctaSecondary: 'How It Works',
  heroChips: ['📊 Activity', '🎯 Engagement', '📈 Performance'],
  heroCardContent: (
    <>
      {[
        { icon: '✅', label: 'Program Activity', sub: 'Boards created and delivered', color: '#8B5CF6' },
        { icon: '👥', label: 'Contributor Count', sub: 'Teammates who participated', color: '#FF6B2C' },
        { icon: '🎯', label: 'Engagement Rate', sub: 'Across active programs', color: '#34D399' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row" style={{ borderLeft: `3px solid ${r.color}` }}>
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Recognition Programs Are Difficult to Improve Without Visibility',
  problemDesc: 'Most organizations run recognition programs without any way to measure whether they\'re having the intended impact on culture and engagement.',
  problemDesc2: 'Without clear metrics, HR teams can\'t identify what\'s working, justify program investments to leadership, or make data-informed improvements over time.',
  problemPoints: [
    'No visibility into program performance or engagement levels',
    'Impossible to improve what you can\'t measure',
    'Leadership cannot evaluate culture initiative ROI',
    'Recognition gaps go undetected until they cause disengagement',
  ],
  problemMockup: {
    title: '🔍 Recognition Metrics Dashboard',
    cards: [
      { emoji: '✅', tag: 'Activity', title: '148 Boards Delivered This Quarter', msg: "Seeing the total number of boards delivered gave leadership the concrete evidence they needed to expand the program budget.", from: 'Helen Park', role: 'Chief People Officer' },
      { emoji: '👥', tag: 'Engagement', title: 'Contributor Rate: 78% Org-Wide', msg: "Nearly 8 in 10 employees participated in at least one recognition experience. That number would have been invisible without metrics.", from: 'Chris Thornton', role: 'Employee Experience Lead' },
      { emoji: '📈', tag: 'Trend', title: 'Engagement Up Month-over-Month', msg: "The upward trend in participation directly correlated with the team celebration we ran in February. Metrics made the connection clear.", from: 'Amara Diallo', role: 'HR Analytics Manager' },
    ],
  },

  deepDiveTitle: 'Clear Visibility Into Every Dimension of Recognition',
  deepDiveDesc: 'Metrics give HR teams, managers, and leadership the context they need to run effective recognition programs.',
  deepDiveFeatures: [
    { icon: '📊', title: 'Activity Summaries', desc: 'See how many boards were created, contributions made, and programs delivered across any time period.' },
    { icon: '👥', title: 'Participation Breakdowns', desc: 'Understand who is participating — across teams, roles, departments, and locations.' },
    { icon: '📈', title: 'Engagement Trends', desc: 'Track how engagement changes over time, and identify the impact of specific programs or initiatives.' },
    { icon: '🎯', title: 'Program Performance', desc: 'Evaluate how individual recognition programs and campaigns perform against participation goals.' },
    { icon: '⏱️', title: 'Timeliness Indicators', desc: 'See how quickly teams respond to recognition opportunities and whether key moments are being captured.' },
    { icon: '📤', title: 'Exportable Reports', desc: 'Share metrics with leadership in structured reports for culture reviews, board presentations, and HR planning.' },
  ],

  howItWorks: [
    { n: '01', icon: '🚀', title: 'Launch Programs', desc: 'Create and run recognition initiatives, boards, and campaigns across your organization.' },
    { n: '02', icon: '💬', title: 'Employees Engage', desc: 'Team members participate, contribute messages, and interact with recognition experiences.' },
    { n: '03', icon: '📊', title: 'Metrics Are Captured', desc: 'WorkKudo automatically tracks activity, engagement, and participation across all programs.' },
    { n: '04', icon: '🔍', title: 'Analyze & Improve', desc: 'Review metrics to refine programs, identify gaps, and continuously strengthen your recognition culture.' },
  ],

  useCases: [
    { icon: '📋', title: 'HR Reviews', desc: 'Present participation and engagement data in quarterly HR reviews and culture planning sessions.' },
    { icon: '🌱', title: 'Culture Programs', desc: 'Measure the effectiveness of culture and inclusion initiatives across the organization.' },
    { icon: '💼', title: 'Employee Engagement', desc: 'Track how recognition activity correlates with engagement levels across teams and departments.' },
    { icon: '👔', title: 'Leadership Reporting', desc: 'Give senior leaders visibility into recognition program performance and culture health.' },
    { icon: '📊', title: 'Recognition Tracking', desc: 'Ensure no milestone, achievement, or contribution goes uncelebrated by monitoring gaps in coverage.' },
    { icon: '⚡', title: 'Program Optimization', desc: 'Use performance data to adjust program timing, formats, and audiences for better outcomes.' },
  ],

  showcase: [
    { icon: '📊', label: 'Activity Dashboard', desc: 'A clean overview of all program activity, contributions, and participation across the organization.', size: 'large', bg: '#F5F3FF', tags: ['Boards', 'Contributors', 'Programs'] },
    { icon: '📈', label: 'Engagement Trend', size: 'small', bg: '#FFF3EE', desc: 'Track how participation changes over time.' },
    { icon: '🎯', label: 'Program Performance', size: 'small', bg: '#ECFDF5', desc: 'See which programs resonate most.' },
    { icon: '📤', label: 'Export Reports', size: 'small', bg: '#FFFBEB', desc: 'Share data with leadership.' },
    { icon: '👥', label: 'Participation Breakdown', size: 'large', bg: '#EEF1F7', tags: ['By Team', 'By Department', 'By Location'] },
  ],

  benefits: [
    { icon: '🎯', title: 'Track Effectiveness', desc: 'Understand whether your recognition programs are actually working and reaching the right people.' },
    { icon: '📈', title: 'Improve Engagement', desc: 'Use participation data to make targeted improvements that increase engagement across teams.' },
    { icon: '🧑‍💼', title: 'Support HR Teams', desc: 'Give HR leaders the structured data they need for culture reporting and executive presentations.' },
    { icon: '⚡', title: 'Optimize Programs', desc: 'Continuously refine recognition initiatives based on real participation and performance data.' },
    { icon: '👁️', title: 'Identify Gaps', desc: 'Surface recognition gaps before they become disengagement or retention problems.' },
    { icon: '🏆', title: 'Demonstrate Impact', desc: 'Show leadership the tangible impact of investing in recognition and workplace culture.' },
  ],

  faqTitle: 'Metrics — FAQs',
  faqSubtitle: 'How WorkKudo helps you measure the impact of recognition.',
  faq: [
    { q: 'What metrics does WorkKudo track?', a: 'WorkKudo tracks program activity (boards created, delivered), participation (contributors per program), engagement patterns, and trends over time.' },
    { q: 'Are metrics available in real-time?', a: 'Activity data updates continuously. Trend views and summaries are generated regularly to support planning and reviews.' },
    { q: 'Can I filter metrics by time period?', a: 'Yes. You can view metrics by week, month, quarter, or a custom date range depending on your reporting needs.' },
    { q: 'Can I export metrics for leadership presentations?', a: 'Yes. Metrics can be exported as structured reports in CSV or PDF format for use in HR reviews and executive briefings.' },
    { q: 'Who can access metrics?', a: 'HR administrators and account owners have full access. Manager-level access can be configured to show team-relevant data only.' },
  ],

  ctaHeadline: 'Build Recognition Programs You Can Measure and Improve',
  ctaDesc: 'Start with visibility. Understand what\'s working, identify what\'s missing, and create a recognition culture that continuously gets stronger.',
};

export default function Metrics() {
  return <FeaturePage data={data} />;
}
