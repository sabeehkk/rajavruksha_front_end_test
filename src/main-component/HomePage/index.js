import React, {Fragment} from 'react';
import Header from '../../components/header';
import Hero from '../../components/hero';
import About from '../../components/about';
import ServiceSection from '../../components/ServiceSection';
import Tour from '../../components/tour';
import Partners from '../../components/partners';
import ProjectSection from '../../components/ProjectSection';
import Testimonial from '../../components/testimonial';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Container from "../Status/status.jsx"
import OngoingProjects from '../../components/ourOnGoingProjects/ourOnGoingProjects.jsx';
import NewCarousel from '../../components/newCarousel/newCarousel.jsx';


const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero/>
            {/* <NewCarousel/> */}
            <Container/>
            <About text={''}/>
            {/* <NewOngoing/> */}
            <OngoingProjects/>
            <ServiceSection/>
            {/* <OngoingProjects/> */}
            {/* <Partners/> */}
            {/* <ProjectSection/> */}
            <Testimonial/>
            {/* <BlogSection/> */}
            <Footer/>
        </Fragment>
    )
};
export default HomePage;

