import React, {useState} from "react";
import './index.scss'
import MenuItem from "../MenuItem";
import headerOptions from '../../header-options';
import footerOptions from '../../../Footer/footer-options';
import Burger from "../Burger";
import Text from '../../../Text';
import SubMenuItem from "../SubMenuItem";
import ArrowLeft from '../../../../images/arrow-left.jpg'

const {
    leftMenu, rightMenu, mainMenu,
    mainMenuTextStyles,
    topMenuTextStyles,
} = headerOptions;

const {socialsMediaWhite} = footerOptions;


const HeaderMobile = ({isOpen = false, setIsOpen}) => {
    const [subMenu, setSubMenu] = useState(null);
    console.log({subMenu});

    const handleGoBack = () => {
        setSubMenu(null)
    }
    return (
        <section className={'header-mobile-container'} style={{height: isOpen ? '90vh' : '10vh',
            position: isOpen ? 'absolute' : 'initial'}}>
            <div>
                <div className={'header-mobile-burger-container'}>
                    {isOpen && subMenu ? <div className={'header-mobile-arrow-container'} onClick={handleGoBack}>
                        <img src={ArrowLeft}/>
                        <Text>Go back</Text>
                    </div> : <div/>}
                    <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
                {isOpen && <>
                {!subMenu ?
                <div className={'main-menu-header-mobile'}>
                    {
                        mainMenu.map(({title, subRouts = [], dividerColor}, index) => {
                            return (
                                <MenuItem key={'main menu' + index} title={title} textStyles={mainMenuTextStyles}
                                          containerStyles={{marginRight: '1.5vw'}}
                                          subRouts={subRouts}
                                          dividerColor={dividerColor}
                                          onClick={() => setSubMenu({title, subRouts, dividerColor})}
                                />
                            )
                        })
                    }
                </div> :
                <div className={'header-mobile-sub-routs'}>
                    <Text size={20} textStyles={{color: subMenu.dividerColor, marginBottom: 20}}>{subMenu.title.toUpperCase()}</Text>
                    <div>
                    {
                        subMenu.subRouts.map(({title, dividerColor}, index) => {
                            return (
                                <Text size={15}
                                      containerStyles={{marginBottom: 20}}
                                      onClick={() => alert('Go to route!')}>
                                    {title.toUpperCase()}
                                </Text>
                            )
                        })
                    }
                    </div>
                </div>
                }
                </>
                }
            </div>
            {isOpen && !subMenu && <div className={'bottom-menu-header-mobile'}>
                <div>
                    {
                        [...leftMenu, ...rightMenu].map(({title, route}, index) => {
                            return (
                                <Text containerStyles={{marginBottom: '3vw'}} size={'4vw'}
                                      textStyles={{textTransform: 'uppercase'}}>
                                    {title}
                                </Text>
                            )
                        })
                    }
                </div>
                <div className={'social-media-container-header-mobile'}>
                    {
                        socialsMediaWhite.map(({image, link}, index) => {
                            return (
                                <a href={link} key={'social media header' + index}>
                                    <img src={image}/>
                                </a>
                            )
                        })
                    }
                </div>

            </div>}
        </section>
    )
}
export default HeaderMobile;
