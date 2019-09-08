import Navigation from '../reused/nav';
import ProjectItem from '../reused/projectItem'
import React, { Component } from 'react';
import personalSite from "../../resources/personalSite.png"

class Projects extends Component{
    render(){
        return (
            <Navigation>
                <ProjectItem projectTitle={"Personal Website"}
                             projectTechnologies={"Technology Used: React JS"}
                             projectDate={"September, 2019"}
                             projectImage={personalSite}
                             projectDescription={"My first React JS application! Hosted using GitHub Pages."}/>
                {/*<ProjectItem projectTitle={"SourceSearch"}*/}
                             {/*projectTechnologies={"Technology Used: Bash, Python (Flask), JavaScript"}*/}
                             {/*projectDate={"February, 2019"}*/}
                             {/*projectImage={personalSite}*/}
                             {/*projectDescription={"A means to search all repositories on a GitLab (community) instance."}/>*/}
            </Navigation>
        );
    }
}

export default Projects;