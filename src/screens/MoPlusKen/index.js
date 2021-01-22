import React from "react";
import "./index.scss";
import HeaderTitleWithImg from "../../components/HeaderTitleWithImg";
import Title from "../../components/Title";
import Text from "../../components/Text";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import options from "./options";
import ColorBlock from "../../components/ColorBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import EmailForm from "../../components/EmailForm";
import Something from "./Something";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import background from "../../images/careers-peopple.png";

const MoPlusKen = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"mo-ken-container"}>
      <HeaderTitleWithImg
        title={"LET’S COLLABORATE"}
        subtitle={"Work with Mo + Ken"}
        withHeaderTitleWithImg
        color={"white"}
        className={"mo-ken-header"}
        imgURL={""}
        backgroundImage={background}
      />

      <section className={"mo-ken-overview"}>
        <Title title={"OVERVIEW"} className={"mo-ken-overview-title"} />
        <div className={"mo-ken-overview-main"}>
          <Text
            className={"mo-ken-overview-subtitle"}
            animationType={"fade-in"}
            size={55}
            mobSize={35}
            type={"extraLight"}
          >
            We increase website leads, maximize revenu and produce a positive
            ROI — validated with measurable results.
          </Text>
          <Text
            className={"mo-ken-overview-description"}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            size={20}
            animationType={"fade-in"}
            mobSize={16}
            type={"light"}
          >
            People do not simply buy products or services, they buy brands with
            a purpose. By providing unique brand experiences, a startup is able
            to effectively convert potential users into brand ambassadors and
            differentiate themselves at an early stage from competitors. At
            Kenergy, we work directly with founders to create brands that defy
            the odds, defeat big competition and disrupt their industries.
          </Text>
        </div>
        <img src={""} data-aos="fade-in" />
      </section>

      <TwoColumnsHugeInfo
        title={"HOW WE CAN COLLABORATE"}
        leftTitle={
          "Enthusiastic individuals working together to create extraordinary startups"
        }
        rightTitle={
          "Our role consists of taking the time to understand your business model, " +
          "and suggesting creative and high-performing digital strategies. Our avant-garde tactics " +
          "are in line with the current market, blend seamlessly with our clients’ operational " +
          "realities, and eliminate risks that aren’t necessary."
        }
        rightFirstListTitle={"HOW WE HELP"}
        firstList={options.helps}
        rightSecondListTitle={"REQUIREMENTS"}
        secondList={options.requirements}
        secondListLikeFirst
      />

      <ColorBlock
        className={"mo-ken-color-block"}
        title={"Looking for the next big thing?"}
        subtitle={"APPLY NOW"}
        withIcon
        type={"thin"}
        size={30}
        backgroundColor={"grey"}
        textColor={"black"}
      />

      <LeftInfoWithRightImage
        title={"Join our trusted community of partners and market what you do."}
        description={
          "Our role consists of taking the time to understand your business model," +
          " and suggesting creative and high-performing digital strategies. Our avant-garde " +
          "tactics are in line with the current market, blend seamlessly with our clients’ " +
          "operational realities, and eliminate risks that aren’t necessary."
        }
        btnTitle={"APPLY TO INCUBATOR"}
        imgUrl={""}
      />


      <TitleTwoDescriptions
        mainTitle={"CONFERENCES & KEYNOTES"}
        title={
          "A global startup program that fosters and invests in bright and passionate early stage founders with cutting-edge ideas."
        }
        firstDescription={
          "We provide seed funding, strategic mentorship, a creative workspace, a multitude of perks, entrepreneurship-focused business training, and directly support our startups through an expansive network of partner entities, mentors and investors. We create an environment where you can advance your company an incredible amount in a short period of time."
        }
        secondDescription={
          "We partner with innovators through our tailored and integrative expertise, complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven outcomes."
        }
      />

      <div>
        {options.something.map((data, index) => {
          return <Something {...data} key={"something" + index} />;
        })}
      </div>

      <EmailForm withForm />
    </div>
  );
};

export default MoPlusKen;
