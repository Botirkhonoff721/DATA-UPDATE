import React, { Component } from 'react'
import { Nav } from './StyleNavbar'
class Navbar extends Component {
    render() {
        return (
            <Nav>
                <Nav.AllCol>
                    <Nav.MenuBar></Nav.MenuBar>
                    <Nav.Text>ALL COLLECTIONS</Nav.Text>
                </Nav.AllCol>
                <Nav.List>
                  <Nav.Item href=''>HOME</Nav.Item>
                  <Nav.Item href=''>SHOP</Nav.Item>
                  <Nav.Item href=''>BLOG</Nav.Item>
                  <Nav.Item href=''>ABOUT</Nav.Item>
                  <Nav.Item href=''>CONTACT US</Nav.Item>

                </Nav.List>
            </Nav>
        )
    }
}
export default Navbar