import Title from "../../../../components/Title";
import Swiper from "../../../../components/Swiper";
import options from "../../MokenLabs/options";
import Explore from "../../../../components/Explore";
import React from "react";
import './index.scss';
import Text from "../../../../components/Text";

const ProgramSwiper = ({options = [], title = 'WEEK BY WEEK', subtitle = ''}) => {
    return (
        <div className={'program-swiper-main-container'}>
            <Title title={title} className={'program-swiper-title'} />
            {subtitle ? <Text size={55}
                              mobSize={35}
                              type={'extraLight'}
                              className={'program-swiper-subtitle'}>{subtitle}</Text> : null}

            <Swiper className={'program-swiper-container'}>
                {
                    options.map((option, index) => {
                        return (
                            <Explore {...option} key={'explore ' + index}/>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
export default ProgramSwiper
