import React, { useState } from "react";
import ArrowUpRight from "../../images/arrow-up-right-white.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {Carousel} from "react-responsive-carousel";
import Text from "../Text";

const Swiper = ({ centerSlidePercentage = 25,
                    centerMode = true,
                    dynamicHeight = false,
                    children,
                    showIndicators = false,
                    showThumbs = false,
                    showStatus = false,
                    backgroundColor = 'white'}) => {
    const { isMobile } = useWindowDimensions();


    return (
      <div className={'swiper-container'}>
          <Carousel
              showThumbs={showThumbs}
              showStatus={showStatus}
              transitionTime={1000}
              showIndicators={showIndicators}
              centerMode={centerMode}
              centerSlidePercentage={isMobile ? 100 : centerSlidePercentage}
              dynamicHeight={dynamicHeight}
              renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && !isMobile && (
                      <div className={'swiper-button-container  button-right'}>
                          <a
                              className={"swiper-button"}
                              // style={buttonDynamicStyles}
                              onClick={onClickHandler}>
                              <img src={ArrowUpRight} />
                          </a>
                      </div>
                  )
              }

              renderArrowPrev={(onClickHandler, hasNext, label) =>
                  hasNext && !isMobile && (
                      <div className={'swiper-button-container  button-left'}>
                          <div
                              className={"swiper-button"}
                              // style={buttonDynamicStyles}
                              onClick={onClickHandler}>
                              <img src={ArrowUpRight} />
                          </div>
                      </div>
                  )
              }
              renderItem={(item) => {
                  return (
                      <div
                          style={{
                              backgroundColor: backgroundColor
                          }}
                      >
                          {item}
                      </div>
                  )
              }}
          >
              {children}

          </Carousel>
      </div>

  );
};
export default Swiper;

{/*<div*/}
{/*    id={"swiper"}*/}
{/*    className={`swiper-container ${className}`}*/}
{/*    onScroll={onScroll}*/}
{/*>*/}
{/*  {children}*/}
{/*  <div*/}
{/*      className={"swiper-button-container"}*/}
{/*      style={buttonContainerDynamicStyles}*/}
{/*  >*/}

{/*  </div>*/}
{/*</div>*/}
{/*</Carousel>*/}

// const { isMobile } = useWindowDimensions();
// const [isButtonVisible, setIsButtonVisible] = useState(true);
//
// const scrollToEnd = () => {
//   const elem = document.getElementById("swiper");
//   elem.scrollLeft = elem.scrollWidth;
//   setIsButtonVisible(false);
// };

// const buttonDynamicStyles = {
//   // width: isButtonVisible ? '6vw' : 0,
//   // height: isButtonVisible ? '6vw' : 0,
//   padding: isButtonVisible ? (isMobile ? "5vw" : "2vw") : 0,
// };

// const buttonContainerDynamicStyles = {
//   // width: isButtonVisible ? '6vw' : 0,
//   // height: isButtonVisible ? '6vw' : 0,
//   height: isButtonVisible ? (isMobile ? 257 : "24vw") : 0,
//   width: isButtonVisible ? (isMobile ? "20vw" : "22vw") : 0,
// };
//
// const imgDynamicStyles = {
//   height: isButtonVisible ? (isMobile ? "6vw" : "3vw") : 0,
// };
//
// const onScroll = () => {
//   const elem = document.getElementById("swiper");
//   if (elem.scrollLeft + elem.offsetWidth > elem.offsetWidth) {
//     setIsButtonVisible(false);
//   } else {
//     setIsButtonVisible(true);
//   }
// };
