import Text from "../../../../components/Text";
import React from "react";
import "./index.scss";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const AboutProgram = ({ containerStyles = {}, title = "", text = "" }) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className={"about-program-container"} style={containerStyles}>
      <Text
        className={"about-program-title"}
        size={75}
        animationType={"fade-in"}
        mobSize={40}
        type={"kSemiBold"}
      >
        {title}
      </Text>
      <div className={"about-program-divider"} />
      <Text
        type={"kLight"}
        animationType={"fade-in"}
        size={20}
        textStyles={{ lineHeight: isMobile ? "auto" : "30px" }}
        className={"about-program-text"}
        mobSize={11}
      >
        {text}
      </Text>
    </div>
  );
};

export default AboutProgram;
