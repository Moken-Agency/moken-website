import React from 'react';
import Text from "../Text";
import './index.scss';

const SubmitYourResume = ({onClick = () => {}, className = '', color = 'white', title = 'Submit you resume'}) => {
    return (
        <Text size={'1.5vw'}
              type={'semiBold'}
              color={color}
              className={`text-submit ${className}`}
              onClick={onClick}>{title}</Text>
    )
}

export default SubmitYourResume
