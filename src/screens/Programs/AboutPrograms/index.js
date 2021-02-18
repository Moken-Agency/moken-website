import React from "react";
import "./index.scss";
import HeaderTitle from "../../../components/HeaderTitle";
import options from "./options";
import TitleSubDescRounded from "./TitleSubDescRounded";
import LeftInfoWithRightImage from "../components/LeftInfoWithRightImage";
import TwoColumnsHugeInfo from "../components/TwoColumnsHugeInfo";
import ProgramColorBlock from "../components/ProgramColorBlock";
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import CommunityPartner from "../../../components/CommunityPartner";
import TitleText from "../../../components/TitleText";
import CoursesComponent from "../components/CoursesComponent";
import InfoImgCompany from "../components/InfoImgCompany";
import OurPartnersComponent from "../components/OurPartnersComponent";
import EmailForm from "../../../components/EmailForm";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import AboutProgram from "./AboutProgram";
import BigDataSquares from "../../../components/BigDataSquares";
import Button from "../../../components/Button";

const AboutPrograms = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"about-programs-container"}>
      <HeaderTitle
        title={"MOKEN PROGRAMS"}
        subtitle={"Where Startups learn & evolve."}
        description={"We create better futures through innovation. Shall we start something extraordinary?"}
        marginBottom={isMobile ? 243 : 179}
      />

      <section className={"about-programs-partnerships-container"}>
        {options.partnerships.map((partnership, index) => (
          <TitleSubDescRounded
            {...partnership}
            key={"TitleSubDescRounded" + index}
          />
        ))}
      </section>

      <LeftInfoWithRightImage
        title={
          "Enthusiastic individuals working together to create extraordinary startups"
        }
        description={
            `Dubai Future Accelerators (DFA), an initiative by Dubai Future Foundation, facilitates the collaboration between government entities and private sector organizations with start-ups, scale-ups, and innovative SMEs from around the world to co-create solutions for future challenges. DFA’s fall program is hosted in collaboration with Dubai Roads and Transport Authority, Dubai Electricity and Water Authority, Dubai Health Authority and Etisalat Digital.
We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet projects. We deliver unconventional solutions, combining the most advanced web technologies, modern design and bold communication. For us, each project is a meaningful adventure, in which we become partners with our clients, on the road to perfection.
Our community of practice operates through high-touch programs, robust content, and a global portfolio of redemptive business & nonprofit ventures.`
        }
        mainTitle={"PROGRAMS OVERVIEW"}
        isLeftImage
      />

      <TwoColumnsHugeInfo
        title={"THE EXPERIENCE"}
        leftTitle={
          "Enthusiastic individuals working together to create extraordinary startups"
        }
        rightTitle={
          `Uninhibited thinking. Great ideas need to be created freely. There are no rules or formulas or meticulously complicated planning. We are people who understand the nuances of society’s underbelly, and express them, cultivated by the collective experiences of the party.`
        }
        rightFirstListTitle={"Venture Development Process"}
        firstList={options.experiences}
      />

      <ProgramColorBlock
        title={"Looking for the next big thing?"}
        subtitle={"FIND INVESTMENT OPPORTUNITIES"}
      />

      <LeftInfoWithRightImage
        title={"Our connecting network comes together to foster your projects, give them wings and believe in the success."}
        description={
          "Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary."
        }
      />

      <section className={"about-programs"}>
        <Title title={"THE PROGRAMS"} className={"about-programs-title"} />
        <div className={"about-programs-block"}>
          <Text
            className={"about-program-text"}
            size={55}
            mobSize={35}
            animationType={"fade-in"}
            type={"kBold"}
            // type={"extraLight"}
          >
            Join our trusted community of partners and market what you do to
            founders and startups, globally.
          </Text>
          <div className={"about-programs-list"}>
            {options.programs.map((data, index) => (
              <BigDataSquares
                key={"BigDataSquares programmes" + index}
                {...data}
              />
            ))}
          </div>
        </div>
      </section>

      <CoursesComponent />

      <InfoImgCompany
        mainTitle={"CREATING THE FUTURE"}
        title={
          "We are driven by the passion for working with determined innovators who live to make a change in the world."
        }
        subtitle={
          "We understand that together we should see results, not just reports with the work we do. We've developed tailor-made strategies that assist in beating out the competition by tearing up the rule book. Through our agile approach, entrepreneurs, founders, and startups overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation. "
        }
        startUpName={"Startup Name"}
        founderName={"FOUNDER NAME"}
        founderTitle={"FOUNDER TITLE"}
      />

      <section className={"about-programs"}>
        <Title title={"THE PROGRAMS"} className={"about-programs-title"} />
        <Text
          className={"about-program-text"}
          animationType={"fade-in"}
          size={55}
          mobSize={35}
          type={"kBold"}
        >
          Join our trusted community of partners and market what you do to
          founders and startups, globally.
        </Text>
        <div className={"about-programs-list three-fr"}>
          {options.programsSecond.map((program, index) => {
            return (
              <CommunityPartner
                {...program}
                containerStyles={{
                  // width: 90 / options.programs.length + "vw",
                }}
              />
            );
          })}
        </div>
      </section>

      <OurPartnersComponent
        title={"PROGRAM ALUMNI"}
        text={
          "You’re in good company, we’ve worked with startups across a range of verticals"
        }
      />

      <section className={"about-programs-programs"}>
        <Title
          title={"THE PROGRAMS"}
          containerStyles={{ padding: 0, marginBottom: isMobile ? 50 : 124 }}
        />
        <div
            className={'about-program-numbers-container'}
          // style={{
          //   paddingLeft: isMobile ? 0 : 50,
          //   display: "flex",
          //   flexDirection: isMobile ? "column" : "row",
          // }}
        >
          <Text
            type={"kBold"}
            containerStyles={{
              marginRight: isMobile ? 0 : 130,
              alignItems: "flex-start",
              marginBottom: isMobile ? 88 : 0,
            }}
            size={55}
            animationType={"fade-in"}
            mobSize={35}
          >
            We’re hiring. If something piques your interest, let us know.
          </Text>
          <div className={"about-program-item-container"}>
            <AboutProgram
              containerStyles={{ marginRight: isMobile ? 0 : 138 }}
              title={"120"}
              text={"This is a statistic note on someone"}
            />
            <AboutProgram
              title={"120"}
              text={"This is a statistic note on someone"}
            />
            <AboutProgram
              containerStyles={{ marginRight: isMobile ? 0 : 138 }}
              title={"120"}
              text={"This is a statistic note on someone"}
            />
            <AboutProgram
              title={"120"}
              text={"This is a statistic note on someone"}
            />
          </div>
        </div>
      </section>

      <EmailForm withForm />
    </div>
  );
};

export default AboutPrograms;
