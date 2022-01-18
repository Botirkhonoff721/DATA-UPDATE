import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Wrapper } from "./StyleHero";
import Body from "../Body/Body";
class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Body />
      </Wrapper>
    );
  }
}
export default Hero;
