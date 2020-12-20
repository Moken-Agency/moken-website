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
import HeaderTitle from "../../components/HeaderTitle";
import TitleSubDescription from "../../components/TitleSubDescription";
import ImageBlock from "../../components/ImageBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import ColorBlock from "../../components/ColorBlock";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
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

            <HeaderTitle title={'MOKEN COMMUNITY'}
                         subtitle={'Working on what matters, together.'}
                         description={`Looking for an opportunity to take your career forwards, send your portfolio to careers@mokengroup.co`}
            />

            <ImageBlock type={'full'} />


            <TitleSubDescription title={'ONE FUTURE, ONE COMMUNITY'}
                                 subtitle={`We increase website leads, maximize revenu and produce a positive ROI — validated with measurable results.`}
                                 description={`Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. 
                    Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, 
                    and eliminate risks that aren’t necessary.  Our avant-garde tactics are in line with the current market, blend seamlessly
                    with our clients’ operational realities.`}
                                 btnTitle={'GET IN TOUCH'}
            />

            <ImageBlock position={'right'} />


            <TitleTwoDescriptions mainTitle={'OUR COMMUNITY'}
                                  title={'We increase website leads, maximize revenu and produce a positive ROI — validated with measurable results.'}
                                  firstDescription={`Our capabilities span the breadth of operations, project,
                        and product management; business strategy; marketing; design; technology; revenue optimization; talent 
                        acquisition; growth; and sales, across all industries through customized products, services, courses, 
                        workshops, solutions, and mentorship.`}
                                  secondDescription={`We partner with innovators through our tailored and integrative expertise,
                        complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven 
                        outcomes`}
            />

            <Swiper className={'community-swiper-container'}>
                {
                    swiperData.map((option, index) => {
                        return (
                            <Explore {...option} key={'explore ' + index}/>
                        )
                    })
                }
            </Swiper>


            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'DOWNLOAD THE COMMUNITY GUIDE'}
                        type={'thin'}
                        size={40}
                        mobSize={32}
                        className={'community-color-block'}
                        backgroundColor={'black'}

            />


            <TitleSubDescription title={'ACCESS NETWORK'}
                                 subtitle={'We are driven by the passion for working with determined innovators who live to make a change in the world.'}
                                 description={`We understand that together we should see 
                        results, not just reports with the work we do. We've developed tailor-made strategies that assist in beating out 
                        the competition by tearing up the rule book. Through our agile approach, entrepreneurs, founders, and
                        startups overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation. `}
                                 AdditionalComponent={() => {
                                     return (
                                         <div className={'network-container'}>
                                             <SubmitYourResume title={'Join the Network'} color={'black'}/>
                                             <img data-aos="fade-up" src={ArrowTopRight} />
                                         </div>
                                     )
                                 }}

            />

            <ProgramCommunityListPartner title={'GET INVOLVED'}
                                         subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                                         options={options.founders}
            />

            <EmailForm  withForm />

        </div>
    )
}

export default Community
