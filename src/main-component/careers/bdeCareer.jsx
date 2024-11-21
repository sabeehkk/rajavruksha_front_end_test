import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Feature from '../../components/feature'
import Partners from '../../components/partners'
import Expertise from '../../components/expertise'
import CareersPage from '../../components/careers/careers.jsx'
import bg from "../../components/assets/bde.jpg";
import JobCareer from "../../components/careers/jobCareer.jsx"
import Footer from '../../components/footer/index.js'
import CareerPage from '../../components/careers/careerPage.jsx'
import CareerForm from '../../components/careers/jobCareer.jsx'

const BdeCareerMain = () => {
    const subtitle = "Business Development Executive"
    return (
        <Fragment>
            <Header />
            <PageTitle PageTitle={'Career'} pagesub={'career'} subtitle={subtitle} pageImg={bg} />
            {/* <JobCareer/> */}
            <CareerForm />
            <Footer />
            {/* <Partners/> */}
        </Fragment>
    )
}

export default BdeCareerMain;
