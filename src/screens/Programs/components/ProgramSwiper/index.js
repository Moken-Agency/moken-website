import Title from "../../../../components/Title";
import Swiper from "../../../../components/Swiper";
import options from "../../MokenLabs/options";
import Explore from "../../../../components/Explore";
import React from "react";
import './index.scss';

const ProgramSwiper = ({options}) => {
    return (
        <>
            <Title title={'WEEK BY WEEK'} className={'labs-week-title'} />

            <Swiper className={'labs-swiper-container'}>
                {
                    options.map((option, index) => {
                        return (
                            <Explore {...option} key={'explore ' + index}/>
                        )
                    })
                }
            </Swiper>
        </>
    )
}
export default ProgramSwiper
