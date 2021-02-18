import React from "react";
import Text from "../Text";
import "./index.scss";
import Title from "../Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ImageTitleSubDescList = ({
  title = "",
  subtitle = "",
  description = "",
  list = [],
  imgURL = "",
}) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className={"image-title-sub-desc-list-container"}>
      <img
        data-aos="fade-in"
        className={"image-title-sub-desc-list-image"}
        src={imgURL}
      />
      <div>
        <Text
          className={"image-title-sub-desc-list-title"}
          type={"semiBold"}
          size={16}
          mobSize={14}
        >
          {title}
        </Text>
        <Text
          size={55}
          className={"image-title-sub-desc-list-subtitle"}
          animationType={"fade-in"}
          mobSize={35}
          type={"kBold"}
        >
          {subtitle}
        </Text>
        <Text
          size={20}
          mobSize={16}
          textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
          animationType={"fade-in"}
          className={"image-title-sub-desc-list-description"}
          type={"light"}
        >
          {description}
        </Text>
        {list.map((listData, index) => {
          return (
            <div
              key={"ImageTitleSubDescList" + index}
              className={"image-title-sub-desc-list-item"}
            >
              <Text
                size={14}
                animationType={"fade-in"}
                type={"semiBold"}
                className={"image-title-sub-desc-list-item-title"}
              >
                {listData.title}
              </Text>
              <Text
                size={20}
                animationType={"fade-in"}
                textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
                mobSize={16}
                type={"light"}
              >
                {listData.subtitle}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageTitleSubDescList;
