import React from "react"
import { Link } from "gatsby"
import { Icon, BackTop } from "antd"
import Navigation from "../components/navigation"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import "../styles/index.css"
import avatar from "../assets/avatar.jpg"

export default (props) => (
    <div>
        <BackTop />
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <div className="index">
            <Navigation/>
            <div className="index-title">
                <h1>Hi, I'm Ožbej. I design and build<br />websites &amp; mobile apps.</h1>
            </div>
            <div className="index-scroll">
                <p>Get to know me</p>
                <div>
                    <AnchorLink href="#description-header" >
                        <Icon type="down" className="down-desc" />
                    </AnchorLink>
                </div>
            </div>
        </div>
        <div className="description">
            <p id="description-header">I am a Computer Science student, enthusiastic and eager to learn new technologies.</p>
            <img className="avatar" src={ avatar } alt="Avatar" />
            <div className="desc">
                <div className="desc-text">
                    I started my Computer Science journey in 2014, when I enrolled in School of Electrical and Computer Engineering Velenje. 
                    I am currently studying Computer and Information science in Faculty of Computer and Information Science Ljubljana. 
                    In my free time I like to learn new relevant technologies, frameworks and programming languages. 
                    I am always ready to learn, confident, curious and working on improving my programming skills.
                    Find out more <Link to="/about">about me</Link>.
                </div>
            </div>
        </div>
    </div>
)
