import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import TitleSubDescription from "../../components/TitleSubDescription";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import "./index.scss";
import ColorBlock from "../../components/ColorBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import ImageBlock from "../../components/ImageBlock";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import startupSmartHeader from '../../images/startup-smart-header.jpg';
import {ReactComponent as Spotify} from '../../images/spotify.svg';
import startupSmartSecondImage from '../../images/startup-smart-second.jpg';
import startupSmartLast from '../../images/startup-smart-last@3x.jpg';

const StartUpScreen = () => {
    const { isMobile } = useWindowDimensions();

    return (
    <div className={"start-up-screen-container"}>
      <HeaderTitle
        title={"STARTUPSMART"}
        subtitleClassName={'startup-screen-header-subtitle'}
        descriptionClassName={'startup-screen-header-description'}
        subtitle={"Building a great company takes time."}
        description={"Created to aid founders in kickstarting their ventures smarter and faster. No matter the stage we're here to support your journey."}
        marginBottom={87}
      />

      <ImageBlock url={startupSmartHeader} />

      <TitleSubDescription
        title={"STARTING UP SMART"}
        descriptionClassName={'startup-screen-second-block-description'}
        subtitleClassName={'startup-screen-second-block-subtitle'}
        description={`We develop innovative ideas that transform sectors and challenge the established models. We build 
        online businesses that are ready to grow, design and develop tech companies aimed at scale, and create unforgettable 
        experiences with service based companies by working together with founders who are one step ahead. From the beginning, our work responds to a single interest—solving real user needs with a perfect market-fit, balanced with a profitable and scalable company projection.`}
        subtitle={`We build, create & grow disruptive startups for visionary founders & corporations by starting up smart.`}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        title={`Learn. Build. Scale. 
A validated method to turn your idea into a successful business.`}

        mainTitle={"MOST COMPREHENSIVE STARTUP COURSE AVAILABLE"}
        description={`An array of founder focused courses driven by experience together creating all-in-one formula specifically designed for entrepreneurs, led by experts in topics ranging from business modeling, engineering and communication.`}
        btnTitle={"EXPLORE COURSE"}
        imageClassName={'start-up-smart-course-image'}
        isComingSoon
        imgUrl={startupSmartSecondImage}
      />

      <ColorBlock
        title={"StartupSmart Kits"}
        subtitle={"COMING SOON"}
        withIcon
        type={'kLight'}
        size={40}
        textColor={"white"}
        backgroundColor={"black"}
        blockType={'middle'}
      />

      <ProgramCommunityListPartner
          subtitleClassName={'startup-screen-partners-subtitle'}
        title={"GET INVOLVED"}
        subtitle={
          "Align all your opportunities into one growth pathway to get there faster and smarter."
        }
        type={'big'}
        options={options.partners}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        isLeftImage
        title={
          "Connecting on a human level always results in better conversations."
        }
        mainTitle={"STARTUPSMART PODCAST"}
        description={`Join Moken founders Mo + Ken explore the world of entrepreneurship through wide-ranging experiences, global connections, and a collective drive to help founders build market-leading companies. Dive deep into all things startups with this experiential, founder driven podcast filled with valuable insight and the occasional side of sass.`}
        btnTitle={"LISTEN ON SPOTIFY"}
        onClick={() => window.open('https://anchor.fm/startupsmart', '_blank')}
        imgUrl={startupSmartLast}
          btnAdditionalComponent={() => {
                return <Spotify className={'spotify-icon'}/>

          }}
      />

      <EmailForm withForm />
    </div>
  );
};

export default StartUpScreen;
