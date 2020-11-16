import React from 'react';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import Button from "../Button";
import './index.scss';


const Modal = ({children, buttonTitle = '', buttonClassName = ''}) => {
    return (
        <Popup trigger={<button className={buttonClassName}>{buttonTitle}</button>}
               modal
               nested>
            {(close) => (
                <div>
                    <div className={'modal-btn-container'}>
                        <Button title={'CLOSE'}
                                size={'1.1vw'}
                                containerStyles={{padding: '2vw', letterSpacing: 4}}
                                type={'semiBold'}
                                onClick={close}
                                color={'white'}/>
                    </div>
                    {children}
                </div>
            )}
        </Popup>
    )
}

export default Modal;
