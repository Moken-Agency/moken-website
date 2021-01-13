import React from "react";
import Text from "../Text";
import Button from "../Button";
import "./index.scss";
import { useHistory } from "react-router-dom";

const Explore = ({ title, subtitle, description, route = "" }) => {
  const history = useHistory();

  return (
    <div className={"explore-container"}>
      <Text
        size={".8vw"}
        mobSize={10}
        animationType={"fade-in"}
        type={"semiBold"}
      >
        {title}
      </Text>
      <Text
        size={"1.7vw"}
        mobSize={22}
        animationType={"fade-in"}
        type={"thin"}
        className={"explore-subtitle"}
      >
        {subtitle}
      </Text>
      <div className={"explore-divider"} />
      <Text type={"light"} mobSize={10} animationType={"fade-in"} size={".8vw"}>
        {description}
      </Text>
      <Button
        title={"EXPLORE"}
        backgroundColor={"transparent"}
        onClick={() => history.push(route)}
        textColor={"black"}
        size={".6vw"}
        animationType={"fade-in"}
        mobSize={7.5}
        className={"explore-btn"}
      />
    </div>
  );
};
export default Explore;
