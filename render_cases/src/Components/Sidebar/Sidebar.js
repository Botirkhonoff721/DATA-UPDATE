import React, { Component } from "react";
import { SideBar } from "../Sidebar/StyleSidebar";
import { data } from "../../data";
class Sidebar extends Component {
  render() {
    return (
      <SideBar>
        {data.map(({ id, title }) => {
          return <SideBar.Item>{title}</SideBar.Item>;
        })}
      </SideBar>
    );
  }
}
export default Sidebar;
