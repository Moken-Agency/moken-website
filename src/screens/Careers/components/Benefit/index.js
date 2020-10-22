import React from 'react';
import Text from '../../../../components/Text';
import './index.scss';


const Benefit = ({title = '', subtitle = '', description = ''}) => {
    return (
        <div className={'benefit-title-first-container'}>
                <Text size={'.8vw'} type={'semiBold'} className={'benefit-title-first'}>{title}</Text>
                <Text size={'1.7vw'} type={'thin'} className={'benefit-title-second'}>{subtitle}</Text>
                <Text size={'1vw'} type={'light'} className={'benefit-title-third'}>{description}</Text>
        </div>
    )
}

export default Benefit
