import React, {useState} from 'react';
import './index.scss';
import Text from '../../components/Text';
import Title from '../../components/Title';
import options from './options';
import Opportunity from "../../components/Oppurtunity";
import Subtitle from "../../components/Subtitle";
import Benefit from "./components/Benefit";
import Description from "../../components/Description";
import SubmitYourResume from "../../components/SubmitYourResume";
import {useHistory} from 'react-router-dom';
import CareersMobImg from '../../images/careersMob.png';


const Careers = () => {
    const history = useHistory();

    return (
        <div className={'careers-container'}>
            <section className={'careers-first-section'}>
                <div className={'careers-first-text-container'}>
                    <Text size={'1vw'} mobSize={14} type={'semiBold'} className={'careers-first-section-first-title'}>CAREERS</Text>
                    <Text size={'5vw'} mobSize={45} type={'thin'} className={'careers-first-section-second-title'}>A team of experts who learn by doing.</Text>
                    <Text size={'1.35vw'} mobSize={16} type={'light'} className={'careers-first-section-third-title'}>Powered by people and elevated by technology. If you’re looking for an opportunity to take your
                        career forwards join us and help create change with the global brands of tomorrow.</Text>
                </div>
            </section>
            <img className={'image-section'} src={''} />

            <section className={'careers-second-section'}>
                <Title className={'careers-second-title'} title={'NEW OPPORTUNITIES'}/>
                <div className={'careers-second-container'}>
                    <Subtitle subtitle={'We’re hiring. If something piques your interest, let us know.'}
                              mobSize={35}
                              className={'careers-second-subtitle'}/>
                    <div className={'opportunities-container'}>
                        {
                            options.opportunities.map((opportunity, index) => {
                                return (
                                    <Opportunity  width={'auto'} {...opportunity} key={index + 'opportunities'} />
                                )
                            })
                        }
                        <Text size={22}
                              type={'semiBold'}
                              className={'text-submit'}
                              onClick={() => history.push('/opportunities')}>View all opportunities</Text>
                    </div>
                </div>
            </section>

            <section className={'careers-third-section'}>
                <Title className={'careers-third-title'} title={'BENEFITS & PERKS'}/>
                <div className={'careers-third-container'}>
                    <Subtitle subtitle={'Discover why our team is the reason our community keeps coming back for more.\n'}
                              mobSize={35}
                              className={'careers-third-subtitle'}/>
                    <div className={'benefits-container'}>
                        {
                            options.benefits.map((benefit, index) => {
                                return (
                                    <Benefit {...benefit} key={index + 'benefits'} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className={'careers-forth-section'}>
                <div className={'careers-black-block-container'}>
                    <div className={'careers-black-block-left-container'}>
                        <img className={'careers-mob-img'} src={CareersMobImg} />
                        <Title size={'.8vw'} className={'careers-black-block-title'} title={'TAKE A CHANCE'} color={'white'}/>
                        <Subtitle mobSize={35} size={'3.15vw'} subtitle={'Not exactly what you were looking for?'} color={'white'}/>
                        <Description color={'white'}
                                     mobSize={16}
                                     size={'1vw'}
                                     description={[
                                         {title: 'Not everyone fits into a pre-defined job description. Whether you’re a professional ostrich babysitter or an expert developer, we look for unconventional excellence. Tell us how you think you can contribute.'},
                                         {title: 'Who knows, maybe you’re exactly what we’ve been looking for all along.'}
                                         ]} />
                        {/*<Text size={22} type={'semiBold'} color={'white'}  className={'text-submit'}>Submit you resume</Text>*/}
                        <SubmitYourResume onClick={() => alert('submot resume')}/>
                    </div>
                    <div className={'careers-black-block-right-container'}>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Careers