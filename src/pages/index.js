import React from "react"
import { Link } from "gatsby"
import { Icon } from "antd"
import Navigation from "../components/navigation"

import "../styles/index.css"
import avatar from "../assets/avatar-blue.jpg"

require("smooth-scroll")('a[href*="#"]')
var ReactFitText = require('react-fittext');

export default () => (
    <div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <div className="index">
            <Navigation />
            <div className="index-title">
                <ReactFitText compressor={2} minFontSize="15">
                    <h1>Hi, I'm Ožbej. I design and build<br />websites and mobile apps.</h1>
                </ReactFitText>
            </div>
            <div className="index-scroll">
                <ReactFitText compressor={3} minFontSize="15">
                    <p>Get to know me</p>
                </ReactFitText>
                <div>
                    <Link to="/#description-header" style={{ color: "white", fontSize: "3vh" }} >
                        <Icon type="down" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="description">
            <ReactFitText compressor={5} minFontSize="15">
                <p id="description-header">I am a Computer Science student, enthusiastic and eager to learn new technologies.</p>
            </ReactFitText>
            <img className="avatar" src={ avatar } alt="Avatar" />
            <div className="desc">
                <ReactFitText compressor={5} minFontSize="10">
                    <div className="desc-text">
                        I started my Computer Science journey in 2014, when I enrolled in School of Electrical and Computer Engineering Velenje. 
                        I am currently studying Computer and Information science in Faculty of Computer and Information Science Ljubljana. 
                        In my free time I like to learn new relevant technologies, frameworks and programming languages. 
                        I am always ready to learn, confident, curious and working on improving my programming skills. 
                    </div>
                </ReactFitText>
            </div>
        </div>
    </div>
)
