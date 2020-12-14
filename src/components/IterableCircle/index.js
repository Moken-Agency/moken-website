import React from "react";
import Text from "../Text";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const IterableCircle = ({title, subtitle, count, isLast}) => {
    const {isMobile} = useWindowDimensions();
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
                <Text type={'light'}
                      size={20}
                      textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                      mobSize={16}>{subtitle}</Text>
            </div>
        </div>
    )
}

export default IterableCircle
