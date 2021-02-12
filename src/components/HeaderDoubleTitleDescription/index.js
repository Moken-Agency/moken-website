import Text from "../Text";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './index.scss';

const HeaderDoubleTitleSubtitleDescription = ({titleFirst = '',
                                                  subtitle = '',
                                                  titleConjunctions = '',
                                                  titleSecond ='',
                                                  description = ''
}) => {
    const { isMobile } = useWindowDimensions();

    return (
        <div className={'header-double-container'}>
            <div className={'header-double-wrapper'}>
                <div
                    className={'header-double-title-container'}
                >
                    <Text
                        size={16}
                        type={"semiBold"}
                        mobSize={14}
                        animationType={"fade-in"}
                        color={"#cdcdcdcd"}
                        textStyles={{ letterSpacing: 4 }}
                    >
                        {titleFirst}
                        <span>&nbsp;</span>
                    </Text>
                    <Text
                        size={".95vw"}
                        type={"semiBold"}
                        mobSize={14}
                        animationType={"fade-in"}
                        textStyles={{ letterSpacing: 4, marginBottom: isMobile ? 70 : 0 }}
                    >{`${titleConjunctions} ${titleSecond}`}</Text>
                </div>
                <Text
                    size={75}
                    type={"thin"}
                    mobSize={45}
                    animationType={"fade-in"}
                    textStyles={{ lineHeight: isMobile ? '45px' : '75px'}}
                    containerStyles={{ marginBottom: isMobile ? 32 : "32px" }}
                    className={'header-double-subtitle'}

                >
                    {subtitle}
                </Text>
                <Text
                    size={20}
                    type={"light"}
                    mobSize={16}
                    animationType={"fade-in"}
                    className={'header-double-description'}
                    textStyles={{  lineHeight: isMobile ? '25px' : '35px'}}
                >
                    {description}
                </Text>
            </div>
        </div>

    )
}

export default HeaderDoubleTitleSubtitleDescription
