import React, { useState } from "react";
import ArrowUpRight from "../../images/arrrow-top-right-white.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";

const Swiper = ({ children, className = "" }) => {
  const { isMobile } = useWindowDimensions();
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const scrollToEnd = () => {
    const elem = document.getElementById("swiper");
    elem.scrollLeft = elem.scrollWidth;
    setIsButtonVisible(false);
  };

  const buttonDynamicStyles = {
    // width: isButtonVisible ? '6vw' : 0,
    // height: isButtonVisible ? '6vw' : 0,
    padding: isButtonVisible ? (isMobile ? "5vw" : "2vw") : 0,
  };

  const buttonContainerDynamicStyles = {
    // width: isButtonVisible ? '6vw' : 0,
    // height: isButtonVisible ? '6vw' : 0,
    height: isButtonVisible ? (isMobile ? 257 : "24vw") : 0,
    width: isButtonVisible ? (isMobile ? "20vw" : "22vw") : 0,
  };

  const imgDynamicStyles = {
    height: isButtonVisible ? (isMobile ? "6vw" : "3vw") : 0,
  };

  const onScroll = () => {
    const elem = document.getElementById("swiper");
    if (elem.scrollLeft + elem.offsetWidth > elem.offsetWidth) {
      setIsButtonVisible(false);
    } else {
      setIsButtonVisible(true);
    }
  };
  return (
    <div
      id={"swiper"}
      className={`swiper-container ${className}`}
      onScroll={onScroll}
    >
      {children}
      <div
        className={"swiper-button-container"}
        style={buttonContainerDynamicStyles}
      >
        <div
          className={"swiper-button"}
          style={buttonDynamicStyles}
          onClick={scrollToEnd}
        >
          <img src={ArrowUpRight} style={imgDynamicStyles} />
        </div>
      </div>
    </div>
  );
};
export default Swiper;
