import React from "react";
import Text from "../Text";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Subtitle = ({
  subtitle = "",
  className = "",
  // size = '3.4vw',
  size = 50,
  mobSize = size,
  color = "black",
  type = "kBold",
  // type = "extraLight",
  containerStyles = {},
    textStyles = {}
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      {subtitle ? (
        <div
          className={`subtitle-comp-container ${className}`}
          style={containerStyles}
        >
          {subtitle ? (
            <Text
              size={size}
              color={color}
              mobSize={mobSize}
              animationType={"fade-in"}
              type={type}
              textStyles={{lineHeight: isMobile ? null : '53px', ...textStyles}}
            >
              {subtitle}
            </Text>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Subtitle;
