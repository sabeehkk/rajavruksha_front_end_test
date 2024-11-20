import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProjectList from '../../components/ProjectList'
import Footer from '../../components/footer'
import bg from "../../components/assets/editedprojectpic.jpg";


const ProjectPage =() => {

    return(
        <Fragment>
            <Header/> 
            <PageTitle pageTitle={'PROJECTS'} pagesub={'Projects'} pageImg={bg}/>
            <ProjectList/>
            <Footer/>
        </Fragment>
    )
};
export default ProjectPage;

