import React from "react";
import Text from "../../../../components/Text";
import "./index.scss";

const Benefit = ({ title = "", subtitle = "", description = "", img = '' }) => {
    return (
    <div className={"benefit-title-first-container"}>
      <img src={img} className={'benefit-shape-image'}/>
      <Text
        size={14}
        mobSize={12}
        type={"kRegular"}
        // type={"semiBold"}
        animationType={"fade-in"}
        className={"benefit-title-first"}
      >
        {title}
      </Text>
      <Text
        size={30}
        mobSize={30}
        animationType={"fade-in"}
        type={"kLight"}
        // type={"thin"}
        className={"benefit-title-second"}
      >
        {subtitle}
      </Text>
      <Text
        size={20}
        mobSize={16}
        animationType={"fade-in"}
        type={"kLight"}
        textStyles={{fontWeight: 300}}
        // type={"light"}
        className={"benefit-title-third"}
      >
        {description}
      </Text>
    </div>
  );
};

export default Benefit;
