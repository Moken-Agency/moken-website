import React from "react";
import Title from "../Title";
import Text from "../Text";
import './index.scss';

const TitleSubDescription = ({title = '', subtitle = '', description = ''}) => {
    return (
        <div className={'title-sub-description-container'}>
            <Title title={title} className={'title-sub-description-title'} />
            <Text className={'title-sub-description-subtitle'} type={'extraLight'} size={55} mobSize={35}>{subtitle}</Text>
            <Text className={'title-sub-description-description'} type={'light'} size={20} mobSize={16}>{description}</Text>
        </div>
    )
}

export default TitleSubDescription
