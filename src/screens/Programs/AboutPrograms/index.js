import React from "react";
import './index.scss';
import HeaderTitle from "../../../components/HeaderTitle";
import options from "./options";
import TitleSubDescRounded from "./TitleSubDescRounded";
import LeftInfoWithRightImage from "../components/LeftInfoWithRightImage";
import TwoColumnsHugeInfo from "../components/TwoColumnsHugeInfo";
import ProgramColorBlock from "../components/ProgramColorBlock";
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import CommunityPartner from "../../../components/CommunityPartner";
import TitleText from "../../../components/TitleText";
import CoursesComponent from "../components/CoursesComponent";
import InfoImgCompany from "../components/InfoImgCompany";
import OurPartnersComponent from "../components/OurPartnersComponent";
import EmailForm from "../../../components/EmailForm";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Program = ({containerStyles}) => {
    return (
        <div style={{marginBottom: 78, ...containerStyles}}>
            <Text style={{marginBottom: 40}} size={75} mobSize={55} type={'semiBold'}>120</Text>
            <div style={{width: 188, height: 2, backgroundColor: 'black', marginBottom: 35}} />
            <Text type={'light'}
                  containerStyles={{width: 188}}
                  size={20}
                  mobSize={16}>This is a statistic note on someone</Text>
        </div>
    )
}

const AboutPrograms = () => {

    const {isMobile} = useWindowDimensions()


    return (
        <div className={'about-programs-container'}>
            <HeaderTitle title={'MOKEN PROGRAMS'}
                         subtitle={'Success fuelled by partnership.'}
                         description={'Together creating an unmatched global ecosystem.'} />

             <section className={'about-programs-partnerships-container'}>
                 {
                     options.partnerships.map(((partnership, index) => <TitleSubDescRounded
                         {...partnership}
                         key={'TitleSubDescRounded' + index} />))
                 }
             </section>

            <LeftInfoWithRightImage title={'Enthusiastic individuals working together to create extraordinary startups'}
                                    description={'Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.'}
                                    mainTitle={'PROGRAMS OVERVIEW'}
                                    isLeftImage
            />

            <TwoColumnsHugeInfo title={'THE EXPERIENCE'}
                                leftTitle={'Enthusiastic individuals working together to create extraordinary startups'}
                                rightTitle={'Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.\n' +
                                '\n'}
                                rightFirstListTitle={'WHERE IMPACT MATTERS'}
                                firstList={options.experiences}
            />

            <ProgramColorBlock title={'Looking for the next big thing?'} subtitle={'FIND INVESTMENT OPPORTUNITIES'} />

            <LeftInfoWithRightImage title={'Join our trusted community of partners and market what you do.'}
                                    description={'Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.'}
            />

            <section className={'about-programs'}>
                <Title title={'THE PROGRAMS'} className={'about-programs-title'} />
                <div className={'about-programs-block'}>
                    <Text className={'about-program-text'} size={55} mobSize={35} type={'extraLight'}>Join our trusted community of partners and market what you do to founders and startups, globally.</Text>
                    <div className={'about-programs-list'}>
                        {
                            options.programs.map((program, index) => {
                                return (
                                    <CommunityPartner {...program}
                                                      containerStyles={{
                                                          width: 120 / options.programs.length + 'vw',
                                                          marginBottom: isMobile ? 100 : '5vw',
                                                      }}/>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <CoursesComponent />

            <InfoImgCompany mainTitle={'CREATING THE FUTURE'}
                            title={'We are driven by the passion for working with determined innovators who live to make a change in the world.'}
                            subtitle={'We understand that together we should see results, not just reports with the work we do. We\'ve developed tailor-made strategies that assist in beating out the competition by tearing up the rule book. Through our agile approach, entrepreneurs, founders, and startups overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation. '}
                            startUpName={'Startup Name'}
                            founderName={'FOUNDER NAME'}
                            founderTitle={'FOUNDER TITLE'}
            />

            <section className={'about-programs'}>
                <Title title={'THE PROGRAMS'} className={'about-programs-title'} />
                <div className={'about-programs-block'}>
                    <Text className={'about-program-text'} size={55} mobSize={35} type={'extraLight'}>Join our trusted community of partners and market what you do to founders and startups, globally.</Text>
                    <div className={'about-programs-list'}>
                        {
                            options.programsSecond.map((program, index) => {
                                return (
                                    <CommunityPartner {...program}
                                                      containerStyles={{
                                                          width: 90 / options.programs.length + 'vw',
                                                          marginBottom: '5vw'
                                                      }}/>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <OurPartnersComponent title={'PROGRAM ALUMNI'} text={'You’re in good company, we’ve worked with startups across a range of verticals'}/>



            <section className={'about-programs-programs'}>
                <Title title={'THE PROGRAMS'} containerStyles={{padding: 0, marginBottom: isMobile ? 50: 124}} />
                <div style={{paddingLeft: isMobile ? 0 : 50, display: 'flex', flexDirection: isMobile ? 'column' : 'row'}}>
                    <Text type={'extraLight'}
                          containerStyles={{marginRight: isMobile ? 0 : 130, alignItems: 'flex-start', marginBottom: isMobile ? 30 : 0 }}
                          size={55}
                          mobSize={35}>We’re hiring. If something piques your interest,
                        let us know.</Text>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                  <Program containerStyles={{marginRight: 138}}/>
                                  <Program />

                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <Program containerStyles={{marginRight: 138}}/>
                        <Program />

                    </div>
                </div>
            </section>

            <EmailForm title={'Stay in the loop & never miss a thing.'} width={'20vw'} withForm />

        </div>
    )
}

export default AboutPrograms
