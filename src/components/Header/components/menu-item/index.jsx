import React, {useState} from "react";
import './index.scss'
import SubMenuItem from "../sub-menu-item";

const MenuItem = ({containerStyles = {}, textStyles = {}, title, withDivider, subRouts = [], dividerColor}) => {
    const [hover, setHover] = useState({isHover: false, color: '#000'})
    const onMouseEnter = () => {
        setHover({isHover: true, color: dividerColor})
    }
    const onMouseLeave = () => {
        setHover({isHover: false, color: '#000'})
    }
    return (
        <div className={'menu-main-container'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={'menu-item-container'} style={containerStyles}>
            <span className={'title'} style={{...textStyles, color: hover.isHover ? hover.color: '#000'}}>{title.toUpperCase()}</span>
            {withDivider && <div className={'divider'}/>}
        </div>
            {subRouts.length ? <div className={'sub-routs'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {
                    subRouts.map(({title = ''}, index) => {
                        return (
                          <SubMenuItem key={'sub routs' + index} title={title} dividerColor={dividerColor}/>
                        )
                    })
                }
            </div> : null}
        </div>
    )
}

export default MenuItem
