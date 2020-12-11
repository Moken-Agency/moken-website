import React from "react";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import './index.scss';
import Title from "../../../../components/Title";

const TitleTwoDescriptionWithBtn = ({title = '', firstText = '', secondText = '', onClick = () => {}, mainTitle = ''}) => {
    return (
        <>
            <Title title={mainTitle} className={'labs-overview-title'}/>

            <section className={'labs-overview-container'}>
                <Text size={55} mobSize={35} type={'extraLight'}>{title}</Text>
                <div className={'labs-overview-info-block'}>
                    <Text type={'light'} className={'labs-overview-info-block-first-text'} size={20}>{firstText}</Text>
                    <div>
                        <Text type={'light'} className={'labs-overview-info-block-second-text'} size={20}>{secondText}</Text>
                        <Button color={'black'} title={'APPLY TO INCUBATOR'} onClick={onClick}/>
                    </div>
                </div>
            </section>
            </>
    )
}

export default TitleTwoDescriptionWithBtn
