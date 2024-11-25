import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import ecoNext from "../../components/assets/ecoproject.jpg";
// import EconextProject from "../../components/assets/project_picture.jpg";
import SylRetreatImg from "../../components/assets/Sylvan_retreat_single_banner_img.jpg";
import EcoNestImg from "../../components/assets/eco-nest_pro_det_img.jpg";

import "./style.css";

const ProjectList = () => {
  const history = useHistory();
  // const handleProjectClick = (name, image) => {
  //   navigate('/projects-single', { state: { projectName: name, projectImage: image } });
  // };
  const handleProjectClick = (project) => {
    if (project === "Sylvan Retreat") {
      history.push("/sylvan-retreat");
    } else if (project === "Eco Nest") {
      history.push("/eco-nest");
    }
  };
  return (
    <section className="projects-area projects-page-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <p className="main-subtitle">PROJECTS</p>
                  <p className="main-title">Featured Work.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center project-box-container">
              <div className="col-md-5 col-sm-6 mt-5">
                <div
                  className="project-box"
                  onClick={() => handleProjectClick("Sylvan Retreat")}
                >
                  {/* <Link to="/projects-single"> */}
                  {/* <img src={ProjectImage} alt="img" style={{height:'600px'}}/> */}
                  {/* <img src={'https://img.freepik.com/free-photo/man-using-tablet-eco-friendly-wind-power-project-layout_23-2148847801.jpg?uid=R168516155&ga=GA1.1.1457800326.1726059840&semt=ais_hybrid'} alt="Sylvan Retreat" style={{ height: '600px' }} /> */}
                  <img
                    src={SylRetreatImg}
                    alt="img"
                    style={{
                      height: "600px",
                      width: "100%", // Ensures the image takes the full width of the card
                      objectFit: "cover", // Makes the image fit within the card without distortion
                      borderRadius: "8px", // Optional: Adds rounded corners for a polished look
                    }}
                  />
                  <h3 className="syl-retreat-title text-capitalize">
                    Sylvan Retreat
                    {/* <br /> IN PARIS */}
                  </h3>
                  <p>Nature's Beauty Celebration</p>
                  <div className="project-zoom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-eye"
                    >
                      <path
                        stroke="#ffffff"
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      />
                      <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                    </svg>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-md-5 col-sm-6 mb-5 project-box-div">
                <div
                  className="project-box"
                  onClick={() => handleProjectClick("Eco Nest", ecoNext)}
                >
                  <Link to="/projects-single">
                    {/* <img src={ecoNext} alt="img" /> */}
                    <img
                      src={EcoNestImg}
                      alt="img"
                      style={{
                        height: "600px",
                        width: "100%", // Ensures the image takes the full width of the card
                        objectFit: "cover", // Makes the image fit within the card without distortion
                        borderRadius: "8px", // Optional: Adds rounded corners for a polished look
                      }}
                    />
                    <h3>
                      Eco Nest
                      {/* <br /> IN BAHRAIN */}
                    </h3>
                    <p>Eco Acres </p>
                    <div className="project-zoom">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-eye"
                      >
                        <path
                          stroke="#ffffff"
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        />
                        <circle stroke="#ffffff" cx={12} cy={12} r={3} />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectList;
