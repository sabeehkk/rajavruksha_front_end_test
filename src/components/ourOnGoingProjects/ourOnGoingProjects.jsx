// import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./ourOnGoingProjects.css";
import bgImg from "../../components/assets/on_going_project_syl.jpg";
import SylRetreatHomePage from "../../components/assets/Sylan retreat_Banner1.jpg";

import React from "react";
const OngoingProjects = () => {
  return (
    <div className="projects-container-new">
      <h1 className="projects-title">Our Ongoing Projects</h1>

      <div className="project-card">
        <div className="project-image-container">
          <img style={{userSelect:'none'}}
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
    </div>
  );
};

export default OngoingProjects;
