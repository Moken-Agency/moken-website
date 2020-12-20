import React from "react";
import Text from "../Text";
import './index.scss';

const HeaderSecondType = ({title = '', subtitle = ''}) => {
    return (
        <div className={'header-second-title-container'} >
            <Text size={16}
                  mobSize={14}
                  animationType={'fade-in'}
                  type={'semiBold'}
                  className={'header-second-main-title'}>{title}</Text>
            <Text size={75}
                  mobSize={45}
                  animationType={'fade-in'}
                  type={'thin'}
                  className={'header-second-subtitle'}>{subtitle}</Text>

        </div>
    )
}

export default HeaderSecondType;
