import React from "react";
import Text from '../../../components/Text';
import './index.scss';

const Belief = ({title = '', subtitle = '', images = []}) => {
    return (
        <div className={'belief-container'}>
            <div>
                {
                    images.map((uri) =>  <img src={uri}/>)
                }
            </div>
            <Text className={'belief-title'} size={22} type={'semiBold'}>{title}</Text>
            <Text size={20} type={'light'}>{subtitle}</Text>
        </div>
    )
}

export default Belief
