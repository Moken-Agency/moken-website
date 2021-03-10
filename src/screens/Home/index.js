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




const {explores, startupsData, paths, impacts} = options;

const Home = () => {
    let history = useHistory();

    const [cursorIndex, setCursorIndex] = useState(0);


    const ref = useRef(null)
    // console.log('currentcurrentcurrentcurrent', typed);

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
               <Text type={'kSemiBold'} size={20} className={'home-header-first-title-tm'}>TM</Text>
               <Text type={'kBold'} size={120} className={'home-header-first-title'}>We are moken.</Text>
               {/*<Typical wrapper="span"*/}
               {/*         className={'typical-test'}   steps={['We are moken.']} />*/}
               <div className={'animated-text-container'}>
                   <div className={'animated-test-after'}>
                       <Text className={'home-header-first-title'} type={'kBold'} size={120}>We </Text>
                       {
                           options.cursors.map((cursor, index) => {

                               return <img src={cursor} style={{opacity: cursorIndex === index ? 1 : 0}}/>
                           })
                       }
                       {/*<img src={options.cursors[cursorIndex]} />*/}
                   </div>

                   <Typed
                       typeSpeed={75}
                       backDelay={2000}
                       backSpeed={65}
                       ref={ref}
                       loop
                       cursorChar={''}
                       strings={options.steps}
                       preStringTyped={setCursorIndex}
                       className={`typical-test ${options.cursorsColour[cursorIndex]}`}
                   />
                   <Text className={'home-header-first-title'} type={'kBold'} size={120} >
                        startups.
                   </Text>
               </div>

           </div>
           <Text className={'home-header-second-title'} type={'kLight'} size={20}>
               Moken is a hub for founders and startups guiding them through the journey of building a successful venture from ideation to growth.
           </Text>
       </section>

        <section className={'home-explore-container'}>
            <div className={'home-explore-divider'}/>
            <Text className={'home-explore-title'} type={'kMedium'} size={16}>EXPLORE</Text>

            <div className={'home-explore-list-container'}>
                {
                    explores.map((explore, index) => (<HomeExplore {...explore} key={index + 'home-explores'}/>))
                }
            </div>
        </section>

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
               description: 'Providing services and solutions to startups and founders to build and develop their ' +
                   'visions, ideas, and products that scale.',
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
                   <div style={{width: 400, height: 400, marginLeft: 85}} >
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
                                           <Text type={'kMedium'} size={24}>a community of</Text>
                                           <Text type={'kBold'} size={100}>2431</Text>
                                           <Text type={'kMedium'} size={24}>of passionate</Text>
                                           <Text type={'kMedium'} size={24}>founders & startups</Text>
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
            title={'Scale your startup faster.'}
            imgURL={homeScale}
            descriptionData={{
                title: 'Where startups & founders learn & evolve.',
                description: `Unparalleled personalized access to hands-on incubation & acceleration programs dedicated to helping entrepreneurs scale their ventures.`,
                btnOptions: {
                    title: 'DISCOVER OUR PROGRAMS',
                    route: '/about-programs'

                }
            }}
            additionalComponent={() => {
                return (
                    <div className={'home-startups-list-container'}>
                        {
                            startupsData.map(({title, subtitle}) => {
                               return (
                                   <div className={'startups-item'}>
                                        <Text type={'kBold'} size={60}>{title}</Text>
                                        <Text size={16} className={'startups-item-subtitle'} type={'kRegular'}>{subtitle}</Text>
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
            title={'Create unmatched connections.'}
            descriptionData={{
                title: 'Where founders network, scale & succeed.',
                description: `An exclusive, invite-only network built for ambitious humans where we ask questions, 
                exchange ideas, share resources, and connect with one another.`,
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
            title={'Generate new opportunities.'}
            imgURL={homeGenerate}
            descriptionData={{
                title: 'Where startups & founders experience & connect.',
                description: "Developing meaningful brand experiences and unforgettable events that expand beyond traditional tactics and focus on audience engagement and strategy.",
                btnOptions: {
                    title: 'EXPLORE EVENTS',
                    route: '/events'

                }
            }}
        />

        <section className={'home-pathway-container'}>
            <Text type={'kBold'} size={100} className={'home-pathway-title'}>Your pathway to success.</Text>
            <div className={'home-pathway-wrapper'}>
                <img src={path}/>
                <div className={'home-pathway-graph'} style={{width: '100%'}}>
                    {
                        paths.map((path, index) => {
                            return (
                                <div style={{display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    marginBottom: 70 * index,
                                    borderColor: 'black',
                                    width: '25%',
                                    // height: 611,
                                    height: '38vw',
                                    paddingBottom: 25,
                                    borderRight: `${index === 4 ? 0 : '1px'} solid rgb(221, 221, 221)`}}>
                                    <Text type={'kRegular'} size={16} textStyles={{letterSpacing: 4}}>{path}</Text>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

        <section className={'home-impact-container'}>
            <Text type={'kBold'} size={100} className={'home-impact-title'}>How can we help you make an impact?</Text>
            <div className={'home-impact-list'}>
                {
                    impacts.map(({title, subtitle, route}) => {
                        return (
                            <div className={'home-impact-item'} onClick={() => history.push(route)}>
                                <Text type={'kBold'} size={35} className={'home-impact-title'} textStyles={{lineHeight: '45px'}}>{title}</Text>
                                <Text type={'kSemiBold'} size={16} color={'#ff2a68'}>{subtitle}</Text>
                            </div>
                        )
                    })
                }
            </div>
        </section>

        <section className={'home-book-container'}>
            <Text type={'kBold'} size={45} className={'home-book-title'}>Book a free call with us now and we’ll help you map out your strategy.</Text>
            <Text type={'kLight'} size={20} className={'home-book-description'}>We would love to connect with you, learn more about your startup, identify struggles and opportunities together, and give our perspective on what you should be focusing on in the immediate to drive your business forward.</Text>
            <Button title={'BOOK YOUR CALL'}/>
        </section>
    </div>
  );
};

export default Home;
