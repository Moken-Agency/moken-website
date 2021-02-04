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
        subtitle={"Value through inspiration & education."}
        description={"We partner alongside organizations to develop and create meaningful brand experiences and unforgettable events that expand beyond traditional tactics and focus on audience engagement and strategy."}
      />

      <img src={HostImage} className={"host-an-event-header-container"} />

      <TitleTwoDescriptions
        mainTitle={"OVERVIEW"}
        title={
          `Making the power of brand experience accessible to any brand, no matter what the budget. We strive to create value for every person in attendance at your event.`
        }
        firstDescription={
          `We champion the creation of ‘big idea’ experiential that can lead multi-channel campaigns with exciting and shareable experiences.
We are passionate about developing more immersive and creative experience-driven solutions for brands and retailers across pop-ups, shop-in-shop, windows, VM and POS.
Digital engagements are integral to the experiences we create; be it a simple photo experience, interactive shop windows or an immersive VR world, connecting the physical to digital is essential.
Whether B2C, B2B or employee engagement, we strongly believe that exhibitions should never be boring and are an opportunity to stand out from the crowd.`
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
          "We put the audience at the heart of what we do, starting with real people, not demographics."
        }
        firstDescription={
            `Backlash is a full service creative experiential agency with all of the in-house functions you
             would expect to deliver an end-to-end service. Typically, a project will follow a path of
              strategic consultation, creative concepting, 2D & 3D design, production development, live
               event and project evaluation. Each of these stages are managed by our experienced project management team.`
        }
        secondDescription={
            `Backlash creative responses are about taking our clients on an inspirational journey that explores a 
            breadth of concepts and strategies, to push the potential of the brief. This creative process is developed
             in a completely collaborative and solution-driven environment, as we do not confess to be experts in your
              brand.`
        }
      />

      <div className={"central-container-with-info"}>
       <div style={{display: 'flex', alignItems: "center"}}>
           <Text
               type={"light"}
               size={100}
               mobSize={50}
               color={'#263da8'}
               containerStyles={{ marginRight: 21}}
           >
              01
           </Text>
           <Text
               className={"central-title"}
               type={"semiBold"}
               size={14}
               mobSize={10}
           >
               HOW WE HELP
           </Text>
       </div>
        <div className={"central-sub-container"}>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px", marginBottom: 25 }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
              Our passion for this industry has been developed collectively over 40 years’, previously working at
              leading global advertising, integrated and experiential agencies. This wider marketing experience has
              allowed us to develop our ‘Big Agency’ approach to any brief of all budget sizes.
          </Text>
            <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
            We will create an Eventbrite page
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
              — We will handle all verbal & written communications
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
              — We organize venue & logistics management

          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
              — We take care of negotiation & budget management
          </Text>
            <Text
                size={20}
                textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
                mobSize={16}
                animationType={"fade-in"}
                type={"light"}
          >
            — Public Relations
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
            <Text
                size={20}
                textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
                mobSize={16}
                animationType={"fade-in"}
                type={"light"}
          >
            — We will help promote across our social channelst
          </Text>
        </div>
      </div>

      <div className={"central-container-with-info"}>
         <div style={{display: 'flex', alignItems: "center"}}>
             <Text
                 type={"light"}
                 size={100}
                 mobSize={50}
                 color={'#263da8'}
                 containerStyles={{ marginRight: 21}}
             >
                 02
             </Text>
             <Text
                 className={"central-title"}
                 type={"semiBold"}
                 size={14}
                 mobSize={10}
             >
                 REQUIREMENTS
             </Text>
         </div>
        <div className={"central-sub-container"}>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px", marginBottom: 25 }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
              Having a connection with someone is deep rooted. It’s emotional.
              A feeling. A relationship…
              To help us connect best we need

          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            mobSize={16}
            animationType={"fade-in"}
            type={"light"}
          >
              Provide target market

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
        subtitle={"BOOK AN EVENT"}
        size={75}
        backgroundColor={"#000"}
        withIcon
      />

      <EmailForm withForm />
    </div>
  );
};

export default HostAnEvent;
