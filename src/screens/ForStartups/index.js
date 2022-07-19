import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import "./index.scss";
import TitleCenterImagesList from "../../components/TitleCenterImagesList";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import forStartupsFirstImage from "../../images/contact-second.jpg";
import forStartupsSecondImage from "../../images/for-startups-passion.jpg";
import forStartupsThirdImage from "../../images/for-startups-access.jpg";
import forStartupsInsightImage from "../../images/for-startups-insight@3x.jpg";
import { useHistory } from "react-router-dom";

const ForStartups = () => {
  let history = useHistory();

  const { isMobile } = useWindowDimensions();
  return (
    <div className={"for-startups-container"}>
      <HeaderTitle
        subtitleClassName={"for-startups-header-subtitle"}
        descriptionClassName={"for-startups-header-description"}
        title={"FOR STARTUPS"}
        subtitle={"Supporting the next generation of innovation."}
        description={
          "Building a great company is never easy. Our community is here to support the journey throughout the development of a scalable startup."
        }
        marginBottom={isMobile ? 95 : 107}
      />

      <ImageBlock position={"right"} url={forStartupsFirstImage} />

      <LeftInfoWithRightImage
        withoutRightPadding
        imgUrl={forStartupsSecondImage}
        title={
          "Building disruptive startups for visionary founders & entrepreneurs."
        }
        mainTitle={"PASSION FUELS PURPOSE"}
        description={`We create startups that transform sectors and challenge the established norms. We build businesses that are ready to grow by working with founders and startup teams who are one step ahead. From the beginning, our work responds to a single interest—solving real user needs with a perfect market-fit, balanced with a profitable and scalable company projection.`}
        onClick={() => history.push("/connect-with-us")}
        btnTitle={"WORK WITH US"}
        isLeftImage
      />

      {/* <LeftInfoWithRightImage
          imgUrl={forStartupsThirdImage}
          withoutRightPadding
        title={"Your power lies in the ability to connect."}
        mainTitle={"ACCESS CONNECTIONS"}
        description={
          `Our Access Network is an exclusive, invite-only network built for ambitious humans. It’s a place where entrepreneurs, founders, startups, industry experts, side-hustlers, freelancers, and investors ask questions, exchange ideas, share resources, and connect with one another. Leverage the network to help make better, well-informed decisions about the things that are most important to you & your business. `
        }
        onClick={() => window.open('https://network.mokenstartups.com', '_blank')}
        btnTitle={"JOIN THE NETWORK"}
      /> */}

      <ColorBlock
        title={"StartupSmart Podcast"}
        subtitle={"LISTEN ON SPOTIFY"}
        withIcon
        textColor={"white"}
        backgroundColor={"black"}
        type={"kThin"}
        blockType={"middle"}
        onClick={() => window.open("https://anchor.fm/startupsmart", "_blank")}
      />

      <LeftInfoWithRightImage
        imgUrl={forStartupsInsightImage}
        withoutRightPadding
        title={
          "We believe constant evolution is a powerful competitive advantage."
        }
        mainTitle={"INSIGHT MEETS IMPACT"}
        descriptionClassName={"for-startups-discover-description"}
        titleClassName={"for-startups-discover-title"}
        description={`We create startups that transform sectors and challenge the established norms. We build businesses that are ready to grow by working with startup teams who are one step ahead. From the beginning, our work responds to a single interest—solving real user needs with a perfect market-fit, balanced with a profitable and scalable company projection.`}
        btnTitle={"DISCOVER PROGRAMS"}
        isComingSoon
        isLeftImage
      />

      <TitleCenterImagesList
        title={"A FEW OF THE STARTUPS WE'VE WORKED WITH"}
        list={options.ourProjects}
      />

      <ProgramCommunityListPartner
        title={"DRIVE GROWTH & SCALE FAST"}
        subtitle={
          "Leverage experience to further value creation and scale business models with expansion into new emerging markets."
        }
        subtitleClassName={"for-startups-programs-subtitle"}
        options={options.programs}
        type={"big"}
      />

      {/*<LeftInfoWithRightImage title={'Let us host a demo day for you Enthusiastic individuals working'}*/}
      {/*                        mainTitle={'LET US SHOW YOUR STARTUPS OFF'}*/}
      {/*                        description={'Our role consists of taking the time to understand your business model, ' +*/}
      {/*                        'and suggesting creative and high-performing digital strategies. Our avant-garde tactics' +*/}
      {/*                        ' are in line with the current market, blend seamlessly with our clients’ operational' +*/}
      {/*                        ' realities, and eliminate risks that aren’t necessary.'}*/}
      {/*                        btnTitle={'APPLY TO INCUBATOR'}*/}
      {/*/>*/}

      <EmailForm withForm />
    </div>
  );
};

export default ForStartups;
