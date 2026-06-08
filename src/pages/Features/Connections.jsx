import React from 'react';
import FeaturePage from './FeaturePage';

const data = {
  accent: '#6366F1',
  accentSoft: '#EEF2FF',
  icon: '🔗',
  category: 'Connections',
  heroTitle: 'Connect Recognition With the Tools Your Team Already Uses',
  heroDesc: 'WorkKudo integrates into your existing workplace ecosystem so recognition happens where employees already work — no additional apps to learn or platforms to switch between.',
  ctaPrimary: 'Explore Integrations',
  ctaSecondary: 'See How It Works',
  heroChips: ['💬 Slack', '🟦 Teams', '🔄 HRIS'],
  heroCardContent: (
    <>
      {[
        { icon: '💬', label: 'Slack Integration', sub: 'Send recognition from within Slack', color: '#6366F1' },
        { icon: '🟦', label: 'Microsoft Teams', sub: 'Celebrate inside Teams channels', color: '#3B82F6' },
        { icon: '🔄', label: 'HRIS Sync', sub: 'Automated milestone triggers', color: '#34D399' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row" style={{ borderLeft: `3px solid ${r.color}` }}>
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Employees Shouldn\'t Need Another Platform to Stay Recognized',
  problemDesc: 'Adoption of any new workplace tool depends on how seamlessly it fits into existing workflows. If recognition requires switching contexts, it won\'t happen consistently.',
  problemDesc2: 'Connections embed WorkKudo directly into the platforms employees already use every day — reducing friction, increasing adoption, and making recognition feel natural rather than forced.',
  problemPoints: [
    'New platforms create adoption friction that limits participation',
    'Employees won\'t check a separate app for recognition',
    'Disconnected tools mean missed milestones and manual effort',
    'HRIS data stays siloed, preventing automated celebrations',
  ],
  problemIllustration: (
    <div className="fp-problem-illus">
      {[
        { icon: '🔌', label: 'Seamless Integration', sub: 'Works inside tools you already use', color: '#6366F1' },
        { icon: '⚡', label: 'Zero Friction', sub: 'No platform switching required', color: '#3B82F6' },
        { icon: '🤖', label: 'Automated Workflows', sub: 'Trigger recognition automatically', color: '#34D399' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row">
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </div>
  ),

  deepDiveTitle: 'Bring Recognition Into Your Existing Workplace Ecosystem',
  deepDiveDesc: 'Connections integrate WorkKudo with the platforms and systems your organization already depends on.',
  deepDiveFeatures: [
    { icon: '💬', title: 'Slack Integration', desc: 'Send and receive recognition directly from Slack. Board links, contribution reminders, and delivery notifications all flow through Slack channels.' },
    { icon: '🟦', title: 'Microsoft Teams', desc: 'Celebrate teammates inside Microsoft Teams with embedded board previews, contribution invitations, and recognition notifications.' },
    { icon: '🔄', title: 'HRIS Integrations', desc: 'Sync with Workday, BambooHR, Rippling, and HiBob to automatically trigger recognition for birthdays, anniversaries, and new hires.' },
    { icon: '📧', title: 'Email Delivery', desc: 'Deliver completed recognition boards via beautifully formatted email — with full board preview and personal message.' },
    { icon: '🔌', title: 'API Access', desc: 'Connect WorkKudo with any internal tool or workflow using our API for custom integrations and automation.' },
    { icon: '🤖', title: 'Workflow Automation', desc: 'Set up automated recognition flows that trigger based on HRIS events, calendar dates, or custom organizational logic.' },
  ],

  howItWorks: [
    { n: '01', icon: '🔌', title: 'Connect Your Tools', desc: 'Set up integrations with your existing platforms — Slack, Teams, HRIS — in just a few steps.' },
    { n: '02', icon: '⚡', title: 'Recognition Flows In', desc: 'Contribution invitations, reminders, and board links are delivered through your connected platforms.' },
    { n: '03', icon: '💬', title: 'Teams Participate', desc: 'Employees contribute directly from within Slack or Teams — no platform switching needed.' },
    { n: '04', icon: '🎉', title: 'Celebrate Together', desc: 'Completed recognition experiences are delivered through your connected channels and tools.' },
  ],

  useCases: [
    { icon: '💬', title: 'Slack Integration', desc: 'Enable the full WorkKudo experience within Slack — contributions, reminders, and board delivery.' },
    { icon: '🟦', title: 'Microsoft Teams', desc: 'Bring recognition into Teams channels where employees collaborate every day.' },
    { icon: '🔄', title: 'HR Systems', desc: 'Sync with your HRIS to automate recognition for birthdays, anniversaries, and onboarding.' },
    { icon: '📧', title: 'Email Delivery', desc: 'Deliver recognition experiences directly to employee inboxes with beautifully formatted emails.' },
    { icon: '🤖', title: 'Workflow Automation', desc: 'Build automated recognition workflows triggered by HRIS events or organizational milestones.' },
    { icon: '🔌', title: 'Custom Integrations', desc: 'Use the WorkKudo API to connect recognition with any internal tool in your tech stack.' },
  ],

  showcase: [
    { icon: '💬', label: 'Slack Integration', desc: 'Contribute to boards, receive reminders, and celebrate colleagues without leaving Slack.', size: 'large', bg: '#EEF2FF', tags: ['Channels', 'DMs', 'Notifications'] },
    { icon: '🟦', label: 'Microsoft Teams', size: 'small', bg: '#EFF6FF', desc: 'Embedded recognition in Teams.' },
    { icon: '🔄', label: 'HRIS Sync', size: 'small', bg: '#ECFDF5', desc: 'Automated milestone triggers.' },
    { icon: '🔌', label: 'API Access', size: 'small', bg: '#FFFBEB', desc: 'Custom integration workflows.' },
    { icon: '🤖', label: 'Automation Hub', size: 'large', bg: '#FFF3EE', tags: ['HRIS Events', 'Calendar Dates', 'Custom Triggers'] },
  ],

  benefits: [
    { icon: '⚡', title: 'Easy Adoption', desc: 'Recognition that lives inside existing tools gets used. No new platform means no adoption barrier.' },
    { icon: '🔗', title: 'Reduced Friction', desc: 'Employees contribute to boards without leaving Slack or Teams — making participation effortless.' },
    { icon: '🤝', title: 'Better Participation', desc: 'Meeting employees where they work dramatically increases contribution rates and recognition frequency.' },
    { icon: '🌊', title: 'Seamless Workflows', desc: 'Automated triggers and notifications keep recognition moving without requiring manual effort from HR.' },
    { icon: '⏱️', title: 'Time Savings', desc: 'HRIS sync eliminates manual milestone tracking and ensures no celebration is ever missed.' },
    { icon: '🏗️', title: 'Future-Proof', desc: 'API access means WorkKudo can connect with any platform you adopt in the future.' },
  ],

  faqTitle: 'Connections — FAQs',
  faqSubtitle: 'How WorkKudo integrates with your existing workplace tools.',
  faq: [
    { q: 'Which integrations does WorkKudo support?', a: 'WorkKudo integrates with Slack, Microsoft Teams, and HRIS platforms including Workday, BambooHR, Rippling, and HiBob. Email delivery is available for all accounts.' },
    { q: 'Do employees need a WorkKudo account to contribute through Slack?', a: 'No. Contributors can add messages and photos directly through Slack or via a shared link without creating a WorkKudo account.' },
    { q: 'How does HRIS sync work?', a: 'When connected to your HRIS, WorkKudo automatically reads employee birthdays, work anniversaries, and start dates to trigger timely recognition boards.' },
    { q: 'Is there an API available for custom integrations?', a: 'Yes. WorkKudo provides API access for teams that need to build custom integrations with internal tools, directories, or workflow automation systems.' },
    { q: 'How long does integration setup take?', a: 'Most integrations are set up in under 30 minutes. Our support team provides guided setup documentation and technical assistance where needed.' },
  ],

  ctaHeadline: 'Make Recognition Part of How Your Team Already Works',
  ctaDesc: 'Connect WorkKudo to Slack, Teams, your HRIS, and more — so recognition happens naturally, consistently, and without friction.',
};

export default function Connections() {
  return <FeaturePage data={data} />;
}
