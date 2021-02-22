import React from "react";
import Text from "../../../../components/Text";
import "./index.scss";
import ArrowUpRight from "../../../../images/arrow-up-right-black.svg";
import { useHistory } from "react-router-dom";
import Button from "../../../../components/Button";

const ExpertiseItem = ({ title = "", route = "/" }) => {
  let history = useHistory();

  const goToRoute = () => {
    history.push(route);
  };

  return (
    <div className={"expertise-item-container"}>
      <Text
        // size={'4.7vw'}
        size={55}
        animationType={"fade-in"}
        mobSize={35}
        type={"kLight"}
        className={"expertise-item-title"}
      >
        {title}
      </Text>
      <div className={"expertise-item-right"} onClick={goToRoute}>
        <Text
            size={16}
          type={"kSemiBold"}
          mobSize={12}
          className={"expertise-item-learn"}
        >
          LEARN MORE
        </Text>
        <img
          data-aos="fade-in"
          className={"expertise-item-img"}
          src={ArrowUpRight}
        />
      </div>
    </div>
  );
};

export default ExpertiseItem;
