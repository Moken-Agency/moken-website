import Text from "../Text";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";
import ArrowUpRight from "../../images/arrow-up-right-black.svg";
import ArrowUpRightWhite from "../../images/arrow-up-right-white.svg";

//blockType = middle | big
const ColorBlock = ({
  title = "",
  subtitle = "",
  backgroundColor = "",
  className = "",
  textWidth = "36vw",
  textColor = "white",
  // size = '4.06vw',
  // size = 40,
  withIcon = false,
  // type = "kLight",
  // mobSize = 32,
  // blockType = "big",
  containerStyles = {},
  onClick = () => {},
                      titleClassName = '',
                      titleContainerStyles = {}
}) => {
  const { isMobile } = useWindowDimensions();
  // const mobSizeTemp = blockType === "middle" ? 32 : mobSize;
  // const sizeTemp = blockType === "middle" ? 40 : size;
  // const typeTemp = blockType === "middle" ? "kLight" : type;
  const blockType = 'middle';
  const size = 40;
  const type = "kLight";
  const mobSize = 32;

  return (
    <>
      {backgroundColor !== "" ? (
        <section
          data-aos="fade-up"
          className={`block-container ${className} ${blockType}`}
          style={{ ...containerStyles, backgroundColor }}
        >
          <Text
            size={size}
            type={type}
            mobSize={mobSize}
            color={textColor}
            animationType={"fade-in"}
            className={`block-container-history ${titleClassName}`}
            textStyles={{fontWeight: 100, ...titleContainerStyles, lineHeight: isMobile ? "35px" : '50px'}}
            containerStyles={{ maxWidth: isMobile ? "auto" : textWidth }}
          >
            {title}
          </Text>
          <div style={{ display: "flex", alignItems: "center", cursor: 'pointer' }} onClick={onClick}>
            <Text
              size={16}
              type={"kSemiBold"}
              // type={"semiBold"}
              mobSize={"3vw"}
              animationType={"fade-in"}
              textStyles={{ letterSpacing: isMobile ? 3 : 4 }}
              className={"block-container-connect"}
              color={textColor}
            >
              {subtitle}
            </Text>
            {withIcon ? (
              <img
                src={textColor === "black" ? ArrowUpRight : ArrowUpRightWhite}
                data-aos="fade-in"
                className={"color-block-image"}
              />
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ColorBlock;
