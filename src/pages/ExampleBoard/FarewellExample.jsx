import React from 'react';
import { Link } from 'react-router-dom';
import './FarewellExample.css';
import bgImage from '../../assets/farewell_backdrop.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const COMMENTS = [
  {
    id: 1,
    name: "Ravi Teja",
    message: "We're going to miss you so much! Wishing you all the best in your new role. Stay in touch and don't forget us! 👋",
    color: "rgba(255, 255, 255, 0.95)",
    size: "large"
  },
  {
    id: 2,
    name: "Aishwarya Rao",
    message: "Good luck with your next adventure! It was wonderful working with you.",
    color: "rgba(245, 255, 250, 0.95)",
    size: "small"
  },
  {
    id: 3,
    name: "Siddharth Menon",
    message: "Thank you for all your help and guidance over the past two years. The team won't be the same without you. Best of luck! 🚀",
    color: "rgba(240, 248, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "medium"
  },
  {
    id: 4,
    name: "Kavya Reddy",
    message: "Farewell! Wishing you incredible success in your future endeavors. ✨",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 5,
    name: "Arvind Swamy",
    message: "It’s hard to say goodbye! You've been a great mentor and friend. Hope to cross paths again soon. Cheers!",
    color: "rgba(255, 253, 240, 0.95)",
    size: "medium"
  },
  {
    id: 6,
    name: "Pooja Hegde",
    message: "Good luck at your new job! Going to miss our lunch break chats. 🥪",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 7,
    name: "Vijay Kumar",
    message: "Thank you for being an amazing colleague. Your positive energy and dedication always motivated us. Wishing you the absolute best! 🌟",
    color: "rgba(248, 240, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 8,
    name: "Nithya Menen",
    message: "Farewell and good luck! 🎉",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 9,
    name: "Gautham Menon",
    message: "It was an absolute pleasure working with you. Your new team is lucky to have you. Keep shining! 💫",
    color: "rgba(245, 255, 245, 0.95)",
    size: "medium"
  },
  {
    id: 10,
    name: "Sneha Ullal",
    message: "All the best for your next chapter! ✈️",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 11,
    name: "Rahul Dravid",
    message: "Your hard work and dedication have been truly inspiring. We'll miss your calm presence during those chaotic releases.",
    color: "rgba(255, 250, 240, 0.95)",
    size: "medium"
  },
  {
    id: 12,
    name: "Shreya Ghoshal",
    message: "Wishing you a bright and happy future ahead! 🌺",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 13,
    name: "Farhan Akhtar",
    message: "You've left some big shoes to fill! Thanks for all the laughs and late-night debugging sessions. Good luck!",
    color: "rgba(240, 248, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 14,
    name: "Trisha Krishnan",
    message: "Goodbye and good luck! You will be missed! 😢",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 15,
    name: "Suresh Raina",
    message: "Thanks for always stepping up to help the team. Wishing you the greatest success in your new venture.",
    color: "rgba(255, 240, 245, 0.95)",
    size: "medium"
  },
  {
    id: 16,
    name: "Kajal Aggarwal",
    message: "Hope your new workplace is as awesome as you are! 💼",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 17,
    name: "Prabhas Raju",
    message: "Wishing you success, happiness, and growth! Thanks for all the incredible work you've delivered.",
    color: "rgba(255, 255, 240, 0.95)",
    size: "medium"
  },
  {
    id: 18,
    name: "Anushka Shetty",
    message: "It’s been a joy working alongside you. Keep in touch!",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 19,
    name: "Allu Arjun",
    message: "Going to miss your great sense of humor! Stay awesome and keep crushing it wherever you go. 🙌",
    color: "rgba(240, 255, 240, 0.95)",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 20,
    name: "Samantha Prabhu",
    message: "Good luck and farewell! ✨",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  }
];

export default function FarewellExample() {
  return (
    <>
      <Navbar />
      <div className="farewell-board" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="farewell-board__overlay"></div>
        
        <div className="farewell-board__header">
        <Link to="/#examples" className="farewell-board__back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>
        <h1>We'll Miss You! 👋</h1>
          <p>A sample farewell board</p>
        </div>

        <div className="farewell-board__container">
          <div className="farewell-board__grid">
            {COMMENTS.map((comment) => (
              <div 
                key={comment.id} 
                className={`farewell-board__card farewell-board__card--${comment.size}`}
                style={{ backgroundColor: comment.color }}
              >
                {comment.image && (
                  <div className="farewell-board__card-image">
                    <img src={comment.image} alt="Farewell" />
                  </div>
                )}
                <div className="farewell-board__card-content">
                  <p className="farewell-board__message">"{comment.message}"</p>
                  <div className="farewell-board__author">
                    <div className="farewell-board__avatar">
                      {comment.name.charAt(0)}
                    </div>
                    <span className="farewell-board__name">{comment.name}</span>
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
