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
  withoutRightPadding = false,
  titleClassName = '',
  descriptionClassName = '',
  descriptions = [description],
  btnAdditionalComponent = null,
  onClick = () => {},
  imageClassName = '',
  containerStyles = {},
  isComingSoon = false
}) => {
  const { isMobile } = useWindowDimensions();
  console.log({ isMobile });

  return (
    <section className={"left-info-with-right-image-container"}
             style={{...containerStyles, paddingRight: withoutRightPadding ? 0 : null}}>
      {mainTitle && (
        <Title
          title={mainTitle}
          className={"left-info-with-right-image-title"}
        />
      )}
      <div
        className={`left-info-with-right-image-info-container 
        ${isLeftImage ? 'left-info-with-right-image-info-container-reverse' : ''}
        ${withoutRightPadding ? 'without-padding-right' : ''}`}
        // style={{ flexDirection: isLeftImage ? "row-reverse" : "row", paddingLeft: withoutRightPadding ? '4vw' : null }}
      >
        <div
          className={"left-info-with-right-image-text-container"}
          style={{ marginRight: !isLeftImage && !isMobile ? 140 : 0 }}
        >
          <Text
            animationType={"fade-up"}
            size={50}
            mobSize={35}
            type={"kBold"}
            className={`${titleClassName} left-info-with-right-image-container-title`}
          >
            {title}
          </Text>
          {
            descriptions.map((descriptionTitle, index) => {
              return (
                  <Text
                      key={index + descriptionTitle}
                      animationType={"fade-up"}
                      className={`${descriptionClassName} left-info-with-right-image-container-description`}
                      size={20}
                      mobSize={16}
                      type={"kLight"}
                      textStyles={{ lineHeight: isMobile ? "26px" : "30px", fontWeight: 300 }}
                  >
                    {descriptionTitle}
                  </Text>
              )
            })
          }

          {btnTitle && (
            <Button
              // size={'.9vw'}
              size={14}
              title={btnTitle}
              additionalComponent={btnAdditionalComponent}
              onClick={onClick}
              isComingSoon={isComingSoon}
            />
          )}
        </div>
        <img
          src={imgUrl}
          data-aos="fade-in"
          className={`left-info-with-right-image-image ${imageClassName}`}
          style={{ marginRight: isLeftImage && !isMobile ? 140 : 0 }}
        />
      </div>
    </section>
  );
};

export default LeftInfoWithRightImage;
