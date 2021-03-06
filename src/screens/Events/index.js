import React, {useEffect, useState} from "react";
import HeaderSecondType from "../../components/HeaderSecondType";
import './index.scss';
import ImageBlock from "../../components/ImageBlock";
import EventsHeaderImage from '../../images/innovation-mob-header@3x.png'
import TitleSubtitleVerticalDescriptions from "../../components/TitleSubtitleVerticalDescriptions";
import TitleShortListWithBtn from "../../components/TitleShortListWithBtn";
import {useHistory} from "react-router-dom";
import EmailForm from "../../components/EmailForm";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {sget} from "../../api/helpers";
import moment from 'moment'
import eventsSecond from '../../images/events-second.jpg';
import {formatEvents} from "../../constans/formatEvents";

const Events = () => {
    const history = useHistory();
    const { isMobile } = useWindowDimensions();

    const [events, setEvents] = useState({events: []});


    // const formatEvents = (responseEvents) => {
    //     return {
    //         ...responseEvents,
    //         events: responseEvents.events.map(event => (
    //             {
    //                 title: moment(event.start.utc).format('l'),
    //                 subtitle: event.name.text,
    //                 action: () => window.open(event.url,'_blank')
    //             }
    //             ))
    //     }
    // }
    //
    //

    useEffect( () => {
       async function f () {
           const response = await sget({url: 'https://www.eventbriteapi.com/v3/organizations/481196850209/events/?status=draft'});
           const events = await response.json();
           console.log({events});
           setEvents(() => formatEvents(events));
        }
        f()
    }, [])


return (
    <div className={'events-container'}>
        <HeaderSecondType
            subtitleClassName={'events-header-subtitle'}
           title={'MOKEN EVENTS'}
           subtitle={'Creating meaningful experiences to connect passionate individuals.'}
        />

        <ImageBlock url={EventsHeaderImage} imgClassName={'events-image-first-block'} position={'right'}/>

        <TitleSubtitleVerticalDescriptions
            subtitleClassName={'events-experiences-subtitle'}
            descriptionClassName={'events-experiences-description'}
            title={'MEANINGFUL EXPERIENCES WITH MEASURABLE IMPACT'}
            subtitle={'Immersive experiences full of complex and compelling stories and the humans that tell them.'}
            descriptions={[
                'At Moken Events our purpose is to Facilitate positive change through networking, digital and virtual summits, startup conferences, employee engagements, and social impact events. We humanize brands and connect audiences through creative storytelling and thoughtful, purpose-driven engagements.',
                'Our team is comprised of experts, educators, and innovators who blend industry experience with an unwavering passion for tackling new challenges. As perpetual problem solvers, we proactively address the needs of the startup community by anticipating challenges and working tirelessly to develop events and interactive programming that drive growth and create impact.'

            ]}
        />
        <ImageBlock position={'right'} url={eventsSecond}/>

        <TitleShortListWithBtn title={'UPCOMING EVENTS'}
                               subtitle={'Engaging and informative experiences.'}
                               list={events.events}
                               btnTitle={'SEE ALL EVENTS'}
                               btnType={'default'}
                               listItemBtnTitle={'GET TICKETS'}
                               containerStyles={{marginBottom: 200}}
                               btnOnClick={() => history.push("/opportunities")}
        />

        {/*<TwoColumnsHugeInfo*/}
        {/*    title={'CREATING COMMUNITY'}*/}
        {/*    leftTitle={'Creating opportunity through innovation driven by community.'}*/}
        {/*    rightTitle={`Our role consists of taking the time to understand your business model, and suggesting*/}
        {/*     creative and high-performing digital strategies.  and suggesting creative and high-performing digital strategies.`}*/}
        {/*    rightFirstListTitle={'A FEW OF OUR EVENT OPPORTUNITIES'}*/}
        {/*/>*/}

        <Title title={'CREATING COMMUNITY'} />

        <div className={'creative-community'}>
            <div className={'creative-community-text-container'}>
                <Text type={'kBold'}
                      size={50}
                      mobSize={35}
                      className={'creative-community-first-text-container'}
                      textStyles={{lineHeight: isMobile ? '43px' : '53px'}}>Passionate people working with passionate brands.</Text>
                <Text className={'creative-community-first-description'}
                      type={'kLight'} size={20} mobSize={16}>
                    Join us and turn your consumers into brand fans. We partner alongside startups, founders, and organizations to develop and create experiential campaigns and events that expand beyond traditional tactics to focus on audience engagement and strategy.
                </Text>
            </div>
            <Button title={'HOST AN EVENT WITH US'} onClick={() => history.push('/host-an-event')}/>
        </div>

        <EmailForm withForm />
    </div>
  );
};

export default Events;
