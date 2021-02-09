import React from "react";
import Text from "../Text";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const SubmitYourResume = ({
  onClick = () => {},
  className = "",
  color = "white",
  title = "Submit you resume",
  size = "20px",
  // size = "1.5vw",
  mobSize = 16,
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <Text
      size={size}
      mobSize={mobSize}
      type={"semiBold"}
      color={color}
      animationType={"fade-up"}
      className={`text-submit ${className}`}
      onClick={onClick}
    >
      {title}
    </Text>
  );
};

export default SubmitYourResume;
