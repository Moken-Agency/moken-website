import React from "react";
import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import './index.scss';

const InfoImgCompany = ({mainTitle = '',
                            title = '',
                            subtitle = '',
                            imgURL = '',
                            companyImage = '',
                            startUpName = '',
                            founderName = '',
                            founderTitle = '' }) => {

    const {isMobile} = useWindowDimensions()

    return (
        <section className={'info-img-company'}>
            <Title title={mainTitle} containerStyles={{padding: 0, marginBottom: isMobile ? 50: 124}} />
            <div style={{display: 'flex', paddingLeft: isMobile? 0 : 50, alignItems: 'center', flexDirection: isMobile ? 'column' : 'row'}}>
                <div style={{marginRight: isMobile ? 0 : 100, marginBottom: isMobile ? 40 : 0}}>
                    <Text size={55} mobSize={35} type={'extraLight'} containerStyles={{marginBottom: 63}}>{title}</Text>
                    <Text size={20}
                          textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                          mobSize={16} type={'light'} containerStyles={{marginBottom: 55}}>{subtitle}</Text>
                    <div style={{position: 'relative', display: 'flex'}}>
                        <div style={{width: 2, height: 171, backgroundColor: 'black', marginRight: 38}} />
                        <div>
                            <img src={companyImage} style={{marginBottom: 10, width: 90, height: 40, backgroundColor: 'grey'}}/>
                            <Text type={'semiBold'} containerStyles={{marginBottom: 30}} size={24}>{startUpName}</Text>
                            <Text type={'semiBold'} containerStyles={{marginBottom: 15}} size={16} mobSize={10}>{founderName}</Text>
                            <Text type={'semiBold'} size={16} mobSize={10}>{founderTitle}</Text>
                        </div>
                    </div>
                </div>
                <img src={imgURL} style={{width: isMobile ? '100%' : '30vw', height: isMobile ? 400 : 1000}} />

            </div>

        </section>
    )
}

export default InfoImgCompany;
