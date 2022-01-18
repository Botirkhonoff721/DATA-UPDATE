import styled from "styled-components";
import { ReactComponent as MenuBar } from "../../Assets/menu 1.svg";
export const Nav = styled.div`
  width: 1440px;
  height: 67px;
  padding: 0 135px;
  background-color: rgba(247, 248, 250, 1);
  margin: 0 auto;
  display: flex;
`;

Nav.AllCol = styled.div`
  width: 260px;
  height: 67px;
  background-color: rgba(122, 199, 81, 1);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-right: 71px;
`;
Nav.MenuBar = styled(MenuBar)`
  margin: 0 20px 0 22px;
  cursor: pointer;
`;
Nav.Text = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #ffffff;
`;
Nav.List = styled.div`
  width: 506px;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
Nav.Item = styled.a`
  text-decoration: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #555555;
`;
