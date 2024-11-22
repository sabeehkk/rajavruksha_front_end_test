import React from "react";

import { Fragment } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CareerFooter from "../../components/CareerFooter/careerFooter";
import PageTitle from "../../components/pagetitle";
import bg from "../../components/assets/careersedited.jpg";

const CareerMainFooterComp = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle PageTitle={"Current Openings"} pageImg={bg} />
      <CareerFooter />
      <Footer />
    </Fragment>
  );
};

export default CareerMainFooterComp;
