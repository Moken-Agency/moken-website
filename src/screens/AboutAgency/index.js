import React from "react";
import './index.scss';
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


const AboutAgency = () => {
    const {isMobile} = useWindowDimensions()


    return (
        <div className={'about-agency-container'}>

            <HeaderTitle title={'MOKEN AGENCY'} subtitle={'Where startups build, create & grow.'}
                         description={`Providing opportunities for startups and founders to build and develop their visions,
                    ideas, and products.`}
            />

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
                    options.explores.map((option, index) => {
                        return (
                            <Explore {...option} key={'explore ' + index}/>
                        )
                    })
                }
            </Swiper>

            <TitleSubDescription title={'OUR IMPACT'}
                                 subtitle={`We increase website leads, maximize revenu and produce a.`}
                                 description={`Our role consists of taking the time to understand your business model,
                        and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with
                        the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that
                        aren’t necessary.`}
            />

            {/*<Title className={'partners-title'} title={'OUR IMPACT'} />*/}

            <div className={'leads-container'}>
                {/*<div style={{width: '55vw'}}>*/}
                {/*    <Text size={'3.1vw'} type={'extraLight'} containerStyles={{marginBottom: '4.1vw'}}>We increase website leads, maximize*/}
                {/*        revenu and produce a.</Text>*/}

                {/*    <Text size={'1.15vw'}*/}
                {/*          type={'light'} containerStyles={{marginBottom: '9.5vw'}}>Our role consists of taking the time to understand your business model,*/}
                {/*        and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with*/}
                {/*        the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that*/}
                {/*        aren’t necessary.</Text>*/}
                {/*</div>*/}

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

            <ProgramCommunityListPartner title={'LET’S BUILD'}
                                         subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                                         options={options.programs}
                                         widthItem={'30vw'}

            />
            <EmailForm withForm  />

        </div>
    )
}

export default AboutAgency
