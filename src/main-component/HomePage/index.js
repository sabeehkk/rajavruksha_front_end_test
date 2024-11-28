import React, { Fragment } from "react";
import Header from "../../components/header";
import Hero from "../../components/hero";
import About from "../../components/about";
import ServiceSection from "../../components/ServiceSection";
import Testimonial from "../../components/testimonial";
import Footer from "../../components/footer";
import Container from "../Status/status.jsx";
import OngoingProjects from "../../components/ourOnGoingProjects/ourOnGoingProjects.jsx";
import NewCarousel from "../../components/newCarousel/newCarousel.jsx";

const HomePage = () => {
  let readMore = "read more";
  return (
    <Fragment>
      <Header />
      <Hero />
      <Container />
      <About text={""} readMore={readMore} />
      <OngoingProjects />
      <ServiceSection />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
