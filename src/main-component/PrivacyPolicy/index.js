import { Fragment } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import PrivacyPolicy from "../../components/PrivacyPolicy";

const MainPrivacyPolicy=()=>{
    return(
        <Fragment>
            <Header/>
            <PrivacyPolicy/>
            <Footer/>
            </Fragment>
    )
}

export default MainPrivacyPolicy;