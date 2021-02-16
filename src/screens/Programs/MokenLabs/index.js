import React from "react";
import Text from "../../../components/Text";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import Swiper from "../../../components/Swiper";
import Explore from "../../../components/Explore";
import options from "./options";
import "./index.scss";
import SubmitYourResume from "../../../components/SubmitYourResume";
import ColorBlock from "../../../components/ColorBlock";
import CommunityPartner from "../../../components/CommunityPartner";
import EmailForm from "../../../components/EmailForm";
import ProgramDetails from "../components/ProgramDetails";
import TitleTwoDescriptionWithBtn from "../components/TitleTwoDescriptionWithBtn";
import TwoColumnsHugeInfo from "../components/TwoColumnsHugeInfo";
import HugeInfoAllListColumn from "../components/HugeInfoAllListColumn";
import LeftInfoWithRightImage from "../components/LeftInfoWithRightImage";
import OurPartnersComponent from "../components/OurPartnersComponent";
import ProgramColorBlock from "../components/ProgramColorBlock";
import ProgramSwiper from "../components/ProgramSwiper";
import ProgramCommunityListPartner from "../components/ProgramCommunityListPartner";
import HeaderTitle from "../../../components/HeaderTitle";
import HeaderWithBlackInfoBlock from "../../../components/HeaderWithBlackInfoBlock";
import ImageBlock from "../../../components/ImageBlock";
import Mentor from "./Mentor";

const MokenLabs = () => {
  return (
    <div className={"labs-container"}>
      <HeaderWithBlackInfoBlock
        title={"MOKENLABS PROGRAM"}
        subtitle={"Building unforgettable brands for start-ups with ambition."}
        // description={
        //   "Looking for an opportunity to take your career forwards, send your portfolio to careers@mokengroup.com"
        // }
        type={"mokenlabs"}
        blackInfoData={options.programDetailsData}
      />

      <TitleTwoDescriptionWithBtn
        mainTitle={"PROGRAM OVERVIEW"}
        title={
          "A global startup program that fosters and invests in bright and passionate\n" +
          "                    early stage founders with cutting-edge ideas."
        }
        firstText={
          "We provide seed funding, strategic mentorship, a creative workspace, a multitude of perks,\n" +
          "                        entrepreneurship-focused business training, and directly support our startups through an\n" +
          "                        expansive network of partner entities, mentors and investors. We create an environment where\n" +
          "                        you can advance your company an incredible amount in a short period of time."
        }
        secondText={
          "We partner with innovators through our tailored and integrative expertise, complemented\n" +
          "                            by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and\n" +
          "                            impactfully driven outcomes."
        }
      />

      <ProgramSwiper options={options.weeks} />

      <section
        className={"labs-image-first-container"}
        style={{}}
        data-aos="fade-in"
      >
        <img src={""} style={{}} />
      </section>

      <ImageBlock position={"right"} />

      <TwoColumnsHugeInfo
        title={"PROGRAM BENEFITS"}
        leftTitle={
          "Enthusiastic individuals working together to create extraordinary startups"
        }
        rightTitle={
          "Our role consists of taking the time to understand your business model, and suggesting\n" +
          "                        creative and high-performing digital strategies. Our avant-garde tactics are in line with\n" +
          "                        the current market, blend seamlessly with our clients’ operational realities, and eliminate\n" +
          "                        risks that aren’t necessary."
        }
        rightFirstListTitle={"HOW It WORKS"}
        firstList={options.works}
        rightSecondListTitle={"CHOOSE YOUR PURPOSE"}
        secondList={options.purposes}
      />

      <ImageBlock />

      <Title title={"YOUR MENTORS"} className={"labs-global-title"} />

      <section className={"labs-global-container"}>
        <Text
          type={"extraLight"}
          size={55}
          mobSize={35}
          animationType={"fade-in"}
          textStyles={{ letterSpace: 0.5 }}
          className={"labs-global-text-title"}
          containerStyles={{}}
        >
          A global startup program that fosters and invests in bright and
          passionate early stage founders with cutting-edge ideas.
        </Text>

        <div className={"labs-global-list-container"}>
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
             <Mentor/>
            );
          })}
        </div>

        <div className={"labs-partner-guid-container"}>
          <SubmitYourResume
            title={"Moken Partner Program Guide"}
            color={"black"}
            size={34}
          />
        </div>
      </section>

      <ProgramColorBlock
        title={"Looking for the next big thing?"}
        subtitle={"FIND INVESTMENT OPPORTUNITIES"}
      />

      <HugeInfoAllListColumn
        leftTitle={
          "Enthusiastic individuals working together to create\n" +
          "                    extraordinary startups"
        }
        rightTitle={
          "Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.\n" +
          "\n"
        }
        mainTitle={"HOW IT WORKS"}
        rightFirstListTitle={"HOW WE CAN COLLABORATE"}
        firstList={options.works}
        rightSecondListTitle={"LEARN MORE"}
        secondList={options.learnMore}
      />

      <LeftInfoWithRightImage
        title={
          "We are driven by the\n" +
          "passion for working with determined innovators who live to make a change in the world."
        }
        description={
          "We understand that together\n" +
          "                        we should see results, not just reports with the work we do. We've developed tailor-made\n" +
          "                        strategies that assist in beating out the competition by tearing up the rule book.\n" +
          "                        Through our agile approach, entrepreneurs, founders, and startups overcome the odds by\n" +
          "                        predicting, measuring, mitigating, and managing the risk associated with innovation."
        }
        btnTitle={"APPLY TO INCUBATOR"}
        imgUrl={""}
        mainTitle={"WHO IS THIS PROGRAM FOR?"}
      />

      <ProgramCommunityListPartner
        title={"GET INVOLVED"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        options={options.firstPartners}
        onClick={() => {}}
      />

      <OurPartnersComponent />

      <EmailForm withForm />
    </div>
  );
};

export default MokenLabs;
