import React, {useEffect, useState} from "react";
import Text from "../../components/Text";
import Event from "./component/Event";
import "./index.scss";
import { useHistory } from "react-router-dom";
import event from "../../images/upevents.svg";
import eventMob from "../../images/upeventsmob.svg";
import Button from "../../components/Button";
import ColorBlock from "../../components/ColorBlock";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SubmitYourResume from "../../components/SubmitYourResume";
import upcomingEventsHeader from '../../images/upcoming-events-header.jpg';
import {sget} from "../../api/helpers";
import {formatEvents} from "../../constans/formatEvents";

const UpcomingEvents = () => {
  const history = useHistory();
  const [events, setEvents] = useState({events: []});
  const { isMobile } = useWindowDimensions();
    useEffect( () => {
        async function f () {
            const response = await sget({url: 'https://www.eventbriteapi.com/v3/organizations/481196850209/events/?status=live'});
            const events = await response.json();
            setEvents(() => formatEvents(events));
        }
        f()
    }, []);

    // console.log({events});
    return (
    <div className={"events-container"}>
      {/*<section className={'events-header-container'} style={{backgroundImage: `url(${isMobile ? eventMob : event})`}}>*/}
      {/*    <Text size={isMobile ? '2vw' : '1vw'} className={'join-us'} type={'semiBold'} color={'white'}>JOIN US</Text>*/}
      {/*    <Text size={isMobile ? '10vw' : '4.5vw'} className={'upcoming-events'} type={'thin'} color={'white'}>Upcoming Events</Text>*/}
      {/*</section>*/}
      <header>
        <div className={"events-header-block"}>
          <Text
            type={"kSemiBold"}
            containerStyles={{ marginBottom: 20 }}
            size={16}
            mobSize={14}
            textStyles={{ letterSpacing: 4 }}
          >
            JOIN US
          </Text>
          <Text type={"kBold"} size={75} mobSize={45} className={'upcoming-events-title'}>
            Upcoming Events
          </Text>
        </div>

        <img src={upcomingEventsHeader} />
      </header>
      <section className={"events-list-container"}>
        <div className={"events-list"}>
          {events.events.map((event) => (
            <Event {...event} />
          ))}
        </div>

        <SubmitYourResume title={"View all events"} color={"black"} />
      </section>

      <ColorBlock
        title={"Looking to get more out of events?"}
        subtitle={"GET INVOLVED"}
        backgroundColor={"#000"}
        // blockType={'middle'}
          size={75}
        textColor={'white'}
        withIcon
        onClick={() => history.push('/host-an-event')}
      />

      {/*<div style={{width: '100%', height: 1, backgroundColor: '#d4d4d4', margin: '3vw 0'}}/>*/}

      <EmailForm withForm />
    </div>
  );
};

export default UpcomingEvents;
