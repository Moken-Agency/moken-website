import Text from "../Text";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './index.scss';
import ArrowUpRight from '../../images/arrow-up-right.png'


const ColorBlock = ({title = '', subtitle = '', backgroundColor = '', className = '', textWidth = '40vw', textColor = 'white', size = '4.5vw',
                        withIcon = false}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <>
            {backgroundColor !== '' ? <section className={`block-container ${className}`} style={{backgroundColor}}>
                <Text size={isMobile ? '9vw' : size}
                      type={'thin'}
                      color={textColor}
                      className={'block-container-history'}
                      containerStyles={{width: isMobile ? 'auto' : textWidth}}>{title}</Text>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Text size={isMobile ? '3vw' : '.95vw'}
                          type={'semiBold'}
                          textStyles={{letterSpacing: isMobile ? 3 : 4}}
                          className={'block-container-connect'}
                          color={textColor}>{subtitle}</Text>
                    {withIcon ? <img src={ArrowUpRight}  className={'color-block-image'}/> : null}
                </div>

            </section> : null}
            </>
    )
}

export default ColorBlock
