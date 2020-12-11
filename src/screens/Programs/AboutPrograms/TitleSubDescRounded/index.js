import React from "react";
import './index.scss';
import Text from "../../../../components/Text";

const TitleSubDescRounded = ({title = '', subtitle = '', description = ''}) => {
    return (
        <div className={'title-sub-desc-rounded-container'}>
            <Text className={'title-sub-desc-rounded-title'} size={14} type={'semiBold'}>{title}</Text>
            <Text className={'title-sub-desc-rounded-subtitle'} size={30} type={'thin'}>{subtitle}</Text>
            <Text className={'title-sub-desc-rounded-description'} size={16} type={'light'}>{description}</Text>
        </div>
    )
}

export default TitleSubDescRounded
