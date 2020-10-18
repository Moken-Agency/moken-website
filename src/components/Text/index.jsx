import React from 'react';
import './styles.scss'

const Text = ({children = '', textStyles = {},containerStyles = {}, onMouseEnter = () => {}, onMouseLeave = () => {},
                  onClick = () => {}}) => {

    const handleOnMouseEnter = () => {
        onMouseEnter()
    }
    const handleOnMouseLeave = () => {
        onMouseLeave()
    }

    return (
        <div className={'container'} style={containerStyles} onMouseLeave={handleOnMouseLeave}
             onMouseEnter={handleOnMouseEnter} onClick={onClick}>
            <span style={textStyles} className={'text'}>{children}</span>
        </div>
    )
}

export default Text
