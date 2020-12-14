import React, {useEffect, useState} from "react";
import './index.scss';
import Text from "../../components/Text";
import Title from "../../components/Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SecondImage from "../../images/package-second.svg";
import options from "./options";
import Explore from "../../components/Explore";
import ArrowUpRight from '../../images/arrow-up-right.png'
import SubmitYourResume from "../../components/SubmitYourResume";
import CommunityPartner from "../../components/CommunityPartner";
import EmailForm from "../../components/EmailForm";
import Swiper from "../../components/Swiper";
import HeaderTitle from "../../components/HeaderTitle";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import ImageBlock from "../../components/ImageBlock";


const AboutAgency = () => {
    const {isMobile} = useWindowDimensions();

    const titleStyles = {
        fontSize: '3.35vw',
        fontFamily: 'Latinka ExtraLight',
        marginBottom: '3.3vw',
        lineHeight: '3.8vw'
    }

    const containerStyles = {
        width: '30.5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

    //
    // function() {
    //     let style = { transform: 'translateY(0px)' };
    //
    //     window.addEventListener('scroll', (event) => {
    //         let scrollTop = event.srcElement.body.scrollTop,
    //             itemTranslate = Math.min(0, scrollTop/3 - 60);
    //
    //         style.transform = 'translateY(' + itemTranslate + 'px)');
    // });

    return (
        <div className={'about-agency-container'}>

            <HeaderTitle title={'MOKEN AGENCY'} subtitle={'Where startups build, create & grow.'}
                         description={`Providing opportunities for startups and founders to build and develop their visions,
                    ideas, and products.`} />

                    <TitleTwoDescriptions mainTitle={'AGENCY OVERVIEW'}
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




            <ImageBlock url={SecondImage} position={'right'}/>

            <Title className={'partners-title'} title={'OUR EXPERTISE'} />

            <div className={'about-agency-increase-container'}>
                <Text size={'3.1vw'}
                      mobSize={35}
                      type={'extraLight'}>We increase website leads, maximize revenue and produce.</Text>
            </div>

            <Swiper>
                {
                    options.map((option, index) => {
                        return (
                            <Explore {...option} key={'explore ' + index}/>
                        )
                    })
                }
            </Swiper>


            <Title className={'partners-title'} title={'OUR IMPACT'} />

            <div className={'leads-container'}>
                <div style={{width: '55vw'}}>
                    <Text size={'3.1vw'} type={'extraLight'} containerStyles={{marginBottom: '4.1vw'}}>We increase website leads, maximize
                        revenu and produce a.</Text>

                    <Text size={'1.15vw'}
                          type={'light'} containerStyles={{marginBottom: '9.5vw'}}>Our role consists of taking the time to understand your business model,
                        and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with
                        the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that
                        aren’t necessary.</Text>
                </div>

                <div className={'apps-container'}>
                    <div className={'app-container'}>
                        <Text size={'4.2vw'} type={'thin'}>Rent Your Ride</Text>
                        <Text size={'.9vw'}
                              textStyles={{letterSpacing: 4}}
                              type={'semiBold'}>PRODUCT DESIGN & DEVELOPMENT</Text>
                    </div>
                    <div className={'app-container'}>
                        <Text size={'4.2vw'}
                              type={'thin'}>Prommoto</Text>
                        <Text size={'.9vw'}
                              textStyles={{letterSpacing: 4}}
                              type={'semiBold'}>Product Design & Development</Text>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '13.5vw'}}>
                    <SubmitYourResume title={'View all projects'} color={'black'}/>
                </div>
            </div>
            <Title className={'partners-title'} title={'LET’S BUILD'} />
            <div className={'btn-info-container'}>
                <Text type={'extraLight'}
                      size={'3.1vw'}
                      containerStyles={{marginBottom: '11vw'}}>Join our trusted community
                    of partners and market what you do to founders and startups, globally.</Text>
                <div className={'btn-container'}>
                    <CommunityPartner title={'StartupSmart Packages'}
                                      subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                      btnTitle={'STARTUP SMART'}
                                      titleStyles={titleStyles}
                                      containerStyles={containerStyles}
                    />
                    <CommunityPartner
                        containerStyles={containerStyles}
                        titleStyles={titleStyles}
                        title={'Estimate Your Project'}
                      btnTitle={'ESTIMATE'}
                      subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />

                </div>
                <EmailForm withForm  />
            </div>

        </div>
    )
}

export default AboutAgency
