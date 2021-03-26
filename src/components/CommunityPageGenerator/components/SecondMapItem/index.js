import React from "react";
import Text from "../../../Text";
import "./index.scss";
import ArrowUpRight from "../../../../images/arrow-up-right-black.svg";
import {useHistory} from "react-router-dom";

const SecondMapItem = ({ title = "", btnTitle = "" }) => {
    let history = useHistory();

    return (
    <div className={"second-map-item-container"}>
      <Text
        type={"kBold"}
        size={50}
        mobSize={35}
        animationType={"fade-in"}
        className={"second-map-item-title"}
      >
        {title}
      </Text>
      <div className={"second-map-item-btn-container"} onClick={() => history.push('/expertise')}>
        <Text
          type={"kSemiBold"}
          animationType={"fade-in"}
          size={14}
          mobSize={12}
          className={"second-map-item-btn"}
        >
          {btnTitle}
        </Text>
        <img src={ArrowUpRight} data-aos="fade-in" />
      </div>
    </div>
  );
};

export default SecondMapItem;
