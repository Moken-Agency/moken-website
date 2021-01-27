import React from "react";
import Text from "../../../components/Text";
import "./index.scss";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Value = ({ title = "", subtitle = "" }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"value-container"}>
      <Text
        type={"semiBold"}
        size={14}
        mobSize={10}
        animationType={"fade-in"}
        containerStyles={{ marginBottom: 16 }}
        textStyles={{ letterSpacing: 4 }}
      >
        {title}
      </Text>
      <Text
        type={"light"}
        size={20}
        animationType={"fade-in"}
        textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
        mobSize={16}
      >
        {subtitle}
      </Text>
    </div>
  );
};

export default Value;