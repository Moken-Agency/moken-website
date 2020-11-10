import React, {useState} from "react";
import './index.scss'
import SubMenuItem from "../SubMenuItem";
import Text from "../../../Text";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import {useHistory} from "react-router-dom";

const MenuItem = ({containerStyles = {}, textStyles = {}, title, withDivider, subRouts = [],
                      dividerColor = 'grey', onClick = () => {}, route = ''}) => {
    const [hover, setHover] = useState({isHover: false, color: '#000'})
    const {isMobile} = useWindowDimensions()
    let history = useHistory();
    const onMouseEnter = () => {
        if(!isMobile) {
            setHover({isHover: true, color: dividerColor})
        }
    }
    const onMouseLeave = () => {
        if(!isMobile) {
            setHover({isHover: false, color: '#000'})
        }
    }

    const handleOnClick = () => {
        console.log('handleOnClick');
        if(!subRouts.length) {
            history.push(route)
        } else {
            onClick()
        }
    }
    return (
        <div className={'menu-main-container'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleOnClick}>
        <div className={'menu-item-container'} style={containerStyles}>
            <Text type={'semiBold'} size={'0.65vw'} textStyles={{...textStyles, color: hover.isHover ? hover.color: '#000'}}>{title.toUpperCase()}</Text>
            {withDivider && <div className={'divider'}/>}
        </div>
            {subRouts.length ? <div className={'sub-routs'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {
                    subRouts.map(({title = '', route = ''}, index) => {
                        return (
                          <SubMenuItem key={'sub routs' + index} title={title} dividerColor={dividerColor} route={route}/>
                        )
                    })
                }
            </div> : null}
        </div>
    )
}

export default MenuItem
