import Modal from 'react-modal';
import React, {useEffect} from "react";
import './index.scss';
import Text from "../../../../components/Text";
import Social from "../Social";
import Button from "../../../../components/Button";

const AdvisorModal = ({isOpen = false, close,advisorInfo}) => {
    useEffect(() => {
        Modal.setAppElement('body');
        console.log({close});

    }, [isOpen]);

    const {socialLinks, title, name, bio, expertiseArea, rates} = advisorInfo;



    return (
        <Modal isOpen={isOpen} className={'advertise-modal'}    overlayClassName="advertise-overlay" >
            <div className={'advisor-modal-container'}>
                <div className={'advisor-close-btn-container'}>
                    <div onClick={close} style={{cursor: 'pointer'}}>
                        <Text type={'kSemiBold'} size={16} textStyles={{letterSpacing: 4}}>CLOSE</Text>
                    </div>
                </div>
                <div className={'advisor-modal-info-container'}>
                    <div>
                        <img src={advisorInfo.avatar} />
                        <Text type={'kSemiBold'} size={16} textStyles={{letterSpacing: 4}}>SOCIAL LINKS</Text>
                        <div className={'advisor-modal-info-socials-list'}>
                            {
                                socialLinks.map(({blackIcon, link}) => {
                                    return (
                                        <Social containerStyles={{width: 30, height: 30, marginRight: 20, marginLeft: 0}}
                                                icon={blackIcon} link={link}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={'advisor-second-container'}>
                        <Text type={'kSemiBold'}
                              size={16}
                              textStyles={{letterSpacing: 4}}
                              containerStyles={{marginBottom: 20}}
                        >// {title}</Text>
                        <Text type={'thin'}
                              size={50}
                              textStyles={{lineHeight: '55px'}}
                              containerStyles={{marginBottom: 37}}
                        >{name}</Text>
                        <div className={'advisor-bio-container'}>
                            <Text size={16}
                                  type={'kSemiBold'}
                                  textStyles={{letterSpacing: 4}}
                                  containerStyles={{marginBottom: 20}}
                            >BIO</Text>
                            <Text  size={20} type={'kLight'}
                                   textStyles={{lineHeight: '30px'}}>{bio}</Text>
                        </div>
                        <div>
                            <Text size={16}
                                  type={'kSemiBold'}
                                  textStyles={{letterSpacing: 4}}
                                  containerStyles={{marginBottom: 20}}
                            >EXPERTISE AREAS</Text>
                            <Text size={20} type={'kLight'}
                                  textStyles={{lineHeight: '30px'}}>{expertiseArea}</Text>
                        </div>
                    </div>

                    <div className={'rates-container'}>
                        <div>
                            <Text size={16}
                                  textStyles={{letterSpacing: 4}}
                                  type={'kSemiBold'}
                                  containerStyles={{marginBottom: 20}}
                            >RATES</Text>
                            <div className={'rates-list-container'}>
                                {
                                    rates.map(({title, value}) => {
                                        return (
                                            <Text size={20} type={'kLight'}
                                                  textStyles={{lineHeight: '30px'}}>{title} - {value}</Text>
                                        )
                                    })
                                }
                            </div>
                        </div>


                        <div>
                            <Button backgroundColor={'white'} textColor={'black'} borderType={'bordered'} title={'VIEW SCHEDULE'} className={'view-advisor-btn'}/>
                            <Button backgroundColor={'black'} textColor={'white'} title={'BOOK ADVISOR'}/>
                        </div>


                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default AdvisorModal
