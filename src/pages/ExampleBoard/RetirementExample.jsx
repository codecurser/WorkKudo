import React from 'react';
import { Link } from 'react-router-dom';
import './RetirementExample.css';
import bgImage from '../../assets/retirement_backdrop.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const COMMENTS = [
  {
    id: 1,
    name: "Ajay Devgn",
    message: "Happy Retirement! You have been a pillar of strength and wisdom for this company. May your next chapter be filled with relaxation, travel, and joy! 🏖️",
    color: "rgba(255, 255, 255, 0.95)",
    size: "large"
  },
  {
    id: 2,
    name: "Kajol Mukherjee",
    message: "Wishing you a wonderful retirement! Enjoy the endless weekends. 🌅",
    color: "rgba(250, 245, 255, 0.95)",
    size: "small"
  },
  {
    id: 3,
    name: "Ranveer Singh",
    message: "It’s hard to imagine the office without your energy and humor! Thank you for the countless memories and for always leading by example. Have an amazing retirement! 🌟",
    color: "rgba(248, 248, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "medium"
  },
  {
    id: 4,
    name: "Deepika Padukone",
    message: "Congratulations on your well-deserved retirement. You will be missed! 💜",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 5,
    name: "Hrithik Roshan",
    message: "Cheers to your retirement! After all these years of hard work, it's finally time to kick back and enjoy the fruits of your labor. Best wishes on your new journey.",
    color: "rgba(255, 250, 255, 0.95)",
    size: "medium"
  },
  {
    id: 6,
    name: "Katrina Kaif",
    message: "Happy Retirement! I hope your days are filled with family, fun, and zero alarms. ⏰",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 7,
    name: "Aamir Khan",
    message: "You have inspired so many of us throughout your career. Your legacy here will last a very long time. Wishing you a healthy, happy, and fulfilling retirement! 🏆",
    color: "rgba(245, 240, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 8,
    name: "Juhi Chawla",
    message: "Enjoy the freedom! Happy Retirement. 🦋",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 9,
    name: "Shah Rukh Khan",
    message: "It’s been an absolute privilege working alongside you. Wishing you the best as you step into this exciting new phase of life. You've earned it!",
    color: "rgba(250, 255, 255, 0.95)",
    size: "medium"
  },
  {
    id: 10,
    name: "Rani Mukerji",
    message: "Happy Retirement! May your coffee be hot and your days be long and peaceful. ☕",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 11,
    name: "Salman Khan",
    message: "Congratulations on retiring! Now the real fun begins. Go out there and conquer your bucket list!",
    color: "rgba(255, 248, 255, 0.95)",
    size: "medium"
  },
  {
    id: 12,
    name: "Shilpa Shetty",
    message: "Wishing you an active and blissful retirement! 🧘‍♀️",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 13,
    name: "Akshay Kumar",
    message: "Thank you for all your hard work and dedication over the decades. You’ve set a standard that will be tough to follow. Have a fantastic retirement!",
    color: "rgba(240, 245, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1473496169904-658ba37448eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 14,
    name: "Raveena Tandon",
    message: "Happy Retirement! Enjoy every single moment of your free time. 🌸",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 15,
    name: "Govinda Ahuja",
    message: "It won't be the same without your jokes and smiles. We'll miss you dearly. Wishing you all the best!",
    color: "rgba(255, 250, 240, 0.95)",
    size: "medium"
  },
  {
    id: 16,
    name: "Karisma Kapoor",
    message: "Happy Retirement! You deserve every bit of happiness. 🎈",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 17,
    name: "Saif Ali Khan",
    message: "Congratulations! I hope retirement brings you the chance to do everything you’ve always wanted to do but didn't have the time for.",
    color: "rgba(250, 240, 255, 0.95)",
    size: "medium"
  },
  {
    id: 18,
    name: "Sonali Bendre",
    message: "Wishing you joy and relaxation. Happy Retirement! ✨",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 19,
    name: "Sunil Dutt",
    message: "Your contributions to the team and company have been immense. Thank you for your service and leadership. Have a grand retirement, my friend!",
    color: "rgba(245, 250, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 20,
    name: "Madhubala Dehlvi",
    message: "Happy Retirement! You will be missed forever. 🌺",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  }
];

export default function RetirementExample() {
  return (
    <>
      <Navbar />
      <div className="retirement-board" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="retirement-board__overlay"></div>
        
        <div className="retirement-board__header">
        <Link to="/#examples" className="retirement-board__back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>
          <h1>Happy Retirement! 🌴</h1>
          <p>A sample retirement wishes board</p>
        </div>

        <div className="retirement-board__container">
          <div className="retirement-board__grid">
            {COMMENTS.map((comment) => (
              <div 
                key={comment.id} 
                className={`retirement-board__card retirement-board__card--${comment.size}`}
                style={{ backgroundColor: comment.color }}
              >
                {comment.image && (
                  <div className="retirement-board__card-image">
                    <img src={comment.image} alt="Retirement Celebration" />
                  </div>
                )}
                <div className="retirement-board__card-content">
                  <p className="retirement-board__message">"{comment.message}"</p>
                  <div className="retirement-board__author">
                    <div className="retirement-board__avatar">
                      {comment.name.charAt(0)}
                    </div>
                    <span className="retirement-board__name">{comment.name}</span>
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
