import React from 'react';
import Text from "../../components/Text";
import './index.scss';
import Title from "../../components/Title";
import options from './options';
import ExpertiseItem from "./components/ExpertiseItem";
import Button from "../../components/Button";
import ExpertiseImage from '../../images/expertise.png'
const {gettingStarted, marketing, product} = options;

const Expertise = () => {
    return (
        <div className={'expertise-container'}>
            {/*<div className={'expertise-circle-main'}>*/}
            {/*    <div className={'expertise-circle-second'}/>*/}
            {/*</div>*/}
            <div className={'expertise-first-wrapper'}>
                <Text className={'expertise-title'} size={'1vw'} mobSize={14} type={'semiBold'} mobColor={'white'}>EXPERTISE</Text>
                <Text className={'expertise-subtitle'} type={'thin'} size={'3.5vw'} mobSize={45} mobColor={'white'}>Let’s Build the Future</Text>
            </div>
            <div className={'expertise-second-wrapper'}>
                <Title className={'expertise-started-title'} title={'GETTING STARTED'} />
                <Text className={'expertise-started-subtitle'}
                      type={'extraLight'}
                      size={'3vw'}
                      mobSize={35}>Join our trusted community of partners and market what you do to founders and startups, globally.</Text>
            </div>
            <div className={'expertise-items-container'}>
                {
                    gettingStarted.map((props, index) => {
                        return (
                            <ExpertiseItem {...props} key={'expertise item ' + index} />
                        )
                    })
                }
            </div>
            <Title className={'expertise-started-title'} title={'PRODUCT'} />
            <div className={'expertise-items-container'}>
                {
                    marketing.map((props, index) => {
                        return (
                            <ExpertiseItem {...props} key={'expertise item ' + index} />
                        )
                    })
                }
            </div>
            <Title className={'expertise-started-title'} title={'MARKETING & GROWTH'} />
            <div className={'expertise-items-container'}>
                {
                    product.map((props, index) => {
                        return (
                            <ExpertiseItem {...props} key={'expertise item ' + index} />
                        )
                    })
                }
            </div>

            <div className={'expertise-bottom-container'}>
                <div className={'expertise-bottom-block-container'}>
                    <div className={'expertise-bottom-info-container'}>
                        <div className={'expertise-bottom-first-info-container'}>
                            <Title color={'white'} title={'TAKE A CHANCE'} className={'expertise-bottom-first-info-title'} />
                            <Text color={'white'}
                                  type={'extraLight'}
                                  size={'3vw'}
                                  mobSize={35}
                                  className={'expertise-bottom-first-info-text-first'}>Not exactly what you were looking for?</Text>
                            <Text color={'white'}
                                  type={'light'}
                                  size={'1vw'}
                                  mobSize={16}
                                  className={'expertise-bottom-first-info-text-second'}>Not everyone fits into a pre-defined job description. Whether you’re a professional ostrich babysitter or an expert developer, we look for unconventional excellence. Tell us how you think you can contribute.</Text>
                            <Text color={'white'}
                                  type={'light'}
                                  size={'1vw'}
                                  mobSize={16}
                                  className={'expertise-bottom-first-info-text-third'}>Who knows, maybe you’re exactly what we’ve been looking for all along.</Text>
                        </div>
                        <div className={'expertise-bottom-btn-container'}>
                            <Button title={'ROADMAPS & SPRINTS'}
                                    color={'black'}
                                    type={'bordered-white'}
                                    containerStyles={{marginRight: '2vw'}}/>
                            <Button title={'STARTUPSMART'} color={'white'} type={'bordered-white'}/>
                        </div>
                    </div>
                    <img src={ExpertiseImage} />
                </div>
            </div>
        </div>
    )
}

export default Expertise
