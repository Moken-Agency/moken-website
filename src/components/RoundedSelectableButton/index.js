import React from "react";
import Text from "../Text";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const RoundedSelectableButton = ({
  title = "",
  onClick = () => {},
  isSelected = false,
  classNameHoverColor = ''
}) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div
      onClick={onClick}
      className={`rounded-selectable-button ${classNameHoverColor} ${
        isSelected ? "rounded-selectable-button-selected" : ""
      }`}
    >
      <Text
        size={20}
        mobSize={16}
        animationType={"fade-in"}
        type={"kLight"}
        textStyles={{ lineHeight: isMobile ? "26px" : "30px" }}
        color={isSelected ? "white" : "black"}
      >
        {title}
      </Text>
    </div>
  );
};

export default RoundedSelectableButton;
