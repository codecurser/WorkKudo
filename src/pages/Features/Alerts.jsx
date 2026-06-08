import React from 'react';
import FeaturePage from './FeaturePage';

const data = {
  accent: '#EC4899',
  accentSoft: '#FDF2F8',
  icon: '🔔',
  category: 'Alerts',
  heroTitle: 'Never Miss a Meaningful Moment Again',
  heroDesc: 'Automated alerts ensure important milestones, celebration deadlines, and recognition opportunities are always captured — before it\'s too late.',
  ctaPrimary: 'Set Up Alerts',
  ctaSecondary: 'How It Works',
  heroChips: ['🎂 Birthdays', '🎊 Anniversaries', '⏰ Deadlines'],
  heroCardContent: (
    <>
      {[
        { icon: '🎂', label: 'Birthday in 3 days', sub: 'Alex R. · Engineering Team', color: '#EC4899' },
        { icon: '🎊', label: '5-Year Anniversary Today', sub: 'Maya S. · Product Design', color: '#FF6B2C' },
        { icon: '⏰', label: 'Board closes in 24h', sub: 'Sarah\'s Farewell · 12 signed', color: '#A78BFA' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row" style={{ borderLeft: `3px solid ${r.color}` }}>
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Important Milestones Are Often Forgotten Until It\'s Too Late',
  problemDesc: 'Birthdays pass uncelebrated. Work anniversaries go unacknowledged. Colleagues leave without a proper farewell. Not because people don\'t care — but because nobody remembered to organize anything in time.',
  problemDesc2: 'Alerts solve this by automatically surfacing upcoming milestones and sending timely reminders to the people responsible for making recognition happen.',
  problemPoints: [
    'Important dates slip through without visibility or reminders',
    'HR teams can\'t manually track milestones for hundreds of employees',
    'Missed celebrations signal to employees that they aren\'t valued',
    'Board contribution deadlines arrive before anyone has contributed',
  ],
  problemIllustration: (
    <div className="fp-problem-illus">
      {[
        { icon: '📅', label: 'Upcoming Milestones', sub: 'Always know what\'s coming next', color: '#EC4899' },
        { icon: '🔔', label: 'Timely Reminders', sub: 'Notify contributors before deadlines', color: '#FF6B2C' },
        { icon: '⚡', label: 'Automated Tracking', sub: 'No manual calendar management', color: '#34D399' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row">
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </div>
  ),

  deepDiveTitle: 'Intelligent Alerts That Keep Recognition on Schedule',
  deepDiveDesc: 'Alerts automatically surface what matters and notify the right people at the right time.',
  deepDiveFeatures: [
    { icon: '📅', title: 'Milestone Tracking', desc: 'Birthdays, work anniversaries, probation completions, and promotions are tracked automatically and surfaced before the date.' },
    { icon: '🔔', title: 'Contribution Reminders', desc: 'Automated reminders are sent to contributors when a board is open, ensuring maximum participation before delivery.' },
    { icon: '⏰', title: 'Deadline Notifications', desc: 'Board creators and contributors receive timely warnings when delivery deadlines are approaching.' },
    { icon: '🎯', title: 'Smart Scheduling', desc: 'Set alerts to trigger days or weeks before a milestone so there\'s always enough time to prepare a meaningful celebration.' },
    { icon: '🔄', title: 'HRIS-Powered Automation', desc: 'When connected to your HRIS, WorkKudo automatically imports employee dates and creates alerts without any manual setup.' },
    { icon: '📧', title: 'Multi-Channel Delivery', desc: 'Alerts are delivered via email, Slack, or Microsoft Teams — wherever your team is most likely to act on them.' },
  ],

  howItWorks: [
    { n: '01', icon: '🔌', title: 'Connect or Configure', desc: 'Connect your HRIS for automatic milestone import, or manually add key dates for your team.' },
    { n: '02', icon: '📅', title: 'Alerts Are Scheduled', desc: 'WorkKudo creates a timeline of upcoming milestones and schedules alerts based on your preferences.' },
    { n: '03', icon: '🔔', title: 'Teams Are Notified', desc: 'The right people receive timely notifications through email, Slack, or Teams — with enough time to act.' },
    { n: '04', icon: '🎉', title: 'Nothing Gets Missed', desc: 'Every milestone is captured, every celebration is organized, and every employee feels recognized on their special day.' },
  ],

  useCases: [
    { icon: '🎂', title: 'Birthdays', desc: 'Ensure every employee birthday is celebrated with a board organized well in advance.' },
    { icon: '🎊', title: 'Work Anniversaries', desc: 'Automatically surface upcoming work anniversaries so managers can prepare meaningful recognition.' },
    { icon: '🚀', title: 'Promotions', desc: 'Alert HR and team leads when a promotion is logged so recognition can be organized immediately.' },
    { icon: '👋', title: 'Farewells', desc: 'Set deadline alerts for farewell boards so colleagues have enough time to contribute before the last day.' },
    { icon: '🏖', title: 'Retirement Events', desc: 'Plan retirement celebrations well ahead of time with automated milestone alerts tied to HRIS data.' },
    { icon: '⏰', title: 'Campaign Deadlines', desc: 'Remind contributors before recognition campaigns close so participation stays high throughout the program.' },
    { icon: '🎯', title: 'Recognition Drives', desc: 'Send timely reminders during recognition campaigns to sustain participation momentum.' },
    { icon: '🔔', title: 'Custom Milestones', desc: 'Set alerts for any custom organizational milestone — project completions, team formations, or company events.' },
  ],

  showcase: [
    { icon: '📅', label: 'Upcoming Milestones View', desc: 'A clear calendar of upcoming celebrations and recognition opportunities — never get caught off guard.', size: 'large', bg: '#FDF2F8', tags: ['Birthdays', 'Anniversaries', 'Promotions'] },
    { icon: '🔔', label: 'Contribution Reminder', size: 'small', bg: '#FFF3EE', desc: 'Nudges for open boards.' },
    { icon: '⏰', label: 'Deadline Alert', size: 'small', bg: '#F5F3FF', desc: '24h warning before delivery.' },
    { icon: '📧', label: 'Email Notification', size: 'small', bg: '#ECFDF5', desc: 'Delivered to the right person.' },
    { icon: '🔄', label: 'HRIS-Powered Timeline', size: 'large', bg: '#EEF1F7', tags: ['Auto-Import', 'No Manual Entry', 'Always Up-to-Date'] },
  ],

  benefits: [
    { icon: '✅', title: 'Better Participation', desc: 'Timely contribution reminders dramatically increase the number of teammates who sign each board.' },
    { icon: '🔔', title: 'Consistent Recognition', desc: 'Automated alerts ensure recognition happens consistently — not just when someone remembers.' },
    { icon: '💛', title: 'Fewer Missed Moments', desc: 'No employee\'s birthday, anniversary, or milestone goes unacknowledged because of a forgotten date.' },
    { icon: '🌱', title: 'Stronger Culture', desc: 'Consistent, timely recognition signals to employees that the organization genuinely cares.' },
    { icon: '⚡', title: 'Less Manual Work', desc: 'HRIS sync and automated scheduling eliminates manual calendar tracking across large organizations.' },
    { icon: '😊', title: 'Employee Confidence', desc: 'Employees feel more secure knowing that their milestones will always be acknowledged and celebrated.' },
  ],

  faqTitle: 'Alerts — FAQs',
  faqSubtitle: 'How WorkKudo ensures no important moment goes uncelebrated.',
  faq: [
    { q: 'How far in advance do alerts trigger?', a: 'Alerts can be configured to notify teams days or weeks before a milestone. The default is 7 days for birthdays and anniversaries, but this is fully customizable.' },
    { q: 'Do alerts require HRIS integration to work?', a: 'No. You can manually add employee dates and milestone events directly in WorkKudo. HRIS sync automates this for larger organizations.' },
    { q: 'Where are alerts delivered?', a: 'Alerts are delivered via email by default. When Slack or Microsoft Teams are connected, alerts also appear in your configured channels.' },
    { q: 'Can I customize which events trigger alerts?', a: 'Yes. You can configure which milestone types trigger alerts, how far in advance notifications are sent, and who receives them.' },
    { q: 'Can alerts be paused or snoozed?', a: 'Individual alerts can be dismissed, and alert schedules can be paused during company holidays or blackout periods.' },
  ],

  ctaHeadline: 'Make Sure Every Meaningful Moment Gets the Celebration It Deserves',
  ctaDesc: 'Set up automated alerts that keep your team informed, your recognition consistent, and your employees feeling genuinely valued — every time.',
};

export default function Alerts() {
  return <FeaturePage data={data} />;
}
