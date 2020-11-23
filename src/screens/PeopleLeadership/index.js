import React from 'react';
import './index.scss';
import HeaderTitle from "../../components/HeaderTitle";
import HostImage from "../../images/careers-header.jpg";
import Title from "../../components/Title";
import Text from "../../components/Text";
import options from "./options";
import People from "./People";
import Input from "../../components/Input";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const PeopleLeadership = () => {

    const {isMobile} = useWindowDimensions()


    return (
        <div className={'people-leadership-container'}>
            <HeaderTitle title={'PEOPLE & LEADERSHIP'}
                         subtitle={'Working on what matters, together.'}
                         description={'Looking for an opportunity to take your career forwards, send your portfolio to' +
                         ' careers@mokengroup.com'} />
            <img src={HostImage} className={'people-leadership-image'}/>
            <Title title={'TEAM MOKEN'} containerStyles={{marginBottom: isMobile ? 50 : 150}}/>
            <div className={'padding-container'}>
                <Text size={55}
                      mobSize={35}
                      type={'extraLight'}
                      containerStyles={{marginBottom: 52}}>We increase website leads, maximize revenu and produce a positive ROI — validated with measurable results.</Text>
                <Text size={20}
                      mobSize={16}
                      type={'light'}
                      containerStyles={{marginBottom: 110}}>Our role consists of taking the time to understand your business model, and suggesting creative
                    and high-performing digital strategies. Our avant-garde tactics are in line with the current market,
                    blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.</Text>
                <Text size={16}
                      type={'semiBold'}
                      containerStyles={{marginBottom: 170}}
                      textStyles={{letterSpacing: 4}}>GET IN TOUCH</Text>
            </div>
            {
                options.peopleGroups.map((people, index) => <People {...people} peopleIndex={index}/>)
            }

            <Title title={'OUR EXTENDED TEAM'} containerStyles={{marginBottom: 150}}/>

            <Text size={55}
                  type={'extraLight'}
                  mobSize={35}
                  containerStyles={{paddingLeft: isMobile ? '10vw' : '18vw',
                      width: isMobile ? 'auto' : '30vw'}}>We increase website leads, maximize revenue and produce.</Text>

            <div className={'people-images-container'}>
                {
                    options.corporations.map((corporation, index) =>
                        <img src={corporation} key={'corporation' + index}/>)
                }
            </div>

            <Title title={'JOIN THE TEAM'} />

            <div className={'join-team-container'}>
                <Text type={'extraLight'}
                      containerStyles={{marginBottom: 50}}
                      mobSize={35}
                      size={55}>We have something for everyone.</Text>
                <Text type={'light'} containerStyles={{marginBottom: 100}} size={20}>The Moken team is growing at a rapid pace, to stay in the loop on additional ways to connct join our
                    mailing list to never miss a beat.</Text>
                <div className={'join-team-btn-container'}>
                    <Input width={'12vw'} placeholder={'Your name'}/>
                    <Input width={'12vw'} withGoButton placeholder={'Email'}/>
                </div>
            </div>
        </div>
    )
}

export default PeopleLeadership;
