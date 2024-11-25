// import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ourOnGoingProjects.css";
import bgImg from "../../components/assets/on_going_project_syl.jpg";
import SylRetreatHomePage from "../../components/assets/syl-retreat-home-page.jpg";

import React from "react";
const OngoingProjects = () => {
  return (
    <div className="projects-container-new">
      <h1 className="projects-title">Our Ongoing Projects</h1>

      <div className="project-card">
        <div className="project-image-container">
          <img
            // src="https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src={bgImg}
            src={SylRetreatHomePage}
            alt="Green farmland under blue sky with white clouds"
            className="project-image"
          />
        </div>
        <div className="project-content">
          <h2 className="project-subtitle syl-retreat-title">Sylvan Retreat</h2>
          <p className="project-description">
            Farmland is not just a dream; it's a sound financial investment with
            growing demand in the market.
          </p>
          <Link to="/sylvan-retreat">
            <button className="project-button">Read More</button>
          </Link>
        </div>
      </div>

      {/* <style jsx>{`
        .projects-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #e8f5e9, #c8e6c9);
          padding: 2rem;
          font-family: Arial, sans-serif;
        }

        .projects-title {
          text-align: center;
          color: #004d40;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .project-card {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: 0 auto;
        }

        .project-image-container {
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-content {
          padding: 1.5rem;
          text-align: center;
        }

        .project-subtitle {
          color: #004d40;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #333;
          margin-bottom: 1.5rem;
        }

        .project-button {
          background-color: #558b2f;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .project-button:hover {
          background-color: #33691e;
        }

        @media (max-width: 768px) {
          .projects-title {
            font-size: 2rem;
          }

          .project-subtitle {
            font-size: 1.25rem;
          }

          .project-image-container {
            height: 300px;
          }
        }
      `}</style> */}
    </div>
  );
};

export default OngoingProjects;
