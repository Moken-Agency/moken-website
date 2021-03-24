import React from "react";
import "./index.scss";
import Text from "../../components/Text";
import FirstImage from "../../images/package-first.svg";
import SecondImage from "../../images/package-second.svg";
import Title from "../../components/Title";
import EmailForm from "../../components/EmailForm";
import options from "./options";
import Package from "./components/Package";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import startupSmartPackageFirst from '../../images/startupsmartpackages-first@2x.png';
import startupSmartPackageSecond from '../../images/startupsmartpackages-second@2x.png';
import productTestingTeam from '../../images/product-testing-team-second.jpg';
import TitleSubDescription from "../../components/TitleSubDescription";
import projectImages from "../../images/projects";


const { packages } = options;

const StartUpSmart = () => {
  return (
    <div className={"start-up-smart-container"}>
      <HeaderTitle
        title={"STARTUPSMART PACKAGES"}
        subtitleClassName={'start-up-smart-header-subtitle'}
        subtitle={"Building unforgettable brands for start-ups with ambition."}
      />

      {/*<div className={'start-up-smart-second'}>*/}
      {/*    <img src={FirstImage} />*/}
      {/*</div>*/}
      <ImageBlock position={"left"} url={startupSmartPackageFirst} />

      <TitleSubDescription
        descriptionClassName={'startup-packages-description'}
        subtitleClassName={'startup-packages-subtitle'}
        title={"STARTING UP SMART"}
        subtitle={`A la cartè packages specifically designed for early stage startups executed by experts.`}
        description={`Our startup-smart packages are designed to help entrepreneurs kickstart their vision - up branding 
        and marketing on digital platforms to a higher standard. With our network connections faster helping foster
         your projects, giving them wings to commit to your business success.`}
        // btnTitle={"GET IN TOUCH"}
      />

      <Title
        className={"start-up-smart-third-title"}
        title={"STARTING UP SMART"}
      />

      {/*<div className={'start-up-smart-third'}>*/}
      {/*    <Text mobSize={35}*/}
      {/*          animationType={'fade-in'}*/}
      {/*          className={'start-up-smart-third-text-first'}*/}
      {/*          type={'extraLight'}*/}
      {/*          size={'3vw'}>We increase website leads, maximize revenu and produce a positive ROI — validated*/}
      {/*        with measurable results.</Text>*/}
      {/*    <Text mobSize={16}*/}
      {/*          className={'start-up-smart-third-text-second'}*/}
      {/*          type={'light'}*/}
      {/*          size={'1.5vw'}>People do not simply buy products or services, they buy brands with a purpose.*/}
      {/*        By providing unique brand experiences, a startup is able to effectively convert potential users*/}
      {/*        into brand ambassadors and differentiate themselves at an early stage from competitors. At Kenergy,*/}
      {/*        we work directly with founders to create brands that defy the odds, defeat big competition and*/}
      {/*        disrupt their industries.  </Text>*/}
      {/*    <Text mobSize={12}*/}
      {/*          className={'start-up-smart-third-text-third'}*/}
      {/*          type={'semiBold'}*/}
      {/*          size={'1vw'}>GET IN TOUCH</Text>*/}
      {/*</div>*/}

      <ImageBlock position={"right"} url={startupSmartPackageSecond} />

      <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className={"start-up-smart-fifth"}>
              <Text
                  mobSize={10}
                  animationType={"fade-in"}
                  className={"start-up-smart-fifth-text-first"}
                  size={16}
                  type={'kRegular'}
              >
                  STARTUP PACKAGES
              </Text>
              <Text
                  mobSize={35}
                  animationType={"fade-in"}
                  className={"start-up-smart-fifth-text-second"}
                  type={"kBold"}
                  size={50}
              >
                  We make it easy to kickstart your vision.
              </Text>
              <Text
                  mobSize={16}
                  className={"start-up-smart-fifth-text-third"}
                  animationType={"fade-in"}
                  type={"kLight"}
                  size={20}
              >
                  With packages at a startup price point, we work with founders and
                  ideators with high growth potential. We're passionate about big ideas
                  and working with people who feel the same.
              </Text>
          </div>
      </div>

      <div className={"packages-container"}>
        {packages.map((packageItem, index) => {
          return <Package {...packageItem} key={"package" + index} />;
        })}
      </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div>
            <div className={"start-up-smart-sixth"}>
                <Text
                    mobSize={10}
                    size={16}
                    animationType={"fade-in"}
                    className={"start-up-smart-sixth-text-first"}
                    type={"kSemiBold"}
                >
                    TRUSTED BY
                </Text>
                <Text
                    mobSize={35}
                    size={50}
                    textStyles={{letterSpacing: .45}}
                    animationType={"fade-in"}
                    className={"start-up-smart-sixth-text-first"}
                    type={"kBold"}
                >
                    We push boundaries, question assumptions and get results. Ready?
                </Text>

            </div>
            <div className={"boundaries-container"}>
                {options.projectImages.map((projectImage) => {
                    return (
                        <div>
                            <img src={projectImage} />
                        </div>
                    );
                })}
            </div>
        </div>

    </div>



      <EmailForm withForm />
    </div>
  );
};

export default StartUpSmart;
