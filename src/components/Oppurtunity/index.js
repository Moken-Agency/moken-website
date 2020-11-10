import React from 'react';
import Text from '../Text';
import './index.scss';
import {useHistory} from 'react-router-dom';
import ArrowUpRight from '../../images/arrow-up-right.png'

const Opportunity = ({title = '', subtitle = '', route = '', width = '34vw', stylesContainer = {}}) => {
    const history = useHistory();

    return (
        <div className={'opportunity-container'} style={{width, ...stylesContainer}}>
            <div className={'opportunity-title-container'}>
                <Text size={'.9vw'} type={'semiBold'} className={'opportunity-title-first'}>{title}</Text>
                <Text size={'1.7vw'} type={'thin'} className={'opportunity-title-second'}>{subtitle}</Text>
            </div>
            <button className={'view-job'} onClick={() => history.push(route)}>
                <Text size={'.8vw'}
                      textStyles={{letterSpacing: 4, cursor: 'pointer'}}
                      type={'semiBold'} >VIEW JOB</Text>
                <img className={'opportunity-arrow'} src={ArrowUpRight} />
            </button>
        </div>
    )
}

export default Opportunity
