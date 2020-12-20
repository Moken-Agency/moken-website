import React from "react";
import Text from "../Text";
import Subtitle from "../Subtitle";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const HeaderTitleWithImg = ({title = '', subtitle = '', imgURL = '', withHeaderTitleWithImg, color = 'black'}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <>
            {withHeaderTitleWithImg ? <div className={'header-title-with-img-container'}>
                <div className={'header-title-with-img-title-container'}>
                    <Text type={'semiBold'} mobSize={14}
                          color={color}
                          animationType={'fade-in'}
                          textStyles={{letterSpacing: 4, marginBottom: isMobile ? 50 : 0}}>{title}</Text>
                    <Subtitle type={'thin'} color={color} subtitle={subtitle}
                              containerStyles={{padding: 0}}/>
                </div>
                <div className={'header-title-with-image-container'} data-aos="fade-in">
                    <img src={imgURL}/>
                </div>
            </div> : null}
        </>
    )
}

export default HeaderTitleWithImg
