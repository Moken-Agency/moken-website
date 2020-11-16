import React from "react";
import Text from "../Text";
import Button from "../Button";
import './index.scss';

const CommunityPartner = ({title, subtitle, btnTitle = 'GET INVOLVED', titleStyles = {}, containerStyles = {}}) => {
    return (
        <div className={'community-partner-container'} style={containerStyles}>
            <div className={'community-partner-info-container'}>
                <Text size={'2vw'}
                      type={'thin'}
                      containerStyles={{width: '11vw', marginBottom: '0vw'}}
                      textStyles={titleStyles}>{title}</Text>
                <Text className={'community-partner-subtitle'}
                      size={18}
                      textStyles={{lineHeight: '28px'}}
                      type={'light'}>{subtitle}</Text>
            </div>

            <div className={'community-partner-btn-container'}>
                <Button color={'black'} title={btnTitle} size={'.8vw'} containerStyles={{padding: '1.7vw 2.1vw'}}/>
            </div>
        </div>
    )
}

export default CommunityPartner
