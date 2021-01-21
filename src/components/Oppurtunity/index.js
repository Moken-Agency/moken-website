import React from "react";
import Text from "../Text";
import "./index.scss";
import { useHistory } from "react-router-dom";
import ArrowUpRight from "../../images/arrow-up-right-black.svg";

const Opportunity = ({
  title = "",
  subtitle = "",
  route = "",
  width = "34vw",
  stylesContainer = {},
  isFirst = false,
}) => {
  const history = useHistory();

  return (
    <div
      className={"opportunity-container"}
      style={{
        width,
        ...stylesContainer,
        borderTop: isFirst ? "1px solid #efefef" : 0,
      }}
    >
      <div className={"opportunity-title-container"}>
        <Text
          size={".9vw"}
          animationType={"fade-in"}
          type={"semiBold"}
          className={"opportunity-title-first"}
        >
          {title}
        </Text>
        <Text
          size={"1.7vw"}
          animationType={"fade-in"}
          type={"thin"}
          className={"opportunity-title-second"}
        >
          {subtitle}
        </Text>
      </div>
      <button className={"view-job"} onClick={() => history.push(route)}>
        <Text
          size={".8vw"}
          animationType={"fade-in"}
          textStyles={{ letterSpacing: 4, cursor: "pointer" }}
          type={"semiBold"}
        >
          VIEW JOB
        </Text>
        <img
          className={"opportunity-arrow"}
          data-aos="fade-in"
          src={ArrowUpRight}
        />
      </button>
    </div>
  );
};

export default Opportunity;
