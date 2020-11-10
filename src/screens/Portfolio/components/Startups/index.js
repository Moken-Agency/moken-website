import React from 'react';
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import './index.scss';
import { useHistory } from "react-router-dom";
import Text from "../../../../components/Text";



const Startups = ({title = '', subTitle = ''}) => {
    const {isMobile} = useWindowDimensions()
    let history = useHistory();


    return (
        <div className={'startups-container'}>
                <Text size={isMobile ? '8vw' : '4vw'} type={'semiBold'} className={'startups-title-first'}>{title}</Text>
                <Text size={isMobile ? '1.6vw' : '.8vw'} type={'semiBold'} className={'startups-title-second'}>{subTitle}</Text>
        </div>

    )
}

export default Startups
