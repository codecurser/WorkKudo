import { useState, useEffect, useRef } from "react";
import "./MemoryMap.css";

// ─── PINS DATA FOR SEND-OFF ───
const sendOffPins = [
  {
    id: "delhi",
    name: "Aarav Sharma",
    role: "Lead Engineer",
    location: "New Delhi, India",
    avatar: "A",
    color: "#e84393",
    msg: "Wishing you all the very best for the journey ahead. Your leadership, mentorship, and unwavering support have left a lasting impact on the team. You'll be greatly missed, and we hope your next chapter is filled with success and happiness.",
    time: "2 hours ago",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "mumbai",
    name: "Priya Mehta",
    role: "UX Designer",
    location: "Mumbai, India",
    avatar: "P",
    color: "#7c3aed",
    msg: "It's hard to say goodbye to someone who brought so much creativity and positivity to every project. Thank you for all the wonderful memories and collaboration. Wishing you continued growth and success wherever you go.",
    time: "4 hours ago",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "bangalore",
    name: "Rohan Verma",
    role: "API Architect",
    location: "Bengaluru, India",
    avatar: "R",
    color: "#1a6b47",
    msg: "Thank you for being an incredible teammate and guide. Your expertise and willingness to help made a difference every single day. Best wishes for all the exciting opportunities and achievements that lie ahead.",
    time: "6 hours ago",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "hyderabad",
    name: "Neha Reddy",
    role: "Regional Director",
    location: "Hyderabad, India",
    avatar: "N",
    color: "#ff5722",
    msg: "Your dedication, vision, and encouragement have inspired so many of us. While we're sad to see you go, we're excited for everything you'll accomplish next. Wishing you success, fulfillment, and new adventures ahead.",
    time: "1 day ago",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "kolkata",
    name: "Vikram Chatterjee",
    role: "Product Manager",
    location: "Kolkata, India",
    avatar: "V",
    color: "#00b894",
    msg: "Working alongside you has been a privilege. Thank you for the collaboration, support, and countless contributions you've made to the team. May your next journey be rewarding, exciting, and filled with great success.",
    time: "2 days ago",
    lat: 22.5726,
    lng: 88.3639,
  },
];
// ============================================================
// PINS DATA FOR BIRTHDAY
// ============================================================

const birthdayPins = [
  {
    id: "delhi",
    name: "Aarav Sharma",
    role: "Project Manager",
    location: "New Delhi, India",
    avatar: "A",
    color: "#ff7675",
    msg: "Happy Birthday! 🎂 Wishing you a day filled with laughter, celebration, and wonderful memories. Your positivity and leadership make every day better for the team. Enjoy your special day!",
    time: "1 hour ago",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "mumbai",
    name: "Priya Mehta",
    role: "Frontend Engineer",
    location: "Mumbai, India",
    avatar: "P",
    color: "#fdcb6e",
    msg: "Many happy returns of the day! 🎈 May this year bring exciting opportunities, good health, and countless reasons to smile. Have an amazing birthday celebration!",
    time: "3 hours ago",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "bangalore",
    name: "Rohan Verma",
    role: "Database Specialist",
    location: "Bengaluru, India",
    avatar: "R",
    color: "#00b894",
    msg: "Wishing you a fantastic birthday and a year ahead filled with success and happiness. Thank you for being such a valued member of the team. Enjoy every moment of your day!",
    time: "5 hours ago",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "hyderabad",
    name: "Neha Reddy",
    role: "QA Lead",
    location: "Hyderabad, India",
    avatar: "N",
    color: "#6c5ce7",
    msg: "Happy Birthday! 🌸 Your dedication and kindness make a difference every day. May your celebration be as wonderful as the positivity you bring to the workplace.",
    time: "12 hours ago",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "kolkata",
    name: "Vikram Chatterjee",
    role: "Content Creator",
    location: "Kolkata, India",
    avatar: "V",
    color: "#ff7675",
    msg: "Warm birthday wishes from all of us! 🎉 May your day be filled with joy, laughter, and everything that makes you happy. Here's to another incredible year ahead!",
    time: "1 day ago",
    lat: 22.5726,
    lng: 88.3639,
  },
];

// ============================================================
// PINS DATA FOR APPRECIATION
// ============================================================

const appreciationPins = [
  {
    id: "delhi",
    name: "Aarav Sharma",
    role: "Project Manager",
    location: "New Delhi, India",
    avatar: "A",
    color: "#00b894",
    msg: "Thank you for always stepping up when the team needs support. Your leadership, guidance, and willingness to help make a meaningful impact every day. We truly appreciate everything you do.",
    time: "1 hour ago",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "mumbai",
    name: "Priya Mehta",
    role: "Frontend Engineer",
    location: "Mumbai, India",
    avatar: "P",
    color: "#7c3aed",
    msg: "Your dedication, creativity, and collaborative spirit make every project better. Thank you for consistently bringing your best and helping the entire team succeed.",
    time: "3 hours ago",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "bangalore",
    name: "Rohan Verma",
    role: "Database Specialist",
    location: "Bengaluru, India",
    avatar: "R",
    color: "#fdcb6e",
    msg: "Thank you for generously sharing your knowledge and expertise. Your support and mentorship have helped so many of us grow professionally and personally.",
    time: "5 hours ago",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "hyderabad",
    name: "Neha Reddy",
    role: "QA Lead",
    location: "Hyderabad, India",
    avatar: "N",
    color: "#ff7675",
    msg: "We appreciate your commitment to excellence and your attention to detail. Your efforts help maintain the highest standards across every project we deliver.",
    time: "12 hours ago",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "kolkata",
    name: "Vikram Chatterjee",
    role: "Content Creator",
    location: "Kolkata, India",
    avatar: "V",
    color: "#00b894",
    msg: "Your creativity, enthusiasm, and teamwork inspire everyone around you. Thank you for your contributions and for always bringing positive energy to the team.",
    time: "1 day ago",
    lat: 22.5726,
    lng: 88.3639,
  },
];

// ============================================================
// PINS DATA FOR RETIREMENT
// ============================================================

const retirementPins = [
  {
    id: "delhi",
    name: "Priya Sharma",
    role: "Department Head",
    location: "New Delhi, India",
    avatar: "P",
    color: "#e6a817",
    msg: "Congratulations on an extraordinary career and a well-deserved retirement. Your wisdom, leadership, and contributions have left a lasting legacy that will continue to inspire us for years to come.",
    time: "1 hour ago",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "mumbai",
    name: "Dev Tiwari",
    role: "Senior Engineer",
    location: "Mumbai, India",
    avatar: "D",
    color: "#c0392b",
    msg: "As you begin this exciting new chapter, we thank you for the countless lessons, memories, and achievements you've shared with us. Wishing you happiness, relaxation, and fulfillment in retirement.",
    time: "3 hours ago",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "bangalore",
    name: "Anjali Roy",
    role: "Operations Lead",
    location: "Bengaluru, India",
    avatar: "A",
    color: "#1a6b47",
    msg: "Your dedication and guidance have shaped so many careers and strengthened our team in countless ways. May retirement bring you joy, adventure, and precious moments with loved ones.",
    time: "6 hours ago",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "hyderabad",
    name: "Neha Reddy",
    role: "Regional Director",
    location: "Hyderabad, India",
    avatar: "N",
    color: "#7c3aed",
    msg: "Thank you for years of outstanding leadership and commitment. Your impact will be remembered long after today. Wishing you a rewarding and peaceful retirement journey.",
    time: "12 hours ago",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "kolkata",
    name: "Vikram Chatterjee",
    role: "Product Manager",
    location: "Kolkata, India",
    avatar: "V",
    color: "#f97316",
    msg: "You leave behind an incredible legacy of teamwork, innovation, and mentorship. Congratulations on your retirement, and may the years ahead be your happiest yet.",
    time: "1 day ago",
    lat: 22.5726,
    lng: 88.3639,
  },
];

// ============================================================
// PINS DATA FOR CONDOLENCE
// ============================================================

const condolencePins = [
  {
    id: "delhi",
    name: "Aarav Sharma",
    role: "Team Lead",
    location: "New Delhi, India",
    avatar: "A",
    color: "#4a6fa5",
    msg: "Our heartfelt condolences are with you and your family during this difficult time. May the cherished memories of your loved one bring comfort and strength in the days ahead.",
    time: "2 hours ago",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "mumbai",
    name: "Priya Mehta",
    role: "Senior Developer",
    location: "Mumbai, India",
    avatar: "P",
    color: "#7c8ba8",
    msg: "We are deeply saddened by your loss. Please know that our thoughts and prayers are with you, and we hope you find peace and support from those around you.",
    time: "4 hours ago",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "bangalore",
    name: "Rohan Verma",
    role: "Product Designer",
    location: "Bengaluru, India",
    avatar: "R",
    color: "#5a7a6e",
    msg: "During this time of sorrow, may you find comfort in the love and support of family, friends, and colleagues. Our deepest sympathies are with you.",
    time: "8 hours ago",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "hyderabad",
    name: "Neha Reddy",
    role: "Data Analyst",
    location: "Hyderabad, India",
    avatar: "N",
    color: "#6b8cba",
    msg: "Please accept our sincere condolences. We are thinking of you and your loved ones and sending strength, comfort, and support during this difficult period.",
    time: "12 hours ago",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "kolkata",
    name: "Vikram Chatterjee",
    role: "Engineering Manager",
    location: "Kolkata, India",
    avatar: "V",
    color: "#4a6fa5",
    msg: "Words cannot ease the pain of loss, but please know that you are in our thoughts. Wishing you peace, courage, and comfort in the days ahead.",
    time: "1 day ago",
    lat: 22.5726,
    lng: 88.3639,
  },
];

// ============================================================
// PINS DATA FOR WORK MILESTONE
// ============================================================

const workMilestonePins = [
  {
    id: "delhi",
    name: "Aarav Sharma",
    role: "Engineering Lead",
    location: "New Delhi, India",
    avatar: "A",
    color: "#7c3aed",
    msg: "Congratulations on reaching this remarkable milestone! Your dedication, hard work, and commitment have made a lasting impact on the team. We're grateful for everything you've contributed over the years.",
    time: "1 hour ago",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "mumbai",
    name: "Priya Mehta",
    role: "Product Manager",
    location: "Mumbai, India",
    avatar: "P",
    color: "#5b21b6",
    msg: "This achievement is a testament to your passion and excellence. Thank you for being such an important part of our journey. Here's to many more successes ahead!",
    time: "3 hours ago",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "bangalore",
    name: "Rohan Verma",
    role: "Regional Sales Director",
    location: "Bengaluru, India",
    avatar: "R",
    color: "#4f46e5",
    msg: "Your contributions have consistently driven growth, innovation, and success. Congratulations on this well-deserved milestone and all that you've accomplished.",
    time: "6 hours ago",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "hyderabad",
    name: "Neha Reddy",
    role: "Data Scientist",
    location: "Hyderabad, India",
    avatar: "N",
    color: "#f59e0b",
    msg: "Celebrating this milestone with you today! Your dedication and positive influence have helped shape the team and inspire those around you.",
    time: "10 hours ago",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "kolkata",
    name: "Vikram Chatterjee",
    role: "UX Researcher",
    location: "Kolkata, India",
    avatar: "V",
    color: "#7c3aed",
    msg: "Congratulations on this important achievement. Your passion, creativity, and commitment continue to make a difference every day. Here's to many more milestones ahead.",
    time: "1 day ago",
    lat: 22.5726,
    lng: 88.3639,
  },
];

// ============================================================
// PINS DATA FOR SPEEDY RECOVERY
// ============================================================

const speedyRecoveryPins = [
  {
    id: "delhi",
    name: "Aarav Sharma",
    role: "Team Lead",
    location: "New Delhi, India",
    avatar: "A",
    color: "#10b981",
    msg: "Wishing you a smooth and speedy recovery. Take all the time you need to rest and focus on your health. We look forward to seeing you back, healthy and smiling.",
    time: "1 hour ago",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "mumbai",
    name: "Priya Mehta",
    role: "Product Designer",
    location: "Mumbai, India",
    avatar: "P",
    color: "#059669",
    msg: "Sending positive thoughts and warm wishes your way. Your well-being is what matters most right now, and the entire team is cheering for your recovery every step of the way.",
    time: "3 hours ago",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "bangalore",
    name: "Rohan Verma",
    role: "Backend Engineer",
    location: "Bengaluru, India",
    avatar: "R",
    color: "#0d9488",
    msg: "Take the time you need to rest and regain your strength. We're all looking forward to seeing you healthy again. Wishing you comfort, healing, and a quick recovery.",
    time: "6 hours ago",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "hyderabad",
    name: "Neha Reddy",
    role: "UX Designer",
    location: "Hyderabad, India",
    avatar: "N",
    color: "#10b981",
    msg: "The entire team is thinking of you and sending our best wishes. May each day bring renewed strength, better health, and steady progress toward recovery.",
    time: "10 hours ago",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "kolkata",
    name: "Vikram Chatterjee",
    role: "Data Analyst",
    location: "Kolkata, India",
    avatar: "V",
    color: "#059669",
    msg: "Wishing you brighter days ahead and a full recovery. Focus on yourself, rest well, and know that your team is here supporting you every step of the way.",
    time: "1 day ago",
    lat: 22.5726,
    lng: 88.3639,
  },
];
// ─── BABY ARRIVAL PINS DATA ───
const babyArrivalPins = [
  { id: "ba-1", lat: 51.5074, lng: -0.1278, city: "London", user: "Emma T.", msg: "Can't wait to meet the little one!", avatar: "E", color: "#ec4899", delay: "0.2s" },
  { id: "ba-2", lat: 40.7128, lng: -74.006, city: "New York", user: "David K.", msg: "So incredibly happy for your growing family!", avatar: "D", color: "#db2777", delay: "0.7s" },
  { id: "ba-3", lat: 35.6762, lng: 139.650, city: "Tokyo", user: "Yuki S.", msg: "Wishing you rest and joy. Welcome baby!", avatar: "Y", color: "#8b5cf6", delay: "1.5s" },
  { id: "ba-4", lat: -33.868, lng: 151.209, city: "Sydney", user: "Chloe B.", msg: "Huge congratulations from down under! 🍼", avatar: "C", color: "#ec4899", delay: "2.1s" },
  { id: "ba-5", lat: 43.6532, lng: -79.383, city: "Toronto", user: "Mark R.", msg: "Enjoy every precious moment!", avatar: "M", color: "#db2777", delay: "2.8s" },
];

// ─── ONBOARDING PINS DATA ───
const onboardingPins = [
  { id: "ob-1", lat: 37.7749, lng: -122.41, city: "San Francisco", user: "Alex W.", msg: "Welcome to the team! Excited to work together.", avatar: "A", color: "#3b82f6", delay: "0.2s" },
  { id: "ob-2", lat: 51.5074, lng: -0.1278, city: "London", user: "Sarah J.", msg: "So glad you're here! Let's grab a virtual coffee.", avatar: "S", color: "#2563eb", delay: "0.8s" },
  { id: "ob-3", lat: 1.3521, lng: 103.819, city: "Singapore", user: "Wei C.", msg: "Welcome aboard! Great to have you with us.", avatar: "W", color: "#10b981", delay: "1.4s" },
  { id: "ob-4", lat: 48.8566, lng: 2.3522, city: "Paris", user: "Marie D.", msg: "Bienvenue! You're going to love it here.", avatar: "M", color: "#3b82f6", delay: "2.2s" },
  { id: "ob-5", lat: -33.868, lng: 151.209, city: "Sydney", user: "James H.", msg: "Welcome to the best team ever! 👋", avatar: "J", color: "#2563eb", delay: "3.0s" },
];

// ─── KUDOS PINS DATA ───
const kudosPins = [
  { id: "ku-1", lat: 40.7128, lng: -74.006, city: "New York", user: "Mike T.", msg: "Incredible launch! You all crushed it! 🚀", avatar: "M", color: "#f43f5e", delay: "0.2s" },
  { id: "ku-2", lat: 51.5074, lng: -0.1278, city: "London", user: "Emma S.", msg: "Stunning work! So proud of the results.", avatar: "E", color: "#e11d48", delay: "0.6s" },
  { id: "ku-3", lat: 12.9716, lng: 77.5946, city: "Bangalore", user: "Rahul M.", msg: "Massive win for the company. Fantastic!", avatar: "R", color: "#8b5cf6", delay: "1.2s" },
  { id: "ku-4", lat: 35.6762, lng: 139.650, city: "Tokyo", user: "Kenji Y.", msg: "Exceeding all expectations. Amazing! 🏆", avatar: "K", color: "#f43f5e", delay: "1.8s" },
  { id: "ku-5", lat: 52.5200, lng: 13.4050, city: "Berlin", user: "Anna K.", msg: "Setting the new standard! Cheers! 🥂", avatar: "A", color: "#e11d48", delay: "2.5s" },
];

// ─── FESTIVE SEASON PINS DATA ───
const festiveSeasonPins = [
  { id: "fs-1", lat: 51.5074, lng: -0.1278, city: "London", user: "Team UK", msg: "Merry Christmas & Happy New Year! 🎄", avatar: "UK", color: "#ef4444", delay: "0.3s" },
  { id: "fs-2", lat: 40.7128, lng: -74.006, city: "New York", user: "Team US", msg: "Happy Holidays everyone! Enjoy the break!", avatar: "US", color: "#dc2626", delay: "0.9s" },
  { id: "fs-3", lat: 35.6762, lng: 139.650, city: "Tokyo", user: "Team JP", msg: "Wishing you joy and peace this season! 🎁", avatar: "JP", color: "#10b981", delay: "1.5s" },
  { id: "fs-4", lat: -33.868, lng: 151.209, city: "Sydney", user: "Team AU", msg: "Sunny greetings for a wonderful holiday! ☀️", avatar: "AU", color: "#ef4444", delay: "2.1s" },
  { id: "fs-5", lat: 48.8566, lng: 2.3522, city: "Paris", user: "Team FR", msg: "Joyeuses Fêtes! Cheers to an amazing year!", avatar: "FR", color: "#dc2626", delay: "2.8s" },
];

// Configuration selector
const getMapConfig = (pageType) => {
  switch (pageType) {
    case "birthday":
      return {
        pins: birthdayPins,
        badgeText: "Worldwide Wishes",
        title: "Global Birthday Memory Map",
        subtitle: "Celebrate colleagues around the globe. Watch remote teammates in Tokyo, London, Lagos, and beyond light up the map with warm birthday greetings!",
        badgeBg: "rgba(255, 118, 117, 0.08)",
        badgeColor: "#ff7675",
        badgeBorder: "rgba(255, 118, 117, 0.15)",
        reactions: { "🎂": 15, "🎉": 22, "🥳": 18, "🎁": 12 }
      };
    case "appreciation":
      return {
        pins: appreciationPins,
        badgeText: "Team Recognition",
        title: "Appreciation Memory Map",
        subtitle: "Show appreciation across borders. Watch global colleagues in New York, London, Lagos, and Tokyo light up the map with messages of gratitude!",
        badgeBg: "rgba(0, 184, 148, 0.08)",
        badgeColor: "#00b894",
        badgeBorder: "rgba(0, 184, 148, 0.15)",
        reactions: { "💌": 24, "👏": 18, "🌟": 30, "👍": 15 }
      };
    case "retirement":
      return {
        pins: retirementPins,
        badgeText: "Worldwide Tributes",
        title: "Retirement Memory Map",
        subtitle: "Colleagues across the globe honour decades of dedication. Watch heartfelt tributes light up from New York, London, Mumbai, Tokyo, and beyond!",
        badgeBg: "rgba(230, 168, 23, 0.08)",
        badgeColor: "#e6a817",
        badgeBorder: "rgba(230, 168, 23, 0.2)",
        reactions: { "🌴": 18, "🥂": 14, "🏆": 22, "❤️": 30 }
      };
    case "condolence":
      return {
        pins: condolencePins,
        badgeText: "Messages of Comfort",
        title: "Global Condolence Map",
        subtitle: "Compassionate colleagues from around the world share their words of comfort and cherished memories to support those who grieve.",
        badgeBg: "rgba(74, 111, 165, 0.08)",
        badgeColor: "#4a6fa5",
        badgeBorder: "rgba(74, 111, 165, 0.18)",
        reactions: { "💙": 24, "💖": 18, "🕊️": 20, "💫": 15 }
      };
    case "work-milestone":
      return {
        pins: workMilestonePins,
        badgeText: "Global Celebrations",
        title: "Work Milestone Memory Map",
        subtitle: "Colleagues from New York to Singapore, Toronto to Sydney celebrate a career milestone. Watch the world light up with pride and congratulations!",
        badgeBg: "rgba(124, 58, 237, 0.08)",
        badgeColor: "#7c3aed",
        badgeBorder: "rgba(124, 58, 237, 0.2)",
        reactions: { "🏆": 22, "🎉": 18, "⭐": 28, "👏": 20 }
      };
    case "speedy-recovery":
      return {
        pins: speedyRecoveryPins,
        badgeText: "Get Well Wishes",
        title: "Global Get-Well Map",
        subtitle: "Warm wishes and healing thoughts pour in from New York, London, Bangalore, Tokyo, and Amsterdam. The whole world is cheering for a speedy recovery!",
        badgeBg: "rgba(16, 185, 129, 0.08)",
        badgeColor: "#10b981",
        badgeBorder: "rgba(16, 185, 129, 0.2)",
        reactions: { "💚": 24, "🌼": 20, "🥰": 18, "❤️": 22 }
      };
    case "baby-arrival":
      return {
        pins: babyArrivalPins,
        badgeText: "Welcome Baby",
        title: "Global Baby Greetings",
        subtitle: "Colleagues from around the world share their excitement and sweet wishes for the newest addition to the family!",
        badgeBg: "rgba(236, 72, 153, 0.08)",
        badgeColor: "#ec4899",
        badgeBorder: "rgba(236, 72, 153, 0.2)",
        reactions: { "🍼": 24, "🧸": 20, "💕": 30, "🎉": 18 }
      };
    case "onboarding":
      return {
        pins: onboardingPins,
        badgeText: "Global Welcome",
        title: "Worldwide Onboarding Map",
        subtitle: "A massive, warm welcome from colleagues spanning San Francisco to Singapore. The global team is thrilled to have you!",
        badgeBg: "rgba(59, 130, 246, 0.08)",
        badgeColor: "#3b82f6",
        badgeBorder: "rgba(59, 130, 246, 0.2)",
        reactions: { "👋": 35, "🚀": 22, "💙": 18, "🎉": 28 }
      };
    case "kudos":
      return {
        pins: kudosPins,
        badgeText: "Worldwide Kudos",
        title: "Global Recognition Map",
        subtitle: "An incredible achievement recognized globally! Teams from New York, London, Tokyo and beyond light up the map with praise.",
        badgeBg: "rgba(244, 63, 94, 0.08)",
        badgeColor: "#f43f5e",
        badgeBorder: "rgba(244, 63, 94, 0.2)",
        reactions: { "🔥": 40, "🏆": 25, "👏": 32, "🚀": 20 }
      };
    case "festive-season":
      return {
        pins: festiveSeasonPins,
        badgeText: "Happy Holidays",
        title: "Global Festive Cheers",
        subtitle: "The entire company celebrates together! Holiday cheers and end-of-year greetings are shared across all international offices.",
        badgeBg: "rgba(239, 68, 68, 0.08)",
        badgeColor: "#ef4444",
        badgeBorder: "rgba(239, 68, 68, 0.2)",
        reactions: { "🎄": 45, "🎁": 30, "❄️": 22, "🥂": 28 }
      };
    case "send-off":
    default:
      return {
        pins: sendOffPins,
        badgeText: "Worldwide Connections",
        title: "Global Memory Map",
        subtitle: "Remote colleagues in Tokyo, London, Lagos, and beyond show up as glowing dots on an interactive map. Tap on a pin or reaction card to engage.",
        badgeBg: "rgba(124, 58, 237, 0.08)",
        badgeColor: "var(--navy)",
        badgeBorder: "rgba(124, 58, 237, 0.15)",
        reactions: { "💖": 12, "🎉": 8, "👏": 15, "👍": 10 }
      };
  }
};

export default function MemoryMap({ pageType = "send-off" }) {
  const config = getMapConfig(pageType);
  const pins = config.pins;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reactionsState, setReactionsState] = useState(
    pins.map(() => ({ ...config.reactions }))
  );

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const polylineGroupRef = useRef(null);
  const timerRef = useRef(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  // Keep references to state updates fresh for Leaflet callbacks
  const onPinClickRef = useRef(null);
  onPinClickRef.current = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const onPinHoverRef = useRef(null);
  onPinHoverRef.current = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const onPinLeaveRef = useRef(null);
  onPinLeaveRef.current = () => {
    setIsPlaying(true);
  };

  // Reset reactions state if type changes
  useEffect(() => {
    setReactionsState(pins.map(() => ({ ...config.reactions })));
    setActiveIndex(0);
  }, [pageType]);

  // Autoplay slideshow cycling through the pins
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % pins.length);
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, pins.length]);

  // Dynamically load Leaflet CDN assets
  useEffect(() => {
    let cssLink = document.getElementById("leaflet-css");
    if (!cssLink) {
      cssLink = document.createElement("link");
      cssLink.id = "leaflet-css";
      cssLink.rel = "stylesheet";
      cssLink.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(cssLink);
    }

    let scriptTag = document.getElementById("leaflet-js");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "leaflet-js";
      scriptTag.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      scriptTag.async = true;
      scriptTag.onload = () => {
        setLeafletLoaded(true);
      };
      document.body.appendChild(scriptTag);
    } else if (window.L) {
      setLeafletLoaded(true);
    }
  }, []);

  // Update Leaflet Map state when activeIndex changes
  useEffect(() => {
    if (!mapRef.current || activeIndex === null || activeIndex >= pins.length) return;
    updateMapState(activeIndex);
  }, [activeIndex, pins]);

  const updateMapState = (index) => {
    const activePin = pins[index];
    const map = mapRef.current;
    if (!map || !activePin) return;

    // 1. Center map on active pin
    map.flyTo([activePin.lat, activePin.lng], 3.2, {
      animate: true,
      duration: 1.2,
    });

    // 2. Redraw dashed connecting lines
    if (polylineGroupRef.current) {
      polylineGroupRef.current.clearLayers();
      pins.forEach((p, idx) => {
        if (idx === index) return;
        window.L.polyline(
          [[activePin.lat, activePin.lng], [p.lat, p.lng]],
          {
            color: activePin.color,
            weight: 2,
            dashArray: "6, 8",
            opacity: 0.6,
            className: "shared-leaflet-connector-line",
          }
        ).addTo(polylineGroupRef.current);
      });
    }

    // 3. Update active classes on marker elements
    markersRef.current.forEach((marker, idx) => {
      const el = marker.getElement();
      if (el) {
        if (idx === index) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      }
    });
  };

  // Initialize Map once Leaflet JS is fully loaded
  useEffect(() => {
    if (!leafletLoaded || !mapContainerRef.current || mapRef.current) return;

    // Create Leaflet Map Instance
    const map = window.L.map(mapContainerRef.current, {
      center: [20, 0],
      zoom: 2,
      zoomControl: false,
      attributionControl: false,
      minZoom: 1.5,
      maxZoom: 8,
      worldCopyJump: true,
    });

    // Use CartoDB Positron greyscale tiles for premium dashboard aesthetic
    window.L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    const polylineGroup = window.L.layerGroup().addTo(map);
    polylineGroupRef.current = polylineGroup;

    const markerList = [];
    pins.forEach((pin, idx) => {
      // Build custom DivIcon with pulse animation circles
      const iconHtml = `
        <div class="shared-leaflet-marker-wrapper">
          <div class="shared-leaflet-marker-sonar" style="border-color: ${pin.color}"></div>
          <div class="shared-leaflet-marker-dot" style="background: ${pin.color}; box-shadow: 0 0 10px ${pin.color}dd"></div>
        </div>
      `;

      const customIcon = window.L.divIcon({
        className: `shared-leaflet-custom-icon pin-${pin.id}`,
        html: iconHtml,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const marker = window.L.marker([pin.lat, pin.lng], { icon: customIcon }).addTo(map);

      marker.on("click", () => {
        if (onPinClickRef.current) onPinClickRef.current(idx);
      });

      marker.on("mouseover", () => {
        if (onPinHoverRef.current) onPinHoverRef.current(idx);
      });

      marker.on("mouseout", () => {
        if (onPinLeaveRef.current) onPinLeaveRef.current();
      });

      // Bind tooltip matching the design
      marker.bindTooltip(pin.location, {
        direction: "top",
        offset: [0, -10],
        className: "shared-leaflet-tooltip",
      });

      markerList.push(marker);
    });

    markersRef.current = markerList;
    mapRef.current = map;

    // Trigger initial load rendering
    updateMapState(activeIndex);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [leafletLoaded, pins]);

  const handleReact = (emoji) => {
    setReactionsState((prev) => {
      const updated = [...prev];
      if (!updated[activeIndex]) return prev;
      updated[activeIndex] = {
        ...updated[activeIndex],
        [emoji]: (updated[activeIndex][emoji] || 0) + 1,
      };
      return updated;
    });
  };

  const handlePinClick = (index) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  const activePin = pins[activeIndex] || pins[0];

  return (
    <section className="shared-map-section" id="memory-map-shared">
      <div className="shared-map-container">

        {/* Title Header */}
        <header className="shared-map-header">
          <span
            className="shared-map-badge"
            style={{
              background: config.badgeBg,
              color: config.badgeColor,
              borderColor: config.badgeBorder
            }}
          >
            {config.badgeText}
          </span>
          <h2 className="shared-map-title">{config.title}</h2>
          <p className="shared-map-subtitle">{config.subtitle}</p>
        </header>

        {/* Content Layout */}
        <div className="shared-map-layout">

          {/* Left Column: Interactive Map */}
          <div className="shared-map-wrapper">
            <div
              ref={mapContainerRef}
              id="shared-leaflet-world-map"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#f0f2f5",
              }}
            >
              {!leafletLoaded && (
                <div className="shared-map-loader">
                  <div className="shared-loader-spinner" style={{ borderTopColor: config.badgeColor }}></div>
                  <span>Loading Interactive Map...</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Card */}
          <div className="shared-map-card-panel">
            <div
              className="shared-glass-card"
              key={`${pageType}-${activeIndex}`}
              style={{
                border: `1px solid ${activePin.color}33`,
                boxShadow: `0 24px 50px rgba(26, 43, 74, 0.08), 0 0 20px ${activePin.color}08`,
              }}
            >
              {/* Giant watermark quote mark */}
              <span className="shared-card-quote-mark" style={{ color: `${activePin.color}0d` }}>“</span>

              {/* Header inside Card */}
              <div className="shared-glass-card-header">
                <div
                  className="shared-card-avatar"
                  style={{
                    background: activePin.color,
                    boxShadow: `0 8px 20px ${activePin.color}44`,
                  }}
                >
                  {activePin.avatar}
                </div>
                <div className="shared-card-meta">
                  <h4 className="shared-card-name">{activePin.name}</h4>
                  <div className="shared-card-meta-row">
                    <span className="shared-card-role-pill">{activePin.role}</span>
                    <span className="shared-card-location">📍 {activePin.location}</span>
                  </div>
                </div>
                <span className="shared-card-time">{activePin.time}</span>
              </div>

              {/* Message Content */}
              <div className="shared-glass-card-body">
                <p className="shared-card-msg">“ {activePin.msg} ”</p>
              </div>

              {/* Interactive Emoji Reactions */}
              <div className="shared-card-reactions">
                {reactionsState[activeIndex] && Object.entries(reactionsState[activeIndex]).map(([emoji, count]) => (
                  <button
                    key={emoji}
                    className="shared-reaction-btn"
                    onClick={() => handleReact(emoji)}
                    style={{
                      "--active-glow": activePin.color,
                    }}
                  >
                    <span className="shared-reaction-emoji">{emoji}</span>
                    <span className="shared-reaction-count">{count}</span>
                  </button>
                ))}
              </div>

              {/* Slideshow indicator dots */}
              <div className="shared-card-footer">
                <div className="shared-map-dots">
                  {pins.map((_, idx) => (
                    <button
                      key={idx}
                      className={`shared-map-dot ${idx === activeIndex ? "active" : ""}`}
                      onClick={() => handlePinClick(idx)}
                      style={{
                        background: idx === activeIndex ? activePin.color : "rgba(26, 43, 74, 0.12)",
                      }}
                      aria-label={`Show message ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Autoplay Pause / Play button */}
                <button
                  className="shared-map-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isPlaying ? "⏸ Pause" : "▶ Autoplay"}
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
