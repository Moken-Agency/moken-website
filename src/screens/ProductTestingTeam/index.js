import React, {useState} from "react";
import Text from "../../components/Text";
import "./index.scss";
import Title from "../../components/Title";
import options from "./options";
import IterableCircle from "../../components/IterableCircle";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import ProductTestingTeamCircles from "../../images/product-team.svg";
import ProductTestingTeamCircle from "../../images/product-team-second.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import HeaderSecondType from "../../components/HeaderSecondType";
import ImageBlock from "../../components/ImageBlock";
import SecondImage from "../../images/product-testing-team-second.jpg";
import Form from "../../components/Form";

const { benefits, joins } = options;

const ProductTestingTeam = () => {
  const { isMobile } = useWindowDimensions();
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [isFormSecondOpened, setIsFormSecondOpened] = useState(false);
const   programs =  [
        {
            onClick: () => setIsFormSecondOpened(true),
            btnTitle: 'APPLY NOW',
            title: `Apply to Join
the Team`,
            subtitle:
                "Applications to be a part of our testing club will be accepted for a limited time as we are keeping this small and exlusive.",
        },
    {
        onClick: () => setIsFormOpened(true),
        title: `For Founders 
& Startups`,
        subtitle:
    "Fine-tune, prototype, and market test your (MVP) to validate and pivot to ensure an effective market launch.",
        btnTitle: "SUBMIT PRODUCT",
},
];

    return (
    <div className={"product-testing-team-container"}>
        <Form isOpen={isFormOpened} setIsOpen={setIsFormOpened} formName={'Product Submission'}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeALURes1nU__f11QjZbs7-jytQY6CsWd9OcS2Ed5mCKd7sSw/viewform?embedded=true" width={'100%'} height="auto" frameborder="0" marginheight="0" marginwidth="0"/>
        </Form>
        <Form isOpen={isFormSecondOpened} setIsOpen={setIsFormSecondOpened} formName={'Product Testing Club Application'}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdQGMqBrkeuzm4ab7ptFzVQsqppk-QfSRF8pCfo5aBtC5F_uw/viewform?embedded=true" width={'100%'} height="auto" frameborder="0" marginheight="0" marginwidth="0"/>
        </Form>
      <HeaderSecondType
        title={"PRODUCT TESTING TEAM"}
        subtitleClassName={'product-testing-header-subtitle'}
        subtitle={
          "The power to test what is impossible with exclusive user testing."
        }
      />
      <div className={"product-testing-info-container"}>
        <div className={"circle-container"}>
          <img src={ProductTestingTeamCircles} />
        </div>

        <TwoColumnsHugeInfo
            containerStyles={{marginBottom: isMobile ? 170 : 0}}
          title={"TEAM OVERVIEW"}
            leftTitleClassName={'product-testing-team-left-title'}
          leftTitle={
            "Be a part of something bigger, while gaining access to the future."
          }
          rightTitle={`As a Moken product club member, you'll join a group of tech-savvy members spread across the globe, to get early access and contribute to new tech products created by our members.`}
          rightFirstListTitle={"THE BENEFITS OF COLLABORATION"}
          firstList={benefits}
        />
        <ImageBlock position={"right"} url={SecondImage} />
      </div>

      {/*<div className={"product-testing-team-circle-container"}>*/}
      {/*  <img src={ProductTestingTeamCircle} />*/}
      {/*</div>*/}

      <ProgramCommunityListPartner
        title={"LET’S BUILD"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        subtitleClassName={'product-testing-programs-subtitle'}
        options={programs}
        type={'big'}
      />

      <EmailForm withForm className={"product-email-form"} />
    </div>
  );
};

export default ProductTestingTeam;
