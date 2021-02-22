import React from "react";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";
import HomeHeader from "../HomeHeader";
import tempImage from '../../images/Mohamed.jpg'

import HomeDescriptionDataComponent from "../HomeDescriptionDataComponent";
import Swiper from "../Swiper";

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
  return (
    <div
      data-aos="fade-up"
      className={'home-with-swiper'}
    >

        <HomeHeader title={title} titleContainerStyles={{maxWidth: 960}} numberTitle={numberTitle} />

        <div className={'home-swiper'}>
            <HomeDescriptionDataComponent
                descriptionData={descriptionData}
                titleClass={'home-with-swiper-description-title'}
                descriptionClass={'home-with-swiper-description-description'}
                containerClass={'home-swiper-description-data-component'}
            />

            {/*<div>*/}
            {/*<div style={{width: '100vw'}}>*/}
                <Swiper containerClassName={'home-swiper-container'}
                        // additionalComponentOptions={{
                        //     Component: () => (<HomeDescriptionDataComponent
                        //         descriptionData={descriptionData}
                        //         titleClass={'home-with-swiper-description-title'}
                        //         descriptionClass={'home-with-swiper-description-description'}
                        //     />),
                        //     position: 'left'
                        // }}
                    //     withoutArrows
                        spaceBetween={20}
                        // centeredSlides
                        breakpoints={breakPoints}
                        swiperData={[1,1,1,1,1, 1, 1, 1, 1]}
                        // slidesPerView={3}
                        Component={() => {
                            return (
                                <div style={{backgroundColor: 'grey'}}>
                                    <img src={tempImage}  style={{}}/>
                                </div>
                            )
                        }}
                />
            {/*</div>*/}

        </div>


    </div>
  );
};
export default HomeComponentWithSwiper;
