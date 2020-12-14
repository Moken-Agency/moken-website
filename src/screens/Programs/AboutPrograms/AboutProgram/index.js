import Text from "../../../../components/Text";
import React from "react";
import './index.scss';
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const AboutProgram = ({containerStyles = {}, title = '', text= ''}) => {
    const {isMobile} = useWindowDimensions();
    return (
        <div className={'about-program-container'} style={containerStyles}>
            <Text className={'about-program-title'} size={75} mobSize={40} type={'semiBold'}>{title}</Text>
            <div className={'about-program-divider'} />
            <Text type={'light'}
                  size={20}
                  textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                  className={'about-program-text'}
                  mobSize={10}>{text}</Text>
        </div>
    )
}

export default AboutProgram
