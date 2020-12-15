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
                         style={{marginRight: !isLeftImage && !isMobile ? 100 : 0 }}
                    >
                        <Text size={55} mobSize={35} type={'extraLight'} containerStyles={{marginBottom: 63}}>{title}</Text>
                        <Text size={20}
                              mobSize={16}
                              type={'light'}
                              textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                              containerStyles={{marginBottom: 85}}>{description}</Text>
                        {btnTitle && <Button size={14} title={btnTitle} color={'black'}/>}
                    </div>
                   <img src={imgUrl}
                        className={'left-info-with-right-image-image'}
                        style={{marginRight: isLeftImage && !isMobile ? 100 : 0}}/>
                </div>
            </section>
    )
}

export default LeftInfoWithRightImage
