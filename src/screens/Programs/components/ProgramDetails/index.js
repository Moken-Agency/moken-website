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
        subtitle: 'Vancouver & Toronto'
    },{
        title: 'LENGTH',
        subtitle: '12 Weeks'
    },{
        title: 'STATUS',
        subtitle: 'Applications Open January 2021'
    },
];

const ProgramDetails = ({options = defaultOptions}) => {
    return (
        <section className={'labs-details-container'}>
            <div className={'labs-details-block'}>
                <Text className={'labs-details-title'} color={'white'} size={31} type={'thin'}>Program Details</Text>
                <div className={'labs-details-list-block'}>
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
