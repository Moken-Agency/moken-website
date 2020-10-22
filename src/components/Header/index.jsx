import React, {useState} from "react";
import MenuItem from './components/MenuItem';
import './index.scss'
import Logo from '../../images/logo.png'
import Burger from "./components/Burger";
import headerOptions from './header-options';
import { useHistory } from "react-router-dom";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const {
    leftMenu, rightMenu, mainMenu,
    mainMenuTextStyles,
    topMenuTextStyles,
} = headerOptions;

const Header = ({isOpen, setIsOpen}) => {

    let history = useHistory();


    return (
           <div className={'header-container'}>
                <div className={'bar-container'}>
                    <div className={'menu-container'}>
                        {
                            leftMenu.map(({title, withDivider, route}, index) => {
                                return (
                                    <MenuItem key={'leftMenu' + index} title={title} withDivider={withDivider}
                                              textStyles={topMenuTextStyles} route={route}/>
                                )
                            })
                        }
                    </div>
                    <div className={'menu-container'}>
                        {
                            rightMenu.map(({title, withDivider}, index) => {
                                return (
                                    <MenuItem key={'right menu' + index} title={title} withDivider={withDivider}
                                              textStyles={topMenuTextStyles}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={'bar-container'}>
                    <img src={Logo} className={'logo'}/>
                    <div className={'menu-container'}>
                        {
                            mainMenu.map(({title, subRouts = [], dividerColor}, index) => {
                                return (
                                    <MenuItem key={'main menu' + index} title={title} textStyles={mainMenuTextStyles}
                                              containerStyles={{marginRight: '1.5vw'}}
                                              subRouts={subRouts}
                                              dividerColor={dividerColor}
                                    />
                                )
                            })
                        }
                    </div>
                    {/*<Burger setIsOpen={() => history.push('/designer')}/>*/}
                    <Burger setIsOpen={() => history.push('/menuscreen')}/>
                </div>
            </div>
    )
}
export default Header;
