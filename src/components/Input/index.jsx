import React from 'react';
import './styles.scss'
import Text from "../Text";
import textTypes from '../../constans/text-types';

const Input = ({value, onChange = () => {}, placeholder, withGoButton, onSubmit = () => {}, error = '',
                   type = 'Latinka Medium', size}) => {
    console.log({error});

    return (
        <div className={'container'}>
            <div className={'buttonContainer'}>
                <input className={'input'} value={value} style={{fontFamily: textTypes[type]}}
                       onChange={onChange} placeholder={placeholder}/>
                {withGoButton && <button className={'goButton'} onClick={onSubmit}>
                    <Text type={'semiBold'} size={22}>Go</Text>
                </button>}
            </div>

            <div className={'divider'} style={{backgroundColor: error ? 'red' : 'black'}}/>
        </div>
    )
}

export default Input
