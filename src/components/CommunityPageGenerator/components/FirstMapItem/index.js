import React from "react";
import Text from "../../../Text";
import "./index.scss";

const FirstMapItem = ({ title = "" }) => {
  return (
    <div className={"first-map-item-container"}>
      <Text
        type={"kBold"}
        animationType={"fade-in"}
        size={22}
        mobSize={22}
      >
        {title}
      </Text>
    </div>
  );
};

export default FirstMapItem;
