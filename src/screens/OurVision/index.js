import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import './styles.scss';
import Title from "../../components/Title";
import Text from "../../components/Text";
import options from './options'
import Belief from "./Belief";
import Value from "./Value";
import ColorBlock from "../../components/ColorBlock";
import IterableCircle from "../../components/IterableCircle";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../../components/ImageBlock";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import HugeInfoAllListColumn from "../Programs/components/HugeInfoAllListColumn";
import LeftImageTitleSubDesList from "../../components/LeftImageTitleSubDesList";

const OurVision = () => {

    const {isMobile} = useWindowDimensions();

    return (
        <div className={'our-vision-container'}>
            <HeaderTitle
                marginBottom={142}
                title={'OUR VISION'}
                subtitle={'Building brands & transforming ideas.'}
                description={'Built to support founders, Moken is a group of trailblazing companies specialized in all ' +
                'things startup.'}/>

           <ImageBlock position={'right'} />

           <TwoColumnsHugeInfo title={'OUR BELIEFS'}
                               leftTitle={'Empowering one another in creating change around the world.'}
                               rightTitle={`We know that dynamic actions define the future and that the ambition to lead requires
                            the tenacity to adapt. This is why we partner with clients, startups, and founders who
                            challenge themselves to be exceptional leaders and are unwavering in our commitment to do
                             right by our clients, team, partners, and communities. We define our ambitions with clients,
                            then work together as one team to create high levels of value striving to set new standards
                            of excellence within each industry.`}
                               rightFirstListTitle={''}
                               firstList={options.beliefs}
           />

            <LeftImageTitleSubDesList imgUrl={''}
                                      title={'OUR VALUES<'}
                                      subtitle={'We make it easy to kickstart your vision.'}
                                      list={options.values}
                                      description={`With packages at a startup price point, we work with founders and ideators with
                            high growth potential. We're passionate about big ideas and working with people who
                            feel the same`}
            />

            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'GET INVOLVED'}
                        withIcon
                        type={'thin'}
                        size={40}
                        className={'vision-color-block'}
                        backgroundColor={'black'}/>

            <Title title={'HOW IT WORKS'} className={'vision-works-title'}/>

            <section className={'vision-works-container'}>
             <div className={'vision-circles-list-container'}>
                 {
                     options.works.map((join, index) => {
                         return (
                             <IterableCircle {...join}
                                             key={'join' + index}
                                             count={index + 1}
                                             isLast={index === options.works.length - 1} />
                         )
                     })
                 }
             </div>
                <img src={''} className={'vision-works-image'}/>
            </section>

            <EmailForm withForm />

        </div>
    )
}

export default OurVision;
