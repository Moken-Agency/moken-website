import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import TitleRowSubDes from "../../components/TitleRowSubDes";
import options from "./options";
import TitleSubDescRounded from "../Programs/AboutPrograms/TitleSubDescRounded";
import Title from "../../components/Title";
import './index.scss';
import LeftImageTitleSubDesList from "../../components/LeftImageTitleSubDesList";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import EmailForm from "../../components/EmailForm";

const Mentorship = () => {
    return (
        <div className={'mentorship-container'}>
            <HeaderTitle title={'MENTORSHIP'}
                         subtitle={'Success fuelled by partnership.'}
                         description={'Together creating an unmatched global ecosystem.'}
            />

            <ImageBlock position={'right'} />

            <TitleRowSubDes title={'ABOUT MENTORSHIP'}
                            subtitle={'Empowering one another in creating change around the world.'}
                            description={`We know that dynamic actions define the future and that the ambition to lead 
                            requires the tenacity to adapt. This is why we partner with clients, startups, and founders
                             who challenge themselves to be exceptional leaders and are unwavering in our commitment 
                             to do right by our clients, team, partners, and communities. We define our ambitions with 
                             clients, then work together as one team to create high levels of value striving to set
                              new standards of excellence within each industry.`}
            />

            <Title title={'PROGRAM OPPORTUNITIES'} className={'mentorship-partnerships-title'} />

            <section className={'mentorship-partnerships-container'}>
                {
                    options.partnerships.map(((partnership, index) => <TitleSubDescRounded
                        {...partnership}
                        key={'TitleSubDescRounded' + index} />))
                }
            </section>

            <LeftImageTitleSubDesList imgUrl={''}
                                      title={'THE BENEFITS'}
                                      subtitle={'We make it easy to kickstart your vision.'}
                                      description={`With packages at a startup price point, we work with founders and 
                                      ideators with high growth potential. We're passionate about big ideas and working 
                                      with people who feel the same.`}
                                      list={options.benefits}
            />

            <LeftInfoWithRightImage imgUrl={''}
                                    mainTitle={'NEXT STEPS & APPLYING'}
                                    title={'Join our trusted community of partners and market what you do.'}
                                    description={`Our role consists of taking the time to understand your business model, 
                                    and suggesting creative and high-performing digital strategies. Our avant-garde 
                                    tactics are in line with the current market, blend seamlessly with our clients’ 
                                    operational realities, and eliminate risks that aren’t necessary.`}
                                    btnTitle={'APPLY TO INCUBATOR'}
            />

            <EmailForm withForm />
        </div>
    )
}

export default Mentorship
