import React, {useCallback, useEffect, useRef, useState} from "react";
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
import {debounce} from "../../constans/helpers";
import Carousel from "react-elastic-carousel";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useHistory} from "react-router-dom"; // requires a loader
const AboutAgency = () => {
  const { isMobile } = useWindowDimensions();



  const [isSwiperHover, setIsSwiperHover] = useState(false);
  const [isReverseMove, setIsReverseMove] = useState(false);

    let history = useHistory();

    useEffect(() => {
      // func();
        const timer = setInterval(func, 1500)
      if(!isSwiperHover) {
        clearInterval(timer)
      }
        return () => clearInterval(timer)
    }, [isSwiperHover, isReverseMove]);

    const func = () => {
      if(isReverseMove) {
        carouselRef.current.slidePrev()
      } else {
        carouselRef.current.slideNext()
      }
      debounce(() => func(), 1500);
    }

    const func2 = () => {
      console.log(ref2.current);
      if(isReverseMove) {
        // ref2.current.scrollInto
      } else {
      }
      debounce(() => func2(), 1500);
    }


  useEffect(() => {
    // func();
    const timer = setInterval(func2, 1500)
    if(!isSwiperHover) {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [isSwiperHover, isReverseMove]);


    const onMouseEnter =() => {
      setIsSwiperHover(true)
    };

  const onMouseLeave = () => {
    setIsSwiperHover(false)
  }

    const ref = useRef(null);
    const ref2 = useRef(null);

    const carouselRef = useRef(null);


    useEffect(() => {
        ref.current.addEventListener('mousemove', debounce(_mouseMove, 1000 / 60));
        return  document.removeEventListener('mousemove', _mouseMove);
    }, []);


    const _mouseMove =(e) => {
      // console.log('_mouseMove', window.innerWidth / 2 > e.clientX);
      window.innerWidth / 2 >  e.clientX ? setIsReverseMove(true) : setIsReverseMove(false);

    };

    return (
    <div className={"about-agency-container"}>
      <HeaderTitle
        title={"MOKEN AGENCY"}
        marginBottom={323}
        subtitleClassName={'agency-header-subtitle'}
        subtitle={"Where startups build, validate & grow."}
        description={`Providing solutions for startups and founders to build and develop their visions & ideas 
        into scalable businesses.`}
      />

      <TitleTwoDescriptions
        marginBottom={186}
        mainTitle={"AGENCY OVERVIEW"}
        title={`We help clients look at the world differently. Startups,
            founders, and global industry leaders
            come to us to solve defining challenges.`}
        firstDescription={`We have a shared ambition to achieve extraordinary results and redefine industries through providing custom solutions optimized to assist founders and early-stage startups. We work alongside startups, and founders to support paving the way for success though offering the vital services related to building and growing start-ups.`}
        secondDescription={`Our capabilities span the breadth of operations, project, and product management; business strategy; marketing; design; technology; talent; and sales, across all industries through customized management, consulting, execution, and mentorship.`}
      />

      <ImageBlock url={agencyRight} position={"right"} />

      <Title className={"partners-title"} title={"OUR EXPERTISE"} />

      <div className={"about-agency-increase-container"}>
        <Text size={50} mobSize={35} type={"kBold"}>
            Everything you need to successfully build and grow your startup.
        </Text>
      </div>

      <Swiper
              Component={Explore}
              swiperData={options.explores}
              containerClassName={'about-agency-swiper-container'} />

      <ColorBlock withIcon
                  title={'Work with Us'}
                  subtitle={'START YOUR PROJECT'}
                  backgroundColor={'black'}
                  type={'kThin'}
                  size={50}
                  onClick={() => history.push('/connect-with-us')}
                  blockType={'middle'}/>


    <TitleSubDescription
        subtitleClassName={'agency-impact-subtitle'}
        descriptionClassName={'agency-impact-description'}
        title={"OUR IMPACT"}
        subtitle={`We bring founders results through accelerated and impact driven solutions.`}
        description={`Our goal is to help founders create startups that scale faster, cheaper, and better. We are startup veterans who have built, sold, and invested in many companies. Over the last 10 years we've seen a lot of tricky areas for entrepreneurs to navigate. We now leverage that experience to help you build and grow your startup faster and with less pain and cost.`}
      />

      <Swiper swiperData={options.projects}
              containerClassName={'about-agency-projects-slider'}
              breakpoints={{
                // when window width is >= 320px
                '0': {
                  slidesPerView: 1,

                },

                '601': {
                  // slidesPerView: 1.5,
                },
                '650': {
                  slidesPerView: 1,
                },
                // when window width is >= 480px
                '800': {
                  slidesPerView: 1,
                },
                '1000': {
                  slidesPerView: 1.5,
                },
                // when window width is >= 640px
                '1380': {
                  slidesPerView: 2,
                },
                '1600': {
                  slidesPerView: 2.5,
                },
                '1770': {
                  slidesPerView: 3,
                },

                '1970': {
                  slidesPerView: 3.5,
                },

              }}
              Component={({imgURL, title, subtitle}) => {
        return (
            <div className={'agency-product-container'}>
              <img src={imgURL}/>
              <div>
                <Text size={50}
                      mobSize={45}
                      type={'kBold'}
                      textStyles={{lineHeight: isMobile ? '60px' : '80px'}}
                >{title}</Text>
                <Text size={16}
                      mobSize={14}
                      textStyles={{letterSpacing: 4}}
                      type={'kRegular'}>{subtitle}</Text>
              </div>
            </div>
        )
      }}/>
      <div className={"leads-container"} ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {/*<Carousel containerClassName={'agency-swiper-container'}*/}
        {/*        onNextEnd={(onNextEnd) => console.log({onNextEnd}) }*/}
        {/*          onPrevEnd={(onPrevEnd) => console.log({onPrevEnd}) }*/}
        {/*          ref={carouselRef}*/}
        {/*          itemsToShow={2.5}*/}
        {/*          pagination={false}*/}
        {/*          showArrows={false}*/}
        {/*        withoutArrows*/}
        {/*          enableSwipe={false}*/}
        {/*          breakPoints={[{ width: 1, itemsToShow: 1 },*/}
        {/*            { width: 0, itemsToShow: 1 },*/}
        {/*            { width: 870, itemsToShow: 1.5 },*/}
        {/*            { width: 1200, itemsToShow: 2 },*/}
        {/*            { width: 1500, itemsToShow: 2.5 }]}*/}
        {/*          swiperData={options.projects}*/}

        {/*>*/}
        {/*    {options.projects.map(({title = '', subtitle = '', imgURL = ''}, index) => {*/}
        {/*        return (*/}
        {/*            <div className={'agency-product-container'}>*/}
        {/*                <img src={imgURL}/>*/}
        {/*                <div>*/}
        {/*                    <Text size={50}*/}
        {/*                          mobSize={45}*/}
        {/*                          type={'kBold'}*/}
        {/*                          textStyles={{lineHeight: isMobile ? '60px' : '80px'}}*/}
        {/*                    >{title}</Text>*/}
        {/*                    <Text size={16}*/}
        {/*                          mobSize={14}*/}
        {/*                          textStyles={{letterSpacing: 4}}*/}
        {/*                          type={'kRegular'}>{subtitle}</Text>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        )*/}
        {/*    })}*/}
        {/*</Carousel>*/}

        {/*<div style={{overflowX: 'scroll', display: 'flex'}} ref={ref2} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>*/}
        {/*  {options.projects.map(({title = '', subtitle = '', imgURL = ''}, index) => {*/}
        {/*    return (*/}
        {/*        <div className={'agency-product-container'}>*/}
        {/*          <img src={imgURL}/>*/}
        {/*          <div>*/}
        {/*            <Text size={50}*/}
        {/*                  mobSize={45}*/}
        {/*                  type={'kBold'}*/}
        {/*                  textStyles={{lineHeight: isMobile ? '60px' : '80px'}}*/}
        {/*            >{title}</Text>*/}
        {/*            <Text size={16}*/}
        {/*                  mobSize={14}*/}
        {/*                  textStyles={{letterSpacing: 4}}*/}
        {/*                  type={'kRegular'}>{subtitle}</Text>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*    )*/}
        {/*  })}*/}
        {/*</div>*/}
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
