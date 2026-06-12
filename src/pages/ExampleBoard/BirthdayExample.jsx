import React from 'react';
import { Link } from 'react-router-dom';
import './BirthdayExample.css';
import bgImage from '../../assets/birthday_backdrop.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const COMMENTS = [
  {
    id: 1,
    name: "Aarav Sharma",
    message: "Wishing you the happiest of birthdays! May this year bring you immense success and joy. You've been an amazing team member and friend. Let's celebrate soon!",
    color: "rgba(255, 255, 255, 0.95)",
    size: "large"
  },
  {
    id: 2,
    name: "Priya Patel",
    message: "Happy Birthday! 🎂 Have a fantastic day ahead.",
    color: "rgba(255, 245, 245, 0.95)",
    size: "small",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    name: "Rohan Desai",
    message: "Happy Birthday! Thank you for always being there to help me out with those tricky bugs. Hope you have a wonderful year ahead filled with happiness.",
    color: "rgba(240, 248, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "medium"
  },
  {
    id: 4,
    name: "Ananya Singh",
    message: "Happy Birthday! Keep shining and inspiring us all. ✨",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small",
    audio: "https://www.w3schools.com/html/horse.mp3"
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    message: "Wishing you a very Happy Birthday! It's been great working with you. Hope you get to take some time off and celebrate with your family. Cheers!",
    color: "rgba(255, 253, 240, 0.95)",
    size: "medium"
  },
  {
    id: 6,
    name: "Neha Gupta",
    message: "Happy Birthday! Here's to more coffee breaks and great conversations. Enjoy your special day! 🎈",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 7,
    name: "Karan Johar",
    message: "Wishing you an amazing birthday filled with love, laughter, and lots of cake! 🍰 Your energy always lights up the room.",
    color: "rgba(248, 240, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 8,
    name: "Meera Reddy",
    message: "Happy Birthday! 🎉 So glad to have you on the team.",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 9,
    name: "Aditya Verma",
    message: "Happy Birthday! May all your dreams come true this year. Keep up the fantastic work! 🚀 Looking forward to achieving more milestones together.",
    color: "rgba(245, 255, 245, 0.95)",
    size: "medium"
  },
  {
    id: 10,
    name: "Sanya Kapoor",
    message: "Wishing you a fabulous birthday! Let's party hard this weekend! 🥳",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 11,
    name: "Kabir Das",
    message: "Many happy returns of the day! Your dedication and hard work always inspire me. Have a blessed year ahead.",
    color: "rgba(255, 250, 240, 0.95)",
    size: "medium"
  },
  {
    id: 12,
    name: "Ishita Iyer",
    message: "Happy Birthday! Wishing you lots of joy, peace, and success in the coming year. 🌟",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 13,
    name: "Rajesh Khanna",
    message: "A very Happy Birthday to a phenomenal colleague! Have the best day ever, you deserve it.",
    color: "rgba(240, 248, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 14,
    name: "Sneha Joshi",
    message: "Happy Birthday! Here is to a year of good health, happiness, and great code. 💻",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 15,
    name: "Manish Agarwal",
    message: "Wishing you a fantastic birthday and an incredible year ahead. Thank you for your continued support on all our projects.",
    color: "rgba(255, 240, 245, 0.95)",
    size: "medium"
  },
  {
    id: 16,
    name: "Pooja Banerjee",
    message: "Happy Birthday! Hope you get spoiled today. Enjoy your cake! 🧁",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 17,
    name: "Arjun Nair",
    message: "Happy Birthday! 🎉 I still remember our first project together. Here's to many more successful launches and fun memories.",
    color: "rgba(255, 255, 240, 0.95)",
    size: "medium"
  },
  {
    id: 18,
    name: "Kriti Sanon",
    message: "Have a spectacular birthday! Keep being the amazing person you are.",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 19,
    name: "Rishi Raj",
    message: "Happy Birthday! 🎈 Wishing you all the best things in life. Let's grab lunch next week to celebrate.",
    color: "rgba(240, 255, 240, 0.95)",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 20,
    name: "Diya Menon",
    message: "Happy Birthday! May your day be as wonderful as you are.",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 21,
    name: "Karthik Subbaraj",
    message: "Wishing you a great birthday and a prosperous year ahead! Keep killing it at work.",
    color: "rgba(248, 248, 255, 0.95)",
    size: "medium"
  },
  {
    id: 22,
    name: "Simran Kaur",
    message: "Happy Birthday! 🎊 Hope you have an awesome time celebrating with your loved ones.",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 23,
    name: "Yashvardhan Raichand",
    message: "Happy Birthday! Proud to have you on the team. Your positive attitude is contagious. Cheers! 🥂",
    color: "rgba(255, 245, 230, 0.95)",
    size: "medium"
  },
  {
    id: 24,
    name: "Tara Sutaria",
    message: "Happy Birthday! Wishing you nothing but the best.",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  }
];

export default function BirthdayExample() {
  return (
    <>
      <Navbar />
      <div className="example-board" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="example-board__overlay"></div>
        
        <div className="example-board__header">
        <Link to="/#examples" className="example-board__back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>
        <h1>Happy Birthday! 🎂</h1>
          <p>A sample celebration board</p>
        </div>

        <div className="example-board__container">
          <div className="example-board__grid">
            {COMMENTS.map((comment) => (
              <div 
                key={comment.id} 
                className={`example-board__card example-board__card--${comment.size}`}
                style={{ backgroundColor: comment.color }}
              >
                {comment.video && (
                  <div className="example-board__card-video">
                    <video src={comment.video} controls className="example-board__video-element" />
                  </div>
                )}
                {comment.audio && (
                  <div className="example-board__card-audio">
                    <audio src={comment.audio} controls className="example-board__audio-element" />
                  </div>
                )}
                {comment.image && (
                  <div className="example-board__card-image">
                    <img src={comment.image} alt="Celebration" />
                  </div>
                )}
                <div className="example-board__card-content">
                  <p className="example-board__message">"{comment.message}"</p>
                  <div className="example-board__author">
                    <div className="example-board__avatar">
                      {comment.name.charAt(0)}
                    </div>
                    <span className="example-board__name">{comment.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
