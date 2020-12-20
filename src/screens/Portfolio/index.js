import React from 'react';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './index.scss';
import { useHistory } from "react-router-dom";
import Text from "../../components/Text";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";

import options from './portfolio-options';
import Startups from "./components/Startups";
import Company from "./components/Company";
import ColorBlock from "../../components/ColorBlock";
import HeaderSecondType from "../../components/HeaderSecondType";

const {startups, companies} = options;


const Portfolio = (props) => {
    const {isMobile} = useWindowDimensions()
    let history = useHistory();


    return (
        <div className={'portfolio-container'}>
            <section className={'portfolio-section-info'}>
                <Text
                      type={'semiBold'}
                      size={16}
                      mobSize={14}
                      animationType={'fade-in'}
                      textStyles={{letterSpacing: 4}}
                      className={'portfolio-title-first'}>PORTFOLIO</Text>
                <Text size={'4.5vw'}
                      type={'thin'}
                      animationType={'fade-in'}
                      mobSize={45}
                      className={'portfolio-title-second'}>
                    Great ideas driven by amazing people scaling for success.</Text>
                <div className={'portfolio-startups-container'}>
                    {
                        startups.map((startup, index) => {
                            return (
                                <Startups {...startup} key={'startups' + index}/>
                            )
                        })
                    }
                </div>
            </section>

            <div className={'companies-container'}>
                {
                    companies.map((company, index) => {
                        return (
                            <Company {...company}  key={'company portfolio' + index}/>
                        )
                    })
                }
            </div>
            <ColorBlock title={'Do you want to be the next to make history?'}
                        subtitle={'CONNECT WITH US'}
                        textWidth={'45vw'}
                        backgroundColor={'#000'}
                        className={'portfolio-color-block'}
            />
            {/*<section className={'block-container'}>*/}
            {/*    <Text size={isMobile ? '9vw' : '5vw'}*/}
            {/*          type={'thin'}*/}
            {/*          color={'white'}*/}
            {/*          className={'block-container-history'}*/}
            {/*          containerStyles={{width: isMobile ? 'auto' : '40vw'}}>Do you want to be the next to make history?</Text>*/}
            {/*    <Text size={isMobile ? '3vw' : '1.3vw'}*/}
            {/*          type={'semiBold'}*/}
            {/*          className={'block-container-connect'}*/}
            {/*          color={'white'}>CONNECT WITH US</Text>*/}
            {/*</section>*/}
        </div>

    )
}

export default Portfolio
