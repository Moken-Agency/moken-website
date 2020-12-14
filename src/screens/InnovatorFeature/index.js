import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import './index.scss';
import TitleTwoDescriptionWithBtn from "../Programs/components/TitleTwoDescriptionWithBtn";
import ImageTitleSubDescList from "../../components/ImageTitleSubDescList";
import options from './options';
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import EmailForm from "../../components/EmailForm";

const InnovatorFeature = () => {
    return (
        <div className={'innovator-container'}>
            <HeaderTitle title={'MENTORSHIP'}
                         subtitle={'Success fuelled by partnership.'}
                         description={'Together creating an unmatched global ecosystem.'}
            />

            <img src={'innovator-image-block'}/>

            <TitleTwoDescriptionWithBtn title={'We increase website leads, maximize revenu and produce a positive ROI ' +
            '— validated with measurable results.'}
                                        mainTitle={'WHAT IT IS'}
                                        firstText={'Our capabilities span the breadth of operations, project, and' +
                                        ' product management; business strategy; marketing; design; technology; revenue' +
                                        ' optimization; talent acquisition; growth; and sales, across all industries ' +
                                        'through customized products, services, courses, workshops, solutions, and mentorship.'}
                                        secondText={'We partner with innovators through our tailored and integrative ' +
                                        'expertise, complemented by a vibrant ecosystem of game-changing partners to ' +
                                        'deliver accelerated, superior, and impactfully driven outcomes.'}

            />

            <ImageTitleSubDescList title={'WHAT YOU GET'}
                                   subtitle={'We make it easy to kickstart your vision.'}
                                   description={'With packages at a startup price point, we work with founders and ' +
                                   'ideators with high growth potential. We\'re passionate about big ideas and' +
                                   ' working with people who feel the same.'}
                                   list={options.list}
                                   imgURL={''}
            />

            <LeftInfoWithRightImage mainTitle={'NEXT STEPS & APPLYING'}
                                    title={'Join our trusted community of partners and market what you do.'}
                                    description={'Our role consists of taking the time to understand your business model,' +
                                    ' and suggesting creative and high-performing digital strategies. Our avant-garde ' +
                                    'tactics are in line with the current market, blend seamlessly with our clients’ ' +
                                    'operational realities, and eliminate risks that aren’t necessary.'}
                                    imgUrl={''}
                                    btnTitle={'APPLY TO INCUBATOR'}
            />

            <EmailForm withForm/>


        </div>
    )
}

export default InnovatorFeature
