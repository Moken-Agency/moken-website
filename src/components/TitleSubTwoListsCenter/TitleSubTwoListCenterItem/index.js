import React from "react";
import Text from "../../Text";
import "./index.scss";

const TitleSubTwoListCenterItem = ({ title, list }) => {
  console.log({ title });
  return (
    <div className={"title-sub-two-list-center-item-container"}>
      <Text
        className={"title-sub-two-list-center-item-title"}
        type={"kSemiBold"}
        size={14}
        animationType={"fade-in"}
        mobSize={10}
      >
        {title}
      </Text>
      <div className={"title-sub-two-list-center-item-main-list"}>
        {list.map((els) => {
          return (
            <div className={"title-sub-two-list-center-item-sub-list"}>
              {els.map((text) => {
                return (
                  <Text
                    className={"title-sub-two-list-center-item-sub-text"}
                    type={"kLight"}
                    size={20}
                    mobSize={16}
                  >
                    {text}
                  </Text>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleSubTwoListCenterItem;
