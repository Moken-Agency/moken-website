import React from "react";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import './index.scss';

const Course = ({url, title = '', description = '', btnTitle = ''}) => {
    return (
        <div className={'course-container'}>
            <img src={url} />
            <section className={'course-component-info-block'}>
                <Text size={35} className={'course-component-first'} mobSize={20} type={'thin'}>{title}</Text>
                <Text size={18} mobSize={14} className={'course-component-second'} type={'light'}>{description}</Text>
                <Button title={btnTitle} color={'black'} mobSize={10} type={'semiBold'} size={14}/>
            </section>
        </div>
    )
}

export default Course
