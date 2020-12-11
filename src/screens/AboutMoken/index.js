import React from "react";
import Text from '../../components/Text'
import Title from "../../components/Title";
import './styles.scss';
import SubmitYourResume from "../../components/SubmitYourResume";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import options from "./options";
import HeaderTitle from "../../components/HeaderTitle";

const AboutMoken = () => {
    return (
        <div className={'about-moken-container'}>
            <HeaderTitle
                 marginBottom={142}
                 title={'ABOUT MOKEN'}
                 subtitle={'Backing ideas that create change.'}
                 description={'Built to support founders, Moken is a group of trailblazing companies specialized in all things startup.'} />

            <div className={'about-moken-image'}/>

            <section className={'about-moken-first-info-section'}>
                <Title className={'about-moken-first-info-section-title'} title={'WE ARE MOKEN'} />
                <Text className={'about-moken-first-info-section-subtitle'} type={'extraLight'} size={55}>Moken creates diversified
                    opportunities for startups & founders driving economic & social impact,
                    globally. </Text>
                <div className={'about-moken-first-info-section-row-block'}>
                    <Text className={'about-moken-row-block-text'} size={20} type={'light'}>Together, we have the mission
                        of creating a global startup community designed to inspire,
                        educate, and connect with founders and startups in the pursuit of building impactful new ventures.
                        We work alongside teams, investors, entrepreneurs, founders, and startup program providers to support
                        in paving the way for success while connecting the vital pillars throughout a company’s lifecycle.</Text>
                    <Text className={'about-moken-row-block-text'} size={20} type={'light'}>We have a shared ambition to achieve extraordinary results, outperform the competition, and
                        redefine industries through disruption. We partner with innovators through our tailored and
                        integrative expertise, complemented by a vibrant ecosystem of game-changing partners to deliver
                        accelerated, superior, and impactfully driven outcomes.</Text>
                </div>
            </section>

            <section className={'about-moken-second-info-section'}>
                <Title className={'about-moken-second-info-section-title'} title={'WHAT WE DO'} />
               <div style={{paddingLeft: 243, marginRight: 70, width: 555}}>
                   <Text className={'about-moken-second-info-section-subtitle'} size={55} type={'extraLight'}>We are driven by the passion for working with determined innovators who live to make a change in the world.</Text>
                   <Text className={'about-moken-second-info-section-text'} size={20} type={'light'}>We understand that together we should see results, not just reports with every bit of work we do.
                       Through developing tailor-made strategies that assist in beating out the competition by tearing up the
                       rule book, our agile approach arms entrepreneurs, founders, and startups with the tools necessary to
                       overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation.
                   </Text>

                   <div className={'about-moken-second-kendra-block'}>
                       <div className={'about-moken-second-divider'}/>
                       <div className={'about-moken-second-kendra-info-block'}>
                           <Text className={'about-moken-second-kendra-info-text'} type={'semiBold'} size={24}>Moken creates diversified opportunities for startups and founders driving economic
                               and social impact, globally. </Text>
                           <Text size={16} type={'semiBold'}>— Kendra Garagan | Founder & Partner</Text>
                       </div>
                   </div>
               </div>
                <div />
            </section>

            <section className={'about-moken-video-section'}>
                <div className={'about-moken-video-info-block'}>
                    <Text className={'about-moken-video-info-block-first-title'} size={22} type={'semiBold'}>This is where the video title goes</Text>
                    <Text size={20}>This is where the video CTA should go to outline the video content.</Text>
                </div>
            </section>

            <section className={'about-moken-third-section'}>
                <Text className={'about-moken-third-section-title'} type={'extraLight'} size={55}>Enthusiastic individuals working together to create extraordinary startups.</Text>
                <div className={'about-moken-third-section-right-block'}>
                    <Text className={'about-moken-third-section-right-block-first-title'} type={'light'} size={20}>From ideation stage to high growth innovation, our role consists of
                        taking the time to understand your business model, suggest creative and high-performing strategies,
                        while implementing crucial aspects to supplement your growing needs. Our avant-garde tactics are in
                        line with the current market, blending seamlessly with each startup’s operational realities, while
                        eliminating risks that aren’t necessary.
                    </Text>
                    <Text size={14}
                          mobSize={10}
                          type={'semiBold'}
                          className={'about-moken-third-section-right-block-subtitle'}>HOW WE CAN COLLABORATE</Text>

                    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                        {
                            options.collaborates.map(({title, subtitle}) => {
                                return (
                                    <div className={'collaborate'}>
                                        <Text size={22}
                                              type={'semiBold'}
                                              containerStyles={{marginBottom: 15}}>{title}</Text>
                                        <Text size={20} type={'light'}>{subtitle}</Text>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Text size={14}
                          mobSize={10}
                          type={'semiBold'}
                          className={'about-moken-third-section-right-block-subtitle'}>CHOOSE YOUR PURPOSE</Text>
                    <SubmitYourResume  title={'Build & Scale Your Startup'} color={'black'} className={'marginZero'}/>
                    <SubmitYourResume  title={'Extend Your Network'} color={'black'} className={'marginZero'}/>
                    <SubmitYourResume  title={'Extend Your Network'} color={'black'} className={'marginZero'}/>
                    <SubmitYourResume  title={'Extend Your Network'} color={'black'} className={'marginZero'}/>
                </div>
            </section>

            <ColorBlock title={'Interested in this position?'}
                        subtitle={'APPLY NOW'}
                        backgroundColor={'rgb(0,9,50)'}
                        textWidth={'auto'}
                        className={'about-name-color-block'}/>

            <EmailForm title={'Stay in the loop & never miss a thing.'} width={'20vw'} withForm/>
        </div>
    )
}

export default AboutMoken
