import React from "react";
import Title from "../Title";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";

const TitleRowSubDes = ({
  title = "",
  subtitle = "",
  description = "",
  onClick,
                            btnTitle = 'APPLY TO INCUBATOR',
                          descriptions = []
}) => {
  return (
    <div className={"title-row-sub-desc-container"}>
      <Title title={title} className={"title-row-sub-desc-title"} />
      <div className={"title-row-sub-desc-row-container"}>
        <Text
          className={"title-row-sub-desc-subtitle"}
          type={"kBold"}
          // type={"extraLight"}
          size={55}
          animationType={"fade-in"}
          mobSize={35}
        >
          {subtitle}
        </Text>
        <div className={"title-row-sub-description-container"}>
          {
            descriptions.length ? descriptions.map((el, index) => {
              return (
                  <Text
                      className={"title-row-sub-desc-description"}
                      size={20}
                      type={"kLight"}
                      // type={"light"}
                      textStyles={{fontWeight: 300}}
                      animationType={"fade-in"}
                      mobSize={16}
                      containerStyles={{marginBottom: description.length - 1 === index ? 0 : 20}}
                  >
                    {el}
                  </Text>
              )
            }) :
              <Text
                className={"title-row-sub-desc-description"}
                size={20}
                type={"kLight"}
                // type={"light"}
                animationType={"fade-in"}
                textStyles={{fontWeight: 300}}
                mobSize={16}
            >
              {description}
            </Text>
          }

          {onClick ? (
            <Button
              className={"title-row-sub-desc-btn"}
              title={btnTitle}
              onClick={onClick}
              size={14}
              borderType={"bordered"}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TitleRowSubDes;
