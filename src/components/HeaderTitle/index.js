import React from "react";
import Text from "../Text";
import "./index.scss";

const HeaderTitle = ({
  title = "",
  subtitle = "",
  description = "",
  marginBottom = 225,
    containerStyles = {},
    titleClassName = '',
    subtitleClassName = '',
    descriptionClassName = ''
}) => {
  return (
    <div className={"header-title-container"} style={{ ...containerStyles,marginBottom }}>
      <Text
        // size={'1vw'}
        size={16}
        mobSize={14}
        animationType={"fade-in"}
        // type={"kRegular"}
        type={"kMedium"}
        className={`header-title-main-title ${titleClassName}`}
      >
        {title}
      </Text>
      <Text
        // size={'4.7vw'}
        size={75}
        animationType={"fade-in"}
        mobSize={45}
        type={"kBold"}
        className={`header-title-subtitle ${subtitleClassName}`}
      >
        {subtitle}
      </Text>
      {description ? (
        <Text
          // size={"1.1vw"}
          size={20}
          mobSize={16}
          animationType={"fade-in"}
          className={`header-title-description ${descriptionClassName}`}
          type={"kLight"}
          textStyles={{fontWeight: 300}}
        >
          {description}
        </Text>
      ) : null}
    </div>
  );
};

export default HeaderTitle;
