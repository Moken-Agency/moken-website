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
    link = '/',
                     isLast = false
}) => {
  const { isMobile } = useWindowDimensions();
  let history = useHistory();

  return (
    <div className={`company-container ${isLast ? 'last-item' : '' }`} onClick={() => window.open(link, '_blank')}>
      <div>
        <Text
          size={16}
          animationType={"fade-in"}
          type={"kMedium"}
          className={"company-name"}
          mobSize={12}
        >
          {companyName}
        </Text>
        <Text
          animationType={"fade-in"}
          type={"kSemiBold"}
          className={"project-name"}
          size={30}
          mobSize={22}
        >
          {projectName}
        </Text>
      </div>

      <Text
        size={18}
        animationType={"fade-in"}
        className={"company-description"}
        type={"kLight"}
        textStyles={{lineHeight: '29px' }}
      >
        {description}
      </Text>

      <div className={"company-owner-container"}>
        <div>
          <Text
            size={14}
            animationType={"fade-in"}
            className={"company-city"}
            type={"kMedium"}
            textStyles={{letterSpacing: 4}}
            mobSize={12}
          >
            {city}
          </Text>
          <Text
            size={16}
            animationType={"fade-in"}
            className={"company-owner"}
            type={"kLight"}
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
