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
                      <ul></ul>
                    </li>
                    <li>
                      <Link to="/careers">Career</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <div className="social-icons">
                  <Link
                    to="#"
                    className="youtube"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@Rajavruksha_Realtors",
                        "_blank"
                      )
                    }
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link
                    to="#"
                    className="facebook"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/RajavruskhaRealtors",
                        "_blank"
                      )
                    }
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    to="#"
                    className="instagram"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/rajavruksha_realtors/",
                        "_blank"
                      )
                    }
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    onClick={() =>
                      window.open("https://x.com/Rajavrukshagrps", "_blank")
                    }
                    target="_blank"
                  >
                    <li class="twitter">
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                        style={{ border: "none", width: "24px" }}
                        alt="/skype"
                      />
                      {/* <i class="bi bi-twitter-x"></i> */}
                      {/* <i class="fab fa-twitter"></i> */}
                      {/* <i className="fa-brands fa-twitter"></i> */}
                      {/* <i className="fa-solid fa-x"></i> */}
                    </li>
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
