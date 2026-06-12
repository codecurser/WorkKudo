import React from 'react';
import { Link } from 'react-router-dom';
import './GetWellExample.css';
import bgImage from '../../assets/getwellsoon_backdrop.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const COMMENTS = [
  {
    id: 1,
    name: "Sunil Shetty",
    message: "Wishing you a speedy recovery! Take all the time you need to rest and heal. We are holding down the fort here at the office. Get well soon! 🩹",
    color: "rgba(255, 255, 255, 0.95)",
    size: "large"
  },
  {
    id: 2,
    name: "Madhuri Dixit",
    message: "Sending you lots of love and warm hugs. Recover soon! ❤️",
    color: "rgba(255, 250, 240, 0.95)",
    size: "small",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    name: "Kartik Aaryan",
    message: "Hope you are feeling a little better every day. We miss your jokes during the standups! Rest up and come back stronger.",
    color: "rgba(255, 255, 245, 0.95)",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "medium"
  },
  {
    id: 4,
    name: "Bhumi Pednekar",
    message: "Thinking of you and hoping for a quick recovery. 🌻",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small",
    audio: "https://www.w3schools.com/html/horse.mp3"
  },
  {
    id: 5,
    name: "Nawazuddin Siddiqui",
    message: "Health always comes first! Please don't worry about the ongoing project, everything is under control. Focus on getting better.",
    color: "rgba(255, 248, 240, 0.95)",
    size: "medium"
  },
  {
    id: 6,
    name: "Taapsee Pannu",
    message: "Sending healing vibes your way! Get well soon. ☀️",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 7,
    name: "Shahid Kapoor",
    message: "The office just isn't the same without your energy. Take your meds, drink plenty of fluids, and bounce back soon! We're all praying for your speedy recovery. 🙏",
    color: "rgba(255, 245, 235, 0.95)",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb0d9c57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 8,
    name: "Kangana Ranaut",
    message: "Wishing you a fast and full recovery. 🌸",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 9,
    name: "Vicky Kaushal",
    message: "Take it easy and rest up! We can't wait to have you back in good health.",
    color: "rgba(255, 250, 245, 0.95)",
    size: "medium"
  },
  {
    id: 10,
    name: "Yami Gautam",
    message: "Hope each new day brings you closer to a full recovery. 🍵",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 11,
    name: "Manoj Bajpayee",
    message: "Sending positive thoughts and healthy wishes. Don't rush it, just focus on healing completely.",
    color: "rgba(250, 250, 250, 0.95)",
    size: "medium"
  },
  {
    id: 12,
    name: "Radhika Apte",
    message: "Get well soon! We are all rooting for you. 🪴",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 13,
    name: "Pankaj Tripathi",
    message: "It was really tough hearing you were unwell. Please let us know if there is anything we can do to help you or your family right now. Wishing you peace and health.",
    color: "rgba(255, 240, 235, 0.95)",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 14,
    name: "Richa Chadha",
    message: "Sending you sunshine and good health. ☀️",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 15,
    name: "Ali Fazal",
    message: "Hope you feel a little better every day. Miss seeing your smiling face at the desk!",
    color: "rgba(255, 252, 240, 0.95)",
    size: "medium"
  },
  {
    id: 16,
    name: "Swara Bhasker",
    message: "Get well soon! Remember to get plenty of rest. 🛌",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 17,
    name: "Abhishek Bachchan",
    message: "Sending you strength and best wishes for a quick recovery. See you soon buddy!",
    color: "rgba(250, 255, 250, 0.95)",
    size: "medium"
  },
  {
    id: 18,
    name: "Kareena Kapoor",
    message: "Wishing you a very speedy recovery. 💖",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 19,
    name: "Saif Ali Khan",
    message: "So sorry to hear you're feeling under the weather! I've sent over some warm soup to your place. Hope it helps. Take care! 🍲",
    color: "rgba(255, 245, 245, 0.95)",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 20,
    name: "Anil Kapoor",
    message: "Feel better soon! We are sending you our best. 🌟",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  }
];

export default function GetWellExample() {
  return (
    <>
      <Navbar />
      <div className="getwell-board" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="getwell-board__overlay"></div>
        
        <div className="getwell-board__header">
        <Link to="/#examples" className="getwell-board__back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>
        <h1>Get Well Soon! 🌼</h1>
          <p>A sample healing wishes board</p>
        </div>

        <div className="getwell-board__container">
          <div className="getwell-board__grid">
            {COMMENTS.map((comment) => (
              <div 
                key={comment.id} 
                className={`getwell-board__card getwell-board__card--${comment.size}`}
                style={{ backgroundColor: comment.color }}
              >
                {comment.video && (
                  <div className="getwell-board__card-video">
                    <video src={comment.video} controls className="getwell-board__video-element" />
                  </div>
                )}
                {comment.audio && (
                  <div className="getwell-board__card-audio">
                    <audio src={comment.audio} controls className="getwell-board__audio-element" />
                  </div>
                )}
                {comment.image && (
                  <div className="getwell-board__card-image">
                    <img src={comment.image} alt="Get Well Soon" />
                  </div>
                )}
                <div className="getwell-board__card-content">
                  <p className="getwell-board__message">"{comment.message}"</p>
                  <div className="getwell-board__author">
                    <div className="getwell-board__avatar">
                      {comment.name.charAt(0)}
                    </div>
                    <span className="getwell-board__name">{comment.name}</span>
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
