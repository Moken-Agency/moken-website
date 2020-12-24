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
import TitleSubDescription from "../../components/TitleSubDescription";

const PeopleLeadership = () => {

    const {isMobile} = useWindowDimensions()


    return (
        <div className={'people-leadership-container'}>
            <HeaderTitle title={'PEOPLE & LEADERSHIP'}
                         subtitle={'Working on what matters, together.'}
                         description={'Looking for an opportunity to take your career forwards, send your portfolio to' +
                         ' careers@mokengroup.com'} />
            <img src={HostImage} className={'people-leadership-image'}/>

            <TitleSubDescription title={'TEAM MOKEN'}
                                 subtitle={`We increase website leads, maximize revenu and produce 
                a positive ROI — validated with measurable results.`}
                                 description={`Our role consists of taking the time to understand your business model, and suggesting creative
                    and high-performing digital strategies. Our avant-garde tactics are in line with the current market,
                    blend seamlessly with our clients’ operational realities, and eliminate risks that aren’t necessary.`}
             />
            {
                options.peopleGroups.map((people, index) => <People {...people} peopleIndex={index}/>)
            }

            <TitleSubDescription title={'OUR EXTENDED TEAM'} subtitle={'We increase website leads, maximize revenue and produce.'}/>

            <div className={'people-images-container'}>
                {
                    options.corporations.map((corporation, index) =>
                        <img src={corporation} key={'corporation' + index}/>)
                }
            </div>

            <Title title={'JOIN THE TEAM'} />

            <div className={'join-team-container'}>
                <Text type={'extraLight'}
                      animationType={'fade-in'}
                      containerStyles={{marginBottom: 50, width:isMobile ? 'auto' : '30vw'}}
                      mobSize={35}
                      size={55}>We have something for everyone.</Text>
                <Text type={'light'}
                      animationType={'fade-in'}
                      containerStyles={{marginBottom: 100, width: isMobile ? 'auto' : '35vw'}}
                      size={20}
                      mobSize={16}
                      textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                >The Moken team is growing at a rapid pace, to stay in the loop on additional ways to connct join our
                    mailing list to never miss a beat.</Text>
                <div data-aos="fade-in" className={'join-team-btn-container'}>
                    <Input width={236} placeholder={'Your name'}/>
                    <Input width={270} withGoButton placeholder={'Email'}/>
                </div>
            </div>
        </div>
    )
}

export default PeopleLeadership;
