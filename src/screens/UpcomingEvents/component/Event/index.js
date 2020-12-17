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
                <div style={{padding: isMobile ? '' : '4.1vw 9.5vw 7vw 9.5vw', marginBottom: isMobile  ? 90 : 0}}>
                    <Text size={isMobile ? '9vw' : '3.4vw'}
                          mobSize={35}
                          type={'extraLight'} containerStyles={{marginBottom: isMobile ? 54: '2vw'}}>Event title goes here</Text>
                    <Text  size={'1.6vw'}
                           type={'light'}
                           mobSize={16}
                           textStyles={{lineHeight: isMobile ? '24px' : '3vw'}}>
                        Our role consists of taking the time to understand your business model,
                        and suggesting creative and high-performing digital strategies.
                        Our avant-garde tactics are in line with the current market,
                        blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.
                    </Text>
                </div>

                <div className={'events-button-container'}>
                    <Button title={'LEARN MORE'}  backgroundColor={'white'} textColor={'black'}/>
                    <Button title={'ATTEND EVENT'} backgroundColor={'black'} textColor={'white'}/>
                </div>
            </div>
        </div>
    )
}
export default Event
