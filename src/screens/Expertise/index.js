import React from "react";
import Text from "../../components/Text";
import "./index.scss";
import Title from "../../components/Title";
import options from "./options";
import ExpertiseItem from "./components/ExpertiseItem";
import Button from "../../components/Button";
import ExpertiseImage from "../../images/expertise.png";
import HeaderTitle from "../../components/HeaderTitle";
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
            // size={16}
            size={'1vw'}
            mobSize={14}
            type={"semiBold"}
            // mobColor={"white"}
          >
            EXPERTISE
          </Text>
          <Text
            className={"expertise-subtitle"}
            type={"thin"}
            size={'4.7vw'}
            // size={75}
            animationType={"fade-in"}
            mobSize={45}
            // mobColor={"white"}
          >
            Let’s Build the Future
          </Text>
        </div>

        <img src={''} />
      </div>

      <Title className={"expertise-started-title"} title={"GETTING STARTED"} />

      <div className={"expertise-second-wrapper"}>
        <Text
          className={"expertise-started-subtitle"}
          // textStyles={{marginTop: '8vw'}}
          containerStyles={{ marginBottom: isMobile ? 100 : "8vw" }}
          type={"extraLight"}
          animationType={"fade-in"}
          size={"3vw"}
          mobSize={35}
        >
            We’re a startup and business scalability agency determined to help founders build, create, and grow.
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
        title={"MARKETING & GROWTH"}
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
                type={"extraLight"}
                animationType={"fade-in"}
                size={"3vw"}
                mobSize={35}
                className={"expertise-bottom-first-info-text-first"}
              >
                Not exactly what you were looking for?
              </Text>
              <Text
                color={"white"}
                type={"light"}
                size={"1vw"}
                animationType={"fade-in"}
                mobSize={16}
                textStyles={{lineHeight: isMobile ? null : '1.7vw'}}
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
                  marginRight: "2.8vw",
                  padding: isMobile ? "" : "1.95vw 2.2vw",
                }}
              />
              <Button
                title={"STARTUPSMART"}
                backgroundColor={"white"}
                textColor={"black"}
                // size={14}
                mobSize={10}
                type={"bordered-white"}
                containerStyles={{ padding: isMobile ? "" : "1.95vw 2.2vw" }}
              />
            </div>
          </div>
          <img src={ExpertiseImage} />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
