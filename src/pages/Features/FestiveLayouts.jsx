import React from 'react';
import FeaturePage from './FeaturePage';

const data = {
  accent: '#F59E0B',
  accentSoft: '#FFFBEB',
  icon: '🎨',
  category: 'Festive Layouts',
  heroTitle: 'Beautiful Experiences for Every Workplace Celebration',
  heroDesc: 'Move beyond generic cards and repetitive templates. Give every occasion its own premium, professionally designed visual experience.',
  ctaPrimary: 'Browse Layouts',
  ctaSecondary: 'See How It Works',
  heroChips: ['🎂 Birthday', '🚀 Promotion', '🎊 Anniversary'],
  heroCardContent: (
    <>
      {[
        { icon: '🎂', label: 'Birthday Layout', sub: 'Warm, joyful celebration design', color: '#F59E0B' },
        { icon: '🚀', label: 'Promotion Layout', sub: 'Professional achievement design', color: '#FF6B2C' },
        { icon: '🎊', label: 'Anniversary Layout', sub: 'Elegant milestone recognition', color: '#A78BFA' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row" style={{ borderLeft: `3px solid ${r.color}` }}>
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </>
  ),

  problemTitle: 'Celebrations Often Feel Repetitive and Generic',
  problemDesc: 'When every recognition experience looks and feels the same, it signals that the celebration wasn\'t given much thought — which undermines its emotional impact.',
  problemDesc2: 'Organizations need occasion-specific designs that make each celebration feel unique, personal, and worthy of the moment being recognized.',
  problemPoints: [
    'Generic templates make recognition feel impersonal',
    'Repetitive designs reduce the impact of celebrations',
    'Building custom layouts takes time teams don\'t have',
    'Different occasions deserve different visual treatments',
  ],
  problemIllustration: (
    <div className="fp-problem-illus">
      {[
        { icon: '🎨', label: '50+ Occasion Templates', sub: 'Purpose-built for every moment', color: '#F59E0B' },
        { icon: '🏷️', label: 'Custom Branding', sub: 'Add your logo and colors', color: '#FF6B2C' },
        { icon: '⚡', label: 'Instant Setup', sub: 'Ready in seconds, not hours', color: '#34D399' },
      ].map((r, i) => (
        <div key={i} className="fp-illus-row">
          <span className="fp-illus-icon">{r.icon}</span>
          <div><strong>{r.label}</strong><span>{r.sub}</span></div>
        </div>
      ))}
    </div>
  ),

  deepDiveTitle: 'Every Occasion Has Its Own Premium Experience',
  deepDiveDesc: 'Festive Layouts are professionally designed templates built specifically for workplace celebrations.',
  deepDiveFeatures: [
    { icon: '🎂', title: 'Birthday Experiences', desc: 'Warm, vibrant layouts that make birthdays feel genuinely special — with confetti, personalized touches, and joy.' },
    { icon: '🚀', title: 'Promotion Celebrations', desc: 'Professional, achievement-focused designs that capture the significance of career milestones.' },
    { icon: '🎊', title: 'Work Anniversary Layouts', desc: 'Elegant designs that honor years of dedication with the gravity and gratitude they deserve.' },
    { icon: '👋', title: 'Farewell & Send-off Themes', desc: 'Heartfelt, memorable layouts for departing colleagues that capture the warmth of their time with the team.' },
    { icon: '🏢', title: 'Company Milestone Designs', desc: 'Branded layouts for organizational achievements — product launches, funding rounds, company anniversaries.' },
    { icon: '🎨', title: 'Custom Branding Options', desc: 'Add your company logo, colors, and brand voice to every layout for a cohesive, professional experience.' },
  ],

  howItWorks: [
    { n: '01', icon: '🎨', title: 'Choose a Layout', desc: 'Browse occasion-specific templates and select the design that matches your celebration.' },
    { n: '02', icon: '✏️', title: 'Customize', desc: 'Add your company branding, personalize the message, and configure the details for the recipient.' },
    { n: '03', icon: '📩', title: 'Invite Contributors', desc: 'Share the board with teammates who can add their personal messages within the themed experience.' },
    { n: '04', icon: '🎉', title: 'Deliver', desc: 'Send the finished celebration experience via email, Slack, or as a printable PDF keepsake.' },
  ],

  useCases: [
    { icon: '🎂', title: 'Birthdays', desc: 'Create vibrant, joyful birthday board experiences for every employee across the organization.' },
    { icon: '🚀', title: 'Promotions', desc: 'Celebrate career advancement with premium designs that match the significance of the moment.' },
    { icon: '🎊', title: 'Work Anniversaries', desc: 'Honor years of dedication with elegant layouts built specifically for milestone recognition.' },
    { icon: '👋', title: 'Farewells', desc: 'Send departing colleagues off with heartfelt, beautifully designed farewell boards.' },
    { icon: '🏖', title: 'Retirement Celebrations', desc: 'Create a premium retirement experience that honors a lifetime of contribution.' },
    { icon: '🏢', title: 'Company Milestones', desc: 'Celebrate organizational achievements with branded, professionally designed experiences.' },
    { icon: '🤝', title: 'Appreciation Campaigns', desc: 'Run themed appreciation campaigns with cohesive visual experiences across the organization.' },
    { icon: '🥳', title: 'Team Wins', desc: 'Celebrate project launches, quarterly wins, and team achievements with occasion-specific designs.' },
  ],

  showcase: [
    { icon: '🎂', label: 'Birthday Theme', desc: 'Warm, celebratory design with confetti and joyful color palette.', size: 'large', bg: '#FFFBEB', tags: ['Confetti', 'Warm Palette', 'Personalized'] },
    { icon: '🚀', label: 'Promotion Theme', size: 'small', bg: '#FFF3EE', desc: 'Achievement-focused professional design.' },
    { icon: '🎊', label: 'Anniversary Theme', size: 'small', bg: '#F5F3FF', desc: 'Elegant milestone recognition.' },
    { icon: '👋', label: 'Farewell Theme', size: 'small', bg: '#ECFDF5', desc: 'Heartfelt departure design.' },
    { icon: '🎨', label: 'Custom Branded', size: 'large', bg: '#EEF1F7', tags: ['Your Logo', 'Brand Colors', 'Custom Message'] },
  ],

  benefits: [
    { icon: '⚡', title: 'Faster Setup', desc: 'Launch a beautiful celebration experience in minutes — no design skills required.' },
    { icon: '🤝', title: 'Better Participation', desc: 'Engaging, occasion-specific designs encourage more team members to contribute.' },
    { icon: '💛', title: 'Memorable Experiences', desc: 'Celebrations that look and feel purposeful create lasting impressions on recipients.' },
    { icon: '🏷️', title: 'Consistent Branding', desc: 'Maintain a cohesive visual identity across all recognition experiences company-wide.' },
    { icon: '🌟', title: 'Personal Touch', desc: 'Each layout is crafted to match the emotional context of the specific occasion.' },
    { icon: '📥', title: 'Keepsake Quality', desc: 'Export any themed board as a print-ready PDF that employees can frame and keep forever.' },
  ],

  faqTitle: 'Festive Layouts — FAQs',
  faqSubtitle: 'Everything you need to know about creating beautiful celebration experiences.',
  faq: [
    { q: 'How many layout templates are available?', a: 'WorkKudo offers templates for all major workplace occasions — birthdays, promotions, anniversaries, farewells, retirements, team wins, and more. New layouts are added regularly.' },
    { q: 'Can I customize a layout with my company branding?', a: 'Yes. You can add your company logo, apply brand colors, and customize the messaging to align with your organization\'s visual identity.' },
    { q: 'Can contributors add content within the themed layout?', a: 'Absolutely. All contributor messages, photos, and GIFs are displayed within the themed experience, maintaining visual consistency throughout.' },
    { q: 'Can I export a themed board as a printable keepsake?', a: 'Yes. Every themed board can be exported as a high-resolution PDF, ready to print, frame, or include in a printed booklet.' },
    { q: 'Are layouts mobile-friendly?', a: 'Fully. All layouts are responsive and display beautifully on mobile devices, tablets, and desktop screens.' },
  ],

  ctaHeadline: 'Make Every Celebration Worth Remembering',
  ctaDesc: 'Choose from beautiful, occasion-specific layouts that make recognition feel personal, premium, and truly meaningful.',
};

export default function FestiveLayouts() {
  return <FeaturePage data={data} />;
}
