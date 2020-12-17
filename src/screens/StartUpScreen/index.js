import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import TitleSubDescription from "../../components/TitleSubDescription";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import './index.scss';
import ColorBlock from "../../components/ColorBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import ImageBlock from "../../components/ImageBlock";

const StartUpScreen = () => {
    return (
        <div className={'start-up-screen-container'}>
           <HeaderTitle title={'STARTUP SMART'}
                        subtitle={'Success fuelled by partnership.'}
                        description={'Together creating an unmatched global ecosystem.'}
           />


           <ImageBlock type={'full'} />

           <TitleSubDescription title={'OVERVIEW'}
                                description={`People do not simply buy products or services, they buy brands with a 
                                purpose. By providing unique brand experiences, a startup is able to effectively 
                                convert potential users into brand ambassadors and differentiate themselves at an early 
                                stage from competitors. At Kenergy, we work directly with founders to create brands that
                                 defy the odds, defeat big competition and disrupt their industries.  `}
                                subtitle={`We increase website leads, maximize revenu and produce a positive ROI — 
                                validated with measurable results.`}
           />

           <LeftInfoWithRightImage title={'Join our trusted community of partners and market what you do.'}
                                   mainTitle={'MOST COMPREHENSIVE STARTUP COURSE AVAILABLE'}
                                   description={`Our role consists of taking the time to understand your business model,
                                    and suggesting creative and high-performing digital strategies. Our avant-garde 
                                    tactics are in line with the current market, blend seamlessly with our clients’
                                     operational realities, and eliminate risks that aren’t necessary.`}
                                   btnTitle={'APPLY TO INCUBATOR'}
                                   imgUrl={''}
           />

            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'APPLY NOW'}
                        withIcon
                        textColor={'black'}
                        backgroundColor={'grey'}
                        type={'thin'}
                        className={'start-up-screen-color-block'}
                        size={30}

            />

            <ProgramCommunityListPartner title={'GET CONNECTD IN THE MOKEN ECOSYSTEM'}
                                         subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                                         options={options.partners}
            />

            <LeftInfoWithRightImage title={'Let us host a demo day for you Enthusiastic individuals working'}
                                    mainTitle={'STARTUP SMART EVENTS'}
                                    description={`Our role consists of taking the time to understand your business model,
                                    and suggesting creative and high-performing digital strategies. Our avant-garde 
                                    tactics are in line with the current market, blend seamlessly with our clients’
                                     operational realities, and eliminate risks that aren’t necessary.`}
                                    btnTitle={'APPLY TO INCUBATOR'}
                                    imgUrl={''}
            />

            <EmailForm withForm />
        </div>
    )
}

export default StartUpScreen;
