import React from "react";
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
    >
      <div className={"opportunity-title-container"}>
        <Text
            size={16}
          animationType={"fade-in"}
          type={"kRegular"}
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
            backgroundColor={"transparent"}
            // onClick={() => history.push(route)}
            textColor={"black"}
            size={14}
            title={btnTitle}
            animationType={"fade-in"}
            mobSize={10}
            type={'kSemiBold'}
            className={"explore-btn"}
            animationHoverType={'lowerMenu'}
            // additionalComponent={() => {
            //   return (
            //       <img
            //           className={"opportunity-arrow"}
            //           data-aos="fade-in"
            //           src={ArrowUpRight}
            //       />
            //   )
            // }}
            onClick={() => action ? action() : history.push(route)} />


      </div>
    </div>
  );
};

export default Opportunity;
