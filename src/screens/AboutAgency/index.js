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
import {useHistory} from "react-router-dom";
import Form from "../../components/Form"; // requires a loader
const AboutAgency = () => {
  const { isMobile } = useWindowDimensions();



  const [isSwiperHover, setIsSwiperHover] = useState(false);
  const [isReverseMove, setIsReverseMove] = useState(false);

    let history = useHistory();

    useEffect(() => {
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
        // ref.current.addEventListener('mousemove', debounce(_mouseMove, 1000 / 60));
        // return  document.removeEventListener('mousemove', _mouseMove);
    }, []);


    const _mouseMove =(e) => {
      // console.log('_mouseMove', window.innerWidth / 2 > e.clientX);
      window.innerWidth / 2 >  e.clientX ? setIsReverseMove(true) : setIsReverseMove(false);
    };
    const [isFormOpened, setIsFormOpened] = useState(false);


    const programs =  [
        {
            title: "StartupSmart Packages",
            subtitle:
            `We have bundled a selection of custom services to help founders & startups tackle their immediate needs, faster & cheaper.`,
            btnTitle: 'STARTUP SMART',
            route: '/start-up-smart'
        },
        {
                title: "Estimate Your Project",
                subtitle:
        `Get an idea of how much you'll need to fund your project by answering a few questions and our estimating tool will do the rest.`,
            btnTitle: "ESTIMATE",
            route: '/connect-with-us',
            onClick: () => setIsFormOpened(true)
        },
    ];

    return (
    <div className={"about-agency-container"}>
        <Form isOpen={isFormOpened} setIsOpen={setIsFormOpened} formName={'Moken Intake Form\n'}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdx__r7dU3vAWhl2UMpKvsLQyQWV0LIKV5vxHSvg-rxi3LJuA/viewform?embedded=true" width={'100%'} height="auto"/>
        </Form>
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
                  onClick={() => setIsFormOpened(true)}
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
                '950': {
                  slidesPerView: 1,
                },
                '1000': {
                  slidesPerView: 1.5,
                },
                // when window width is >= 640px
                '1300': {
                  slidesPerView: 2,
                },
                '1600': {
                  slidesPerView: 2.5,
                },
                '1870': {
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



      <ProgramCommunityListPartner
        title={"LET’S BUILD"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        type={'big'}
        subtitleClassName={'about-agency-programs-subtitle'}
        options={programs}
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
