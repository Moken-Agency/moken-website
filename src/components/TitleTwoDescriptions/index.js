import React from "react";
import Text from "../Text";
import "./index.scss";
import Title from "../Title";

const TitleTwoDescriptions = ({
  mainTitle = "",
  title = "",
  firstDescription = "",
  secondDescription = "",
}) => {
  return (
    <div className={"title-two-descriptions-main-container"}>
      <Title
        title={mainTitle}
        className={"title-two-descriptions-main-title"}
      />

      <div className={"title-two-descriptions-container"}>
        <Text
          animationType={"fade-up"}
          size={'3.4vw'}
          // size={55}
          mobSize={35}
          // textStyles={{lineHeight: '0px'}}
          type={"extraLight"}
        >
          {title}
        </Text>
        <div className={"community-capabilities-container"} data-aos="fade-up">
          <Text
            size={'1.2vw'}
            // size={20}
            animationType={"fade-in"}
            textStyles={{ lineHeight: '2.2vw' }}
            // textStyles={{ lineHeight: "35px" }}
            mobSize={16}
            type={"light"}
          >
            {firstDescription}
          </Text>
          <Text
            size={20}
            animationType={"fade-in"}
            textStyles={{ lineHeight: "35px" }}
            mobSize={16}
            type={"light"}
          >
            {secondDescription}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TitleTwoDescriptions;
