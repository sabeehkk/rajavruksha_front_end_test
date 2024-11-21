import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
// import ProjectSingle from '../../components/ProjectSingle'
import EcoNexts from "../../components/Projects/eco-nest"
import Testimonial from '../../components/testimonial'
import Footer from '../../components/footer'
import bg from "../../components/assets/careersedited.jpg";
import ContactUs from "../../components/Projects/contactform";
import Layoutguide from '../../components/layoutGuide/layoutguide'

function Econext() {
  return (
    <Fragment>
    <Header/>
    <PageTitle PageTitle={'Eco-nest'} pagesub={'Project Details'} pageImg={bg}/>
    <EcoNexts />
    <ContactUs />
    {/* <Testimonial/> */}
    <Layoutguide/>
    <Footer/>
    </Fragment>
  )
}

export default Econext