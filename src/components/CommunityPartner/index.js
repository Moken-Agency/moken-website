import React from "react";
import Text from "../Text";
import Button from "../Button";
import "./index.scss";

const CommunityPartner = ({
  title,
  subtitle,
  btnTitle = "GET INVOLVED",
  titleStyles = {},
  containerStyles = {},
}) => {
  return (
    <div className={"community-partner-container"} style={containerStyles}>
      <div className={"community-partner-info-container"}>
        <Text
          size={"2vw"}
          type={"thin"}
          animationType={"fade-in"}
          mobSize={25}
          containerStyles={{ marginBottom: 74 }}
          textStyles={{ whiteSpace: "break-spaces", ...titleStyles }}
        >
          {title}
        </Text>
        <Text
          className={"community-partner-subtitle"}
          size={18}
          animationType={"fade-in"}
          mobSize={16}
          textStyles={{ lineHeight: "28px" }}
          type={"light"}
        >
          {subtitle}
        </Text>
      </div>

      <div className={"community-partner-btn-container"}>
        <Button
          title={btnTitle}
          size={".8vw"}
          mobSize={10}
          className={"community-partner-btn"}
        />
      </div>
    </div>
  );
};

export default CommunityPartner;
