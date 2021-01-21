import React from "react";
import Text from "../../../../components/Text";
import "./index.scss";

const Benefit = ({ title = "", subtitle = "", description = "", img = '' }) => {
  return (
    <div className={"benefit-title-first-container"}>
      <img src={img} className={'benefit-shape-image'}/>
      <Text
        size={".8vw"}
        mobSize={12}
        type={"semiBold"}
        animationType={"fade-in"}
        className={"benefit-title-first"}
      >
        {title}
      </Text>
      <Text
        size={"1.85vw"}
        mobSize={30}
        animationType={"fade-in"}
        type={"thin"}
        className={"benefit-title-second"}
      >
        {subtitle}
      </Text>
      <Text
        size={"1.2vw"}
        mobSize={16}
        animationType={"fade-in"}
        type={"light"}
        className={"benefit-title-third"}
      >
        {description}
      </Text>
    </div>
  );
};

export default Benefit;
