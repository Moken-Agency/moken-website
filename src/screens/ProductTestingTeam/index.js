import React from 'react';
import Text from "../../components/Text";
import './index.scss';
import Title from "../../components/Title";
import options from "./options";
import IterableCircle from "../../components/IterableCircle";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import ProductTestingTeamCircles from '../../images/product-team.svg';
import ProductTestingTeamCircle from '../../images/product-team-second.svg';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HeaderTitle from "../../components/HeaderTitle";
import TwoColumnsHugeInfo from "../Programs/components/TwoColumnsHugeInfo";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";

const {benefits, joins} = options;

const ProductTestingTeam = () => {
    const {isMobile} = useWindowDimensions()

    return (
        <div className={'product-testing-team-container'}>
            <HeaderTitle title={'PRODUCT TESTING TEAM'} subtitle={'The power to test what is impossible with exclusive user testing.'}
                         marginBottom={isMobile ? 206 : 0} />
            <div className={'product-testing-info-container'}>
                <div className={'circle-container'}>
                   <img src={ProductTestingTeamCircles} />
                </div>

                <TwoColumnsHugeInfo title={'TEAM OVERVIEW'}
                                    leftTitle={'Enthusiastic individuals working together to create extraordinary startups'}
                                    rightTitle={`Our role consists of taking the time to understand your business model, and suggesting
                            creative and high-performing digital strategies. Our avant-garde tactics are in line with
                            the current market, blend seamlessly with our clients’ operational realities, and eliminate
                            risks that aren’t necessary.`}
                                    rightFirstListTitle={'THE BENEFITS OF COLLABORATION'}
                                    firstList={benefits}
                                    />

                <Title title={'HOW IT WORKS'} className={'product-testing-title'}/>

                <div className={'joins-container'}>
                    <Text className={'joins-title'} size={55} type={'extraLight'}>Join Us Today.</Text>
                    <div>
                        {
                            joins.map((join, index) => {
                                return (
                                    <IterableCircle {...join}
                                          key={'join' + index}
                                          count={index + 1}
                                          isLast={index === joins.length - 1} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <ProgramCommunityListPartner title={'LET’S BUILD'}
                                         subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                                         options={options.programs}
            />



            <EmailForm withForm
                       className={'product-email-form'}
                       />

        </div>
    )
}

export default ProductTestingTeam
