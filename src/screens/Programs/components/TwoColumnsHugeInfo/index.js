import Text from "../../../../components/Text";
import SubmitYourResume from "../../../../components/SubmitYourResume";
import React from "react";
import './index.scss';
import Title from "../../../../components/Title";

const TwoColumnsHugeInfo = ({title = '',
                                leftTitle = '',
                                rightTitle = '',
                                rightFirstListTitle = '',
                                firstList = [],
                                rightSecondListTitle = '',
                                secondList = []}) => {
    return (
        <>
            <Title title={title} className={'labs-benefits-title'} />
            <section className={'labs-benefits-container'}>
            <Text
                type={'extraLight'}
                size={55}
                mobSize={35}
                className={'labs-benefits-container-title'}>
                {leftTitle}
                </Text>
            <div className={'labs-benefits-container-info-block'} >
                <Text size={20} type={'light'} className={'labs-benefits-container-info-block-first-title'}>{rightTitle}</Text>

                <Text type={'semiBold'}
                      size={14}
                      mobSize={10}
                      className={'labs-benefits-container-info-block-second-title'}
                      textStyles={{letterSpacing: 4}} containerStyles={{}}>{rightFirstListTitle}S</Text>

                <div className={'labs-benefits-container-info-block-works-container'} >
                    {
                        firstList.map(({title, subtitle}, index) => {
                            return (
                                <div key={'labs works' + index} className={'labs-benefits-container-info-block-work'}>
                                    <Text size={22}
                                          type={'semiBold'}
                                          className={'labs-benefits-list-item-first'}>{title}</Text>
                                    <Text size={20} type={'light'}>{subtitle}</Text>
                                </div>
                            )
                        })
                    }
                </div>

                <Text type={'semiBold'}
                      size={14}
                      mobSize={10}
                      className={'two-column-right-second-list-title'}
                      textStyles={{letterSpacing: 4}}>{rightSecondListTitle}</Text>

                {
                    secondList.map(({title, link}) => <SubmitYourResume color={'black'} className={'two-column-submit-your-resume'} title={title}/>)
                }
            </div>
        </section>
            </>
    )
}

export default TwoColumnsHugeInfo
