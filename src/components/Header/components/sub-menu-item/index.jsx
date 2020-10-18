import React from "react";
import './index.scss';
import Text from '../../../Text';
const SubMenuItem = ({title = '', dividerColor = '#000'}) => {
    return (
        <button className={'sub-menu-item-container'}>
            <div className={'divider'} style={{backgroundColor: dividerColor}}/>
            <div>
                <div className={'sub-menu-divider'}/>
                <Text>{title.toUpperCase()}</Text>
            </div>
        </button>
    )
}

export default SubMenuItem
