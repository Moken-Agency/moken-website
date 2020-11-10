import React from 'react';
import Text from "../../../../components/Text";
import './index.scss';
import ArrowUpRight from '../../../../images/arrow-up-right.png'


const ExpertiseItem = ({title = ''}) => {
    return (
        <div className={'expertise-item-container'}>
            <Text size={'3.5vw'} mobSize={35} type={'thin'} className={'expertise-item-title'}>{title}</Text>
            <div className={'expertise-item-right'}>
                <Text size={'1vw'} type={'semiBold'}  className={'expertise-item-learn'}>LEARN MORE</Text>
                <img className={'expertise-item-img'} src={ArrowUpRight} />
            </div>
        </div>
    )
}

export default ExpertiseItem
