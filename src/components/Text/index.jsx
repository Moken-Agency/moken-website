import React from 'react';
import './styles.scss'
import textTypes from '../../constans/text-types';


const Text = ({children = '', textStyles = {},containerStyles = {}, onMouseEnter = () => {}, onMouseLeave = () => {},
                  onClick = () => {}, type = 'medium', size = 12, className = '', color = 'black'}) => {

    const handleOnMouseEnter = () => {
        onMouseEnter()
    }
    const handleOnMouseLeave = () => {
        onMouseLeave()
    }

    console.log(className);

    return (
        <div className={`text-container ${className}`} style={containerStyles} onMouseLeave={handleOnMouseLeave}
             onMouseEnter={handleOnMouseEnter} onClick={onClick}>
            <span style={{fontFamily: textTypes[type], fontSize: size, color, ...textStyles,}} className={'text'}>{children}</span>
        </div>
    )
}

export default Text
