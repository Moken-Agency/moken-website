import React, { useState } from "react";
import "./index.scss";
import Text from "../../components/Text";
import Title from "../../components/Title";
import options from "./options";
import Opportunity from "../../components/Oppurtunity";
import Subtitle from "../../components/Subtitle";
import Benefit from "./components/Benefit";
import Description from "../../components/Description";
import SubmitYourResume from "../../components/SubmitYourResume";
import { useHistory } from "react-router-dom";
import CareersMobImg from "../../images/careersMob.png";
import ImagePeople from "../../images/careers-peopple.png";
import ImagePeopleHeader from "../../images/careers-header.jpg";
import CareersCircles from "../../images/careers-circles.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HeaderTitle from "../../components/HeaderTitle";
import TitleShortListWithBtn from "../../components/TitleShortListWithBtn";
import Button from "../../components/Button";
import ImageBlock from "../../components/ImageBlock";

const Careers = () => {
  const history = useHistory();
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"careers-container"}>
      <HeaderTitle
        title={"CAREERS"}
        descriptionClassName={'careers-header-description'}
        subtitleClassName={'careers-header-subtitle'}
        description={`At Moken we’re powered by people and elevated by technology. If you’re looking 
                         for an opportunity to take your career to the next level, join us and help create change with 
                         the global brands of tomorrow.`}
        subtitle={`A team of experts who learn by doing.`}
        marginBottom={isMobile ? 99 : 207}
      />

      <ImageBlock url={ImagePeopleHeader} className={'careers-first-image-block'}/>

      <TitleShortListWithBtn title={'NEW OPPORTUNITIES'}
                             subtitle={'We’re hiring. If something piques your interest, let us know.'}
                             list={options.opportunities}
                             btnTitle={'SEE ALL OPPORTUNTITIES'}
                             listItemBtnTitle={'VIEW JOB'}
                             btnType={'default'}
                             // containerStyles={{marginBottom: 205}}
                             btnOnClick={() => history.push("/opportunities")}
      />

      <section className={"careers-third-section"}>
        <img src={CareersCircles} className={"circles"} />
        <Title className={"careers-third-title"} title={"BENEFITS & PERKS"} />
        <div className={"careers-third-container"}>
          <Subtitle
            subtitle={
              "Discover why our team is the reason our community keeps coming back for more.\n"
            }
            mobSize={35}
            className={"careers-third-subtitle"}
          />
          <div className={"benefits-container"}>
            {options.benefits.map((benefit, index) => {
              return <Benefit {...benefit} key={index + "benefits"} />;
            })}
          </div>
        </div>
      </section>

      <section className={"careers-forth-section"}>
        <div className={"careers-black-block-container"}>
          <div className={"careers-black-block-left-container"}>
            <img className={"careers-mob-img"} src={CareersMobImg} />
            <Title
              size={12}
              className={"careers-black-block-title"}
              title={"TAKE A CHANCE"}
              color={"white"}
            />
            <Subtitle
              mobSize={35}
              type={'kBold'}
              subtitle={"We would still love to hear from you"}
              color={"white"}
            />
            <Description
              color={"white"}
              mobSize={16}
              size={20}
              type={'kLight'}
              // size={"1vw"}
              textStyles={{lineHeight: isMobile ? null : '30px'}}
              description={[
                {
                  title:
                    "Not everyone fits into a pre-defined job description. Whether you’re a professional ostrich babysitter or an expert developer, we look for unconventional excellence. Tell us how you think you can contribute.",
                },
                {
                  title:
                    "Who knows, maybe you’re exactly what we’ve been looking for all along.",
                },
              ]}
            />
            {/*<Text size={22} type={'semiBold'} color={'white'}  className={'text-submit'}>Submit you resume</Text>*/}
            <Button title={'SUBMIT YOUR RESUME'}
                    backgroundColor={'black'}
                    borderType={'bordered'}
                    onClick={() => window.open('mailto:careers@mokenstartups.com', '_blank')}
            />
            {/*<SubmitYourResume onClick={() => alert("submot resume")} />*/}
          </div>
          <div className={"careers-black-block-right-container"}>
            <img src={ImagePeople} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
