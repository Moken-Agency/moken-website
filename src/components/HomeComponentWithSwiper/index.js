import React, {useRef, useState} from "react";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";
import HomeHeader from "../HomeHeader";
import tempImage from '../../images/Mohamed.jpg'
import SwiperCore , { Navigation, Virtual } from 'swiper';
import {Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import HomeDescriptionDataComponent from "../HomeDescriptionDataComponent";
import ArrowUpRight from "../../images/arrow-up-right-white.svg";

const breakPoints ={
    // '0': {
        // slidesPerView: 1,
    // },
    // '601': {
        // slidesPerView: 2,
    // },
    // '850': {
        // slidesPerView: 3,
    // },
    '1450': {
        slidesPerView: 3,
    }
};

const HomeComponentWithSwiper = ({
      title = '',
      numberTitle = '',
        descriptionData = {
          title: '',
          description: '',
          btnOptions: {
            title: '',
            route: '/',
            click: () => {}
          }
        }
    }) => {


    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isTouching, setIsTouching] = useState(false);

    return (
    <div
      data-aos="fade-up"
      className={'home-with-swiper'}
    >

        <HomeHeader title={title} titleContainerStyles={{maxWidth: 960}} numberTitle={numberTitle} />

        <div className={'home-swiper'}>
            <div>
                <HomeDescriptionDataComponent
                    descriptionData={descriptionData}
                    titleClass={'home-with-swiper-description-title'}
                    descriptionClass={'home-with-swiper-description-description'}
                    containerClass={'home-swiper-description-data-component'}
                />
                <div className={'home-swiper-buttons-container'}>
                    <div className={'home-swiper-button-container'}
                         ref={prevRef}
                         />
                    <div className={'home-swiper-button-container'}
                         ref={nextRef}
                         />
                </div>

            </div>

            <div style={{width: '100vw'}} className={`${isTouching ? 'grabbing' : 'hover'}`}>
                <Swiper
                    spaceBetween={20}
                    breakpoints={breakPoints}
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
                    // onSlideChange={onDragStart}
                    // onReachEnd={onDragEnd}
                    // onBeforeSlideChangeStart={() => console.log('onBeforeSlideChangeStart')}
                    onTouchStart={() => setIsTouching(true)}
                    onTouchEnd={() => setIsTouching(false)}

                >
                    {[1,3,4,5,4].map((option, index) => {
                        return (
                            <SwiperSlide wrapperTag={'li'} tag={'section'} key={`Slide content ${index + 1}`} virtualIndex={index}>
                                {({ isActive }) => (
                                    <div>
                                        <img src={tempImage} />
                                    </div>

                                )}
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>

        </div>


    </div>
  );
};
export default HomeComponentWithSwiper;
