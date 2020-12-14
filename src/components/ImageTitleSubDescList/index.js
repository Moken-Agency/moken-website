import React from "react";
import Text from "../Text";
import './index.scss'
import Title from "../Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ImageTitleSubDescList = ({title = '', subtitle = '', description = '', list = [], imgURL =''}) => {
    const {isMobile} = useWindowDimensions()
    return (
        <div className={'image-title-sub-desc-list-container'}>
            <img className={'image-title-sub-desc-list-image'} src={imgURL}/>
            <div>
                <Title className={'image-title-sub-desc-list-title'} title={title}/>
                <Text size={55}
                      className={'image-title-sub-desc-list-subtitle'}
                      mobSize={35} type={'extraLight'}>{subtitle}</Text>
                <Text size={20}
                      mobSize={16}
                      textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                      className={'image-title-sub-desc-list-description'}
                      type={'light'}>{description}</Text>
                {
                    list.map((listData, index) => {
                        return (
                            <div key={'ImageTitleSubDescList' + index} className={'image-title-sub-desc-list-item'}>
                                <Text size={14} type={'semiBold'} className={'image-title-sub-desc-list-item-title'}>{listData.title}</Text>
                                <Text size={20}
                                      textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                                      mobSize={16}
                                      type={'light'}>{listData.subtitle}</Text>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageTitleSubDescList
