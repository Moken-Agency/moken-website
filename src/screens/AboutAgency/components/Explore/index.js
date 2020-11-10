import React from "react";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import './index.scss';

const Explore = ({title, subtitle, description}) => {
    return (
        <div className={'explore-container'}>
            <Text size={'.8vw'}
                  type={'semiBold'}>{title}</Text>
            <Text size={'1.7vw'}
                  type={'thin'} className={'explore-subtitle'}>{subtitle}</Text>
            <div className={'explore-divider'}/>
            <Text type={'semiBold'}
                  size={'.8vw'}
            >{description}</Text>
            <Button title={'EXPLORE'} color={'white'}
                    size={'.6vw'}
                    containerStyles={{paddingLeft: 0}}
            />
        </div>
    )
}
export default Explore
