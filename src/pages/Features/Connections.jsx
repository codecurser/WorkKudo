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
  heroChips: ['📝 Notion', '📧 Email', '🔗 Link Sharing'],
  heroCardContent: (
    <>
      {[
        { icon: '📝', label: 'Notion Integration', sub: 'Keep recognition visible in Notion', color: '#6366F1' },
        { icon: '📧', label: 'Email Delivery', sub: 'Reach any inbox, no account needed', color: '#3B82F6' },
        { icon: '🔗', label: 'Shareable Links', sub: 'Contribute from any device, anywhere', color: '#34D399' },
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
    'Employee data stays siloed across different platforms',  ],
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
    { icon: '📝', title: 'Notion Integration', desc: 'Connect WorkKudo to Notion to surface recognition boards inside your team workspace, keeping celebrations visible alongside your everyday work.' },
    { icon: '📧', title: 'Email Delivery', desc: 'Deliver completed recognition boards via beautifully formatted email — with full board preview and personal message. Works for every account.' },
    { icon: '🔗', title: 'Shareable Links', desc: 'Generate a unique contribution link for any board. Anyone can add messages or photos without creating an account — from any device.' },
    { icon: '🔌', title: 'API Access', desc: 'Connect WorkKudo with any internal tool or workflow using our API for custom integrations and automation.' },
    { icon: '🤖', title: 'More Coming Soon', desc: 'We\'re actively building integrations with popular workplace tools. Your feedback shapes what gets added next.' },
    { icon: '⚡', title: 'Zero Friction Setup', desc: 'Integrations are designed to take minutes, not days. Our support team is on hand to help if anything needs configuring.' },
  ],

  howItWorks: [
    { n: '01', icon: '🔌', title: 'Connect Your Tools', desc: 'Set up the Notion integration or configure email delivery in just a few steps.' },
    { n: '02', icon: '⚡', title: 'Recognition Flows In', desc: 'Contribution invitations, reminders, and board links are delivered through your connected platforms.' },
    { n: '03', icon: '🔗', title: 'Teams Participate', desc: 'Employees contribute via shareable link or Notion — no platform switching or new accounts needed.' },
    { n: '04', icon: '🎉', title: 'Celebrate Together', desc: 'Completed recognition experiences are delivered through your connected channels and tools.' },
  ],

  useCases: [
    { icon: '📝', title: 'Notion Integration', desc: 'Keep recognition visible inside your Notion workspace — right alongside where your team already works.' },
    { icon: '📧', title: 'Email Delivery', desc: 'Deliver recognition experiences directly to employee inboxes with beautifully formatted emails.' },
    { icon: '🔗', title: 'Shareable Links', desc: 'Share a board link in any channel, doc, or message — contributors join without signing up.' },
    { icon: '🔌', title: 'Custom Integrations', desc: 'Use the WorkKudo API to connect recognition with any internal tool in your tech stack.' },
    { icon: '🤖', title: 'More Integrations', desc: 'More workplace tools are on the roadmap. Reach out to request or vote on what\'s next.' },
    { icon: '⚡', title: 'Simple Setup', desc: 'Get connected in minutes with clear documentation and hands-on support from our team.' },
  ],

  showcase: [
    { icon: '📝', label: 'Notion Integration', desc: 'Keep recognition visible inside your team workspace without ever leaving Notion.', size: 'large', bg: '#EEF2FF', tags: ['Pages', 'Databases', 'Updates'] },
    { icon: '📧', label: 'Email Delivery', size: 'small', bg: '#EFF6FF', desc: 'Boards delivered to any inbox.' },
    { icon: '🔗', label: 'Shareable Links', size: 'small', bg: '#ECFDF5', desc: 'Contribute from any device.' },
    { icon: '🔌', label: 'API Access', size: 'small', bg: '#FFFBEB', desc: 'Custom integration workflows.' },
    { icon: '🤖', label: 'More Coming Soon', size: 'large', bg: '#FFF3EE', tags: ['Your Feedback', 'Active Roadmap', 'New Tools'] },
  ],

  benefits: [
    { icon: '⚡', title: 'Easy Adoption', desc: 'Recognition that lives inside existing tools gets used. No new platform means no adoption barrier.' },
    { icon: '🔗', title: 'Reduced Friction', desc: 'Employees contribute to boards via shareable link or Notion — no extra logins or platform switching needed.' },
    { icon: '🤝', title: 'Better Participation', desc: 'Meeting employees where they work dramatically increases contribution rates and recognition frequency.' },
    { icon: '🌊', title: 'Seamless Workflows', desc: 'Automated triggers and notifications keep recognition moving without requiring manual effort from HR.' },
    { icon: '⏱️', title: 'Time Savings', desc: 'Simple integrations and automated reminders eliminate manual tracking and ensure no celebration is ever missed.' },
    { icon: '🏗️', title: 'Future-Proof', desc: 'API access means WorkKudo can connect with any platform you adopt in the future.' },
  ],

  faqTitle: 'Connections — FAQs',
  faqSubtitle: 'How WorkKudo integrates with your existing workplace tools.',
  faq: [
    { q: 'Which integrations does WorkKudo support?', a: 'WorkKudo currently integrates with Notion. Email delivery is available for all accounts, and boards can be shared via direct link. More integrations are coming soon.' },
    { q: 'Do employees need a WorkKudo account to contribute?', a: 'No. Contributors can add messages and photos directly via a shared link without creating a WorkKudo account.' },
    { q: 'How does the Notion integration work?', a: 'When connected to Notion, WorkKudo can surface recognition boards and updates directly inside your team workspace, keeping celebration visible where work happens.' },
    { q: 'Is there an API available for custom integrations?', a: 'Yes. WorkKudo provides API access for teams that need to build custom integrations with internal tools, directories, or workflow automation systems.' },
    { q: 'How long does integration setup take?', a: 'Most integrations are set up in under 30 minutes. Our support team provides guided setup documentation and technical assistance where needed.' },
  ],

  ctaHeadline: 'Make Recognition Part of How Your Team Already Works',
  ctaDesc: 'Connect WorkKudo to Notion and reach your team via email or shareable link — so recognition happens naturally, consistently, and without friction.',
};

export default function Connections() {
  return <FeaturePage data={data} />;
}
