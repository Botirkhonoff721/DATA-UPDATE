import styled from "styled-components";

export const SideBar = styled.div`
  width: 260px;
  height: 454px;
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
`;

SideBar.Item = styled.h1`
  height: 42px;
  align-items: center;
  border-bottom: 1px solid gray;
  font-weight: normal;
  font-size: 14px;
  display: block;
  line-height: normal;
  letter-spacing: 0.02em;
  padding-left: 29px;
  padding-top: 14px;
  cursor: pointer;
   :hover{
       background-color: grey;
   }
`;
