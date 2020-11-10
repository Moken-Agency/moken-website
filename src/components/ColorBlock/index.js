import Text from "../Text";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './index.scss';

const ColorBlock = ({title = '', subtitle = '', backgroundColor = '', className = '', textColor = 'white'}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <>
            {backgroundColor !== '' ? <section className={`block-container ${className}`} style={{backgroundColor}}>
                <Text size={isMobile ? '9vw' : '5vw'}
                      type={'thin'}
                      color={textColor}
                      className={'block-container-history'}
                      containerStyles={{width: isMobile ? 'auto' : '40vw'}}>{title}</Text>
                <Text size={isMobile ? '3vw' : '1.3vw'}
                      type={'semiBold'}
                      className={'block-container-connect'}
                      color={textColor}>{subtitle}</Text>
            </section> : null}
            </>
    )
}

export default ColorBlock
