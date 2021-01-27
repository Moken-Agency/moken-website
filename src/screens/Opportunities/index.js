import React from "react";
import Text from "../../components/Text";
import Subtitle from "../../components/Subtitle";
import "./index.scss";
import options from "./options";
import Opportunity from "../../components/Oppurtunity";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitYourResume from "../../components/SubmitYourResume";
import "reactjs-popup/dist/index.css";
import OpportunitiesImage from "../../images/opportunities.jpg";
import HeaderSecondType from "../../components/HeaderSecondType";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../../components/ImageBlock";
import OpportunitiesPeopleLeadershipEmailComponent from "../../components/OpportunitiesPeopleLeadershipEmailComponent";

const Opportunities = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"opportunities-container"}>
      {/*<ReportBug />*/}
      {/*<Form/>*/}
      {/* <section className={'opportunities-title-container'}>*/}
      {/*     <Text type={'semiBold'} size={'1vw'} className={'main-title'}>CAREER OPPORTUNITIES</Text>*/}
      {/*     <Subtitle size={'4.15vw'} subtitle={'Work that matters.'} type={'thin'} className={'subtitle'}/>*/}
      {/* </section>*/}

      <HeaderSecondType
        title={"CAREER OPPORTUNITIES"}
        subtitle={"Together, we’ll do things that make an impact."}
        marginBottom={isMobile ? 12 : 146}
      />

      <section className={"opportunities-image-block-container"}>
        <img src={OpportunitiesImage} className={"opportunities-image-block"} />
      </section>
      <Subtitle
        className={"opportunities-second-title"}
        size={"3.1vw"}
        subtitle={
          "We hire people that can hit the ground running," +
          " but you won’t be alone, we’re here to help you make an impact."
        }
      />
      <div className={"opportunities-list-container"}>
        {options.map((opportunity, index) => {
          return (
            <Opportunity
              {...opportunity}
              key={index + "opportunities"}
              width={"71vw"}
              isFirst={index === 0}
              stylesContainer={{ padding: "2vw 5vw", borderColor: "#efefef" }}
            />
          );
        })}
      </div>

        <OpportunitiesPeopleLeadershipEmailComponent
            title={'UNLIMITED OPPORTUNITIES'}
            subtitle={"Not exactly what you were looking for?"}
            description={"The Moken team is growing at a rapid pace, to stay in the loop and\n" +
            "            explore ways to work together join our mailing list to never miss a\n" +
            "            beat."}
            imgURL={' '}
        />
    </div>
  );
};

export default Opportunities;
