

import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
// import ProjectSingle from '../../components/ProjectSingle'
import Sylvanretreat from "../../components/Projects/sylvanretreat"
import Testimonial from '../../components/testimonial'
import Footer from '../../components/footer'
import bg from "../../components/assets/careersedited.jpg";
import ContactUs from "../../components/Projects/contactform"
import Carousel from "../../components/carouselImage/carousel"
function Sylvanretreats() {
  return (
    <Fragment>
    <Header/>
    <PageTitle PageTitle={'sylvan-Retreat'} pagesub={'Project Details'} pageImg={bg}/>
    <Sylvanretreat />
    {/* <ContactForm/> */}
    <ContactUs/>
    <Carousel/>
    <Footer/>
</Fragment>
  )
}

export default Sylvanretreats
