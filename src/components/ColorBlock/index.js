import Text from "../Text";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './index.scss';
import ArrowUpRight from '../../images/arrow-up-right.png'
import ArrowUpRightWhite from '../../images/arrow-up-right-white.png'


const ColorBlock = ({title = '', subtitle = '', backgroundColor = '', className = '', textWidth = '40vw', textColor = 'white', size = '4.5vw',
                        withIcon = false, type = 'extraLight', mobSize = '9vw'}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <>
            {backgroundColor !== '' ? <section className={`block-container ${className}`} style={{backgroundColor}}>
                <Text size={size}
                      type={type}
                      mobSize={mobSize}
                      color={textColor}
                      className={'block-container-history'}
                      containerStyles={{width: isMobile ? 'auto' : textWidth}}>{title}</Text>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Text size={ '.95vw' }
                          type={'semiBold'}
                          mobSize={'3vw'}
                          textStyles={{letterSpacing: isMobile ? 3 : 4}}
                          className={'block-container-connect'}
                          color={textColor}>{subtitle}</Text>
                    {withIcon ? <img src={textColor === 'black' ? ArrowUpRight : ArrowUpRightWhite}  className={'color-block-image'}/> : null}
                </div>

            </section> : null}
            </>
    )
}

export default ColorBlock
