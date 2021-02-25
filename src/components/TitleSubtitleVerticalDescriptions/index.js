import React from "react";
import Title from "../Title";
import Text from "../Text";
import "./index.scss";
import Button from "../Button";

const TitleSubtitleVerticalDescriptions = ({
  title = "",
  subtitle = "",
  descriptions = [],
   containerStyles = {},
   subtitleClassName = '',
   descriptionClassName = ''

}) => {
  return (
    <div className={"title-sub-description-vertical-container"} style={containerStyles}>
      <Title title={title} className={"title-sub-description-vertical-title"} />
      <Text
        className={`${subtitleClassName} title-sub-description-vertical-subtitle`}
        animationType={"fade-in"}
        type={"kBold"}
        size={50}
        mobSize={35}
      >
        {subtitle}
      </Text>
        {descriptions.map(description => (
                <Text
                    className={`${descriptionClassName} title-sub-description-vertical-description`}
                    animationType={"fade-in"}
                    type={"kLight"}
                    size={20}
                    mobSize={16}
                >
                    {description}
                </Text>
                )
            )
        }
    </div>
  );
};

export default TitleSubtitleVerticalDescriptions;
