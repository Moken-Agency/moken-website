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
  console.log({ firstSection });
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

  const letterSpacing = isMobile ? 4 :'0.2vw';
  return (
    <div className={"community-page-generator-container"}>
      <section className={"first-section"}>
        <div className={"first-section-container"}>
          <div
            style={{
              display: "flex",
              marginBottom: "1.2vw",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Text
              size={".95vw"}
              type={"semiBold"}
              mobSize={14}
              animationType={"fade-in"}
              color={"#cdcdcdcd"}
              textStyles={{ letterSpacing }}
            >
              {titleFirst}
              <span>&nbsp;</span>
            </Text>
            <Text
              size={".95vw"}
              type={"semiBold"}
              mobSize={14}
              animationType={"fade-in"}
              textStyles={{ letterSpacing, marginBottom: isMobile ? 70 : 0 }}
            >{`${titleConjunctions} ${titleSecond}`}</Text>
          </div>
          {/*<Text size={'4.3vw'}  */}
          <Text
            size={"4.3vw"}
            type={"thin"}
            mobSize={45}
            animationType={"fade-in"}
            textStyles={{ letterSpacing, lineHeight: isMobile ? '45px' : '4.3vw'}}
            containerStyles={{ marginBottom: isMobile ? 150 : "10.5vw" }}
          >
            {firstSection.subtitle}
          </Text>
        </div>

        <img
          src={isMobile ? firstSection.imgURLMobile : firstSection.imgURL}
          className={"first-section-img"}
        />
        <div className={"first-section-info-container"}>
          {/*<Text size={'3.3vw'}*/}
          <Text
            size={'3.4vw'}
            // size={55}
            mobSize={35}
            animationType={"fade-in"}
            type={"extraLight"}
            containerStyles={{ marginBottom: isMobile ? 40 : '3.8vw' }}
            textStyles={{
              letterSpacing: 0.5,
              // lineHeight: 63
            }}
          >
            {infoTitleFirst}
          </Text>
          <Text
            size={'1.25vw'}
            // size={20}
            type={"light"}
            mobSize={16}
            animationType={"fade-in"}
            // textStyles={{lineHeight: 35}}
            containerStyles={{ paddingRight: !isMobile ? '8vw' : null }}
            textStyles={{ lineHeight: isMobile ? "26px" : "2.2vw" }}

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

        <ImageBlock position={"right"} url={secondSection.imgURL}/>

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
