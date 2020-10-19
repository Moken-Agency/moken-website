import React from "react";
import './index.scss';
import Text from '../../../Text';
const SubMenuItem = ({title = '', dividerColor = '#000'}) => {
    return (
        <button className={'sub-menu-item-container'}>
            <div className={'sub-menu-divider'} style={{backgroundColor: dividerColor}}/>
            <div>
                {/*<div className={'sub-menu-divider'}/>*/}
                <Text type={'semiBold'}>{title.toUpperCase()}</Text>
            </div>
        </button>
    )
}

export default SubMenuItem
