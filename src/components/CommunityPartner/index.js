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
                      mobSize={25}
                      containerStyles={{width: '11vw', marginBottom: 74}}
                      textStyles={titleStyles}>{title}</Text>
                <Text className={'community-partner-subtitle'}
                      size={18}
                      mobSize={16}
                      textStyles={{lineHeight: '28px'}}
                      type={'light'}>{subtitle}</Text>
            </div>

            <div className={'community-partner-btn-container'}>
                <Button color={'black'}
                        title={btnTitle}
                        size={'.8vw'}
                        mobSize={10}
                        className={'community-partner-btn'}
                />
            </div>
        </div>
    )
}

export default CommunityPartner
