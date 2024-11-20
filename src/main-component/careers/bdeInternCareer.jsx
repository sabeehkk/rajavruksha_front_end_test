import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Feature from '../../components/feature'
import Partners from '../../components/partners'
import Expertise from '../../components/expertise'
import CareersPage from '../../components/careers/careers.jsx'
import bg from "../../components/assets/bde_intern.jpg";
import JobCareer from "../../components/careers/jobCareer.jsx"
import Footer from '../../components/footer/index.js'
import CareerPage from '../../components/careers/careerPage.jsx'
import CareerForm from '../../components/careers/jobCareer.jsx'
import BdeInternCareer from '../../components/careers/bdeIntCareer.jsx'

const BdeInternCareerMain = () => {
    const intSubtitle = "Business Development Executive Intern"

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Career'} pagesub={'career'} pageImg={bg} intSubtitle={intSubtitle} />
            {/* <JobCareer/> */}
            <BdeInternCareer />
            <Footer />
            {/* <Partners/> */}
        </Fragment>
    )
}

export default BdeInternCareerMain;
