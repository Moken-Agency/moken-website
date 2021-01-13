import React from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import "./index.scss";
import { useHistory } from "react-router-dom";
import Text from "../../../../components/Text";

const Startups = ({ title = "", subTitle = "" }) => {
  const { isMobile } = useWindowDimensions();
  let history = useHistory();

  return (
    <div className={"startups-container"}>
      <Text
        size={60}
        animationType={"fade-in"}
        mobSize={40}
        type={"semiBold"}
        className={"startups-title-first"}
      >
        {title}
      </Text>
      <Text
        mobSize={12}
        animationType={"fade-in"}
        size={14}
        textStyles={{ letterSpacing: 4 }}
        type={"semiBold"}
        className={"startups-title-second"}
      >
        {subTitle}
      </Text>
    </div>
  );
};

export default Startups;
