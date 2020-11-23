import React from "react";
import './index.scss';
import Text from "../../../components/Text";

const Person = ({name = '', positions = [], photo, peopleIndex}) => {
    return (
        <div className={'person-container'}>
                <img src={photo} />
                <Text size={22} type={'semiBold'} containerStyles={{marginBottom: 25}}>{name}</Text>
                {positions.map((position, index) => {
                    return <Text key={'position' + index} textStyles={{letterSpacing: 4, textAlign: 'center'}} size={14} type={'semiBold'}>{position}</Text>
                })}
        </div>
    )
}

export default Person;
