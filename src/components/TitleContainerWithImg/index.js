import React from "react";
import Text from "../Text";
import Subtitle from "../Subtitle";
import "./index.scss";
import Title from "../Title";
import Description from "../Description";
import SubmitYourResume from "../SubmitYourResume";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const TitleContainerWithImg = ({
  title = "",
  description = "",
  imgURL = "",
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      {title ? (
        <div className={"with-title-container-with-img-container"}>
          <div className={"with-title-container-with-img-title-container"}>
            <Title
              title={title}
              containerStyles={{ marginBottom: isMobile ? 50 : "4vw" }}
            />
            <Description
              description={description}
              size={20}
              mobSize={16}
              className={"with-title-container-with-img-description"}
            />
            <SubmitYourResume
              color={"black"}
              className={"with-title-container-with-img-submit"}
            />
          </div>
          <img src={imgURL} />
        </div>
      ) : null}
    </>
  );
};

export default TitleContainerWithImg;
