import React from "react";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Button = ({type = 'unborded', color = '', title = '', containerStyles = {}, additionalComponent,
                    imgStyles = {}, onClick = () => {}, size = '1vw', mobSize = '3vw'}) => {
    const {isMobile} = useWindowDimensions()


    return (
        <button className={`button-container ${type} ${color}`}
                onClick={onClick}
                style={{...containerStyles, fontSize: isMobile ? mobSize : size}}>
            {title}
            {additionalComponent ? additionalComponent() : null}
        </button>
    )
}

export default Button
