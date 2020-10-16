import React from "react";
import './index.scss'
const SubMenuItem = ({title = '', dividerColor = '#000'}) => {
    console.log({dividerColor});
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
