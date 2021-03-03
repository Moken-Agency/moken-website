import React from "react";
import Text from "../Text";
import "./index.scss";

const TitleCenterImagesList = ({ title = "", list = [] }) => {
  return (
    <div className={"title-center-images-list-main-container"}>
      {title ? (
        <Text
          className={"title-center-images-list-main-title"}
          animationType={"fade-up"}
          type={"kMedium"}
          size={14}
        >
          {title}
        </Text>
      ) : null}
      <div className={"title-center-images-list-wrapper"} data-aos="fade-up">
        {list.map(({imgURL, ...rest}, index) => (
          <img
            className={"title-center-images-list-item"}
            src={imgURL}
            style={{...rest}}
            key={"TitleCenterImagesList" + index}
          />
        ))}
      </div>
    </div>
  );
};

export default TitleCenterImagesList;
