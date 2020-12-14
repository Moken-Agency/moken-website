import React from "react";
import Text from '../../../components/Text';
import './index.scss';
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Belief = ({title = '', subtitle = '', images = []}) => {
    const {isMobile} = useWindowDimensions();
    return (
        <div className={'belief-container'}>
            <div>
                {
                    images.map((uri) =>  <img src={uri}/>)
                }
            </div>
            <Text className={'belief-title'} size={22} type={'semiBold'}>{title}</Text>
            <Text size={20}
                  textStyles={{lineHeight: isMobile ? '26px': '35px'}}
                  mobSize={16}
                  type={'light'}>{subtitle}</Text>
        </div>
    )
}

export default Belief
