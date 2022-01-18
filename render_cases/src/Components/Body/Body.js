import React, { Component } from "react";
import { B } from "./StyleBody";
import ChairMal from "../../Assets/Chairs/chairMal.svg";
import ChairG from "../../Assets/Chairs/chairG.svg";
import ChairYel from "../../Assets/Chairs/chairYel.svg";
class Body extends Component {
  render() {
    return (
      <B>
        <B.Container>
          <B.Title>TOP COLLECTIONS 2022</B.Title>
          <B.Heading>We Serve Your Dream Furniture</B.Heading>
          <B.Text>Get 50% off all products</B.Text>
          <B.ShopBtn>SHOP NOW</B.ShopBtn>
        </B.Container>
        <B.BasicChair />
        <B.WrapChairs>
          <B.ContChair>
            <B.ChairG src={ChairG} />
            <B.Price><B.$>$</B.$>120</B.Price>
            <B.Name>Office Desk Chair</B.Name>
          </B.ContChair>
          <B.ContChair>
            <B.ChairMal src={ChairMal} />
            <B.Price><B.$>$</B.$>180</B.Price>
            <B.Name>Home Alisa Sofa</B.Name>
            
          </B.ContChair>
          <B.ContChair>
            <B.ChairYel src={ChairYel} />
            <B.Price><B.$>$</B.$>250</B.Price>
            <B.Name>Modern Chair</B.Name>

          </B.ContChair>
        </B.WrapChairs>
      </B>
    );
  }
}
export default Body;
