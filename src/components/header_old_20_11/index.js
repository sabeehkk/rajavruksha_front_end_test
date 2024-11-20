import React, { useEffect, useRef, useState } from "react";
import MobileMenu from "../../components/MobileMenu";
import { Link } from "react-router-dom";
import Logo from '../../components/assets/RRPL_Horizontal.png'
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
    <header className="header" style={{ paddingLeft: '20px' }}>
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
                      <Link to="/" >Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/projects">
                        Projects
                      </Link>
                      <ul>
                        {/* <li>
                          <Link to="/projects">Project</Link>
                        </li> */}
                        {/* <li>
                          <Link to="/projects-single">Project Details</Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <Link to="/">Career</Link>
                      <ul>
                        <li><Link to="bdeCareerForm">BDE</Link></li>
                        <li><Link to="bdeIntern">BDE Intern</Link></li>
                      </ul>
                    </li>
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        Service
                      </Link>
                      <ul>
                        <li className="bg-red-950">
                          <Link to="/service">Service</Link>
                        </li>
                        <li>
                          <Link to="/service-single">Service Details</Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        Pages
                      </Link>
                      <ul>
                        <li>
                          <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link to="/team">Team</Link>
                        </li>
                        <li>
                          <Link to="/faq">Faq</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/404">Error</Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        Blog
                      </Link>
                      <ul>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-single">Blog Details</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <div to="/contact" className="header-btn" style={{ marginRight: '20px' }}>

                  <Link
                    to="#"
                    onClick={() => window.open('https://wa.me/916366930174', '_blank')}
                  >
                    <i style={{ marginRight: '20px' }} class="fab fa-whatsapp"></i>
                  </Link>
                  <Link
                    to="#"
                    onClick={() => window.open('https://www.youtube.com/@Rajavruksha_Realtors', '_blank')}
                  >
                    <i style={{ marginRight: '20px' }} class="fab fa-youtube"></i>
                  </Link>
                  <Link
                    to="#"
                    onClick={() => window.open('https://www.facebook.com/RajavruskhaRealtors', '_blank')}
                  >
                    <i style={{ marginRight: '20px' }} className="fab fa-facebook-f" />
                  </Link>
                </div>
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
