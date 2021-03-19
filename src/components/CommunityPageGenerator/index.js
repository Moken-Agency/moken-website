import React from "react";
import Text from "../Text";
import Description from "../Description";
import Subtitle from "../Subtitle";
import "./index.scss";
import ColorBlock from "../ColorBlock";
import EmailForm from "../EmailForm";
import Title from "../Title";
import FirstMapItem from "./components/FirstMapItem";
import SecondMapItem from "./components/SecondMapItem";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../ImageBlock";
import {Parallax} from "react-parallax";

const dataExample = {
  firstSection: {
    title: {
      titleFirst: "",
      titleConjunctions: "",
      titleSecond: "",
    },
    subtitle: "",
    imgURL: "",
    infoBlock: {
      infoTitle: "",
      infoDescription: "",
      infoSubtitle: "",
    },
  },
};

const CommunityPageGenerator = ({
  firstSection,
  secondSection,
  thirdSection,
}) => {
  const { isMobile } = useWindowDimensions();

  const {
    titleFirst = "",
    titleConjunctions = "",
    titleSecond = "",
  } = firstSection.title;
  const {
    infoTitleFirst = "",
    infoDescriptionFirst = "",
    infoSubtitleFirst = "",
  } = firstSection.infoBlock;

  const letterSpacing = isMobile ? 4 : 0;
  return (
    <div className={"community-page-generator-container"}>
      <section className={"first-section"}>
        <div className={'first-section-container-wrapper'}>
          <div className={"first-section-container"}>
            <div
                style={{
                  display: "flex",
                  marginBottom: "1.2vw",
                  flexDirection: isMobile ? "column" : "row",
                }}
            >
              <Text
                  size={16}
                  type={"kMedium"}
                  mobSize={14}
                  animationType={"fade-in"}
                  // color={"#cdcdcdcd"}
                  textStyles={{ letterSpacing: 4 }}
              >
                {titleFirst}
                <span>&nbsp;</span>
              </Text>
              {titleSecond ? <Text
                  size={16}
                  type={"kSemiBold"}
                  mobSize={14}
                  animationType={"fade-in"}
                  textStyles={{letterSpacing, marginBottom: isMobile ? 70 : 0}}
              >{`${titleConjunctions} ${titleSecond}`}</Text> : null}
            </div>
            {/*<Text size={'4.3vw'}  */}
            <Text
                size={65}
                type={"kBold"}
                mobSize={45}
                animationType={"fade-in"}
                textStyles={{ letterSpacing, lineHeight: isMobile ? '45px' : '75px'}}
                containerStyles={{ marginBottom: isMobile ? 150 : 175, maxWidth: 750, ...firstSection.subtitleContainerStyles }}
            >
              {firstSection.subtitle}
            </Text>
          </div>

        </div>

        <Parallax
          className={'first-section-img'}
          bgImage={isMobile ? firstSection.imgURLMobile : firstSection.imgURL}
          strength={200}
        />

        {/*<img*/}
        {/*  src={isMobile ? firstSection.imgURLMobile : firstSection.imgURL}*/}
        {/*  className={"first-section-img"}*/}
        {/*/>*/}
        <div className={"first-section-info-container"}>
          {/*<Text size={'3.3vw'}*/}
          <Text
            size={50}
            mobSize={35}
            animationType={"fade-in"}
            type={"kBold"}
            containerStyles={{ marginBottom: isMobile ? 40 : 55 }}
            textStyles={{
              letterSpacing: 0.5,
              lineHeight: isMobile ? '37px' : '53px'
            }}
          >
            {infoTitleFirst}
          </Text>
          <Text
            // size={'1.25vw'}
            size={20}
            type={"kLight"}
            mobSize={16}
            animationType={"fade-in"}
            // textStyles={{lineHeight: 35}}
            containerStyles={{ paddingRight: !isMobile ? 120 : null }}
            textStyles={{ lineHeight: isMobile ? "26px" : "30px" }}

              // containerStyles={{marginBottom: '4.5vw', lineHeight: '35px'}}
          >
            {infoDescriptionFirst}
          </Text>
          {/*{!isMobile ? <Text size={'.84vw'} type={'semiBold'} textStyles={{letterSpacing: 4}}>{infoSubtitleFirst}</Text> : null}*/}
        </div>
      </section>

      <section className={"second-section"}>
        <div className={"second-section-container"}>
          <Title
            title={secondSection.title}
            className={"second-section-title"}
          />
          <div className={"second-section-map-container"}>
            {secondSection.mapItems.map((item, index) => {
              return (
                <FirstMapItem
                  {...item}
                  key={"FirstMapItem" + item.title + index}
                />
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex',justifyContent: 'flex-end' }}>
          <Parallax
              strength={200}
              style={{height: 544, width: 1393, marginBottom: 240}}
              bgImage={secondSection.imgURL}
          />
        </div>



        {/*<div className={'second-section-image-container'}>*/}
        {/*    <img src={secondSection.imgURL} />*/}
        {/*</div>*/}
      </section>

      <section className={"third-section"}>
        <Title title={thirdSection.title} className={'community-page-generator-title'}/>
        <div className={"third-section-container"}>
          {thirdSection.mapItems.map((item, index) => {
            return (
              <SecondMapItem
                {...item}
                key={"SecondMapItem" + item.title + index}
              />
            );
          })}

          <EmailForm withForm />
        </div>
      </section>
    </div>
  );
};

export default CommunityPageGenerator;
