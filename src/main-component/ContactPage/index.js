import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
// import bg from "../../components/assets/contactedited.jpg";
import bg from "../../components/assets/customer_support.jpg";



const ContactPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle PageTitle={'CONTACT'} pagesub={'Contact'} pageImg={bg}/> 
            <Contactpage/>
            <Footer/>
        </Fragment>
    )
};
export default ContactPage;

