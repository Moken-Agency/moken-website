import React from "react";
import Text from "../Text";
import Button from "../Button";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const CommunityPartner = ({
  title,
  subtitle,
  btnTitle = "GET INVOLVED",
  titleStyles = {},
  containerStyles = {},
}) => {
    const { isMobile } = useWindowDimensions();

    return (
    <div className={"community-partner-container"} style={containerStyles}>
      <div className={"community-partner-info-container"}>
        <Text
          // size={'2.45vw'}
          size={39}
          type={"thin"}
          animationType={"fade-in"}
          mobSize={25}
          containerStyles={{ marginBottom: 45 }}
          textStyles={{
            whiteSpace: "break-spaces",
            ...titleStyles,
            lineHeight: isMobile? '35px' : "45px",
            // lineHeight: "35px",
          }}
        >
          {title}
        </Text>
        <Text
          className={"community-partner-subtitle"}
          // size={'1.15vw'}
          size={18}
          animationType={"fade-in"}
          mobSize={16}
          textStyles={{ lineHeight: isMobile? '28px':  "35px" }}
          // textStyles={{ lineHeight: "28px" }}
          type={"light"}
        >
          {subtitle}
        </Text>
      </div>

      <div className={"community-partner-btn-container"}>
        <Button
          title={btnTitle}
          // size={".8vw"}
          size={14}
          mobSize={10}
          className={"community-partner-btn"}
        />
      </div>
    </div>
  );
};

export default CommunityPartner;
