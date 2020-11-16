import React from "react";
import Text from "../../../Text";
import './index.scss';
import ArrowUpRight from '../../../../images/arrow-up-right.png'


const SecondMapItem = ({title = '', btnTitle = ''}) => {
    return (
        <div className={'second-map-item-container'}>
            <Text type={'extraLight'} size={'3.4vw'} className={'second-map-item-title'}>{title}</Text>
            <div className={'second-map-item-btn-container'}>
                <Text type={'semiBold'} size={'.85vw'} className={'second-map-item-btn'}>{btnTitle}</Text>
                <img src={ArrowUpRight} />
            </div>
        </div>
    )
}

export default SecondMapItem
