import React from "react";
import Text from "../../components/Text";
import "./index.scss";
import Title from "../../components/Title";
import options from "./options";
import ExpertiseItem from "./components/ExpertiseItem";
import Button from "../../components/Button";
import ExpertiseHeader from "../../images/expertise-header.jpg";
import ExpertiseFooter from "../../images/expertise-footer.jpg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const { gettingStarted, marketing, product } = options;

const Expertise = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"expertise-container"}>
      {/*<div className={'expertise-circle-main'}>*/}
      {/*    <div className={'expertise-circle-second'}/>*/}
      {/*</div>*/}
      <div className={"expertise-first-wrapper"}>
        <div>
          <Text
            className={"expertise-title"}
            animationType={"fade-in"}
            size={16}
            // size={'1vw'}
            mobSize={14}
            type={"kMedium"}
            // type={"semiBold"}
            // mobColor={"white"}
          >
            EXPERTISE
          </Text>
          <Text
            className={"expertise-subtitle"}
            type={"kBold"}
            // type={"thin"}
            // size={'4.7vw'}
            size={75}
            animationType={"fade-in"}
            mobSize={45}
            // mobColor={"white"}
          >
            Let’s Build the Future
          </Text>
        </div>

        <img src={ExpertiseHeader} />
      </div>

      <Title title={"GETTING STARTED"} />

      <div className={"expertise-second-wrapper"}>
        <Text
          className={"expertise-started-subtitle"}
          // textStyles={{marginTop: '8vw'}}
          containerStyles={{ marginBottom: isMobile ? 100 : "8vw" }}
          type={"kBold"}
          animationType={"fade-in"}
          size={50}
          mobSize={35}
        >
            We’re a startup and business scalability agency determined to help founders build, create, and grow successful ventures.
        </Text>
      </div>
      <div className={"expertise-items-container"}>
        {gettingStarted.map((props, index) => {
          return <ExpertiseItem {...props} key={"expertise item " + index} />;
        })}
      </div>
      <Title className={"expertise-started-title"} title={"PRODUCT"} />
      <div className={"expertise-items-container"}>
        {product.map((props, index) => {
          return <ExpertiseItem {...props} key={"expertise item " + index} />;
        })}
      </div>

      <Title
        className={"expertise-started-title"}
        title={"MARKETING & GROWTH EXPERTISE"}
      />
      <div className={"expertise-items-container"}>
        {marketing.map((props, index) => {
          return <ExpertiseItem {...props} key={"expertise item " + index} />;
        })}
      </div>

      <div className={"expertise-bottom-container"}>
        <div className={"expertise-bottom-block-container"}>
          <div className={"expertise-bottom-info-container"}>
            <div className={"expertise-bottom-first-info-container"}>
              <Title
                color={"white"}
                title={"FIND WHAT YOU NEED"}
                className={"expertise-bottom-first-info-title"}
              />
              <Text
                color={"white"}
                type={"kBold"}
                animationType={"fade-in"}
                size={50}
                mobSize={35}
                className={"expertise-bottom-first-info-text-first"}
              >
                  Whatever your needs, we've got you.
              </Text>
              <Text
                color={"white"}
                type={"kLight"}
                size={18}
                // size={"1vw"}
                animationType={"fade-in"}
                mobSize={16}
                textStyles={{lineHeight: isMobile ? null : '29px'}}
                className={"expertise-bottom-first-info-text-second"}
                containerStyles={{marginBottom: isMobile ? 50 : null}}
              >
                  Not to worry, we’ve got you. If you’re looking for something a little more integrative check out our
                  roadmaps & sprint offerings. Or perhaps you need something specific, developed in an effective and
                  efficient manner. If that’s it, check out StartupSmart for an array of à la carte options at a startup price point.
              </Text>
              {/*<Text*/}
              {/*  color={"white"}*/}
              {/*  type={"light"}*/}
              {/*  animationType={"fade-in"}*/}
              {/*  size={"1vw"}*/}
              {/*  mobSize={16}*/}
              {/*  className={"expertise-bottom-first-info-text-third"}*/}
              {/*>*/}
              {/*  Who knows, maybe you’re exactly what we’ve been looking for all*/}
              {/*  along.*/}
              {/*</Text>*/}
            </div>
            <div className={"expertise-bottom-btn-container"}>
              <Button
                title={"ROADMAPS & SPRINTS"}
                backgroundColor={"black"}
                // size={14}
                mobSize={10}
                textColor={"white"}
                borderType={"bordered"}
                containerStyles={{
                  marginRight: 30,
                }}
              />
              <Button
                title={"STARTUPSMART"}
                backgroundColor={"white"}
                textColor={"black"}
                // size={14}
                mobSize={10}
                type={"bordered-white"}
              />
            </div>
          </div>
          <img src={ExpertiseFooter} />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
