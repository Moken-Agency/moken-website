import React from "react";
import Text from "../Text";
import "./index.scss";

const HeaderSecondType = ({
  title = "",
  subtitle = "",
  marginBottom,
  className = "",
  subtitleClassName = ''
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
        type={"kMedium"}
        // type={"semiBold"}
        className={`header-second-main-title`}
      >
        {title}
      </Text>
      <Text
          // size={'4.7vw'}
          size={75}
        mobSize={45}
        animationType={"fade-in"}
        type={"kBold"}
        // type={"thin"}
        className={`header-second-subtitle  ${subtitleClassName}`}
      >
        {subtitle}
      </Text>
    </div>
  );
};

export default HeaderSecondType;
