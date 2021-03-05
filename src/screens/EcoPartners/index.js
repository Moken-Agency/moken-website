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
import HeaderTitle from "../../components/HeaderTitle";
import {useHistory} from "react-router-dom";
import PartnersList from "../../components/PartnersList";

const EcoPartners = () => {
    let history = useHistory();

    return (
    <div className={"eco-partner-screen"}>
      <HeaderSecondType
        subtitleClassName={'eco-partner-header-title'}
        title={"ECOSYSTEM PARTNERS"}
        subtitle={"Hand-picked partners dedicated to developing  synergy in support of startups."}
      />
      <ImageBlock position={"right"} />
      <TitleTwoDescriptions
          titleClassName={'eco-partners-overview-title'}
        mainTitle={"OVERVIEW"}
        title={
            `Accessibility, resource, and education driven programs and organizations powering entrepreneurial endeavours through the startup ecosystem.`
        }
        firstDescription={
            `Through our Ecosystem Partner stream, we collaborate with a global network of community startup programs, accelerators, incubators, and VC firms to help startups scale effectively and efficiently.`
        }
        secondDescription={`We partner with innovators through our tailored expertise, complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven outcomes.`}
      />

      <LeftInfoWithRightImage
        mainTitle={"WHO ARE OUR ECOSYSTEM PARTNERS?"}
        title={
            `Providing incubation, access, and benefits to the most promising startups and founders, together.`
        }
        description={
            `With a focus on diversity and inclusivity, our Ecosystem Partners are enthusiastic organizations working together to help create extraordinary startups. They’re accessiblity focused resource and education-driven programs powering students, founders, and entrepreneurs throughout the startup ecosystem.`
        }
        imgUrl={""}
        isLeftImage
        btnTitle={'BECOME A PARTNER'}
      />


        <PartnersList list={options.partners}/>

        <TitleSubTwoListCenter
            subtitleClassName={'eco-partners-perks-title'}
            title={"PERKS & BENEFITS"}
            subtitle={
                `Seeking partner relationships with those that share our work philosophy and comprehend the importance of collaboration in venture building.`
            }
            lists={options.lists}
      />

        <ColorBlock
            title={"Incubate and accelerate more, together."}
            subtitle={"BECOME A PARTNER"}
            withIcon
            textWidth={834}
            onClick={() => history.push('/our-partners')}
        />


        <LeftInfoWithRightImage
            withoutRightPadding
            title={"Become a partner and set your startups for success."}
            description={`We take the time to understand your program model and collaborate through creative,
             high-performing strategies to ensure the success of all startups within reach. Our avant-garde 
             tactics are cutting edge, blend seamlessly with our partner’s operational realities, and eliminate unnecessary risks.`}
            btnTitle={"BECOME A PARTNER"}
            descriptionClassName={'eco-partners-last-image-block-description'}
            imgUrl={""}
      />

      <EmailForm withForm />
    </div>
  );
};

export default EcoPartners;
