import React from "react";
import { Button, Card } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import bdeImg from "../../components/assets/BdeImg.webp";
import bdeIntImg from "../../components/assets/bdeIntern.webp";

const CareerFooter = () => {
  const disableContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="careers-list">
        <div
          className="career-ind"
          style={{ marginRight: "-40px" }}
          onContextMenu={disableContextMenu}
        >
          <Link to="bdeCareerForm">
            <img src={bdeImg} alt="bde" />
            <div className="bde-title">
              <p className="para-title">Business Development Executive</p>
            </div>
          </Link>
        </div>
        <div className="career-ind" onContextMenu={disableContextMenu}>
          <Link to="bdeIntern">
            <img src={bdeIntImg} alt="bdeInt" />
            <div className="bde-title-intern">
              <p className="para-title">
                Business Development Executive Intern
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerFooter;
