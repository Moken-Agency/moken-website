import React, {useRef, useState} from "react";
import Text from "../../components/Text";
import './index.scss';
import options from './options';
import HomeExplore from "../../components/HomeExplore";
import HomeComponentWithVerticalText from "../../components/HomeComponentWithVerticalText";
import HomeComponentWithSwiper from "../../components/HomeComponentWithSwiper";
import Button from "../../components/Button";
import {useHistory} from "react-router-dom";
import path from '../../images/Path 2.svg';
import HomeDescriptionDataComponent from "../../components/HomeDescriptionDataComponent";
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "../../components/AnimatedProgressProvider/AnimatedProgressProvider";
import {easeQuadInOut} from "d3-ease";
import TrackVisibility from "react-on-screen";
import homeGenerate from "../../images/home-generate.jpg";
import homeNetworking from "../../images/home-networking.jpg";
import homeRyr from "../../images/home-ryr@3x.jpg";
import homeScale from "../../images/home-scale.jpg";
import Typical from 'react-typical';
import Typed from 'react-typed';
import HomeImpact from "../../components/HomeImpact";
import Form from "../../components/Form";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Swiper from "../../components/Swiper";
import Explore from "../../components/Explore";




const {explores, startupsData, paths, impacts} = options;

const Home = () => {
    let history = useHistory();

    const { isMobile } = useWindowDimensions();

    const [cursorIndex, setCursorIndex] = useState(0);



    const ref = useRef(null)
    // console.log('currentcurrentcurrentcurrent', typed);

    const scrollToNextElement = () => {
        window.scrollTo({
            top: 1500,
            behavior: "smooth"
        });
    }

    return (
    <div className={'home-container'}>

       <section className={'home-header'}>
           <div className={'home-header-first-title-container'}>


               {/*<Typed*/}
               {/*    strings={[*/}
               {/*        'Search for products',*/}
               {/*        'Search for categories',*/}
               {/*        'Search for brands']}*/}
               {/*    typeSpeed={40}*/}
               {/*    backSpeed={50}*/}
               {/*    attr="placeholder"*/}
               {/*    loop >*/}
               {/*    <input type="text"/>*/}
               {/*</Typed>*/}
               <Text type={'kSemiBold'} size={20} mobSize={12} className={'home-header-first-title-tm'}>TM</Text>
               <Text type={'kBold'} size={120} mobSize={30} className={'home-header-first-title'}>We are moken.</Text>
               {/*<Typical wrapper="span"*/}
               {/*         className={'typical-test'}   steps={['We are moken.']} />*/}
               <div className={'animated-text-container'}>
                   <div className={'animated-test-after'}>
                       <Text className={'home-header-first-title'} type={'kBold'} mobSize={30} size={120}>We </Text>
                       {
                           options.cursors.map((cursor, index) => {

                               return <img key={'cursor' + cursor + index}
                                           src={cursor}
                                           style={{opacity: cursorIndex === index ? 1 : 0}}/>
                           })
                       }
                       {/*<img src={options.cursors[cursorIndex]} />*/}
                   </div>

                   <Typed
                       typeSpeed={85}
                       backDelay={2000}
                       backSpeed={75}
                       ref={ref}
                       loop
                       cursorChar={''}
                       strings={options.steps}
                       preStringTyped={setCursorIndex}
                       className={`typical-test ${options.cursorsColour[cursorIndex]}`}
                   />
                   <Text className={'home-header-first-title'} type={'kBold'} mobSize={30} size={120} >
                        startups.
                   </Text>
               </div>

           </div>
           <Text className={'home-header-second-title'} type={'kLight'} size={20}>
               Moken is a hub for founders and startups guiding them through the journey of building a successful venture from ideation to growth.
           </Text>
       </section>

        <section className={'home-explore-container'}>
            <div className={'home-explore-divider-container'} onClick={scrollToNextElement}>
                <div className={'home-explore-divider'}/>
                <div className={'home-explore-divider-circle'}>
                    <div />
                </div>
                <Text className={'home-explore-title'} type={'kMedium'} size={16}>EXPLORE</Text>

            </div>



            <div className={'home-explore-list-container'}>
                {
                    explores.map((explore, index) => (<HomeExplore {...explore} key={index + 'home-explores'}/>))
                }
            </div>


        </section>

        <Swiper swiperData={explores}  breakpoints={{'0': {slidesPerView: 1.25}}}
            containerClassName={'home-explore-list-container-mob'} Component={HomeExplore}/>



        <HomeComponentWithVerticalText
           numberTitle={'01.'}
           verticalText={{
            first: 'moken',
            // second: 'agenadjfksjdgkjsdngjkdscy'
            second: 'agency'
           }}
           title={'Build your startup, smarter.'}
           imgURL={homeRyr}
           imageClassName={'home-ryr-block-image'}
           titleContainerStyles={{maxWidth: 849}}
           descriptionData={{
               title: 'Where startups build, validate & grow.',
               description: 'Providing the vital solutions startups and founders need to build and develop visions, ideas, and products that scale. We aim to bridge the skill, resource, and funding gaps throughout the life cycle of emerging ventures through tailored and integrative expertise complemented by a vibrant ecosystem of game-changing partners.',
               btnOptions: {
                   title: 'LET’S GET STARTED',
                   route: '/about-agency'

               }
           }}
       />

       <section className={'home-ecosystem-container'} data-aos="fade-in">
           <HomeDescriptionDataComponent descriptionData={{
               title: 'Our ecosystem impact is really awesome.',
               description: "A community comprised of passionate entrepreneurs, innovators, investors, and builders who share a goal of making an impact.",
               btnOptions: {
                   title: 'EXPLORE THE ECOSYSTEM',
                   route: '/community'

               }
           }}
             titleClass={'home-ecosystem-title'}
             descriptionClass={'home-ecosystem-description'}
           />

               <TrackVisibility once>
               {({ isVisible }) => isVisible && (
                   <div className={'home-circle-container'}>
                       <AnimatedProgressProvider
                           valueStart={0}
                           valueEnd={75}
                           duration={1.4}
                           easingFunction={easeQuadInOut}
                       >
                           {value => {
                               return (
                                   <CircularProgressbarWithChildren
                                       value={value}
                                       // text={`${roundedValue}%`}
                                       /* This is important to include, because if you're fully managing the
                                 animation yourself, you'll want to disable the CSS animation. */
                                       styles={buildStyles({ pathTransition: "none" })}
                                   >
                                       <div data-aos="fade-in" style={{display: 'flex',
                                           flexDirection: 'column',
                                           alignItems: 'center',
                                           justifyContent: 'center'}}>
                                           <Text type={'kMedium'} size={24} mobSize={16}>a community of</Text>
                                           <Text withCountAnimation countAnimationProps={{duration: 1.4}}
                                                 type={'kBold'}
                                                 mobSize={75}
                                                 size={100}>2431</Text>
                                           <Text type={'kMedium'} size={24} mobSize={16}>of passionate</Text>
                                           <Text type={'kMedium'} size={24} mobSize={16}>founders & startups</Text>
                                       </div>

                                   </CircularProgressbarWithChildren>
                               );
                           }}
                       </AnimatedProgressProvider>
                   </div>

               )}
           </TrackVisibility>




       </section>

        <HomeComponentWithVerticalText
            numberTitle={'02.'}
            verticalText={{
                first: 'moken',
                // second: 'agenadjfksjdgkjsdngjkdscy'
                second: 'programs'
            }}
            titleContainerStyles={{
                maxWidth: 713
            }}
            title={'Accelerate your startup'}
            imgURL={homeScale}
            descriptionData={{
                title: 'Providing This needs to be 3 lines, the grid of the box need to be this size always.',
                description: `Unparalleled personalized access to hands-on incubator & accelerator programs dedicated to helping entrepreneurs scale their ventures.`,
                btnOptions: {
                    title: 'DISCOVER OUR PROGRAMS',
                    route: '/about-programs',
                    isComingSoon: true

                }
            }}
            additionalComponent={() => {
                return (
                    <div className={'home-startups-list-container'}>
                        {
                            startupsData.map(({title, subtitle, suffix = ''}, index) => {
                               return (
                                   <div className={'startups-item'} key={'startupsData' + title + index}>
                                       <TrackVisibility once>
                                           {({ isVisible }) => isVisible && (
                                               <>
                                                   <Text withCountAnimation countAnimationProps={{suffix}} type={'kBold'} size={60}>{title}</Text>
                                                   <Text size={16} className={'startups-item-subtitle'} type={'kRegular'}>{subtitle}</Text>
                                               </>
                                           )}
                                       </TrackVisibility>
                                   </div>
                               )
                            })
                        }
                    </div>
                )
            }}
        />

        <HomeComponentWithSwiper
            numberTitle={'03.'}
            title={'Create an unmatched network.'}
            descriptionData={{
                title: 'Where founders network, scale & succeed.',
                description: `An exclusive, invite-only network built for ambitious innovators where together, we ask questions, exchange ideas, share resources, and network with one another.`,
                btnOptions: {
                    title: 'ACCESS YOUR FUTURE',
                    route: '/access'

                }
            }}
            swiperData={options.swiperData}
        />


        <HomeComponentWithVerticalText
            numberTitle={'04.'}
            titleContainerStyles={{maxWidth: 707}}
            verticalText={{
                first: 'moken',
                // second: 'agenadjfksjdgkjsdngjkdscy'
                second: 'events'
            }}
            title={'Generate new connections.'}
            imgURL={homeGenerate}
            descriptionData={{
                title: 'The grid system need to be always like the design with padding always the same and the lines always 3 lines.',
                description: "Developing immersive experiences driving founders & startups to generate connections, develop opportunities and create meaningful relationships.",
                btnOptions: {
                    title: 'EXPLORE EVENTS',
                    route: '/events'

                }
            }}
        />

        <section className={'home-pathway-container'}>
            <Text type={'kBold'} size={100} mobSize={30} className={'home-pathway-title'}>Your pathway to success.</Text>
            <div className={'home-pathway-wrapper'}>
                <img src={path}/>
                <div className={'home-pathway-graph'} style={{width: '100%'}}>
                    {
                        paths.map((path, index) => {
                            const marginBottom = isMobile ? 15 : 70;
                            return (
                                <div key={path + index} style={{display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    marginBottom: marginBottom * index,
                                    borderColor: 'black',
                                    width: '25%',
                                    // height: 611,
                                    height: '38vw',
                                    paddingBottom: 25,
                                    borderRight: `${index === 4 ? 0 : '1px'} solid rgb(221, 221, 221)`}}>
                                    <Text type={'kRegular'} size={16} mobSize={8} textStyles={{letterSpacing: 4}}>{path}</Text>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

        <section className={'home-impact-container'}>
            <Text type={'kBold'} size={100} mobSize={52} className={'home-impact-title'}>How can we help you make an impact?</Text>

            <div className={'home-impact-list'}>
                {
                    impacts.map((impact, index) => {
                        return (
                            <HomeImpact {...impact} key={index + impact.title}/>
                        )
                    })
                }
            </div>
        </section>

        <section className={'home-book-container'}>
            <Text type={'kBold'} size={45} mobSize={30} className={'home-book-title'}>Book a free call with us now and we’ll help you map out your strategy.</Text>
            <Text type={'kLight'} size={20} mobSize={16} className={'home-book-description'}>We would love to connect with you, learn more about your startup, identify struggles and opportunities together, and give our perspective on what you should be focusing on in the immediate to drive your business forward.</Text>
            <Button title={'BOOK YOUR CALL'}
                    onClick={() => window.open('https://meetings.hubspot.com/mohamed24', '_blank')}/>
        </section>
    </div>
  );
};

export default Home;
