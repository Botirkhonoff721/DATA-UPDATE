import styled from "styled-components";

export const Nav = styled.div`
  max-width: 1440px;
  height: 50px;
  background-color: rgba(122, 199, 81, 1);
  display: flex;
  justify-content: space-between;
  padding: 0 135px;
  align-items: center;
  margin-bottom: 21px;
  margin: 0 auto;
`;

Nav.Heading = styled.h3`
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-right: 600px;
`;

Nav.LangReg = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Nav.Select = styled.select`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  background-color:transparent ;
  border: none;
  outline: none;
  color: #fff;
`;

Nav.Option = styled.option`
    color: #fff;
    background-color:  rgba(122, 199, 81, 1);
`;
Nav.ColumnLine = styled.p`
   color: #fff;
   width: 2.2px;
   height: 19px;
   margin: 0 20px;
   padding: 0;
   border-radius: 0.4px;
`;

Nav.Login = styled.a`
  color:#fff;
  text-decoration: none ;


`;
Nav.Signup = styled.a`
  color: #fff;
  text-decoration: none ;
`;
Nav.Or = styled.p`
  color: #fff;
  margin: 0 5px;
`;
