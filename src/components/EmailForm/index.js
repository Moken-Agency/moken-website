import React from 'react';
import Input from "../Input";
import Text from "../Text";
import './index.scss';
import Button from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const EmailForm = ({withForm, title = '', width = 'auto', value='', className = ''}) => {
    const {isMobile} = useWindowDimensions()

    return (
          <>
              {withForm ? <div className={`email-form-container ${className}`}>
                  <div className={'email-form-divider'}/>
                  <Text containerStyles={{margin: isMobile ? '4vw 0' : '80px 0'}}
                        size={isMobile ? '5vw' : '2.5vw'}
                        type={'thin'}
                        textStyles={{letterSpacing: 0.3}}>{title}</Text>
                  <div className={'email-form-form'}>
                      <Input value={value} placeholder={'Your Email Address'} width={width}/>
                      <Button title={'SUBSCRIBE'} color={'white'} type={'bordered'}/>
                  </div>
              </div> : null}
          </>
      )
}

export default EmailForm;
