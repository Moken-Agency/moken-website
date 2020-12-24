import React from "react";
import './index.scss';
import Text from '../../../Text';
import { useHistory } from "react-router-dom";

const SubMenuItem = ({title = '', dividerColor = '#000', route}) => {
    let history = useHistory();

    return (
        <button className={'sub-menu-item-container'} onClick={() => history.push(route)}>
            <div className={'sub-menu-divider'} style={{backgroundColor: dividerColor}}/>
            <div>
                {/*<div className={'sub-menu-divider'}/>*/}
                <Text size={'.8vw'} textStyles={{
                    letterSpacing: 2,
                    textAlign: 'initial',
                    whiteSpace: 'pre'
                }}
                      containerStyles={{alignItems: 'flex-start'}}
                      type={'semiBold'}
                      color={'grey'}>{title.toUpperCase()}</Text>
                {/*<Text size={'.8vw'} textStyles={{letterSpacing: 3}} type={'semiBold'} color={'grey'}>{title.toUpperCase()}</Text>*/}
            </div>
        </button>
    )
}

export default SubMenuItem
