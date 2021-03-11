import React from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import "./index.scss";
import { useHistory } from "react-router-dom";
import Text from "../../../../components/Text";

const Startups = ({ title = "", subTitle = "", suffix = '' }) => {
  const { isMobile } = useWindowDimensions();
  let history = useHistory();

  return (
    <div className={"startups-container"}>
      <Text
        // size={'3.8vw'}
        size={60}
        animationType={"fade-in"}
        mobSize={40}
        withCountAnimation
        countAnimationProps={{suffix}}
        type={"kBold"}
        // type={"semiBold"}
        className={"startups-title-first"}
      >
        {title}
      </Text>
      <Text
        mobSize={12}
        animationType={"fade-in"}
        // size={'.9vw'}
        size={14}
        textStyles={{ letterSpacing: 4 }}
        type={"kMedium"}
        // type={"semiBold"}
        className={"startups-title-second"}
      >
        {subTitle}
      </Text>
    </div>
  );
};

export default Startups;
