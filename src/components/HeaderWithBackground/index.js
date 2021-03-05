import Text from "../Text";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";

const HeaderWithBackground = ({
  mobBackground,
  webBackground,
  title = "",
  subtitle = "",
  containerStyles = {},
  subtitleClassName = ''
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      {title !== "" ? (
        <section
          className={"header-with-background-container"}
          style={{
            ...containerStyles,
            backgroundImage: `url(${isMobile ? mobBackground : webBackground})`,
          }}
        >
          <Text
            size={isMobile ? 16 : 16}
            className={"header-with-background-join-us"}
            type={"kSemiBold"}
            animationType={"fade-in"}
            color={"white"}
          >
            {title}
          </Text>
          <Text
            size={isMobile ? 75 : 75}
            className={`header-with-background-upcoming-events ${subtitleClassName}`}
            type={"kBold"}
            animationType={"fade-in"}
            color={"white"}
          >
            {subtitle}
          </Text>
        </section>
      ) : null}
    </>
  );
};

export default HeaderWithBackground;
