import React, {useRef, useState} from "react";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ArrowUpRight from "../../images/arrow-up-right-white.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

SwiperCore.use([Navigation]);

const Swiper = ({ swiperData = [], Component}) => {
    const { isMobile } = useWindowDimensions();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    console.log('prevRefprevRef', prevRef.current);
    console.log('nextRefnextRef', nextRef.current);

    return (
      <div className={'swiper-component-container'}>
          <SwiperComponent
                  spaceBetween={0}
                  slidesPerView={isMobile ? 1 : 4}
                  wrapperTag={'ul'}
                   navigation={{
                       prevEl: prevRef.current ? prevRef.current : undefined,
                       nextEl: nextRef.current ? nextRef.current : undefined,
                   }}
                   onInit={(swiper) => {
                       swiper.params.navigation.prevEl = prevRef.current;
                       swiper.params.navigation.nextEl = nextRef.current;
                       swiper.navigation.update();
                   }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onClideChange={(slide) => {
                      console.log(slide)
                  }}

          >
              {swiperData.map((option, index) => {
                  return (
                              <SwiperSlide wrapperTag={'li'} tag={'section'}>
                                  {({ isActive }) => (
                                      <Component {...option} isActive={isActive} key={"explore " + index} />
                                  )}
                              </SwiperSlide>
                  )
              })}

              {/*<div ref={prevRef} className="cursor-pointer button-left">*/}
              {/*    <img*/}
              {/*        src={ArrowUpRight}*/}
              {/*    />*/}
              {/*</div>*/}
              <div ref={nextRef} className="cursor-pointer button-right">
                  <img
                      src={ArrowUpRight}
                  />
              </div>
          </SwiperComponent>

      </div>

  );
};
export default Swiper;
