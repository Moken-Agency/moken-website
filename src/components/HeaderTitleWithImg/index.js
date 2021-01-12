import React from "react";
import Text from "../Text";
import Subtitle from "../Subtitle";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const HeaderTitleWithImg = ({title = '', subtitle = '', imgURL = '', withHeaderTitleWithImg, color = 'black', backgroundImage = '', className = ''}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <>
            {withHeaderTitleWithImg ? <div className={`header-title-with-img-container ${className}`}
                                           style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className={'header-title-with-img-title-container'}>
                    <Text type={'semiBold'} mobSize={14}
                          color={color}
                          size={16}
                          animationType={'fade-in'}
                          textStyles={{letterSpacing: 4, marginBottom: isMobile ? 50 : 20}}>{title}</Text>
                              <Text size={75} textStyles={{lineHeight: '80px'}} color={color} type={'thin'}>
                                  {subtitle}
                              </Text>
                </div>
            </div> : null}
        </>
    )
}

export default HeaderTitleWithImg
