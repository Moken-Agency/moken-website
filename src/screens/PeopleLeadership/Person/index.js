import React from "react";
import "./index.scss";
import Text from "../../../components/Text";

const Person = ({ name = "", positions = [], photo = '', keyValue = '' }) => {
  return (
    <div className={"person-container"} style={{}} key={keyValue}>
        {photo ? <img src={photo} data-aos="fade-in"/> : null}
      <Text
        animationType={"fade-in"}
        size={22}
        type={"kBold"}
        containerStyles={{ marginBottom: 19 }}
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
            type={"kMedium"}
          >
            {position}
          </Text>
        );
      })}
    </div>
  );
};

export default Person;
