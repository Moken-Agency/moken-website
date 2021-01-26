import React, { useState } from "react";
import MenuItem from "./components/MenuItem";
import "./index.scss";
import Burger from "./components/Burger";
import headerOptions from "./header-options";
import { useHistory } from "react-router-dom";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import Logo from "../Logo";

const {
  leftMenu,
  rightMenu,
  mainMenu,
  mainMenuTextStyles,
  topMenuTextStyles,
} = headerOptions;

const Header = ({ isOpen, setIsOpen }) => {
  let history = useHistory();
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"header-container"}>
      <div className={"bar-container"}>
        <div className={"menu-container"}>
          {leftMenu.map(({ title, withDivider, route, link }, index) => {
            return (
              <MenuItem
                key={"leftMenu" + index}
                title={title}
                withDivider={withDivider}
                textStyles={topMenuTextStyles}
                route={route}
                link={link}
                size={".61vw"}
              />
            );
          })}
        </div>
        <div className={"menu-container"}>
          {rightMenu.map(({ title, withDivider }, index) => {
            return (
              <MenuItem
                key={"right menu" + index}
                title={title}
                withDivider={withDivider}
                textStyles={topMenuTextStyles}
                size={".61vw"}
              />
            );
          })}
        </div>
      </div>
      <div
        className={"bar-container"}
        style={{ padding: isMobile ? "1vw 6.6vw" : "0 6.6vw" }}
      >
          {/*<div style={{display: 'flex', alignItems: 'flex-end'}}>*/}
          {/*    <img*/}
          {/*        src={Logo}*/}
          {/*        className={"logo"}*/}
          {/*        onClick={() => history.push("/")}*/}
          {/*    />*/}
          {/*    <div style={{width: '.6vw', height: '.6vw', borderRadius: '.6vw', marginLeft: '.2vw', backgroundColor: 'red'}}/>*/}
          {/*</div>*/}
          <Logo />
        <div style={{ display: "flex" }}>
          <div className={"menu-container"}>
            {mainMenu.map(({ title, subRouts = [], dividerColor }, index) => {
              return (
                <MenuItem
                  key={"main menu" + index}
                  title={title}
                  textStyles={mainMenuTextStyles}
                  containerStyles={{ marginRight: "2.2vw", height: "4.7vw" }}
                  subRouts={subRouts}
                  dividerColor={dividerColor}
                  className={"bar-with-menu-dropdown"}
                  size={".8vw"}
                />
              );
            })}
          </div>
          {/*<Burger setIsOpen={() => history.push('/designer')}/>*/}
          <Burger setIsOpen={() => history.push("/menuscreen")} />
        </div>
      </div>
    </div>
  );
};
export default Header;
