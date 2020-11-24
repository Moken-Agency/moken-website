import Popup from "reactjs-popup";
import React from "react";
import './index.scss';
import 'reactjs-popup/dist/index.css';
import Text from "../Text";
import Button from "../Button";

const Form = ({backgroundColor = '#ff7d3e', formName = 'Test'}) => {
    return (
        <Popup trigger={<button className={''}>{'Form'}</button>}
               modal
               nested>
            {(close) => (
                <div>
                    <Button type={'transparent'}  color={'white'} className={'form-close'} title={'CLOSE'} size={16} onClick={close}/>
                    <div className={'form-header'} style={{backgroundColor}}>
                        <Text className={'form-name-title'} color={'white'} type={'semiBold'} size={16}>{formName}</Text>
                    </div>
                    <div className={'form-content'}>
                        <div className={'form-content-border'}>
                            <Text size={16} type={'semiBold'} textStyles={{letterSpacing: 4}}>google form here</Text>
                        </div>
                    </div>

                </div>
            )}
        </Popup>
    )
}

export default Form
