import React, {useState} from "react";
import Text from "../Text";
import "./index.scss";
import { useHistory } from "react-router-dom";
import ArrowUpRight from "../../images/arrow-up-right-black.svg";
import Button from "../Button";

const Opportunity = ({
  title = "",
  subtitle = "",
  route = "",
  width = "34vw",
  stylesContainer = {},
  isFirst = false,
  btnTitle= ' VIEW JOB',
  action
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
      onClick={() => action ? action() : history.push(route)}
    >
      <div className={"opportunity-title-container"}>
        <Text
          size={16}
          animationType={"fade-in"}
          type={"kMedium"}
          mobSize={14}
          className={"opportunity-title-first"}
        >
          {title}
        </Text>
        <Text
          size={30}
          // size={"1.7vw"}
          animationType={"fade-in"}
          type={"kLight"}
          className={"opportunity-title-second"}
        >
          {subtitle}
        </Text>
      </div>
      <div className={'opportunity-view-btn-container'}>
        <Button
            size={14}
            title={btnTitle}
            animationType={"fade-in"}
            mobSize={10}
            type={'lowerMenu'}
            textType={'kMedium'}
            className={"explore-btn"}
            animationHoverType={'lowerMenu'}
             />
      </div>
    </div>
  );
};

export default Opportunity;
