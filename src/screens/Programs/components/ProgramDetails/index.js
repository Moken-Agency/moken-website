import React from "react";
import options from "../../MokenLabs/options";
import Text from "../../../../components/Text";
import './index.scss';

const defaultOptions =    [
    {
        title: 'TYPE',
        subtitle: 'Mentorship'
    },{
        title: 'LOCATION',
        subtitle: `Vancouver 
& Toronto`
    },{
        title: 'LENGTH',
        subtitle: '12 Weeks'
    },{
        title: 'STATUS',
        subtitle: `Applications Open 
January 2021`
    },
];

const ProgramDetails = ({options = defaultOptions, type, subtitle}) => {
    return (
        <section className={`labs-details-container`} data-aos="fade-in">
            <div className={`labs-details-block ${`block-${type}`}`}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Text className={`labs-details-title ${`title-${type}`}`} color={'white'}
                          size={type === 'mokenlabs' ? 50 : 31} type={'thin'}
                          textStyles={{lineHeight: type === 'mokenlabs' ? '60px' : 'auto'}}
                    >Program Details</Text>
                    {subtitle ? <Text color={'white'}
                                      containerStyles={{alignItems: 'flex-start'}}
                                      size={16}
                                      textStyles={{letterSpacing: 4}}
                    >{subtitle}</Text> : null}
                </div>

                <div className={`labs-details-list-block ${`list-${type}`}`}>
                    {options.map(({title, subtitle}) => {
                        return (
                            <div>
                                <Text
                                    type={'semiBold'}
                                    color={'white'}
                                    size={14}
                                    mobSize={10}
                                    containerStyles={{marginBottom: 11}}>{title.toUpperCase()}</Text>
                                <Text
                                    type={'light'}
                                    textStyles={{whiteSpace: 'pre'}}
                                    color={'white'}
                                    size={16}>{subtitle}</Text>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProgramDetails
