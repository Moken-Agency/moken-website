import React from "react";
import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import './index.scss'
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const Event = () => {
    const {isMobile} = useWindowDimensions()

    return (
        <div className={'event-container'}>
            <div>
                <Title title={'Event date'.toUpperCase()} containerStyles={{padding: 0, whiteSpace: 'nowrap'}}/>
            </div>
            <div>
                <div style={{padding: '5vw 8vw'}}>
                    <Text size={isMobile ? '9vw' : '4.5vw'}
                          type={'extraLight'} containerStyles={{marginBottom: '2vw'}}>Event title goes here</Text>
                    <Text  size={isMobile ? '4vw' : '1.6vw'}
                           type={'light'}
                           textStyles={{lineHeight: isMobile ? '5vw' : '3vw'}}>
                        Our role consists of taking the time to understand your business model,
                        and suggesting creative and high-performing digital strategies.
                        Our avant-garde tactics are in line with the current market,
                        blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.
                    </Text>
                </div>

                <div className={'events-button-container'}>
                    <Button title={'LEARN MORE'}  color={'white'}/>
                    <Button title={'ATTEND EVENT'} color={'black'}/>
                </div>
            </div>
        </div>
    )
}
export default Event
