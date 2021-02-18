import React from "react";
import "./styles.scss";
import textTypes from "../../constans/text-types";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Text = ({
  children = "",
  textStyles = {},
  containerStyles = {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onClick = () => {},
  type = "kMedium",
  size = 12,
  mobSize = size,
  className = "",
  color = "black",
  mobColor = color,
  animationType = "",
}) => {
  const handleOnMouseEnter = () => {
    onMouseEnter();
  };
  const handleOnMouseLeave = () => {
    onMouseLeave();
  };
  const { isMobile } = useWindowDimensions();

  return (
    <div
      className={`text-container ${className}`}
      style={containerStyles}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
      onClick={onClick}
    >
      <span
        data-aos={animationType}
        style={{
          fontFamily: `${textTypes[type]}, sans-serif`,
          fontSize: isMobile ? mobSize : size,
          color: isMobile ? mobColor : color,
          ...textStyles,
        }}
        className={"text"}
      >
        {children}
      </span>
    </div>
  );
};

export default Text;
