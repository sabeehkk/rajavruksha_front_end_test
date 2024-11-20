// import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './ourOnGoingProjects.css';



import React from 'react';
const OngoingProjects = () => {
  return (
    <div className="projects-container-new">
      <h1 className="projects-title">Our Ongoing Projects</h1>
      
      <div className="project-card" style={{ padding: '27px 65px 4px 65px !important' }}>
        <div className="project-image-container">
          <img 
            src="https://rajavrukshagroup.in/wp-content/uploads/2023/12/pexels-jahoo-clouseau-388415-2048x1080.jpg" 
            alt="Green farmland under blue sky with white clouds"
            className="project-image"
          />
        </div>
        <div className="project-content">
          <h2 className="project-subtitle">Sylvan Retreat</h2>
          <p className="project-description">
            Farmland is not just a dream; it's a sound financial investment with growing demand in the market.
          </p>
          <Link to="/sylvan-retreat"><button className="project-button">Read More</button></Link>
        </div>
      </div>

      
    </div>
  );
}

export default OngoingProjects;