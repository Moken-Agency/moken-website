import Title from "../../../../components/Title";
import Swiper from "../../../../components/Swiper";
import options from "../../MokenLabs/options";
import Explore from "../../../../components/Explore";
import React from "react";
import "./index.scss";
import Text from "../../../../components/Text";

const ProgramSwiper = ({
  options = [],
  title = "WEEK BY WEEK",
  subtitle = "",
}) => {
  return (
    <div className={"program-swiper-main-container"}>
      <Title title={title} className={"program-swiper-title"} />
      {subtitle ? (
        <Text
          size={50}
          mobSize={35}
          animationType={"fade-in"}
          type={"kBold"}
          className={"program-swiper-subtitle"}
        >
          {subtitle}
        </Text>
      ) : null}

      <Swiper  Component={Explore} swiperData={options} />
    </div>
  );
};
export default ProgramSwiper;
