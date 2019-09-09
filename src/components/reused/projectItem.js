import '../../styles/projectItem.css';
import React, { Component } from 'react';

class ProjectItem extends Component{
    render(){
        return(
            <div className="projectContainer">
                <div className="projectAttributes">
                    <h1 className="projectTitle">{this.props.projectTitle}</h1>
                    <h1 className="projectDate">{this.props.projectDate}</h1>
                    <h1 className="projectTechnologies">{this.props.projectTechnologies}</h1>
                    <img className="projectImage" src={this.props.projectImage}/>
                    <h1 className="projectDescription">{this.props.projectDescription}</h1>
                </div>
                <div className="divisor">{this.props.divisor}</div>
            </div>
        );
    }
}

export default ProjectItem;