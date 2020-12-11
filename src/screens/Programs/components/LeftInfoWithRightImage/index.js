import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import React from "react";
import './index.scss';
import Title from "../../../../components/Title";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const LeftInfoWithRightImage = ({mainTitle = '',title = '', description = '', btnTitle = '', imgUrl = '', isLeftImage = false}) => {
    const {isMobile} = useWindowDimensions()

    return (
            <section className={'labs-driven-container'}>
                {isMobile && <img src={imgUrl} className={'labs-driven-image'}/>}

                {mainTitle && <Title title={mainTitle} className={'labs-driven-title'}/>}
                <div className={'labs-driven-info-container'} style={{flexDirection: isLeftImage ? 'row-reverse' : 'row'}}>
                    <div className={'labs-driven-text-container'} style={{marginRight: !isLeftImage && !isMobile ? 100 : 0 }}>
                        <Text size={55} mobSize={35} type={'extraLight'} containerStyles={{marginBottom: 63}}>{title}</Text>
                        <Text size={20} mobSize={16} type={'light'} containerStyles={{marginBottom: 85}}>{description}</Text>
                        {btnTitle && <Button title={btnTitle} color={'black'}/>}
                    </div>
                    {!isMobile && <img src={imgUrl}
                                       className={'labs-driven-image'}
                                       style={{marginRight: isLeftImage ? 100 : 0}}/>}
                </div>
            </section>
    )
}

export default LeftInfoWithRightImage
