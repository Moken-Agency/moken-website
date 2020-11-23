import React from "react";
import './index.scss';
import Person from "../Person";
import Title from "../../../components/Title";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const People = ({people, peopleIndex, title}) => {
    const {isMobile} = useWindowDimensions()

    return (
        <div>
            {isMobile ? <Title title={title} containerStyles={{marginBottom: '10vw'}}/> : null}
            <div className={'people-container'}
                 style={{display: 'flex', justifyContent: peopleIndex % 2 !== 0 ? 'flex-start' : 'flex-end'}}
            >
                <div className={'people-second-container'}>
                    {
                        people.map((person, index) => <Person {...person} key={'person' + index}/>)
                    }
                </div>

            </div>
        </div>
    )
}

export default People;
