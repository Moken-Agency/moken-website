import React from "react";
import Text from "../../../../components/Text";
import './index.scss';

const Join = ({title, subtitle, count, isLast}) => {
    return (
        <div className={'join-container'}>
            <div className={'join-left-container'}>
                <div className={'join-circle'}>
                    <Text className={'join-text'} type={'light'} size={25} color={'#656565'}>{count}</Text>
                </div>
                {!isLast ? <div className={'join-divider'}/> : null}
            </div>
            <div className={'join-right-container'}>
                <Text type={'semiBold'} className={'join-title'} size={22}>{title}</Text>
                <Text type={'light'} size={20}>{subtitle}</Text>
            </div>
        </div>
    )
}

export default Join
