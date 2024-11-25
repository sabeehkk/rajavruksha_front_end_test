import React from "react";
import { Link } from "react-router-dom";
// import bg from "../../components/assets/contactedited.jpg";
// import bg from "../../img/breadcrumb-bg.jpg";

import "./style.css";

const PageTitle = (props) => {
  return (
    <section
      className="breadcrumb-area"
      // style={{ backgroundImage: `url(${bg})` }}
      style={{
        backgroundImage: `url(${props.pageImg})`,
        backgroundSize: "cover",
      }}
    >
      {/* <div className="hero-social">
        <ul>
        <li>
              <Link
              to="#"
              onClick={() => window.open('https://wa.me/916366930174', '_blank')}
                >
            <i class="fab fa-whatsapp"></i>
            </Link>
            </li>
            <li>
              <Link
              to="#"
              onClick={() => window.open('https://www.youtube.com/@rajavruksharealtorspvtltd.', '_blank')}
                >
            <i class="fab fa-youtube"></i>
            </Link>
            </li>
            <li>
              <Link
              to="#"
              onClick={() => window.open('https://www.facebook.com/RajavruskhaRealtors', '_blank')}
                >
             <i className="fab fa-facebook-f" />
            </Link>
            </li>
            <li>
             
                <Link
              to="#"
              onClick={() => window.open('https://www.instagram.com/rajavruksha', '_blank')}
                >
              <i className="fab fa-instagram" />
            </Link>
            </li>
        </ul>
        <p>Follow Us</p>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              <h1>{props.PageTitle}</h1>
              <h1 className="syl-retreat-title text-capitalize">
                {props?.project_page_syl && props?.project_page_syl}
              </h1>
              <h2 className="subtitle">{props?.subtitle && props?.subtitle}</h2>
              <h2 className="subtitle">
                {props?.intSubtitle && props?.intSubtitle}
              </h2>
              {/* <ul>
                <li className="home">
                  <Link to="/">
                    <span className="fas fa-home" />
                  </Link>
                </li>
                <li>{props.pagesub}</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
