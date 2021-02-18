import React from "react";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";
import HomeHeader from "../HomeHeader";
import HomeDescriptionDataComponent from "../HomeDescriptionDataComponent";
import Swiper from "../Swiper";

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

        <HomeHeader title={title} titleContainerStyles={{}} numberTitle={numberTitle} />

        <div className={'home-swiper'} >
            <HomeDescriptionDataComponent
                descriptionData={descriptionData}
                titleClass={'home-with-swiper-description-title'}
                descriptionClass={'home-with-swiper-description-description'}
            />

            <Swiper containerClassName={'home-swiper'}
                    // slidesPerView={0}
                    swiperData={[1,1,1,1,1,1,1,1,1,1,1]}
                    Component={() => <div style={{width: 334,  minWidth: 0,height: 475, backgroundColor: 'grey'}}/>}
            />
        </div>


    </div>
  );
};
export default HomeComponentWithSwiper;
