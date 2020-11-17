import React from 'react';
import Text from "../Text";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const SubmitYourResume = ({onClick = () => {}, className = '', color = 'white', title = 'Submit you resume'}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <Text size={isMobile ? 16 : '1.5vw'}
              type={'semiBold'}
              color={color}
              className={`text-submit ${className}`}
              onClick={onClick}>{title}</Text>
    )
}

export default SubmitYourResume
