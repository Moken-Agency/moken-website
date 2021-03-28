import React, {useState} from "react";
import Text from "../../components/Text";
import Title from "../../components/Title";
import "./index.scss";
import CommunityPartner from "../../components/CommunityPartner";
import SubmitYourResume from "../../components/SubmitYourResume";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FirstCircle from "../../images/our-partner-first.svg";
import SecondCircle from "../../images/our-partner-second.svg";
import ThirdCircle from "../../images/our-partner-third.svg";
import HeaderTitle from "../../components/HeaderTitle";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import ColorBlock from "../../components/ColorBlock";
import arrowUpRight from '../../images/arrow-up-right-black.svg';
import ImageBlock from "../../components/ImageBlock";
import partnersImage from '../../images/partners';
import ourPartnersFirst from '../../images/our-partners-first-right@2x.jpg';
import Form from "../../components/Form";

const { involved, collaborates, purposes } = options;

const OurPartners = () => {
  const { isMobile } = useWindowDimensions();
    const [isFormOpened, setIsFormOpened] = useState(false);

    const handleOpenPartnerLink = (link) => {
        return link ? window.open(link, '_blank') : null;
    }

  return (
    <div className={"our-partners-container"}>
        <Form isOpen={isFormOpened} setIsOpen={setIsFormOpened} formName={'Partnership Application Form'}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNWRpMITHHWPNhulHQArjTfad7cGcWxGRZdr4XYxPI-3rQTA/viewform?embedded=true" width={'100%'} height="auto" frameborder="0" marginheight="0" marginwidth="0"/>
        </Form>
      <HeaderTitle
        title={"OUR PARTNERS"}
        subtitle={"Success fuelled by partnership."}
        description={"Creating an unmatched global ecosystem, together through unrilvaled access to technology, talent, and industry experts for startups and founders."}
      />

      {/*<div className={"our-partners-circles"}>*/}
      {/*  <img data-aos="fade-in" src={FirstCircle} />*/}
      {/*  <img data-aos="fade-in" src={SecondCircle} />*/}
      {/*  <img data-aos="fade-in" src={ThirdCircle} />*/}
      {/*</div>*/}

      <ImageBlock position={'right'} url={ourPartnersFirst}/>

      <TitleTwoDescriptions
        mainTitle={"DRIVING THE FUTURE"}
        title={`
        We believe in strong partnerships. We push ourselves and our partners in pursuit of assisting great people leading engaging brands.`}
        firstDescription={`
        Moken’s Partner Program aims to provide the necessary access and resources to founders, startups, and innovators. We do this through educating the big thinkers, the dreamers, and the doers while cultivating greater participation in the field of technology through providing crucial resources making what’s possible more accessible to the mainstream.`}
        secondDescription={`
        Anchored in simplicity we develop strategic partnerships with gamechanging individuals and companies that want to do better and be better. We know we have the power to shape the world, just as great partnerships have the power to revolutionize industries.`}
      />

      <ProgramCommunityListPartner
        subtitleClassName={'our-partners-opportunities-subtitle'}
        title={"PARTNERSHIP OPPORTUNITIES"}
        subtitle={
          "Join our trusted community of partners and market what you do to founders and startups, globally."
        }
        options={involved}
        itemContainerStyles={{}}
      />

      <Title className={"partners-title"} title={"OUR PARTNERS"} />

      <div className={"partners-increase-container"}>
        <Text
          type={"kBold"}
          // type={"extraLight"}
          animationType={"fade-in"}
          // size={'3.4vw'}
          size={50}
          mobSize={35}
          className={'partners-increase-title'}
          // containerStyles={{width: isMobile ? 'auto' : 900}}
        >
            Meet a few of our collaborative, community-focused partners that pair their passion with purpose.
        </Text>
        <div className={"partners-container"}>
          {options.partners.map(({imgURL, link, width = null}) => {
              return <div data-aos="fade-in"
                          style={{cursor: link ? 'pointer' : 'initial', maxWidth: width}}
                          className={"grey-block"}
                          onClick={() => handleOpenPartnerLink(link)}>
                  <img src={imgURL} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              </div>
          })
          }
        </div>
      </div>

      <ColorBlock
        title={"Ready to make an impact?"}
        subtitle={"DOWNLOAD THE PARTNER GUIDE"}
        withIcon
        blockType={"middle"}
        backgroundColor={"black"}
        onClick={() => window.open('https://www.dropbox.com/s/y6mbiu12iy4d7ca/Partner%20Program%20Guide.pdf?dl=0', '_blank')}
      />

      {/*<TwoColumnsHugeInfo*/}
      {/*  title={"LEVERAGE THE ECOSYSTEM"}*/}
      {/*  leftTitle={*/}
      {/*    "Enthusiastic individuals working together to create extraordinary startups"*/}
      {/*  }*/}
      {/*  rightTitle={`Our role consists of taking the time to understand your business model, and suggesting*/}
      {/*                 creative and high-performing digital strategies. Our avant-garde tactics are in line with*/}
      {/*                 the current market, blend seamlessly with our clients’ operational realities, and eliminate*/}
      {/*                 risks that aren’t necessary`}*/}
      {/*  rightFirstListTitle={"HOW WE CAN COLLABORATE"}*/}
      {/*  firstList={collaborates}*/}
      {/*  rightSecondListTitle={"CHOOSE YOUR PURPOSE"}*/}
      {/*  secondListLikeFirst={purposes}*/}
      {/*/>*/}
    <Title title={'GET INVOLVED'}/>
    <div className={'explore-our-partners-container'}>
        <Text
            // size={'3.4vw'}
              size={50}
              mobSize={35}
              type={'kBold'}
              className={'our-partners-involved-title'}
              // type={'extraLight'}
              // containerStyles={{width: isMobile ? 'auto' : 583}}
        >Interested in becoming a partner and leveraging a global community network?</Text>
        <div className={'explore-our-partners-potential-container'}
             onClick={() => setIsFormOpened(true)}>
            <Text type={'kSemiBold'}
                  // size={'.9vw'}
                  mobSize={12}
                  size={14}
                  textStyles={{letterSpacing: 4, marginRight: 40}}>EXPLORE THE POTENTIAL</Text>
            <img src={arrowUpRight} style={{width: 27, height: 27}}/>
        </div>
    </div>
      <EmailForm withForm />
    </div>
  );
};

export default OurPartners;
