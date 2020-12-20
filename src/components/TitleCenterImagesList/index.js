import React from "react";
import Text from "../Text";
import './index.scss';

const TitleCenterImagesList = ({title = '', list = []}) => {
    return (
        <div className={'title-center-images-list-main-container'}>
            {title ? <Text className={'title-center-images-list-main-title'}
                           animationType={'fade-up'}
                           type={'semiBold'}
                           size={14}>{title}</Text> : null}
            <div className={'title-center-images-list-wrapper'} data-aos="fade-up">
                {
                    list.map((url, index) => <img className={'title-center-images-list-item'}
                                                  src={url}
                                                  key={'TitleCenterImagesList' + index}/>)
                }
            </div>
        </div>
    )
}

export default TitleCenterImagesList;
