import React from 'react';
import PageGenerator from "../../components/PageGenerator";
import Text from "../../components/Text";
import otherOptions from './options';
import './index.scss';

const TermsAndConditions = () => {
    return (
        <div className={'terms-container'}>
            <div className={'terms-header-container'}>
                <Text size={100}
                      mobSize={65}
                      animationType={'fade-in'}
                      color={'white'}
                      type={'thin'}>Terms & Conditions</Text>
            </div>
            <PageGenerator data={otherOptions} containerStyles={{padding: '12vw 0'}}/>
        </div>
    )
}

export default TermsAndConditions
