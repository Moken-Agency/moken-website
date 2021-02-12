import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import TitleRowSubDes from "../../components/TitleRowSubDes";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import "./index.scss";
import LeftImageTitleSubDesList from "../../components/LeftImageTitleSubDesList";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import HeaderDoubleTitleSubtitleDescription from "../../components/HeaderDoubleTitleDescription";
import TitleSubDescription from "../../components/TitleSubDescription";
import Advisor from "./Advisor";

const Advisors = () => {
  return (
    <div className={"advisors-container"}>
      <HeaderDoubleTitleSubtitleDescription titleFirst={'EXPERTISE'}
                                            titleConjunctions={'//'}
                                            titleSecond={'STRATEGY & ADVISORY'}
                                            subtitle={'Defining direction through expertise & experience'}
                                            description={'Gain unparalleled access to specialized advisors and experts ' +
                                            'curated to support the ideation, build, and growth of your startup.'}
      />

      <TitleSubDescription title={'OVERVIEW'}
                           subtitle={'Supercharge your business with the expertise and knowledge you need to succeed.'}
                           description={'Moken advisors are dedicated industry experts and seasoned entrepreneurs driven by providing startups with transparent, comprehensive, insightful advisory that unlocks value at every stage.'}
                           containerStyles={{marginBottom: 150}}
      />

      <div className={'advisors-partners-list-container'}>
          {
            options.advisors.map((advisor, index) => {
                return (
                        <Advisor {...advisor}  key={index + 'advisor'}/>
                )
            })
          }
      </div>

      <EmailForm withForm/>


    </div>
  );
};

export default Advisors;
