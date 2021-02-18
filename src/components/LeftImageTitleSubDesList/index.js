import Text from "../Text";
import Value from "../../screens/OurVision/Value";
import React from "react";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import developingArea from '../../images/developing-area.png';

const LeftImageTitleSubDesList = ({
  imgUrl = '',
  title = "",
  subtitle = "",
  description = "",
  list = [],
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <section className={"left-image-title-sub-desc-container"}>
      <img
        src={imgUrl ? imgUrl: developingArea}
        data-aos="fade-in"
        className={"left-image-title-sub-desc-main-image"}
      />
      <div className={"left-image-title-sub-desc-right-container"}>
        <div className={"left-image-title-sub-desc-right-container"}>
          <Text
            size={16}
            mobSize={10}
            animationType={"fade-in"}
            type={"kMedium"}
            // type={"semiBold"}
            className={"left-image-title-sub-desc-right-title"}
          >
            {title}
          </Text>
          <Text
            size={55}
            mobSize={35}
            animationType={"fade-in"}
            type={"kBold"}
            // type={"extraLight"}
            className={"left-image-title-sub-desc-right-subtitle"}
          >
            {subtitle}
          </Text>
          <Text
            size={20}
            animationType={"fade-in"}
            mobSize={16}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px", fontWeight: 300 }}
            type={"kLight"}
            // type={"light"}
            className={"left-image-title-sub-desc-right-text"}
          >
            {description}
          </Text>
        </div>
        {list.map((value) => (
          <Value {...value} />
        ))}
      </div>
    </section>
  );
};

export default LeftImageTitleSubDesList;
