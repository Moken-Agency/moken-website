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
import partners from '../../images/partners'

const ForStartups = () => {
  const { isMobile } = useWindowDimensions();
    console.log('Object.values', Object.values);
    return (
    <div className={"for-startups-container"}>
      <HeaderTitle
        title={"FOR STARTUPS"}
        subtitle={"Success fuelled by partnership."}
        description={"Together creating an unmatched global ecosystem."}
        marginBottom={isMobile ? 95 : 107}
      />

      <ImageBlock position={"right"} />

      <LeftInfoWithRightImage
        withoutRightPadding
        title={"We build disruptive startups for visionary founders & entrepreneurs."}
        mainTitle={"PASSION FUELS PURPOSE"}
        description={
          `We create startups which transform sectors and challenge the established models. We build online businesses that are ready to grow by working with clients who are one step ahead. From the beginning, our work responds to a single interest—solving real user needs with a perfect market-fit, balanced with a profitable and scalable company projection.`
        }
        btnTitle={"WORK WITH US"}
          isLeftImage
      />

      <LeftInfoWithRightImage
          withoutRightPadding
        title={"Join our trusted community of partners and market what you do."}
        mainTitle={"ACCESS CONNECTIONS"}
        description={
          `Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.`
        }
        btnTitle={"JOIN THE NETWORK"}
      />

      <ColorBlock
        title={"StartupSmart Podcast"}
        subtitle={"LISTEN ON SPOTIFY"}
        withIcon
        textColor={"white"}
        backgroundColor={"black"}
        type={'kThin'}
        blockType={'middle'}
      />

      <LeftInfoWithRightImage
          withoutRightPadding
        title={
          "We believe constant evolution is our most powerful competitive advantage."
        }
        mainTitle={"INSIGHT MEETS IMPACT"}
        description={
          `Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.`
        }
        btnTitle={"LEARN MORE"}
        isLeftImage
      />

      <TitleCenterImagesList
        title={"A FEW OF THE OTHER STARTUPS WE WORK WITH"}
        list={options.ourProjects}
      />

      <ProgramCommunityListPartner
        title={"DRIVE GROWTH & SCALE FAST"}
        subtitle={
          "Further value creation and scale of the current technological business model with expansion into new emerging markets."
        }
        subtitleClassName={'for-startups-programs-subtitle'}
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
