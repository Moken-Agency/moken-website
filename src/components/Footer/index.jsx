import React from 'react';
import './styles.scss'
import footerOptions from './footer-options';
import ColumnMenu from "./components/column-menu";
import Text from '../../components/Text';
import Logo from '../../images/logo.png'


const { menuOption, socialsMedia, styles} = footerOptions;
const {menuColumns} = menuOption;
const {joinFirstText, joinSecondText} = styles;

const textStyle = {
    color: 'white',
};

const containerStyles = {
    marginLeft: '2vw',
    marginRight: '2vw',
    fontSize: 12,
    cursor: 'pointer'
}

const Footer = () => {
    return (
        <div className={'footerContainer'}>
            <div className={'topFooterBar'}>
                <div className={'menuColumns'}>
                    {
                        menuColumns.map(({routes, title}, index) => {
                            return (
                                <ColumnMenu key={'column menu' + title + index} title={title} routes={routes}/>
                            )
                        })
                    }
                </div>
                <div className={'sendEmailUpdatesContainer'}>
                    <img src={Logo} className={'logo'}/>
                    <Text textStyles={joinFirstText}>Join our newsletter</Text>
                    <Text textStyles={joinSecondText}>We will send you updates related to all things Moken.</Text>

                </div>
            </div>
            <div className={'bottomFooterBar'}>
                <div className={'leftFooterBar'}>
                    <Text textStyles={textStyle}>Copyright © Moken Startups Inc. 2020</Text>
                    <div className={'privacyContainer'}>
                        <Text textStyles={textStyle} containerStyles={containerStyles}>PRIVACY POLICY</Text>
                        <Text textStyles={textStyle} containerStyles={containerStyles}>TERMS & CONDITIONS</Text>
                    </div>
                </div>
                <div className={'socialsContainer'}>
                    {
                        socialsMedia.map(({image, link}, index) => {
                            return (
                                <a key={'socials' + index} href={link}>
                                    <img src={image} alt={'social'}/>
                                </a>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Footer
