import React from "react";
import Text from "../../components/Text";
import './index.scss';
import options from './options';
import HomeExplore from "../../components/HomeExplore";
import HomeComponentWithVerticalText from "../../components/HomeComponentWithVerticalText";
import HomeComponentWithSwiper from "../../components/HomeComponentWithSwiper";
import Button from "../../components/Button";
import {useHistory} from "react-router-dom";
import path from '../../images/Path 2.svg';

const {explores, startupsData, paths, impacts} = options;

const Home = () => {
    let history = useHistory();

  return (
    <div className={'home-container'}>
       <section className={'home-header'}>
           <div className={'home-header-first-title-container'}>
               <Text type={'kSemiBold'} size={20} className={'home-header-first-title-tm'}>TM</Text>
               <Text type={'kBold'} size={120} className={'home-header-first-title'}>We are moken.
                   We build startups.</Text>
           </div>
           <Text className={'home-header-second-title'} type={'kLight'} size={20}>
               Moken is a hub for founders and startups guiding them through the journey of building a successful venture from ideation to growth.
           </Text>
       </section>

        <section className={'home-explore-container'}>
            <div className={'home-explore-divider'}/>
            <Text className={'home-explore-title'} type={'kRegular'} size={16}>EXPLORE</Text>

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
           title={'Build your startup.'}
           imgURL={''}
           descriptionData={{
               title: 'Where startups build, validate & grow.',
               description: 'Providing services and solutions to startups and founders to build and develop their ' +
                   'visions, ideas, and products that scale.',
               btnOptions: {
                   title: 'LET’S GET STARTED',
                   route: '/'

               }
           }}
       />

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
            imgURL={''}
            descriptionData={{
                title: 'Where startups & founders learn & evolve.',
                description: "Leverage our community to build, validate, and grow your venture through support" +
                    " from fellow founders who have been where.",
                btnOptions: {
                    title: 'JOIN THE PROGRAM',
                    route: '/'

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
                title: 'Where startups build, validate & grow.',
                description: 'Providing services and solutions to startups and founders to build and develop their ' +
                    'visions, ideas, and products that scale.',
                btnOptions: {
                    title: 'LET’S GET STARTED',
                    route: '/'

                }
            }}
        />


        <HomeComponentWithVerticalText
            numberTitle={'04.'}
            verticalText={{
                first: 'moken',
                // second: 'agenadjfksjdgkjsdngjkdscy'
                second: 'agency'
            }}
            title={'Generate new opportunities.'}
            imgURL={''}
            descriptionData={{
                title: 'Where startups & founders experience & connect.',
                description: "Developing meaningful brand experiences and unforgettable events that expand beyond traditional tactics and focus on audience engagement and strategy.",
                btnOptions: {
                    title: 'EXPLORE EVENTS',
                    route: '/'

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
                                height: 611,
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
