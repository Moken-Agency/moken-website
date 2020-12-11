import React from "react";
import Text from "../../../components/Text";
import './index.scss';

const Value = ({title = '', subtitle = ''}) => {
    return (
        <div className={'value-container'}>
            <Text type={'semiBold'}
                  size={14}
                  mobSize={10}
                  containerStyles={{marginBottom: 12}}
                  textStyles={{letterSpacing: 4}}>{title}</Text>
            <Text type={'light'} size={20}>{subtitle}</Text>
        </div>
    )
}

export default Value
