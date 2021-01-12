import React from "react";
import HeaderTitle from "../../../components/HeaderTitle";
import ProgramDetails from "../components/ProgramDetails";
import options from "./options";
import TitleTwoDescriptionWithBtn from "../components/TitleTwoDescriptionWithBtn";
import ImageBlock from "../../../components/ImageBlock";
import TwoColumnsHugeInfo from "../components/TwoColumnsHugeInfo";
import ProgramColorBlock from "../components/ProgramColorBlock";
import ProgramSwiper from "../components/ProgramSwiper";
import HugeInfoAllListColumn from "../components/HugeInfoAllListColumn";
import ProgramCommunityListPartner from "../components/ProgramCommunityListPartner";
import EmailForm from "../../../components/EmailForm";
import './index.scss';
import HeaderWithBlackInfoBlock from "../../../components/HeaderWithBlackInfoBlock";

const FutureFounders = () => {
    return (
        <div className={'future-founders-container'}>
             <HeaderWithBlackInfoBlock title={'FUTUREFOUNDERS MENTORSHIP PROGRAM'}
                                       subtitle={'Inspiring student founders to scale their startup.'}
             />

             <TitleTwoDescriptionWithBtn
                 title={'Built by students and powered by First Round, we provide founders with a strong network of investors, world-class mentors, and a $20,000 check.'}
                 firstText={'Our capabilities span the breadth of operations, project, and product management; business strategy; marketing; design; technology; revenue optimization; talent acquisition; growth; and sales, across all industries through customized products, services, courses, workshops, solutions, and mentorship.'}
                 secondText={'We partner with innovators through our tailored and integrative expertise, complemented by a vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully driven outcomes.'}
                 mainTitle={'PROGRAM OVERVIEW'}
             />

             <ImageBlock position={'right'} />

             <TwoColumnsHugeInfo
                 title={'PROGRAM BENEFITS'}
                 leftTitle={'Enthusiastic individuals working together to create extraordinary startups'}
                 rightTitle={'Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.\n' +
                 '\n'}
                 rightFirstListTitle={'HOW WE CAN COLLABORATE'}
                 firstList={options.benefits}
                 rightSecondListTitle={'CHOOSE YOUR PURPOSE'}
                 secondList={options.purposes}
             />

             <ProgramColorBlock
                 title={'Ready to take your idea to the next level?'}
                 subtitle={'APPLY NOW'}
                 />

            <ProgramSwiper options={options.components}/>

            <HugeInfoAllListColumn
                leftTitle={'Enthusiastic individuals working together to create extraordinary startups'}
                rightTitle={'Our role consists of taking the time to understand your business model, and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in line with the current market, blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.\n' +
                '\n'}
                rightFirstListTitle={'HOW WE CAN COLLABORATE'}
                firstList={options.collaborateTypes}
                withBtn
                btnTitle={'APPLY TO INCUBATOR'}
                onClick={() => alert('test')}

            />

            <ProgramCommunityListPartner
                title={'CREATE THE FUTURE'}
                subtitle={'Join our trusted community of partners and market what you do to founders and startups, globally.'}
                options={options.future}
                widthItem={'30vw'}
            />

            <EmailForm withForm />
        </div>
    )
}

export default FutureFounders;
