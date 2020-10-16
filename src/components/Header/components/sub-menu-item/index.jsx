import React from "react";
import './index.scss'
const SubMenuItem = ({title = '', dividerColor = '#000'}) => {
    return (
        <button className={'sub-menu-item-container'}>
            <div className={'divider'} style={{backgroundColor: dividerColor}}/>
            <div>
                <div className={'sub-menu-divider'}/>
                <span>{title.toUpperCase()}</span>
            </div>
        </button>
    )
}

export default SubMenuItem
