import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import React from "react";
import "./index.scss";
import Title from "../../../../components/Title";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const LeftInfoWithRightImage = ({
  mainTitle = "",
  title = "",
  description = "",
  btnTitle = "",
  imgUrl = "",
  isLeftImage = false,
  withoutRightPadding = false
}) => {
  const { isMobile } = useWindowDimensions();
  console.log({ isMobile });

  return (
    <section className={"left-info-with-right-image-container"} style={{paddingRight: withoutRightPadding ? 0 : null}}>
      {mainTitle && (
        <Title
          title={mainTitle}
          className={"left-info-with-right-image-title"}
        />
      )}
      <div
        className={"left-info-with-right-image-info-container"}
        style={{ flexDirection: isLeftImage ? "row-reverse" : "row", paddingLeft: withoutRightPadding ? '4vw' : null }}
      >
        <div
          className={"left-info-with-right-image-text-container"}
          style={{ marginRight: !isLeftImage && !isMobile ? '9vw' : 0 }}
        >
          <Text
            animationType={"fade-up"}
            // size={55}
            size={55}
            mobSize={35}
            type={"kBold"}
            containerStyles={{ marginBottom: '50px' }}
          >
            {title}
          </Text>
          <Text
            animationType={"fade-up"}
            // size={'1.25vw'}
            size={20}
            mobSize={16}
            type={"kMiddle"}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            containerStyles={{ marginBottom: '55px' }}
          >
            {description}
          </Text>
          {btnTitle && (
            <Button
              // size={'.9vw'}
              size={14}
              title={btnTitle}
              backgroundColor={"black"}
              textColor={"white"}
            />
          )}
        </div>
        <img
          src={imgUrl}
          data-aos="fade-in"
          className={"left-info-with-right-image-image"}
          style={{ marginRight: isLeftImage && !isMobile ? 50 : 0 }}
        />
      </div>
    </section>
  );
};

export default LeftInfoWithRightImage;
