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
import leftArrow from '../../images/letft-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';
import Carousel  from 'react-elastic-carousel'


import HomeDescriptionDataComponent from "../HomeDescriptionDataComponent";
import ArrowUpRight from "../../images/arrow-up-right-white.svg";

const breakPoints = [
    // {
    //     width: 1000,
    //     itemsToShow: 1
    // },
    // {
    //     width: 1400,
    //     itemsToShow: 2
    // },
    // {
    //     width: 1600,
    //     itemsToShow: 2.5
    // }
    { width: 1, itemsToShow: 1 },
    { width: 650, itemsToShow: 1.5 },
    { width: 850, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2.5 },
    { width: 1400, itemsToShow: 3 },
    ];

const HomeComponentWithSwiper = ({
      title = '',
     swiperData = [],
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


    const carousel = useRef(null);
    const [isTouching, setIsTouching] = useState(false);

    return (
    <div
      data-aos="fade-up"
      className={'home-with-swiper'}
    >

        <HomeHeader title={title} titleContainerStyles={{maxWidth: 960}} numberTitle={numberTitle} />

        <div className={'home-swiper'}>
            <div className={'home-swiper-left-container'}>
                <HomeDescriptionDataComponent
                    descriptionData={descriptionData}
                    titleClass={'home-with-swiper-description-title'}
                    descriptionClass={'home-with-swiper-description-description'}
                    containerClass={'home-swiper-description-data-component'}
                />
                <div className={'home-swiper-buttons-container'}>
                    <div className={'home-swiper-button-container'}
                         onClick={() => carousel.current.slidePrev()}
                         >
                        <img src={leftArrow} />
                    </div>
                    <div className={'home-swiper-button-container'}
                         onClick={() => carousel.current.slideNext()}
                         >
                        <img src={rightArrow} />
                    </div>
                </div>

            </div>
            <Carousel breakPoints={breakPoints}
                      className={`${isTouching ? 'grabbing' : 'hover'}`}
                      ref={carousel}
                      itemsToShow={2.5}
                      pagination={false}
                      showArrows={false}>
                {swiperData.map(({title = '', subtitle = '', backgroundImage = ''}, index) => {
                    return (
                        <div className={'carousel-item'}
                             style={{backgroundImage: `url(${backgroundImage})`}}
                        >
                            {/*<img src={backgroundImage} />*/}
                            <Text size={16} color={'white'} type={'kBold'}>{title}</Text>
                            <Text size={30} color={'white'} type={'kBold'}>{subtitle}</Text>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    </div>
  );
};
export default HomeComponentWithSwiper;
