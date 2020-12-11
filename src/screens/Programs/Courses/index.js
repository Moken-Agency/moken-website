import React from "react";
import HeaderTitle from "../../../components/HeaderTitle";
import ImageBlock from "../../../components/ImageBlock";
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import './index.scss';
import options from './options';
import Course from "./Course";
import ColorBlock from "../../../components/ColorBlock";
import Swiper from "../../../components/Swiper";
import Explore from "../../../components/Explore";
import EmailForm from "../../../components/EmailForm";
import LeftInfoWithRightImage from "../components/LeftInfoWithRightImage";
import OurPartnersComponent from "../components/OurPartnersComponent";
import ProgramColorBlock from "../components/ProgramColorBlock";
import CoursesComponent from "../components/CoursesComponent";

const Courses = () => {
    return (
        <div className={'courses-container'}>
           <HeaderTitle title={'MOKEN PROGRAMS'}
                        subtitle={'Success fuelled by partnership.'}
                        description={'Together creating an unmatched global ecosystem.'} />
           <ImageBlock position={'right'} url={''} className={'courses-image-block'}/>
           <Title title={'PROGRAM OVERVIEW'} className={'courses-overview-title'}/>
           <section className={'courses-overview-container'}>
               <Text size={55} mobSize={35} type={'extraLight'} className={'courses-overview-first-text'}>Built by students and powered by First Round, we provide founders with a strong network of investors,
                   world-class mentors, and a $20,000 check.</Text>

               <Text size={20} mobSize={16} type={'light'}>Our capabilities span the breadth of operations, project, and product management; business strategy;
                   marketing; design; technology; revenue optimization; talent acquisition; growth; and sales, across all
                   industries through customized products, services, courses, workshops, solutions, and mentorship.</Text>
           </section>

            {/*<Title title={'THE COURSES'} className={'courses-courses-title'} />*/}

            {/*<section className={'courses-courses-container'}>*/}
            {/*    <Text size={55} mobSize={35} type={'extraLight'} className={'courses-courses-text'}>Self directed courses….Join our trusted community of partners and market*/}
            {/*        what you do to founders and startups.</Text>*/}
            {/*    <div className={'courses-list-container'}>*/}
            {/*        {*/}
            {/*            options.courses.map((course, index) => <Course {...course} key={'courses' + index} />)*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</section>*/}
            <CoursesComponent />


            <ProgramColorBlock title={'Looking for the next big thing?'}
                               subtitle={'FIND INVESTMENT OPPORTUNITIES'}
                                />

            {/*<section className={'courses-community-container'}>*/}
            {/*    <div className={'courses-community-info-block'}>*/}
            {/*        <Text type={'extraLight'} size={55}>Join our trusted community of partners and market what you do.</Text>*/}
            {/*        <Text type={'light'} size={20}>Our role consists of taking the time to understand your business model,*/}
            {/*            and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in*/}
            {/*            line with the current market, blend seamlessly with our clients’ operational realities, and*/}
            {/*            eliminate risks that aren’t necessary.</Text>*/}
            {/*    </div>*/}
            {/*    <img src={''} />*/}
            {/*</section>*/}

            <LeftInfoWithRightImage mainTitle={''}
                                    title={'Join our trusted community of partners and market what you do.'}
                                    description={'Our role consists of taking the time to understand your business model,\n' +
                                    '                        and suggesting creative and high-performing digital strategies. Our avant-garde tactics are in\n' +
                                    '                        line with the current market, blend seamlessly with our clients’ operational realities, and\n' +
                                    '                        eliminate risks that aren’t necessary.'}
                                    btnTitle={''}
                                    imgUrl={''} />

            <Title title={'PROGRAM COMPONENTS'} className={'courses-components-title'}/>

            <Swiper className={'courses-components-list-container'}>
                {
                    options.components.map((option, index) => {
                        return (
                            <Explore {...option} key={'explore ' + index}/>
                        )
                    })
                }
            </Swiper>


            <OurPartnersComponent />


            <EmailForm title={'Stay in the loop & never miss a thing.'} width={'20vw'} withForm />

        </div>
    )
}

export default Courses
