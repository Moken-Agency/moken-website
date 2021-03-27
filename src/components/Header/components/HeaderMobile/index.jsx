import React, { useState } from "react";
import "./index.scss";
import MenuItem from "../MenuItem";
import headerOptions from "../../header-options";
import footerOptions from "../../../Footer/footer-options";
import Burger from "../Burger";
import Text from "../../../Text";
import SubMenuItem from "../SubMenuItem";
import ArrowLeft from "../../../../images/arrow-left.jpg";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const {
  leftMenu,
  rightMenu,
  mainMenu,
  mainMenuTextStyles,
  topMenuTextStyles,
} = headerOptions;

const { socialsMediaWhite } = footerOptions;

const HeaderMobile = ({ isOpen = false, setIsOpen, containerClassName = '' }) => {
  let history = useHistory();

  const [subMenu, setSubMenu] = useState(null);
  const { isMobile } = useWindowDimensions();


  const handleGoBack = () => {
    setSubMenu(null);
  };

  const closeMenu = () => {
    history.goBack();
  };
  return (
    <section
      className={`header-mobile-container ${containerClassName}`}
      style={{
        height: isOpen ? "90vh" : "10vh",
        position: isOpen ? "absolute" : "initial",
      }}
    >
      <div>
        <div className={"header-mobile-burger-container"}>
          {subMenu ? (
            <div
              className={"header-mobile-arrow-container"}
              onClick={handleGoBack}
            >
              <img src={ArrowLeft} />
              <Text
                type={"bold"}
                containerStyles={{
                  position: "relative",
                  top: 3,
                  fontSize: 12,
                  letterSpacing: 3.75,
                }}
              >
                {"go back".toUpperCase()}
              </Text>
            </div>
          ) : (
            <div />
          )}
          <Burger isOpen={true} setIsOpen={closeMenu} />
        </div>

        <>
          {!subMenu ? (
            <div className={"main-menu-header-mobile"}>
              {mainMenu.map(
                ({ title, subRouts = [], dividerColor, route }, index) => {
                  return (
                    <MenuItem
                      key={"main menu" + index}
                      title={title}
                      textStyles={mainMenuTextStyles}
                      containerStyles={{ marginRight: "1.5vw" }}
                      subRouts={subRouts}
                      dividerColor={dividerColor}
                      onClick={() =>
                        setSubMenu({ title, subRouts, dividerColor })
                      }
                    />
                  );
                }
              )}
            </div>
          ) : (
            <div className={"header-mobile-sub-routs"}>
              <Text
                size={16}
                textStyles={{
                  color: subMenu.dividerColor,
                  marginBottom: 30,
                  letterSpacing: 5,
                }}
              >
                {subMenu.title.toUpperCase()}
              </Text>
              <div>
                {subMenu.subRouts.map(
                  ({ title, dividerColor, route }, index) => {
                    return (
                      <Text
                        size={12}
                        textStyles={{ letterSpacing: 3.75 }}
                        containerStyles={{ marginBottom: 20 }}
                        onClick={() => history.push(route)}
                      >
                        {title.toUpperCase()}
                      </Text>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </>
      </div>
      {!subMenu && (
        <div className={"bottom-menu-header-mobile"}>
          <div>
            {[...leftMenu, ...rightMenu].map(({ title, route }, index) => {
              return (
                <Text
                  containerStyles={{ marginBottom: "3vw" }}
                  size={"4vw"}
                  onClick={() => {
                    history.push(route);
                  }}
                  textStyles={{ textTransform: "uppercase", letterSpacing: 3 }}
                >
                  {title}
                </Text>
              );
            })}
          </div>
          <div className={"social-media-container-header-mobile"}>
            {socialsMediaWhite.map(({ image, link, route }, index) => {
              return (
                <a href={link} key={"social media header" + index}>
                  <img src={image} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
export default HeaderMobile;
