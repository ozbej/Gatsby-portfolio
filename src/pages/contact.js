import React from "react"
import { BackTop, Button, Icon } from "antd"
import Navigation from "../components/navigation"

import "../styles/contact.css"

export default (props) => (
    <div>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <BackTop />
        <div>
            <div className="contact-me">
                <Navigation />
                <p>Contact me</p>
            </div>
            <div className="contact-me-form">
                <form method="post" action="https://getform.io/f/3f0ddd53-68c5-4e52-a833-859ae312f129" className="form">
                    <div className="form-field">
                        <p>Name</p>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="form-field">
                        <p>Email</p>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="form-field">
                        <p>Message</p>
                        <textarea name="message" id="message" rows="5" required />
                    </div>
                    <div className="form-buttons">
                        <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                            Send
                        </Button>
                        <Button type="primary" size="large" htmlType="reset" className="login-form-button" style={{backgroundColor: "#f53838", borderColor: "#f53838"}}>
                            Clear
                        </Button>
                    </div>
                </form>
            </div>
            <div className="contact-footer">
                <h1>Contact me on my social media</h1>
                <div className="social-media">
                    <a href="https://github.com/ozbej"><Icon type="github" /></a>
                    <a href="https://www.linkedin.com/in/o%C5%BEbej-golob-6b29bb16a/"><Icon type="linkedin" /></a>
                    <a href="https://www.instagram.com/ozbejgolob/"><Icon type="instagram" /></a>
                    <a href="https://www.facebook.com/ozbej.golob"><Icon type="facebook" /></a>
                </div>
            </div>
        </div>
    </div>
    
)
