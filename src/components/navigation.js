import React from "react"
import { Menu } from 'antd';
import { Link } from "gatsby"
import 'antd/dist/antd.css';
import { Location } from '@reach/router'

export default() => {    
    return (
        <div>
            <Location>
            {({ location }) => {
                console.log(location.pathname + "/")
                return (
                <Menu mode="horizontal" theme="dark" style={style} selectedKeys={[location.pathname, location.pathname+"/"]}>
                    <Menu.Item key="/">
                    <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/about/">
                        <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="/contact">
                        <Link to="/contact">Contact</Link>
                    </Menu.Item>
                </Menu>)
            }}
            </Location>
        </div>
)}

const style = {
    margin: "0 !important",
    padding: "0 !important",
    backgroundColor: 'transparent',
    borderBottom: '1px white solid'
}