import React from "react";
import Text from "../../../Text";
import './index.scss';

const FirstMapItem = ({title = ''}) => {
    return (
        <div className={'first-map-item-container'}>
            <Text type={'semiBold'} size={'1.3vw'}>{title}</Text>
        </div>
    )
}

export default FirstMapItem
