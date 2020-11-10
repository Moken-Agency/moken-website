import React from 'react';
import Text from "../../components/Text";
import './index.scss';
import Title from "../../components/Title";
import options from "./options";
import Join from "./components/Join";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";

const {benefits, joins} = options;

const ProductTestingTeam = () => {
    return (
        <div className={'product-testing-team-container'}>
            <div className={'product-testing-info-container'}>
                <Text className={'product-testing-title-first'} size={16} type={'semiBold'}>PRODUCT TESTING TEAM</Text>
                <Text className={'product-testing-title-second'} size={75} type={'thin'}>The power to test what is impossible with exclusive user testing. </Text>
                <div className={'circle-container'}>
                    <div className={'circle-first'}>
                        {/*<div/>*/}
                    </div>
                    <div className={'circle-second'}>
                        {/*<div/>*/}
                    </div>
                    <div className={'circle-third'}>
                        {/*<div/>*/}
                    </div>
                    <div className={'circle-forth'}>
                        {/*<div/>*/}
                    </div>
                </div>
                <Title title={'TEAM OVERVIEW'} className={'product-testing-title'}/>
                <div className={'product-testing-sub-container'}>
                    <Text className={'enthusiastic-title'}
                          type={'extraLight'} size={55}>Enthusiastic individuals working together to create extraordinary startups</Text>
                    <div className={'role-container'}>
                        <Text className={'role-title'} size={14} type={'light'}>Our role consists of taking the time to understand your business model, and suggesting
                            creative and high-performing digital strategies. Our avant-garde tactics are in line with
                            the current market, blend seamlessly with our clients’ operational realities, and eliminate
                            risks that aren’t necessary.</Text>
                        <Text size={14} type={'semiBold'}>THE BENEFITS OF COLLABORATION</Text>
                        <div className={'product-benefits-container'}>
                            {
                                benefits.map(({title, subtitle}, index) => {
                                    return (
                                        <div className={'product-benefit-container'} key={'benefits' + index}>
                                            <Text size={22} type={'semiBold'} className={'product-benefit-title'}>{title}</Text>
                                            <Text size={20} type={'light'}>{subtitle}</Text>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <Title title={'TEAM OVERVIEW'} className={'product-testing-title'}/>

                <div className={'joins-container'}>
                    <Text className={'joins-title'} size={55} type={'extraLight'}>Join Us Today.</Text>
                    <div>
                        {
                            joins.map((join, index) => {
                                return (
                                    <Join {...join}
                                          key={'join' + index}
                                          count={index + 1}
                                          isLast={index === joins.length - 1} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <ColorBlock  backgroundColor={'#ffc4af'} title={'Interested in getting exclusive access? \n' +
            'Request more information.'} subtitle={'APPLY NOW'} textColor={'black'} />

            <EmailForm title={'Stay in the loop & never miss a thing.'}
                       withForm
                       className={'product-email-form'}
                       width={'20vw'}/>

        </div>
    )
}

export default ProductTestingTeam
