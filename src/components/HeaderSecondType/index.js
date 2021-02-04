import React from "react";
import Text from "../Text";
import "./index.scss";

const HeaderSecondType = ({
  title = "",
  subtitle = "",
  marginBottom,
  className = "",
}) => {
  return (
    <div
      className={`header-second-title-container ${className}`}
      style={{ marginBottom }}
    >
      <Text
        // size={'1vw'}
        size={16}
        mobSize={14}
        animationType={"fade-in"}
        type={"semiBold"}
        className={"header-second-main-title"}
      >
        {title}
      </Text>
      <Text
          // size={'4.7vw'}
          size={75}
        mobSize={45}
        animationType={"fade-in"}
        type={"thin"}
        className={"header-second-subtitle"}
      >
        {subtitle}
      </Text>
    </div>
  );
};

export default HeaderSecondType;
