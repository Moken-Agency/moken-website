import React from 'react';
import Text from '../Text';
import './index.scss';

const Title = ({title, className = '', color = 'black', size = 14, containerStyles = {}}) => {
    return (
        <>
            {
                title ?
                <div className={`title-comp-container ${className}`} style={containerStyles}>
                    <div className={'title-comp-divider'} style={{backgroundColor: color}}/>
                    <Text color={color} type={'semiBold'} size={size}>{title}</Text>
                </div> : null
            }
        </>
    )
}

export default Title
