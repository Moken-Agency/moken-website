import React from 'react';
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import './index.scss';
import { useHistory } from "react-router-dom";
import Text from "../../../../components/Text";
import arrow from '../../../../images/arrow-up-right.png'




const Company = ({companyName = '', projectName = '', description = '', city = '', owner = ''}) => {
    const {isMobile} = useWindowDimensions()
    let history = useHistory();


    return (
        <div className={'company-container'}>
            <div>
                <Text size={isMobile ? '2.2vw' : '1vw'} type={'semiBold'} className={'company-name'}>{companyName}</Text>
                <Text size={ isMobile ? '4.4vw' : '2vw'} type={'thin'} className={'project-name'}>{projectName}</Text>
            </div>

            <Text size={isMobile ? '2.2vw' : '1vw'} className={'company-description'} type={'light'}>{description}</Text>

            <div className={'company-owner-container'}>
                <div>
                    <Text size={isMobile ? '2vw' : '1vw'} className={'company-city'} type={'semiBold'}>{city}</Text>
                    <Text size={isMobile ? '2.2vw' : '1.05vw'} className={'company-owner'} type={'light'}>{owner}</Text>
                </div>
                <div className={'company-arrow-container'}>
                    <img src={arrow} className={'company-arrow'}/>
                </div>
            </div>

        </div>

    )
}

export default Company
