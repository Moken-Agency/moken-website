import React from "react";
import Text from '../../components/Text'
import Title from "../../components/Title";
import './styles.scss';
import SubmitYourResume from "../../components/SubmitYourResume";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import options from "./options";
import HeaderTitle from "../../components/HeaderTitle";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../../components/ImageBlock";

const AboutMoken = () => {
    const {isMobile} = useWindowDimensions();
    return (
        <div className={'about-moken-container'}>
            <HeaderTitle
                 title={'ABOUT MOKEN'}
                 subtitle={'Backing ideas that create change.'}
                 description={'Built to support founders, Moken is a group of trailblazing companies specialized in all things startup.'}
                 marginBottom={isMobile ? 160 : 142}
            />

            <ImageBlock position={'right'} />


            <TitleTwoDescriptions
                mainTitle={'WE ARE MOKEN'}
                title={'Moken creates diversified opportunities for startups & founders driving economic & social impact, globally. '}
                                  firstDescription={'Together, we have the mission of creating a global startup community designed to inspire, educate, and connect with founders and startups in the pursuit of building impactful new ventures. We work alongside teams, investors, entrepreneurs, founders, and startup program providers to support in paving the way for success while connecting the vital pillars throughout a company’s lifecycle.'}
                                  secondDescription={'We have a shared ambition to achieve extraordinary results, outperform the competition, and redefine industries through disruption. We partner with innovators through our tailored and integrative expertise, complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven outcomes.'}
            />

            <section className={'about-moken-second-info-section'}>
                <Title title={'WHAT WE DO'} />
                    <div className={'about-moken-second-info-section-secondary-container'}>
                   <Text className={'about-moken-second-info-section-subtitle'}
                         size={55}
                         animationType={'fade-up'}
                         mobSize={35}
                         type={'extraLight'}>We are driven by the passion for working with determined innovators who live to make a change in the world.</Text>
                   <Text className={'about-moken-second-info-section-text'}
                         size={20}
                         animationType={'fade-up'}
                         textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                         mobSize={16}
                         type={'light'}>We understand that together we should see results, not just reports with every bit of work we do.
                       Through developing tailor-made strategies that assist in beating out the competition by tearing up the
                       rule book, our agile approach arms entrepreneurs, founders, and startups with the tools necessary to
                       overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation.
                   </Text>

                   <div className={'about-moken-second-kendra-block'}>
                       <div className={'about-moken-second-divider'}/>
                       <div className={'about-moken-second-kendra-info-block'}>
                           <Text className={'about-moken-second-kendra-info-text'}
                                 type={'semiBold'}
                                 animationType={'fade-up'}
                                 size={24} mobSize={18}>Moken creates diversified opportunities for startups and founders driving economic
                               and social impact, globally. </Text>
                           <Text size={16}
                                 animationType={'fade-up'}
                                 mobSize={12}
                                 textStyles={{letterSpacing: 4}}
                                 type={'semiBold'}>— Kendra Garagan | Founder & Partner</Text>
                       </div>
                   </div>
               </div>
                <div />
            </section>

            <section className={'about-moken-video-section'}>
                <div className={'about-moken-video-info-block'}>
                    <Text className={'about-moken-video-info-block-first-title'}
                          size={16}
                          animationType={'fade-up'}
                          type={'semiBold'}>THIS IS WHERE THE VIDEO TITLE GOES</Text>
                    <Text size={20}
                          type={'light'}
                          animationType={'fade-up'}
                          textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                          mobSize={16}>This is where the video CTA should go to outline the video content.</Text>
                </div>
                <video autoPlay
                       muted
                       src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                />
            </section>

            <TwoColumnsHugeInfo title={'MOKEN PILLARS'}
                                leftTitle={'Enthusiastic individuals working together to create extraordinary startups.'}
                                rightTitle={'From ideation stage to high growth innovation, our role consists of taking the time to understand your business model, suggest creative and high-performing strategies, while implementing crucial aspects to supplement your growing needs. Our avant-garde tactics are in line with the current market, blending seamlessly with each startup’s operational realities, while eliminating risks that aren’t necessary.\n' +
                                '\n'}
                                rightFirstListTitle={'HOW WE CAN COLLABORATE'}
                                firstList={options.collaborates}
                                rightSecondListTitle={'CHOOSE YOUR PURPOSE'}
                                secondList={options.purposes}
                                secondListWithIcon
            />

            <ColorBlock title={'Interested in this position?'}
                        subtitle={'APPLY NOW'}
                        backgroundColor={'rgb(0,9,50)'}
                        textWidth={'auto'}
                        className={'about-name-color-block'}/>

            <EmailForm withForm />
        </div>
    )
}

export default AboutMoken