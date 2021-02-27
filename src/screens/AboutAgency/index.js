import React from "react";
import "./index.scss";
import Text from "../../components/Text";
import Title from "../../components/Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SecondImage from "../../images/package-second.svg";
import options from "./options";
import Explore from "../../components/Explore";
import SubmitYourResume from "../../components/SubmitYourResume";
import EmailForm from "../../components/EmailForm";
import Swiper from "../../components/Swiper";
import HeaderTitle from "../../components/HeaderTitle";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import ImageBlock from "../../components/ImageBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import TitleSubDescription from "../../components/TitleSubDescription";
import agencyRight from '../../images/agency-right@2x.png';
import ColorBlock from "../../components/ColorBlock";
const AboutAgency = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"about-agency-container"}>
      <HeaderTitle
        title={"MOKEN AGENCY"}
        marginBottom={323}
        subtitleClassName={'agency-header-subtitle'}
        subtitle={"Where startups build, create & grow."}
        description={`Providing opportunities for startups and founders to build and develop their visions,
                    ideas, and products.`}
      />

      <TitleTwoDescriptions
        marginBottom={186}
        mainTitle={"AGENCY OVERVIEW"}
        title={`We help clients look at the world differently. Startups,
            founders, and global industry leaders
            come to us to solve defining challenges.`}
        firstDescription={`Our capabilities span the breadth of operations, project, and product
                management; business strategy; marketing; design; technology; revenue optimization; talent
                acquisition; growth; and sales, across all industries through customized products, services,
                courses, workshops, solutions, and mentorship.`}
        secondDescription={`We partner with innovators through our tailored and integrative expertise,
                complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior,
                and impactfully driven outcomes.`}
      />

      <ImageBlock url={agencyRight} position={"right"} />

      <Title className={"partners-title"} title={"OUR EXPERTISE"} />

      <div className={"about-agency-increase-container"}>
        <Text size={50} mobSize={35} type={"kBold"}>
            Everything you need to successfully build and grow your startup.
        </Text>
      </div>

      <Swiper Component={Explore} swiperData={options.explores} containerClassName={'about-agency-swiper-container'} />

      <ColorBlock withIcon
                  title={'Work with Us'}
                  subtitle={'START YOUR PROJECT'}
                  backgroundColor={'black'}
                  type={'kThin'}
                  size={50}
                  blockType={'middle'}/>


    <TitleSubDescription
        subtitleClassName={'agency-impact-subtitle'}
        descriptionClassName={'agency-impact-description'}
        title={"OUR IMPACT"}
        subtitle={`We bring founders results through accelerated and impact driven solutions.`}
        description={`Our goal is to help founders create startups that scale faster, cheaper, and better. We are startup veterans who have built, sold, and invested in many companies. Over the last 10 years we've seen a lot of tricky areas for entrepreneurs to navigate. We now leverage that experience to help you build and grow your startup faster and with less pain and cost.`}
      />


      <div className={"leads-container"}>
        <Swiper containerClassName={'agency-swiper-container'} spaceBetween={82} breakpoints={{
            // when window width is >= 320px
            '0': {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            '1150': {
                slidesPerView: 2,
            },
            '1650': {
                slidesPerView: 3,
            }
        }} swiperData={[1,2,3,4]} Component={(_, index) => {
            return (
                <div className={'agency-product-container'}>
                    <img src={''}/>
                    <div>
                        <Text size={50}
                              mobSize={45}
                              type={'kBold'}
                              textStyles={{lineHeight: isMobile ? '60px' : '80px'}}
                        >Rent Your Ride</Text>
                        <Text size={16}
                              mobSize={14}
                              textStyles={{letterSpacing: 4}}
                              type={'kRegular'}>PRODUCT DESIGN & DEVELOPMENT</Text>
                    </div>
                </div>
            )
        }} />
        {/*<div className={'agency-products-container'}>*/}
        {/*    {*/}
        {/*        [1,2,3,4,5].map((_, index) => {*/}
        {/*            return (*/}
        {/*                <div className={'agency-product-container'}>*/}
        {/*                    <img src={''}/>*/}
        {/*                   <div style={{opacity: index !== 0 ? 0.1 : 1 }}>*/}
        {/*                       <Text size={75}*/}
        {/*                             mobSize={55}*/}
        {/*                             type={'kThin'}>Rent Your Ride</Text>*/}
        {/*                       <Text size={16}*/}
        {/*                             mobSize={14}*/}
        {/*                             textStyles={{letterSpacing: 4}}*/}
        {/*                             type={'kSemiBold'}>PRODUCT DESIGN & DEVELOPMENT</Text>*/}
        {/*                   </div>*/}
        {/*                </div>*/}
        {/*            )*/}
        {/*        })*/}
        {/*    }*/}
        {/*</div>*/}
        {/*<div*/}
        {/*  style={{*/}
        {/*    display: "flex",*/}
        {/*    justifyContent: "center",*/}
        {/*    marginBottom: "13.5vw",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <SubmitYourResume title={"View all projects"} color={"black"} />*/}
        {/*</div>*/}
      </div>

        {/*<Title title={'WHAT OUR CLIENTS SAY'}/>*/}

        {/*<div className={'client-say-wrapper-container'}>*/}
        {/*    <div className={'client-say-container'}>*/}
        {/*        <Text size={30}*/}
        {/*              type={'kThin'}*/}
        {/*              containerStyles={{width: 662}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
        {/*            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
        {/*            aliquip ex ea commodo consequat.</Text>*/}
        {/*        <div className={'client-say-text-container'}>*/}
        {/*            <div>*/}
        {/*                <Text size={14} type={'kSemiBold'} containerStyles={{marginBottom: 3}}>— CLIENT</Text>*/}
        {/*                <Text size={12} type={'kSemiBold'} containerStyles={{marginLeft: 18}}>Company Name</Text>*/}
        {/*            </div>*/}

        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}


      <ProgramCommunityListPartner
        title={"LET’S BUILD"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        type={'big'}
        subtitleClassName={'about-agency-programs-subtitle'}
        options={options.programs}
        widthItem={"30vw"}
      />
      <EmailForm withForm
                 title={'Join our newsletter to receive relevant tips and news.'}
                 titleClassName={'agency-email-form-title'}
      />
    </div>
  );
};

export default AboutAgency;
