import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import ProgramSwiper from "../Programs/components/ProgramSwiper";
import options from './options';
import EmailForm from "../../components/EmailForm";
import './index.scss';
import HeaderSecondType from "../../components/HeaderSecondType";

const AdvertiseWithUs = () => {
    return (
        <div className={'advertise-with-us-container'}>

            <HeaderSecondType title={'ADVERTISE WITH US'}
                              subtitle={'Building unforgettable brands for start-ups with ambition.'}/>

            <ImageBlock position={'right'}/>

            <TitleTwoDescriptions mainTitle={`OVERVIEW`}
                                  title={`A global startup program that fosters and invests in bright and passionate
                                   early stage founders with cutting-edge ideas.`}
                                  firstDescription={`We provide seed funding, strategic mentorship, a creative workspace,
                                   a multitude of perks, entrepreneurship-focused business training, and directly support 
                                   our startups through an expansive network of partner entities, mentors and investors.
                                    We create an environment where you can advance your company an incredible amount in
                                     a short period of time.`}
                                  secondDescription={`We partner with innovators through our tailored and integrative 
                                  expertise, complemented by a vibrant ecosystem of game-changing partners to deliver 
                                  accelerated, superior, and impactfully driven outcomes.`}
            />

            <LeftInfoWithRightImage mainTitle={'WHO IS OUR AUDIENCE'}
                                    title={'Enthusiastic individuals working together to create extraordinary startups'}
                                    description={`Our role consists of taking the time to understand your business model,
                                     and suggesting creative and high-performing digital strategies. Our avant-garde 
                                     tactics are in line with the current market, blend seamlessly with our clients’ 
                                     operational realities, and eliminate risks that aren’t necessary.`}
                                    isLeftImage
            />

            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'SPONSOR INNOVATION WEEK'}
                        withIcon
                        textColor={'black'}
                        backgroundColor={'grey'}
                        type={'thin'}
                        className={'advertise-with-us-color-block'}
                        size={30}

            />

            <ProgramSwiper options={options.components}
                           title={'SPONSORSHIP OPPORTUNITIES'}
                           subtitle={'We increase website leads, maximize revenue and produce.'}
            />

            <LeftInfoWithRightImage title={'We are driven by the passion for working with determined innovators who live to make a change in the world.'}
                                    description={`We understand that together we should see results, not just reports with the 
                                    work we do. We've developed tailor-made strategies that assist in beating out the 
                                    competition by tearing up the rule book. Through our agile approach, entrepreneurs, 
                                    founders, and startups overcome the odds by predicting, measuring, mitigating, and
                                     managing the risk associated with innovation. `}
                                    mainTitle={'WHO IS THIS PROGRAM FOR?'}
                                    btnTitle={'APPLY TO INCUBATOR'}
                                    imgUrl={''}
            />

            <EmailForm withForm />


        </div>
    )
}
export default AdvertiseWithUs
