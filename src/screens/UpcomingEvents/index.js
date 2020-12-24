import React from 'react';
import Text from '../../components/Text';
import Event from './component/Event';
import './index.scss';
import {useHistory} from 'react-router-dom';
import event from '../../images/upevents.svg'
import eventMob from '../../images/upeventsmob.svg'
import Button from "../../components/Button";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HeaderWithBackground from "../../components/HeaderWithBackground";
import SubmitYourResume from "../../components/SubmitYourResume";

const UpcomingEvents = () => {
    const history = useHistory();
    const {isMobile} = useWindowDimensions()


    return (
        <div className={'events-container'}>
            {/*<section className={'events-header-container'} style={{backgroundImage: `url(${isMobile ? eventMob : event})`}}>*/}
            {/*    <Text size={isMobile ? '2vw' : '1vw'} className={'join-us'} type={'semiBold'} color={'white'}>JOIN US</Text>*/}
            {/*    <Text size={isMobile ? '10vw' : '4.5vw'} className={'upcoming-events'} type={'thin'} color={'white'}>Upcoming Events</Text>*/}
            {/*</section>*/}
           <header>
               <div className={'events-header-block'}>
                   <Text type={'semiBold'}
                         containerStyles={{marginBottom: 20}}
                         size={16}
                         mobSize={14}
                         textStyles={{letterSpacing: 4}}>JOIN US</Text>
                   <Text type={'thin'}
                         size={75}
                         mobSize={45}
                   >Upcoming</Text>
                   <Text type={'thin'}
                         size={75}
                         mobSize={45}
                   >Events</Text>

               </div>

               <img src={eventMob} />
           </header>
            <section className={'events-list-container'}>
                <div className={'events-list'}>
                    {
                        [1,2].map(() => <Event />)
                    }
                </div>

                <SubmitYourResume title={'View all events'} color={'black'}/>
            </section>

            <ColorBlock title={'Looking to get more out of events?'}
                        subtitle={'GET INVOLVED'}
                        backgroundColor={'#263da8'} className={'events-color-block'}/>

            {/*<div style={{width: '100%', height: 1, backgroundColor: '#d4d4d4', margin: '3vw 0'}}/>*/}

            <EmailForm withForm />

        </div>
    )
}

export default UpcomingEvents
