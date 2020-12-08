import React from 'react';
import Text from "../../components/Text";
import './index.scss';
import Title from "../../components/Title";
import options from './options';
import SubmitYourResume from "../../components/SubmitYourResume";
import ArrowTopRight from '../../images/arrow-up-right.png'
import Swiper from "../../components/Swiper";
import Explore from "../../components/Explore";
import CommunityPartner from "../../components/CommunityPartner";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const {swiperData} = options;

const Community = () => {

    const {isMobile} = useWindowDimensions()


    const styles = {
        titleStyles: {
            fontSize: '3.7vw',
            fontFamily: 'Latinka ExtraLight',
            marginBottom: '2vw'
        },
        containerStyles: {
            width: '30vw'
        },
        moken: {
            marginBottom: isMobile ? 48 : '1.4vw',
            letterSpacing: 4
        },
        working: {
            marginBottom: isMobile ? 42 : '2.4vw'

        },
        increase: {
            marginBottom: isMobile ? 65 : '3.5vw'
        },
        role: {
            marginBottom: isMobile ? 70 : '8vw'
        },
        touch: {
            marginBottom: isMobile ? 100 : '13.5vw',
            letterSpacing: 4
        },
        driven: {
            marginBottom: isMobile ? 65 : '4.33vw'
        },
        understand: {
            marginBottom: isMobile ? 65 : '9vw'
        },
        download: {
            letterSpacing: 4
        },
        join: {
            marginTop: isMobile ? 65 : '10.8vw',
            marginBottom: isMobile ? 110 : 0
        }
    };

    return (
        <div className={'community-container'}>
            <div className={'moken-container'}>
                <Text size={'.9vw'}
                      mobSize={14}
                      type={'semiBold'}
                      containerStyles={styles.moken}>MOKEN COMMUNITY</Text>
                <Text size={'4.2vw'}
                      mobSize={45}
                      type={'thin'}
                      containerStyles={styles.working}>Working on what matters, together.</Text>
                <Text size={'1.1vw'}
                      mobSize={16}
                      type={'light'}>Looking for an opportunity to take your career forwards, send your portfolio to careers@mokengroup.com</Text>
            </div>

            <Title title={'ONE FUTURE, ONE COMMUNITY'}/>

            <div className={'future-container'}>
                <Text size={'3.74vw'} mobSize={35} type={'extraLight'} containerStyles={styles.increase}>We increase website leads, maximize revenu and produce a positive ROI — validated with measurable results.</Text>
                <Text size={'1.4vw'} mobSize={16} type={'light'} containerStyles={styles.role}>Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.  Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities.</Text>
                <Text size={'1vw'} mobSize={12} type={'semiBold'} containerStyles={styles.touch}>GET IN TOUCH</Text>
            </div>

            <img src={''} className={'right-image'}/>

            <Title title={'INNOVATOR NETWORK'}/>

            <div className={'innovator-container'}>
                <div className={'driven-container'}>
                    <Text size={'3.7vw'} mobSize={35} type={'extraLight'} containerStyles={styles.driven}>We are driven by the passion for working with determined innovators who live to make a change in the world.</Text>
                    <Text size={'1.35vw'} mobSize={16} type={'light'} containerStyles={styles.understand}>We understand that together we should see results, not just reports with the work we do. We've developed tailor-made strategies that assist in beating out the competition by tearing up the rule book. Through our agile approach, entrepreneurs, founders, and startups overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation. </Text>
                    <div className={'network-container'}>
                        <SubmitYourResume title={'IterableCircle the Network'} color={'black'}/>
                        <img src={ArrowTopRight} />
                    </div>
                </div>
                <div />
            </div>

            <div className={'community-color-block'}>
                <Text size={'2.7vw'} mobSize={20} type={'thin'} color={'white'}>Looking for the next big thing?</Text>
                <Text size={'1.1vw'} mobSize={12} type={'semiBold'} color={'white'} textStyles={styles.download}>DOWNLOAD THE COMMUNITY GUIDE</Text>
            </div>

            <Title title={'OUR COMMUNITY'}/>

            <div className={'community-leads-container'}>
                <Text size={'3.7vw'} mobSize={35} type={'extraLight'}>We increase website leads, maximize revenu and produce a positive ROI — validated with measurable results.</Text>
                <div className={'community-capabilities-container'}>
                    <Text size={'1.4vw'} mobSize={16} type={'light'}>Our capabilities span the breadth of operations, project, and product management; business strategy; marketing; design; technology; revenue optimization; talent acquisition; growth; and sales, across all industries through customized products, services, courses, workshops, solutions, and mentorship.</Text>
                    <Text size={'1.4vw'} mobSize={16} type={'light'}>We partner with innovators through our tailored and integrative expertise, complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven outcomes.</Text>
                </div>
            </div>

            <Swiper className={'community-swiper-container'}>
                {
                    swiperData.map((option, index) => {
                        return (
                            <Explore {...option} key={'explore ' + index}/>
                        )
                    })
                }
            </Swiper>

            <Title title={'GET INVOLVED'}/>

            <div className={'community-join-container'}>
                <Text size={'3.8vw'} mobSize={35} type={'extraLight'} containerStyles={styles.join}>Join our trusted community of partners and market what you do to founders and startups, globally.</Text>
                <div className={'community-trusted-partner-container'}>
                    <CommunityPartner title={'Become a Mentor'}
                                      subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                      titleStyles={styles.titleStyles}
                                      containerStyles={styles.containerStyles}
                    />
                    <CommunityPartner title={'Become a FutureFounder'}
                                      subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                                      titleStyles={styles.titleStyles}
                                      containerStyles={styles.containerStyles}
                    />
                </div>
            </div>

            <EmailForm withForm title={'Stay in the loop & never miss a thing.'} width={'20vw'} />

        </div>
    )
}

export default Community
