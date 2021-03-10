import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import "./index.scss";
import TitleCenterImagesList from "../../components/TitleCenterImagesList";
import options from "./options";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import forStartupProgramsFirst from "../../images/for-startup-programs-first.jpg";
import forStartupProgramsSecond from "../../images/for-startup-programs-second.jpg";
import forStartupProgramsThird from "../../images/for-startup-programs-four.jpg";
import forStartupProgramsFourth from "../../images/for-startup-programs-five.jpg";
import {useHistory} from "react-router-dom";

const ForStartupPrograms = () => {

  const { isMobile } = useWindowDimensions();

  const history = useHistory();

  return (
    <div className={"for-brands-container"}>
      <HeaderTitle
        title={"FOR STARTUP PROGRAMS"}
        subtitle={"Collaboration over competition."}
        description={"Driven by diversity, inclusion, and accessibility, together we strive to create an unmatched global ecosytem."}
        marginBottom={isMobile ? 107 : 107}
      />

      <ImageBlock position={"right"} url={forStartupProgramsFirst}/>

      <LeftInfoWithRightImage
          withoutRightPadding
        imgUrl={forStartupProgramsSecond}
        title={
          "Working together to support the next wave of scalable ventures."
        }
        mainTitle={"CROSS SECTOR COLLABORATION"}
        description={
          `We know startups aren’t the only ones hustling. Our goal is to help you help your startups succeed. We
           collaborate with a global network of community startup programs, accelerators, incubators, and VC firms
            to help startups scale effectively and efficiently. Together, we create integrative opportunities in
             the aim of uniting the ecosystem around the world.`
        }
        btnTitle={"GET INVOLVED"}
        onClick={() => history.push('/eco-partners')}
        isLeftImage
      />
      <TitleCenterImagesList
        title={"A FEW OF THE OTHER PARTNERS"}
        list={options.partners}
      />

      <LeftInfoWithRightImage
          withoutRightPadding
          imgUrl={forStartupProgramsThird}
          imageClassName={'for-startup-programs-access-image'}
        title={"Join our trusted community of partners and access support for your startups."}
        mainTitle={"ACCESS NEW MARKETS"}
        description={
            `Leverage the Access Network to help make better, well-informed decisions about the things that are most
             important to you & your program. The Access Network is an exclusive, invite-only network built for
              ambitious programs.  It’s a place where entrepreneurs, founders, startups, industry experts,
               side-hustlers, freelancers, and investors ask questions, exchange ideas, share resources, and connect with one another.`
        }
          onClick={() => window.open('https://network.mokenstartups.com', '_blank')}
        btnTitle={"JOIN THE NETWORK"}
      />

      <ColorBlock
        title={"StartupSmart Podcast"}
        subtitle={"LISTEN ON SPOTIFY"}
        withIcon
        textColor={"white"}
        backgroundColor={"black"}
        blockType={'middle'}
        onClick={() => window.open('https://anchor.fm/startupsmart', '_blank')}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        titleClassName={'for-startup-programs-future-title'}
        descriptionClassName={'for-startup-programs-future-description'}
        imgUrl={forStartupProgramsFourth}
        title={
          "Enthusiastic individuals working together to create extraordinary"
        }
        mainTitle={"SPONSOR THE FUTURE"}
        description={
          "Our role consists of taking the time to understand your business model, " +
          "and suggesting creative and high-performing digital strategies. Our avant-garde " +
          "tactics are in line with the current market, blend seamlessly with our clients’ " +
          "operational realities, and eliminate risks that aren’t necessary."
        }
        btnTitle={"SPONSOR THE FUTURE"}
        onClick={() => history.push('/advertise-with-us')}
        isLeftImage
      />

      <ProgramCommunityListPartner
        title={"DRIVE GROWTH & SCALE FAST"}
        subtitleClassName={'for-startup-programs-drive-subtitle'}
        subtitle={
          "Extrapolate on how they can use our agency and abilities"
        }
        options={options.programs}
        type={"big"}
      />

      <EmailForm withForm />
    </div>
  );
};

export default ForStartupPrograms;
