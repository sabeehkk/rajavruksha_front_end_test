import React from "react";
import CountUp from "react-countup";

import bg from "../../img/about-bg.png";
import img1 from "../../img/about-1.png";
import img2 from "../../img/about-2.png";
import signature from "../../img/signature.png";
import backgroundImage from "../../components/assets/—Pngtree—background white_1281315.png";
import first from "../../components/assets/slidingpic.jpg";
import second from "../../components/assets/windmill.jpg";
// import second from "../../components/assets/slidehome.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const About = ({ text }) => {
  return (
    <div
      className="about-area"
      style={{
        backgroundImage: `url(${"https://byasi-react.themescare.com/static/media/about-bg.bedc79f5.png"})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div
              className="about-left"
              data-aos="fade-right"
              data-aos-offset="100"
            >
              <div className="site-heading">
                {/* <h3 className="sub-title">ABOUT US</h3> */}
                <h2 className="explore-title">
                  We explore to discover your optimal selection
                </h2>
                <div>
                  <p>{text}</p>
                </div>
              </div>

              <div
                className="content"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="features-list-wrapper">
                  <ul className="features-list">
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />{" "}
                      Innovative Concepts
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />
                      Value For Money Projects
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />{" "}
                      Expert Team Members
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />{" "}
                      Affordable Quality Services
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="check-icon"
                        icon={faCircleCheck}
                      />{" "}
                      Hassle Free Process
                    </li>
                  </ul>
                  <div className="mobile-read-more-wrapper">
                    <button className="read-more-button">READ MORE</button>
                  </div>
                </div>
                <div className="experience-box">
                  <h2 className="experience-years">
                    <span className="counter">
                      <CountUp start={0} end={6} duration={2} />+
                    </span>
                  </h2>
                  <p className="experience-text">
                    Years of <br /> experience
                  </p>
                </div>
              </div>
              {/* <button className="read-more-button">READ MORE</button> */}
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter"></div>
            <div
              className="about-right"
              data-aos="fade-left"
              data-aos-offset="100"
            >
              {/* <img className="about_img_1" src={first} alt="img" /> */}
              {/* <img
                className="about_img_1"
                style={{ filter: "brightness(60%)" }}
                src={first}
                alt="img"
              /> */}
              <img
                className="about_img_2"
                src={
                  "https://byasi-react.themescare.com/static/media/about-1.e32a7109.png"
                }
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
