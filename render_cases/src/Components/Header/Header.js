import React from "react";
import { Nav } from "./StyleHeader";
class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Nav.Heading>Welcome to our shopping</Nav.Heading>
        <Nav.LangReg>
            <Nav.Select  >
                <Nav.Option>English (USD)</Nav.Option>
                <Nav.Option>Uzbek (Uzb)</Nav.Option>
            </Nav.Select>
            <Nav.ColumnLine> | </Nav.ColumnLine>
            <Nav.Login href=''>Login </Nav.Login>
            <Nav.Or>or</Nav.Or>
            <Nav.Signup href=''> Sign up</Nav.Signup>
        </Nav.LangReg>
      </Nav>
    );
  }
}
export default Navbar;
