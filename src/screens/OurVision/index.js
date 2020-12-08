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

const OurVision = () => {
    return (
        <div className={'our-vision-container'}>
            <HeaderTitle
                marginBottom={142}
                title={'OUR VISION'}
                subtitle={'Building brands & transforming ideas.'}
                description={'Built to support founders, Moken is a group of trailblazing companies specialized in all ' +
                'things startup.'}/>

            <section className={'vision-first-image-block'}>
                <img src={''} />
            </section>

            <section className={'vision-beliefs-container'}>
                <Title title={'OUR BELIEFS'} className={'vision-beliefs-title'}/>
                <div className={'vision-beliefs-info-container'}>
                    <Text size={55} type={'extraLight'} className={'vision-beliefs-subtitle'}>Empowering one another in creating change around the world.</Text>
                    <div className={'vision-beliefs-info-right-container'}>
                        <Text size={20} type={'light'} className={'vision-beliefs-info-right-container-text'}>We know that dynamic actions define the future and that the ambition to lead requires
                            the tenacity to adapt. This is why we partner with clients, startups, and founders who
                            challenge themselves to be exceptional leaders and are unwavering in our commitment to do
                             right by our clients, team, partners, and communities. We define our ambitions with clients,
                            then work together as one team to create high levels of value striving to set new standards
                            of excellence within each industry.</Text>

                       <div className={'vision-beliefs-list-container'}>
                           {
                               options.beliefs.map((belief, index) => {
                                   return <Belief key={index + 'belief'} {...belief}/>
                               })
                           }
                       </div>
                    </div>
                </div>
            </section>

            <section className={'vision-values-container'}>
                <img src={''} className={'vision-values-main-image'} />
                <div>
                    <div className={'vision-values-right-container'}>
                        <Text size={16} type={'semiBold'} className={'vision-values-right-title'}>OUR VALUES</Text>
                        <Text size={55} type={'extraLight'} className={'vision-values-right-subtitle'}>We make it easy to kickstart your vision.</Text>
                        <Text size={20} type={'light'} className={'vision-values-right-text'}>With packages at a startup price point, we work with founders and ideators with
                            high growth potential. We're passionate about big ideas and working with people who
                            feel the same.</Text>
                    </div>
                    {
                        options.values.map((value) => <Value {...value}/>)
                    }
                </div>
            </section>

            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'GET INVOLVED'}
                        withIcon
                        type={'thin'}
                        size={40}
                        className={'vision-color-block'}
                        backgroundColor={'black'}/>

            <Title title={'HOW IT WORKS'} className={'vision-works-title'}/>

            <section className={'vision-works-container'}>
             <div>
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

            <EmailForm title={'Stay in the loop & never miss a thing.'} width={'20vw'} withForm/>

        </div>
    )
}

export default OurVision;
