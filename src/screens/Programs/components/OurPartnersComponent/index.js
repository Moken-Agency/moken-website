import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import React from "react";
import './index.scss';

const defaultTitle = 'OUR PARTNERS';
const defaultText = 'We increase website leads, maximize revenu and produce a positive\n' +
    '                    ROI — validated with measurable results.';

const OurPartnersComponent = ({title = defaultTitle, text = defaultText}) => {
    return (
        <>
            <Title title={defaultTitle} className={'labs-increase-title'}/>

            <section className={'labs-increase-container'}>
                <Text size={55}
                      mobSize={35}
                      data-aos="fade-in"
                      type={'extraLight'}
                      lassName={'our-partners-text-title'}
                      containerStyles={{marginBottom: 155}}>{defaultText}</Text>

                <div className={'labs-increase-list-container'}>
                    {
                        [1,2,3,4,5,6].map(() => {
                            return (
                                <div className={'labs-increase-list-item'}/>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default OurPartnersComponent
