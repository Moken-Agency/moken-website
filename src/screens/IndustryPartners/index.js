import React, {useState} from "react";
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
import industrySecond from "../../images/industry-partners-second.jpg";
import industryFirst from "../../images/industry-partners-first.jpg";
import industryThird from "../../images/industry-partners-third.jpg";
import Form from "../../components/Form";

const IndustryPartners = () => {
    let history = useHistory();
    const [isFormOpened, setIsFormOpened] = useState(false);

    return (
    <div className={"industry-partners-screen"}>
        <Form isOpen={isFormOpened} setIsOpen={setIsFormOpened} formName={'Partnership Application Form'}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNWRpMITHHWPNhulHQArjTfad7cGcWxGRZdr4XYxPI-3rQTA/viewform?embedded=true" width={'100%'} height="auto" frameborder="0" marginheight="0" marginwidth="0"/>
        </Form>
      <HeaderSecondType
        subtitleClassName={'industry-partners-header-title'}
        title={"INDUSTRY PARTNERS"}
        subtitle={"When the big fish help the little fish, everybody wins."}
        // description={'Together we support purpose-driven, conceptually strong, and visually distinctive startups.'}
      />
      <ImageBlock position={"right"} url={industryFirst} />
      <TitleTwoDescriptions
        mainTitle={"OVERVIEW"}
        title={
            `Influential, active brands and tech companies offering crucial solutions for success to founders and startups throughout the startup ecosystem.`
        }
        firstDescription={
            `Through our Industry Partners stream we partner with established companies who have a deep well of experience in their specific industries. They also possess specialized business transformation expertise to help startups and founders globally overcome challenges by providing integration services and/or complementary solutions.`
        }
        secondDescription={
            `We aim to partner with founder-first organizations. Which is why we go to great lengths to ensure our partners engage with our global portfolio in a meaningful way.`
        }
      />

      <LeftInfoWithRightImage
        mainTitle={"WHO ARE INDUSTRY PARTNERS"}
        title={
            `The best-of-breed tools and services seamlessly integrated within all aspects of Moken.`
        }
        description={
            `With our Industry Partners, we aim to open doors for startups and founders by leveraging our extensive network of established brands. These partners often wield their powers for the greater good while Moken helps startups and founders create connections to take advantage of these established brands.`
        }
        imgUrl={industrySecond}
        btnTitle={'APPLY TO PARTNER'}
        onClick={() => setIsFormOpened(true)}
        isLeftImage
      />

      <PartnersList />


      <TitleSubTwoListCenter
        title={"PERKS & BENEFITS"}
        subtitle={
            `A global startup program that fosters and invests in bright and passionate early stage founders with cutting-edge ideas.`
        }
        subtitleClassName={'industry-perls-subtitle'}
        lists={options.lists}
        // imageList={options.images}
      />

        <ColorBlock
            title={"Industry leaders creating the future."}
            subtitle={"APPLY TO PARTNER"}
            withIcon
            onClick={() => window.open('https://www.dropbox.com/s/h01zxfiov31lwbb/Partner%20Onboarding%20Guide.pdf?dl=0', '_blank')}
        />

      <LeftInfoWithRightImage
        withoutRightPadding
        imageClassName={'industry-last-block-image'}
        titleClassName={'industry-last-image-block-title'}
        descriptionClassName={'industry-last-image-block-description'}
        title={"Join our trusted community of partners and market what you do."}
        description={`Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.`}
        btnTitle={"APPLY TO PARTNER"}
        onClick={() => setIsFormOpened(true)}
        imgUrl={industryThird}
      />

      <EmailForm withForm />
    </div>
  );
};

export default IndustryPartners;
