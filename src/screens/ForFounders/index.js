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
        subtitle={"Success fuelled by partnership."}
        description={"Together creating an unmatched global ecosystem."}
        marginBottom={isMobile ? 107 : 107}
      />

      <ImageBlock position={"right"} />

      <LeftInfoWithRightImage
        mainTitle={"ACCESS NETWORK"}
        title={"Join our trusted community of partners and market what you do."}
        description={`Our role consists of taking the time to understand your business model, 
                                    and suggesting creative and high-performing digital strategies. Our avant-garde
                                     tactics are in line with the current market, blend seamlessly with our clients’
                                      operational realities, and eliminate risks that aren’t necessary.`}
        btnTitle={"APPLY TO INCUBATOR"}
        imgUrl={""}
      />

      <LeftInfoWithRightImage
        mainTitle={"EDUCATION & PROGRAMING TO TAKE YOU TO THE NEXT LEVEL"}
        title={
          "COURSES & PROGRAMS individuals working together to create extraordinary"
        }
        description={`Our role consists of taking the time to understand your business model, 
                                    and suggesting creative and high-performing digital strategies. Our avant-garde
                                     tactics are in line with the current market, blend seamlessly with our clients’
                                      operational realities, and eliminate risks that aren’t necessary.`}
        btnTitle={"APPLY TO INCUBATOR"}
        imgUrl={""}
        isLeftImage
      />

      <ColorBlock
        title={"Looking for the next big thing?"}
        subtitle={"APPLY NOW"}
        withIcon
        textColor={"black"}
        backgroundColor={"grey"}
        type={"thin"}
        className={"for-founders-color-block"}
        size={30}
      />

      <LeftInfoWithRightImage
        mainTitle={"STARTUPSMART"}
        title={
          "We are driven by the passion for working with determined innovators who live to make a change in the world."
        }
        description={`We understand that together we should see results, not just reports 
                                    with the work we do. We've developed tailor-made strategies that assist in beating
                                     out the competition by tearing up the rule book. Through our agile approach,
                                      entrepreneurs, founders, and startups overcome the odds by predicting, measuring,
                                       mitigating, and managing the risk associated with innovation. `}
        btnTitle={"APPLY TO INCUBATOR"}
        imgUrl={""}
      />

      <ProgramCommunityListPartner
        title={"FOUNNDER BRANDING"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        options={options.founders}
        widthItem={"30vw"}
      />

      <TwoColumnsHugeInfo
        title={"MOKEN AGENCY"}
        leftTitle={`Enthusiastic individuals working together to create extraordinary startups.`}
        rightTitle={`From ideation stage to high growth innovation, our role consists 
                                of taking the time to understand your business model, suggest creative and 
                                high-performing strategies, while implementing crucial aspects to supplement your growing 
                                needs. Our avant-garde tactics are in line with the current market, blending seamlessly 
                                with each startup’s operational realities, while eliminating risks that aren’t necessary.`}
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
