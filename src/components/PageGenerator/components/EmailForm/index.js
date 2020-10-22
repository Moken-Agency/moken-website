import React from 'react';
import Input from "../../../Input";
import Text from "../../../Text";
import './index.scss';

const EmailForm = ({withForm}) => {
      return (
          <>
              {withForm ? <div className={'email-form-container'}>
                  <div className={'email-form-divider'}/>
                  <Text containerStyles={{margin: '80px 0'}}
                        size={30}
                        type={'thin'}
                        textStyles={{letterSpacing: 0.3}}>Stay in the loop & never miss a thing.</Text>
                  <div className={'email-form-form'}>
                      <Input value={'value'} placeholder={'Email'}/>
                      <button>Subscribe</button>
                  </div>
              </div> : null}
          </>
      )
}

export default EmailForm;
