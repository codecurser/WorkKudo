import React from 'react';
import FeaturePage from './FeaturePage';
import heroImg from '../../assets/analytics.png';

const data = {
  accent: '#06B6D4',
  accentSoft: '#ECFEFF',
  icon: '📋',
  category: 'Data Reports',
  heroImage: heroImg,
  heroTitle: 'Transform Recognition Activity Into Actionable Insights',
  heroDesc: 'Give HR leaders, managers, and executives structured, exportable reports on recognition programs, participation, and culture initiative performance.',
  ctaPrimary: 'Access Reports',
  ctaSecondary: 'How It Works',
  heroChips: ['📊 HR Reports', '📋 Exports', '👔 Leadership'],
  heroCardContent: (
    <>
      {[
        { icon: '📋', label: 'Executive Summary', sub: 'Program performance overview', color: '#06B6D4' },
        { icon: '📊', label: 'Participation Report', sub: 'Engagement breakdown by team', color: '#3B82F6' },
        { icon: '📤', label: 'Export Ready', sub: 'PDF and CSV formats available', color: '#34D399' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row" style={{ borderLeft: `3px solid ${r.color}` }}>
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Organizations Need Meaningful Reporting to Evaluate Culture Initiatives',
  problemDesc: 'Without structured data, HR teams struggle to evaluate program effectiveness, justify recognition investments to leadership, or make informed decisions about culture strategy.',
  problemDesc2: 'Data Reports give every stakeholder — from HR administrators to C-level executives — clear, organized visibility into how recognition is performing across the organization.',
  problemPoints: [
    'No structured way to evaluate recognition program ROI',
    'Leadership asks for culture data but HR lacks the tools to provide it',
    'Manual data collection is time-consuming and error-prone',
    'Reports need to be tailored for different audiences and purposes',
  ],
  problemMockup: {
    title: '📊 Recognition Reports',
    cards: [
      { emoji: '📋', tag: 'Summary', title: 'Q2 Program Overview Ready', msg: "Leadership had the full participation breakdown in their inboxes before the quarterly review. Structured, clean, no manual work.", from: 'Claire Mendes', role: 'VP of People' },
      { emoji: '📈', tag: 'Participation', title: 'Engineering at 94% Engagement', msg: "We finally had numbers to show the exec team. The report made our case for expanding the recognition program.", from: 'Tom Walsh', role: 'HR Director' },
      { emoji: '📤', tag: 'Export', title: 'CSV Exported in One Click', msg: "Pulled the full participation dataset for our annual culture audit. Took seconds, not a whole afternoon of spreadsheet work.", from: 'Ana Ruiz', role: 'Culture & Inclusion Lead' },
    ],
  },

  deepDiveTitle: 'Reports Built for Every Stakeholder',
  deepDiveDesc: 'Data Reports give HR teams, managers, and leadership the context they need — in the format that works for them.',
  deepDiveFeatures: [
    { icon: '📋', title: 'Executive Summaries', desc: 'High-level program performance overviews formatted for leadership reviews and board presentations.' },
    { icon: '📊', title: 'Participation Reports', desc: 'Detailed breakdowns of who participated, which teams engaged, and how contributions were distributed.' },
    { icon: '🎯', title: 'Program Performance', desc: 'Evaluate individual recognition campaigns and culture initiatives against participation and delivery goals.' },
    { icon: '📤', title: 'One-Click Exports', desc: 'Download any report as a PDF or CSV with a single click — ready for presentations, planning, and archiving.' },
    { icon: '📅', title: 'Scheduled Reporting', desc: 'Set up recurring reports delivered to HR inboxes automatically — weekly, monthly, or quarterly.' },
    { icon: '🔒', title: 'Role-Based Access', desc: 'Control who sees what. HR admins get full reports; managers see team-relevant summaries.' },
  ],

  howItWorks: [
    { n: '01', icon: '🚀', title: 'Run Your Programs', desc: 'Create and deliver recognition boards, campaigns, and culture initiatives across the organization.' },
    { n: '02', icon: '📊', title: 'Data Is Collected', desc: 'WorkKudo automatically captures participation, delivery, and engagement data across all programs.' },
    { n: '03', icon: '📋', title: 'Reports Are Generated', desc: 'Structured reports are compiled and made available for HR, managers, and leadership.' },
    { n: '04', icon: '📤', title: 'Export & Share', desc: 'Download reports in PDF or CSV format and share with stakeholders for reviews and planning.' },
  ],

  useCases: [
    { icon: '👔', title: 'Leadership Reviews', desc: 'Present program performance and culture health data to senior leadership in structured, credible reports.' },
    { icon: '📋', title: 'HR Reporting', desc: 'Support quarterly HR reviews with detailed participation and engagement data across the organization.' },
    { icon: '🎯', title: 'Recognition Programs', desc: 'Evaluate the performance of specific recognition campaigns to understand what resonates and what doesn\'t.' },
    { icon: '📊', title: 'Engagement Analysis', desc: 'Use report data to understand engagement patterns and make targeted culture improvements.' },
    { icon: '🌱', title: 'Culture Reporting', desc: 'Build a culture reporting cadence with structured data that supports continuous improvement.' },
    { icon: '🔍', title: 'Program Audits', desc: 'Review historical program data to identify long-term trends in recognition and participation.' },
  ],

  showcase: [
    { icon: '📋', label: 'Executive Summary Report', desc: 'A high-level view of all recognition program performance, formatted for leadership.', size: 'large', bg: '#ECFEFF', tags: ['Overview', 'Performance', 'Trends'] },
    { icon: '📊', label: 'Participation Report', size: 'small', bg: '#EFF6FF', desc: 'Engagement breakdown by team.' },
    { icon: '📤', label: 'CSV Export', size: 'small', bg: '#ECFDF5', desc: 'Raw data for deeper analysis.' },
    { icon: '📅', label: 'Scheduled Report', size: 'small', bg: '#FFFBEB', desc: 'Automated monthly delivery.' },
    { icon: '🔒', label: 'Role-Based Access', size: 'large', bg: '#EEF1F7', tags: ['HR Admin', 'Manager View', 'Executive Summary'] },
  ],

  benefits: [
    { icon: '🧠', title: 'Better Decisions', desc: 'Give HR leaders the structured data they need to make informed culture and program decisions.' },
    { icon: '👔', title: 'Leadership Visibility', desc: 'Provide executives with clear, credible reports on recognition program performance and culture health.' },
    { icon: '🎯', title: 'Program Evaluation', desc: 'Objectively evaluate which recognition initiatives are working and which need adjustment.' },
    { icon: '📈', title: 'Continuous Improvement', desc: 'Use report data to iteratively improve programs, timing, and participation across the organization.' },
    { icon: '⚡', title: 'Time Savings', desc: 'Automated report generation eliminates manual data collection and hours spent on presentation prep.' },
    { icon: '🔒', title: 'Data Security', desc: 'Role-based access ensures sensitive organizational data is only visible to the appropriate stakeholders.' },
  ],

  faqTitle: 'Data Reports — FAQs',
  faqSubtitle: 'How WorkKudo helps you report on recognition and culture.',
  faq: [
    { q: 'What data is included in Data Reports?', a: 'Reports include program activity, participation counts, engagement levels, delivery rates, and trend data across any selected time period.' },
    { q: 'Can I schedule reports to be sent automatically?', a: 'Yes. You can configure reports to be automatically generated and delivered to specified email addresses on a weekly, monthly, or quarterly schedule.' },
    { q: 'What export formats are supported?', a: 'Reports can be exported as PDF for presentations or CSV for data analysis and spreadsheet integration.' },
    { q: 'Can I create custom report views?', a: 'You can filter reports by time period, department, team, or program type to create views relevant to specific stakeholders.' },
    { q: 'Who can access Data Reports?', a: 'Access is role-based. HR administrators have full report access. Managers can access team-level summaries. Executive views are configurable.' },
  ],

  ctaHeadline: 'Turn Recognition Activity Into Organizational Intelligence',
  ctaDesc: 'Give your HR team the reporting tools they need to evaluate culture initiatives, demonstrate program impact, and continuously improve recognition across the organization.',
};

export default function DataReports() {
  return <FeaturePage data={data} />;
}
