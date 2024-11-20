import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
  const NewsletterHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">

              <div className="single-footer">
                <h3>About</h3>
                <p>
                  We guide you in selecting the best property
                  <br />that aligns with your vision and goals
                </p>
                <ul className="footer-contact ">
                  <h3>Contact Details</h3>
                  <li>
                    <i className="fas fa-phone-square-alt" /> +91 8549 955 955
                  </li>
                  <li>
                    <i className="fas fa-envelope" /> enquiry@rajavrukshagroup.in
                  </li>
                  <li>
                    <i className="fas fa-map" /> #35 A, Kowdi, 2nd Floor, 1st Main Road, Chiranjeevi Layout, Hebbal Kempapura, Bengaluru-560024
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer">
                <h3>Qucik Links</h3>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/projects">Our Projects</Link>
                  </li>
                  {/* <li>
                    <Link to="/">Our Services</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/">Meet The Team</Link>
                  </li> */}
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
              <div className="single-footer">
                <h3>Office Timings</h3>
                <ul>
                  <li>
                    <p >Wednesday to Monday :</p>
                  </li>
                  <li>
                    <p >09:30 am : 06:30 pm</p>
                  </li>
                  <li>
                    <p style={{ color: 'white' }}>Weekly Off:</p>
                  </li>
                  <li>
                    <p >Tuesday</p>
                  </li>
                  <li>
                    <Link to="/">Terms & Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <div className="single-footer">
                <h3>Newsletter</h3>
                <p>Sign up now for weekly news & updates.</p>
                <div className="newsletter_form">
                  <form onSubmit={NewsletterHandler}>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fas fa-long-arrow-alt-right" />
                    </button>
                  </form>
                </div>
               

                	<div  style={{paddingTop:'30px'}} class="social">
              <ul class="no-list">
                 
        <Link  onClick={() => window.open('https://www.youtube.com/@Rajavruksha_Realtors', '_blank')} target="_blank">
            <li class="youtube"> <i class="fab fa-youtube"></i></li>
        </Link>
        <Link  onClick={() => window.open('https://www.facebook.com/RajavruskhaRealtors', '_blank')} target="_blank">
            <li class="facebook"> <i class="fab fa-facebook"></i></li>
        </Link>
        <Link  onClick={() =>  window.open('https://www.instagram.com/rajavruksha', '_blank')} target="_blank">
            <li class="instagram"> <i class="fab fa-instagram"></i></li>
        </Link>
        <Link   onClick={() => window.open('https://x.com/rajavruksha', '_blank')} target="_blank">
            <li class="twitter"> <i class="fab fa-twitter"></i></li>
        </Link>
     
    </ul>
</div>
              </div>
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
              <p className="foote-copyright">&copy; Copyright © 2024 Rajavruksha. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;