import React from "react";
import Text from "../../../Text";
import './index.scss';
import ArrowUpRight from '../../../../images/arrow-up-right.png'


const SecondMapItem = ({title = '', btnTitle = ''}) => {
    return (
        <div className={'second-map-item-container'}>
            <Text type={'extraLight'}
                  size={'3.4vw'}
                  mobSize={35}
                  animationType={'fade-in'}
                  className={'second-map-item-title'}>{title}</Text>
            <div className={'second-map-item-btn-container'}>
                <Text type={'semiBold'}
                      animationType={'fade-in'}
                      size={'.85vw'} mobSize={12} className={'second-map-item-btn'}>{btnTitle}</Text>
                <img src={ArrowUpRight} data-aos="fade-in"/>
            </div>
        </div>
    )
}

export default SecondMapItem