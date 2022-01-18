import React, { Component } from "react";
import Header from "../Components/Header/Header";
import SubNavbar from "../Components/SubNavbar/SubNavbar";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import { Wrapper } from "./StyleMain";
class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <SubNavbar />
        <Navbar />
        <Hero />
      </Wrapper>
    );
  }
}
export default Main;
