import React from 'react';
import './styles.scss'
import Text from "../Text";
import textTypes from '../../constans/text-types';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Input = ({value, onChange = () => {}, placeholder, withGoButton, onSubmit = () => {}, error = '',
                   type = 'Latinka Medium', width ='100%', inputType = 'input', height = 'auto', className = '',
                   size = '1vw', mobSize = size, resize = 'both',  backgroundColor = 'white'}) => {
    console.log({error});
    const {isMobile} = useWindowDimensions()


    return (
        <div className={`container ${className}`}>
            <div className={'buttonContainer'}>
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
                    <Text type={'semiBold'} size={'1vw'}>Go</Text>
                </button>}
            </div>

            <div className={'divider'} style={{backgroundColor: error ? 'red' : 'black'}}/>
        </div>
    )
}

export default Input
