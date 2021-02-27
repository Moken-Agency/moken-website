import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import "./styles.scss";
import Title from "../../components/Title";
import Text from "../../components/Text";
import options from "./options";
import Belief from "./Belief";
import Value from "./Value";
import ColorBlock from "../../components/ColorBlock";
import IterableCircle from "../../components/IterableCircle";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../../components/ImageBlock";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import HugeInfoAllListColumn from "../Programs/components/HugeInfoAllListColumn";
import LeftImageTitleSubDesList from "../../components/LeftImageTitleSubDesList";
import ourVisionHeader from '../../images/our-vision-header.jpg';

const OurVision = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"our-vision-container"}>
      <HeaderTitle
        marginBottom={142}
        title={"OUR VISION"}
        subtitleClassName={'our-vision-header-subtitle'}
        descriptionClassName={'our-vision-header-description'}
        subtitle={"Building brands & transforming ideas."}
        description={
          `Built to support founders, Moken creates diversified opportunities for startups and founders 
          driving economic and social impact, globally. We strive to create an experience that transforms growth potential.`
        }
      />

      <ImageBlock position={"right"} url={ourVisionHeader}/>

      <TwoColumnsHugeInfo
          containerStyles={{marginBottom: 100}}
        title={"OUR BELIEFS"}
        leftTitle={
          "Empowering one another in creating change around the world."
        }
        rightTitle={`We join founders in looking at the world differently. Which is why startups, entrepreneurs, and
         global industry leaders come to us to solve defining challenges. We integrate and work alongside supporting
          innovative ideas through paving the way for success. We have a shared ambition to achieve extraordinary
           results, outperform the competition, and redefine industries through disruption.`}
        rightFirstListTitle={""}
        firstList={options.beliefs}
      />

      <LeftImageTitleSubDesList
        imgUrl={""}
        title={"OUR VALUES"}
        subtitle={"We make it easy to kickstart your vision."}
        list={options.values}
        description={`Through developing curated solutions and opportunities within varied industries, our mission is 
        to build relationships, create change, and empower the future by providing startups and founders access to
         everything they need to make an impact.`}
      />

      <ColorBlock
        title={"See our impact in action?"}
        subtitle={"CHECK OUT OUR PORTFOLIO"}
        withIcon
        backgroundColor={"black"}
        blockType={'middle'}
      />

      {/*<Title title={"HOW IT WORKS"} className={"vision-works-title"} />*/}

      {/*<section className={"vision-works-container"}>*/}
      {/*  <div className={"vision-circles-list-container"}>*/}
      {/*    {options.works.map((join, index) => {*/}
      {/*      return (*/}
      {/*        <IterableCircle*/}
      {/*          {...join}*/}
      {/*          key={"join" + index}*/}
      {/*          count={index + 1}*/}
      {/*          isLast={index === options.works.length - 1}*/}
      {/*        />*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*  <img src={""} className={"vision-works-image"} />*/}
      {/*</section>*/}

      <EmailForm withForm />
    </div>
  );
};

export default OurVision;
