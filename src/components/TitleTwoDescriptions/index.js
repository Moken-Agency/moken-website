import React from "react";
import Text from "../Text";
import "./index.scss";
import Title from "../Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const TitleTwoDescriptions = ({
  mainTitle = "",
  title = "",
  firstDescription = "",
  secondDescription = "",
                                marginBottom = null
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"title-two-descriptions-main-container"} style={{marginBottom}}>
      <Title
        title={mainTitle}
        className={"title-two-descriptions-main-title"}
      />

      <div className={"title-two-descriptions-container"}>
        <Text
          animationType={"fade-up"}
          // size={'3.4vw'}
          size={50}
          mobSize={35}
          // textStyles={{lineHeight: '0px'}}
          type={"kBold"}
          // type={"extraLight"}
            className={'title-two-descriptions-title'}
        >
          {title}
        </Text>
        <div className={"community-capabilities-container"} data-aos="fade-up">
          <Text
            // size={'1.25vw'}
            size={20}
            animationType={"fade-in"}
            // textStyles={{ lineHeight: isMobile ? "26px" : "2.2vw" }}
            textStyles={{ lineHeight: "30px", fontWeight: 300 }}
            mobSize={16}
            type={"kLight"}
            // type={"light"}
          >
            {firstDescription}
          </Text>
          <Text
            size={20}
            // size={'1.25vw'}
            animationType={"fade-in"}
            // textStyles={{ lineHeight: isMobile ? "26px" : "2.2vw" }}
              textStyles={{ lineHeight: "30px", fontWeight: 300  }}
            mobSize={16}
            type={"kLight"}
            // type={"light"}
          >
            {secondDescription}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TitleTwoDescriptions;
