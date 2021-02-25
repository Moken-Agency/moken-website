import React from "react";
import "./index.scss";
import Text from "../../../components/Text";

const Person = ({ name = "", positions = [] }) => {
  return (
    <div className={"person-container"} style={{}}>
      {/*<img src={photo} data-aos="fade-in" />*/}
      <Text
        animationType={"fade-in"}
        size={22}
        type={"kSemiBold"}
        containerStyles={{ marginBottom: 25 }}
      >
        {name}
      </Text>
      {positions.map((position, index) => {
        return (
          <Text
            key={"position" + index}
            textStyles={{ letterSpacing: 4, textAlign: "center" }}
            animationType={"fade-in"}
            size={14}
            mobSize={10}
            type={"kSemiBold"}
          >
            {position}
          </Text>
        );
      })}
    </div>
  );
};

export default Person;
