import React, {useState} from "react";
import navigationJson from './navigation-json';
import MenuItem from './components/menu-item';
import './index.scss'
import Logo from '../../images/logo.png'
import Burger from "./components/burger";

const {
    leftMenu, rightMenu, mainMenu,
    mainMenuTextStyles
} = navigationJson

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={'container'}>
            <div className={'bar-container'}>
                <div className={'menuContainer'}>
                    {
                        leftMenu.map(({title, withDivider}, index) => {
                            return (
                               <MenuItem key={'leftMenu' + index} title={title} withDivider={withDivider}/>
                            )
                        })
                    }
                </div>
                <div className={'menuContainer'}>
                    {
                        rightMenu.map(({title, withDivider}, index) => {
                            return (
                                <MenuItem key={'right menu' + index} title={title} withDivider={withDivider}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'bar-container'}>
                <img src={Logo} className={'logo'}/>
                <div className={'menuContainer'}>
                    {
                      mainMenu.map(({title, subRouts = [], dividerColor}, index) => {
                            return (
                                <MenuItem key={'main menu' + index} title={title} textStyles={mainMenuTextStyles}
                                          containerStyles={{marginRight: '1.5vw'}}
                                          subRouts={subRouts}
                                          dividerColor={dividerColor}/>
                            )
                        })
                    }
                </div>
                <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </div>
    )
}
export default Header;
