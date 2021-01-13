import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ForInvestors = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"for-investors-container"}>
      <HeaderTitle
        title={"FOR INVESTORS"}
        subtitle={"Success fuelled by partnership."}
        description={"Together creating an unmatched global ecosystem."}
        marginBottom={isMobile ? 107 : 107}
      />

      <ImageBlock
        position={"right"}
        // url={''}
      />

      <LeftInfoWithRightImage
        title={"Join our trusted community of partners and market what you do."}
        mainTitle={"STARTUP MATCH PROGRAM"}
        description={
          "Our role consists of taking the time to understand your business model, " +
          "and suggesting creative and high-performing digital strategies. Our avant-garde " +
          "tactics are in line with the current market, blend seamlessly with our clients’ " +
          "operational realities, and eliminate risks that aren’t necessary."
        }
        btnTitle={"APPLY TO INCUBATOR"}
      />

      <LeftInfoWithRightImage
        title={
          "Moken Agency copy goes here about individuals working together to create extraordinary"
        }
        mainTitle={"SUPPORT YOUR VENTURES WITH A VENTURE PARTNER"}
        description={
          "Our role consists of taking the time to understand your business model, " +
          "and suggesting creative and high-performing digital strategies. Our avant-garde " +
          "tactics are in line with the current market, blend seamlessly with our clients’" +
          " operational realities, and eliminate risks that aren’t necessary."
        }
        btnTitle={"APPLY TO INCUBATOR"}
        isLeftImage
      />

      <ColorBlock
        title={"Looking for the next big thing?"}
        subtitle={"APPLY NOW"}
        withIcon
        textColor={"black"}
        backgroundColor={"grey"}
        type={"thin"}
        className={"for-investors-color-block"}
        size={30}
      />

      <ProgramCommunityListPartner
        title={"GET CONNECTD IN THE MOKEN ECOSYSTEM"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        options={options.partners}
        widthItem={"30vw"}
      />

      <LeftInfoWithRightImage
        title={
          "Let us host a demo day for you Enthusiastic individuals working"
        }
        mainTitle={"LET US SHOW YOUR STARTUPS OFF"}
        description={
          "Our role consists of taking the time to understand your business model, " +
          "and suggesting creative and high-performing digital strategies. Our avant-garde tactics" +
          " are in line with the current market, blend seamlessly with our clients’ operational" +
          " realities, and eliminate risks that aren’t necessary."
        }
        btnTitle={"APPLY TO INCUBATOR"}
      />

      <EmailForm withForm />
    </div>
  );
};

export default ForInvestors;
