import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import React from "react";
import './index.scss';
import Title from "../../../../components/Title";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const LeftInfoWithRightImage = ({mainTitle = '',title = '', description = '', btnTitle = '', imgUrl = '', isLeftImage = false}) => {
    const {isMobile} = useWindowDimensions()
    console.log({isMobile});

    return (
            <section className={'left-info-with-right-image-container'}>

                {mainTitle && <Title title={mainTitle} className={'left-info-with-right-image-title'}/>}
                <div className={'left-info-with-right-image-info-container'} style={{flexDirection: isLeftImage ? 'row-reverse' : 'row'}}>
                    <div className={'left-info-with-right-image-text-container'}
                         style={{marginRight: !isLeftImage && !isMobile ? 150 : 0 }}
                    >
                        <Text
                            animationType={'fade-up'}
                            size={55} mobSize={35} type={'extraLight'} containerStyles={{marginBottom: 63}}>{title}</Text>
                        <Text animationType={'fade-up'}
                              size={20}
                              mobSize={16}
                              type={'light'}
                              textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                              containerStyles={{marginBottom: 85}}>{description}</Text>
                        {btnTitle && <Button size={14} title={btnTitle} backgroundColor={'black'} textColor={'white'}/>}
                    </div>
                   <img src={imgUrl}
                        data-aos="fade-in"
                        className={'left-info-with-right-image-image'}
                        style={{marginRight: isLeftImage && !isMobile ? 150 : 0}}/>
                </div>
            </section>
    )
}

export default LeftInfoWithRightImage