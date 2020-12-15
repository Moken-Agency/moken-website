import React from "react";
import HeaderTitle from "../../../components/HeaderTitle";
import ProgramDetails from "../components/ProgramDetails";
import TitleTwoDescriptionWithBtn from "../components/TitleTwoDescriptionWithBtn";
import options from "./options";
import TwoColumnsHugeInfo from "../components/TwoColumnsHugeInfo";
import ProgramColorBlock from "../components/ProgramColorBlock";
import LeftInfoWithRightImage from "../components/LeftInfoWithRightImage";
import OurPartnersComponent from "../components/OurPartnersComponent";
import EmailForm from "../../../components/EmailForm";
import './index.scss';
import ProgramSwiper from "../components/ProgramSwiper";
import HeaderWithBlackInfoBlock from "../../../components/HeaderWithBlackInfoBlock";


const RaisingRight = () => {
    return (
        <div className={'raising-right-container'}>

            <HeaderWithBlackInfoBlock title={'IDEATION TO INNOVATION'}
                                      subtitle={'An idea incubator taking you from  to launch in 12 weeks.'}
                                      description={'No Fees. No Equity. A virtual incubation program providing you the tools to take action, guiding you from ideation to innovation.'}
            />

            <TitleTwoDescriptionWithBtn
                title={'We increase website leads, maximize revenu and produce a positive ROI — validated with measurable results.'}
                mainTitle={'PROGRAM OVERVIEW'}
                firstText={'Our capabilities span the breadth of operations, project, and product management; business strategy; marketing; design; technology; revenue optimization; talent acquisition; growth; and sales, across all industries through customized products, services, courses, workshops, solutions, and mentorship.'}
                secondText={'We partner with innovators through our tailored and integrative expertise, complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven outcomes.'}
            />

            <ProgramSwiper options={options.weeks}/>
            <TwoColumnsHugeInfo
                                title={'WHAT YOU GET'}
                                leftTitle={'Enthusiastic individuals working together to create extraordinary startups'}
                                rightTitle={'Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.\n' + '\n'}
                                rightFirstListTitle={'HOW WE CAN COLLABORATE'}
                                firstList={options.collaborates}
                                rightSecondListTitle={'LEARN MORE'}
                                secondList={options.learnMore}

            />

            <ProgramColorBlock title={'Ready to take your idea to the next level?'} subtitle={'APPLY NOW'} />

            <LeftInfoWithRightImage mainTitle={'WHO IS THIS PROGRAM FOR?'}
                                    title={'We are driven by the passion for working with determined innovators who live to make a change in the world.'}
                                    description={'We understand that together we should see results, not just reports with the work we do. We\'ve developed tailor-made strategies that assist in beating out the competition by tearing up the rule book. Through our agile approach, entrepreneurs, founders, and startups overcome the odds by predicting, measuring, mitigating, and managing the risk associated with innovation. '}
                                    btnTitle={'APPLY TO INCUBATOR'}
            />

            <OurPartnersComponent />

            <EmailForm withForm />
        </div>
    )
}

export default RaisingRight
