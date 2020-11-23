import React from "react";
import Text from "../Text";
import './index.scss';

const TitleTwoDescriptions = ({title = '', firstDescription = '', secondDescription = ''}) => {
    return (
        <div className={'title-two-descriptions-container'}>
            <Text size={'3.7vw'} mobSize={35} type={'extraLight'}>{title}</Text>
            <div className={'community-capabilities-container'}>
                <Text size={'1.4vw'} mobSize={16} type={'light'}>{firstDescription}</Text>
                <Text size={'1.4vw'} mobSize={16} type={'light'}>{secondDescription}</Text>
            </div>
        </div>
    )
}

export default TitleTwoDescriptions
