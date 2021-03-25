import React from "react";
import Text from "../../../components/Text";
import "./index.scss";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Value = ({ title = "", subtitle = "" }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"value-container"}>
      <Text
        type={"kSemiBold"}
        // type={"semiBold"}
        size={14}
        mobSize={10}
        animationType={"fade-in"}
        containerStyles={{ marginBottom: 8 }}
        textStyles={{ letterSpacing: 4 }}
      >
        {title}
      </Text>
      <Text
        type={"kLight"}
        // type={"light"}
        size={20}
        animationType={"fade-in"}
        textStyles={{ lineHeight: isMobile ? "26px" : "30px", fontWeight: 300 }}
        mobSize={16}
      >
        {subtitle}
      </Text>
    </div>
  );
};

export default Value;
