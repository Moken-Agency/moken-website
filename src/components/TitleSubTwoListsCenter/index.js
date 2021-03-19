import Title from "../Title";
import React from "react";
import Text from "../Text";
import "./index.scss";
import TitleSubTwoListCenterItem from "./TitleSubTwoListCenterItem";
import TitleCenterImagesList from "../TitleCenterImagesList";

const TitleSubTwoListCenter = ({
  title = "",
  subtitle = "",
  lists = [],
  imageList = [],
  subtitleClassName=''
}) => {
  return (
    <div className={"title-sub-two-list-container"}>
      <Title title={title} className={"title-sub-two-list-title"} />
      <div className={"title-sub-two-list-content"}>
        <Text
          size={50}
          className={`title-sub-two-list-subtitle ${subtitleClassName}`}
          animationType={"fade-in"}
          mobSize={35}
          type={"kBold"}
        >
          {subtitle}
        </Text>
        <div className={"title-sub-two-list-main-container"}>
          <div>
            {lists.map((item) => {
              return <TitleSubTwoListCenterItem {...item} />;
            })}
          </div>
        </div>
      </div>

      {imageList.length ? <TitleCenterImagesList list={imageList} /> : null}
    </div>
  );
};

export default TitleSubTwoListCenter;
