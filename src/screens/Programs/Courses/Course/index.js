import React from "react";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import './index.scss';

const Course = ({url, title = '', description = '', btnTitle = ''}) => {
    return (
        <div className={'course-container'}>
            <img src={url} data-aos="fade-in"/>
            <section className={'course-component-info-block'}>
                <Text
                    animationType={'fade-in'}
                    size={35} className={'course-component-first'} mobSize={20} type={'thin'}>{title}</Text>
                <Text animationType={'fade-in'}
                      size={18}
                      mobSize={14}
                      className={'course-component-second'}
                      type={'light'}>{description}</Text>
                <Button title={btnTitle}
                        backgroundColor={'black'}
                        textColor={'white'}
                        mobSize={10}
                        size={14}/>
            </section>
        </div>
    )
}

export default Course
