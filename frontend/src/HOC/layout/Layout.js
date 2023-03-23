import React from "react";
import styled from "styled-components";

import HeaderTheme from "../../components/HeaderTheme/HeaderTheme";
import FooterTheme from "../../components/FooterTheme/FooterTheme";
import SideMenu from "../../components/SideMenu/SideMenu";
const Content = styled.div`
  padding: 22px;
  width: 1413px;
  height: 818px; ;
`;
export default function Layout({children}) {
  return (
    <div>
      <HeaderTheme />
      <div style={{display: "flex", flexDirection: "row"}}>
        <SideMenu />
        <Content>{children}</Content>
      </div>
      <FooterTheme className="bg-black" />
    </div>
  );
}
