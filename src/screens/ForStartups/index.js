import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import options from './options';
import EmailForm from "../../components/EmailForm";
import './index.scss';
import TitleCenterImagesList from "../../components/TitleCenterImagesList";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ForStartups = () => {
    const {isMobile} = useWindowDimensions()

    return (
        <div className={'for-startups-container'}>
            <HeaderTitle title={'FOR STARTUPS'}
                         subtitle={'Success fuelled by partnership.'}
                         description={'Together creating an unmatched global ecosystem.'}
                         marginBottom={isMobile ? 95 : 107}
            />

            <ImageBlock position={'right'}
            />

            <LeftInfoWithRightImage title={'Join our trusted community of partners and market what you do.'}
                                    mainTitle={'BUILD & GROW'}
                                    description={'Our role consists of taking the time to understand your business model, ' +
                                    'and suggesting creative and high-performing digital strategies. Our avant-garde ' +
                                    'tactics are in line with the current market, blend seamlessly with our clients’ ' +
                                    'operational realities, and eliminate risks that aren’t necessary.'}
                                    btnTitle={'APPLY TO INCUBATOR'}
            />

            <LeftInfoWithRightImage title={'Join our trusted community of partners and market what you do.'}
                                    mainTitle={'ACCESS NETWORK'}
                                    description={'Our role consists of taking the time to understand your business model, ' +
                                    'and suggesting creative and high-performing digital strategies. Our avant-garde ' +
                                    'tactics are in line with the current market, blend seamlessly with our clients’' +
                                    ' operational realities, and eliminate risks that aren’t necessary.'}
                                    btnTitle={'APPLY TO INCUBATOR'}
                                    isLeftImage
            />

            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'APPLY NOW'}
                        withIcon
                        textColor={'black'}
                        backgroundColor={'grey'}
                        type={'thin'}
                        className={'for-investors-color-block'}
                        size={30}

            />

            <LeftInfoWithRightImage title={'COURSES & PROGRAMS individuals working together to create extraordinary'}
                                    mainTitle={'EDUCATION & PROGRAMING TO TAKE YOU TO THE NEXT LEVEL'}
                                    description={'Our role consists of taking the time to understand your business model, ' +
                                    'and suggesting creative and high-performing digital strategies. Our avant-garde ' +
                                    'tactics are in line with the current market, blend seamlessly with our clients’' +
                                    ' operational realities, and eliminate risks that aren’t necessary.'}
                                    btnTitle={'APPLY TO INCUBATOR'}
                                    isLeftImage
            />

            <TitleCenterImagesList title={'A FEW OF THE OTHER STARTUPS WE WORK WITH'} list={['', '', '', '', '']} />

            <ProgramCommunityListPartner title={'DRIVE GROWTH & SCALE FAST'}
                                         subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                                         options={options.programs}
            />

            {/*<LeftInfoWithRightImage title={'Let us host a demo day for you Enthusiastic individuals working'}*/}
            {/*                        mainTitle={'LET US SHOW YOUR STARTUPS OFF'}*/}
            {/*                        description={'Our role consists of taking the time to understand your business model, ' +*/}
            {/*                        'and suggesting creative and high-performing digital strategies. Our avant-garde tactics' +*/}
            {/*                        ' are in line with the current market, blend seamlessly with our clients’ operational' +*/}
            {/*                        ' realities, and eliminate risks that aren’t necessary.'}*/}
            {/*                        btnTitle={'APPLY TO INCUBATOR'}*/}
            {/*/>*/}

            <EmailForm  withForm  />


        </div>
    )
}

export default ForStartups
