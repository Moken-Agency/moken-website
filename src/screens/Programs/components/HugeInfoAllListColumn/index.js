import Text from "../../../../components/Text";
import options from "../../MokenLabs/options";
import SubmitYourResume from "../../../../components/SubmitYourResume";
import React from "react";
import './index.scss';
import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const HugeInfoAllListColumn = ({leftTitle,
                                   rightTitle,
                                   rightFirstListTitle,
                                   firstList = [],
                                   btnTitle = '',
                                    mainTitle = ''
,                                   rightSecondListTitle,
                                   secondList = [],
                                   withBtn = false,
                                   onClick = () => {}}) => {
    const {isMobile} = useWindowDimensions()

    return (
       <>
           <Title title={mainTitle} className={'labs-startups-title'}/>

           <section className={'labs-startups-container'}>
               <Text
                   type={'extraLight'}
                   size={55}
                   animationType={'fade-in'}
                   mobSize={35}
                   className={'labs-startups-first-text'}>{leftTitle}</Text>
               <div className={'labs-startups-info-block'}>
                   <Text size={20}
                         mobSize={16}
                         animationType={'fade-in'}
                         type={'light'}
                         textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                         className={'labs-startups-info-right-title'}>{rightTitle}</Text>

                   <Text type={'semiBold'}
                         size={14}
                         mobSize={10}
                         animationType={'fade-in'}
                         textStyles={{letterSpacing: 4}}
                         className={'labs-startups-info-right-first-title'}>{rightFirstListTitle}</Text>

                   <div className={'labs-startups-info-block-works-list'}>
                       {
                           firstList.map(({title, subtitle}, index) => {
                               return (
                                   <div key={'labs works' + index} className={'labs-startups-info-block-work'}>
                                       <Text size={22}
                                             mobSize={16}
                                             animationType={'fade-up'}
                                             type={'semiBold'}
                                             className={'labs-startups-info-block-work-first'}>{title}</Text>
                                       <Text size={20}
                                             animationType={'fade-up'}
                                             textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                                             mobSize={16} type={'light'}>{subtitle}</Text>
                                   </div>
                               )
                           })
                       }
                   </div>

                   {rightSecondListTitle ? <Text type={'semiBold'}
                                                 size={14}
                                                 animationType={'fade-up'}
                                                 mobSize={10}
                                                 textStyles={{letterSpacing: 4}}
                                                 className={'right-second-list-title'}
                                                 containerStyles={{}}>{rightSecondListTitle}</Text> : null}


                   {secondList.length ? secondList.map(({title, link}) => <SubmitYourResume className={'huge-info-right-second-list-title'}
                                                                                            color={'black'}
                                                                                            title={title}/>) : null}

                   {withBtn ? <Button backgroundColor={'black'}
                                      textColor={'white'}
                                      onClick={onClick}
                                      title={btnTitle}/> : null}
               </div>
           </section>
       </>
    )
}

export default HugeInfoAllListColumn
