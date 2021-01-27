import React from "react";
import Text from "../Text";
import Subtitle from "../Subtitle";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const JobOfferTitle = ({
  title = "",
  subtitle = "",
  imgURL = "",
  withHeaderTitleWithImg,
  color = "black",
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      {withHeaderTitleWithImg ? (
        <div className={`job-offer-title-container`}>
          <div className={"job-offer-title-title-container"}>
            <Text
              type={"semiBold"}
              mobSize={14}
              color={color}
              size={'1vw'}
              // size={16}
              animationType={"fade-in"}
              textStyles={{ letterSpacing: 4}}
              containerStyles={{marginBottom: 15 }}
            >
              {title}
            </Text>
            <Text
              type={"thin"}
              size={'6.5vw'}
              // size={104}
              color={color}
              textStyles={{ lineHeight: isMobile ? "105px" : '6.6vw' }}
              containerStyles={{ padding: 0 }}
            >
              {subtitle}
            </Text>
          </div>
          <div
            className={"job-offer-title-with-image-container"}
            data-aos="fade-in"
          >
            <img src={imgURL} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default JobOfferTitle;
