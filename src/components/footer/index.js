import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
  const handleLinkClick = (type, value) => {
    if (type === "email") {
      window.location.href = `mailto:${value}`;
    } else if (type === "phone") {
      window.location.href = `tel:${value}`;
    }
  };
  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <p id="footer-head">About</p>
                <p>
                  We guide you in selecting the best property
                  <br />
                  that aligns with your vision and goals
                </p>
                <div className="single-footer">
                  <p id="footer-connect">Connect With Us</p>

                  <div class="social">
                    <ul class="no-list">
                      <Link
                        onClick={() =>
                          window.open(
                            "https://www.youtube.com/@Rajavruksha_Realtors",
                            "_blank"
                          )
                        }
                        target="_blank"
                      >
                        <li class="youtube">
                          {" "}
                          <i class="fab fa-youtube"></i>
                        </li>
                      </Link>
                      <Link
                        onClick={() =>
                          window.open(
                            "https://www.facebook.com/RajavruskhaRealtors",
                            "_blank"
                          )
                        }
                        target="_blank"
                      >
                        <li class="facebook">
                          {" "}
                          <i class="fab fa-facebook"></i>
                        </li>
                      </Link>
                      <Link
                        onClick={() =>
                          window.open(
                            "https://www.instagram.com/rajavruksha",
                            "_blank"
                          )
                        }
                        target="_blank"
                      >
                        <li class="instagram">
                          {" "}
                          <i class="fab fa-instagram"></i>
                        </li>
                      </Link>
                      <Link
                        onClick={() =>
                          window.open("https://x.com/rajavruksha", "_blank")
                        }
                        target="_blank"
                      >
                        <li class="twitter">
                          {" "}
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                            style={{ border: "none" }}
                            alt="/skype"
                          />
                          {/* <i class="bi bi-twitter-x"></i> */}
                          {/* <i class="fab fa-twitter"></i> */}
                          {/* <i className="fa-brands fa-twitter"></i> */}
                          {/* <i className="fa-solid fa-x"></i> */}
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                {/* 
                <ul className="footer-contact ">
                  <p id="footer-head">Contact Details</p>
                  <li>
                    <i className="fas fa-phone-square-alt" /> +91 8549 955 955
                  </li>
                  <li>
                    <i className="fas fa-envelope" />{" "}
                    enquiry@rajavrukshagroup.in
                  </li>
                  <li>
                    <i className="fas fa-map" /> #35 A, Kowdi, 2nd Floor, 1st
                    Main Road, Chiranjeevi Layout, Hebbal Kempapura,
                    Bengaluru-560024
                  </li>
                </ul>
                 */}
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer">
                <p id="footer-head">Quick Links</p>
                <ul className="footer_carousel unordered-list">
                  <li className="unorderedlistlink">
                    <Link className="unorderedlistlink" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/privacyPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
              <div className="single-footer">
                <p id="footer-head">Office Timings</p>
                <ul>
                  <li>
                    <p>Wednesday to Monday :</p>
                  </li>
                  <li>
                    <p>09:30 am : 06:30 pm</p>
                  </li>
                  <li>
                    <p style={{ color: "white" }}>Weekly Off:</p>
                  </li>
                  <li>
                    <p>Tuesday</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <ul className="footer-contact">
                <p id="footer-head">Contact Details</p>
                <li
                  onClick={() => handleLinkClick("phone", "+91 8549 955 955")}
                  className="contact-link"
                >
                  <i className="fas fa-phone-square-alt" /> +91 8549 955 955
                </li>
                <li
                  onClick={() =>
                    handleLinkClick("email", "enquiry@rajavrukshagroup.in")
                  }
                  className="contact-link"
                >
                  <i className="fas fa-envelope" /> enquiry@rajavrukshagroup.in
                </li>
                <li>
                  <i className="fas fa-map" /> #35 A, Kowdi, 2nd Floor, 1st Main
                  Road, Chiranjeevi Layout, Hebbal Kempapura, Bengaluru-560024
                </li>
              </ul>
              {/* <div className="single-footer">
                <p id="footer-connect">Connect With Us</p>
              
                <div class="social">
                  <ul class="no-list">
                    <Link
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/@Rajavruksha_Realtors",
                          "_blank"
                        )
                      }
                      target="_blank"
                    >
                      <li class="youtube">
                        {" "}
                        <i class="fab fa-youtube"></i>
                      </li>
                    </Link>
                    <Link
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/RajavruskhaRealtors",
                          "_blank"
                        )
                      }
                      target="_blank"
                    >
                      <li class="facebook">
                        {" "}
                        <i class="fab fa-facebook"></i>
                      </li>
                    </Link>
                    <Link
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/rajavruksha",
                          "_blank"
                        )
                      }
                      target="_blank"
                    >
                      <li class="instagram">
                        {" "}
                        <i class="fab fa-instagram"></i>
                      </li>
                    </Link>
                    <Link
                      onClick={() =>
                        window.open("https://x.com/rajavruksha", "_blank")
                      }
                      target="_blank"
                    >
                      <li class="twitter">
                        {" "}
                        <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" style={{border:"none"}} alt="/skype"/>
                                                              </li>
                    </Link>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="foote-copyright">
                &copy; Copyright © 2024 Rajavruksha. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
