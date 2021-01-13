import React from "react";
import Text from "../../../Text";
import "./index.scss";

const FirstMapItem = ({ title = "" }) => {
  return (
    <div className={"first-map-item-container"}>
      <Text
        type={"semiBold"}
        animationType={"fade-in"}
        size={"1.3vw"}
        mobSize={22}
      >
        {title}
      </Text>
    </div>
  );
};

export default FirstMapItem;
