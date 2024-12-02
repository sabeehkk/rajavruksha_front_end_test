import React, { useEffect, useRef, useState } from "react";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";
import Logo from "../../components/assets/RRPL_Horizontal.png";
import "./style.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header" style={{ paddingLeft: "20px" }}>
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                      <ul>
                      <li>
                          <Link to="/sylvan-retreat">Sylvan-Retreat</Link>
                        </li> 
                        <li>
                          <Link to="/eco-nest">Eco-nest</Link>
                        </li> 
                      </ul>
                    </li>
                    <li>
                      <Link to="/careers">Career</Link>
                      <ul>
                        <li>
                          <Link to="/bdeCareerForm">BDE</Link>
                        </li> 
                        <li>
                          <Link to="/bdeIntern">BDE Intern</Link>
                        </li> 
                      
                      </ul>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="site">
            </div>

            <div class="wrapper">
            <Link onClick={() => window.open("https://www.facebook.com/RajavruskhaRealtors", "_blank")}><div class="bg-ico" id="facebook"><i class="fab fa-facebook social  facebook fa-3x"></i></div></Link>
            {/* <a href="#"><div class="bg-ico" id="pinterest"><i class="fab fa-pinterest social  pinterest fa-3x"></i></div></a> */}
            {/* <a href="#"><div class="bg-ico" id="twitter"><i class="fab fa-twitter social  twitter fa-3x"></i></div></a> */}
            <Link onClick={() => window.open("https://www.instagram.com/rajavruksha_realtors/", "_blank")}><div class="bg-ico" id="instagram"><i class="fab fa-instagram social  instagram fa-3x"></i></div></Link>
            <Link onClick={() =>
                 window.open("https://x.com/Rajavrukshagrps", "_blank")
               }
               target="_blank">
              <div class="bg-ico" id="twitter">
                <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="X Logo" class="social x-logo" />
              </div>
            </Link>
            {/* <a href="#"><div class="bg-ico" id="whatsapp"><i class="fab fa-whatsapp social  whatsapp fa-3x"></i></div></a> */}
            <Link onClick={() => window.open("https://www.youtube.com/@Rajavruksha_Realtors", "_blank")}><div class="bg-ico" id="youtube"><i class="fab fa-youtube social  youtube fa-3x"></i></div></Link>
            </div>

              <div
                id="search-overlay"
                className={`block ${show ? "show" : ""}`}
              >
                <div className="centered">
                  <div id="search-box">
                    <i
                      id="close-btn"
                      onClick={() => setShow(false)}
                      className="fa fa-times fa-2x"
                    ></i>
                    <form id="search-form" onSubmit={SubmitHandler}>
                      <input
                        id="search-text"
                        name="q"
                        placeholder="Type here..."
                        type="text"
                      />
                      <button id="search-button" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
