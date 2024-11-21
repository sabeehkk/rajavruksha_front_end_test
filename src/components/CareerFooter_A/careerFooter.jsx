import React from "react";
import { Button, Card } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
const CareerFooter = () => {
  return (
    <div>
      <div className="careers-list">
        <div className="career-ind" style={{marginRight:"-40px"}}>
          <Link to="bdeCareerForm">
            <img src="https://t3.ftcdn.net/jpg/05/13/48/56/360_F_513485625_wWnxeNdkZ3SNStEfcCAzMhnEs4IGLDeG.jpg" alt="bde"/>
            <div className="bde-title">
              <p className="para-title">Business Development Executive</p>
            </div>
          </Link>
        </div>
        <div className="career-ind">
          <Link to="bdeIntern">
            <img src="https://t3.ftcdn.net/jpg/05/13/48/56/360_F_513485625_wWnxeNdkZ3SNStEfcCAzMhnEs4IGLDeG.jpg" alt="bdeInt"/>
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
