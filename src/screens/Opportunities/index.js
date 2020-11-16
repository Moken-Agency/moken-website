import React from 'react';
import Text from '../../components/Text'
import Subtitle from "../../components/Subtitle";
import './index.scss';
import options from "./options";
import Opportunity from "../../components/Oppurtunity";
import Title from "../../components/Title";
import Input from "../../components/Input";
import SubmitYourResume from "../../components/SubmitYourResume";
import 'reactjs-popup/dist/index.css';
import ReportBug from "../../components/ReportBug";
import Popup from 'reactjs-popup';

const Opportunities = () => {
    return (
        <div className={'opportunities-container'}>
           <ReportBug />
            <section className={'opportunities-title-container'}>
                <Text type={'semiBold'} size={'1vw'} className={'main-title'}>CAREER OPPORTUNITIES</Text>
                <Subtitle size={'4.15vw'} subtitle={'Work that matters.'} type={'thin'} className={'subtitle'}/>
            </section>
            <section className={'opportunities-image-block-container'}>
                <img src={''} className={'opportunities-image-block'}/>
            </section>
            <Subtitle
                className={'opportunities-second-title'}
                size={'3.1vw'}
                subtitle={'We hire people that can hit the ground running,' +
                ' but you won’t be alone, we’re here to help you make an impact.'}/>
            <div className={'opportunities-list-container'}>
                {
                    options.map((opportunity, index) => {
                        return (
                            <Opportunity {...opportunity}
                                         key={index + 'opportunities'}
                                         width={'71vw'}
                                         stylesContainer={{padding: '2vw 5vw', borderColor: '#efefef'}}/>
                        )
                    })
                }
            </div>

            <Title size={'1vw'} title={'UNLIMITED OPPORTUNITIES'}  containerStyles={{marginTop: '14vw'}}/>

            <section className={'opportunities-form-container'}>
                <div className={'opportunities-form-left-container'}>
                    <Text size={'3vw'} subtitle={'Not exactly what you were looking for?'} type={'extraLight'} className={'subtitle'}>
                        Not exactly what you were looking for?
                    </Text>
                    <Text type={'light'} size={'1.2vw'} className={'left-second-title'}>The Moken team is growing at a rapid pace, to stay in the loop and explore ways to work
                        together join our mailing list to never miss a beat.</Text>
                    <div className={'input-container'}>
                        <Input placeholder={'Your name'} width={'12vw'}/>
                        <Input placeholder={'Email'} width={'12vw'} withGoButton/>
                    </div>
                </div>

                <div className={'opportunities-form-right-container'}>
                    <Text type={'semiBold'} size={'.8vw'}
                          containerStyles={{marginBottom: '1.5vw'}}
                          textStyles={{letterSpacing: 4}}
                    className={'right-first-title'}>TAKE A CHANCE</Text>
                    <Text type={'light'} size={'1.2vw'} className={'right-second-title'}>Not everyone fits into a pre-defined job description. Whether you’re a professional ostrich babysitter or an expert software engineer, we look for unconventional excellence. Tell us how you think you can contribute.

                        Who knows, maybe you’re exactly what we’ve been looking for all along.</Text>
                    <SubmitYourResume color={'black'} onClick={() => alert('submot resume')} className={'submit'}/>

                </div>

            </section>
        </div>
    )
}

export default Opportunities
