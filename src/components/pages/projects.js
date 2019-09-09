import Navigation from '../reused/nav';
import ProjectItem from '../reused/projectItem'
import React, { Component } from 'react';
import personalSite from "../../resources/personalSite.png"
import sourceSearch from "../../resources/sourceSearch.png"
import langtonsAnts from "../../resources/langtonsAnt.png"

const websiteDescription = <text>
                                The website that you are viewing - built entirely in React!
                                I wanted to learn React JS after hearing many favourable reviews about the library.
                                Additionally, I needed to replace my previous website which had been built using PHP,
                                admittedly an odd choice for a front-end site. The site is hosted freely using
                                <a className={"hyperlink"}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   href={'https://pages.github.com/'}> GitHub Pages
                                </a>.
                            </text>;

const sourceSearchDescription = <text>A means to search all of your GitLab Community Edition repositories for source code snippets, at once.
                                      This is typically a GitLab Enterprise feature - but why pay when you can just make your own!
                                </text>;

const langtonsAnt = <text>
                        'Langton's Ants' is a
                        <a className={"hyperlink"}
                           target="_blank"
                           rel="noopener noreferrer"
                           href={'https://en.wikipedia.org/wiki/Cellular_automaton'}> cellular automaton </a>
                        - a model containing a grid of cells with set states and a universe of basic rules. Left to run, they create complex and interesting patterns.<br></br><br></br>
                        Rules: <br></br>
                        - An ant can be spawned in any one of these grids on the world. <br></br>
                        - Grid positions are either on or off (1 or 0) in the array. <br></br>
                        - At a 0 turn 90° right, change the grid to a 1 and move forward 1 position. <br></br>
                        - At a 1 turn 90° left, change the grid to a 1 and move forward 1 position. <br></br><br></br>
                        I tweaked the automaton so that each ant spawns with a random colour, making the created patterns much more interesting.
                        <br></br><br></br>
                        <a className={"hyperlink"}
                           target="_blank"
                           rel="noopener noreferrer"
                           href={'https://en.wikipedia.org/wiki/Langton%27s_ant'}>If you are interested here's some further reading!
                        </a>
                        <br></br><br></br>
                        Many thanks to Hopson for
                        <a className={"hyperlink"}
                           target="_blank"
                           rel="noopener noreferrer"
                           href={'https://www.youtube.com/watch?v=HGa5u6I-8Qg'}> this video</a>
                        , which sparked my interest in cellular automaton.
                    </text>;

class Projects extends Component{
    render(){
        return (
            <Navigation>
                <ProjectItem
                    projectTitle={"Personal Website"}
                    projectTechnologies={"Technology Used: React JS"}
                    projectDate={"September, 2019"}
                    projectImage={personalSite}
                    projectDescription={websiteDescription}
                    divisor={<text>─────────────────────────────────────────────</text>}
                />
                <ProjectItem
                    projectTitle={"SourceSearch"}
                    projectTechnologies={"Technologies Used: Bash, Python (Flask, Requests), JavaScript"}
                    projectDate={"January / February, 2019"}
                    projectImage={sourceSearch}
                    projectDescription={sourceSearchDescription}
                    divisor={<text>─────────────────────────────────────────────</text>}
                />
                <ProjectItem
                    projectTitle={"Langton's Ants"}
                    projectTechnologies={"Technologies Used: Python, Pygame"}
                    projectDate={"May, 2018"}
                    projectImage={langtonsAnts}
                    projectDescription={langtonsAnt}
                />
            </Navigation>
        );
    }
}

export default Projects;