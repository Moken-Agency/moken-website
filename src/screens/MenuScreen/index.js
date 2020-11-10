import React from 'react';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import menuScreenTopOptions from "./components/MenuScreenTopColumn/menu-screen-top-column-options";
import menuScreenBottomOptions from "./components/MenuScreenBottomColumn/menu-screen-bottom-column-options";
import MenuScreenTopColumn from "./components/MenuScreenTopColumn";
import MenuScreenBottomColumn from "./components/MenuScreenBottomColumn";
import './index.scss';
import footerOptions from '../../components/Footer/footer-options';
import Burger from "../../components/Header/components/Burger";
import { useHistory } from "react-router-dom";
import HeaderMobile from "../../components/Header/components/HeaderMobile";

const { menuOption, socialsMedia, socialsMediaWhite, styles} = footerOptions;


const MenuScreen = (props) => {
    const {isMobile} = useWindowDimensions()
    let history = useHistory();


    return (
            <>
                {isMobile ?
                    <HeaderMobile {...props} /> :
                    <div className={'menu-screen-container'}>
                    <div style={{display: 'flex', justifyContent: 'space-between', paddingRight: '2vw'}}>
                        <div/>
                        <Burger isOpen type={'white'} setIsOpen={() => {history.push('/')}}/>
                        {/*<Burger setIsOpen={setIsOpen} isOpen={isOpen} type={'white'}/>*/}
                    </div>
                    <div className={'menu-screen-top-columns-container'}>
                        {
                            menuScreenTopOptions.columns.map(({title, description, subTitle, image}, index) => {
                                return (
                                    <MenuScreenTopColumn key={'MenuScreenTopColumn' + index}
                                                         title={title}
                                                         description={description}
                                                         subTitle={subTitle}
                                                         image={image}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={'menu-screen-top-column-divider'}/>

                    <div className={'menu-screen-bottom-columns-container'}>
                        <div className={'menu-screen-bottom-container'}>
                            {
                                menuScreenBottomOptions.columns.map(({title, routs}, index) => {
                                    return (
                                        <MenuScreenBottomColumn key={'MenuScreenTopColumn' + index}
                                                                title={title}
                                                                routs={routs}/>
                                    )
                                })
                            }
                        </div>
                        <div className={'socials-header-menu-container'}>
                            {
                                socialsMedia.map(({image, link}, index) => {
                                    return  <a key={'socials header' + index} href={link}>
                                        <img src={image} alt={'social'}/>
                                    </a>
                                })
                            }
                        </div>
                    </div>
                </div>
                }
                </>

    )
}

export default MenuScreen
