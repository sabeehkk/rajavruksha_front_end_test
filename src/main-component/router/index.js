import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ProjectPage from "../ProjectPage";
import ProjectSinglePage from "../ProjectSinglePage";
import ServicePage from "../ServicePage";
import ServiceSinglePage from "../ServiceSinglePage";
import PortfolioPage from "../PortfolioPage";
import TeamPage from "../TeamPage";
import FaqPage from "../FaqPage";
import ContactPage from "../ContactPage";
import ErrorPage from "../ErrorPage";
import BlogPage from "../BlogPage";
import BlogSinglePage from "../BlogSinglePage";
import ExperienceSection from "../../components/demo/experienceSection.jsx";
import SylvanRetreat from "../../main-component/projects/sylvanretreat";
import Econest from "../projects/eco-nest";
import JourneySection from "../../components/reactIcons/journeySection.jsx";
import Status from "../Status/status.jsx";
import Amenities from "../../components/Amenities/amenities.jsx";
import BdeCareerMain from "../careers/bdeCareer.jsx";
import BdeInternCareerMain from "../careers/bdeInternCareer.jsx";
import ScrollToTop from "../../utils/utils.js";
import MainPrivacyPolicy from "../PrivacyPolicy/index.js";
import CareerMainFooterComp from "../CareerMainFooter/index.js";

const AllRoute = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/projects-single" component={ProjectSinglePage} />
          <Route path="/service" component={ServicePage} />
          <Route path="/service-single" component={ServiceSinglePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/404" component={ErrorPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog-single" component={BlogSinglePage} />
          <Route path="/experienceSection" component={ExperienceSection} />
          <Route path="/careers" component={CareerMainFooterComp} />
          <Route path="/bdeCareerForm" component={BdeCareerMain} />
          <Route path="/bdeIntern" component={BdeInternCareerMain} />
          <Route path="/sylvan-retreat" component={SylvanRetreat} />
          <Route path="/eco-nest" component={Econest} />
          <Route path="/journeySection" component={JourneySection} />
          <Route path="/status" component={Status} />
          <Route path="/amenities" component={Amenities} />
          <Route path="/privacyPolicy" component={MainPrivacyPolicy} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;
