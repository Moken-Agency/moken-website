import React from 'react';
import './styles.scss'
import textTypes from '../../constans/text-types';


const Text = ({children = '', textStyles = {},containerStyles = {}, onMouseEnter = () => {}, onMouseLeave = () => {},
                  onClick = () => {}, type = 'medium', size = 12}) => {

    const handleOnMouseEnter = () => {
        onMouseEnter()
    }
    const handleOnMouseLeave = () => {
        onMouseLeave()
    }

    return (
        <div className={'text-container'} style={containerStyles} onMouseLeave={handleOnMouseLeave}
             onMouseEnter={handleOnMouseEnter} onClick={onClick}>
            <span style={{...textStyles, fontFamily: textTypes[type], fontSize: size}} className={'text'}>{children}</span>
        </div>
    )
}

export default Text
