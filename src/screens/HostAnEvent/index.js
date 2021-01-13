import React from "react";
import "./index.scss";
import HeaderTitle from "../../components/HeaderTitle";
import HostImage from "../../images/careers-header.jpg";
import Title from "../../components/Title";
import Text from "../../components/Text";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import Explore from "../../components/Explore";
import Swiper from "../../components/Swiper";
import options from "./options";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const HostAnEvent = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"host-an-event-container"}>
      <HeaderTitle
        title={"HOST AN EVENT"}
        subtitle={"Success fuelled by partnership."}
        description={"Creating an unmatched global ecosystem, together."}
      />

      <img src={HostImage} className={"host-an-event-header-container"} />

      <TitleTwoDescriptions
        mainTitle={"OVERVIEW"}
        title={
          "A global startup program that fosters and invests in bright and passionate " +
          "early stage founders with cutting-edge ideas."
        }
        firstDescription={
          "We provide seed funding, strategic mentorship, a creative workspace, " +
          "a multitude of perks, entrepreneurship-focused business training, and directly support " +
          "our startups through an expansive network of partner entities, mentors and investors." +
          " We create an environment where you can advance your company an incredible amount in " +
          "a short period of time."
        }
        secondDescription={
          "We partner with innovators through our tailored and integrative " +
          "expertise, complemented by a vibrant ecosystem of game-changing partners to deliver " +
          "accelerated, superior, and impactfully driven outcomes."
        }
      />
      <Title title={"COLLABORATIVE OPPORTUNITIES"} />
      <Text
        className={"host-an-event-subtitle"}
        size={55}
        mobSize={35}
        animationType={"fade-in"}
        type={"extraLight"}
      >
        An event designed for any budget, goal, and community.
      </Text>

      <Swiper className={"community-swiper-container"}>
        {options.swiperData.map((option, index) => {
          return <Explore {...option} key={"explore " + index} />;
        })}
      </Swiper>

      <ColorBlock
        size={30}
        type={"thin"}
        className={"host-an-event-color-block"}
        title={"Looking for the next big thing?"}
        subtitle={"APPLY NOW"}
        backgroundColor={"#263da8"}
        withIcon
      />

      <TitleTwoDescriptions
        mainTitle={"BRING US TO YOU"}
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

      <div className={"central-container-with-info"}>
        <Text
          className={"central-title"}
          type={"semiBold"}
          size={14}
          mobSize={10}
        >
          HOW WE HELP
        </Text>
        <div className={"central-sub-container"}>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
            — We will create an Eventbrite page
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
            — Verbal & written communications
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
            — Venue & logistics management Negotiation & buget management Public
            Relations
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
            — Flexible fee structures
          </Text>
        </div>
      </div>

      <div className={"central-container-with-info"}>
        <Text
          className={"central-title"}
          type={"semiBold"}
          size={14}
          mobSize={10}
        >
          REQUIREMENTS
        </Text>
        <div className={"central-sub-container"}>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
            — Provide target market
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
            — Provide access to your desired invite list
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
            — Provide us your desired budget
          </Text>
        </div>
      </div>

      <ColorBlock
        title={"Ready to collaborate?"}
        type={"thin"}
        subtitle={"GET INVOLVED"}
        size={75}
        backgroundColor={"#000"}
      />

      <EmailForm withForm />
    </div>
  );
};

export default HostAnEvent;
