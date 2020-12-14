import React from 'react';
import './index.scss';
import Text from '../../components/Text';
import FirstImage from '../../images/package-first.svg'
import SecondImage from '../../images/package-second.svg'
import Title from "../../components/Title";
import EmailForm from "../../components/EmailForm";
import options from "./options";
import Package from "./components/Package";
const { packages } = options;

const StartUpSmart = () => {
    return (
        <div className={'start-up-smart-container'}>
            <div className={'start-up-smart-first'}>
                <Text className={'start-up-smart-first-text-first'}
                      type={'semiBold'}
                      size={'1vw'} mobSize={14}>STARTUPSMART PACKAGES</Text>
                <Text className={'start-up-smart-first-text-second'} mobSize={45} type={'thin'} size={'4.4vw'}>
                    Building unforgettable brands for start-ups with ambition.
                </Text>
            </div>
            <div className={'start-up-smart-second'}>
                <img src={FirstImage} />
            </div>
            <Title className={'start-up-smart-third-title'} title={'STARTING UP SMART'} />

            <div className={'start-up-smart-third'}>
                <Text mobSize={35} className={'start-up-smart-third-text-first'} type={'extraLight'} size={'3vw'}>We increase website leads, maximize revenu and produce a positive ROI — validated with measurable results.</Text>
                <Text mobSize={16} className={'start-up-smart-third-text-second'} type={'light'} size={'1.5vw'}>People do not simply buy products or services, they buy brands with a purpose. By providing unique brand experiences, a startup is able to effectively convert potential users into brand ambassadors and differentiate themselves at an early stage from competitors. At Kenergy, we work directly with founders to create brands that defy the odds, defeat big competition and disrupt their industries.  </Text>
                <Text mobSize={12} className={'start-up-smart-third-text-third'} type={'semiBold'} size={'1vw'}>GET IN TOUCH</Text>
            </div>
            <div className={'start-up-smart-forth'}>
                <img src={SecondImage} />
            </div>

            <div className={'start-up-smart-fifth'}>
                <Text mobSize={10} className={'start-up-smart-fifth-text-first'} size={'1vw'}>STARTUP PACKAGES</Text>
                <Text mobSize={35} className={'start-up-smart-fifth-text-second'} type={'extraLight'} size={'3.4vw'}>We make it easy to kickstart your vision.</Text>
                <Text mobSize={16} className={'start-up-smart-fifth-text-third'} type={'light'} size={'1.2vw'}>With packages at a startup price point, we work with founders and ideators with high growth potential. We're passionate about big ideas and working with people who feel the same.</Text>
            </div>

            <div className={'packages-container'}>
                {
                    packages.map((packageItem, index) => {
                        return (
                            <Package {...packageItem} key={'package' + index}/>
                        )
                    })
                }
            </div>


            <div className={'start-up-smart-sixth'}>
                <Text mobSize={10} size={'1vw'} className={'start-up-smart-sixth-text-first'} type={'semiBold'}>TRUSTED BY</Text>
                <Text mobSize={35} size={'3vw'} className={'start-up-smart-sixth-text-first'} type={'extraLight'}>We push boundaries, question assumptions and get results. Ready?</Text>

            </div>

            <EmailForm withForm />


        </div>
    )
}

export default StartUpSmart
