import Text from "../Text";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './index.scss';

const HeaderWithBackground = ({mobBackground, webBackground, title = '', subtitle = '', containerStyles = {}}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <>
            {
                title !== '' ?  <section className={'header-with-background-container'}
                                         style={{...containerStyles,
                                             backgroundImage: `url(${isMobile ? mobBackground : webBackground})`}}>
                    <Text size={isMobile ? '2vw' : '1vw'}
                          className={'header-with-background-join-us'}
                          type={'semiBold'}
                          color={'white'}>{title}</Text>
                    <Text size={isMobile ? '10vw' : '4.5vw'}
                          className={'header-with-background-upcoming-events'}
                          type={'thin'}
                          color={'white'}>{subtitle}</Text>
                </section> : null
            }
        </>
    )
}

export default HeaderWithBackground
