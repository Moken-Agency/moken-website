import React from "react";
import Text from "../Text";
import './index.scss';
import Title from "../Title";

const TitleTwoDescriptions = ({mainTitle = '', title = '', firstDescription = '', secondDescription = ''}) => {
    return (
        <div className={'title-two-descriptions-main-container'}>
            <Title title={mainTitle} className={'title-two-descriptions-main-title'}/>

            <div className={'title-two-descriptions-container'}>
                <Text size={'3.7vw'} mobSize={35} type={'extraLight'}>{title}</Text>
                <div className={'community-capabilities-container'}>
                    <Text size={'1.4vw'} textStyles={{lineHeight: '35px'}} mobSize={16} type={'light'}>{firstDescription}</Text>
                    <Text size={'1.4vw'} textStyles={{lineHeight: '35px'}} mobSize={16} type={'light'}>{secondDescription}</Text>
                </div>
            </div>
        </div>
    )
}

export default TitleTwoDescriptions
