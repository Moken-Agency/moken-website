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
import {useHistory} from "react-router-dom";

const ForInvestors = () => {

    let history = useHistory();

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
        withoutRightPadding
        title={"Join our trusted community of partners and market what you do."}
        mainTitle={"STARTUP MATCH PROGRAM"}
        description={
         `Gain access to opportunities within our exclusive network of highly promising startups from around the world.`
        }
        btnTitle={"Find Startups".toUpperCase()}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        title={
          "Moken Agency copy goes here about individuals working together to create extraordinary"
        }
        mainTitle={"SUPPORT YOUR VENTURES"}
        description={
          "Our role consists of taking the time to understand your business model, " +
          "and suggesting creative and high-performing digital strategies. Our avant-garde " +
          "tactics are in line with the current market, blend seamlessly with our clients’" +
          " operational realities, and eliminate risks that aren’t necessary."
        }
        btnTitle={"PARTNER WITH US"}
        isLeftImage
        onClick={() => history.push('/eco-partners')}
      />

      <ColorBlock
        title={"Looking for the next big thing?"}
        subtitle={"APPLY NOW"}
        withIcon
        textColor={"white"}
        backgroundColor={"black"}
        blockType={'middle'}
        size={30}
        type={'kThin'}
      />

      <ProgramCommunityListPartner
        title={"GET CONNECTD IN THE MOKEN ECOSYSTEM"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        subtitleClassName={'for-investors-partners-subtitle'}
        options={options.partners}
        type={"big"}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
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
        isLeftImage
      />

      <EmailForm withForm />
    </div>
  );
};

export default ForInvestors;
