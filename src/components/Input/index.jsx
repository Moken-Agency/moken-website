import React from 'react';
import './styles.scss'
import Text from "../Text";
import textTypes from '../../constans/text-types';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Input = ({value, onChange = () => {}, placeholder, withGoButton, onSubmit = () => {}, error = '',
                   type = 'Latinka Medium', width ='100%', inputType = 'input', height = 'auto', className = '',
                   size = '.9vw', mobSize = 14, resize = 'both',  backgroundColor = 'white'}) => {

    const {isMobile} = useWindowDimensions()
    return (
        <div className={`container ${className}`}>
            <div className={'buttonContainer'} data-aos="fade-in">
                {inputType === 'input' ?
                    <input className={'input'}
                           value={value}
                           style={{fontFamily: textTypes[type],
                               width,
                               height,
                               fontSize: isMobile ? mobSize : size,
                               backgroundColor}}
                           onChange={onChange}
                           placeholder={placeholder}/>:
                    <textarea className={`input ${inputType}`}
                              value={value}
                              style={{fontFamily: textTypes[type],
                                  width,
                                  height,
                                  fontSize: isMobile ? mobSize : size,
                                  resize,
                                  backgroundColor}}
                              onChange={onChange}
                              placeholder={placeholder}/>}
                {withGoButton && <button className={'goButton'} onClick={onSubmit}>
                    <Text type={'semiBold'} size={22}>Go</Text>
                </button>}
            </div>

            <div className={'divider'} data-aos="fade-in" style={{backgroundColor: error ? 'red' : 'black'}}/>
        </div>
    )
}

export default Input
