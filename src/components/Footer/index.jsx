import React, {useEffect, useState} from 'react';
import './styles.scss'
import footerOptions from './footer-options';
import ColumnMenu from "./components/ColumnMenu";
import Text from '../../components/Text';
import Logo from '../../images/logo.png';
import Input from '../Input';
import useValidation from '../../hooks/useValidation';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import validationRules from '../../constans/validation-rules';


const { menuOption, socialsMedia, socialsMediaWhite, styles} = footerOptions;
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

const Footer = ({isOpen, setIsOpen}) => {

    const {width} = useWindowDimensions()


    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        isSubmitting,
    } = useValidation({email: ''}, validationRules.sendEmailValidation);
    const socialsData = width >= 600 ? socialsMedia : socialsMediaWhite;

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
                    <Text size={'2vw'} type={'thin'} textStyles={joinFirstText}>Join our newsletter</Text>
                    <Text size={'1.3vw'} type={'light'} textStyles={joinSecondText}
                          containerStyles={{marginBottom: 20}}>We will send you updates related to all things Moken.</Text>
                    <Input withGoButton error={errors.email} value={values.email}
                           placeholder={'Email'} onSubmit={handleSubmit}
                           onChange={(event) => handleChange({name: 'email', text: event.target.value})}/>
                </div>
            </div>
            <div className={'bottomFooterBar'}>
                <div className={'leftFooterBar'}>
                    <Text textStyles={textStyle}>Copyright © Moken Startups Inc. 2020</Text>
                    <div className={'privacyContainer'}>
                        <Text textStyles={textStyle} type={'semiBold'} containerStyles={containerStyles}>PRIVACY POLICY</Text>
                        <Text textStyles={textStyle} type={'semiBold'} containerStyles={containerStyles}>TERMS & CONDITIONS</Text>
                    </div>
                </div>
                <div className={'socialsContainer'}>
                    {
                        socialsData.map(({image, link}, index) => {
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
