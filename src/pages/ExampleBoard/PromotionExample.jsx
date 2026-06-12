import React from 'react';
import { Link } from 'react-router-dom';
import './PromotionExample.css';
import bgImage from '../../assets/promotion_backdrop.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const COMMENTS = [
  {
    id: 1,
    name: "Ayush Sharma",
    message: "Huge congratulations on the promotion! You've worked so hard for this, and it's incredibly well-deserved. Let's celebrate soon! 🥂",
    color: "rgba(255, 255, 255, 0.95)",
    size: "large"
  },
  {
    id: 2,
    name: "Deepa Nair",
    message: "So proud of you! Congratulations on stepping up to the new role. 📈",
    color: "rgba(255, 245, 250, 0.95)",
    size: "small",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    name: "Manoj Tiwari",
    message: "I knew it was only a matter of time! Your leadership qualities have always stood out. Looking forward to seeing what you achieve as our new Director. 👏",
    color: "rgba(250, 245, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "medium"
  },
  {
    id: 4,
    name: "Rhea Chakraborty",
    message: "Congratulations! You are going to be amazing in this new position. ✨",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small",
    audio: "https://www.w3schools.com/html/horse.mp3"
  },
  {
    id: 5,
    name: "Gaurav Kapoor",
    message: "What fantastic news! It's been great watching your journey here. Best of luck with all the new responsibilities coming your way. 💼",
    color: "rgba(255, 250, 255, 0.95)",
    size: "medium"
  },
  {
    id: 6,
    name: "Sonakshi Sinha",
    message: "Congratulations on the big jump! Drinks are on you this weekend! 🍻",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 7,
    name: "Pratik Gandhi",
    message: "Extremely well-deserved! Your dedication and strategic thinking have brought so much value to the team. Excited for your next chapter! 🚀",
    color: "rgba(255, 245, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 8,
    name: "Sushmita Sen",
    message: "A massive congratulations! Keep climbing. 🧗‍♀️",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 9,
    name: "Siddhant Chaturvedi",
    message: "Congratulations! No one deserves this promotion more than you do. You've earned every bit of this success.",
    color: "rgba(250, 255, 255, 0.95)",
    size: "medium"
  },
  {
    id: 10,
    name: "Nimrat Kaur",
    message: "Happy Promotion Day! May you achieve even greater heights. 🌟",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 11,
    name: "Farah Ali",
    message: "Amazing news! The team is lucky to have you leading us forward. Let's make this year our best one yet.",
    color: "rgba(255, 248, 255, 0.95)",
    size: "medium"
  },
  {
    id: 12,
    name: "Radhika Madan",
    message: "Woohoo! Congrats on the new title! 🎉",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 13,
    name: "Jackie Shroff",
    message: "Congratulations on the promotion! You’ve put in the late hours and the hard work, and it's finally paying off. Really happy for you.",
    color: "rgba(240, 245, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 14,
    name: "Lara Dutta",
    message: "Big congrats! You are an inspiration to us all. 🌺",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 15,
    name: "Shekhar Kapur",
    message: "Congrats! This promotion is a testament to your hard work. Wishing you the absolute best in your new role.",
    color: "rgba(255, 250, 240, 0.95)",
    size: "medium"
  },
  {
    id: 16,
    name: "Mrunal Thakur",
    message: "Congratulations on moving up the ladder! 🪜",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 17,
    name: "Anurag Kashyap",
    message: "This is brilliant news! I can't wait to see the incredible things you'll accomplish in this new position.",
    color: "rgba(250, 240, 255, 0.95)",
    size: "medium"
  },
  {
    id: 18,
    name: "Shraddha Kapoor",
    message: "Congrats! Sending you my warmest wishes. ✨",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 19,
    name: "Irrfan Khan",
    message: "Your talent and determination are truly inspiring. Congratulations on this well-deserved promotion. Onward and upward! 🎈",
    color: "rgba(245, 250, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 20,
    name: "Vidya Balan",
    message: "Congratulations! So incredibly happy for you. 👑",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  }
];

export default function PromotionExample() {
  return (
    <>
      <Navbar />
      <div className="promotion-board" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="promotion-board__overlay"></div>
        
        <div className="promotion-board__header">
        <Link to="/#examples" className="promotion-board__back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>
        <h1>Congratulations on the Promotion! 🚀</h1>
          <p>A sample job promotion board</p>
        </div>

        <div className="promotion-board__container">
          <div className="promotion-board__grid">
            {COMMENTS.map((comment) => (
              <div 
                key={comment.id} 
                className={`promotion-board__card promotion-board__card--${comment.size}`}
                style={{ backgroundColor: comment.color }}
              >
                {comment.video && (
                  <div className="promotion-board__card-video">
                    <div className="promotion-board__media-sticker promotion-board__media-sticker--video">
                      🎥 Video Message
                    </div>
                    <video src={comment.video} controls className="promotion-board__video-element" />
                  </div>
                )}
                {comment.audio && (
                  <div className="promotion-board__card-audio">
                    <div className="promotion-board__media-sticker promotion-board__media-sticker--audio">
                      🎤 Voice Note
                    </div>
                    <audio src={comment.audio} controls className="promotion-board__audio-element" />
                  </div>
                )}
                {comment.image && (
                  <div className="promotion-board__card-image">
                    <img src={comment.image} alt="Promotion Celebration" />
                  </div>
                )}
                <div className="promotion-board__card-content">
                  <p className="promotion-board__message">"{comment.message}"</p>
                  <div className="promotion-board__author">
                    <div className="promotion-board__avatar">
                      {comment.name.charAt(0)}
                    </div>
                    <span className="promotion-board__name">{comment.name}</span>
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
