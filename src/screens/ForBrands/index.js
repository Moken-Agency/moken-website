import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import './index.scss';
import TitleCenterImagesList from "../../components/TitleCenterImagesList";
import options from "../ForStartups/options";
import ProgramCommunityListPartner from "../Programs/components/ProgramCommunityListPartner";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ForBrands = () => {
    const {isMobile} = useWindowDimensions()

    return (
        <div className={'for-brands-container'}>
            <HeaderTitle title={'FOR BRANDS'}
                         subtitle={'Success fuelled by partnership.'}
                         description={'Together creating an unmatched global ecosystem.'}
                         marginBottom={isMobile ? 107 : 107}

            />

            <ImageBlock position={'right'}/>

            <LeftInfoWithRightImage title={'Enthusiastic individuals working together to create extraordinary'}
                                    mainTitle={'PARTNERSHIPS'}
                                    description={'Our role consists of taking the time to understand your business model, ' +
                                    'and suggesting creative and high-performing digital strategies. Our avant-garde ' +
                                    'tactics are in line with the current market, blend seamlessly with our clients’ ' +
                                    'operational realities, and eliminate risks that aren’t necessary.'}
                                    btnTitle={'APPLY TO INCUBATOR'}
                                    isLeftImage
            />
            <TitleCenterImagesList title={'A FEW OF THE OTHER STARTUPS WE WORK WITH'}
                                   list={['', '', '', '', '']} />



            <LeftInfoWithRightImage title={'Join our trusted community of partners and market what you do.'}
                                    mainTitle={'ACCESS NETWORK'}
                                    description={'Our role consists of taking the time to understand your business model, ' +
                                    'and suggesting creative and high-performing digital strategies. Our avant-garde ' +
                                    'tactics are in line with the current market, blend seamlessly with our clients’ ' +
                                    'operational realities, and eliminate risks that aren’t necessary.'}
                                    btnTitle={'APPLY TO INCUBATOR'}
            />

            <ColorBlock title={'Looking for the next big thing?'}
                        subtitle={'APPLY NOW'}
                        withIcon
                        textColor={'black'}
                        backgroundColor={'grey'}
                        type={'thin'}
                        className={'for-brands-color-block'}
                        size={30}

            />

            <LeftInfoWithRightImage title={'Enthusiastic individuals working together to create extraordinary'}
                                    mainTitle={'ADVERTISEE & SPRONSOR'}
                                    description={'Our role consists of taking the time to understand your business model, ' +
                                    'and suggesting creative and high-performing digital strategies. Our avant-garde ' +
                                    'tactics are in line with the current market, blend seamlessly with our clients’ ' +
                                    'operational realities, and eliminate risks that aren’t necessary.'}
                                    btnTitle={'APPLY TO INCUBATOR'}
                                    isLeftImage
            />



            <ProgramCommunityListPartner title={'DRIVE GROWTH & SCALE FAST'}
                                         subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                                         options={options.programs}
                                         widthItem={'30vw'}

            />

            <EmailForm withForm />
        </div>
    )
}

export default ForBrands
