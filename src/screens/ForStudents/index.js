import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import options from './options';
import EmailForm from "../../components/EmailForm";
import './index.scss';
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";

const ForStudents = () => {
    return (
        <div className={'for-students-container'}>
            <HeaderTitle title={'FOR STUDENTS'}
                         subtitle={'Success fuelled by partnership.'}
                         description={'The future generation is the core of our community. ' +
                         'They work with us to create a future that is better than tthe last.'}
            />

            <ImageBlock position={'right'}
                        url={''}
            />

            <LeftInfoWithRightImage title={'We are driven by the passion for working with determined innovators who live to make a change in the world.'}
                                    mainTitle={'JOIN THE NETWORK'}
                                    description={`We understand that together we should see results, not just reports with the work we do. 
                                    We've developed tailor-made strategies that assist in beating out the competition by tearing up the rule book.
                                     Through our agile approach, entrepreneurs, founders, and startups overcome the odds by predicting, measuring, 
                                     mitigating, and managing the risk associated with innovation. `}
                                    btnTitle={'APPLY TO INCUBATOR'}
            />

            <LeftInfoWithRightImage title={'Enthusiastic individuals working together to create extraordinary'}
                                    mainTitle={'AMBASSADOR PROGRAM'}
                                    description={`Our role consists of taking the time to understand your business model,
                                     and suggesting creative and high-performing digital strategies. Our avant-garde tactics
                                      are in line with the current market, blend seamlessly with our clients’ operational 
                                      realities, and eliminate risks that aren’t necessary.`}
                                    btnTitle={'APPLY TO INCUBATOR'}
                                    isLeftImage
            />

            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'APPLY NOW'}
                        withIcon
                        textColor={'black'}
                        backgroundColor={'grey'}
                        type={'thin'}
                        className={'for-students-color-block'}
                        size={30}

            />

            <LeftInfoWithRightImage title={'Join our trusted community of partners and market what you do.'}
                                    mainTitle={'COURSES'}
                                    description={`Our role consists of taking the time to understand your business model,
                                     and suggesting creative and high-performing digital strategies. Our avant-garde 
                                     tactics are in line with the current market, blend seamlessly with our clients’
                                      operational realities, and eliminate risks that aren’t necessary.`}
                                    btnTitle={'APPLY TO INCUBATOR'}
            />


            <ProgramCommunityListPartner title={'PROGRAMS'}
                                         subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                                         options={options.programs}
            />

            <TwoColumnsHugeInfo title={'MOKEN AGENCY'}
                                leftTitle={'Enthusiastic individuals working together to create extraordinary startups.'}
                                rightTitle={'From ideation stage to high growth innovation, our role consists of taking the time to understand your business model, suggest creative and high-performing strategies, while implementing crucial aspects to supplement your growing needs. Our avant-garde tactics are in line with the current market, blending seamlessly with each startup’s operational realities, while eliminating risks that aren’t necessary.\n' +
                                '\n'}
                                rightFirstListTitle={'HOW WE CAN COLLABORATE'}
                                firstList={options.collaborates}
                                rightSecondListTitle={'CHOOSE YOUR PURPOSE'}
                                secondList={options.purposes}
                                secondListWithIcon
            />


            <EmailForm withForm />


        </div>
    )
}

export default ForStudents
