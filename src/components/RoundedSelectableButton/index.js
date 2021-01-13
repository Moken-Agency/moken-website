import React from "react";
import Text from "../Text";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const RoundedSelectableButton = ({
  title = "",
  onClick = () => {},
  isSelected = false,
}) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div
      onClick={onClick}
      className={`rounded-selectable-button ${
        isSelected ? "rounded-selectable-button-selected" : ""
      }`}
    >
      <Text
        size={20}
        mobSize={16}
        animationType={"fade-in"}
        type={"light"}
        textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
        color={isSelected ? "white" : "black"}
      >
        {title}
      </Text>
    </div>
  );
};

export default RoundedSelectableButton;
