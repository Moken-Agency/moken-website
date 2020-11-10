import React from 'react';
import PageGenerator from "../../components/PageGenerator";
import Text from "../../components/Text";
import otherOptions from './options';
import './index.scss';

const TermsAndConditions = () => {
    return (
        <div className={'terms-container'}>
            <div className={'terms-header-container'}>
                <Text size={100} mobSize={65} color={'white'} type={'thin'}>Terms & Conditions</Text>
            </div>
            <PageGenerator data={otherOptions}/>
        </div>
    )
}

export default TermsAndConditions
