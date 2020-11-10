import React from "react";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import './index.scss';

const CommunityPartner = ({title, subtitle, btnTitle = 'GET INVOLVED', titleStyles = {}, containerStyles = {}}) => {
    return (
        <div className={'community-partner-container'} style={containerStyles}>
            <div className={'community-partner-info-container'}>
                <Text size={30} type={'thin'} textStyles={titleStyles}>{title}</Text>
                <Text className={'community-partner-subtitle'} size={18} type={'light'}>{subtitle}</Text>
            </div>

            <div className={'community-partner-btn-container'}>
                <Button color={'black'} title={btnTitle}/>
            </div>
        </div>
    )
}

export default CommunityPartner
