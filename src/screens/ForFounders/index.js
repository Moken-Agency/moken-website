import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import "./index.scss";
import ColorBlock from "../../components/ColorBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import options from "./options";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ForFounders = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"for-founders-container"}>
      <HeaderTitle
        title={"FOR FOUNDERS"}
        subtitle={"Empathetic and experience powered support."}
        description={
            'Leverage our community to build, validate, and grow your venture through support from fellow founders who have been where you are and know what need to succeed.'
        }
        marginBottom={isMobile ? 107 : 107}
        subtitleClassName={'for-founder-header-subtitle'}
      />

      <ImageBlock position={"right"} />

      <LeftInfoWithRightImage
        mainTitle={"ACCESS YOUR FUTURE"}
        title={"Your power lies in your ability to connect."}
        description={`The Access Network is an exclusive, invite-only network built for ambitious humans. It’s a place where entrepreneurs, founders, startups, industry experts, side-hustlers, freelancers, and investors ask questions, exchange ideas, share resources, and connect with one another.`}
        btnTitle={"JOIN THE NETWORK"}
        imgUrl={""}
      />

      <LeftInfoWithRightImage
        mainTitle={"ELEVATE YOURSELF TO THE NEXT LEVEL"}
        title={
          "Knowledge is what fuels growth and drives innovation forwards."
        }
        description={`Accessible learning modules, founder focused resources, and educational opportunities developed to help you level up using our library of courses, webinars, and other materials designed to help you validate, build, and grow successfully.`}
        btnTitle={"LEARN MORE"}
        imgUrl={""}
        isLeftImage
      />

      <ColorBlock
        title={"StartupSmart Podcast"}
        subtitle={"LISTEN ON SPOTIFY"}
        withIcon
        textColor={"black"}
        backgroundColor={"grey"}
        type={"thin"}
        // className={"for-founders-color-block"}
        // size={30}
      />

      <LeftInfoWithRightImage
        mainTitle={"STRATEGIC PARTNERSHIPS"}
        title={
          "Backing ideas that create real change."
        }
        description={`We understand that startups are built stronger and flourish when founders work together. With that in mind, we've developed an exclusive accelerator program that can be custom tailored to suit any founder’s needs. By harnessing the power of potential and tearing up the rule book, Moken helps early stage founders launch faster, stronger, and more efficiently. Through our agile approach, we overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation while building for scale. `}
        btnTitle={"EXPLORE MOKENLABS"}
        imgUrl={""}
      />

      <ProgramCommunityListPartner
        title={"LEVERAGE YOUR POTENTIAL"}
        subtitle={
          "We are driven by the passion for working with determined innovators who live to make a change in the world."
        }
        options={options.founders}
        widthItem={"30vw"}
        type={"big"}
      />

      <TwoColumnsHugeInfo
        title={"BUILD YOUR FUTURE"}
        leftTitle={`Working with visionary founders to build & grow disruptive startups.`}
        rightTitle={`From ideation stage to high growth innovation, our role consists of taking the time to understand your business model, suggest creative and high-performing strategies, while implementing crucial aspects to supplement your growing needs. Our avant-garde tactics are in line with the current market, blending seamlessly with each startup’s operational realities, while eliminating risks that aren’t necessary.`}
        rightFirstListTitle={"HOW WE CAN COLLABORATE"}
        firstList={options.collaborates}
        rightSecondListTitle={"CHOOSE YOUR PURPOSE"}
        secondList={options.purposes}
      />

      <EmailForm withForm />
    </div>
  );
};

export default ForFounders;
