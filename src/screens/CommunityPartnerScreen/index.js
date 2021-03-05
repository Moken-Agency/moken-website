import React from "react";
import ImageBlock from "../../components/ImageBlock";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import "./index.scss";
import ColorBlock from "../../components/ColorBlock";
import HeaderSecondType from "../../components/HeaderSecondType";
import TitleSubTwoListCenter from "../../components/TitleSubTwoListsCenter";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import PartnersList from "../../components/PartnersList";

const CommunityPartnerScreen = () => {
  return (
    <div className={"community-partner-screen"}>
      <HeaderSecondType
        title={"COMMUNITY PARTNERS"}
        subtitleClassName={'community-partner-header-title'}
        subtitle={"Building trusted partnerships requires building a true community."}
      />
      <ImageBlock position={"right"} />
      <TitleTwoDescriptions
        mainTitle={"OVERVIEW"}
        title={
            "Innovators, advisors, industry experts, consultants, students, thought leaders, and small businesses whose value goes far beyond their expertise. "}
        firstDescription={`The Community Partner stream of Moken’s Access Partner Program is a reciprocal incentive initiative aimed at harnessing the power of the community. Through the program, Community Partners gain access to Moken's ecosystem, network, and solutions to scale their business, while creating lead-generation possibilities within their own network for Moken.`}
        secondDescription={`This partnership stream is for active individuals and businesses that interact with the startup or entrepreneurial community. Partners gain access to resources, tools, and information to help them grow their brand and business through a deeper relationship within the Moken community.`}
      />

      <LeftInfoWithRightImage
        mainTitle={"WHO ARE COMMUNITY PARTNERS?"}
        title={`True leaders aim to grow communities themselves, and Moken is here to help make that a reality.`}
        description={`Our Community Partners have a wide range of skills, specialties, industries, and forms. They’re individuals, students, entrepreneurs, student groups, freelancers, small to medium-sized businesses, and local influencers who are ready to expand their networks, all while supporting and integrating with startups along the way.`}
        imgUrl={""}
        btnTitle={'BECOME A PARTNER'}
        isLeftImage
      />

      <PartnersList />

      <TitleSubTwoListCenter
        title={"PERKS & BENEFITS"}
        subtitle={`Partnerships are a two-way street that help everyone get where they need to be.`}
        lists={options.lists}
        subtitleClassName={'community-partner-benefits-subtitle'}
      />

        <ColorBlock
            title={"Harness the power of community"}
            subtitle={"APPLY TO PARTNER"}
            withIcon
        />

      <LeftInfoWithRightImage
          withoutRightPadding
        title={"Become a partner and leverage the power of our trusted community."}
        description={
            `We take the time to understand you and your business model to develop action driven, high-performing collaborative strategies. Our avant-garde tactics are cutting edge, blend seamlessly with our partner’s operational realities and goals while eliminatinng unnecessary risks.`
        }
        btnTitle={"BECOME A PARTNER"}
        // imgUrl={""}
      />

      <EmailForm withForm />
    </div>
  );
};

export default CommunityPartnerScreen;
