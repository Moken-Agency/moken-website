import React, { useState } from "react";
import Text from "../../components/Text";
import Title from "../../components/Title";
import "./styles.scss";
import SubmitYourResume from "../../components/SubmitYourResume";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import options from "./options";
import HeaderTitle from "../../components/HeaderTitle";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../../components/ImageBlock";
import ReactPlayer from "react-player";
import img from "../../images/innovation-mob-header.svg";
import VideoPlayer from "./VideoPlayer";
import {useHistory} from "react-router-dom";
import AboutMokenFirstRight from '../../images/about-moken-first-right@2x.jpg';
import AboutMokenSecondRight from '../../images/about-moken-second-right.jpg';
import VideoImage from '../../images/about-moken-video-img.jpg';

const AboutMoken = (props) => {
console.log({props});
const { isMobile } = useWindowDimensions();
const history = useHistory();
  return (
    <div className={"about-moken-container"}>
      <HeaderTitle
        title={"ABOUT MOKEN"}
        subtitle={"Backing ideas that create change."}
        description={
          `Built to support founders, Moken is a company specialized in all things startup. Together, we have the 
          mission of creating a global community-driven startup ecosystem designed to inspire, educate, and connect.`
        }
        marginBottom={isMobile ? 160 : '8.9vw'}
      />

      <ImageBlock position={"right"} url={AboutMokenFirstRight} className={'about-moken-first-image-block'} />

      <TitleTwoDescriptions
        mainTitle={"WE ARE MOKEN"}
        title={
          "Moken creates diversified opportunities for startups & founders driving economic & social impact, globally. "
        }
        firstDescription={
          "Together, we have the mission of creating a global startup community designed to inspire, educate, and connect with founders and startups in the pursuit of building impactful new ventures. We work alongside teams, investors, entrepreneurs, founders, and startup program providers to support in paving the way for success while connecting the vital pillars throughout a company’s lifecycle."
        }
        secondDescription={
          "We have a shared ambition to achieve extraordinary results, outperform the competition, and redefine industries through disruption. We partner with innovators through our tailored and integrative expertise, complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven outcomes."
        }
      />

      <section className={"about-moken-second-info-section"}>
        <Title title={"WHAT WE DO"} />
        <div className={'about-moken-second-info-img-container'}>
            <div className={"about-moken-second-info-section-secondary-container"}>
                <Text
                    className={"about-moken-second-info-section-subtitle"}
                    // size={'3.4vw'}
                    size={50}
                    animationType={"fade-up"}
                    mobSize={35}
                    type={"kBold"}
                    // type={"extraLight"}
                >
                    Driven by the passion for working with passionate innovators who live to make a change in the world.

                </Text>
                <Text
                    className={"about-moken-second-info-section-text"}
                    // size={'1.25vw'}
                    size={20}
                    animationType={"fade-up"}
                    textStyles={{ lineHeight: isMobile ? "26px" : "30px" }}
                    mobSize={16}
                    type={"kLight"}
                >
                    We understand that together we should see results, not just reports with every bit of work we do. Through developing tailor-made strategies that assist in beating out the competition by tearing up the rule book, our agile approach arms entrepreneurs, founders, and startups with the tools necessary to overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation.
                </Text>

                <div className={"about-moken-second-kendra-block"}>
                    <div className={"about-moken-second-divider"} />
                    <div className={"about-moken-second-kendra-info-block"}>
                        <Text
                            className={"about-moken-second-kendra-info-text"}
                            type={"kSemiBold"}
                            animationType={"fade-up"}
                            // size={'1.5vw'}
                            size={24}
                            mobSize={18}
                        >
                            “We access founders potential through collaborating to create opportunties within diversified industries by creating disruptive ideas and technology.”
                        </Text>
                        <Text
                            // size={'1vw'}
                            size={16}
                            animationType={"fade-up"}
                            mobSize={12}
                            textStyles={{ letterSpacing: 4 }}
                            type={"kSemiBold"}
                        >
                            — Kendra Garagan | Founder & Partner
                        </Text>
                    </div>
                </div>
            </div>

            <img src={AboutMokenSecondRight}/>

        </div>
      </section>

      <section className={"about-moken-video-section"}>
        <img className={'about-moken-video-poster'} src={VideoImage}/>
        <div className={"about-moken-video-info-block"}>
          <Text
            className={"about-moken-video-info-block-first-title"}
            size={16}
            // size={'1vw'}
            animationType={"fade-up"}
            type={"kSemiBold"}
          >
              WE ARE MOKEN, WE ARE THE FUTURE
          </Text>
          <Text
            size={20}
            // size={'1.2vw'}
            type={"kLight"}
            animationType={"fade-up"}
            textStyles={{ lineHeight: isMobile ? "26px" : "30px" }}
            mobSize={16}
          >
              Video Coming Soon
          </Text>
        </div>

          <VideoPlayer />


      </section>

      <TwoColumnsHugeInfo
        title={"MOKEN PILLARS"}
        leftTitle={
          "Enthusiastic individuals working together to create extraordinary startups."
        }
        rightTitle={
            `The Moken Pillars are the key divisions within Moken Startups that together create who we are. They’re how
             we interact and engage with our community, and each address a unique necessary for startup success. 
             From ideation stage to high growth innovation, our role consists of taking the time to understand your
              business model, suggest creative and high-performing strategies, while implementing crucial aspects
               to supplement your growing needs. Our avant-garde tactics are in line with the current market, 
               blending seamlessly with each startup’s operational realities, while eliminating risks that aren’t necessary.`
        }
        rightFirstListTitle={"HOW WE CAN COLLABORATE"}
        firstList={options.collaborates}
        rightSecondListTitle={"CHOOSE YOUR PURPOSE"}
        secondList={options.purposes}
        secondListWithIcon
      />

      <ColorBlock
        title={"Let’s create magic together."}
        subtitle={"CONNECT WITH US"}
        withIcon
        size={75}
        type={'kThin'}
        titleClassName={'about-moken-colour-block-title'}
        backgroundColor={"#000"}
        onClick={() => history.push('/connect-with-us')}
        textWidth={isMobile ? 'auto' : 580}
      />

      <EmailForm withForm />
    </div>
  );
};

export default AboutMoken;
