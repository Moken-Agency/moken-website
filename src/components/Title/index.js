import React from 'react';
import Text from '../Text';
import './index.scss';

const Title = ({title, className = '', color = 'black', size = 14, containerStyles = {}}) => {
    return (
        <>
            {
                title ?
                <div data-aos="fade-up" className={`title-comp-container ${className}`} style={containerStyles}>
                    <div className={'title-comp-divider'}
                         data-aos="fade-in"
                         style={{backgroundColor: color}}/>
                    <Text color={color}
                          animationType={'fade-in'}
                          type={'semiBold'}
                          size={size}>{title}</Text>
                </div> : null
            }
        </>
    )
}

export default Title
