import React from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import "./index.scss";
import { useHistory } from "react-router-dom";
import Text from "../../../../components/Text";
import arrow from "../../../../images/arrow-up-right-black.svg";

const Company = ({
  companyName = "",
  projectName = "",
  description = "",
  city = "",
  owner = "",
}) => {
  const { isMobile } = useWindowDimensions();
  let history = useHistory();

  return (
    <div className={"company-container"}>
      <div>
        <Text
          size={isMobile ? "2.2vw" : "1vw"}
          animationType={"fade-in"}
          type={"semiBold"}
          className={"company-name"}
          mobSize={12}
        >
          {companyName}
        </Text>
        <Text
          size={isMobile ? "4.4vw" : "2vw"}
          animationType={"fade-in"}
          type={"thin"}
          className={"project-name"}
          mobSize={30}
        >
          {projectName}
        </Text>
      </div>

      <Text
        size={isMobile ? "2.2vw" : "1vw"}
        animationType={"fade-in"}
        className={"company-description"}
        type={"light"}
        textStyles={{lineHeight: isMobile ? "2.2vw" : "1.8vw" }}
      >
        {description}
      </Text>

      <div className={"company-owner-container"}>
        <div>
          <Text
            size={isMobile ? "2vw" : "1vw"}
            animationType={"fade-in"}
            className={"company-city"}
            type={"semiBold"}
            textStyles={{letterSpacing: 4}}
            mobSize={12}
          >
            {city}
          </Text>
          <Text
            size={isMobile ? "2.2vw" : "1.05vw"}
            animationType={"fade-in"}
            className={"company-owner"}
            type={"light"}
            mobSize={16}
          >
            {owner}
          </Text>
        </div>
        <div className={"company-arrow-container"}>
          <img src={arrow} className={"company-arrow"} />
        </div>
      </div>
    </div>
  );
};

export default Company;
