import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const PageTitle = (props) => {
  return (
    <section
      className="breadcrumb-area"
      style={{
        backgroundImage: `url(${props.pageImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              <h1>{props.PageTitle}</h1>
              <h2 className="subtitle">{props?.subtitle && props?.subtitle}</h2>
              <h2 className="subtitle">
                {props?.intSubtitle && props?.intSubtitle}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
