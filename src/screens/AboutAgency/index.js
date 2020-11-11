import React, {useEffect, useState} from "react";
import './index.scss';
import Text from "../../components/Text";
import Title from "../../components/Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SecondImage from "../../images/package-second.svg";
import options from "./options";
import Explore from "./components/Explore";
import ArrowUpRight from '../../images/arrow-up-right.png'
import SubmitYourResume from "../../components/SubmitYourResume";
import CommunityPartner from "../OurPartners/components/CommunityPartner";
import EmailForm from "../../components/EmailForm";


const AboutAgency = () => {
    const {isMobile} = useWindowDimensions();
    const [isButtonVisible, setIsButtonVisible] = useState(true)

    const scrollToEnd = () => {
        const elem = document.getElementById('explores-container');
        elem.scrollLeft = elem.scrollWidth;
        setIsButtonVisible(false)
    }
    const titleStyles = {
        fontSize: '3.7vw',
        fontFamily: 'Latinka ExtraLight',
        marginBottom: '2vw'
    }

    const containerStyles = {
        width: '30vw'
    }

    const buttonDynamicStyles = {
        opacity: isButtonVisible ? 1 : 0,
        // width: isButtonVisible ? '6vw' : 0,
        // height: isButtonVisible ? '6vw' : 0,
        padding: isButtonVisible ? '3vw' : 0

    }

    const imgDynamicStyles = {
        height: isButtonVisible ? '2vw' : 0,
        opacity: isButtonVisible ? 1 : 0,

    }

    const onScroll = (event) => {
        const elem = document.getElementById('explores-container');
        if(elem.scrollLeft + elem.offsetWidth > elem.offsetWidth) {
            setIsButtonVisible(false)
        } else {
            setIsButtonVisible(true)

        }
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
            <div className={'our-partners-info-container'}>
                <Text type={'semiBold'}
                      size={'1vw'}
                      mobSize={14}
                      containerStyles={{marginBottom: isMobile ? '18vw' : '1.5vw'}}>MOKEN AGENCY</Text>
                <Text type={'thin'}
                      size={'4.2vw'}
                      mobSize={45}
                      containerStyles={{marginBottom: isMobile ? '5vw' : '1vw'}}>Where startups build, create & grow.</Text>
                <Text type={'light'}
                      containerStyles={{marginBottom: '28.7vw'}}
                      size={'1.1vw'}
                      mobSize={16}>Providing opportunities for startups and founders to build and develop their visions,
                    ideas, and products.</Text>
            </div>
            <Title className={'partners-title'} title={'AGENCY OVERVIEW'} />
            <div className={'our-partners-help-clients-container'}>
                <Text size={'3.1vw'}
                      mobSize={35}
                      type={'extraLight'}>We help clients look at the world differently. Startups,
                    founders, and global industry leaders
                    come to us to solve defining challenges.</Text>
                <div className={'our-partners-capabilities-container'}>
                    <Text size={'1.1vw'}
                          type={'light'}>Our capabilities span the breadth of operations, project, and product
                        management; business strategy; marketing; design; technology; revenue optimization; talent
                        acquisition; growth; and sales, across all industries through customized products, services,
                        courses, workshops, solutions, and mentorship.</Text>
                    <Text size={'1.1vw'}
                          type={'light'}>We partner with innovators through our tailored and integrative expertise,
                        complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior,
                        and impactfully driven outcomes.</Text>
                </div>
            </div>

            <div className={'our-partners-first-img'}>
                <img src={SecondImage} />
            </div>

            <Title className={'partners-title'} title={'OUR EXPERTISE'} />

            <div className={'about-agency-increase-container'}>
                <Text size={'3.1vw'}
                      mobSize={35}
                      type={'extraLight'}>We increase website leads, maximize revenue and produce.</Text>
            </div>

            <div className={'explores-container'} id={'explores-container'} onScroll={onScroll}>
                {
                    options.map((option, index) => {
                        return (
                            <Explore {...option} key={'explore ' + index}/>
                        )
                    })
                }
              <div className={'explores-button'} style={buttonDynamicStyles} onClick={scrollToEnd}>
                    <img src={ArrowUpRight} style={imgDynamicStyles}/>
                </div>
            </div>

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
                              type={'semiBold'}>PRODUCT DESIGN & DEVELOPMENT</Text>
                    </div>
                    <div className={'app-container'}>
                        <Text size={'4.2vw'}
                              type={'thin'}>Prommoto</Text>
                        <Text size={'.9vw'}
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
                <EmailForm withForm width={'20vw'} title={'Stay in the loop & never miss a thing.'} />
            </div>

        </div>
    )
}

export default AboutAgency
