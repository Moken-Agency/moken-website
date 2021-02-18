import React from "react";
import Title from "../Title";
import Text from "../Text";
import "./index.scss";

const TitleText = ({ title = "", subtitle = "", className = "" }) => {
  return (
    <div className={`title-text-container ${className}`}>
      <Title title={title} animationType={"fade-in"} className={"title-text"} />
      <Text
        size={55}
        animationType={"fade-in"}
        className={"title-text-subtitle"}
        mobSize={35}
        type={"kBold"}
      >
        {subtitle}
      </Text>
    </div>
  );
};

export default TitleText;
