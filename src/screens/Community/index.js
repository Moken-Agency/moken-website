import React, {useEffect} from "react";
import Text from "../../components/Text";
import "./index.scss";
import Title from "../../components/Title";
import options from "./options";
// import SwiperCore, { Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import Swiper from "../../components/Swiper";
import Explore from "../../components/Explore";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HeaderTitle from "../../components/HeaderTitle";
import TitleSubDescription from "../../components/TitleSubDescription";
import ImageBlock from "../../components/ImageBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import ColorBlock from "../../components/ColorBlock";
import communitySVG from '../../images/Community.svg';
import communityFirst from '../../images/community-first.jpg';
import communitySecond from '../../images/community-second.jpg'
import communityThird from '../../images/community-third.jpg'
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import {useHistory} from "react-router-dom";

const { swiperData } = options;

// SwiperCore.use([Virtual]);


const Community = () => {
  const { isMobile } = useWindowDimensions();



  const styles = {
    titleStyles: {
      fontSize: "3.7vw",
      fontFamily: "Latinka ExtraLight",
      marginBottom: "2vw",
    },
    containerStyles: {
      width: "30vw",
    },
    moken: {
      marginBottom: isMobile ? 48 : "1.4vw",
      letterSpacing: 4,
    },
    working: {
      marginBottom: isMobile ? 42 : "2.4vw",
    },
    increase: {
      marginBottom: isMobile ? 65 : "3.5vw",
    },
    role: {
      marginBottom: isMobile ? 70 : "8vw",
    },
    touch: {
      marginBottom: isMobile ? 100 : "13.5vw",
      letterSpacing: 4,
    },
    driven: {
      marginBottom: isMobile ? 65 : "4.33vw",
    },
    understand: {
      marginBottom: isMobile ? 65 : "9vw",
    },
    download: {
      letterSpacing: 4,
    },
    join: {
      marginTop: isMobile ? 65 : "10.8vw",
      marginBottom: isMobile ? 110 : 0,
    },
  };

    let history = useHistory();


    return (
    <div className={"community-container"}>
      <img src={communitySVG} className={'community-absolute-img'}/>
      <HeaderTitle
        title={"MOKEN COMMUNITY"}
        descriptionClassName={'community-header-description'}
        subtitle={"Working on what matters, together."}
        description={`We strive to build a community comprised of passionate entrepreneurs, innovators, investors, and builders who share a goal of making an impact.`}
        marginBottom={isMobile ? 400 : 378}
      />

      <ImageBlock url={communityFirst} className={'community-first-image'}/>

      <TitleSubDescription
          containerStyles={{marginBottom: 140}}
          subtitleClassName={'community-future-subtitle'}
          descriptionClassName={'community-future-description'}
        title={"ONE FUTURE, ONE COMMUNITY"}
        subtitle={`A powerhouse collection of the brightest minds of the future.`}
        description={`Powered by our community, Moken bridges the gap between investors, builders, and talent to create a driven, supportive community that makes it more enjoyable for founders to build and grow their ventures. Although we set high standards for ourselves and build trust-based relationships, this also means we’re not afraid to be who we are and lead by example every step of the way. At Moken, we truly believe in the power of technology as the biggest communication facilitator and strive to harness it in our pursuit to bring startup accessibility to all founders around the world.`}
        // btnTitle={"GET IN TOUCH"}
      />

      <ImageBlock position={"right"} url={communitySecond}/>

      {/*<TitleTwoDescriptions*/}
      {/*  mainTitle={"OUR COMMUNITY"}*/}
      {/*  title={*/}
      {/*    "We increase website leads, maximize revenu and produce a positive ROI — validated with measurable results."*/}
      {/*  }*/}
      {/*  firstDescription={`Our capabilities span the breadth of operations, project,*/}
      {/*                  and product management; business strategy; marketing; design; technology; revenue optimization; talent */}
      {/*                  acquisition; growth; and sales, across all industries through customized products, services, courses, */}
      {/*                  workshops, solutions, and mentorship.`}*/}
      {/*  secondDescription={`We partner with innovators through our tailored and integrative expertise,*/}
      {/*                  complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven */}
      {/*                  outcomes`}*/}
      {/*/>*/}

      <Title title={'OUR COMMUNITY'} />

      <Text type={'kBold'}
            size={50}
            mobSize={35}
            containerStyles={{padding: '0 14vw',
                width: isMobile ? 'auto' : 723,
                lineHeight: '53px',
                marginBottom: isMobile ? 50 : 100}}>Explore the opportunites within the Moken community.</Text>

        {/*<Swiper spaceBetween={0}*/}
        {/*        slidesPerView={3}*/}
        {/*        wrapperTag={'ul'}*/}
        {/*        navigation*/}
        {/*        onSwiper={(swiper) => console.log(swiper)}*/}

        {/*>*/}
        {/*    {swiperData.map((option, index) => {*/}
        {/*        return (*/}
        {/*            <SwiperSlide wrapperTag={'li'} tag={'section'} navigation>*/}
        {/*                {({ isActive }) => (*/}
        {/*                    <Explore {...option} isActive={isActive} key={"explore " + index} />*/}
        {/*                )}*/}
        {/*            </SwiperSlide>*/}
        {/*        )*/}
        {/*    })}*/}
        {/*</Swiper>*/}
        {/*<Swiper*/}
        {/*    spaceBetween={50}*/}
        {/*    slidesPerView={3}*/}
        {/*    pagination={{ clickable: true }}*/}
        {/*    scrollbar={{ draggable: true }}*/}
        {/*    onSwiper={(swiper) => console.log(swiper)}*/}
        {/*    onSlideChange={() => console.log('slide change')}*/}
        {/*>*/}
        {/*    <SwiperSlide>Slide 1</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*</Swiper>*/}

      <Swiper Component={Explore} swiperData={swiperData} containerClassName={'community-swiper'}/>
        {/*{swiperData.map((option, index) => {*/}
        {/*  return <Explore {...option} key={"explore " + index} />;*/}
        {/*})}*/}


      <ColorBlock
        title={"Creating our future, together."}
        subtitle={"JOIN THE COMMUNITY"}
        mobSize={32}
        // className={"community-color-block"}
        backgroundColor={"black"}
        size={45}
        withIcon
        onClick={() => history.push('/ambassador')}
        blockType={'middle'}
      />

        <LeftInfoWithRightImage
            titleClassName={'community-access-title'}
            descriptionClassName={'community-access-description'}
            withoutRightPadding
            title={`Driven by the passion for working with determined innovators who live to make a change in the world.`}
            mainTitle={"ACCESS NETWORK"}
            description={`An array of founder focused courses driven by experience together creating all-in-one formula specifically designed for entrepreneurs, led by experts in topics ranging from business modeling, engineering and communication.`}
            btnTitle={"JOIN THE NETWORK"}
            imgUrl={communityThird}
            containerClassName={''}
            onClick={() => window.open('https://network.mokenstartups.com', '_blank')}
        />

      <ProgramCommunityListPartner
        title={"COLLABORATE WITH US"}
        subtitleClassName={'community-partners-subtitle'}
        subtitle={
          "Our astounding community becomes even more incredible with more bright minds. Collaborate and join our evolving community."
        }
        options={options.founders}
        type={'big'}
      />

      <EmailForm withForm />
    </div>
  );
};

export default Community;
