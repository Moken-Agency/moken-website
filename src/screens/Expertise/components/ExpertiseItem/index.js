import React from 'react';
import Text from "../../../../components/Text";
import './index.scss';
import ArrowUpRight from '../../../../images/arrow-up-right.png'
import {useHistory} from "react-router-dom";


const ExpertiseItem = ({title = '', route = '/'}) => {
    let history = useHistory();

    const goToRoute = () => {
        history.push(route)
    }

    return (
        <div className={'expertise-item-container'}>
            <Text size={'4.5vw'} mobSize={35} type={'thin'} className={'expertise-item-title'}>{title}</Text>
            <div className={'expertise-item-right'} onClick={goToRoute}>
                <Text size={'.8vw'} type={'semiBold'}  className={'expertise-item-learn'}>LEARN MORE</Text>
                <img className={'expertise-item-img'} src={ArrowUpRight} />
            </div>
        </div>
    )
}

export default ExpertiseItem
