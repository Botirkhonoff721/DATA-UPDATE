import React, { Component } from "react";
import { SN } from "./StyleSubNav";

class SubNavbar extends Component {
  render() {
    return (
      <SN>
        <SN.LogoPart>
          <SN.LogoIcon />
          <SN.LogoText>Furniking</SN.LogoText>
        </SN.LogoPart>
        <SN.InputPart>
          <SN.Input placeholder="Search here" />
          <SN.Select>
            <SN.Option>Categories</SN.Option>
            <SN.Option>New</SN.Option>
            <SN.Option>Luxurios</SN.Option>
          </SN.Select>
            <SN.SearchIcon />
        </SN.InputPart>
         <SN.RightPart>
             <SN.Bag/>
             <SN.Bang/>
             <SN.Avatar/>
         </SN.RightPart>
      </SN>
    );
  }
}
export default SubNavbar;
