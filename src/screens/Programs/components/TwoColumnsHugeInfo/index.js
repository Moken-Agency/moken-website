import Text from "../../../../components/Text";
import SubmitYourResume from "../../../../components/SubmitYourResume";
import React from "react";
import './index.scss';
import Title from "../../../../components/Title";
import UnderlineTextWithIcon from "../../../../components/UnderlineTextWithIcon";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";


const FirstItem = ({title, subtitle}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <div className={'labs-benefits-container-info-block-work'}>
            <Text size={22}
                  type={'semiBold'}
                  className={'labs-benefits-list-item-first'}>{title}</Text>
            <Text size={20}
                  mobSize={16}
                  textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                  type={'light'}>{subtitle}</Text>
        </div>
    )
}

const TwoColumnsHugeInfo = ({title = '',
                                leftTitle = '',
                                rightTitle = '',
                                rightFirstListTitle = '',
                                firstList = [],
                                rightSecondListTitle = '',
                                secondList = [],
                                secondListLikeFirst = false,
                                secondListWithIcon = false
}) => {
    const {isMobile} = useWindowDimensions()

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
                <Text size={20}
                      mobSize={16}
                      type={'light'}
                      textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                      className={'labs-benefits-container-info-block-first-title'}>{rightTitle}</Text>

                <Text type={'semiBold'}
                      size={14}
                      mobSize={10}
                      className={'labs-benefits-container-info-block-second-title'}
                      textStyles={{letterSpacing: 4}} containerStyles={{}}>{rightFirstListTitle}</Text>

                <div className={'labs-benefits-container-info-block-works-container'} >
                    {
                        firstList.map((el, index) => {
                            return (
                                <FirstItem {...el} key={'first item' + index}/>
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
                   !secondListLikeFirst ? secondList.map(({title = '', subtitle = '', link = ''}) => {
                        return (
                                <UnderlineTextWithIcon withIcon={secondListWithIcon}
                                                       color={'black'}
                                                       className={'two-column-submit-your-resume'}
                                                       title={title}/>
                        )
                    }) : null
                }

                <div className={'labs-benefits-container-info-block-works-container'}>
                     {
                         secondListLikeFirst ?  secondList.map(({title = '', subtitle = '', link = ''}) => {
                            return (
                                <FirstItem title={title} subtitle={subtitle}/>
                            )
                        }) : null
                    }
                </div>
            </div>
        </section>
    </>
    )
}

export default TwoColumnsHugeInfo
