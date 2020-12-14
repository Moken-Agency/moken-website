import React from "react";
import ImageBlock from "../../components/ImageBlock";
import TitleTwoDescriptions from "../../components/TitleTwoDescriptions";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import './index.scss';
import ColorBlock from "../../components/ColorBlock";

const CommunityPartnerScreen = () => {
    return (
        <div className={'community-partner-screen'}>
            <ImageBlock position={'right'} />
            <TitleTwoDescriptions mainTitle={'OVERVIEW'}
                                  title={`A global startup program that fosters and invests in bright and passionate 
                                  early stage founders with cutting-edge ideas.`}
                                  firstDescription={`We provide seed funding, strategic mentorship, a creative workspace,
                                   a multitude of perks, entrepreneurship-focused business training, and directly support 
                                   our startups through an expansive network of partner entities, mentors and investors.
                                    We create an environment where you can advance your company an incredible amount in a
                                     short period of time.`}
                                  secondDescription={`We partner with innovators through our tailored and integrative 
                                  expertise, complemented by a vibrant ecosystem of game-changing partners to deliver 
                                  accelerated, superior, and impactfully driven outcomes.`}
            />

            <LeftInfoWithRightImage mainTitle={'WHO ARE COMMUITY PARTNERS'}
                                    title={'Enthusiastic individuals working together to create extraordinary startups'}
                                    description={`Our role consists of taking the time to understand your business
                                     model, and suggesting creative and high-performing digital strategies. 
                                     Our avant-garde tactics are in line with the current market, blend seamlessly
                                      with our clients’ operational realities, and eliminate risks that aren’t necessary.`}
                                    imgUrl={''}
                                    isLeftImage
            />

            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'SPONSOR INNOVATION WEEK'}
                        withIcon
                        textColor={'black'}
                        backgroundColor={'grey'}
                        type={'thin'}
                        className={'for-investors-color-block'}
                        size={30}

            />


        </div>
    )
}

export default CommunityPartnerScreen
