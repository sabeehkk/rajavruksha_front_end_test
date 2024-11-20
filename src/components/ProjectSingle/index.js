import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../../img/project-details.jpg";
import Img2 from "../../img/plan.png";
import Img3 from "../../img/24-hours.png";
import Img4 from "../../img/group.png";
import Img5 from "../../img/best-price.png";
import Img6 from "../../img/bedroom.jpg";
import Img7 from "../../img/hallroom.jpg";
import Img8 from "../../img/kitchen.jpg";
import bg from "../../components/assets/editone.jpg";


import "./style.css";

const ProjectSingle = (props) => {
  console.log(props.projectImage)
  return (
    <section className="project-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-top">
              {/* <div className="project-details-top-img">
                <img src={bg} style={{height:'600px'}} alt="img" />
            </div> */}
            <div className="project-details-top-box">
              <h3>Project Details</h3>
              <div className="row">
                <div className="col-lg-6">
                  <div className="project-details-top-box-text">
                    <h5>Project</h5>
                      <p>Interior</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Location</h5>
                      <p>UAE</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Year</h5>
                      <p>2020</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-details-top-box-text">
                      <h5>Clients</h5>
                      <p>John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-details-top-text" >
              <h3>Discover Your Agricultural Dream:</h3>
              <p>
              Escape the hustle and bustle of city life and embark on a journey to a tranquil and fertile oasis. Introducing our exclusive collection of 25 farmland plots, each a canvas of opportunity for you to cultivate your agricultural aspirations.
              </p>
              <h3>Agricultural Canvas Ready for Your Vision</h3>

              <p>
              These 25 farmland plots offer an invitation to realize your agricultural dreams. Whether you dream of orchards, Apiculture, Organic farms, or a combination of them all, these plots are the ideal blank canvas to bring your vision to life. Let your imagination run wild and watch your agricultural dreams flourish.
              </p>
              <h3>Key Features:</h3>

      

            </div>
            {/* <div className="project-overview">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img2} alt="img" />
                    <h5>Project size</h5>
                    <p>5200 sq ft</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img3} alt="img" />
                    <h5>Project time</h5>
                    <p>62 Days</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img4} alt="img" />
                    <h5>People worked</h5>
                    <p>18</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="project-overview-box">
                    <img src={Img5} alt="img" />
                    <h5>Project cost</h5>
                    <p>4800$</p>
                  </div>
                </div>
              </div>
            </div> */}

            
            {/* <div className="project-details-type">
              <div className="row">
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img6} alt="img" />
                      <p>BEDROOM</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum'
                      </p>
                      <Link to="/">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img7} alt="img" />
                      <p>HALLROOM</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum'
                      </p>
                      <Link to="/">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="details-box">
                    <div className="project-box project-details-box">
                      <img src={Img8} alt="img" />
                      <p>KITCHEN</p>
                    </div>
                    <div className="project-details-box-meta-text">
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum'
                      </p>
                      <Link to="/">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSingle;
