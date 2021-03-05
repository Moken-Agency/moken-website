import React from "react";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";
import HomeDescriptionDataComponent from "../HomeDescriptionDataComponent";
import HomeHeader from "../HomeHeader";

const HomeComponentWithVerticalText = ({
      title = '',
      numberTitle = '',
      titleContainerStyles = {},
                                         additionalComponent,
      verticalText = {first: '', second: ''},
      imgURL = '',
        descriptionData = {
          title: '',
          description: '',
          btnOptions: {
            title: '',
            route: '/',
            click: () => {}
          }
        },
    imageClassName=''
    }) => {
  return (
    <div
      data-aos="fade-up"
      className={'home-vertical-text-container'}
    >
      <div className={'home-vertical-text-container-wrapper'}>
      {/*<section className={'home-vertical-text-title-container'}>*/}
      {/*  <Text type={'kBold'} size={20}  className={'home-vertical-text-number'}>{numberTitle}</Text>*/}
      {/*  <Text type={'kBold'} size={100} className={'home-vertical-text-title'} containerStyles={titleContainerStyles}>{title}</Text>*/}
      {/*</section>*/}
      <HomeHeader numberTitle={numberTitle} titleContainerStyles={titleContainerStyles} title={title}/>

      <section className={'home-vertical-text-main-container'}>
        <div className={'home-vertical-text-wrapper'}>
          <Text size={16} type={'kBold'}>{verticalText.first}</Text>
          <Text size={16} type={'kLight'}>{verticalText.second}</Text>
        </div>

        <div className={'home-vertical-text-img-description-container'}>
          <img src={imgURL} className={imageClassName} />

          <div>
            <HomeDescriptionDataComponent descriptionData={descriptionData}/>
            {/*<div className={'home-vertical-text-description-container'}>*/}
            {/*  <Text className={'home-vertical-text-description-title'} type={'kBold'} size={45}>{descriptionData.title}</Text>*/}
            {/*  <Text className={'home-vertical-text-description'} type={'kLight'} size={20}>{descriptionData.description}</Text>*/}
            {/*  <Button title={descriptionData.btnOptions.title} />*/}
            {/*</div>*/}
            {additionalComponent ? additionalComponent() : null}
          </div>

        </div>
      </section>

      </div>

    </div>
  );
};
export default HomeComponentWithVerticalText;
