import React from "react"
import { Link } from "gatsby"
import { Icon, Button, BackTop } from "antd"
import Navigation from "../components/navigation"

import "../styles/about.css"

require("smooth-scroll")('a[href*="#"]')
var ReactFitText = require('react-fittext');

export default (props) => (
    <div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <BackTop />
        <div className="about-me">
            <div className="about">
                <Navigation />
                <p>Technical skills</p>
            </div>
            <div className="technical-skills">
                <div className="skill">
                    <Icon type="solution" className="skill-icon"/>
                    <h2>Designer</h2>
                    <h3>Things I enjoy designing:</h3>
                    <p>User Interfaces</p>
                    <p>Web Apps</p>
                    <p>Mobile Apps</p>
                    <p>Logos, posters, cards</p>
                    <h3>Design tools:</h3>
                    <p>Adobe Photoshop</p>
                    <p>Adobe Illustrator</p>
                    <p>Adobe Premiere</p>
                </div>
                <div className="skill">
                    <Icon type="desktop" className="skill-icon" />
                    <h2>Web &amp; Mobile Developer</h2>
                    <h3>Front-end:</h3>
                    <p>HTML &amp; CSS</p>
                    <p>JavaScript</p>
                    <p>React &amp; Angular</p>
                    <h3>Back-end:</h3>
                    <p>PHP</p>
                    <p>MySQL &amp; NoSQL</p>
                    <h3>Mobile:</h3>
                    <p>React Native</p>
                    <p>Android Studio</p>
                </div>
                <div className="skill">
                    <Icon type="code" className="skill-icon" />
                    <h2>Software Developer</h2>
                    <h3>Languages I speak:</h3>
                    <p>Java</p>
                    <p>Python</p>
                    <p>C++</p>
                    <p>C#</p>
                </div>
            </div>
            <div class="scroll-projects">
                <h1>Learn about my projects</h1>
                <Link to="/about/#projects-header" >
                    <Icon type="down" className="down-projects" />
                </Link>
            </div>
        </div>
        <div className="projects">
            <div className="projects-headings">
                <h1 id="projects-header">Projects</h1>
                <h2>Here are a few of my recent projects. Want to see more? <a href="mailto:ozbej.golob@gmail.com">Email me.</a></h2>
            </div>
            <div className="project-box">
                <div className="project">
                    <p>Technology: Angular</p>
                    <p>My previous portfolio page which sums up my CV in a form of a website.</p>
                    <Button type="primary" shape="round" size="large" href="https://portfolio-angular-ozbej.herokuapp.com/" className="link-button">
                        Visit website<Icon type="right" />
                    </Button>
                </div>
                <div className="project">
                    <p>Technology: Ruby on Rails</p>
                    <p>A simble real estate website with authentication, authorization and comment system.</p>
                    <Button type="primary" shape="round" size="large" href="https://nepremicnine-app.herokuapp.com/" className="link-button">
                        Visit website<Icon type="right" />
                    </Button>
                </div>
                <div className="project">
                    <p>Technology: React Native</p>
                    <p>Mobile app for personalized gift searching for iOS and Android.</p>
                    <Button type="primary" shape="round" size="large" href="https://github.com/gallindic/Gift-Buddy" className="link-button">
                        Visit Github<Icon type="right" />
                    </Button>      
                </div>
            </div>
            <div className="more-projects">
                <Button type="primary" shape="round" size="large" href="https://github.com/ozbej" className="github-button">
                    <Icon type="github" />See more on Github
                </Button>      
            </div>
        </div>
    </div>
    
)
