import profileImage from "../../resources/profileImage.png"
import React, { Component } from 'react';
import '../../styles/name.css';
import ScrambleText from "./scrambleText"

class Name extends Component {
    render() {
        return (
            <div className="nameContainer">
                <img className="profileImage" src={profileImage}/>
                <h1 className="welcomeText">{this.props.welcomeText}</h1>
                <ScrambleText phrases={['Hello & Welcome!', 'Schroders Technology Placement Student', 'Data Engineer', 'Computer Science Undergraduate', 'Key Skills:', 'Hadoop (HDFS, Hive, Spark, Ambari)', 'AWS (Glue, S3, EC2)', 'Python & Java', 'React JS', 'Docker']}/>
            </div>
        );
    }
}

export default Name;