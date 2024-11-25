

import React, {Fragment} from 'react'
import Header from '../../components/header' 
import PageTitle from '../../components/pagetitle'
import Sylvanretreat from "../../components/Projects/sylvanretreat"
import Footer from '../../components/footer'
import bg from "../../components/assets/SylanretreatBanner.jpg";
import ContactUs from "../../components/Projects/contactform"
import Carousel from "../../components/carouselImage/carousel"
import ContactForm from "../../components/ContactFrom"
function Sylvanretreats() {
  return (
    <Fragment>
    <Header/>
    <PageTitle PageTitle={'sylvan-Retreat'} pagesub={'Project Details'} pageImg={bg}/>
    <Sylvanretreat />
    <ContactUs/>
    {/* <ContactForm/> */}
    <Carousel/>
    <Footer/>
</Fragment>
  )
}

export default Sylvanretreats
