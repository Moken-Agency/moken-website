import React from "react";
import Text from "../../components/Text";
import Title from "../../components/Title";
import './index.scss';
import CommunityPartner from "../../components/CommunityPartner";
import SubmitYourResume from "../../components/SubmitYourResume";
import ArrowUpRight from '../../images/arrow-up-right.png';
import options from "./options";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FirstCircle from '../../images/our-partner-first.svg';
import SecondCircle from '../../images/our-partner-second.svg';
import ThirdCircle from '../../images/our-partner-third.svg';
import HeaderTitle from "../../components/HeaderTitle";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import ColorBlock from "../../components/ColorBlock";

const {involved, collaborates, purposes} = options;

const OurPartners = () => {

    const {isMobile} = useWindowDimensions()


    return (
       <div className={'our-partners-container'}>

           <HeaderTitle title={'OUR PARTNERS'}
                        subtitle={'Success fuelled by partnership.'}
                        description={'Creating an unmatched global ecosystem, together.'} />

           <div className={'our-partners-circles'}>
                <img data-aos="fade-in" src={FirstCircle} />
                <img data-aos="fade-in" src={SecondCircle} />
                <img data-aos="fade-in" src={ThirdCircle} />
           </div>

           <TitleTwoDescriptions mainTitle={'DRIVING THE FUTURE'}
                                 title={`We increase website leads, maximize revenu and produce a
                   positive ROI — validated with measurable results.`}
                                 firstDescription={`Our capabilities span the breadth of operations, project, and product
                       management; business strategy; marketing; design; technology; revenue optimization;
                       talent acquisition; growth; and sales, across all industries through customized products,
                       services, courses, workshops, solutions, and mentorship.`}
                                 secondDescription={`We partner with innovators through our tailored and integrative expertise, complemented by a
                       vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully
                       driven outcomes.`}
           />

           <ProgramCommunityListPartner title={'PARTNERSHIP OPPORTUNITIES'}
                                        subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                                        options={involved}
                                        AdditionalComponent={() => {
                                            return (
                                                <div className={'submit-container'}>
                                                    <SubmitYourResume title={'Expert Directory Coming Soon'} color={'black'}/>
                                                </div>
                                            )
                                        }}
           />

           <Title className={'partners-title'} title={'OUR PARTNERS'} />

           <div className={'partners-increase-container'}>
               <Text type={'extraLight'}
                     animationType={'fade-in'}
                     size={55} mobSize={35}>We increase website leads, maximize revenu and produce a positive
                   ROI — validated with measurable results.</Text>
               <div className={'partners-container'}>
                   {
                       ['','','','','','','','','', '', '', '', '', '', '', '', '', '',].map((_, index) => {
                           return (
                               <div data-aos="fade-in" className={'grey-block'}/>
                           )
                       })
                   }
               </div>
           </div>

           <ColorBlock title={'Looking for the next big thing?'}
                       subtitle={'GET INVOLVED'}
                       type={'thin'}
                       size={40}
                       mobSize={32}
                       withIcon
                       blockType={'middle'}
                       backgroundColor={'black'}/>

           <TwoColumnsHugeInfo title={'LEVERAGE THE ECOSYSTEM'}
                               leftTitle={'Enthusiastic individuals working together to create extraordinary startups'}
                               rightTitle={`Our role consists of taking the time to understand your business model, and suggesting
                       creative and high-performing digital strategies. Our avant-garde tactics are in line with
                       the current market, blend seamlessly with our clients’ operational realities, and eliminate
                       risks that aren’t necessary`}
                               rightFirstListTitle={'HOW WE CAN COLLABORATE'}
                               firstList={collaborates}
                               rightSecondListTitle={'CHOOSE YOUR PURPOSE'}
                               secondListLikeFirst={purposes}
           />

           <EmailForm withForm
                      className={'partners-email-form'}/>

       </div>
   )
}

export default OurPartners
