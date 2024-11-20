import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Feature from '../../components/feature'
import Partners from '../../components/partners'
import Expertise from '../../components/expertise'
import CareersPage from '../../components/careers/careers.jsx'
import bg from "../../components/assets/careersedited.jpg";
import JobCareer from "../../components/careers/jobCareer.jsx"
import Footer from '../../components/footer/index.js'
import CareerPage from '../../components/careers/careerPage.jsx'

const Careers = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={'Career'} pagesub={'career'} pageImg={bg} />
      {/* <JobCareer/> */}
      <CareerPage />
      <Footer />
      {/* <Partners/> */}
    </Fragment>
  )
}

export default Careers
