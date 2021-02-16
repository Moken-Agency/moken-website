import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import "./index.scss";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ForStudents = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"for-students-container"}>
      <HeaderTitle
        title={"FOR STUDENTS"}
        subtitle={"Leverage your potential."}
        description={
          `The future generation is the core of our community. We work together to create a future that is better than the last.`
        }
        marginBottom={isMobile ? 107 : 107}
      />

      <ImageBlock position={"right"} />

      <LeftInfoWithRightImage
        title={
          `Fast track yourself 
in pursuit of success.`
        }
        mainTitle={"ACCESS YOUR POTENTIAL"}
        description={`The Access Network is an exclusive, invite-only network built for ambitious humans. It’s a place where aspiring entrepreneurs, founders, startups, industry experts, side-hustlers, freelancers, and investors ask questions, exchange ideas, share resources, and connect with one another. Leverage the network to help make better, well-informed decisions about the things that are most important to you & your future. `}
        btnTitle={"JOIN THE NETWORK"}
      />

      <LeftInfoWithRightImage
        title={
          "Gain leadership skills, hands on experience, and unlock opportunity."
        }
        mainTitle={"AMBASSADOR PROGRAM"}
        description={`Get ready to join the next generation of startups, or even unlock the opportunity to create your own. Through our Ambassador Program we hand students the reins to create their own future by bridging the gap between educational environments and the fast paced business world. We help students create connections to fast track careers while becoming a leader on campus by providing opportunities for the entire student body.`}
        btnTitle={"LEARN MORE"}
        isLeftImage
      />

      <ColorBlock
        title={"StartupSmart Podcast"}
        subtitle={"LISTEN IN SPOTIFY"}
        withIcon
        textColor={"black"}
        backgroundColor={"grey"}
      />

      <LeftInfoWithRightImage
        title={"Education is the core of growth where knowledge drives innovation forwards."}
        mainTitle={"ON DEMAND LEARNING"}
        description={`Access learning modules, startup focused resources, and educational opportunities developed to help you level up using our curated library of courses, webinars, and other actionn driven materials designed to help validate, build, and grow in all areas of a startup.`}
        btnTitle={"EXPLORE COURSES"}
      />

      <ProgramCommunityListPartner
        title={"PROGRAMS"}
        subtitle={
          "Supporting the growth, health, and impact of new ventures by equipping student innovators with the tools and resources needed for success."
        }
        type={"big"}
        options={options.programs}
      />

      <TwoColumnsHugeInfo
        title={"MOKEN AGENCY"}
        leftTitle={
          "Enthusiastic individuals working together to create extraordinary startups."
        }
        // rightTitle={
        //   "From ideation stage to high growth innovation, our role consists of taking the time to understand your business model, suggest creative and high-performing strategies, while implementing crucial aspects to supplement your growing needs. Our avant-garde tactics are in line with the current market, blending seamlessly with each startup’s operational realities, while eliminating risks that aren’t necessary.\n" +
        //   "\n"
        // }
        rightFirstListTitle={"HOW WE CAN COLLABORATE"}
        firstList={options.collaborates}
        rightSecondListTitle={"CHOOSE YOUR PURPOSE"}
        secondList={options.purposes}
        secondListWithIcon
      />

      <EmailForm withForm />
    </div>
  );
};

export default ForStudents;
