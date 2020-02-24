import React from "react"
import { Link } from "gatsby"
import { Icon, Button, BackTop } from "antd"
import Navigation from "../components/navigation"

import "../styles/contact.css"

require("smooth-scroll")('a[href*="#"]')
var ReactFitText = require('react-fittext');

export default (props) => (
    <div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <BackTop />
        <div>
            <div className="contact-me">
                <Navigation />
                <p>Contact me</p>
            </div>
            <div className="technical-skills">
                
            </div>
        </div>
    </div>
    
)
