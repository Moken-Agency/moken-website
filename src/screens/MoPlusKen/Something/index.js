import Text from "../../../components/Text";
import React from "react";
import "./index.scss";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Something = ({ title, subtitle, description }) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className={"something-container"}>
      <Text
        type={"kSemiBold"}
        size={14}
        className={"something-title"}
        textStyles={{ letterSpacing: 4 }}
      >
        {title}
      </Text>
      <div className={"something-block"}>
        <Text
          type={"kSemiBold"}
          className={"something-block-subtitle"}
          size={22}
          mobSize={19}
        >
          {subtitle}
        </Text>
        <Text
          type={"kLight"}
          size={20}
          textStyles={{ lineHeight: isMobile ? "26px" : "30px" }}
          mobSize={16}
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

export default Something;
