import React, { Fragment } from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import bg from "../../components/assets/bde_intern.webp";
import Footer from '../../components/footer/index.js'
import BdeInternCareer from '../../components/careers/bdeIntCareer.jsx'

const BdeInternCareerMain = () => {
    const intSubtitle = "Business Development Executive Intern"
    return (
        <Fragment>
            <Header />
            <PageTitle PageTitle={'Career'} pagesub={'career'} pageImg={bg} intSubtitle={intSubtitle} />
            <BdeInternCareer />
            <Footer />
        </Fragment>
    )
}

export default BdeInternCareerMain;
