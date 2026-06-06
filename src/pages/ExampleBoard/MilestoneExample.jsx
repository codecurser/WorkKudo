import React from 'react';
import { Link } from 'react-router-dom';
import './MilestoneExample.css';
import bgImage from '../../assets/carrier_milestone.png';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const COMMENTS = [
  {
    id: 1,
    name: "Vikrant Singh",
    message: "Congratulations on completing 5 incredible years with us! Your technical leadership and problem-solving skills have been pivotal to our growth. Here's to many more milestones together! 🏆",
    color: "rgba(255, 255, 255, 0.95)",
    size: "large"
  },
  {
    id: 2,
    name: "Anjali Desai",
    message: "Happy work anniversary! So proud of everything you've achieved.",
    color: "rgba(240, 248, 255, 0.95)",
    size: "small"
  },
  {
    id: 3,
    name: "Kunal Nayyar",
    message: "10 years! That's a huge accomplishment. Thank you for being the backbone of this team. We literally couldn't have shipped the new platform without you. 🙌",
    color: "rgba(245, 250, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "medium"
  },
  {
    id: 4,
    name: "Shalini Pandey",
    message: "Congrats on your career milestone! Keep aiming high. 🚀",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 5,
    name: "Sanjay Dutt",
    message: "Time flies! It feels like just yesterday you joined the team as a fresh grad, and now you're leading major initiatives. Huge congratulations! 💼",
    color: "rgba(253, 245, 255, 0.95)",
    size: "medium"
  },
  {
    id: 6,
    name: "Divya Agarwal",
    message: "Happy Anniversary! Your hard work doesn't go unnoticed. 🌟",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 7,
    name: "Rishi Kapoor",
    message: "Congratulations on reaching this amazing milestone! Your dedication to quality and mentoring juniors has shaped the culture of this entire department. Thank you for everything. 👏",
    color: "rgba(245, 245, 255, 0.95)",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 8,
    name: "Preity Zinta",
    message: "Cheers to 5 amazing years! 🥂",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 9,
    name: "Varun Dhawan",
    message: "Congratulations! You've set the bar so high for all of us. Wishing you continued success in the years to come.",
    color: "rgba(255, 250, 240, 0.95)",
    size: "medium"
  },
  {
    id: 10,
    name: "Kiara Advani",
    message: "Happy work anniversary! Let's celebrate your success today! 🎉",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 11,
    name: "Farah Khan",
    message: "What a journey it has been! Thank you for your relentless commitment to excellence. You inspire us every single day.",
    color: "rgba(240, 255, 245, 0.95)",
    size: "medium"
  },
  {
    id: 12,
    name: "Shruti Haasan",
    message: "Congratulations on the milestone! Here's to many more. 🥂",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 13,
    name: "Ayushmann Khurrana",
    message: "A massive congratulations on your milestone! Your ability to lead through challenging times has been a true asset to the company. Keep inspiring us!",
    color: "rgba(255, 245, 230, 0.95)",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 14,
    name: "Genelia D'Souza",
    message: "Happy 3rd Anniversary! Keep up the brilliant work. ✨",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 15,
    name: "John Abraham",
    message: "Congratulations! It takes a special kind of dedication to achieve what you have. We are lucky to have you on our side.",
    color: "rgba(245, 255, 255, 0.95)",
    size: "medium"
  },
  {
    id: 16,
    name: "Tamannaah Bhatia",
    message: "Happy Work Anniversary! Wishing you more promotions and success. 📈",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 17,
    name: "Ram Charan",
    message: "Congrats on your big milestone! Thank you for bringing so much passion and creativity to the projects we've worked on together.",
    color: "rgba(255, 248, 248, 0.95)",
    size: "medium"
  },
  {
    id: 18,
    name: "Ileana D'Cruz",
    message: "Happy Anniversary! Proud to be your colleague.",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  },
  {
    id: 19,
    name: "Rajkummar Rao",
    message: "Happy work anniversary! Your strategic vision and execution are unmatched. Looking forward to celebrating many more wins together! 🏅",
    color: "rgba(255, 255, 240, 0.95)",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    size: "large"
  },
  {
    id: 20,
    name: "Bipasha Basu",
    message: "Congratulations! Thanks for all the hard work. 💯",
    color: "rgba(255, 255, 255, 0.95)",
    size: "small"
  }
];

export default function MilestoneExample() {
  return (
    <>
      <Navbar />
      <div className="milestone-board" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="milestone-board__overlay"></div>
        
        <div className="milestone-board__header">
        <Link to="/#examples" className="milestone-board__back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>
        <h1>Happy Work Anniversary! 🏆</h1>
          <p>A sample career milestone board</p>
        </div>

        <div className="milestone-board__container">
          <div className="milestone-board__grid">
            {COMMENTS.map((comment) => (
              <div 
                key={comment.id} 
                className={`milestone-board__card milestone-board__card--${comment.size}`}
                style={{ backgroundColor: comment.color }}
              >
                {comment.image && (
                  <div className="milestone-board__card-image">
                    <img src={comment.image} alt="Milestone Celebration" />
                  </div>
                )}
                <div className="milestone-board__card-content">
                  <p className="milestone-board__message">"{comment.message}"</p>
                  <div className="milestone-board__author">
                    <div className="milestone-board__avatar">
                      {comment.name.charAt(0)}
                    </div>
                    <span className="milestone-board__name">{comment.name}</span>
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
