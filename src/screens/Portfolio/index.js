import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";
import { useHistory } from "react-router-dom";
import Text from "../../components/Text";
import options from "./portfolio-options";
import Startups from "./components/Startups";
import Company from "./components/Company";
import ColorBlock from "../../components/ColorBlock";

const { startups, companies } = options;

const Portfolio = (props) => {
  const { isMobile } = useWindowDimensions();
  let history = useHistory();

  return (
    <div className={"portfolio-container"}>
      <section className={"portfolio-section-info"}>
        <Text
          type={"kMedium"}
          // type={"semiBold"}
          size={16}
          mobSize={14}
          animationType={"fade-in"}
          textStyles={{ letterSpacing: 4 }}
          className={"portfolio-title-first"}
        >
          PORTFOLIO
        </Text>
        <Text
            size={75}
          type={"kBold"}
          animationType={"fade-in"}
          mobSize={45}
          className={"portfolio-title-second"}
        >
          Great ideas driven by amazing people scaling for success.
        </Text>
        <div className={"portfolio-startups-container"}>
          {startups.map((startup, index) => {
            return <Startups {...startup} key={"startups" + index} />;
          })}
        </div>
      </section>

      <div className={"companies-container"}>
        {companies.map((company, index) => {
          return <Company {...company} key={"company portfolio" + index} isLast={companies.length - 1 === index} />;
        })}
      </div>
      <ColorBlock
        title={"Do you want to be the next to make history?"}
        subtitle={"CONNECT WITH US"}
        backgroundColor={"#000"}
        titleClassName={'portfolio-color-block-title'}
        type={"kLight"}
        size={50}
        withIcon
        titleContainerStyles={{lineHeight: '90px'}}
        containerStyles={{marginBottom: 0}}
        onClick={() => history.push('connect-with-us')}
      />
      {/*<section className={'block-container'}>*/}
      {/*    <Text size={isMobile ? '9vw' : '5vw'}*/}
      {/*          type={'thin'}*/}
      {/*          color={'white'}*/}
      {/*          className={'block-container-history'}*/}
      {/*          containerStyles={{width: isMobile ? 'auto' : '40vw'}}>Do you want to be the next to make history?</Text>*/}
      {/*    <Text size={isMobile ? '3vw' : '1.3vw'}*/}
      {/*          type={'semiBold'}*/}
      {/*          className={'block-container-connect'}*/}
      {/*          color={'white'}>CONNECT WITH US</Text>*/}
      {/*</section>*/}
    </div>
  );
};

export default Portfolio;
