import React from "react"
import { Menu } from 'antd';
import { Link } from "gatsby"
import 'antd/dist/antd.css';

export default() => (
    <Menu mode="horizontal" theme="dark" style={style} selectedKeys={["home"]} >
        <Menu.Item key="home">
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
            <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="contact">
            <Link to="/contact">Contact me</Link>
        </Menu.Item>
    </Menu>
)

const style = {
    margin: "0 !important",
    padding: "0 !important",
    backgroundColor: 'transparent',
    borderBottom: '1px white solid'
}