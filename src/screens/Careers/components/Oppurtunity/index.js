import React from 'react';
import Text from '../../../../components/Text';
import './index.scss';
import {useHistory} from 'react-router-dom';

const Opportunity = ({title = '', subtitle = '', route = ''}) => {
    const history = useHistory();

    return (
        <div className={'opportunity-container'}>
            <div className={'opportunity-title-container'}>
                <Text size={16} type={'semiBold'} className={'opportunity-title-first'}>{title}</Text>
                <Text size={30} type={'thin'} className={'opportunity-title-second'}>{subtitle}</Text>
            </div>
            <button className={'view-job'} onClick={() => history.push('/' + route)}>
                <Text size={14} textStyles={{letterSpacing: 4, cursor: 'pointer'}} type={'semiBold'} >VIEW JOB</Text>
            </button>
        </div>
    )
}

export default Opportunity
