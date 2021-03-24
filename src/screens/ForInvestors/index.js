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
import forInvestorsFirst from "../../images/for-investors-first.jpg";
import forInvestorsSecond from "../../images/for-investors-second.jpg";
import forInvestorsThird from "../../images/for-investors-third.jpg";
import forInvestorsFourth from "../../images/for-investors-forth.jpg";

const ForInvestors = () => {

    let history = useHistory();

    const { isMobile } = useWindowDimensions();

  return (
    <div className={"for-investors-container"}>
      <HeaderTitle
        title={"FOR INVESTORS"}
        subtitleClassName={'for-investors-subtitle'}
        descriptionClassName={'for-investors-description'}
        subtitle={"A curated community of scalable opportunities."}
        description={"Together we create an unmatched global ecosystem of vibrant technology founders, passionate entrepreneurs, and impact driven investors."}
        marginBottom={isMobile ? 107 : 107}
      />

      <ImageBlock
        position={"right"}
        url={forInvestorsFirst}
      />

      <LeftInfoWithRightImage
          imageClassName={'for-investors-program-image'}
          imgUrl={forInvestorsSecond}
        withoutRightPadding
        titleClassName={'for-investors-startup-title'}
        descriptionClassName={'for-investors-startup-description'}
        title={"Discover unmatched opportunities with scale driven startups."}
        mainTitle={"ACCESS OPPORTUNITY"}
        description={
         `As an investor, building lasting relationships with the startups identified as potential investments is equally as important as fostering those you’ve already invested in. Through Moken’s Access Network investors gain access to investment opportunities and relationship building within our exclusive network of highly promising startups from around the world.`
        }
          onClick={() => window.open('https://network.mokenstartups.com/', '_blank')}
        btnTitle={"JOIN THE NETWORK".toUpperCase()}
      />

      <LeftInfoWithRightImage
        imgUrl={forInvestorsThird}
        withoutRightPadding
        titleClassName={'for-investors-agency-title'}
        descriptionClassName={'for-investors-agency-description'}
        title={
          "Supporting your startups while safeguarding your investment through trusted build partners."
        }
        mainTitle={"SUPPORT YOUR VENTURES"}
        description={
          `Our role consists of ensuring the viabillity of your investment is never in jeopardy and your startups are supported from idea to launch, and beyond. The riskiest part of early stage investing is often through the post investment support period. However, with our efficient and effective build, validate, and grow tactics, Moken works with you to ensure your startups are supported. Our team’s capabilities seamlessly blend in with any startups’ operational realities while eliminating all unnecessary risks.`
        }
        btnTitle={"PARTNER WITH US"}
        isLeftImage
        onClick={() => history.push('/eco-partners')}
      />

      <ColorBlock
        title={"Looking for the next big thing?"}
        subtitle={"CONNECT WITH US"}
        withIcon
        onClick={() => history.push('/connect-with-us')}
        textColor={"white"}
        backgroundColor={"black"}
        blockType={'middle'}
        size={30}
        type={'kThin'}
      />

      <ProgramCommunityListPartner
        title={"GET CONNECTED IN THE MOKEN ECOSYSTEM"}
        subtitle={
          "Join our trusted community of investors, startups, and founders to extend your reach to new heights."
        }
        subtitleClassName={'for-investors-partners-subtitle'}
        options={options.partners}
        type={"big"}
      />

      {/*<LeftInfoWithRightImage*/}
      {/*    titleClassName={'for-investors-startups-title'}*/}
      {/*    descriptionClassName={'for-investors-startups-description'}*/}
      {/*  imgUrl={forInvestorsFourth}*/}
      {/*  withoutRightPadding*/}
      {/*  title={*/}
      {/*    "Let us host a demo day for you Enthusiastic individuals working"*/}
      {/*  }*/}
      {/*  mainTitle={"LET US SHOW YOUR STARTUPS OFF"}*/}
      {/*  description={*/}
      {/*    "Our role consists of taking the time to understand your business model, " +*/}
      {/*    "and suggesting creative and high-performing digital strategies. Our avant-garde tactics" +*/}
      {/*    " are in line with the current market, blend seamlessly with our clients’ operational" +*/}
      {/*    " realities, and eliminate risks that aren’t necessary."*/}
      {/*  }*/}
      {/*  btnTitle={"APPLY TO INCUBATOR"}*/}
      {/*  isLeftImage*/}
      {/*/>*/}

      <EmailForm withForm />
    </div>
  );
};

export default ForInvestors;
