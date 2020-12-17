import React from "react";
import Title from "../Title";
import Text from "../Text";
import './index.scss';
import Button from "../Button";

const TitleSubDescription = ({title = '', subtitle = '', description = '', btnTitle = '', AdditionalComponent }) => {
    return (
        <div className={'title-sub-description-container'}>
            <Title title={title} className={'title-sub-description-title'} />
            <Text className={'title-sub-description-subtitle'} type={'extraLight'} size={55} mobSize={35}>{subtitle}</Text>
            {description ? <Text className={'title-sub-description-description'} type={'light'} size={20}
                   mobSize={16}>{description}</Text> : null}
            {
                btnTitle ?
                    <div className={'title-sub-description-btn-container'}>
                        <Button className={'title-sub-description-btn'}
                                title={btnTitle}
                                backgroundColor={'transparent'}
                                containerStyles={{padding: 0}}
                                textColor={'black'}/>
                    </div>
                    : null
            }
            {AdditionalComponent ? <AdditionalComponent/> : null}
        </div>
    )
}

export default TitleSubDescription
