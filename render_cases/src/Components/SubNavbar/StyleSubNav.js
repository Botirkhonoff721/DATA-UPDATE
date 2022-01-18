import styled from "styled-components";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { ReactComponent as Search } from "../../Assets/search.svg";
import { ReactComponent as Avatar } from "../../Assets/avatar.svg";
import { ReactComponent as Bag } from "../../Assets/icon shop.svg";
import { ReactComponent as Bang } from "../../Assets/notificationIcon.svg";

export const SN = styled.div`
  width: 1440px;
  padding: 0 135px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 21px;
  margin-bottom: 25px;
  box-sizing: border-box;
`;

SN.LogoPart = styled.div`
  width: 145px;
  height: 40px;
  display: flex;
  align-items: center;
`;

SN.LogoIcon = styled(Logo)`
  width: 31px;
  height: 38px;
  display: block;
  margin: 0;
`;
SN.LogoText = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
  margin-left: 5.21px;
`;
SN.InputPart = styled.div`
  margin-left: 119px;
  margin-right: 201px;
  width: 582px;
  height: 46px;
  border: 2px solid #7ac751;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;
SN.Input = styled.input`
  width: 404px;
  height: 100%;
  border: 0px solid red;
  outline: none;
  border-right: 1px solid gray;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  padding-left: 23px;
  color: rgba(176, 176, 176, 1);
`;

SN.Select = styled.select`
  border: none;
  outline: none;
  width: 123px;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
SN.Option = styled.option`
  background-color: rgba(122, 199, 81, 1) ;
`;

SN.SearchIcon = styled(Search)`
  background-color: rgba(122, 199, 81, 1);
  margin-left: auto;
  width: 50px;
  height: 45px;
  padding: 16px;
  box-sizing: border-box;
  display: block;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;

SN.RightPart = styled.div`
  width: 200px;
  height: 46px;
  display: flex;
  column-gap: 21px;
  align-items: center;
`;

SN.Avatar = styled(Avatar)`
  cursor: pointer;
   `;
SN.Bag = styled(Bag)`
  cursor: pointer;

`;
SN.Bang = styled(Bang)`
  cursor: pointer;
`;
